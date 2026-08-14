function deepEqual(a,b)
{
    if (typeof a != 'object')
    {
        if(a === b)
        {
            return true;
        }
        else{
            return false;
        }
    }
    if(Object.keys(a).length != Object.keys(b).length)
    {
        return false;
    }
    // recursive logic
}
let obj1={x:1,y:2};
let obj2 = {x:1};

console.log(deepEqual(obj1, obj2));