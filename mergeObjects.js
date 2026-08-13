// merge using spread operator
function mergeObjectsUsingSpreadOperator(obj1, obj2)
{
    let mergedObjects = {...obj1, ...obj2};
    return mergedObjects;
};

// using rest operator
function mergeNObjectsUsingRestOperator(...obj)
{
    let result = {};
    for (const objects of obj){
        result = {...result, ...objects}; //spread operator
    }
    return result;
};

// using Object.assign()
function mergeObjectsUsingAssign(ob1, ob2)
{
    return Object.assign({},ob1,ob2);
};

// using for ...in loop
function mergeObjectsusingForInLoop(obj1, obj2)
{
    let mergeObject = {...obj1};
    for(const key in obj2)
    {
        // if(mergeObject.hasOwnProperty(key))
        // {
        //     mergeObject[key] = obj2[key];
        // }
        // else{
        //     mergeObject[key]= obj2[key];
        // } later replaces the former same key
        if(!mergeObject.hasOwnProperty(key))
        {
            mergeObject[key] = obj2[key];
        }
    }
    return mergeObject;
};

// merge using new object
function mergeUsingNewObject(obj1, obj2)
{
    new_object = {};
    for(const key in obj1)
    {
        new_object[key] = obj1[key];
    }
    for(const key in obj2)
    {
        new_object[key] = obj2[key];
    }
    return new_object;
};



let a ={
    name: "Merriam",
    class: "12C",
    anime: "spyxFamily"
}
let b ={
    anime: "Hunter x Hunter",
    character: "Kurapika"
}
let c ={
    language: "JavaScript",
    year: "2"
}
// console.log(mergeObjectsUsingSpreadOperator(a,b));
// console.log(mergeNObjectsUsingRestOperator(a,b,c));
// console.log(mergeObjectsUsingAssign(a,b));
// console.log(mergeObjectsusingForInLoop(a,b));
console.log(mergeUsingNewObject(a,b));

