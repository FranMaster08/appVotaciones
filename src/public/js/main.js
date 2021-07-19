window.onload = () => {
    let allListas = document.querySelectorAll('.listas')
    allListas.forEach(item => item.addEventListener('mouseenter', e =>
        e.target.classList.toggle('active')))
    allListas.forEach(item => item.addEventListener('mouseout', e =>
        e.target.classList.toggle('active')))
     allListas.forEach(item => item.addEventListener('click', e =>
        console.log(e.target.innerText) ))

}