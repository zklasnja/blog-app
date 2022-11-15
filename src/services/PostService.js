import { axiosInstance } from './AxiosService';

class PostsService {

    async getAll() {
        const response = await axiosInstance.get('/posts?filter={"include":["comments"]}');
        
        return response.data;
    }

    async get(id) {
        const request = await axiosInstance.get(`/posts/${id}?filter={"include":["comments"]}`)
        if (request) {
            return request.data;
        }
    }

    add(request){
        const newRequest = axiosInstance.post('/posts', request);
        return newRequest;
    }

    edit(id, request) {
        const newRequest = axiosInstance.patch(`/posts/${id}`, request);
        return newRequest;
    }

    async delete(id) {
        const request = await axiosInstance.delete(`/posts/${id}`)
        return request;
    }

    async addComment(id, comment){
        const request = await axiosInstance.post(`/posts/${id}/comments`, comment);
        return request;
    }

    async deleteComment(postId, commentId){
        const request = await axiosInstance.delete(`/posts/${postId}/comments/${commentId}`);
        return request;
    }

    async editComment(postId, commentId, request) {
        const newRequest = await axiosInstance.put(`/posts/${postId}/comments/${commentId}`, request);
        return newRequest.data;
    }

    async getComment(id, commentId){
        const request = await axiosInstance.get(`/posts/${id}/comments/${commentId}`)
        if (request) {
            return request.data;
        }
    }

    async deleteAllComments(postId){
        const request = await axiosInstance.delete(`/posts/${postId}/comments`);
        return request;
    }
}

export default new PostsService();