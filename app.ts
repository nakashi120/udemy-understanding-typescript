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
  name: "Satoshi Nakashima",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: Role.ADMIN,
}

if (person.role === Role.AUTHOR) {
  console.log("管理者ユーザー")
}
