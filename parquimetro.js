const botonClick = () => {
    const horas = document.querySelector('#horas').value;
    const minutos = document.querySelector('#minutos').value;
    
    const precioHora = 1500;
    const precioMin = 25;
    let resultado = '';
    let saldo = 'Tu saldo a pagar es: ';
    
    //Opreacion precio final de hora + minutos.
    
    precioFinal = precioHora * horas + (precioMin * minutos);
    
    resultado = `${saldo} $${precioFinal}`;
    
    //Operacion precio solo minutos.
    
    if (horas == 0 && minutos > 0 && minutos < 31) resultado = `${saldo} $750 pesos.`;
      
    if (horas == 0 && minutos >= 31 && minutos < 60) resultado = `${saldo} $1500 pesos.`;
    
    //Manejo de errores.
    
    if (minutos < 0 || minutos > 59)  resultado = 'No se puede calcular ese valor en minutos';
    
    if (horas < 0) resultado = 'No se puede calcular horas menores a 0';
    
    if (horas == 0 && minutos == 0) resultado = 'No has ingresado ningun valor';
    
    if (horas < 0 && minutos < 0) resultado = 'No se puede calcular horas y minutos menores a 0';
    
    
    return resultado;
  }
  
  document.querySelector('.boton').addEventListener('click', event => {
    const resultado = botonClick();
    const elemento = document.querySelector('.resultado');
  
    if(resultado !== '') {  
      elemento.classList.remove('oculto');
      elemento.innerHTML = resultado;
      elemento.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
        inline: 'nearest',
      });
    } else {
      elemento.classList.add('oculto');
    }
  });
  