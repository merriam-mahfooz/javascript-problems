let student = {
    name: "Kurapika Kurta",
    maths: 78,
    science: 65,
    english: 82,
    hindi: 74
};

let totalmarks= 0;
let max=0;
let maxSubject;

for(let key in student){
    if(typeof student[key] !== 'number'){continue}

    totalmarks += student[key];

    if(max < student[key])
    {
        max = student[key];
        maxSubject = key;
    }
}

let avgmarks = totalmarks/4;

console.log(`Total Marks: ${totalmarks}`);
console.log(`Average Marks: ${avgmarks}`);
console.log(`Highest Marks: ${max}`);
console.log(`Highest marks subject: ${maxSubject}`);