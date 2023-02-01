const shuffle = (arr)=>{
    let currentIndex = arr.length, randomIndex;
    

    //while there remain elements to shuffle 
    while(currentIndex != 0){
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        //and swap it with the current element
        [arr[currentIndex], arr[randomIndex]] = [arr[randomIndex], arr[currentIndex]]
    }
    return arr;
}

const myNewArray = [1,2,3,4,5]
shuffle(myNewArray)
console.log(myNewArray)
export default shuffle;