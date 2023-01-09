//City Directory
type input = {city: string, country: string, population: number}

let inp: any
let inpArr: any[] = []
export const add = (City: string, Country: string, Population: number) => {
    if (City != "" && City != null && Country != "" && Country != null && Population != 0 && Population != null) {

        let as: input = {city: City, country: Country, population: Population}

        inp = as
        if (localStorage.getItem('Input') === null) {
            inpArr.push(inp.city + ", " + inp.country + ", " + inp.population)
            localStorage.setItem('Input', JSON.stringify(inpArr))
            console.log("Hi")
        }
        else {
            inpArr = JSON.parse(localStorage.getItem('Input') || "{}")
            inpArr.push(inp.city + ", " +inp.country + ", " + inp.population)
            localStorage.setItem('Input', JSON.stringify(inpArr))
        }

        
    }
    displayInput()
}
export const displayInput = () => {
    var list = document.getElementById('list1');
    let li = document.createElement('li')
    li.innerText = inp.city
    if (list) {
        list.appendChild(li)
        li.append(", " + inp.country)
        li.append(", " + inp.population)
    }

}
export const displayInputOnKeyUp = (input: string) => {


    if (localStorage.getItem('Input') != null) {
        var arr = JSON.parse(localStorage.getItem('Input') || "{}")

        var list = document.getElementById('list1')
        if (list) {
            while (list.hasChildNodes() && list.firstChild) {
                list.removeChild(list.firstChild)

            }
        }
        arr.forEach(function (ff: string) {
            let lis = document.createElement('li')
            if (ff.match(input)) {
                lis.innerText = ff
                if (list) {
                    list.appendChild(lis)
                }

            }

        });
    }
    else {
        alert("NOT FOUND")
    }

}

//ISBN
export const isbn = (input: any) => {

    var list = document.getElementById('list2')
    let divv = document.createElement('div')
    const arr: any[] = []
    if (list) {
        while (list.hasChildNodes() && list.firstChild) {
            list.removeChild(list.firstChild)

        }
    }
    if (input.length == 10) {
        var num: any
        var ans = 0
        for (let i = 1; i <= input.length; i++) {
            num = input.charAt(i - 1) * i
            arr.push(num)
        }
        if (input.charAt(input.length - 1).match('X')) {
            arr[input.length - 1] = 100
        }
        for (let j = 0; j < arr.length; j++) {
            ans += arr[j]
        }
        if ((ans % 11) == 0) {
            divv.innerText = "TRUE"
            if (list) {
                list.appendChild(divv)
            }
        } else {
            divv.innerText = "FALSE"
            if (list) {
                list.appendChild(divv)
            }
        }
    } else {
        divv.innerText = "FALSE"
        if (list) {
            list.appendChild(divv)
        }
    }
}

//Change it up!
export const letter = (param: string) => {


    var list = document.getElementById('list3')
    var divv = document.createElement('div')
    divv.innerText = replace(param.split(''))
    if (list) {
        while (list.hasChildNodes() && list.firstChild) {
            list.removeChild(list.firstChild)

        }
    }
    if (list) {
        list.appendChild(divv)
    }

}
function vowel(ch: string) {
    if (ch != 'a' && ch != 'e' && ch != 'i' && ch != 'o' && ch != 'u' && ch != 'A' && ch != 'E' && ch != 'I' && ch != 'O' && ch != 'U') {
        return false;
    }
        return true;
}

function replace(s: string[]) {
    var newArray: string[] = [];
    for (var i = 0; i < s.length; i++) {
        let nextLetter = String.fromCharCode(s[i].charCodeAt(0) + 1);
        if (s[i] == 'z' || s[i] == 'Z') {
            newArray.push("A");
        } else if (vowel(s[i]) == false) {
            if (vowel(nextLetter) == true) {
                newArray.push(nextLetter.toUpperCase());
            } else if (vowel(nextLetter) == false) {
                if (/^[a-zA-Z]+$/.test(s[i])) {
                    newArray.push(nextLetter.toLowerCase())
                } else {
                    newArray.push(s[i]);
                }
            }
        } else if (vowel(s[i]) == true) {
            newArray.push(nextLetter)
        }
    }
    return newArray.join('');
}

//Moving zeroes to the end
export const movingZero = function (arr: any[]) {

    var zero = [];
    var other = [];
    var res: any[];

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            zero.push(arr[i]);
        } else {
            other.push(arr[i]);
        }
    }
    var res = other.concat(zero);
    return res

}

console.log(movingZero([false, 0, 0, 1, 2, 0, 1, 3, "a"]))