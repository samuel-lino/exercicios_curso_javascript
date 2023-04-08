
    $(document).ready(function(){
        $(".owl-carousel").owlCarousel()
    });
    $('.dropdown-toggle').click(function(){
        if($('.dropdown-menu').attr('aria-labelledby') == $(this).attr('id')){
            $('.dropdown-menu').addClass('show');
        }    
    });
    $(document).click(function(event) {
        // verifica se o clique ocorreu fora do menu suspenso ou do botão de navegação
        if (!$(event.target).closest('.dropdown-toggle, .dropdown-menu').length) {
            // remove a classe "show" do elemento "dropdown-menu"
            $('.dropdown-menu').removeClass('show');
        }
    });
    $('.texto').mouseover(function(){
        let nome = $(this).attr('id')
        $('.'+nome).find('img').show(1000)
        
    });
    $('.texto').mouseout(function(){
        let nome = $(this).attr('id')
        if ($('.' + nome).find('#img').is(':visible')){
            $('.'+nome).find('img').hide(1000)
        }
        
    });
    