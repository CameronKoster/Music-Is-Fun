import ItunesService from "./itunes-service.js";

//PRIVATE

const itunesService = new ItunesService()

function drawSongs(results) {
  //YOUR CODING STARTS HERE
  let songs = itunesService.getMusicByArtist()
  let template = ""
  results.forEach(song => {
    template += `
<div>
   <img src="${song.albumArt}">
   <h1>${song.artist}</h1>
    <h2>${song.title}</h2>
    <h3>${song.collection}</h3>
    <h4>${song.price}</h4>
    <audio controls>
       <source src="${song.preview}" type="audio/mp3">
    </audio>
</div>
  `
  })



  document.getElementById("songs").innerHTML = template
}


//PUBLIC
class ItunesController {
  //DO NOT MODIFY THIS METHOD
  getMusic(e) {
    e.preventDefault();
    var artist = e.target.artist.value;
    //changes the button to loading while songs load
    $('#get-music-button').text('LOADING....');
    itunesService.getMusicByArtist(artist).then(results => {
      drawSongs(results)
      //changes button back to GET MUSIC once songs are loaded
      $('#get-music-button').text('GET MUSIC');
    })
  }


}


export default ItunesController