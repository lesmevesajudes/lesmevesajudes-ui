/* global describe, it, toEqual */
import PersonsReducer, {initPersonState, serialize} from "./PersonsReducer";
import {addPerson, removePerson} from "./PersonsActions";

describe("PersonsReducer", () => {
  it("should add a person", () => {
    expect(
        serialize(
            PersonsReducer(
                initPersonState(),
                addPerson({
                  id: "2j32j3l2jlj23",
                  dateBorn: "2010-12-12",
                  name: "Maria"
                })
            )
        )
    ).toEqual([
      {
        id: "2j32j3l2jlj23",
        dateBorn: "2010-12-12",
        name: "Maria"
      }
    ]);
  }),
      it("should add a person to a preexisting person", () => {
        expect(
            serialize(
                PersonsReducer(
                    initPersonState([
                      {
                        id: "2j32j3l2jlj23",
                        dateBorn: "2010-12-12",
                        name: "Maria"
                      }
                    ]),
                    addPerson({
                      id: "de2e3ee233ede",
                      dateBorn: "2010-12-12",
                      name: "Maria"
                    })
                )
            )
        ).toEqual([
          {
            id: "2j32j3l2jlj23",
            dateBorn: "2010-12-12",
            name: "Maria"
          },
          {
            id: "de2e3ee233ede",
            dateBorn: "2010-12-12",
            name: "Maria"
          }
        ]);
      }),
      it("add should update a person to if id exists", () => {
        expect(
            serialize(
                PersonsReducer(
                    initPersonState([
                      {
                        id: "de2e3ee233ede",
                        dateBorn: "2010-12-12",
                        name: "Maria"
                      }
                    ]),
                    addPerson({
                      id: "de2e3ee233ede",
                      dateBorn: "2010-12-12",
                      name: "Maria"
                    })
                )
            )
        ).toEqual([
          {
            id: "de2e3ee233ede",
            dateBorn: "2010-12-12",
            name: "Maria"
          }
        ]);
      }),
      it("add remove a person", () => {
        expect(
            serialize(
                PersonsReducer(
                    initPersonState([
                      {
                        id: "de2e3ee233ede",
                        dateBorn: "2010-12-12",
                        name: "Maria"
                      },
                      {
                        id: "kjdhiwuehud",
                        dateBorn: "2010-10-12",
                        name: "Pere"
                      }
                    ]),
                    removePerson("de2e3ee233ede")
                )
            )
        ).toEqual([
          {
            id: "kjdhiwuehud",
            dateBorn: "2010-10-12",
            name: "Pere"
          }
        ]);
      });
});
