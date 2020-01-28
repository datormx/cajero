var imagenes = [];
imagenes["Quinientos"] = "BilleteQuinientos.png";
imagenes["Doscientos"] = "BilleteDoscientos.png";
imagenes["Cien"] = "BilleteCien.png";

class Billete
{
    constructor(n, v, c)
    {
        this.imagen = new Image();
        this.nombre = n;
        this.valor = v;
        this.cantidad = c;

        this.imagen.src = imagenes[this.nombre];
    }   
    
}

function entregarDinero()
{
    var t = document.getElementById("dinero");
    dinero = parseInt(t.value);
    dineroRetiro = dinero;

    for(var bi of caja)
    {
        if(dinero > 0)
        {
            div = Math.floor(dinero / bi.valor);

            if (div > bi.cantidad)
            {
                papeles = bi.cantidad;
            }
            else
            {
                papeles = div;
            }

            entregado.push(new Billete(bi.nombre, bi.valor, papeles));
            dinero = dinero - (bi.valor * papeles);                
        }            
        
    }   
 
    if(dinero > 0)
    {
        for(var e of entregado)
        {
            resultado.innerHTML = "No puedo entregarte esa cantidad de dinero";
            e.cantidad = 0;   
        }                  
    }
    else
    {   
        dineroCaja = dineroCaja - dineroRetiro;    
        resultado.innerHTML  = " ";   
        for(var e of entregado)        
        {            
            if(e.cantidad > 0)  
            {
                resultado.innerHTML += e.cantidad + " billetes de $" + e.valor + "<br />" ; 

                if (e.valor == 500)
                {
                    caja[0].cantidad = caja[0].cantidad - e.cantidad;
                }  
                if (e.valor == 200)
                {
                    caja[1].cantidad = caja[1].cantidad - e.cantidad;
                }
                if (e.valor == 100)
                {
                    caja[2].cantidad = caja[2].cantidad - e.cantidad;
                }   

                for (i = 0; i < e.cantidad; i++)
                {
                    resultado.innerHTML += "<img src=" + e.imagen.src + " />";                                                    
                }                              
            }
            e.cantidad = 0;             
        }
                
    }
    
    resultado.innerHTML += "<hr />";   
    
    console.log("Nuevo saldo en caja: " + dineroCaja); 
    console.log(caja);
    saldo.innerHTML = "<strong>Dinero Disponible: $ " + dineroCaja + "</strong >" + "<br /> Billetes $500 disponibles: " + caja[0].cantidad + "<br /> Billetes $200 disponibles: " + caja[1].cantidad + "<br /> Billetes $100 disponibles: " + caja[2].cantidad;
}


var caja = [];
var entregado = [];
caja.push(new Billete("Quinientos", 500, 5));
caja.push(new Billete("Doscientos", 200, 5));
caja.push(new Billete("Cien", 100, 2));

var dineroCaja = caja[0].cantidad*caja[0].valor + caja[1].cantidad*caja[1].valor + caja[2].cantidad*caja[2].valor; 
var dineroRetiro;
console.log("dinero en caja " + dineroCaja);

var dinero;
var div;
var papeles;

var resultado = document.getElementById("resultado");
var saldo = document.getElementById("saldo");
var b = document.getElementById("extraer");
b.addEventListener("click", entregarDinero);

saldo.innerHTML = "<strong>Dinero Disponible: $ " + dineroCaja + "</strong >" + "<br /> Billetes $500 disponibles: " + caja[0].cantidad + "<br /> Billetes $200 disponibles: " + caja[1].cantidad + "<br /> Billetes $100 disponibles: " + caja[2].cantidad;






