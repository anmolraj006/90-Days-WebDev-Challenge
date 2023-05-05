let screen=document.getElementById("calculator-screen")

const buttons=document.querySelectorAll("#calcualtor-btns>button")

buttons.forEach(function(input){
    input.addEventListener("click",()=>{
        if(input.innerHTML=="="){
            screen.value=eval(screen.value)
        }else if(input.innerHTML=="AC"){
            screen.value=""

        }else if(input.innerText=="↩"){
            let news=screen.value.slice(0,-1)
            screen.value=news
        }else{
            screen.value+=input.innerHTML
        }
    })
})

buttons.forEach((click)=>{
    click.addEventListener("click",()=>{
        click.style.scale='0.5'
        setTimeout(()=>{
            click.style.scale='1'
        },50)
    })
})
