function groupAndCount(data)
{
    let dataLen = data.length;
    let result = {};
    let count;
    for(const element of data)
    {
        if(result.hasOwnProperty(element))
        {
            result[element] = result[element] +1;
        }
        else{
            result[element] =1;
        }
    }

    return result;
};

let arr = ['apple','orange','apple','orange','apple',1];
let obj = groupAndCount(arr);
console.log(obj);