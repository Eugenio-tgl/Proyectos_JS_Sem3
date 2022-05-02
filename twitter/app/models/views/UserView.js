const UserService = require("../services/UserService")

class Userview{
  
  static createUser(payload){
    if (payload === null) {
      return { error: "payload no existe"}
    }

    if (payload.username === null || payload.name === null || payload.id === null) {
      return { error: "necesitan tener un valor valido"}
    }

    if (!(Object.keys(payload).includes('username') && Object.keys(payload).includes('name') && (Object.keys(payload).includes('id')))) {
      return { error: "necesitan tener un valor valido"}
    }

    else {
      return UserService.create(payload.id, payload.username, payload.name)
    }
      
    }
}

module.exports = Userview