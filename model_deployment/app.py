import os
from flask import Flask, request, jsonify
import boto3
import torch
import torchvision.transforms as transforms
from PIL import Image
import io
import torch.nn.functional as F
import hashlib

UPLOAD_FOLDER = './upload'

app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

MODEL_PATH='model_mobilenet.pt'
hash_map = {}


def sha256sum(file_desc):  
    return hashlib.md5(file_desc.read()).hexdigest()

def load_model():
    '''
    This method is used for loading model in onnyx format
    '''
    model = None

    try:
        if os.path.isfile(MODEL_PATH) == True:
            with open(MODEL_PATH, 'rb') as f:
                bytestream = io.BytesIO(f.read())
                model = torch.jit.load(bytestream)
    except Exception as e:
        print(repr(e))
        raise(e)
    print('model. is ready..')
    return model

model = load_model()

def transform_image(fdesc):
    
    try:
        transformations = transforms.Compose([
                          transforms.Resize(256),
                          transforms.CenterCrop(224),
                          transforms.ToTensor(),
                          ]
                          )
        image = Image.open(fdesc)
        return transformations(image).unsqueeze(0)
    except Exception as e:
        print(repr(e))
        raise(e)
                                                            
def get_prediction(fdesc):
    '''
    This method is used for prediction of image. If the image is
    already predicted use 
    
    Args:
        fdesc: File Descriptor
        
    Returns:
        prediction: If wound is present return 1 else return 0
        confidence: Confidence score of prediction
        
    '''
    global model
    global hash_map
    hash_code = sha256sum(fdesc)
    if hash_code in hash_map:
        return hash_map[hash_code]

    tensor = transform_image(fdesc)
    out_tensor = model(tensor)
    softmax_tensor = F.softmax(out_tensor)

    prediction, confidence = out_tensor.argmax().item(), softmax_tensor[0][1].item()
    hash_map[hash_code] = ( prediction, confidence)
    return prediction, confidence


@app.route('/upload', methods=['GET', 'POST'])
def upload_file():
    '''
    This is the main method used for predicting image
    '''
    if request.method == 'POST':
        if 'file1' not in request.files:
            return jsonify({'error': 'No file part in the request'}), 400
        file1 = request.files['file1']

        if file1.filename == '':
            return jsonify({'error': 'No selected file'}), 400
        pred = get_prediction(file1)
        return jsonify({'prediction': str(pred[0]), 'confidence': str(pred[1])}), 200
    return '''
           <h1>Upload new File</h1>
           <form method="post" action="/upload" enctype="multipart/form-data">
           <input type="file" name="file1">
           <input type="submit">
           </form>
           '''

if __name__ == '__main__':
    app.run('0.0.0.0')
