import axios from 'axios';

const api = axios.create({
  baseURL: process.env.BASE_URL || 'http://localhost:5000',
  withCredentials: true, // Mandatory to send/receive cookiess
});



api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token'); // Or use a global state/store
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// RESPONSE INTERCEPTOR: Handle 401 errors automatically


api.interceptors.response.use(
  (response) => response, 
  async (error) => {
    const originalRequest = error.config;

    // If error is 401 and we haven't tried refreshing yet
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        // Call the /refresh route
        const res = await axios.post(`${process.env.BASE_URL}/refresh`, {}, { withCredentials: true });
        const { accessToken } = res.data;

        // Save new token and retry the original failed request
        localStorage.setItem('token', accessToken);
        api.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
        return api(originalRequest);
      } catch (refreshError) {
        // If refresh fails, the user must log in again
        localStorage.removeItem('token');
        window.location.href = '/login';
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);

export default api;