// define all API for project ,it calls COMMON API function 



import { Await } from "react-router-dom";
import commonApi from "./commonApi";

export const uploadVideoApi = async (videoData) => {
  return await commonApi('post', '/allVideos', videoData);
};

export const getVideoApi =async()=>{
    return await commonApi('get','/allVideos',"")
}
export const addHistory = async(historyData)=>{
  return await commonApi ('post','/allHistory' ,historyData)
}
export const getHistoryApi = async()=>{
  return await commonApi ('get','/allHistory' )
}

export const deleteHistoryApi = async(id)=>{
  return await commonApi ('delete',`/allHistory/${id}`,{} )
}
export const deleteVideoApi = async(id)=>{
  return await commonApi ('delete',`/allVideos/${id}`,{} )
}
export const addCategory = async(category)=>{
  return await commonApi ('post','/allCategories' ,category)
}
export const getCategoryApi = async()=>{
  return await commonApi ('get','/allCategories' ," ")
}

export const getSingleVideo = async(id)=>{
  return await commonApi ('get',`/allVideos/${id}`,"" )
}

export const updateCategory = async(id ,eachData)=>{
  return await commonApi ('put',`/allCategories/${id}`,eachData )
}

export const deleteCategory = async(id)=>{
  return await commonApi ('delete',`/allCategories/${id}`,{} )
}

