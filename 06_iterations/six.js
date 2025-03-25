const library = []

const makeDummyDb = () => {
    let listOfGenre = ["Fiction", "Non-fiction", "Horror", "History"]

    for (let i=1; i<=10; i++) {
        let myObject = {
            title: `Book ${i}`,
            genre: listOfGenre[Math.floor(Math.random() * listOfGenre.length)],
            publish: 1900 + Math.floor((Math.random() * 100) + 10),
            edition: 2000 + Math.floor(Math.random() * 10),
        }
        library.push(myObject)
    }
}

if (library.length === 0) {
    makeDummyDb()
}

console.log(library)

let horrorGenreBooks = library.filter((item) => item.genre === 'Horror')

console.log(horrorGenreBooks);