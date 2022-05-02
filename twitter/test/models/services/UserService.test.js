const UserService = require('./../../../app/models/services/UserService')

describe("Tests for UserService", () => {
    test("1. Create a new user using the UserService", () => {
        const user = UserService.create(1, "kidojikuto", "Kido")
        expect(user.username).toBe("kidojikuto")
        expect(user.id).toBe(1)
        expect(user.bio).not.toBeUndefined()
    }),

    test("2. Get all user data in a list", () => {
        const user = UserService.create(1, "kidojikuto", "Kido")
        const userInfoInList = UserService.getInfo(user)
        
        expect(userInfoInList[0]).toBe(1)
        expect(userInfoInList[1]).toBe("kidojikuto")
        expect(userInfoInList[2]).toBe("Kido")
        expect(userInfoInList[3]).toBe("Sin bio")
    }), 

    test("3. Update username", () => {
        const user = UserService.create(1, "kidojikuto", "Kido")
        UserService.updateUserUsername(user, "kidojikutokimo")
        expect(user.username).toBe("kidojikutokimo")
    }),

    test("4. Given a list of users give me the list of usernames", () => {
        const user1 = UserService.create(1, "kidojikuto1", "Kido")
        const user2 = UserService.create(1, "kidojikuto2", "Kido")
        const user3 = UserService.create(1, "kidojikuto3", "Kido")
        const usernames = UserService.getAllUsernames([user1, user2, user3])
        expect(usernames).toContain("kidojikuto1")
        expect(usernames).toContain("kidojikuto2")
        expect(usernames).toContain("kidojikuto3")
    })

})

const UserView = require('./../../../app/models/views/UserView')
describe("Tests for UserView", () => {
    test("Return an error object when try to create a new user with an null payload", () => {
        const payload = null
        const result = UserView.createUser(payload)
        expect(result.error).toMatch(/payload no existe/)
    }), 

    test("Return an error object when try to create a new user with a payload with invalid properties", () => {
        const payload = {username: null, name:12, id: "id"}
        const result = UserView.createUser(payload)
        expect(result.error).toMatch(/necesitan tener un valor valido/)
    }),

    test("Return an error object when try to create a new user with a payload with missing properties", () => {
        const payload = {username: "Username"}
        const result = UserView.createUser(payload)
        expect(result.error).toMatch(/necesitan tener un valor valido/)
    }), 

    test("Create a user by given valid payload", () => {
        const payload = {username: "username", id: 1, name:"name"}
        const result = UserView.createUser(payload)
        expect(result.name).toBe("name")
        expect(result.username).toBe("username")
        expect(result.id).toBe(1)
    })
})
