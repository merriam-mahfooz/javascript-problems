function createUserWithRest(name, age, ...skills) {
  let user = {
    name: name,
    age: age,
    skills: skills,
  };
  return user;
}
console.log(createUserWithRest("Aman", 22, "HTML", "CSS", "JavaScript"));
