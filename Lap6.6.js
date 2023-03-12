function maxNumberTask(input){

    let index = 0;
    let currentInput = input[index];
    let maxNumber = Number.MIN_SAFE_INTEGER;

    while (currentInput !== "Stop"){
        let currentNumber = Number(currentInput);

        if(currentNumber > maxNumber){
            maxNumber = currentInput;
        }
        index++;
        currentInput = input[index];
    }
    
    console.log(maxNumber);

}


maxNumberTask (["100","99","80","70","Stop"])
