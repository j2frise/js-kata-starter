import { fractionCalc } from './index';


describe("Testing fractionCalc", () => {
  it("That's a test!", function () {
    const fraction1 = "5/5";
    const fraction2 = "5/5";
    const result = fractionCalc(fraction1, fraction2);
    const correct = "2"

    expect(result).toEqual(correct);
  });
});
