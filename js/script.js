let form = $(".form-contact");
    form.validate({
        errorElement: "span",
        rules: {
            name: "required",
            email: {
                required: true,
                email: true
            },
            phone: "required",
            text: "required",
        },
        messages: {
            name: "Por favor, digite o seu nome",
            email: {
                required: "Por favor, digite o seu e-mail",
                email: "Por favor, digite um e-mail válido"
            },
            phone: "Por favor, digite o seu telefone",
            text: "Por favor, digite a sua mensagem",
        }
    });

    $(window).on("scroll", function(){ 
        if($(window).scrollTop()>100){
            $(".navbar").removeClass("navbar-light").addClass("navbar-preta");
        } else{
            $(".navbar").removeClass("navbar-preta").addClass("navbar-light"); 
        }
    })


