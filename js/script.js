// andiamo a dichiarare la costante container
const container = document.querySelector(".container");

// riprendo la funzione cerata sotto dove ho generato un array di numeri in ordine casuale
const newArrNum = numArrRandom (1, 16, 16);
console.log(newArrNum);

const play = document.querySelector(".play");

play.addEventListener ("click", 

    function(){

        for (let i = 1; i <= 100; i++) {
        
            const divElement = document.createElement("div");
            divElement.classList.add("square");

            divElement.innerHTML = i;

            divElement.addEventListener ("click",

                    function(){

                        divElement.classList.add("clicked");
                        console.log(i);
                    }
            );

            container.append(divElement);


        }
        
    }

    
)


// funzione che crea un array con ordinamento randomico di numeri in un range(min,max)
function numArrRandom (minNum, maxNum, lengthArr) {

        // array da popolare e poi da ritornare
        const arrayToGen = [];

        // ciclo che mi popolerà l'array
        while (arrayToGen.length < lengthArr) {

            // generare numero random in un range (min, max)
            let newNumber = numRandom(minNum,maxNum);

            // se il numero generato NON è già presente nell'array
            if (!arrayToGen.includes(newNumber)) {
                // allora lo pusho nell'array
                arrayToGen.push(newNumber);
            }
        }

        return arrayToGen;
}


// funzione che genera un numero random in un range (min, max)
function numRandom(min, max) {
    return Math.floor(Math.random() * (max - min +1)) + min;
}