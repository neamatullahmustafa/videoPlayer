"use strict";
let videos = [
  "videos/Fairly OddParents _ Theme Song _ Nick.mp4",
  "videos/Kim Possible - Theme Song _ Disney+ Throwbacks _ Disney+.mp4",
  "videos/Phineas and Ferb Theme Song 🎶 _  @disneyxd.mp4",
];
let play1 = document.querySelector(".fa-circle-play"),
  play2 = document.querySelector(".fa-play"),
  pause = document.querySelector(".fa-pause"),
  backwardFast = document.querySelector(".fa-backward-fast"),
  forwardFast = document.querySelector(".fa-forward-fast"),
  backward = document.querySelector(".fa-backward"),
  forward = document.querySelector(".fa-forward"),
  video = document.getElementById("video"),
  speed = document.querySelector(".fa-clock"),
  sound = document.querySelector(".fa-volume-high"),
  curr = 1;
console.log(video);
pause.addEventListener("click", function () {
  video.pause();
  play1.classList.replace("d-none", "d-block");
  play2.classList.replace("d-none", "d-inline");
  pause.classList.replace("d-inline", "d-none");
});
video.addEventListener("click", function () {
  video.pause();
  play1.classList.replace("d-none", "d-block");
  pause.classList.replace("d-inline", "d-none");
  play2.classList.replace("d-none", "d-inline");
});
play2.addEventListener("click", function () {
  video.play();
  play1.classList.replace("d-block", "d-none");
  pause.classList.replace("d-none", "d-inline");
  play2.classList.replace("d-inline", "d-none");
});
play1.addEventListener("click", function () {
  video.play();
  play1.classList.replace("d-block", "d-none");
  pause.classList.replace("d-none", "d-inline");
  play2.classList.replace("d-inline", "d-none");
});
forward.addEventListener("click", function () {
  if (curr >= 2) return;
  video.src = videos[++curr];
  play1.classList.replace("d-none", "d-block");
  play2.classList.replace("d-none", "d-inline");
});
backward.addEventListener("click", function () {
  if (curr <= 0) return;
  video.src = videos[--curr];
  play1.classList.replace("d-none", "d-block");
  play2.classList.replace("d-none", "d-inline");
});
backwardFast.addEventListener("click", function () {
  video.currentTime -= curr;
  //  video.playbackRate = 0.5;
});
forwardFast.addEventListener("click", function () {
  video.currentTime += curr;
  // video.playbackRate = 2;
});
speed.addEventListener("click", function () {
  if (document.querySelector(".dropdown").classList.contains("d-none")) {
    document.querySelector(".dropdown").classList.replace("d-none", "d-block");
  } else {
    document.querySelector(".dropdown").classList.replace("d-block", "d-none");
  }
});
sound.addEventListener("click", function () {
  if (document.querySelector(".dropdown2").classList.contains("d-none")) {
    document.querySelector(".dropdown2").classList.replace("d-none", "d-block");
  } else {
    document.querySelector(".dropdown2").classList.replace("d-block", "d-none");
  }
});
document
  .querySelector(".dropdown :nth-child(1)")
  .addEventListener("click", function () {
    video.playbackRate = 0.25;
  });
document
  .querySelector(".dropdown :nth-child(2)")
  .addEventListener("click", function () {
    video.playbackRate = 0.5;
  });
document
  .querySelector(".dropdown :nth-child(3)")
  .addEventListener("click", function () {
    video.playbackRate = 0.75;
  });
document
  .querySelector(".dropdown :nth-child(4)")
  .addEventListener("click", function () {
    video.playbackRate = 1;
  });
document
  .querySelector(".dropdown :nth-child(5)")
  .addEventListener("click", function () {
    video.playbackRate = 1.25;
  });
document
  .querySelector(".dropdown :nth-child(6)")
  .addEventListener("click", function () {
    video.playbackRate = 1.5;
  });
document
  .querySelector(".dropdown :nth-child(7)")
  .addEventListener("click", function () {
    video.playbackRate = 1.75;
  });
document
  .querySelector(".dropdown :nth-child(8)")
  .addEventListener("click", function () {
    video.playbackRate = 2;
  });
document
  .querySelector(".dropdown2 :nth-child(1)")
  .addEventListener("click", function () {
    video.volume = 0.25;
  });
document
  .querySelector(".dropdown2 :nth-child(2)")
  .addEventListener("click", function () {
    video.volume = 0.5;
  });
document
  .querySelector(".dropdown2 :nth-child(3)")
  .addEventListener("click", function () {
    video.volume = 0.75;
  });
document
  .querySelector(".dropdown2 :nth-child(4)")
  .addEventListener("click", function () {
    video.volume = 1;
    console.log(video.currentTime);
  });
setInterval(function () {
  document.getElementById("meter").value = video.currentTime;
  document.getElementById("meter").max = video.duration;
}, 100);
