
    $(document).ready(function(){
        $(".owl-carousel").owlCarousel()
    });
    const emailvalido = /^[a-z0-9.]+@[a-z]+\.[a-z]+(\.[a-z]+)?$/i;
    const telefonevalido = /^[0-9]{11}$/;
    const nascimentovalido = /^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/;
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
        mymodal.show();

    })

    /*tentei assim mas não funcionou por algum motivo
    $('.nav-modal-open').click(function(){
        let elem = $(this).attr('rel')
        $('modal-body').html($('#' + elem).html())
    })*/

    function validar(elemento){
            if($(elemento).attr('name') == 'nome'){
                if(elemento.value.match(/[a-z]/i)){
                    $(elemento).removeClass('erro');
                    $(elemento).parent().find('#help' + $(elemento).attr('id')).hide();
                }
                else{
                    $(elemento).addClass('erro');
                    $(elemento).parent().find('#help' + $(elemento).attr('id')).show();
                }
            }
            else if($(elemento).attr('name') == 'email'){
                if(elemento.value.match(emailvalido)){
                    $(elemento).removeClass('erro');
                    $(elemento).parent().find('#help' + $(elemento).attr('id')).hide();
                }
                else{
                    $(elemento).addClass('erro');
                    $(elemento).parent().find('#help' + $(elemento).attr('id')).show();
                }
            }
            else if($(elemento).attr('name') == 'telefone'){
                if(elemento.value.match(telefonevalido)){
                    $(elemento).removeClass('erro');
                    $(elemento).parent().find('#help' + $(elemento).attr('id')).hide();
                }
                else{
                    $(elemento).addClass('erro');
                    $(elemento).parent().find('#help' + $(elemento).attr('id')).show();
                }
            }
            else if($(elemento).attr('name') == 'nascimento'){
                if(elemento.value.match(nascimentovalido)){
                    $(elemento).removeClass('erro');
                    $(elemento).parent().find('#help' + $(elemento).attr('id')).hide();
                }
                else{
                    $(elemento).addClass('erro');
                    $(elemento).parent().find('#help' + $(elemento).attr('id')).show();
                }
            }
            
    };
    $('body').on('blur', 'input' ,function(e){
        validar(this)
    })

    $('body').on('submit', '.modal-body .form', function(e){
        e.preventDefault();
        const nome = $('#nome').val()
        const email = $('#email').val()

        if(nome == '' || email == ''){
            console.log('um ou mais campos obrigatorios estão vazios')
        }
        
    })
    
