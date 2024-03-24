import {ToastAndroid} from 'react-native';
import Api from './interceptors';

interface ApiCallProps {
  endpoint: string;
  data?: any;
  method: 'POST' | 'GET';
  extraHeaders?: any;
}

export async function ApiCall({
  endpoint,
  data,
  method,
  extraHeaders = {},
}: ApiCallProps) {
  try {
    const ApiResponse = await Api({
      url: endpoint,
      method: method,
      data: data,
      headers: {
        'Content-Type': 'application/json',
        ...extraHeaders,
      },
    });
    // ToastAndroid.show(ApiResponse?.data?.message, ToastAndroid.BOTTOM);
    return ApiResponse;
  } catch (error: any) {
    if (error?.data?.message) {
      console.log('ApiCallCache >> ', error?.data?.message);
      // ToastAndroid.show(error?.data?.message, ToastAndroid.BOTTOM);
    }
    return error;
  }
}
