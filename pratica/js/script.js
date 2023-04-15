
$(document).ready(function(){
    $(".owl-carousel").owlCarousel()
});
const emailvalido = /^[a-z0-9.]+@[a-z]+\.[a-z]+(\.[a-z]+)?$/i;
const telefonevalido = /^[0-9]{11}$/;
const outtelefone = /\([0-9]{2}\)[0-9]{5}\-[0-9]{4}/
const datavalida = /[0-9]{8}/
$('.dropdown-toggle').on('click', (function(e){
    e.preventDefault();
    if($('.dropdown-menu').attr('aria-labelledby') == $(this).attr('id')){
        $('.dropdown-menu').addClass('show');
    }    
}));
$(document).on('click', (function(event) {
    // verifica se o clique ocorreu fora do menu suspenso ou do botão de navegação
    if (!$(event.target).closest('.dropdown-toggle, .dropdown-menu').length) {
        // remove a classe "show" do elemento "dropdown-menu"
        $('.dropdown-menu').removeClass('show');
    }
}));
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
    if(elemento.value != ''){
        if($(elemento).attr('name') == 'nome'){
            if($(elemento).val().length > 2){
                $(elemento).removeClass('erro');
            }
            else{
                $(elemento).addClass('erro');
            }
        }
        else if($(elemento).attr('name') == 'email'){
            if($(elemento).val().match(emailvalido)){
                $(elemento).removeClass('erro');
            }
            else{
                $(elemento).addClass('erro');
            }
        }
        else{
            $(elemento).removeClass('erro');
        }
        
    }
    else{
        $(elemento).addClass('erro');
    }
    
};
$('body').on('blur', 'input#nome' ,function(e){
    validar(this);
});
$('body').on('blur', 'input#email' ,function(e){
    validar(this)
});
$('body').on('blur', 'input#telefone' ,function(e){
    validar(this)
    $('#telefone').mask('(00) 00000-0000')
});
$('body').on('blur', 'input#data' ,function(e){
    validar(this)
    $('#data').mask('00/00/0000')
});


$('body').on('submit', '.modal-body .form', function(e){
    e.preventDefault();
    let campos_obrigatorios = $(this).find('input.obrig ')
    for(campo of campos_obrigatorios){
        validar(campo)
    }
    let tudo_ok = true
    
    if($(this).find('input.obrig ').hasClass('erro')){
        tudo_ok = false
    }
    
    if(tudo_ok == false){
        console.log('um ou mais campos obrigatorios estão vazios')
        return false
    }
    else{
        $(this).submit();
        return true
    }
    
})

