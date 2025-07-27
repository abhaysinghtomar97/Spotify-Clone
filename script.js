console.log("Lets Start");

async function getSongs() {

    let a = await fetch("http://127.0.0.1:5500/songs/")
    let response = await a.text();
    console.log(response)
    let div = document.createElement("div")
    div.innerHTML = response;
    let as = div.getElementsByTagName("a")
    console.log(as)
    let songs = []
    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if (element.href.endsWith(".mp3")) {
            songs.push(element.href.split("/songs/")[1])
        }

    }
    return songs
}

async function main() {
    let currentSong;

    //get the list of songs
    let songs = await getSongs()
    console.log(songs)
    //show all songs in palylist
    let songUL = document.querySelector(".songlist").getElementsByTagName("ul")[0]

    for (const song of songs) {
        songUL.innerHTML = songUL.innerHTML + ` <li>
                        <img class="invert" src="assets/music.svg">
                        <div class="info">
                            <div >${song.replaceAll("%20", " ")}</div>
                            <div >Abhay</div>
                        </div>

                        <div class="playnow">
                            <span>Play Now</span>
                            <img class="invert" src="assets/play.svg" height="30px" width="30px">
                            
                        </div>
                        
                          </li>`
    }
    //Attach a event listener to each
     Array.from(document.querySelector(".songlist").getElementsByTagName("li")).forEach(e=>{
        console.log(e.querySelector(".info").firstElementChild.innerHTML)
     })

}


main()

// fun functions 
function chup() {
    alert("Chup Chaap jo hai Vo Sunoo, Don't be Over Smart! 😏")
}
function signin() {
    alert("Itna Saukk hai To Subscription Lelooooo... ")
}