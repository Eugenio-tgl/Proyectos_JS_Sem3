class User{
    constructor(id, username, name, bio){
        this.id = id
        this.username = username
        this.name = name
        this.bio = bio
        this.dateCreated = new Date()
        this.lastUpdated = new Date()
    }

    get getId(){
        return this.id
    }

    get getName(){
        return this.name
    }

    get getUsername(){
        return this.username
    }

    get getDateCreated(){
        return this.dateCreated
    }

    get getBio(){
        return this.bio
    }

    get getLastUpdated(){
        return this.lastUpdated
    }

    set setUsername(newUsername){
        this.username = newUsername
    }

    set setBio(newBio){
        this.bio = newBio
    }
}
module.exports = User