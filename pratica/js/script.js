
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
    let meuid
    $('.texto').mouseover(function(){
        meuid = $(this).attr('id')
        $('.'+meuid).show()
        
    });
    $('.texto').mouseout(function(){
        $('.'+meuid).hide()
    });
    