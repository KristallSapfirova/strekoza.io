document.querySelectorAll('.image-container img').forEach(image =>{
    image.onclick = () =>{
        document.querySelector('.popur-image').style.display = 'block';
        document.querySelector('.popur-image img').src = image.getAttribute('src'); 
    }
});

document.querySelector('.popur-image span').onclick =() =>{
    document.querySelector('.popur-image').style.display = 'none';
}