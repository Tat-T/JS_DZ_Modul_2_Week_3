const {
    analyzeString,
    numberToText,
    swapCaseAndReplaceDigits,
    cssToCamelCase,
    toAbbreviation,
    joinStrings,
    calculator,
    parseURL,
    splitString,
    formatString
} = require('./script');

test('analyzeString', () => {
    expect(analyzeString("Hello, World! 123")).toEqual({ letters: 10, digits: 3, others: 4 });
});

test('numberToText', () => {
    expect(numberToText(35)).toBe("тридцать пять");
    expect(numberToText(89)).toBe("восемьдесят девять");
    expect(numberToText(12)).toBe("двенадцать");
    expect(numberToText(5)).toBe("Число не является двузначным");
});

test('swapCaseAndReplaceDigits', () => {
    expect(swapCaseAndReplaceDigits("Hello123World")).toBe("hELLO___wORLD");
});

test('cssToCamelCase', () => {
    expect(cssToCamelCase("font-size")).toBe("fontSize");
    expect(cssToCamelCase("background-color")).toBe("backgroundColor");
    expect(cssToCamelCase("text-align")).toBe("textAlign");
});

test('toAbbreviation', () => {
    
    expect(toAbbreviation("cascading style sheets")).toBe("CSS");
    expect(toAbbreviation("объектно-ориентированное программирование")).toBe("ООП");
    expect(toAbbreviation("hyper-text markup language")).toBe("HTML");
    expect(toAbbreviation("well-known fact")).toBe("WKF");
});

test('joinStrings', () => {
    expect(joinStrings("Hello", " ", "World", "!")).toBe("Hello World!");
});

test('calculator', () => {
    expect(calculator("12+34")).toBe(46);
    expect(calculator("10/2")).toBe(5);
    expect(calculator("5*3")).toBe(15);
    expect(calculator("20-4")).toBe(16);
});

test('parseURL', () => {
    expect(parseURL("https://itstep.org/ua/about")).toEqual({ protocol: "https", domain: "itstep.org", path: "/ua/about" });
});

test('splitString', () => {
    expect(splitString("10/20/2020", '/')).toEqual(["10", "20", "2020"]);
});

test('formatString', () => {
    expect(formatString("Today is %1, %2.%3.%4", "Monday", 10, 8, 2020)).toBe("Today is Monday, 10.8.2020");
});