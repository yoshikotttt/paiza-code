 const lines = [
  '4',   '5',
  '101', '204',
  '301', '401',
  '501'
]
 
 
 const [unluckyNumber,roomCount,...roomNumbers]= lines;

    const checkLuckyRoom = (unluckyNumber,roomNumbersArray) => roomNumbersArray.filter((room) => {
        if(!room.match(unluckyNumber)){
            return room;
        }
    });

    const showResult = array => {
        if(array.length !== 0){
             array.forEach((item) =>console.log(item));
         }else{
             console.log('none');
         }
     };

    checkedRooms = checkLuckyRoom(unluckyNumber,roomNumbers);
    showResult(checkedRooms);