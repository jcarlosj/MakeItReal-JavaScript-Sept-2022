const nums = [ 1, 23, 5, 8, 40, 12, 2, 67, 24, 9, 39 ];
let newNums = [];

for ( var i = 0; i < nums.length; i++ )
    if( nums[ i ] > 10 )
        newNums.push( nums[ i ] );

newNums.forEach( num => console.log( num ) );