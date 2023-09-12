const lines = ["3 25", "-2 17", "-7 20", "2 24"];

// 3 人　　２５問
    const[numberOfPeople, numberOfQuestions] = lines[0].split(' ').map(Number);
    //[ '-2 17', '-7 20', '2 24' ]
    const studentsData = lines.slice(1); 

    //それぞれの生徒の得点が何点になるか計算する
    const calculateScore = (array,q) => array.map((str) => {
        const [day, numberOfCorrectAnswers] = str.split(' ').map(Number);
        if(day <= 0){
            return 100 / q * numberOfCorrectAnswers;
        }else if(0 < day && day< 10){
            return 100 / q * numberOfCorrectAnswers * 0.8;
        }else{
            return 0;
        }
    });
    
    //点数によって評価をつける
    const checkRank = array => array.map((num) => {
        if(80 <= num){
            return 'A';
        }else if(70 <= num){
            return 'B';
        }else if(60 <= num){
            return 'C';
        }else{
            return 'D';
        }
    });
    
    const result = (checkRank(calculateScore(studentsData,numberOfQuestions)));
    
   result.forEach((item) => console.log(item));