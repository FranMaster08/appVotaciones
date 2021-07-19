window.onload = () => {
    let allListas = document.querySelectorAll('.listas')
    allListas.forEach(item => item.addEventListener('mouseenter', e =>
        e.target.classList.toggle('active')))
    allListas.forEach(item => item.addEventListener('mouseout', e =>
        e.target.classList.toggle('active')))
    allListas.forEach(item => item.addEventListener('click', e =>
          Votar(e.target.innerText)))
  
}

function Votar(pregunta) {
   console.log(pregunta);
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "id": "04254d16-3c0c-492b-97bc-943a79e2b666",
        "pregunta": pregunta
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
    };

    fetch("/notes/votar", requestOptions)
        .then(response => response.text())
        .then(result => location.href='/notes/stats')
        .catch(error => alert(error))
}