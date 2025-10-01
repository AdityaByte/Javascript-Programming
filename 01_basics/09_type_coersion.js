// Now we are talking about the type coersion in js.
// Defination: Type coersion is the automatic or implicit conversion of a value from one data type
// to another by Javascript.
// Js is a loosely typed language so it often converts value for you depending on the context.

// 1. Implicit coersion.
// It happens automatically without you explicitly asking for it.
// Common with ==, +, -, if etc.

// "5" + 1     // "51"  (Number 1 coerced to string)
// "5" - 1     // 4     (String "5" coerced to number)
// true + 2    // 3     (true → 1)
// false == 0  // true  (false → 0)
// "" == 0     // true  ("" → 0)
// null == undefined // true (special case)

// 2. Explicity coersion.
// It happens when you intentionally convert types using functions.
// Examples:
// Number("123")   // 123
// String(123)     // "123"
// Boolean(0)      // false
// Boolean("hello")// true
