window.onload = () => {
  
    Render();

};

function CrearGraficos(etiq, datos) {
    // Obtener una referencia al elemento canvas del DOM
    const $grafica = document.querySelector("#myChart");
    // Las etiquetas son las que van en el eje X. 
    const etiquetas = etiq
    // Podemos tener varios conjuntos de datos. Comencemos con uno
    const datosVentas2020 = {
        label: "Ventas por mes",
        data: datos, // La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
        backgroundColor: 'rgba(54, 162, 235, 0.2)', // Color de fondo
        borderColor: 'rgba(54, 162, 235, 1)', // Color del borde
        borderWidth: 1,// Ancho del borde
    };
    new Chart($grafica, {
        type: 'bar',// Tipo de gráfica
        data: {
            labels: etiquetas,
            datasets: [
                datosVentas2020,
                // Aquí más datos...
            ]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }],
            },
            responsive:true,
        }
    });
}

async function BuscarVotaciones() {
    let datos = await fetch("/api/votaciones")
    let votaciones = await datos.json()
    return votaciones
}

async function Render() {
    let datos = await BuscarVotaciones()
    let labels = datos.votaciones.preguntas.map(x => x.titulo)
    let data = datos.votaciones.preguntas.map(x => x.votaciones)
    CrearGraficos(labels, data);
}











