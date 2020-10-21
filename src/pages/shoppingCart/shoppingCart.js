/*
Tarefas:
-Botões de quantidade de produtos
    -Contador de produtos
    -Limite maximo de produtos
    -Valor default: 1
    -Quando quantidade é 0, retirar produto do carrinho
-Botão de excluir produto do carrinho
    -Reduz a quantidade de produtos para 0
Sugestões:
-Botão para continuar comprando
    -Ir para a página de categorias ou home
*/
window.onload = function(){
    
    //---------Adicionar eventos de alterar quantidade de itens---------
    let btnMinus = document.getElementsByClassName("btn-minus");
    let btnPlus = document.getElementsByClassName("btn-plus");
    let btnCancel = document.getElementsByClassName("btn-cart-cancel");

    for(let i = 0; i < btnMinus.length; i++){
        //console.log("valor: "+btnMinus[i]+" no indice: "+i);
        let input = btnMinus[i].parentNode.parentNode.getElementsByTagName("input");
        //console.log("valor: "+input[0]);
        btnMinus[i].addEventListener("click", function(){
            //input[0].setAttribute("value", "0");
            let value = parseInt(input[0].value);
            value -=1;
            input[0].value = String(value);
            if(value == 0){
                input[0].parentNode.parentNode.parentNode.remove();
            }
        });
    }

    for(let i = 0; i < btnPlus.length; i++){
        //console.log("valor: "+btnPlus[i]+" no indice: "+i);
        let input = btnPlus[i].parentNode.parentNode.getElementsByTagName("input");
        //console.log("valor: "+input[0]);
        btnPlus[i].addEventListener("click", function(){
            //input[0].setAttribute("value", "0");
            let value = parseInt(input[0].value);
            value +=1;
            input[0].value = String(value);
        });
    }

    //console.log("valor: "+btnPlus[i]+" no indice: "+i);
    for(let i = 0; i < btnCancel.length; i++){
        let input = btnCancel[i].parentNode.parentNode.getElementsByTagName("input");
        //console.log("valor: "+input[0]);
        btnCancel[i].addEventListener("click", function(){
            //input[0].setAttribute("value", "0");
            input[0].parentNode.parentNode.parentNode.remove();
        });
    }

    //---------Adicionar eventos para somar valor do carrinho---------
    let inputValues = document.getElementsByClassName("input");
    console.log(inputValues);
    for(let i = 0; i < inputValues.length; i++){
        
        //Evento para multiplicar o valor unitario pela quantidade
        inputValues[i].parentNode.parentNode.parentNode.addEventListener("click", function(){
            //input[0].setAttribute("value", "0");
            let totalNum = 0;
            let num1 = 0;
            let num2 = 0;
            console.log(this);
            let total = this.getElementsByClassName("itemTotalValue");
            let values = this.getElementsByClassName("itemValue");

            //alert("item total value "+total[0]);
            //alert("item value "+values[0]);
            //alert("change");
            num1 = parseFloat(values[0].innerText);
            num2 = parseInt(this.getElementsByTagName("input")[0].value);

            totalNum = num1 * num2;
            
            total[0].innerText = String(totalNum.toFixed(2));
        });

        //Evento para somar todos os valores finais de cada item
        inputValues[i].parentNode.parentNode.parentNode.addEventListener("click", function(){
            //input[0].setAttribute("value", "0");
            let totalNum = 0;
            let num = 0;
            let total = document.getElementById("totalValue");
            let values = document.getElementsByClassName("itemTotalValue");
            for(let j = 0; j < values.length; j++){
                //alert("change");
                num = parseFloat(values[j].innerText);
                totalNum += num;
            }
            total.innerText = String(totalNum.toFixed(2));
        });
    }
};
