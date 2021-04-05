import axios from "axios";

const url = "http://localhost:8080/api/users";

export const fetchPosts = () => axios.get(url);
