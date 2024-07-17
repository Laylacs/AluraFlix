document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('editar-video-form');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const videoData = {
            titulo: form.titulo.value,
            categoria: form.categoria.value,
            imagem: form.imagem.value,
            video: form.video.value,
            descricao: form.descricao.value
        };

        console.log('Vídeo editado:', videoData);
        alert('Vídeo guardado com sucesso!');

        form.reset();
    });
});
