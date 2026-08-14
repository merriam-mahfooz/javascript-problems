function groupAndCount(data)
{
    let dataLen = data.length;
    let result = {};
    let count;
    for (let i = 0; i < dataLen; i++) {
        // skip values we've already counted
        if (result.hasOwnProperty(data[i])) continue;

        count = 1;
        for (let j = i + 1; j < dataLen; j++) {
            if (data[i] === data[j]) {
                count += 1;
            }
        }

        result[data[i]] = count;
    }
    return result;
};

let arr = ['apple','orange','apple','orange','apple'];
let obj = groupAndCount(arr);
console.log(obj);