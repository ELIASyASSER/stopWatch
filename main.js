let btns = document.querySelectorAll('.btns button');
let time = document.querySelector(".time");
let hours =0;
let minutes =0;
let seconds =0;
let millSeconds =0;
let interval =null

btns.forEach(btn=>{
    btn.addEventListener("click",(e)=>{
        if(btn.id =="start"){
            if(!interval){
                increase()
                changeBtnState(e.target.id)
            
        }}
        if(btn.id =='stop'){
            clearInterval(interval)
            interval = null;
            changeBtnState(e.target.id)

        
        }
        if(btn.id =='reset'){
            resetTimes()
            interval = null;
            time.innerText = formatted(millSeconds,seconds,minutes,hours)
            changeBtnState(e.target.id)
        }
    })
})


function resetTimes() {
    clearInterval(interval);
    hours =0;
    minutes =0;
    seconds =0;
    millSeconds =0;
}
function formatted(milli,seconds,minutes,hours) {
    let secs = seconds.toString().padStart(2,'0');
    let mins = minutes.toString().padStart(2,'0');
    let hs = hours.toString().padStart(2,'0');
    let ml = milli.toString().padStart(2,'0');
 
    return hs +":"+mins+":"+secs+"."+ml;
}
function increase() {
    interval = setInterval(() => {
        millSeconds++
        if(millSeconds / 100 == 1){
            millSeconds=0
            seconds++;  
            if(seconds/60 ==1){
                seconds = 0;
                minutes++
                if(minutes/60 ==1){
                    minutes=0
                    hours++
                }
            }
        }                
        time.innerText = formatted(millSeconds,seconds,minutes,hours)
    }, 10);
}
function startOnClick() {
    
    document.getElementById('start').style.pointerEvents = 'none';
            
    document.getElementById('start').style.opacity = '0.2';

    document.getElementById('stop').style.pointerEvents = 'auto';
    
    document.getElementById('stop').style.opacity = '1';

    document.getElementById('reset').style.pointerEvents = 'auto';
    
    document.getElementById('reset').style.opacity = '1';
}
function stopOnClick() {
    document.getElementById('start').style.pointerEvents = 'auto';
    document.getElementById('start').style.opacity = '1';

    document.getElementById('stop').style.pointerEvents = 'none';
    document.getElementById('stop').style.opacity = '0.2';

}
function resetOnClick() {
    document.getElementById('stop').style.pointerEvents = 'none';
    document.getElementById('stop').style.opacity = '0.2';
    document.getElementById('reset').style.pointerEvents = 'none';
    document.getElementById('reset').style.opacity = '0.2';
    document.getElementById('start').style.pointerEvents = 'auto';
    document.getElementById('start').style.opacity = '1';
}
function changeBtnState(action) {
    switch (action) {
        case 'start':
            startOnClick()
            break;
    
        case "stop":
            stopOnClick()
            break;

        case "reset":
            resetOnClick()
            break;
    }
}