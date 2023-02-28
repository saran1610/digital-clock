

function clock(){
    let d=new Date();
let hr=d.getHours();
let mins=zero(d.getMinutes());
let sec=zero(d.getSeconds());
let ampm=document.getElementById("ampm");

document.getElementById("hr").innerHTML=hr;
document.getElementById("mins").innerHTML=(mins);
document.getElementById("sec").innerHTML=(sec);

if(hr>=12){
    hr=hr-12;
ampm.innerHTML="PM"
}
}

function zero(num){
    return num<10?"0"+num:num
}

setInterval(clock,1000)