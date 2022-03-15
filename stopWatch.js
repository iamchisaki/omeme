console.log()//確認方法
//コメント書ける

const timer = document.getElementById("timer") ; 
const start = document.getElementById("start") ; 
const stop = document.getElementById("stop") ;
const reset = document.getElementById("reset") ;
//変数の指定

let hrs = 0;
let min = 0;
let sec = 0;
let un = 0;

let Interval;

function stopWatch(){
un++; //1足す
if(un / 10 == 1){
sec++;
un = 0;

if(sec / 10 == 1){
min++;
sec = 0;
}
}

timer.innerHTML = hrs + ":" + min + ":" + sec + ":" + un + ":";
}

start.addEventListener("click",function(){
 Interval = setInterval(stopWatch)
})

stop.addEventListener('click',function(){
clearInterval( Interval);
})

reset.addEventListener("click", function(){
 clearInterval(Interval);
 timer.innerHTML = "0:0:0:0";
 hrs = 0; min = 0; sec = 0; un = 0;
})
