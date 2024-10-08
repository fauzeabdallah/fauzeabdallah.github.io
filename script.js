function gerarArquivo() {
    const pergunta1 = document.getElementById('pergunta1').value;
    const pergunta2 = document.getElementById('pergunta2').value;
    const pergunta3 = document.getElementById('pergunta3').value;
    const pergunta4 = document.getElementById('pergunta4').value;

    const conteudo = `Pergunta 1: ${pergunta1}\nPergunta 2: ${pergunta2}\nPergunta 3: ${pergunta3}\nPergunta 4: ${pergunta4}`;

    // Criando o arquivo para download
    const blob = new Blob([conteudo], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'respostas.txt';
    link.click();

    // Limpar os campos do formulário
    document.getElementById('questionForm').reset();
}
