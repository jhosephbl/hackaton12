const numPantalla="0";
const pantallaConNumero="si"
const usarPunto="no";
const numEspera=0;
const operation="";
const solucion="";

function ingresarNumero (x){

    if(x!=="."){
        if(numPantalla=="0" || pantallaConNumero=="si"){
            document.Calculadora.textbxnros.value=x;
            numPantalla=x;
        }

        else if(x!="."){
            document.Calculadora.textbxnros.value+=x;
            numPantalla+=x;

        }
    }

    if(x=="." && usarPunto=="no" && numPantalla=="0"){
        document.Calculadora.textbxnros.value="0."
        numPantalla=x;
        usarPunto="si"
    }

    else if(x=="." && usarPunto=="no"){
        document.Calculadora.textbxnros.value +=x;
        numPantalla +=x;
        usarPunto="si"
    }

    else if(x=="." && usarPunto=="si"){
        
    }

    pantallaConNumero="no"
}