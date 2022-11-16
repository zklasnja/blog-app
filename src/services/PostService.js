import { ApiService } from './ApiService';

class PostsService extends ApiService{

    async getAll() {
        const response = await this.client.get('/posts');
        
        return response.data;
    }

    async get(id) {
        const request = await this.client.get(`/posts/${id}?filter={"include":["comments"]}`)
        if (request) {
            return request.data;
        }
    }

    add(request){
        const newRequest = this.client.post('/posts', request);
        return newRequest;
    }

    edit(id, request) {
        const newRequest = this.client.patch(`/posts/${id}`, request);
        return newRequest;
    }

    async delete(id) {
        const request = await this.client.delete(`/posts/${id}`)
        return request;
    }

    async addComment(id, comment){
        const request = await this.client.post(`/posts/${id}/comments`, comment);
        return request;
    }

    async deleteComment(postId, commentId){
        const request = await this.client.delete(`/posts/${postId}/comments/${commentId}`);
        return request;
    }

    async editComment(postId, commentId, request) {
        const newRequest = await this.client.put(`/posts/${postId}/comments/${commentId}`, request);
        return newRequest.data;
    }

    async getComment(id, commentId){
        const request = await this.client.get(`/posts/${id}/comments/${commentId}`)
        if (request) {
            return request.data;
        }
    }

    async deleteAllComments(postId){
        const request = await this.client.delete(`/posts/${postId}/comments`);
        return request;
    }

    async getCommentsCount(postId){
        const request = await this.client.get(`/posts/${postId}/comments/count`);

        return request;
    }
}

export default new PostsService();