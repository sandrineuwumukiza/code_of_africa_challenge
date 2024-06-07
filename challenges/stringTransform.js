// Coding Challenge 2: String Transformation

// helper function which will help to perform this action

function stringTransformation(str){
    // use spread operator to change string to array in order to count its strings
    const length = [...str].length;
    // an empty string which will store the string transformed according to the condition performed
    let transformedString = '';

    // if the str length is divisible by 3, transformed string will be equal to the reversed version of original string by using reverse method
    if(length % 3 === 0){
       transformedString = [...str].reverse().join('');
    }

    // if the str length is divisible by 5, each character will be replaced with its ASCII code by using charCodeAt method
    else if(length % 5 === 0){
        transformedString = str.split('').map(char => char.charCodeAt()).join(' ');
    }
    // if the str length is divisible by 15,transformed string will contain all the reversed and ASCII  code
    else if (length % 15 === 0) { 
        // Concatenate the reversed string and the ASCII codes
        transformedString = [...str].reverse().join('') + ' ' + str.split('').map(char => char.charCodeAt()).join(' ');
    }
    // if not divisible by it it will return the original string
    else{
        transformedString = str
    }
    return transformedString
}


// Testing my function
console.log(stringTransformation("Hamburger")); 
// Output: "regrubmaH"
console.log(stringTransformation("Pizza")); 
// Output: "80 105 122 122 97"
console.log(stringTransformation("Chocolate Chipe cooki")); 
// Output: "eikooCpihCetalocohC"

