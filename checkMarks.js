function checkMarks(...marks)
{   
    let totalMarks =0;
    for(const mark of marks)
    {
        totalMarks+=mark;
    }
    let avgMarks = totalMarks/(marks.length);

    console.log(`Total Marks: ${totalMarks}`);
    console.log(`Average Marks: ${avgMarks}`);

    if(avgMarks>=40)
    {console.log("Pass");}
    else
    {console.log("Fail");}
}
checkMarks(5,67,9,3,7);