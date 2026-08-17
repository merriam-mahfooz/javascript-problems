function calculateBill(units)
{   
    let totalBill=0;

    if (units >= 0 && units <= 100)
    {
        totalBill = units*5;
    }
    else if(units >= 101 && units<= 200)
    {
        totalBill = (100*5) + ((units-100)*7);
    }
    else if(units >= 201 && units <= 300)
    {
        totalBill = (100*5) + (100*7) + ((units-200)*10);
    }
    else{
        totalBill = (100*5) + (100*7) + (100*10) + ((units-300)*12);
    }

    return totalBill;
}

let bill = calculateBill(250); //Total Bill: 1700
console.log(`Total Bill: ${bill}`);