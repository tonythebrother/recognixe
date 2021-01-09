$(function () {
  $("#navigation button").stop().animate({ marginLeft: "-40px" }, 1000);

  $("#navigation > .li1").hover(
    function () {
      $(".opcion1").fadeOut("fast", function () {
        $(this).attr("src", "./assets/images/lente.png").fadeIn("fast");
      });
      $("button", $(this)).stop().animate({ marginLeft: "+25px" }, 500);
    },
    function () {
      $(".opcion1").fadeOut("fast", function () {
        $(this).attr("src", "./assets/images/lente1.png").fadeIn("fast");
      });
      $("button", $(this)).stop().animate({ marginLeft: "-40px" }, 500);
    }
  );

  $("#navigation > .li2").hover(
    function () {
      $(".opcion2").fadeOut("fast", function () {
        $(this).attr("src", "../assets/images/victory1.png").fadeIn("fast");
      });
      $("button", $(this)).stop().animate({ marginLeft: "+25px" }, 500);
    },
    function () {
      $(".opcion2").fadeOut("fast", function () {
        $(this).attr("src", "../assets/images/victory.png").fadeIn("fast");
      });
      $("button", $(this)).stop().animate({ marginLeft: "-40px" }, 500);
    }
  );

  $("#navigation > .li3").hover(
    function () {
      $(".github").fadeOut("fast", function () {
        $(this).attr("src", "./assets/images/GitHub_logo1.png").fadeIn("fast");
      });
      $("button", $(this)).stop().animate({ marginLeft: "+25px" }, 500);
    },
    function () {
      $(".github").fadeOut("fast", function () {
        $(this).attr("src", "../assets/images/GitHub_logo.png").fadeIn("fast");
      });
      $("button", $(this)).stop().animate({ marginLeft: "-40px" }, 500);
    }
  );
});

$("#facial").click(function () {

  $("aside").children().fadeOut("fast", function () {
    $("aside").empty();

    $(`<div class="spinner"></div>
    
    <br>
    <p class="p">Reconocedor Facial</p>`)
    .appendTo("aside");
  });
  
});

$("#gestual").click(function () { 
  
  $("aside").children().fadeOut("fast", function () {
    
    $("aside").empty();

    $(`<div class="spinner"></div>
    <br>
    <p class="p">Reconocedor de Señas</p>`)
    .appendTo("aside");
  });
 
});

$("#code").click(function () { 
  
  window.open("https://www.github.com/");
  
});