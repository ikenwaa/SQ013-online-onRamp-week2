const letters = "abcdefghijklmnopqrstuvwxyz";
function alphabetPosition(text) {
    let result = [];
    let lowText = text.toLowerCase();
    let ans;

    for (let i = 0; i < text.length; i++){
      ans = letters.indexOf(lowText[i]) + 1;
      result.push(ans);
    }
    return result.join(" ");
}

console.log(alphabetPosition('sucess'));
module.exports = alphabetPosition
  