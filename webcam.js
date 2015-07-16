(function(){
var mediaOptions = { audio: false,
                      video: {
                        mandatory: {
                          maxWidth: 1280,
                          maxHeight: 720,
                          minWidth: 1280,
                          minHeight: 720
                        }
                      }};

  if (!navigator.getUserMedia) {
      navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
  }

  if (!navigator.getUserMedia){
    return alert('getUserMedia not supported in this browser.');
  }

  navigator.getUserMedia(mediaOptions, success, function(e) {
    console.log(e);
  });

  function success(stream){
    var video = document.querySelector("#player");
    video.src = window.URL.createObjectURL(stream);
  }
})();
