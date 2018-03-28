/* global describe, it, toEqual */
import AdultsReducer, { initAdultState, serialize } from "./AdultsReducer";
import { addAdult, removeAdult } from "./AdultsActions";

describe("AdultsReducer", () => {
	it("should add a adult", () => {
		expect(
			serialize(
				AdultsReducer(
					initAdultState(),
					addAdult({
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
		it("should add a adult to a preexisting adult", () => {
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
						addAdult({
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
		it("add should update a adult to if id exists", () => {
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
						addAdult({
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
		it("add remove a adult", () => {
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
						removeAdult("de2e3ee233ede")
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
