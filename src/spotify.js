console.log("wel come to spotify")
let masterplay=document.getElementById('pause');

let progressbar=document.getElementById('progressbar');
let gif=document.getElementById('gif');

let songItemContainer=Array.from(document.getElementsByClassName('sonnglist'));


let songs=[
    {song_name:"KARIYA 1" , filepath:"../songs/darshan_1.mp3",coverimage:"../images/1.jpg"},
    {song_name:"KARIYA 2" , filepath:"../songs/darshan_2.mp3",coverimage:"../images/2.jpg"},
    {song_name:"KARIYA 3" , filepath:"../songs/darshan_3.mp3",coverimage:"../images/3.jpg"},
    {song_name:"KARIYA 4" , filepath:"../songs/darshan_1.mp3",coverimage:"../images/4.jpg"},
    {song_name:"KARIYA 5" , filepath:"../songs/darshan_2.mp3",coverimage:"../images/5.jpg"},
    {song_name:"KARIYA 6" , filepath:"../songs/darshan_3.mp3",coverimage:"../images/6.jpg"},
    {song_name:"KARIYA 7" , filepath:"../songs/darshan_1.mp3",coverimage:"../images/7.jpg"},
    {song_name:"KARIYA 8" , filepath:"../songs/darshan_2.mp3",coverimage:"../images/8.jpg"},
    {song_name:"KARIYA 9" , filepath:"../songs/darshan_3.mp3",coverimage:"../images/9.jpg"},
    
]
let songname=document.getElementById('songname');
//handle play bitton
let audio = new Audio('../songs/darshan_1.mp3');



masterplay.addEventListener("click",()=>{
    if(audio.paused|| audio.currentTime<=0)
    {
        audio.play();
        masterplay.classList.remove( 'fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        gif.style.display='block';
    }
    else{
        audio.pause();
        masterplay.classList.add( 'fa-play-circle');
        masterplay.classList.remove( 'fa-pause-circle');
        gif.style.display='none';
    }
});

audio.addEventListener('loadedmetadata',()=>{
    console.log(audio.duration);
})

audio.addEventListener('timeupdate',()=>{
    
    let progres=((audio.currentTime/audio.duration)*100);
    progressbar.value = progres;
});

progressbar.addEventListener('input',()=>{
    audio.currentTime=((progressbar.value*audio.duration)/100);
});


songItemContainer.forEach((element, i) => {
    element.getElementsByTagName('img')[0].src = songs[i].coverimage; // ✅ Corrected
    element.getElementsByTagName('h5')[0].innerText = songs[i].song_name; // ✅ Use innerText, not src
 });
 
console.log(songItemContainer.length);


let itemplay=Array.from(document.getElementsByClassName('itemplay'));

const makeallpalys=()=>{
    itemplay.forEach(ele =>{
        ele.classList.add('fa-play-circle');
        ele.classList.remove('fa-pause-circle');
    })
}
let index;
itemplay.forEach(ele =>{
    ele.addEventListener('click',(e)=>{
        makeallpalys();
        // let index=parseInt(e.target.id);
         index = parseInt(e.target.getAttribute('id'));
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        //audio.src=`darshan_${index}.mp3`;
        audio.src = songs[index].filepath;
        audio.currentTime=0;
        audio.play();
        masterplay.classList.add('fa-pause-circle');
        masterplay.classList.remove('fa-play-circle');
        console.log("Audio source set to:", audio.src);
        songname.innerText=songs[index].song_name;
        songname.style.display='block';
        gif.style.display='block';

    })
})
let sonnglist=document.getElementsByClassName('sonnglist');
let bac=document.getElementById('bef');
let far=document.getElementById('far');

bac.addEventListener('click',()=>{
    if(index<=0)
    {
        index=9;
    }
    else{
        index-=1;
    }
    makeallpalys();
        audio.src = songs[index].filepath;
        audio.currentTime=0;
        audio.play();
        masterplay.classList.add('fa-pause-circle');
        masterplay.classList.remove('fa-play-circle');
        console.log("Audio source set to:", audio.src);
        songname.innerText=songs[index].song_name;
        songname.style.display='block';
        gif.style.display='block';
        
})
far.addEventListener('click',()=>{
    if(index>=9)
    {
        index=0;
    }
    else{
        index+=1;
    }
    makeallpalys();
    audio.src = songs[index].filepath;
        audio.currentTime=0;
        audio.play();
        masterplay.classList.add('fa-pause-circle');
        masterplay.classList.remove('fa-play-circle');
        console.log("Audio source set to:", audio.src);
        songname.innerText=songs[index].song_name;
        songname.style.display='block';
        gif.style.display='block';
})