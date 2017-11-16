//name: Kobe Fox
//project: JS 11-20
//date:
function firstLast6(array){
    for (var i = 0; i < 6; i++){
        return true;
    }
    if (array - i !== 6){
        return false;
    }
    var x = array.startsWith(6);
    var y = array.endsWith(6);
}

function has23(array){
    if (array[0] === 2 || array[1] === 3){
        return true;
    }
    if (array[0] === 3 || array[1] === 2){
        return true;
    }
    if (array[0] !== 2 || 3){
        return false;
    }
    if (array[1] !== 3 || 2){
        return false;
    }
}

function fix23(array){
    if (array[0] === 2 && array[1] === 3){
        array[1] = 0;
    }
    if (array[1] === 2 && array[2] === 3){
        array[2] = 0;
    }
    return array;
}
function countYZ(string){
    string = string.toLowerCase();
    var count = 0;
    for (var i= 0; i < string.length; i++){
        if (string[i] === " ") {
            if (string[i - 1] === "y" || string[i - 1] === "z") {
                count++;
            }
        }
    }
    if(string[string.length - 1] === "y" || string[string.length - 1] === "z" ){
        count++;
    }
    return count;
}

function endOther(string1, string2){
    string1 = string1.toLowerCase();
    string2 = string2.toLowerCase();
    if (string1.endsWith(string2)){
        return true;
    }
    if (string2.endsWith(string1)){
        return true;
    }
    return false;
}
function starOut(string){
    var newWord = "";
    for(var i = 0; i < string.length; i++){
        if(string[i] !== "*" && string[i-1] !== "*" && string[i+1] !== "*"){
            newWord += string[i];
        }
    }
    return newWord;
}
function getSandwich(string){
    if (string.includes ("bread")){
        var breadA = string.indexOf("bread");
        var breadB = string.lastIndexOf("bread");
        return string.slice(breadA +5, breadB);
    }else{
        return "";
    }
}
function canBalance(array){
    var valueA = 0;
    var valueB = 0;
    for (var i = 0; i < array.length; i++){
        valueB += array[i];
    }
    for (var x = 0; x <= array.length - 2;x++){
        valueA += array[x];
        valueB -= array[x];
        if (valueA === valueB){
            return true;
        }
    }
    return false;
}
function countClumps(array){
    var clumps = 0;
    for (var i = 0; i<array.length; i++){
        if(array[i] == array[i+1]){
            clumps++;
            for (var x =i; x<array.length;x++){
                if (array[x] !== array[x+1]){
                    i=x;
                    break;
                }
            }
        }
    }
    return clumps;
}
function evenlySpaced(a,b,c){
    var min = 0;
    var med = 0;
    var max = 0;
    if (a < b && a < c){
        min = a;
    }
    if ((a > b && a < c) || (a < b && a > c)){
        med = a;
    }
    if (a > b && a > c){
        max = a;
    }
    if (b < a && b < c){
        min = b;
    }
    if ((b > a && b < c) || (b < a && b > c)){
        med = b;
    }
    if (b > a && b > c){
        max = b;
    }
    if (c < a && c < b){
        min = c;
    }
    if ((c > a && c < b) || (c < a && c > b)){
        med = c;
    }
    if (c > a && c > b){
        max = c
    }
    return (med - min) == (max - med);
}
function tester() {
    document.getElementById("output").innerHTML = firstLast6(true, false);
    document.getElementById("output").innerHTML = has23(true, false);
    document.getElementById("output").innerHTML = fix23(true, false);
    document.getElementById("output").innerHTML = countYZ(true, false);
    document.getElementById("output").innerHTML = endOther(true, false);
    document.getElementById("output").innerHTML = starOut(true, false);
    document.getElementById("output").innerHTML = getSandwich(true, false);
    document.getElementById("output").innerHTML = canBalance(true, false);
    document.getElementById("output").innerHTML = countClumps(true, false);
    document.getElementById("output").innerHTML = evenlySpaced(true, false);

}