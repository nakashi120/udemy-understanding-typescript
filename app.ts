type Combinable = number | string
type ConversionDescriptor = "as-number" | "as-text"

const combine = (
  input1: Combinable,
  input2: Combinable,
  resultConversion: ConversionDescriptor
) => {
  let result
  if (typeof input1 === "number" && typeof input2 === "number") {
    result = input1 + input2
  } else {
    result = input1.toString() + input2.toString()
  }
  return result
}

const combinedAges = combine(30, 25, "as-number")
console.log(combinedAges)

const combinedNames = combine("Max", "Satoshi", "as-number")
console.log(combinedNames)

const combinedStringAges = combine("30", "25", "as-text")
console.log(combinedAges)
