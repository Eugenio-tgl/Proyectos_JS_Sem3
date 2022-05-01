const Spiderman =require('./../app/spiderman')


describe("Unit Test for Spiderman class", () => {
    test('1) Create an spiderman object', () => {
        //Aqui escibimos el codigo que queremos usar tal cual
        //Quiero poder instanciar un objeto Spiderman con esta informacion
        const andreGarfield = new Spiderman ("Spiderman Sony", 31, "Andrew Garfield", 22, "Sony")

        //Validamos que este codigo funcione de la forma esperada
        expect(andreGarfield.name).toBe("Spiderman Sony")
        expect(andreGarfield.age).toBe(31)
        expect(andreGarfield.actor).toBe("Andrew Garfield")
        expect(andreGarfield.movies).toBe(22)
        expect(andreGarfield.studio).toBe("Sony")
    })
    test('2) Use the method getInfo()', () => {
    const tomHolland = new Spiderman("Spiderman Marvel", 25, "Tom Holland", 5, "Marvel")
    expect(tomHolland.getInfo()).toBe("Hey, I'm Tom Holland from Marvel studio")
    });
  })

  