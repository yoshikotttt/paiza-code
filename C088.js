const lines = ["3", "10 100 50", "300 5", "1 5", "2 3", "3 1", "2 1", "1 3"];


 //[ 10, 100, 50 ]
 const itemPriceArray = lines[1].split(' ').map(Number);
   //  300 5
 const [firstBalance, count] = lines[2].split(' ').map(Number);
   // [ '1 5', '2 3', '3 1', '2 1', '1 3' ]
 const shoppingData = lines.slice(3);
 
 // 購入予定金額の配列を作る　　'1 5' の１を「price配列の何番か」に使う
 const calculateShoppingCost = (array,price) => array.map((str,index) =>{
     const [category, quantity] = str.split(' ').map(Number);
     return price[category - 1] * quantity;
 });
 
 // 最初に持っていた金額から、購入できた時の金額を差し引く
 const calculateRemainingBalance = (money, array) => {
     let remainingMoney = money;
     array.forEach((num) => {
         if(remainingMoney >= num){
            remainingMoney -= num;
         }
     });
     return remainingMoney;
 };
 
 
  console.log(calculateRemainingBalance(firstBalance,calculateShoppingCost(shoppingData,itemPriceArray)));