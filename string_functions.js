let str = 'JavaScript is a great is language';
//length string ki ek property h isliye isse bad koi braces nhi aya h
let length = str.length;
console.log(length); //30

//String method i.e toLoweCase yha hum braces use kreinge because ye ek method h
let toLowerCase = str.toLowerCase();
console.log(toLowerCase); //javascript is a great language


//string method i.e toUpperCase yha hum braces use kreinge as it is method convert string into upper parts
let toUpperCase = str.toUpperCase();
console.log(toUpperCase); // JAVASCRIPT IS A GREAT LANGUAGE

//includes method return either the value is present with our string or not
let include = str.includes("great");
console.log(include); //true
let include1 = str.includes("hi");
console.log(include1); //false

//startsWith() and endsWith() ye dono methods ye check krte h ki hmara word start kha se ho rha h or end kha se ho rha h

//Both these methods are case sensitive so we have toi write the exact string which we want to search
let startWith = str.startsWith('J');
console.log(startWith);//true
let endWith = str.endsWith('age');
console.log(endWith); //true

//search method return the index of that particular word present
let search = str.search('is');
console.log(search); // so it returns the value 11 means it return the index of the element which we can use to find that the word is present in our string at 11th position


let search1 = str.search('Java');
console.log(search1); //since it also performs complete match the value java is not present in the given string so the return index value is 0


//match method this is used to return the array if we found any word which is match the value 
//which we inserted in the form of regular expressions

let match = str.match(/is/g);//this is the format of regular expression
console.log(match); //['is','is'];

//indexOf() this method is used to return the index of that particular value which we inserted

let index = str.indexOf("is");
console.log(index); // since is present in 11th position so it return index 11 but if we have same words
//repeatedly in our string then it only returns the index of the element when it finds it first time


//to find the index of any word from last we use the method the lastIndex
let lastIndex = str.lastIndexOf("is");
console.log(lastIndex);


//replace() method this is used to replace the word which we inserted here we provide two words first is
//which we have and second the word which we need to replace

let replace = str.replace("JavaScript", "Python");//this is also a case-sensitive method hence we must provide exact word which we want to change
console.log(replace);

//we have another method trim() basically this method is used to trim the extra spaces that is present in particular string

//charAt this method is used to get the character for that particular position
//if we put any position then we get the character that is present in that position
let charAt = str.charAt(4);
console.log(charAt); // the output for this function is S because S is present at that place

let charAt1 = str.charAt(300);
console.log(charAt1); //the output of this statement is nothing because here we don't have any value to display

//charCodeAt this method is used to return the ASCII value that is present at that index 
//yha pr hm index define kreinge phir us index pe jo bhi letter present hoga uska ASCII code hme display hojayega

let charCodeAt = str.charCodeAt(3);
console.log(charCodeAt); //since the third position we have a only and the ASCII code for a is 97 so it returns 97 as answer

//fromCharCode this method do not use the string in this methodwe use string object jsut to return the value

let fromCharCode = String.fromCharCode(65);
console.log(fromCharCode);

//concat method this is used to mix two string collectively
let string1 = "Hello Everyone!";
let string2 = "My Name is Nidhi Sharma!!!";
let concat = string1.concat(string2);  //ek string k sath dusri string ka present hona
console.log(concat);


//split method this method is used to split the string into multiple parts we can get the string array here
let split = str.split(" ");
console.log(split); //[ 'JavaScript', 'is', 'a', 'great', 'is', 'language' ]
//mtlb isse kya hua jha jha bhi space tha wha wha humne usko separate format provide krva diya


let split1 = str.split("i");
console.log(split1);//[ 'JavaScr', 'pt ', 's a great ', 's language' ]
//jha jha i milta gya wha wha split krte gye the 

//repeat method is used to repeat that particular string again and again
let repeat = str.repeat(4);
process.stdout.write(repeat);
console.log('\n');
//slice method this is used to return the string in between the start and end points
let slice1 = str.slice(3);
let slice2 = str.slice(6,9);
console.log(slice1);   //aScript is a great is language
console.log(slice2);   //rip

//here we can use this by taking the negative index also we take this by using the negative index
let slice3 = str.slice(-1);
let slice4 = str.slice(-2);
console.log(slice3);  //e
console.log(slice4);  //ge


//here we take two functions substr and substring
//there two functions behavior depends on slice only
let subStr = str.substr(3,5); //1st arg :- index h jha se start krna h 2nd arg :- vo letters h jitne us count m present h vo lene h
console.log(subStr); //aScri //ye method kitne word print krne h ispe deal krta h

let subString = str.substring(3,5); //jo second arg hum de rhe h ye us index ko kam m nhi le rha hota h
console.log(subString);  //ye method usko index ki tarah deal krta h

//toString basically this method is used to convert any value into string

//valueOf ye method default method humari string ka ye hme same value ko print krvane m help krdeta h

let valueOf = str.valueOf();
console.log(valueOf); //JavaScript is a great is language