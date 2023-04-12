
//inicia o owl
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
   
   // muda o link a em um botão de cor dark 
   $('.featured-item a').addClass('btn btn-dark stretch-link');
   
   $('#navbarResponsive').css('margin', '20px');
   //muda a cor do texto do link para verde ao passar o mouse por cima
   $('.featured-item a').mouseover(function(){
      $(this).css('color', '#008000')
   });
   //volta a cor do texto a original
   $('.featured-item a').mouseout(function(){
      $(this).css({
         'color': '#ffffff'
      })
   });
   let produtosquant = {'Produto 1' :'4', 'Produto 2': '2', 'Produto 3': '0', 'Produto 4': '5', 'Produto 5': '3', 'Produto 6': '1', 'Produto 7': '2', 'Produto 8': '9', 'Produto 9': '4'};
   
   
   //cria um alerta sobre o produto 
   $('.featured-item').append('<div class="alert alert-info" role="alert">Oferta imperdivel</div>');
   //organiza o alerta
   $('.alert').css({
      'text-align': 'center'
   });
   
   //esconde as informaçoes do produto
   $('.featured-item a, h4, h6').hide();
   //exibe as informações do produto ao passar o mouse sobre a imagem
   $('.featured-item').mouseover(function(){
      
      let quant = $(this).find('h4').html()
      let num = produtosquant[quant]
      //verifica se o badge ja existe
      if ($(this).find('h5').length == 0){
         //criar uma badge que informe a quantidade dos itens
         $(this).append('<h5>quantidade<span class="badge text-bg-secondary">'+ num +'</span></h5>')
         //torna a badge mais apresentavel
         $('.featured-item h5').addClass('btn btn-success');
         $('.featured-item h5').css({
            'margin-left': '40px',
            'margin-top': '5px',
            'text-align': 'center'
         })
      }
      $(this).find('a, h4, h6').show();
   });
   //esconde as informações novamente apos o mouse sair
   $('.featured-item').mouseout(function(){
      if($(this).find('h5').length > 0){
         $(this).find('h5').remove()
      }
      $(this).find('a, h4, h6').hide();
   });
   //apenas mudança nos alinhamentos 
   $('.featured-item a').css({
      'margin-left': '60px'
   });
   $('.featured-item h4, h6').css({
      'text-align': 'center'
   });
   $('#ok').on('click', function(){
      produtosquant['Produto 2'] = $('#produto2').val()
      console.log(produtosquant['Produto 2'])
   })
});

