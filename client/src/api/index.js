import axios from "axios";

const url = "http://ec2-54-179-117-71.ap-southeast-1.compute.amazonaws.com:8080/api/shoes";
// const url = "http://localhost:6039/all";
export const fetchPosts = () => axios.get(url);


