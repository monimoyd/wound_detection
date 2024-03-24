import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {
  CameraHomeScreen,
  CameraPreviewScreen,
  HistoryListScreen,
  LoginScreen,
  OnBoardingScreen,
  QueAnsScreen,
  SignupScreen,
  SignupSelectionScreen,
  SubmitPreviewScreen,
  SubmitReportScreen,
} from '../screens';
import PatientAppNavigator from './PatientApp';
import DoctorAppNavigator from './DoctorApp';
import {PatientDetailsScreen} from '../screens/PatientDetails';
import {HistoryDetailScreen} from '../screens/PatientApp/HistoryDetail';
import {SplashScreen} from '../screens/SplashScreen';

export default function RootNavigation() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          statusBarTranslucent: true,
          statusBarColor: 'transparent',
          statusBarStyle: 'dark',
        }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="onBoarding" component={OnBoardingScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen
          name="SignupSelection"
          component={SignupSelectionScreen}
        />
        <Stack.Screen name="Patient App" component={PatientAppNavigator} />
        <Stack.Screen name="Doctor App" component={DoctorAppNavigator} />
        <Stack.Screen name="Patient Camera" component={CameraHomeScreen} />
        <Stack.Screen name="Camera Preview" component={CameraPreviewScreen} />
        <Stack.Screen name="Que Ans" component={QueAnsScreen} />
        <Stack.Screen name="Submit Preview" component={SubmitPreviewScreen} />
        <Stack.Screen name="Submit Report" component={SubmitReportScreen} />
        <Stack.Screen name="Patient Details" component={PatientDetailsScreen} />
        <Stack.Screen name="History Detail" component={HistoryDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
