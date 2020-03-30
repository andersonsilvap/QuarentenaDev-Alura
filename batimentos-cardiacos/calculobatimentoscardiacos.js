//Comando alert
var batidasPhora = 75*60;
var batidasPdia = batidasPhora*24;
var batidasPano = batidasPdia*365;

function calculo(){
    alert("Meu coração já bateu "+batidasPano*29+" durante toda minha vida.");
}

console.log("Nosso coração bate em média "+batidasPhora+" por hora, "+batidasPdia+" por dia e "
+batidasPano);

calculo();