import IPost from '../types/IPost';
import axios from 'axios';

class PostDataService {
    getAll() {
        return axios.get<Array<IPost>>("https://jsonplaceholder.typicode.com/posts");
      }
}

export default new PostDataService();