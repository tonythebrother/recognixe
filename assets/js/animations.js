$(function () {
  $("#navigation button").stop().animate({ marginLeft: "-40px" }, 1000);

  $("#facial").hover(
    function () {
      $(".opcion1").fadeOut("fast", function () {
        $(this).attr("src", "./assets/images/lente.png").fadeIn("fast");
      });
    },
    function () {
      $(".opcion1").fadeOut("fast", function () {
        $(this).attr("src", "./assets/images/lente1.png").fadeIn("fast");
      });
    }
  );

  $("#profile").hover(
    function () {
      $(".opcion2").fadeOut("fast", function () {
        $(this).attr("src", "../assets/images/1014201915_HDR.jpg").fadeIn("fast");
      });
    },
    function () {
      $(".opcion2").fadeOut("fast", function () {
        $(this).attr("src", "../assets/images/0914202214_HDR.jpg").fadeIn("fast");
      });
    }
  );

  $("#code").hover(
    function () {
      $(".github").fadeOut("fast", function () {
        $(this).attr("src", "./assets/images/GitHub_logo1.png").fadeIn("fast");
      });
    },
    function () {
      $(".github").fadeOut("fast", function () {
        $(this).attr("src", "../assets/images/GitHub_logo.png").fadeIn("fast");
      });
      
    }
  );
});

$("#facial").click(function () {

  $("aside").children().fadeOut("fast", function () {
    $("aside").empty();

    $(`<div class="spinner"></div>
    
    <video id="video" autoplay muted>
    </video>
    <br>
    <p class="p">Reconocedor Facial<br>
    Espere unos momentos, hasta que la cámara pueda reconocer su rostro.</p>`)
    .appendTo("aside");

    $(`<script src="./assets/js/main.js"></script>`)
    .appendTo("body");
  });
  
});

$("#profile").click(function () { 
  
  window.open("https://github.com/tonythebrother");
 
});

$("#code").click(function () { 
  
  window.open("https://github.com/tonythebrother/recognixe");
  
});