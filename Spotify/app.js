const TrendingSongsData = [
    {
        id: 1,
        name: "Naiyo Lagda Dil",
        Description: "Kisi Ka Bhai Kisi Ki Jaan",
        image: "https://a10.gaanacdn.com/gn_img/albums/Dk9KN2KBx1/9KNky7l23B/size_l.jpg",
        // songUrl: "kesariya.mp3"
        songUrl: new Audio("NaiyoLagdaDil.mp3")
    },
    {
        id: 2,
        name: "Kesariya",
        Description: "Kesariya Song | Pritam | Brahmastra",
        image: "https://a10.gaanacdn.com/gn_img/song/z8k3yd1Krx/k3y4gl50Kr/size_l_1658037089.webp",
        // songUrl: "kesariya.mp3"
        songUrl: new Audio("kesariya.mp3")
    },
    {
        id: 3,
        name: "Khabbi Seat",
        Description: "Khabbi Seat | ਖਬ੍ਬਿ ਸੀਟ",
        image: "https://a10.gaanacdn.com/gn_img/albums/Rz4W8vKxD5/4W8eL5o9bx/size_l.webp",
        // songUrl: "kesariya.mp3"
        songUrl: new Audio("kesariya.mp3")
    },
    {
        id: 4,
        name: "Apna Bana Le",
        Description: "Apna Bana Le | Sachin-Jigar",
        image: "https://a10.gaanacdn.com/gn_img/albums/a7LWBzWzXA/LWBkVVA4bz/size_l.jpg",
        // songUrl: "kesariya.mp3"
        songUrl: new Audio("kesariya.mp3")
    },
    {
        id: 5,
        name: "Sab Gazab",
        Description: "Sab Gazab | Goldkartz",
        image: "https://a10.gaanacdn.com/gn_img/albums/oAJbDlbnL8/JbDEGDzDKn/size_l.jpg",
        // songUrl: "kesariya.mp3"
        songUrl: new Audio("kesariya.mp3")
    },
    {
        id: 6,
        name: "Pathaan",
        Description: "Pathaan | Vishal-Shekhar",
        image: "https://a10.gaanacdn.com/gn_img/albums/a7LWBaz3zX/LWBkQx9Dbz/size_l.jpg",
        // songUrl: "kesariya.mp3"
        songUrl: new Audio("kesariya.mp3")
    },
];

const trendingsongsBox = document.getElementById("trendingsong");
function TrendingSongs() {
    TrendingSongsData.forEach((song) => {
        var trendingSongsDetail = {
            id: song.id,
            name: song.name,
            description: song.Description,
            image: song.image
        };
        localStorage.setItem("trendingSongsData_" + song.id, JSON.stringify(trendingSongsDetail));

        let newDiv = document.createElement("div");
        newDiv.classList.add("trendingsongs");
        newDiv.innerHTML = `
        <button class="playbtn" id="masterplay" onclick="songPlay(${song.id})"><i class="fa fa-play"></i></button>
        <img class="songimage" src="${song.image}"/>
        <div class="songname">${song.name}</div>
        <div class="songdescription">${song.Description}</div>
        
        `;
        trendingsongsBox.appendChild(newDiv)
    })
};


// controls

// const masterPlay = document.getElementById("masterplay");

TrendingSongs();
// const clickSongs = new Set([]);

function songPlay(e){
    const clickSongs = [];
    clickSongs.push(e);
    console.log(clickSongs)
    for(let i=0; i<TrendingSongsData.length; i++){
        for(let j=0; j<clickSongs.length; j++){
            if(clickSongs[j]==TrendingSongsData[i].id){
                if(TrendingSongsData[i].songUrl.paused){
                    const masterPlay = document.getElementById("masterplay");
                TrendingSongsData[i].songUrl.play();
                masterPlay[i].classList.remove("fa-fa-play");
                masterPlay[i].classList.add("fa-fa-pause");
                }
                else{
                    TrendingSongsData[i].songUrl.pause();
                }
            }
            else{
                TrendingSongsData[i].songUrl.pause();
            }
        }
    }
}

// function songPlay(){
//     songUrl.play()
// }

// Popular hindi song 

const popularHindiSongsData = [
    {
        id: 1,
        name: "Naiyo Lagda Dil",
        Description: "Kisi Ka Bhai Kisi Ki Jaan",
        image: "https://a10.gaanacdn.com/gn_img/albums/Dk9KN2KBx1/9KNky7l23B/size_l.jpg",
        // songUrl: "kesariya.mp3"
        songUrl: new Audio("NaiyoLagdaDil.mp3")
    },
    {
        id: 2,
        name: "Kesariya",
        Description: "Kesariya Song | Pritam | Brahmastra",
        image: "https://a10.gaanacdn.com/gn_img/song/z8k3yd1Krx/k3y4gl50Kr/size_l_1658037089.webp",
        // songUrl: "kesariya.mp3"
        songUrl: new Audio("kesariya.mp3")
    },
    {
        id: 3,
        name: "Khabbi Seat",
        Description: "Khabbi Seat | ਖਬ੍ਬਿ ਸੀਟ",
        image: "https://a10.gaanacdn.com/gn_img/albums/Rz4W8vKxD5/4W8eL5o9bx/size_l.webp",
        // songUrl: "kesariya.mp3"
        songUrl: new Audio("kesariya.mp3")
    },
    {
        id: 4,
        name: "Apna Bana Le",
        Description: "Apna Bana Le | Sachin-Jigar",
        image: "https://a10.gaanacdn.com/gn_img/albums/a7LWBzWzXA/LWBkVVA4bz/size_l.jpg",
        // songUrl: "kesariya.mp3"
        songUrl: new Audio("kesariya.mp3")
    },
    {
        id: 5,
        name: "Sab Gazab",
        Description: "Sab Gazab | Goldkartz",
        image: "https://a10.gaanacdn.com/gn_img/albums/oAJbDlbnL8/JbDEGDzDKn/size_l.jpg",
        // songUrl: "kesariya.mp3"
        songUrl: new Audio("kesariya.mp3")
    },
    {
        id: 6,
        name: "Pathaan",
        Description: "Pathaan | Vishal-Shekhar",
        image: "https://a10.gaanacdn.com/gn_img/albums/a7LWBaz3zX/LWBkQx9Dbz/size_l.jpg",
        // songUrl: "kesariya.mp3"
        songUrl: new Audio("kesariya.mp3")
    },
];



const popularHindiSongsBox = document.getElementById("trendingsong");
function popularHindiSongs() {
    popularHindiSongsData.forEach((song) => {
        var popularHindiSongsDataDetail = {
            id: song.id,
            name: song.name,
            description: song.Description,
            image: song.image
        };
        localStorage.setItem("popularHindiSongsData_" + song.id, JSON.stringify(popularHindiSongsDataDetail));

        let newDiv = document.createElement("div");
        newDiv.classList.add("trendingsongss");
        newDiv.innerHTML = `
        <button class="playbtn" id="masterplay" onclick="songPlay(${song.id})"><i class="fa fa-play"></i></button>
        <img class="songimage" src="${song.image}"/>
        <div class="songname">${song.name}</div>
        <div class="songdescription">${song.Description}</div>
        
        `;
        popularHindiSongsBox.appendChild(newDiv)
    })
};
popularHindiSongs()