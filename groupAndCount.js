function groupAndCount(data)
{
    let dataLen = data.length;
    let result = {};
    let count;

    for(let i =0; i< dataLen; i++)
    {   count =1;
        for(let j = i+1; j< dataLen; j++){
            if(!result.hasOwnProperty(data[i]))
            {
                    if(data[i] === data[j])
                {
                    count += 1;
                }
            }           
        }
        console.log(count);
        result[data[i]] = count;
    }
    return result;
};

let arr = ['apple','orange','apple','orange','apple'];
let obj = groupAndCount(arr);
console.log(obj);