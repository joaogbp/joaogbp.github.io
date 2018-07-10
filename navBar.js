$(window).scroll(function(){
  console.log( $(document).scrollTop() );
  if ($(document).scrollTop() > 230) {
    $('nav').addClass('myNavbarDown');
    // $('li > a').css("color", "lightgray");
    // $('li > a').removeClass('texto-inicial');

    // $( 'li > a' )
    // .mouseover(function() {
    //   $( this ).css("background-color", "gray");
    //   $( this ).css("color", "white");
    // })
    // .mouseout(function() {
    //   $( this ).css("background-color", "rgba(80, 80, 80, 1)");
    //   $( this ).css("color", "#777777");
    // });
  }else{
    $('nav').removeClass('myNavbarDown');
    // $('li > a').css("color", "#777777");
    $('li > a').addClass('texto-inicial');
    // $( 'li > a' )
    // .mouseover(function() {
    //   $( this ).css("background-color", "gray");
    //   $( this ).css("color", "white");
    // })
    // .mouseout(function() {
    //   $( this ).css("background-color", "rgba(80, 80, 80, 0.1)");
    //   $( this ).css("color", "#777777");
    // });
  }
});
