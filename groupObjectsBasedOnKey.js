function groupObjectsByKey(objArr)
{
    let arrUSA = [];
    let arrUK = [];

    for(let object of objArr)
    {
        if(object["country"] === "USA")
        {
            arrUSA.push(object);
            //arrUSA = [...arrUSA, ...object];
        }
        else{
            arrUK.push(object);
            //arrUK = [...arrUK, ...object]; Error: Object not iterable
        }
    }
    return {USA: arrUSA, UK: arrUK};
}

const users = [
    {country: "USA", name: "Spiderman"},
    {country:"UK", name:"Emily"},
    {country: "USA", name: "Thor"}
];

console.log(groupObjectsByKey(users));

// Why the earlier error?
// You cannot spread a plain object into an array.
// you can spread array into array and object into an object. 