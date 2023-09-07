const lines = ["4", "y n", "n y", "n n", "y y"];

 //結果の配列
 const quizData = lines.slice(1);

 //１問ずつの結果をmapして、1回目と2回目の結果の中身を確認、indexかnullを返した配列を作り、nullをfilterする
 const checkQuizData = (stringArray) =>
   stringArray
     .map((str, index) => {
       const [first, second] = str.split(" ");
       return first === "y" && second === "y" ? null : index;
     })
     .filter((index) => index !== null);

 const result = checkQuizData(quizData);

 console.log(result.length);
 result.forEach((item) => console.log(item + 1));