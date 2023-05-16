
const btn = document.getElementById('btn1');
const modal = document.getElementById('modal1');
const closed = document.getElementById('close1');
const modalBack = document.getElementById('modalback');

console.log(closed)

btn.addEventListener('click', ()=>{
    modal.classList.toggle('close');
    modalBack.classList.toggle('close')
})

closed.addEventListener('click', ()=>{
    modal.classList.toggle('close')
    modalBack.classList.toggle('close')
})