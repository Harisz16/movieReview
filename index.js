const img = document.querySelector(".img");
const title = document.querySelector(".title");
const type = document.querySelector(".type");
const year = document.querySelector(".years");
const rated = document.querySelector(".rated");
const runtime = document.querySelector(".runtime");
const genre = document.querySelector(".genre");
const director = document.querySelector(".director");
const writer = document.querySelector(".writer");
const cast = document.querySelector(".cast");
const plot = document.querySelector(".plot");
const lan = document.querySelector(".lan");
const award = document.querySelector(".awards");
const votes = document.querySelector(".votes");
const box = document.querySelector(".boxo");
const tor = document.querySelector(".tor");
const imbr = document.querySelector(".imbdr");
const btn = document.querySelector(".search-btn");
const searchBox = document.querySelector(".search-box");
// searchBox.value = "iron man";
btn.addEventListener("click", () => {
  const movie = searchBox.value;
  fetch(`http://www.omdbapi.com/?t=${movie}&apikey=311343b6`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      img.src = data.Poster;
      title.innerHTML = data.Title;
      type.innerHTML = ":" + data.Type;
      year.innerHTML = ":" + data.Year;
      rated.innerHTML = ":" + data.Rated;
      runtime.innerHTML = ":" + data.Runtime;
      genre.innerHTML = ":" + data.Genre;
      director.innerHTML = ":" + data.Director;
      writer.innerHTML = ":" + data.Writer;
      cast.innerHTML = ":" + data.Actors;
      plot.innerHTML = ":" + data.Plot;
      lan.innerHTML = ":" + data.Language;
      award.innerHTML = ":" + data.Awards;
      votes.innerHTML = ":" + data.imdbVotes;
      box.innerHTML = ":" + data.BoxOffice;
      imbr.innerHTML = ":" + data.imbdRating;
      tor.innerHTML = ":" + data.Ratings[1].Value;
      searchBox.value = "";
    });
  // console.log(data);
});
