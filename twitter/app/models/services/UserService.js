const User = require('./../../../app/models/User')

class UserService{
    static create(id, username, name){
        return new User(id, username, name, "Sin bio")
    }

    static getInfo(user){
        return [user.getId, user.getUsername, user.getName, user.getBio]
    }

    static updateUserUsername(user, newId){
        user.username = newId
        return user.id
    }

    static getAllUsernames(user){
        return [user[0].username, user[1].username, user[2].username]
    }
}

module.exports = UserService
