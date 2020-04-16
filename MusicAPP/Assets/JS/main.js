window.addEventListener('load',initEvents);
var audio;
var flag=false;
function initEvents()
{
    audio = document.querySelector("#audio");
    playBtn = document.querySelector("#play");
    playBtn.addEventListener("click",togglePlay);
    slider = document.querySelector("#slider");
    song_total_time = document.querySelector(".song_total_time");
    song_curr_time = document.querySelector(".song_curr_time");
    loadSongs();

}

function loadSongs()
{
    var ul = document.querySelector("#songsList");
    
    // enhanced for loop
    songs.forEach(function(obj)
    {
        var li = document.createElement("li");
        var span = document.createElement("span");
        var btn = document.createElement("button");
        btn.innerHTML = "ADD TO PLAYLIST";
        btn.className = "btn btn-primary d-block w-100";
        span.innerText = obj.song_name;
        span.className="text-center"
        var img = document.createElement("img");
        img.setAttribute("src",obj.song_thumb);
        li.setAttribute('title',obj.song_id);
        img.style.width="100%";
        img.style.height="150px";
        li.appendChild(img);
        li.append(span);
        li.addEventListener("click",playSong);
        li.appendChild(btn);
        btn.addEventListener("click",addSong);
        ul.appendChild(li);
    }
    )
}

function playSong()
{   var song_Url;
    var s_id = event.srcElement.title;
   for(var i=0;i<songs.length;i++)
   {
    if (songs[i].song_id == s_id)
    {
     song_Url = songs[i].song_url;
     break;
    }
   }
    audio.src= song_Url;
    audio.play();
    setInterval(function()
    {
        slider.value = audio.currentTime;
        var Cduration = audio.currentTime;
        var Cmin = parseInt(Cduration/60);
        var Csec =parseInt(Cduration%60);
        song_curr_time.innerHTML = "0"+Cmin+":"+Csec;
    },1000);

    setTimeout(function()
    {
        var Tduration = audio.duration;
        slider.max = Tduration;
        // console.log(duration);
        var Tmin = parseInt(Tduration/60);
        var Tsec =parseInt(Tduration%60);
        song_total_time.innerHTML = "0"+Tmin+":"+Tsec;
    },500)
    flag=true;
    togglePlay();
}

function togglePlay()
{
    if(!flag)
    {
        playBtn.innerHTML = '<i class="fas fa-play"></i>';
        audio.pause();
    }
    else{
        playBtn.innerHTML = '<i class="fas fa-pause"></i>';
        audio.play();
    }
    flag = !flag;
}

function addSong()
{

}