import api from './index';

const postsApi = {
    getAllPosts: () => {
        return api.get('/posts')
    },
    getPostById: (id) => {
        return api.get(`/posts/${id}`);
    },
    getUserInfo: (id) => {
        return api.get(`/users/${id}`);
    }
}

export default postsApi;