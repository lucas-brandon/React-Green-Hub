export const cpfMask = value => {
    return value
      .replace(/\D/g, '')
      .replace(/(\d{3})(\d)/, '$1.$2') 
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})/, '$1-$2')
}

export const telMask = value => {
    return value
    .replace(/\D/g, "")
    .replace(/^(\d{2})(\d)/g, "($1) $2")
    .replace(/(\d)(\d{4})$/, "$1-$2")
}

export function validadata(){
  var data = document.getElementById("dt-nascimento").value; // pega o valor do input
  data = data.replace(/\//g, "-"); // substitui eventuais barras
  var data_array = data.split("-"); // quebra a data em array

  if(data_array[0].length != 4){
     data = data_array[2]+"-"+data_array[1]+"-"+data_array[0];
  }

  var hoje = new Date();
  var nasc  = new Date(data);
  var idade = hoje.getFullYear() - nasc.getFullYear();
  var m = hoje.getMonth() - nasc.getMonth();
  if (m < 0 || (m === 0 && hoje.getDate() < nasc.getDate())) idade--;

  if(idade < 18){
      document.getElementById("aviso-data").style.display = "block";
      data = null;
      return false;
  };

  document.getElementById("aviso-data").style.display = "none";
}  






//let btnMouseout = document.getElementById("cep");
//function acaoQuandoTiraMouse() {
//    alert("Mouseout - tirou o mouse");
//}
//
//
//btnMouseout.addEventListener("mouseout", acaoQuandoTiraMouse);