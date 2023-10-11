const myModal = new bootstrap.Modal(document.getElementById("register-modal"));

//Criar conta
document.getElementById("creat-form").addEventListener("submit", function(e){
e.preventDefault();

    const email = document.getElementById("email-creat-input").value;
    const password = document.getElementById("password-creat-input").value;

    if(email.length < 5){
        alert("Preencha o campo com um email válido!");
        return;
    }
    if(password.length < 4){
        alert("Preencha a senha com no mínimo 4 digitos!");
        return;
    }
    saveAccount({
        login: email,
        password: password,
        transactions: []
    })
    myModal.hide();

    alert("Conta criada com sucesso!");
    
});

function saveAccount(data){
    localStorage.setItem(data.login, JSON.stringify(data));
}

