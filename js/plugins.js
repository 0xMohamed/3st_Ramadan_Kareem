let navs = document.querySelectorAll('.navbar-nav li');

navs.forEach(el => {
    console.log(el)
    el.addEventListener('click', event => {
        [...el.parentElement.children].forEach(ele => ele.classList.remove('active'))
        el.classList.add('active');
    })
})