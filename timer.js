//console.log()//確認方法
//コメント書ける

const timer = document.getElementById("timer"); 
const start = document.getElementById("start"); 
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");
//変数の指定

let min = 0;
let sec = 0;
let ms = 0;

let Interval;

function stopWatch(){
  ms++; //1足す
 if(ms / 100 == 1){
  sec++;
  ms = 0;

 if(sec / 60 == 1){
  min++;
  sec = 0;
}
}

timer.innerHTML = ('0'+min).substr(-2) + ":" + ('0'+sec).substr(-2) + ":" + ('0'+ms).substr(-2); 
} 


start.addEventListener("click",function(){
 Interval = setInterval(stopWatch)
 this.disabled = true;
})

stop.addEventListener('click',function(){
 clearInterval( Interval);
 start.disabled = false;
})

reset.addEventListener("click", function(){
 clearInterval(Interval);
 start.disabled = false;
 timer.innerHTML = "00:00:00";
 min = 0; sec = 0; ms = 0;
})
