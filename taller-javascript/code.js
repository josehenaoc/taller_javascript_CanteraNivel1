
    const btn_red = document.getElementById('btn_red');
    btn_red.addEventListener("click", changeColorBtn1);
    const btn_blue = document.getElementById('btn_blue');
    btn_red.addEventListener("click", changeColorBtn2);
    const btn_yellow = document.getElementById('btn_yellow');
    btn_red.addEventListener("click", changeColorBtn3);
    const body = body.querySelectorAll('.body');
    body.addEventListener("click", body);


function changeColorBtn1(){
    if (btn_red.value =='red'){
        body.style.background= btn_red.value;
    }
   }

   function changeColorBtn2(){
    if (btn_blue.value =='blue'){
        body.style.background= btn_blue.value;
    }
   }

   function changeColorBtn3(){
    if (btn_yellow.value =='yellow'){
        body.style.background= btn_yellow.value;
    }

    function body(){
        if (body.value == changeColorBtn1, changeColorBtn2, changeColorBtn3){
            body.style.background = btn_red, btn_blue, btn_red;
        }
    }

    function mostrarContenido(){
        document.getElementById('titulo1').style.display = 'block';
        
    }

    function ocultarContenido(){
        document.getElementById('titulo1_1').style.display = 'none';
        
    }
    
   }

