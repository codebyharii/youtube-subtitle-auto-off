function disableCaptions() {
  const captionButton = document.querySelector('.ytp-subtitles-button');
  if (captionButton && captionButton.getAttribute("aria-pressed") === "true") {
    captionButton.click();
    console.log("Captions disabled");
  }
}

setTimeout(disableCaptions, 2000);
setInterval(disableCaptions, 3000);
