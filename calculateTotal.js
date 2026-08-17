function calculateTotal(...nums)
{   
    let sum =0;
    for(const num of nums)
    {
        sum += num;
    }
    return sum;
}

console.log(calculateTotal(12,24,36,48,60));