function Executarsorteio(){
    var numeroCerto = Math.round(Math.random()*10);
    var numeroSorte = prompt("Digite seu número da sorte:");
    console.log(numeroCerto)
      while(numeroSorte > 10 || numeroSorte < 1){
        resultado.innerHTML="Número inválido! Digite um número entre 1 e 10!";
      }
    
      if(numeroSorte==numeroCerto){
        resultado.innerHTML="VOCÊ GANHOU!";
        resultado.style.background="green";
      }
    
      else{
        resultado.innerHTML="Não foi dessa vez, </br>Tente novamente!"
        resultado.style.background="red";
      }
       /*Para carregar uma imagwm dentro de um if ex: resultado.style.backgroundImage="url('link da imagem');"
        resultado.style.backgroundImage="url('https://dbriefing.com.br/blog/wp-content/uploads/2018/10/errou-faustao-gif.gif')";*/
    
    
    
  }
  Executarsorteio();