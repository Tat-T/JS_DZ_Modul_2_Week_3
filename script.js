// 1. Написать функцию, которая принимает строку и выводит 
// статистику о ней: количество букв, количество цифр и 
// количество других знаков.

function analyzeString(str) {
    let letters = 0, digits = 0, others = 0;
    
    for (let char of str) {
        if (/[a-zA-Z]/.test(char)) {
            letters++;
        } else if (/\d/.test(char)) {
            digits++;
        } else {
            others++;
        }
    }
    
    return { letters, digits, others };
}

console.log(analyzeString("Hello, World! 123"));

// 2. Написать функцию, которая принимает двузначное число 
// и возвращает его в текстовом виде. 
// Например: 35 - тридцать пять, 89 - восемьдесят девять, 12 - двенадцать

function numberToText(num) {
    const units = ["", "один", "два", "три", "четыре", "пять", "шесть", "семь", "восемь", "девять"];
    const teens = ["", "одиннадцать", "двенадцать", "тринадцать", "четырнадцать", "пятнадцать", "шестнадцать", "семнадцать", "восемнадцать", "девятнадцать"];
    const tens = ["", "десять", "двадцать", "тридцать", "сорок", "пятьдесят", "шестьдесят", "семьдесят", "восемьдесят", "девяносто"];
    
    let text = '';
    
    if (num < 10 || num > 99) return "Число не является двузначным";
    
    if (num % 10 === 0) {
        text = tens[Math.floor(num / 10)];
    } else if (num > 10 && num < 20) {
        text = teens[num % 10];
    } else {
        text = tens[Math.floor(num / 10)] + " " + units[num % 10];
    }
    
    return text;
}

console.log(numberToText(35));  // "тридцать пять"

// 3. Написать функцию, которая заменяет в полученной строке 
// большие буквы на маленькие, маленькие – на большие, а 
// цифры – на знак нижнего подчеркивания.

function swapCaseAndReplaceDigits(str) {
    let result = '';
    
    for (let char of str) {
        if (/[a-z]/.test(char)) {
            result += char.toUpperCase();
        } else if (/[A-Z]/.test(char)) {
            result += char.toLowerCase();
        } else if (/\d/.test(char)) {
            result += '_';
        } else {
            result += char;
        }
    }
    
    return result;
}

console.log(swapCaseAndReplaceDigits("Hello123World"));  // "hELLO___wORLD"

// 4. Написать функцию, которая преобразует названия css стилей с дефисом в название в СamelСase стиле: font-size
// в fontSize, background-color в backgroundColor, textalign в textAlign.

function cssToCamelCase(cssString) {
    return cssString.replace(/-([a-z])/g, function(match, p1) {
        return p1.toUpperCase();
    });
}

console.log(cssToCamelCase("font-size"));  // "fontSize"
console.log(cssToCamelCase("background-color"));  // "backgroundColor"

// 5. Написать функцию, которая принимает словосочетание 
// и превращает его в аббревиатуру. 
// Например: cascading style sheets в CSS, объектно-ориентированное программирование в ООП.

function toAbbreviation(phrase) {
    return phrase.split(/[ -]/).map(word => word.charAt(0).toUpperCase()).join('');
}

console.log(toAbbreviation("cascading style sheets"));  // "CSS"
console.log(toAbbreviation("объектно-ориентированное программирование"));  // "ООП"
console.log(toAbbreviation("hyper-text markup language"));  // "HTML"
console.log(toAbbreviation("well-known fact"));  // "WKF"

// 6. Написать функцию, которая принимает любое количество строк, объединяет их в одну длинную строку и 
// возвращает ее.

function joinStrings(...strings) {
    return strings.join('');
}

console.log(joinStrings("Hello", " ", "World", "!"));  // "Hello World!"

// 7. Написать функцию – калькулятор. Функция принимает 
// строку с примером, определяет, какое действие необходимо 
// выполнить (+ - * /), переводит операнды в числа, решает 
// пример и возвращает результат.

function calculator(expression) {
    const operators = /[+\-*/]/;
    let operator = expression.match(operators)[0];
    let [operand1, operand2] = expression.split(operator).map(Number);
    
    switch (operator) {
        case '+':
            return operand1 + operand2;
        case '-':
            return operand1 - operand2;
        case '*':
            return operand1 * operand2;
        case '/':
            return operand1 / operand2;
        default:
            return null;
    }
}

console.log(calculator("12+34"));  // 46
console.log(calculator("10/2"));  // 5

// 8. Написать функцию, которая получает url и выводит подробную информацию о нем. 
// Например: url “https://itstep.org/ua/about”, информация "протокол: https, домен: itstep.org, путь: /ua/about".
// { protocol: "https", domain: "itstep.org", path: "/ua/about" }

function parseURL(url) {
    let parsed = new URL(url);

    return {
        protocol: parsed.protocol.replace(':', ''),
        domain: parsed.hostname,
        path: parsed.pathname
    };
}

console.log(parseURL("https://itstep.org/ua/about"));

// 9. Написать функцию, которая принимает строку и разделитель и возвращает массив подстрок, разбитых с помощью 
// указанного разделителя. 
// Например: строка , разделитель “/”, результат: 
// “10”, , “2020”. 
// Выполняя задание, не используйте функцию split()

function splitString(str, delimiter) {
    let result = [];
    let temp = '';
    
    for (let char of str) {
        if (char === delimiter) {
            result.push(temp);
            temp = '';
        } else {
            temp += char;
        }
    }
    result.push(temp);  // добавить остаток
    
    return result;
}

console.log(splitString("10/20/2020", '/'));  // ["10", "20", "2020"]

// 10. Написать функцию, которая принимает строку и разделитель и возвращает массив подстрок, разбитых с помощью 
// указанного разделителя. 
// Например: строка , разделитель “/”, результат: 
// “10”, , “2020”. 
// Выполняя задание, не используйте функцию split() %индекс необходимо вывести значение соответствующего 
// входного параметра. 
// Например: print("Today is %1, %2.%3.%4", "Monday", 10, 8, 2020) должна вывести "Today is Monday 10.8.2020".
// "Today is Monday, 10.8.2020"

function formatString(template, ...args) {
    return template.replace(/%\d+/g, match => {
        let index = parseInt(match.slice(1)) - 1;
        return args[index];
    });
}

console.log(formatString("Today is %1, %2.%3.%4", "Monday", 10, 8, 2020));

module.exports = {
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
};