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