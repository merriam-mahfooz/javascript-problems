const scores = {
    math : 90,
    science : 80,
    english : 95
};
let totalScores = 0;
let maxScore = 0;
let maxSubject="";
for (let key in scores)
{
    totalScores += scores[key];

    if(maxScore < scores[key])
    {
        maxScore = scores[key];
        maxSubject = key;
    }
}
let avgScore = totalScores/3;

console.log(`Total Score: ${totalScores}`);
console.log(`Average Score: ${avgScore.toFixed(2)}`);
console.log(`Highest Score: ${maxSubject} = ${maxScore}`);