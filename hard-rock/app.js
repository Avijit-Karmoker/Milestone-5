const searchSong = async () => {
    const searchInput = document.getElementById('search-song').value;
    const url = `https://api.lyrics.ovh/suggest/${searchInput}`;
    // load data
    try {
        const res = await fetch(url);
        const data = await res.json();
        songInfo(data.data);
    }
    catch (error) {
        errorMessage('Something went worng!! Please try again later!');
    }

    //    fetch(url)
    //        .then(res => res.json())
    //        .then(data => songInfo(data.data))
    //        .catch(err => displayError('Something went worng!! Please try again later!'));
}

const songInfo = details => {
    const searchResultDiv = document.getElementById('song-info');
    searchResultDiv.innerHTML = "";
    details.forEach(detail => {
        const songDiv = document.createElement('div');
        songDiv.className = 'single-result row align-items-center my-3 p-3';
        songDiv.innerHTML = `
            <div class="col-md-9">
                <h3 class="lyrics-name">${detail.title}</h3>
                <p class="author lead">Album by <span>${detail.artist.name}</span></p>
                <audio controls>
                    <source src="${detail.preview}">
                </audio>
            </div>
            <div class="col-md-3 text-md-right text-center">
                <button onclick="getLyric('${detail.artist.name}', '${detail.title}')" class="btn btn-success">Get Lyrics</button>
            </div>
        `
        searchResultDiv.appendChild(songDiv);
    })
}

const getLyric = async (artist, title) => {
    const url = `https://api.lyrics.ovh/v1/${artist}/${title}`;
    try {
        const res = await fetch(url);
        const data = await res.json();
        lyricDetails(data.lyrics);
    }
    catch(error){
        errorMessage('Sorry!! Failed to load your lyric! Please try again later!');
    }


    //    const getLyric = (artist, title) => {
    //    const url = `https://api.lyrics.ovh/v1/${artist}/${title}`;
    //    fetch(url)
    //        .then(res => res.json())
    //        .then(data => lyricDetails(data.lyrics))
    //        .catch(err => errorMessage('Something went worng!! Please try again later!'));
}

const lyricDetails = lyrics => {
    const songLyricsDiv = document.getElementById('lyric');
    songLyricsDiv.innerHTML ="";
    songLyricsDiv.innerText = lyrics;
}

const errorMessage = error => {
    const errorDiv = document.getElementById('error-message');
    errorDiv.innerText = error;
}
