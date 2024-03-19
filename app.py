# app.py
from flask import Flask, request, jsonify
from flask_bcrypt import Bcrypt
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity
# from flask_uploads import UploadSet, IMAGES, configure_uploads
from pymongo import MongoClient
from bson import ObjectId
import os

app = Flask(__name__)

app.config['JWT_SECRET_KEY'] = 'project-cli-poc'  # Change this to a random, secret key
app.config['UPLOADS_DEFAULT_DEST'] = 'images'  # Configure the upload folder
app.config['UPLOADED_IMAGES_DEST'] = 'images'

# Define allowed image extensions
UPLOAD_FOLDER = 'uploads'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
os.makedirs(app.config['UPLOAD_FOLDER'], exist_ok=True)

# initial jwt and bcrypt
jwt = JWTManager(app)
bcrypt = Bcrypt(app)

# MongoDB connection
client = MongoClient('mongodb://localhost:27017/')
db = client['infomed']  # Replace 'your_database' with your database name
collection = db['users']  # Replace 'your_collection' with your collection name

# Login endpoint
@app.route('/login', methods=['POST'])
def login():
    data = request.json
    email = data.get('email')
    password = data.get('password')

   # Check if required fields are provided
    if not email or not password:
        return jsonify({'message': 'Email and password are required fields'}), 400

    # Check if user with provided email exists
    user = collection.find_one({'email': email})
    if not user:
        return jsonify({'message': 'Invalid email or password'}), 401

    # Check if password is correct
    if not bcrypt.check_password_hash(user['password'], password):
        return jsonify({'message': 'Invalid email or password'}), 401

    # Generate JWT token
    access_token = create_access_token(identity=str(user['_id']), additional_claims={'email': email})

    return jsonify({'access_token': access_token, 'user_details': str(user)}), 200

# Create a new user
@app.route('/register', methods=['POST'])
def register_user():
    data = request.json
    name = data.get('name')
    age = data.get('age')
    email = data.get('email')
    phone = data.get('phone')
    gender = data.get('gender')
    user_type = data.get('user_type')
    address = data.get('address')
    surgery_date = data.get('surgery_date')
    password = data.get('password')

    # Check if required fields are provided
    if not email or not password:
        return jsonify({'message': 'Username, email, and password are required fields'}), 400

    # Check if user with provided email already exists
    existing_user = collection.find_one({'email': email})
    if existing_user:
        return jsonify({'message': 'User with this email already exists'}), 409

    # Hash the password before saving it to the database
    hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')

    # Create a new user object
    new_user = {
        'name': name,
        'age': age,
        'email': email,
        'phone': phone,
        'gender': gender,
        'user_type': user_type,
        'address': address,
        'surgery_date': surgery_date,
        'password': hashed_password
    }

    # Insert the new user into the database
    inserted_user = collection.insert_one(new_user)

    # Construct the response JSON
    response_data = {
        'message': 'User registered successfully',
        'data': {
            'user_id': str(inserted_user.inserted_id),  # Convert ObjectId to string
            'user_info': str(new_user),
        }
    }
    return jsonify(response_data), 201

# Get all users
@app.route('/users', methods=['GET'])
@jwt_required()
def get_all_users():
    current_user = get_jwt_identity()
    if current_user:
        users = list(collection.find())
        for user in users:
            user['_id'] = str(user['_id'])
        return jsonify(users), 200
    else:
        return jsonify({'message': 'User not authenticated'}), 401

# Get a single user by ID
@app.route('/users/<string:user_id>', methods=['GET'])
@jwt_required()
def get_user(user_id):
    current_user = get_jwt_identity()
    if current_user:
        user = collection.find_one({'_id': ObjectId(user_id)})
        if user:
            user['_id'] = str(user['_id'])
            return jsonify(user), 200
        else:
            return jsonify({'message': 'User not found'}), 404
    else:
        return jsonify({'message': 'User not authenticated'}), 401

# Update a user by ID
@app.route('/users/<string:user_id>', methods=['PUT'])
def update_user(user_id):
    data = request.json
    updated_user = collection.update_one({'_id': ObjectId(user_id)}, {'$set': data})
    if updated_user.modified_count == 1:
        return jsonify({'message': 'User updated successfully'}), 200
    else:
        return jsonify({'message': 'User not found'}), 404

# Delete a user by ID
@app.route('/users/<string:user_id>', methods=['DELETE'])
def delete_user(user_id):
    deleted_user = collection.delete_one({'_id': ObjectId(user_id)})
    if deleted_user.deleted_count == 1:
        return jsonify({'message': 'User deleted successfully'}), 200
    else:
        return jsonify({'message': 'User not found'}), 404

# Route for file upload
@app.route('/upload', methods=['POST'])
def upload_file():
    # Check if the POST request has the file part
    if 'file' not in request.files:
        return jsonify({'error': 'No file part in the request'}), 400

    file = request.files['file']

    # If the user does not select a file, the browser submits an empty file without a filename
    if file.filename == '':
        return jsonify({'error': 'No selected file'}), 400

    if file:
        # Save the file to the specified directory
        filename = file.filename
        file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
        return jsonify({'message': 'File uploaded successfully', 'filename': filename}), 200


# Protected route example
@app.route('/protected', methods=['GET'])
@jwt_required()
def protected():
    return jsonify({'message': 'This is a protected endpoint'})

if __name__ == '__main__':
    app.run(debug=True)
