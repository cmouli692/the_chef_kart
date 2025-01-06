const Post = require("../models/Post")
const User = require("../models/User")

exports.getAllPosts = async (req, res) => {
    try {
        const posts = await Post.findAll({include : User})
        res.status(200).json(posts)
        
    } catch (err) {

        res.status(500).json({error: err.message})
        
    }
}

exports.createPost = async(req,res) => {
    try {

        const {title, description , userId , images } = req.body
        const post  = await Post.create({title, description,userId,images})
        const user = await User.findByPk(userId)
        user.postCount += 1 
        await user.save()
        res.status(201).json(post)
        
    } catch (err) {
        res.status(500).json({error : err.message})
        
    }
}