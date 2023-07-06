import axiosCommon from "../axios";

export function getCategories(){
    return axiosCommon.get(`/categories`);
}

export function getChuckNorriesJokes(category){
    return axiosCommon.get(`random?category=${category}`)
}

export default{getCategories, getChuckNorriesJokes}