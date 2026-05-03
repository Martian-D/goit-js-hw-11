import axios from 'axios';

export function getImagesByQuery(query) {
  const API_KEY = '55696654-5263066477aa053d936427b42';
  return axios
    .get('https://pixabay.com/api/', {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    })
    .then(res => {
      return res.data;
    });
}
