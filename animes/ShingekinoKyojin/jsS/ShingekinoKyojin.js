function myFunction(idButton) {
  var cajaReproductor1 = document.getElementById('.cajaReproductor2');
  var cajaReproductor2 = document.getElementById('.cajaReproductor2');



 switch(idButton) {
 case 1:

          cajaReproductor1.style.display = 'block';
          cajaReproductor2.style.display = 'none';
          producto3.style.display = 'none';
    break;

 case 2:
          cajaReproductor1.style.display = 'none';
          cajaReproductor2.style.display = 'block';
          producto3.style.display = 'none';
    break;
