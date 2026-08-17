let user ={
    name: "Aman",
    age: 22,
    city: "Agra"
};

let newObject ={...user};
newObject["profession"] = "Developer";

console.log(newObject);