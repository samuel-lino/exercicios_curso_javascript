const textos = document.querySelectorAll("input.Texto")
const emails = document.querySelectorAll("input.Email")
const cep = document.querySelectorAll("input.Cep")
const uf = document.querySelectorAll("input.Uf")
const formulario = document.querySelector("form#formulario")

const emailvalido = /^[a-z0-9.]+@[a-z]+\.[a-z]+(\.[a-z]+)?$/i;

function verificaremail(elemento){
    elemento.addEventListener("focusout", function(event){
        event.preventDefault();

        if( !this.value.match(emailvalido)){
            document.querySelector("div#mensagem").innerHTML = "existem dados incorretos, porfavor verifique os campos destacados em vermelho."
            this.classList.add("erro")
            formulario.classList.add("erro")
        }
        else{
            this.classList.remove("erro")
            formulario.classList.remove("erro")
        }
    });
};

function verificatexto(elemento){
    elemento.addEventListener("focusout", function(event){
        
        event.preventDefault();

        if(this.value == "" || this.value.match(/\d/)){
            document.querySelector("div#mensagem").innerHTML = "existem dados incorretos, porfavor verifique os campos destacados em vermelho."
            this.classList.add("erro")
            formulario.classList.add("erro")
        }
        else{
            document.querySelector("div#mensagem").innerHTML = ""
            this.classList.remove("erro")
            formulario.classList.remove("erro")
        }
    });
}

function verificacep(elemento){
    elemento.addEventListener("focusout", function(event){
        event.preventDefault();

        if(this.value.match(/^\d{8}$/) || this.value.match(/^[0-9]{5}\-[0-9]{3}$/)){
            
            document.querySelector("div#mensagem").innerHTML = ""
            this.classList.remove("erro")
            formulario.classList.remove("erro")
        }
        else{
            document.querySelector("div#mensagem").innerHTML = "existem dados incorretos, porfavor verifique os campos destacados em vermelho."
            this.classList.add("erro")
            formulario.classList.add("erro")
        }
    });
}

function verificauf(elemento){
    elemento.addEventListener("focusout", function(event){
        event.preventDefault();
        
        if(this.value.match(/^[A-Z]{2}$/)){
            document.querySelector("div#mensagem").innerHTML = ""
            this.classList.remove("erro")
            formulario.classList.remove("erro")
        }
        else{
            document.querySelector("div#mensagem").innerHTML = "existem dados incorretos, porfavor verifique os campos destacados em vermelho."
            this.classList.add("erro")
            formulario.classList.add("erro")
        }
    });
}


for(let elemento of textos){
    verificatexto(elemento);  
}
for(let elemento of emails){
    verificaremail(elemento);
}
for(let elemento of cep ){
    verificacep(elemento);
}
for(let elemento of uf){
    verificauf(elemento);
}

formulario.addEventListener('submit', function(event){
    event.preventDefault();
    event.stopPropagation();

    if(!formulario.getAttribute("class").match(/erro/)){
        document.querySelector("div#mensagem").innerHTML = "Cadastro finalizado"
    }
    else{
        return false
    }
    
    
})