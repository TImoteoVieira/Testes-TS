interface Usuario {
    nome: string, email: string, telefone?: string
}

function enviarEmail({nome, email, telefone}: Usuario){
    console.log(`Olá ${nome} seu email é ${email} e seu telefone é ${telefone}`);
}

enviarEmail({ 
    nome: "Timóteo",
    email: "timoteo7charles777@gmail.com"
});