const playBtn = document.getElementById("play"),
  video = document.getElementById("video"),
  image = document.getElementById("image");

playBtn.addEventListener("click", () => {
  image.classList.toggle("is-disabled");
  video.classList.toggle("is-played");
});
