const letters = "abcdefghijklmnopqrstuvwxyz";
function alphabetPosition(text) {
    let result = [];
    let lowText = text.toLowerCase();

    for (let i = 0; i < text.length; i++){
      let ans = letters.indexOf(lowText[i]) + 1;
      result.push(ans);
    }
    return result.join(" ");
}

console.log(alphabetPosition('sucess'));
module.exports = alphabetPosition
  