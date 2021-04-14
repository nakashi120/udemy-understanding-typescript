const person = {
  name: "Satoshi",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: [2, "author"],
}

person.role.push("admin")

console.log(person.name)

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase())
}
