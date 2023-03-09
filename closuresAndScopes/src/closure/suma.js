function sumWithClosure(firstNum) {
    // Tu código aquí 👈
    let num1 = firstNum;
    function sumPart2(secondNum) {
  
      if (secondNum != null) {
        console.log(num1 + secondNum);
        return num1 + secondNum;
      }
      else {
        console.log(num1);
        return num1;
      }
    }
    return sumPart2;
   
  }
 sumWithClosure(3)(2);
 sumWithClosure(90)();
 sumWithClosure(2)(143);

/*
export function sumWithClosure(firstNum) {
  return function (secondNum) {
    if (secondNum) {
      return secondNum + firstNum;
    }
    return firstNum;
  };
}

*/