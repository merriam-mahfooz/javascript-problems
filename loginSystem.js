function login(username,password)
{ 
    if(user["username"] === username && user["password"] === password && !isBlocked)
    {
        console.log("Login Successful");
    }
    else if(user["username"] === username && user["password"]!== password)
    {
        console.log("Wrong Password.");
    }
    else if(user["username"] !== username)
    {
        console.log("User Not Found");
    }
};

let user ={
    username: "rahul123",
    password: "abc123",
    isBlocked: true
};

login("rahul123","abc12");