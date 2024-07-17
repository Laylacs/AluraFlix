document.addEventListener('DOMContentLoaded', () => {
    // Funções para deletar e editar vídeos
    const deleteButtons = document.querySelectorAll('.video-card button:nth-of-type(1)');
    const editButtons = document.querySelectorAll('.video-card button:nth-of-type(2)');

    deleteButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Lógica para deletar vídeo
            alert('Vídeo deletado!');
        });
    });

    editButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Lógica para editar vídeo
            alert('Abrir editor de vídeo!');
        });
    });
});
