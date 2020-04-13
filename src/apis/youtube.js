import axios from 'axios';

const KEY = 'AIzaSyCWT7TkdKIGaXkUlstEOWQ8srNSVCUlCfY';

export const baseParams = {
  part: 'snippet',
  maxResults: 5,
  type: 'videos',
  key: KEY,
};

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
});
