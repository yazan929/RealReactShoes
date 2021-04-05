import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    name: String,
    message: String,
    photo: String,
})

const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;