let odddot = document.getElementById("dir_od");
let wildMint = document.getElementById("dir_wm");
let unity = document.getElementById("dir_unity");
let threeJS = document.getElementById("dir_threeJS");
let bf = document.getElementById("dir_bf");
let vice = document.getElementById("dir_vice");
let sfx = document.getElementById("dir_sfx");
let color = document.getElementById("dir_color");
let nate = document.getElementById("dir_nate");
let laenz = document.getElementById("dir_laenz");
let an = document.getElementById("dir_an");

let odddotVids = document
  .getElementById("od_videos")
  .getElementsByTagName("iframe");
let wildMintVids = document
  .getElementById("wm_videos")
  .getElementsByTagName("iframe");
let unityVids = document
  .getElementById("unity_videos")
  .getElementsByTagName("iframe");
let threeJSVids = document
  .getElementById("threeJS_videos")
  .getElementsByTagName("iframe");
let bfVids = document
  .getElementById("bf_videos")
  .getElementsByTagName("iframe");
let viceVids = document
  .getElementById("vice_videos")
  .getElementsByTagName("iframe");
let sfxVids = document
  .getElementById("sfx_videos")
  .getElementsByTagName("iframe");
let colorVids = document
  .getElementById("color_videos")
  .getElementsByTagName("iframe");
let laenzVids = document
  .getElementById("laenz_videos")
  .getElementsByTagName("iframe");
let anVids = document
  .getElementById("an_videos")
  .getElementsByTagName("iframe");

unity.addEventListener("mouseover", () => {
  for (let i = 0; i < wildMintVids.length; i++) {
    wildMintVids[i].style.display = "none";
  }
  for (let i = 0; i < odddotVids.length; i++) {
    odddotVids[i].style.display = "none";
  }
  for (let i = 0; i < threeJSVids.length; i++) {
    threeJSVids[i].style.display = "none";
  }
  for (let i = 0; i < bfVids.length; i++) {
    bfVids[i].style.display = "none";
  }
  for (let i = 0; i < viceVids.length; i++) {
    viceVids[i].style.display = "none";
  }
  sfxVids[0].style.display = "none";
  colorVids[0].style.display = "none";
  for (let i = 0; i < laenzVids.length; i++) {
    laenzVids[i].style.display = "none";
  }
  for (let i = 0; i < anVids.length; i++) {
    anVids[i].style.display = "none";
  }

  for (let i = 0; i < unityVids.length; i++) {
    unityVids[i].style.display = "block";
    // unityVids[i].style.width = "426px";
    // unityVids[i].style.height = "240px";
    unityVids[i].style.marginTop = i * 20;
  }
});

threeJS.addEventListener("mouseover", () => {
  for (let i = 0; i < unityVids.length; i++) {
    unityVids[i].style.display = "none";
  }
  for (let i = 0; i < wildMintVids.length; i++) {
    wildMintVids[i].style.display = "none";
  }
  for (let i = 0; i < odddotVids.length; i++) {
    odddotVids[i].style.display = "none";
  }
  for (let i = 0; i < bfVids.length; i++) {
    bfVids[i].style.display = "none";
  }
  for (let i = 0; i < viceVids.length; i++) {
    viceVids[i].style.display = "none";
  }
  sfxVids[0].style.display = "none";
  colorVids[0].style.display = "none";
  for (let i = 0; i < laenzVids.length; i++) {
    laenzVids[i].style.display = "none";
  }
  for (let i = 0; i < anVids.length; i++) {
    anVids[i].style.display = "none";
  }

  for (let i = 0; i < threeJSVids.length; i++) {
    threeJSVids[i].style.display = "block";
    // threeJSVids[i].style.width = "426px";
    // threeJSVids[i].style.height = "240px";
    threeJSVids[i].style.marginTop = i * 10;
  }
});

odddot.addEventListener("mouseover", () => {
  for (let i = 0; i < wildMintVids.length; i++) {
    wildMintVids[i].style.display = "none";
  }
  for (let i = 0; i < unityVids.length; i++) {
    unityVids[i].style.display = "none";
  }
  for (let i = 0; i < threeJSVids.length; i++) {
    threeJSVids[i].style.display = "none";
  }
  for (let i = 0; i < bfVids.length; i++) {
    bfVids[i].style.display = "none";
  }
  for (let i = 0; i < viceVids.length; i++) {
    viceVids[i].style.display = "none";
  }
  sfxVids[0].style.display = "none";
  colorVids[0].style.display = "none";
  for (let i = 0; i < laenzVids.length; i++) {
    laenzVids[i].style.display = "none";
  }
  for (let i = 0; i < anVids.length; i++) {
    anVids[i].style.display = "none";
  }

  for (let i = 0; i < odddotVids.length; i++) {
    odddotVids[i].style.display = "block";
    // odddotVids[i].style.width = "426px";
    // odddotVids[i].style.height = "240px";
    odddotVids[i].style.marginTop = i * 10;
  }
});

