
const containerMenu = document.getElementById('menu');

document.getElementById('imgMenu').addEventListener('click',()=>{
    if (containerMenu.classList.contains('hidden')){
        containerMenu.classList.remove('hidden');
    }else{
        containerMenu.classList.add('hidden');
    }
})

const ventanaAgregar = document.getElementById('ventanaAgregar');
const ventanaEliminar = document.getElementById('ventanaEliminar');
const ventanaVer = document.getElementById('ventanaVer');
const ventanaEditar = document.getElementById('ventanaEditar');

document.getElementById('botonAgregar2').addEventListener('click',()=>{
    ventanaAgregar.classList.remove('hidden');
    ventanaEliminar.classList.add('hidden');
    ventanaVer.classList.add('hidden');
    ventanaEditar.classList.add('hidden');
    document.getElementById('botonEditarInterfaz2').classList.add('hidden');
    document.getElementById('botonAgregar').classList.remove('hidden');
})

document.getElementById('botonEliminar').addEventListener('click',()=>{
    ventanaEliminar.classList.remove('hidden');
    ventanaAgregar.classList.add('hidden');
    ventanaVer.classList.add('hidden');
    ventanaEditar.classList.add('hidden');
    document.getElementById('botonEditarInterfaz2').classList.add('hidden');
    document.getElementById('botonAgregar').classList.remove('hidden');
})

document.getElementById('botonVer').addEventListener('click',()=>{
    ventanaEliminar.classList.add('hidden');
    ventanaAgregar.classList.add('hidden');
    ventanaVer.classList.remove('hidden');
    ventanaEditar.classList.add('hidden');
    document.getElementById('botonEditarInterfaz2').classList.add('hidden');
    document.getElementById('botonAgregar').classList.remove('hidden');
})

document.getElementById('botonEditar').addEventListener('click',()=>{
    ventanaEliminar.classList.add('hidden');
    ventanaAgregar.classList.add('hidden');
    ventanaVer.classList.add('hidden');
    ventanaEditar.classList.remove('hidden');
    document.getElementById('botonEditarInterfaz2').classList.add('hidden');
    document.getElementById('botonAgregar').classList.remove('hidden');
})

document.getElementById('botonOkInterfaz').addEventListener('click',()=>{
    document.getElementById('ventanaOpaca').classList.add('hidden');
})


document.getElementById('selper1').addEventListener('click',()=>{
    document.getElementById('labelProfesor').classList.add('hidden');
    document.getElementById('labelSemestre').classList.remove('hidden');
})

document.getElementById('selper2').addEventListener('click',()=>{
    document.getElementById('labelProfesor').classList.remove('hidden');
    document.getElementById('labelSemestre').classList.add('hidden');
})