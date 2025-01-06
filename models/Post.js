const {DataTypes} = require("sequelize")

const sequelize = require("../config/database")

const Post = sequelize.define("Post" ,{
    id:{ type : DataTypes.INTEGER, autoIncrement : true , primaryKey : true},
    title : {type : DataTypes.TEXT , allowNull : false},
    description : {type : DataTypes.TEXT},
    images : {type: DataTypes.JSON}
})

Post.belongsTo(User,{foreignKey : "userId"})
User.belongsTo(Post,{foreignKey : "userId"})

module.exports = Post