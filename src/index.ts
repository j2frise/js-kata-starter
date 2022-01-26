export interface FractionDTO {
    numerator: number;
    denominator: number;
}

function pgcd(a: number, b: number): number {
    a = Math.abs(a);
    b = Math.abs(b);

    if (b > a) {
        var tmp = a;
        a = b;
        b = tmp;
    }

    while (true) {
        if (b == 0) return a;
        a %= b;
        if (a == 0) return b;
        b %= a;
    }
}

export function fractionCalc(fraction1: FractionDTO, fraction2: FractionDTO): string {
    let divider: number = 1,
        tempResult: number = 0,
        pgcdValue: number = 1;

    if (fraction1.denominator == fraction2.denominator) {
        tempResult = fraction1.numerator + fraction2.numerator;
        divider = fraction1.denominator;
    } else {
        tempResult = (fraction1.numerator * fraction2.denominator) + (fraction2.numerator * fraction1.denominator);
        divider = fraction1.denominator * fraction2.denominator;
    }
    pgcdValue = pgcd(tempResult, divider);

    while (pgcdValue != 1) {
        tempResult /= pgcdValue;
        divider /= pgcdValue;
        pgcdValue = pgcd(tempResult, divider);
    }
    let result = divider == 1 ? tempResult : tempResult + "/" + divider;

    if (typeof result == "string" && result.split("/")[1] == "0") {
        result = "incorrect operation, division by 0";
    }

    return result.toString();
}