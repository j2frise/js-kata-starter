function pgcd(a: number | string, b: number | string) {
    a = Math.abs(typeof a == "string" ? Number(a.split("/")[1]) : a);
    b = Math.abs(typeof b == "string" ? Number(b.split("/")[1]) : b);

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

export function fractionCalc(fraction1: string, fraction2: string): string {
    let divider: number = 1,
        tempResult: number = 0,
        pgcdValue: number = 1;

    let splitFaction1 = fraction1.split("/"),
        splitFaction2 = fraction2.split("/");

    if (splitFaction1.length != 2 || splitFaction2.length != 2) {
        return tempResult.toString();
    }

    let num1: number = Number(splitFaction1[0]) ?? 0,
        div1: number = Number(splitFaction1[1]) ?? 0,
        num2: number = Number(splitFaction2[0]) ?? 0,
        div2: number = Number(splitFaction2[1]) ?? 0;

    if (div1 == div2) {
        tempResult = num1 + num2;
        divider = div1;
    } else {
        tempResult = (num1 * div2) + (num2 * div1);
        divider = div1 * div2;
    }
    pgcdValue = pgcd(tempResult, divider);

    while (pgcdValue != 1) {
        tempResult /= pgcdValue;
        divider /= pgcdValue;
        pgcdValue = pgcd(tempResult, divider);
    }
    let result = divider == 1 ? tempResult : tempResult + "/" + divider;

    if (typeof result == "string") {
        let splitResult = result.split("/");
        if (splitResult[0] == splitResult[1]) {
            result = 1;
        } else if (splitResult[1] == "0") {
            result = "incorrect operation, division by 0";
        }
    }
    return result.toString();
}