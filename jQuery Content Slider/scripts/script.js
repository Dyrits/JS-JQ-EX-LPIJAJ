$(document).ready(function() {
  
  var transitionSpeed = 500;
  var autoSwitch = true;
  var autoSwitchSpeed = 4000;

  $(".slide").first().addClass("active");
  $(".slide").hide();
  $(".active").show();

  function nextSlide() {
    $(".active").removeClass("active").addClass("oldActive");
    if ($(".oldActive").is(":last-child")) {
      $(".slide").first().addClass("active");
    } else {
      $(".oldActive").next().addClass("active");
    }
    $(".oldActive").removeClass("oldActive");
    $(".slide").fadeOut(transitionSpeed);
    $(".active").fadeIn(transitionSpeed);
  };

  function previousSlide() {
    $(".active").removeClass("active").addClass("oldActive");
    if ($(".oldActive").is(":first-child")) {
      $(".slide").last().addClass("active");
    } else {
      $(".oldActive").prev().addClass("active");
    }
    $(".oldActive").removeClass("oldActive");
    $(".slide").fadeOut(transitionSpeed);
    $(".active").fadeIn(transitionSpeed);
  };

  $("#next").click(nextSlide);
  $("#prev").click(previousSlide);
  if(autoSwitch) {setInterval(nextSlide, autoSwitchSpeed);}
  
})