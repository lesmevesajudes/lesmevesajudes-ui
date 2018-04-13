/* global describe, it, toEqual */
import AdultsReducer, {initAdultState, serialize} from "./AdultsReducer";
import {addPerson, removePerson} from "./PersonsActions";

describe("AdultsReducer", () => {
  it("should add a person", () => {
    expect(
        serialize(
            AdultsReducer(
                initAdultState(),
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
                AdultsReducer(
                    initAdultState([
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
                AdultsReducer(
                    initAdultState([
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
                AdultsReducer(
                    initAdultState([
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
