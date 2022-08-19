var netInput = document.getElementById('net'),
    NET = document.getElementById('vat'),
    Gross = document.getElementById('res'),
    btn = document.getElementById('gomb'),
    netFunction;


sumFunction = function() {
  res.value = (net.value * (vat.value / 100 + 1));
} 


btn.addEventListener('click', sumFunction);


(function() {
  net.Function.focus();
  btn.click();
});


