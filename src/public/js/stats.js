window.onload = () => {
    let ctx = document.getElementById("myChart").getContext("2d");
   

};

function CrearGraficos(labels,datos,ctx) {
    let myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels,
            datasets: datos
        },
        options: {
            responsive: false, 
            indexAxis: 'y'
        }
    });
    
}















