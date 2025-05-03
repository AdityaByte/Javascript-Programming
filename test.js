const makeRandomColor = () => {
    const color = "0123456789ABCDE"
    let randomColor = "#"
    for(let i=0; i<6; i++){
        randomColor += color[Math.floor(Math.random() * 16)]
    }
    return randomColor
}

console.log(makeRandomColor())