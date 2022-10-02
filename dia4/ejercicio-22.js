const nums = [ 1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 1 ];

quantityOnes = 0;
nums.forEach( num => num == 1 ? quantityOnes += 1 : null );

console.log( quantityOnes );   // 11