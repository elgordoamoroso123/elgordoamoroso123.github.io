window.addEventListener('load',pag);
   

function pag(){
        let pagina = document.getElementById('pagina');
        pagina.style.display = 'none';
        let boton = document.getElementById('boton')
        boton.addEventListener('click', login )
    }


    pag()


function login(){
    
    let pagina = document.getElementById('pagina');
    pagina.style.display = 'block';
    let login = document.getElementById('login');
    login.style.display = 'none';
}

