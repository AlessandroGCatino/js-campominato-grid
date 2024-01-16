const grigliaHtml = document.getElementById('grid')




document.getElementById('start').addEventListener("click", function () {
    
    let difficulty = document.getElementById("userSel").value
    let assignDiff = ""

    
    grigliaHtml.innerHTML=""
    grigliaHtml.style += "border: 2px solid black;"


    for (let i = 0; i < difficulty; i++) {

        let square = document.createElement("div")
        square.classList.add("square")
        switch (difficulty){
            case "81":
                square.classList.add("medium")
                break;
    
            case "49":
                square.classList.add("hard")
                break;
    
            default:
                square.classList.add("easy")
        }

        console.log(square.classList)
        square.innerHTML = `<span>${ i+1 }</span>`

        square.addEventListener('click', function () {

            console.log( this.querySelector( "span" ).innerText )
            this.classList.toggle("active")
        })

        grigliaHtml.append(square)
    }
})








/*Bonus
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;


*/