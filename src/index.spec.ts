import { fractionCalc, FractionDTO } from './index';


describe("Testing fractionCalc", () => {
  it("That's a test 1!", function () {
    const fraction1Test: FractionDTO = { numerator: 1, denominator: 3 };
    const fraction2Test: FractionDTO = { numerator: 1, denominator: 2 };
    const result: FractionDTO | string = fractionCalc(fraction1Test, fraction2Test);
    const correct: FractionDTO = { numerator: 5, denominator: 6 }
    expect(result).toEqual(correct);
  });

  it("That's a test 2!", function () {
    const fraction1Test: FractionDTO = { numerator: 5, denominator: 5 };
    const fraction2Test: FractionDTO = { numerator: 5, denominator: 5 };
    const result: FractionDTO | string = fractionCalc(fraction1Test, fraction2Test);
    const correct: FractionDTO = { numerator: 2, denominator: 1 }
    expect(result).toEqual(correct);
  });

  it("That's a test 3!", function () {
    const fraction1Test: FractionDTO = { numerator: 1, denominator: 2 };
    const fraction2Test: FractionDTO = { numerator: 1, denominator: 2 };
    const result: FractionDTO | string = fractionCalc(fraction1Test, fraction2Test);
    const correct = { numerator: 1, denominator: 1 }
    expect(result).toEqual(correct);
  });

  it("That's a test 4!", function () {
    const fraction1Test: FractionDTO = { numerator: 5, denominator: 3 };
    const fraction2Test: FractionDTO = { numerator: 6, denominator: 5 };
    const result: FractionDTO | string = fractionCalc(fraction1Test, fraction2Test);
    const correct = { numerator: 43, denominator: 15 }
    expect(result).toEqual(correct);
  });

  it("That's a test 5!", function () {
    const fraction1Test: FractionDTO = { numerator: 1, denominator: 0 };
    const fraction2Test: FractionDTO = { numerator: 2, denominator: 5 };
    const result: FractionDTO | string = fractionCalc(fraction1Test, fraction2Test);
    const correct = "incorrect operation, division by 0"
    expect(result).toEqual(correct);
  });
});
