// Complete the solution so that the function will break up camel casing, using a space between words.

// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

function solution(string) {

    let arr = string.split("")
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]===arr[i].toUpperCase()){
            arr[i]=` ${arr[i]}`
        } 
    }
    return arr.join("")
}