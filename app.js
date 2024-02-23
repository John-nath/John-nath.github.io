const hire = document.querySelectorAll('.hire__envelope-box').addEventListener('onmouseover', ()=> {
    document.querySelectorAll('.special').style.display = 'none';
})

const works = document.querySelector('.works__envelope').addEventListener('mouseover', ()=> {
    document.querySelector('.works__title-box').style.innerHTML = "Enjoy my works"
})
