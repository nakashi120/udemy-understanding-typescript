"use strict";
// const person: {
//   name: string
//   age: number
//   hobbies: string[]
//   role: [number, string]
// } = {
//   name: "Satoshi",
//   age: 30,
//   hobbies: ["Sports", "Cooking"],
//   role: [2, "author"],
// }
// person.role[1] = 10
// person.role.push('admin')
// person.role = [0, 'admin', 'user']
// console.log(person.name)
// for (const hobby of person.hobbies) {
//   console.log(hobby.toUpperCase())
// }
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
var person = {
    name: "Satoshi Nakashima",
    age: 30,
    hobbies: ["Sports", "Cooking"],
    role: Role.ADMIN,
};
if (person.role === Role.READ_ONLY) {
    console.log("読み込みユーザー");
}
