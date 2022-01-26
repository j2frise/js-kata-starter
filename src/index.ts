export enum Type {
    error = 'ERROR',
    success = 'RESULT'
}
export interface FractionDTO {
    numerator: number;
    denominator: number;
}
export interface ResultOrError {
    type: Type,
    response: FractionDTO | string
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

function scaleDown({ numerator, denominator }: FractionDTO, factor: number): FractionDTO {
    return {
        numerator: numerator / factor,
        denominator: denominator / factor,
    }
}

export function fractionCalc(fraction1: FractionDTO, fraction2: FractionDTO): ResultOrError {
    let denominator: number = fraction1.denominator * fraction2.denominator;
    let numerator: number = (fraction1.numerator * fraction2.denominator) + (fraction2.numerator * fraction1.denominator);
    let pgcdValue: number = pgcd(numerator, denominator);

    let result = scaleDown({ numerator, denominator }, pgcdValue)
    if (result.denominator == 0) {
        return { type: Type.error, response: "incorrect operation, division by 0" };
    }

    return { type: Type.success, response: result };
}