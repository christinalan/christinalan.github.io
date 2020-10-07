window.addEventListener("load", function () {
  fetch(
    "https://www.ncdc.noaa.gov/cag/global/time-series/globe/land_ocean/ytd/12/1880-2016.json"
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      randomEmoji = Math.floor(Math.random() * data.length);

      console.log(randomEmoji);
    });
});
