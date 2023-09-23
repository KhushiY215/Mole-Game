const squares=document.querySelectorAll('.square')
const mole=document.querySelector('.mole')
const timeLeft=document.querySelector('#time-left')
const score=document.querySelector('#score')
const startBtn=document.querySelector('#start-btn')
const reset=document.querySelector('#reset')

let result=0;
let hitPosition
let currentTime=60;
let timeId=null

function randomSquare(){
    squares.forEach(square =>{
        square.classList.remove('mole')
    })
    let randomSquare = squares[Math.floor(Math.random()*9)]
    randomSquare.classList.add('mole')
    hitPosition=randomSquare.id
}

squares.forEach(square=>{
    square.addEventListener('mousedown',()=>{
        if(square.id===hitPosition){
            result++
            score.textContent=result
            hitPosition = null;
    
        }
    })
})

startBtn.addEventListener('click',function moveMole(){
    timeId=setInterval(randomSquare,500)

    function countDown(){
        currentTime--

        timeLeft.textContent=currentTime

        if(currentTime===0){
            clearInterval(countDownTimerId)
            clearInterval(timeId)
            alert('Game over! Your final score is:'+result)
        }
    }
    let countDownTimerId= setInterval(countDown,1000)
})
reset.addEventListener('click',()=>{
    window.location.reload();
})