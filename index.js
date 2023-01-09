"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.movingZero = exports.letter = exports.isbn = exports.displayInputOnKeyUp = exports.displayInput = exports.add = void 0;
let inp;
let inpArr = [];
const add = (City, Country, Population) => {
    if (City != "" && City != null && Country != "" && Country != null && Population != 0 && Population != null) {
        let as = { city: City, country: Country, population: Population };
        inp = as;
        if (localStorage.getItem('Input') === null) {
            inpArr.push(inp.city + ", " + inp.country + ", " + inp.population);
            localStorage.setItem('Input', JSON.stringify(inpArr));
            console.log("Hi");
        }
        else {
            inpArr = JSON.parse(localStorage.getItem('Input') || "{}");
            inpArr.push(inp.city + ", " + inp.country + ", " + inp.population);
            localStorage.setItem('Input', JSON.stringify(inpArr));
        }
    }
    (0, exports.displayInput)();
};
exports.add = add;
const displayInput = () => {
    var list = document.getElementById('list1');
    let li = document.createElement('li');
    li.innerText = inp.city;
    if (list) {
        list.appendChild(li);
        li.append(", " + inp.country);
        li.append(", " + inp.population);
    }
};
exports.displayInput = displayInput;
const displayInputOnKeyUp = (input) => {
    if (localStorage.getItem('Input') != null) {
        var arr = JSON.parse(localStorage.getItem('Input') || "{}");
        var list = document.getElementById('list1');
        if (list) {
            while (list.hasChildNodes() && list.firstChild) {
                list.removeChild(list.firstChild);
            }
        }
        arr.forEach(function (ff) {
            let lis = document.createElement('li');
            if (ff.match(input)) {
                lis.innerText = ff;
                if (list) {
                    list.appendChild(lis);
                }
            }
        });
    }
    else {
        alert("NOT FOUND");
    }
};
exports.displayInputOnKeyUp = displayInputOnKeyUp;
//ISBN
const isbn = (input) => {
    var list = document.getElementById('list2');
    let divv = document.createElement('div');
    const arr = [];
    if (list) {
        while (list.hasChildNodes() && list.firstChild) {
            list.removeChild(list.firstChild);
        }
    }
    if (input.length == 10) {
        var num;
        var ans = 0;
        for (let i = 1; i <= input.length; i++) {
            num = input.charAt(i - 1) * i;
            arr.push(num);
        }
        if (input.charAt(input.length - 1).match('X')) {
            arr[input.length - 1] = 100;
        }
        for (let j = 0; j < arr.length; j++) {
            ans += arr[j];
        }
        if ((ans % 11) == 0) {
            divv.innerText = "TRUE";
            if (list) {
                list.appendChild(divv);
            }
        }
        else {
            divv.innerText = "FALSE";
            if (list) {
                list.appendChild(divv);
            }
        }
    }
    else {
        divv.innerText = "FALSE";
        if (list) {
            list.appendChild(divv);
        }
    }
};
exports.isbn = isbn;
//Change it up!
const letter = (param) => {
    var list = document.getElementById('list3');
    var divv = document.createElement('div');
    divv.innerText = replace(param.split(''));
    if (list) {
        while (list.hasChildNodes() && list.firstChild) {
            list.removeChild(list.firstChild);
        }
    }
    if (list) {
        list.appendChild(divv);
    }
};
exports.letter = letter;
function vowel(ch) {
    if (ch != 'a' && ch != 'e' && ch != 'i' && ch != 'o' && ch != 'u' && ch != 'A' && ch != 'E' && ch != 'I' && ch != 'O' && ch != 'U') {
        return false;
    }
    return true;
}
function replace(s) {
    var newArray = [];
    for (var i = 0; i < s.length; i++) {
        let nextLetter = String.fromCharCode(s[i].charCodeAt(0) + 1);
        if (s[i] == 'z' || s[i] == 'Z') {
            newArray.push("A");
        }
        else if (vowel(s[i]) == false) {
            if (vowel(nextLetter) == true) {
                newArray.push(nextLetter.toUpperCase());
            }
            else if (vowel(nextLetter) == false) {
                if (/^[a-zA-Z]+$/.test(s[i])) {
                    newArray.push(nextLetter.toLowerCase());
                }
                else {
                    newArray.push(s[i]);
                }
            }
        }
        else if (vowel(s[i]) == true) {
            newArray.push(nextLetter);
        }
    }
    return newArray.join('');
}
//Moving zeroes to the end
const movingZero = function (arr) {
    var zero = [];
    var other = [];
    var res;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            zero.push(arr[i]);
        }
        else {
            other.push(arr[i]);
        }
    }
    var res = other.concat(zero);
    return res;
};
exports.movingZero = movingZero;
console.log((0, exports.movingZero)([false, 0, 0, 1, 2, 0, 1, 3, "a"]));
