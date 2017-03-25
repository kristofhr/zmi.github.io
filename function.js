//$(window).scroll(function(){

  var wScroll = $(this).scrollTop();

  $('#title-box').css({
    'transform' : 'translate(0px, '+ wScroll /2.5 +'%)'
  });


  $('h2').css('display', 'block');



});

$( "#rolunk" ).click(function() {
  $( "#firsttext-box" ).slideToggle( "slow", function() {
  });


$("#vonyarc").click(function(){
        $("#second-box").slideToggle( "slow" );
    });

$( "#amért" ).click(function(){
          $( "#third-box" ).slideToggle( "slow" );
    });


$( "#szo" ).click(function(){
          $( "#fourth-box" ).slideToggle( "slow" );
    });

$( "#gal" ).click(function(){
          $( "#fifth-box" ).slideToggle( "slow" );
    });

$( "#kapcs" ).click(function(){
          $( "#sixth-box" ).slideToggle( "slow" );
    });


});
