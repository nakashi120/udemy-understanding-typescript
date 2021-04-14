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

enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

const person = {
  name: "Satoshi",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: Role.ADMIN,
}

if (person.role === Role.READ_ONLY) {
  console.log("読み取り専用ユーザー")
}