wildMint.addEventListener("mouseover", () => {
  for (let i = 0; i < odddotVids.length; i++) {
    odddotVids[i].style.display = "none";
  }
  for (let i = 0; i < unityVids.length; i++) {
    unityVids[i].style.display = "none";
  }
  for (let i = 0; i < threeJSVids.length; i++) {
    threeJSVids[i].style.display = "none";
  }
  for (let i = 0; i < bfVids.length; i++) {
    bfVids[i].style.display = "none";
  }
  for (let i = 0; i < viceVids.length; i++) {
    viceVids[i].style.display = "none";
  }
  sfxVids[0].style.display = "none";
  colorVids[0].style.display = "none";
  for (let i = 0; i < laenzVids.length; i++) {
    laenzVids[i].style.display = "none";
  }
  for (let i = 0; i < anVids.length; i++) {
    anVids[i].style.display = "none";
  }
  for (let i = 0; i < wildMintVids.length; i++) {
    wildMintVids[i].style.display = "block";
    // wildMintVids[i].style.width = "426px";
    // wildMintVids[i].style.height = "240px";
    wildMintVids[i].style.marginTop = i * 10;
  }
});

bf.addEventListener("mouseover", () => {
  for (let i = 0; i < unityVids.length; i++) {
    unityVids[i].style.display = "none";
  }
  for (let i = 0; i < wildMintVids.length; i++) {
    wildMintVids[i].style.display = "none";
  }
  for (let i = 0; i < odddotVids.length; i++) {
    odddotVids[i].style.display = "none";
  }
  for (let i = 0; i < threeJSVids.length; i++) {
    threeJSVids[i].style.display = "none";
  }
  for (let i = 0; i < viceVids.length; i++) {
    viceVids[i].style.display = "none";
  }
  sfxVids[0].style.display = "none";
  colorVids[0].style.display = "none";
  for (let i = 0; i < laenzVids.length; i++) {
    laenzVids[i].style.display = "none";
  }
  for (let i = 0; i < anVids.length; i++) {
    anVids[i].style.display = "none";
  }

  for (let i = 0; i < bfVids.length; i++) {
    bfVids[i].style.display = "block";
    // bfVids[i].style.width = "426px";
    // bfVids[i].style.height = "240px";
    bfVids[i].style.marginTop = i * 10;
  }
});

vice.addEventListener("mouseover", () => {
  for (let i = 0; i < unityVids.length; i++) {
    unityVids[i].style.display = "none";
  }
  for (let i = 0; i < wildMintVids.length; i++) {
    wildMintVids[i].style.display = "none";
  }
  for (let i = 0; i < odddotVids.length; i++) {
    odddotVids[i].style.display = "none";
  }
  for (let i = 0; i < threeJSVids.length; i++) {
    threeJSVids[i].style.display = "none";
  }
  for (let i = 0; i < bfVids.length; i++) {
    bfVids[i].style.display = "none";
  }
  sfxVids[0].style.display = "none";
  colorVids[0].style.display = "none";
  for (let i = 0; i < laenzVids.length; i++) {
    laenzVids[i].style.display = "none";
  }
  for (let i = 0; i < anVids.length; i++) {
    anVids[i].style.display = "none";
  }

  for (let i = 0; i < viceVids.length; i++) {
    viceVids[i].style.display = "block";
    // viceVids[i].style.width = "426px";
    // viceVids[i].style.height = "240px";
    viceVids[i].style.marginTop = i * 10;
  }
});

sfx.addEventListener("mouseover", () => {
  for (let i = 0; i < wildMintVids.length; i++) {
    wildMintVids[i].style.display = "none";
  }
  for (let i = 0; i < odddotVids.length; i++) {
    odddotVids[i].style.display = "none";
  }
  for (let i = 0; i < threeJSVids.length; i++) {
    threeJSVids[i].style.display = "none";
  }
  for (let i = 0; i < bfVids.length; i++) {
    bfVids[i].style.display = "none";
  }
  for (let i = 0; i < viceVids.length; i++) {
    viceVids[i].style.display = "none";
  }
  colorVids[0].style.display = "none";
  for (let i = 0; i < laenzVids.length; i++) {
    laenzVids[i].style.display = "none";
  }
  for (let i = 0; i < anVids.length; i++) {
    anVids[i].style.display = "none";
  }

  sfxVids[0].style.display = "block";
  //   sfxVids[0].style.width = "426px";
  //   sfxVids[0].style.height = "240px";
});

