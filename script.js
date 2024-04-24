const buttons = document.querySelector('#bottoni');
//dichiaro le variabili di risultato con scope globale
let pResult = 0
let cResult = 0


function startGame(event) {
    if (pResult >= 5) { 
                return; 
            }
        
            if (cResult >= 5) {
                        return; 
                    }
        
    //mi occupo del DOM
    const sitBanner = document.createElement('div');
    const resultBanner = document.createElement("div");
    const tieText = document.createTextNode("It's a tie");
    const winText = document.createTextNode("You won");
    const loseText = document.createTextNode("You lost");
    const matchWin = document.createTextNode("You have won the match");
    const matchLose = document.createTextNode("You have lost the match");
    const pointBanner = document.createElement("div");
    const container = document.querySelector('#bannercontainer');

    //dichiaro le variabili e la formula necessaria per la scelta del computer
    let cChoice = Math.floor(Math.random() * 3) + 1;
    
    let pChoice =  event.target.id

    //backup
    function fight(cChoice, pChoice) {
        //funzione nella quale vengono messi a confronto i risultati delle giocate
        if ((cChoice === 3 && pChoice === 'but3') || (cChoice === 2 && pChoice === 'but2') || (cChoice === 1 && pChoice === 'but1')) {
            resultBanner.appendChild(tieText);
    } else if ((cChoice === 1 && pChoice === 'but2') || (cChoice === 2 && pChoice === 'but3') || (cChoice === 3 && pChoice === 'but1')) {
        resultBanner.appendChild(winText);
        pResult += 1;
        
        } else if ((cChoice === 2 && pChoice === 'but1') || (cChoice === 3 && pChoice === 'but2') || (cChoice === 1 && pChoice === 'but3')) { 
            resultBanner.appendChild(loseText);
              cResult += 1;
          
        }
        
        if (pResult >= 5) {
            sitBanner.appendChild(matchWin);
            container.appendChild(sitBanner); 
                    return; 
                }
            
                if (cResult >= 5) {
            sitBanner.appendChild(matchLose);
            container.appendChild(sitBanner); 
                            return; 
                        }
            
    }
    fight(cChoice, pChoice)
    let result = pResult + ' : ' + cResult
    pointBanner.textContent = result
 
container.appendChild(resultBanner);
container.appendChild(pointBanner);
container.appendChild(sitBanner);
}
  
const bottone1 = document.querySelector('#but1');
const bottone2 = document.querySelector('#but2');
const bottone3 = document.querySelector('#but3');
bottone1.addEventListener('click', (event) => startGame(event, event.target));
bottone2.addEventListener('click', (event) => startGame(event, event.target));
bottone3.addEventListener('click', (event) => startGame(event, event.target));