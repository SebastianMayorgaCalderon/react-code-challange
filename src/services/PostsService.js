import axiosInstance from "../interceptor";

export const getPosts = (success, error) => {
    axiosInstance.get('/posts').then(success,error)
}