function mergeObject(obj1,obj2){
    obj3={...obj1,...obj2}
    return obj3;
}
let personalInfo={
    name:"Ann",
    age:25,
    city:"Amsterdam"
};
let jobInfo={
    company: "Velora Atelier",
    salary: 80000,
    experience: 3
};
let info=mergeObject(personalInfo,jobInfo);
console.log(info);