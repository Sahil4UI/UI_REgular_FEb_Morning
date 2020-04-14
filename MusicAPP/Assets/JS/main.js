window.addEventListener('load',initEvents);
var audio;

function initEvents()
{
    audio = document.querySelector("#audio");

    loadSongs();

}

function loadSongs()
{
    var ul = document.querySelector("#songsList");
    
    // enhanced for loop
    songs.forEach(function(obj)
    {
        var li = document.createElement("li");
        li.className="col-lg-2 ";
        var span = document.createElement("span");
        span.innerText = obj.song_name;
        span.className="text-center"
        var img = document.createElement("img");
        img.setAttribute("src",obj.song_thumb);
        img.setAttribute('title',obj.song_id);
        img.style.width="100%";
        img.style.height="150px";
        li.appendChild(img);
        li.append(span);
        ul.appendChild(li);
    }
    )

    // audio.play();
}