var campos = [
     document.querySelector('#data'),
     document.querySelector('#entrega'),
     document.querySelector('#produto'),
     document.querySelector('#quantidade'),
     document.querySelector('#valor'),
];

// criando um elemento no DOM //
document.querySelector(".form").addEventListener("submit", function(event){
     event.preventDefault();

     
     var tr = document.createElement('tr');
     var tbody = document.querySelector('table  tbody');

     campos.forEach(function(campo){
     var td = document.createElement('td');
     td.textContent = campo.value;
     tr.appendChild(td);
   });

   var tdVolume = document.createElement('td');
   tdVolume.textContent = campos[3].value * campos[4].value;
   tr.appendChild(tdVolume);
   tbody.appendChild(tr);

   campos[0].focus();
   campos[1].value = '';
   campos[2].value = '';
   campos[3].value = '';
   campos[4].value = '';
});
// finalizando a criação e inserção no DOM

