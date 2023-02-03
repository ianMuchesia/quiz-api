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
/* {
    category: {
      type: String,
      required: false,
    },
    region: {
      type: String,
      required: false,
    },
    difficulty: {
      type: String,
      required: false,
    },

    id: {
      type: String,
      required: true,
    },
    incorrectAnswers: [String | Number],
    question: {
      type: String,
      required: true,
    },
    correctAnswer:{
      type: String,
      required: true,
    },
    tags:[],
    type:String,
    regions:[],
    isNiche:Boolean,
    date:{
        type:Date,
        default:Date.now()
      }
} */