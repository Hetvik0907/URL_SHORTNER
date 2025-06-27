//axios instance banao
import axios from 'axios';

const axiosinstance = axios.create({
    baseURL: 'http://localhost:3000'
});


// Response interceptor for handling errors
axiosinstance.interceptors.response.use(
  (response) => {
    // Any status code within the range of 2xx
    return response;
  },
  (error) => {
    let errorMessage = 'Something went wrong';
    
    if (error.response) {
      // The server responded with a status code outside the 2xx range
      const status = error.response.status;
      
      switch (status) {
        case 400:
          errorMessage = error.response.data?.message || 'Bad request';
          break;
        case 401:
          errorMessage = 'Unauthorized - Please login again';
          // You could trigger a logout or redirect to login here
          break;
        case 403:
          errorMessage = 'Forbidden - You don\'t have permission';
          break;
        case 404:
          errorMessage = 'Resource not found';
          break;
        case 500:
          errorMessage = 'Server error - Please try again later';
          break;
        default:
          errorMessage = `Error ${status}: ${error.response.data?.message || 'Something went wrong'}`;
      }
      
      console.error('API Error:', {
        status: error.response.status,
        data: error.response.data,
        url: error.config.url
      });
    } else if (error.request) {
      // The request was made but no response was received
      errorMessage = 'No response from server - Please check your connection';
      console.error('Network Error:', error.request);
    } else {
      // Something happened in setting up the request
      errorMessage = error.message;
      console.error('Request Error:', error.message);
    }
    
    // You can dispatch to a global error state here if using Redux/Context
    // Or show a toast notification
    
    // Return a rejected promise with the error message
    return Promise.reject({
      originalError: error,
      message: errorMessage
    });
  }
);

  export default axiosinstance;
