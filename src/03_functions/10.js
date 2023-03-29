function multiply(left, right) { //multiply -> global | left,right,product-> local
    let product = left * right;
    return product;
  }
  
  function getNumber(prompt) { //getnumber, parsefloat, question -> global | prompt -> local
    return parseFloat(question(prompt));
  }
  
  let left = getNumber('Enter the first number: '); // left, gernumber-> global
  let right = getNumber('Enter the second number: '); // right, gernumber-> global
  console.log(`${left} * ${right} = ${multiply(left, right)}`); // console.log left right multiply global, 
  