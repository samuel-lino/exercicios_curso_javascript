
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
    $('.nav-modal-open').click( function(e){
        e.preventDefault();
        let elem = '#' + $(this).attr('rel');
        let conteudo = $(elem).html();
        $('.modal-body').html(conteudo);
        $('.modal-title').html($(this).html())
        let mymodal = new bootstrap.Modal($('#modalId'));
        mymodal.show()

    })

    /*tentei assim mas não funcionou por algum motivo
    $('.nav-modal-open').click(function(){
        let elem = $(this).attr('rel')
        $('modal-body').html($('#' + elem).html())
    })*/
    
