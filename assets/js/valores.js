function toggleDescricao(element) {
    // Alterna a visibilidade da descrição ao clicar no bloco
    const descricao = element.querySelector('.descricao');
    descricao.style.display = (descricao.style.display === 'block') ? 'none' : 'block';
}
