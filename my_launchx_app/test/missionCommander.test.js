const MissionCommander = require('./../app/missionCommander');

describe("Unit Tests for Mission Commander Class", () => {
    test('1) Create a mission commander objet', () => {
      const result = 1 + 2 
      expect(result).toBe(3);
    });
  })

  const myMissionCommander = new MissionCommander("Woopa")
  expect(myMissionCommander.name).toBe("Woopa");