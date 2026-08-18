let user ={
    name: "Aman",
    age: 22,
    city: "Agra"
};

let newObject ={...user}; //same memory address
newObject["profession"] = "developer";


console.log(newObject);
console.log(user)