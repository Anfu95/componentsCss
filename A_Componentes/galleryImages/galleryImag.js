document.querySelectorAll(".cardImage").forEach((img)=>{
    img.addEventListener('click',function (e) {
        e.stopPropagation();
        this.parentNode.classList.add('active');
    })
})

document.querySelectorAll(".card").forEach((img)=>{
    img.addEventListener('click',function (e) {
        this.classList.remove('active');
    })
})