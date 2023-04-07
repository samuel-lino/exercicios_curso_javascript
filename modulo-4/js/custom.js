// instancia jquery e evita conflitos
// jQuery( function($){
$(document).ready(function(){

    $('.owl-carousel').owlCarousel({
      // torna o carrossel em um loop, ou seja quando chega ao fim dos produtos volta ao primeiro
      loop:true,
      margin:10,
      nav:true,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:3
          },
          1000:{
              items:5
          }
      }
      });

   
   $('.featured-item a').addClass('btn btn-dark stretch-link');
   $('#navbarResponsive').css('margin', '20px');
   $('.featured-item ').mouseover(function(){
      $(this).css('background', '#0000FF')
      $('h4').css('color', '#ff0000')
   })

   $('.featured-item').mouseout(function(){
      $(this).css('background', '#ffffff')
      $('h4').css('color', '#000000')
   })
   $('.featured-item a').mouseover(function(){
      $(this).css('color', '#008000')
   })
   $('.featured-item a').mouseout(function(){
      $(this).css('color', '#ffffff')
   })
   $('.featured-item').append('<h5>quantidade<span class="badge text-bg-secondary">4</span></h5>')
   $('.featured-item h5').addClass('btn btn-success')
   $('.featured-item h5').css({
      'margin-left': '50px',
      'margin-top': '5px'
      });
   
   $('.featured-item').append('<div class="alert alert-info" role="alert">Oferta imperdivel</div>')
});
