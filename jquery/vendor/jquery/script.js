
jQuery( function($){
    // inicia a biblioteca owl
    $(document).ready(function(){
        $(".owl-carousel").owlCarousel({
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
    });
    //configurando uma cor de botão para o link 'a' e mudando a sua cor a class btn é para o botão e btn-dark muda sua cor para escuro
    $('.featured-item a').addClass('btn btn-dark stretch-link');
    $('.featured-item:first h4').append('<span class="badge bg-success">novo</span>');
    // como mudar o css com jQuery
    //$('.featured-item:first h4').css('color', '#0000FF');
    // para passar mais de um parametro devese usar a logica de biblioteca que é chave(em texto):valor(em texto) e colocar uma virgula para acressentar um novo atributo.
    $('.featured-item h4').mouseover(function(){
        $(this).css({
            'color': '#ff0000',
            'background': '#0000FF'
        });
    });

    $('.featured-item h4').mouseout(function(){
        $(this).css({
            'color': '#000000',
            'background': '#FFFFFF'
        });
    });
})