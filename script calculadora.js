function pegarNumeros() {
    const n1 = parseFloat(document.getElementById('num1').value);
    const n2 = parseFloat(document.getElementById('num2').value);
    if (isNaN(n1) || isNaN(n2)) {
      return null;
    }
    return [n1, n2];
  }
  
  function somar() {
    const nums = pegarNumeros();
    if (!nums) {
      document.getElementById('resultado').textContent = "Digite números válidos";
      return;
    }
    document.getElementById('resultado').textContent = nums[0] + nums[1];
  }
  
  function subtrair() {
    const nums = pegarNumeros();
    if (!nums) {
      document.getElementById('resultado').textContent = "Digite números válidos";
      return;
    }
    document.getElementById('resultado').textContent = nums[0] - nums[1];
  }
  
  function multiplicar() {
    const nums = pegarNumeros();
    if (!nums) {
      document.getElementById('resultado').textContent = "Digite números válidos";
      return;
    }
    document.getElementById('resultado').textContent = nums[0] * nums[1];
  }
  
  function dividir() {
    const nums = pegarNumeros();
    if (!nums) {
      document.getElementById('resultado').textContent = "Digite números válidos";
      return;
    }
    if (nums[1] === 0) {
      document.getElementById('resultado').textContent = "Erro: divisão por zero";
      return;
    }
    document.getElementById('resultado').textContent = nums[0] / nums[1];
  }
  
  function potenciar() {
    const nums = pegarNumeros();
    if (!nums) {
      document.getElementById('resultado').textContent = "Digite números válidos";
      return;
    }
    document.getElementById('resultado').textContent = Math.pow(nums[0], nums[1]);
  }