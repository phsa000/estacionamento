document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("cadastrar").addEventListener("submit", cadastrar);
});

async function cadastrarCarro(event) {
    event.preventDefault();

    const placa = document.getElementById("placa").value;
    const dono = document.getElementById("dono").value;
    const cpf = document.getElementById("cpf").value;
    const modelo = document.getElementById("modelo").value;
    const vaga = document.getElementById("vaga").value;
    const tipo = document.getElementById("tipo").value;


    const data = { placa, dono, cpf, modelo, vaga, tipo }
    console.log(data);

    try {
        const response = await fetch("http://localhost:3333/cadastrar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data),
        });

        const result = await response.json();

        if (result.success) {
            alert("Cadastro feito com sucesso");
            document.getElementById("cadastroForm").reset();
        } else {
            alert(result.message || "Houve um erro ao cadastrar");
        }
    } catch (error) {
        console.error("Erro ao cadastrar:", error);
        alert("Erro ao cadastrar. Verifique a conexão com o servidor.");
    }
}
