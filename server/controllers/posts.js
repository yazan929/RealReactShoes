import PostMessage from '../models/postMessage.js';


export const getPosts = async (req,res) =>{
    try{
        const postMessage = await PostMessage.find();

        console.log(postMessage)

        res.status(200).json(postMessage);
    }catch(error){
        res.status(404).json({message: error.message});
}

}


// TODO later
export const createPost = (req, res) => {

    res.send('Post creation!');

}

