console.log('app is running')


$(document).ready(function() {
    
    $("#hidebut").click(function(){
       $("#ball").toggleClass("hide");
       console.log('clickhide');
   });
   
   $("#resetbut").click(function(){
       console.log('click')
     $("#ball").removeClass();
     $("#ball").addClass("reset");
   });

   
   $("#red").click(function(){
       console.log('click')
     $("#ball").removeClass();
     $("#ball").addClass("highred");
   });
   
   $("#blue").click(function(){
       $("#ball").removeClass();
        $("#ball").addClass("highblue");
   });
   
   $("#green").click(function(){
       $("#ball").removeClass();
     $("#ball").addClass("highgreen");
   });
   
  $('#moveleft').click(function() {
        $('#ball').animate({
        'marginLeft' : "-=200px" //moves left
        }, 'fast'
        );
    });
    $('#moveright').click(function() {
        $('#ball').animate({
        'marginLeft' : "+=200px" //moves right
        }, 'fast'
        );
    });
    $('#movedown').click(function() {
        $('#ball').animate({
        'marginTop' : "+=200px" //moves down
        }, 'fast'
        );
    });
    $('#moveup').click(function() {
        $('#ball').animate({
        'marginTop' : "-=200px" //moves up
        }, 'fast'
        );
    });
});