color.addEventListener("mouseover", () => {
  for (let i = 0; i < odddotVids.length; i++) {
    odddotVids[i].style.display = "none";
  }

  for (let i = 0; i < wildMintVids.length; i++) {
    wildMintVids[i].style.display = "none";
  }
  for (let i = 0; i < unityVids.length; i++) {
    unityVids[i].style.display = "none";
  }
  for (let i = 0; i < threeJSVids.length; i++) {
    threeJSVids[i].style.display = "none";
  }
  for (let i = 0; i < bfVids.length; i++) {
    bfVids[i].style.display = "none";
  }
  for (let i = 0; i < viceVids.length; i++) {
    viceVids[i].style.display = "none";
  }
  sfxVids[0].style.display = "none";
  for (let i = 0; i < laenzVids.length; i++) {
    laenzVids[i].style.display = "none";
  }
  for (let i = 0; i < anVids.length; i++) {
    anVids[i].style.display = "none";
  }

  colorVids[0].style.display = "block";
  //   colorVids[0].style.width = "426px";
  //   colorVids[0].style.height = "240px";
});

laenz.addEventListener("mouseover", () => {
  for (let i = 0; i < odddotVids.length; i++) {
    odddotVids[i].style.display = "none";
  }
  for (let i = 0; i < wildMintVids.length; i++) {
    wildMintVids[i].style.display = "none";
  }
  for (let i = 0; i < unityVids.length; i++) {
    unityVids[i].style.display = "none";
  }
  for (let i = 0; i < threeJSVids.length; i++) {
    threeJSVids[i].style.display = "none";
  }
  for (let i = 0; i < bfVids.length; i++) {
    bfVids[i].style.display = "none";
  }
  for (let i = 0; i < viceVids.length; i++) {
    viceVids[i].style.display = "none";
  }
  sfxVids[0].style.display = "none";
  colorVids[0].style.display = "none";
  for (let i = 0; i < anVids.length; i++) {
    anVids[i].style.display = "none";
  }

  for (let i = 0; i < laenzVids.length; i++) {
    laenzVids[i].style.display = "block";
    // laenzVids[i].style.width = "426px";
    // laenzVids[i].style.height = "240px";
    laenzVids[i].style.marginTop = i * 10;
  }
});

nate.addEventListener("mouseover", () => {
  for (let i = 0; i < odddotVids.length; i++) {
    odddotVids[i].style.display = "none";
  }
  for (let i = 0; i < wildMintVids.length; i++) {
    wildMintVids[i].style.display = "none";
  }
  for (let i = 0; i < unityVids.length; i++) {
    unityVids[i].style.display = "none";
  }
  for (let i = 0; i < threeJSVids.length; i++) {
    threeJSVids[i].style.display = "none";
  }
  for (let i = 0; i < bfVids.length; i++) {
    bfVids[i].style.display = "none";
  }
  for (let i = 0; i < viceVids.length; i++) {
    viceVids[i].style.display = "none";
  }
  sfxVids[0].style.display = "none";

  for (let i = 0; i < laenzVids.length; i++) {
    laenzVids[i].style.display = "none";
  }
  for (let i = 0; i < anVids.length; i++) {
    anVids[i].style.display = "none";
  }

  colorVids[0].style.display = "block";
  //   colorVids[0].style.width = "426px";
  //   colorVids[0].style.height = "240px";
});

an.addEventListener("mouseover", () => {
  for (let i = 0; i < odddotVids.length; i++) {
    odddotVids[i].style.display = "none";
  }
  for (let i = 0; i < wildMintVids.length; i++) {
    wildMintVids[i].style.display = "none";
  }
  for (let i = 0; i < unityVids.length; i++) {
    unityVids[i].style.display = "none";
  }
  for (let i = 0; i < threeJSVids.length; i++) {
    threeJSVids[i].style.display = "none";
  }
  for (let i = 0; i < bfVids.length; i++) {
    bfVids[i].style.display = "none";
  }
  for (let i = 0; i < viceVids.length; i++) {
    viceVids[i].style.display = "none";
  }
  sfxVids[0].style.display = "none";
  colorVids[0].style.display = "none";
  for (let i = 0; i < laenzVids.length; i++) {
    laenzVids[i].style.display = "none";
  }

  for (let i = 0; i < anVids.length; i++) {
    anVids[i].style.display = "block";
    // anVids[i].style.width = "426px";
    // anVids[i].style.height = "240px";
    anVids[i].style.marginTop = i * 10;
  }
});
