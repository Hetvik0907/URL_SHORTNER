
import axios from 'axios';
import axiosinstance from '../utils/axiosinstance';

export const createshorturl = async(url) =>{
  const {data} = await axiosinstance.post("http://localhost:3000/api/create",{url})
  return data; 
} 