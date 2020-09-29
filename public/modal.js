let openBtn = document.getElementById('open-modal');
let modal = document.getElementById('modal');
let closeBtn = document.getElementById('close-modal');

modal.style.display = 'none';

openBtn.addEventListener('click', handleOpen);

function handleOpen() {
    openBtn.style.display = 'none'
    modal.style.display = 'block';
    document.body.style.backgroundColor = "rgba(0, 0, 0, 0.7)"
}
closeBtn.addEventListener('click', handleClose);

function handleClose() {
    openBtn.style.display = 'block'
    modal.style.display = 'none';
    document.body.style.backgroundColor = "white"
}
