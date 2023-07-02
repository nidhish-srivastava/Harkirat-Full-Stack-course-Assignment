//* Using built in functions

let string = "   AAAAA-----asdasdas  ---aaa  lkndflsd    sfsf aA   " 

// string to array
const array = string.split("")
console.log(array);

const reverse = array.reverse()
console.log(reverse);

const reverseString = reverse.join("")

if(reverseString==string) console.log("Palindrome");
else console.log("Not a palindrome");

//* Using actual logic


var isPalindrome = function(s) {
    // let string2 = s.toLowerCase().replace(/\s/g,"")  REmoves whitespace
    // console.log(string2);
    let string2 = s.replace(/[^a-zA-Z0-9]/g, "")  //Remove whitespace,remove non alphanumeric characters
    let string = string2.toLowerCase()

    let i=0,j=string.length-1
       for(let i2=0;i<string.length-1;i2++){
          if(string[i2]!=string[i2]) return false
          i++
          j--
        }
        return true
};
console.log(isPalindrome(string));