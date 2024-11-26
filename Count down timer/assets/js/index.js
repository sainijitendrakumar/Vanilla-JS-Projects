const hour = document.querySelector('.hour')
const minut = document.querySelector('.minut')
const second = document.querySelector('.second')
const start_btn = document.querySelector('.start')
const stop_btn = document.querySelector('.stop')
const reset_btn = document.querySelector('.reset')

 hour.value = 0;
 minut.value = 0;
 second.value = 0;
let countDownTimer;
start_btn.addEventListener('click',()=>{
    if(hour.value == 0 && minut.value == 0  && second.value == 0 ){
        return
    }else{
     start_btn.style.display = "none"
      stop_btn.style.display = "inline-block"
      countDownTimer = setInterval(() => {
        if(hour.value == 0 && minut.value == 0  && second.value == 0 ){
          start_btn.style.display = "inline-block"
          stop_btn.style.display = "none"
        return
       }
        timerstart()
      }, 1000);
    }
})

function timerstart(){
 if(hour.value != 0 && minut.value == 0 && second.value == 0){
    minut.value = 59;
    second.value = 59;
    hour.value--
 }
 else if(hour.value != 0 && minut.value != 0 && second.value != 0){
    second.value--
    if(second.value == 0){
      minut.value--
      second.value = 60;
    }
 }
 else if(hour.value == 0 && minut.value != 0 && second.value == 0){
  second.value = 59;
 }
 else if(hour.value == 0 && minut.value != 0 && second.value != 0){
     second.value--
     if(second.value == 0){
      minut.value--
     }
 }
 
}

function timerStop(){
   clearInterval(countDownTimer)
}


stop_btn.addEventListener('click',()=>{
 
    start_btn.style.display = "inline-block"
    stop_btn.style.display = "none"
     timerStop()
})

reset_btn.addEventListener('click',()=>{
    hour.value = "" ;
    minut.value = "" ;
    second.value = "" ;
    start_btn.style.display = "inline-block"
    stop_btn.style.display = "none"
   return
})