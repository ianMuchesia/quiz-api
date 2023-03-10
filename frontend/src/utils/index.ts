const shuffle = (arr:string[])=>{
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

export default shuffle;