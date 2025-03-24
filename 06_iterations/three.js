const myObject = {
    JS: "Javascript",
    CPP: "C++",
    RB: "Ruby",
    GO: "Golang"
}

// To iterate over objects we have forin loop in js.
// In the forin loop when we iterate over an array we gets the key which is index in case of array.
// Note : But in the forof loop we gets the value directly.
// And we can't iterate over the map using the forin loop.
for (const key in myObject) {
    console.log(`${key} -> ${myObject[key]}`);
}

const programming = ["js", "ruby", "go", "java"]

for(const key in programming) {
    console.log(programming[key]);
}