let notesBox = document.getElementById("notesBox");
let close = document.getElementById("close");

let mixes = document.getElementById("mixes");
let mixesLinks = document.getElementsByClassName("mixesLinks");

let releases = document.getElementById("releases");
let releasesLinks = document.getElementsByClassName("releasesLinks");

let av = document.getElementById("av");
let avLinks = document.getElementsByClassName("avLinks");

let live = document.getElementById("live");
let liveLinks = document.getElementsByClassName("liveLinks");

function dragElement(elmnt) {
  var pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id + "header").addEventListener("mousedown", (e) => dragMouseDown);
    document.getElementById(elmnt.id + "header").addEventListener("touchstart", (e) => dragMouseDown);
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.addEventListener("mousedown", (e) => dragMouseDown)
    elmnt.addEventListener("touchstart", (e) => dragMouseDown) 
  }

  function dragMouseDown(e) {
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.addEventListener("mouseup", (e) => closeDragElement) 
    document.addEventListener("touchend", (e) => closeDragElement) 
    // call a function whenever the cursor moves:
    document.addEventListener("mousemove", (e) => elementDrag) 

    document.addEventListener("touchmove", (e) => closeDragElement) 
  }

  function elementDrag(e) {
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = elmnt.offsetTop - pos2 + "px";
    elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.addEventListener("mouseup", (e) => null)
    document.addEventListener("mousemove", (e) => null)
    document.addEventListener("touchmove", (e) => null);
    document.addEventListener("touchend", (e) => null)
  }
}

window.addEventListener("load", () => {
  close.onclick = () => {
    notesBox.style.display = "none";
  };

  av.onmouseover = () => {
    notesBox.style.display = "block";

    for (let i = 0; i < avLinks.length; i++) {
      avLinks[i].style.display = "block";
    }

    for (let i = 0; i < releasesLinks.length; i++) {
      releasesLinks[i].style.display = "none";
    }

    for (let i = 0; i < mixesLinks.length; i++) {
      mixesLinks[i].style.display = "none";
    }
    for (let i = 0; i < liveLinks.length; i++) {
      liveLinks[i].style.display = "none";
    }
  };

  releases.onmouseover = () => {
    notesBox.style.display = "block";

    for (let i = 0; i < releasesLinks.length; i++) {
      releasesLinks[i].style.display = "block";
    }

    for (let i = 0; i < mixesLinks.length; i++) {
      mixesLinks[i].style.display = "none";
    }

    for (let i = 0; i < avLinks.length; i++) {
      avLinks[i].style.display = "none";
    }
    for (let i = 0; i < liveLinks.length; i++) {
      liveLinks[i].style.display = "none";
    }
  };

  mixes.onmouseover = () => {
    notesBox.style.display = "block";
    for (let i = 0; i < mixesLinks.length; i++) {
      mixesLinks[i].style.display = "block";
    }
    for (let i = 0; i < releasesLinks.length; i++) {
      releasesLinks[i].style.display = "none";
    }
    for (let i = 0; i < avLinks.length; i++) {
      avLinks[i].style.display = "none";
    }
    for (let i = 0; i < liveLinks.length; i++) {
      liveLinks[i].style.display = "none";
    }
  };

  live.onmouseover = () => {
    notesBox.style.display = "block";
    for (let i = 0; i < liveLinks.length; i++) {
      liveLinks[i].style.display = "block";
    }
    for (let i = 0; i < mixesLinks.length; i++) {
      mixesLinks[i].style.display = "none";
    }
    for (let i = 0; i < releasesLinks.length; i++) {
      releasesLinks[i].style.display = "none";
    }
    for (let i = 0; i < avLinks.length; i++) {
      avLinks[i].style.display = "none";
    }
  };

  var x = window.matchMedia("(min-width: 375px)");
  if (x.matches) {
    dragElement(document.getElementById("notesBox"));
  } else {
  }

  dragElement(document.getElementById("notesBox"));
});
