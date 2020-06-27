
//fetch code that makes the http request for the puzzle

const response= fetch(`//puzzle.mead.io/puzzle?wordCount=2`,{}).then((puzzle)=>{
    if(puzzle.status === 200){
        return puzzle.json()
    }else{
        throw new Error(`Unable to fetch the puzzle`)
    }
})


