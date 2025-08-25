function validar(){
    
    let name = document.getElementById('name');
    let mail = document.getElementById('email');
    let textarea = document.getElementById('message');

    var nome = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var msg = document.getElementById('message').value;

    if(nome == ""){
        name.classList.remove('input');
        name.classList.add('error-form');
    }

    else if(email == ""){
        mail.classList.remove('input');
        mail.classList.add('error-form');
    }

    else if(msg == ""){
        textarea.classList.remove('textarea');
        textarea.classList.add('error-textarea');
    }

    else{
        alert('mensagem enviada ( ;')
        name.classList.remove('error-form');
        name.classList.add('input');
        mail.classList.remove('error-form');
        mail.classList.add('input');
        textarea.classList.remove('error-textarea');
        textarea.classList.add('textarea');

        name.value = "";
        mail.value = "";
        textarea.value = "";

    }

}