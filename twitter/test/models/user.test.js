const User = require('./../../app/models/User.js')

describe("Unit Tests for User class", () => {
    test('Create an User object', () => {
        //Aqui invocas el codigo que vas a usar en tu app
        const user = new User(1, "kidojikuto", "Kido", "Bio")
        //Aqui validas los resultados de ese codigo
        //Esta es una comparacion que va a igualar el valor de la izquierda con el valor de la derecha  (valor esperado)
        expect(user.id).toBe(1)
        expect(user.username).toBe("kidojikuto")
        expect(user.name).toBe("Kido")
        expect(user.bio).toBe("Bio")
        expect(user.dateCreated).not.toBeUndefined()
        expect(user.lastUpdated).not.toBeUndefined()
    })

    test('Add getters', () => {

        const user = new User(1, "kidojikuto", "Kido", "Bio")

        expect(user.getUsername).toBe("kidojikuto")
        expect(user.getBio).toBe("Bio")
        expect(user.getDateCreated).not.toBeUndefined()
        expect(user.getLastUpdated).not.toBeUndefined()
    })

    test('Add setters', () => {

        const user = new User(1, "kidojikuto", "Kido", "Bio")
        user.setUsername = "kidojikuto"
        expect(user.username).toBe("kidojikuto")

        user.setBio = "New bio"
        expect(user.bio).toBe("New bio")
    });
})