// Auto-Boxing
// This concept is not language dependent. This will occurs in many other languages too.
// Autoboxing is when the language automatically converts a primitive
// into its wrapper object, so that it can behave like an object and access methods of it.
// Example.
// Like in js autoboxing happens in this case.

// Let us we create a primitive datatype.

const num = 100;
// So unlike in other languages like since this is a primitive datatype it doesn't belongs to a prototype(class) so it doesn't
// have its associated methods or properties.
// But when we wants to access the associated methods of it's wrapper class. JS autobox this primitive datatype to it's native
// wrapper class.
// That's why we can use methods corresponding to the wrapper class to this primitive datatype too.
console.log(num.toString(), typeof num.toString());
console.log(num.valueOf());

// Note: Autoboxing enables to directly call methods such as toString() and valueOf()
// Without manual conversion.