//when whole document is uploaded
$(document).ready(function () { 

  // function to load header and footer files
  $(function () {
    //function to load header file
    $("#navigation").load("./inc/header.html");
  });
  $(function () {
    //function to load footer file
    $("#footer").load("./inc/footer.html");
  });

// animations affect to product cards
  $(".card-one").hover(function(){
    $(".btn-1").slideToggle("slow");
  });
  $(".card-two").hover(function(){
    $(".btn-2").slideToggle("slow");
  });
  $(".card-three").hover(function(){
    $(".btn-3").slideToggle("slow");
  });

  
 
});


