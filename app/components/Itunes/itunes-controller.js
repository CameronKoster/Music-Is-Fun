import ItunesService from "./itunes-service.js";

//PRIVATE

const itunesService = new ItunesService()

function drawSongs(results) {
  //YOUR CODING STARTS HERE
  let songs = itunesService.getMusicByArtist()
  let template = ""
  results.forEach(song => {
    template += `
    <div class="col-12 info">
    <img src="${song.albumArt}">
    <audio controls>
    <source src="${song.preview}" type="audio/mp3">
    <source src="${song.preview}" type="audio/ogg">
    </audio>
    <div>${song.artist} | ${song.title} | ${song.collection} | $${song.price}</div>
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