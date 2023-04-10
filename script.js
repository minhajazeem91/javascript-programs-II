// Create closure & return function that can add specific number

function addNum(firstNum){
    return function(secondNum){
        console.log(firstNum + secondNum);
    }
}

let givenNum = addNum(5);
givenNum(2);
let givenNum2 = addNum(8);
givenNum2(2);