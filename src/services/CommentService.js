import axiosInstance from "../interceptor";

export const getComments = (success, error) => {
    axiosInstance.get('/comments').then(success,error)
}