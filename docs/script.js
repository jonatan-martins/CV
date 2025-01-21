fetch('./data.json')
    .then(response => response.json())
    .then(data => {
        // Relleno la sección "Sobre mí"
        const sobreMiSection = document.querySelector('.contenido-main section:nth-child(1)');
        sobreMiSection.innerHTML = `<h2>Sobre mí</h2><p>${data.sobreMi.descripcion}</p>`;

        // Relleno la sección "Formación"
        const formacionSection = document.querySelector('.contenido-main section:nth-child(2)');
        let formacionHTML = '<h2>Formación</h2>';
        data.formacion.forEach(item => {
            formacionHTML += `
        <h3><strong>${item.titulo}</strong></h3>
        <p><strong>${item.institucion}</strong> (${item.periodo})</p>
        <p>${item.descripcion}</p>`;
        });
        formacionSection.innerHTML = formacionHTML;

        // Relleno la sección "Experiencia"
        const experienciaSection = document.querySelector('.contenido-main section:nth-child(3)');
        let experienciaHTML = '<h2>Experiencia</h2>';
        data.experiencia.forEach(item => {
            experienciaHTML += `
        <h3><strong>${item.titulo}</strong></h3>
        <p><strong>${item.empresa}</strong> (${item.periodo})</p>
        <p>${item.descripcion}</p>`;
        });
        experienciaSection.innerHTML = experienciaHTML;
    })
    .catch(error => console.error('Error al cargar el JSON:', error));