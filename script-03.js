function maiorValor(){
  var a = parseInt(document.getElementById('valor01').value);
  var b = parseInt(document.getElementById('valor02').value);
  var c = parseInt(document.getElementById('valor03').value);
 
  if(a > b && a>c){
    document.getElementById('demo').innerHTML = "(A) é o maior valor.";
} else if(b > a && b>c){
    document.getElementById('demo').innerHTML = "(B) é o maior valor.";
  }
  else{
    document.getElementById('demo').innerHTML = "(C) é o maior valor.";
  }
}