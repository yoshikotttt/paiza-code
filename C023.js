    //与えられたデータ
    const lines = [
  '1 2 3 4 5 6',
  '3',
  '1 5 4 2 3 6',
  '9 6 2 7 1 5',
  '32 9 87 33 41 60'
]
    
    // [ 1, 2, 3, 4, 5, 6 ]
    const winningNumbers = lines[0].split(' ').map(Number);
    
    // [ [ 1, 5, 4, 2, 3, 6 ], [ 9, 6, 2, 7, 1, 5 ]...
    const userSelectedNumbers = lines.slice(2).map(str => str.split(' ').map(Number));
    
    //配列を２つ渡して、値が含まれているチェック、trueかfalseにして返す
    // [ [ true, true, true, true, true, true ]...
    const isWinningNumber = (matrix,winningNumbers) => matrix.map((subarray) => 
        subarray.map((num) => 
           winningNumbers.includes(num)
        )
    );
    
    //trueとfalseの数を数える
    //[6,4,0]
    const calculateWinningCount = (matrix) => matrix.map((subarray) =>{
        const trueCount = subarray.filter((boolean) => boolean === true).length;
    return trueCount;
    });
    
   //実行
   const result = calculateWinningCount(isWinningNumber(userSelectedNumbers,winningNumbers));
   result.forEach((item) => console.log(item));