const audio = document.querySelector('audio')
const play = document.querySelector('.play')
const fast = document.querySelector('.fast')
const stop = document.querySelector('.stop')
play.addEventListener('click',()=>{audio.play(); console.log("play")})
stop.addEventListener('click',(e)=>{e.stopPropagation(); audio.pause();console.log("stop")})
fast.addEventListener('click', (e)=>{e.stopPropagation();audio.currentTime+=5})
fast.addEventListener('dblclick', (e)=>{e.stopPropagation();audio.currentTime+=10})

document.body.addEventListener('click',(e)=>{audio.play()})
document.body.addEventListener('dblclick',(e)=>{audio.pause()})

audio.textTracks[0].addEventListener('cuechange', function() {
    document.getElementById('display').innerHTML = this.activeCues[0].text;
    if(this.activeCues[0].text==""){
        document.querySelector('.img').classList.add("fly")
        document.body.classList.add("color")
    } 
        
    else{
        document.body.classList.remove("color")
        // document.querySelector('.img').classList.remove("fly")
        
    } 

});