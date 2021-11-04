let summa =document.getElementById('sum')
let itogo=document.getElementById('itog')
let proizvedenie=document.getElementById('pro')
let delenie =document.getElementById('del')
//Ввод суммы порфтеля
let portfel=document.getElementById('port')
//Выбор валюты на обмен
let filter =document.querySelector('.crypt')
let filterto =document.querySelector('.cryptto')
// Кнопки
let buttonConvert= document.querySelector('.convertation');
let buttonDelete=document.querySelector('.delete')
let buttonDeletePort=document.querySelector('.deletecount')
let buttonPort=document.querySelector('.count')
let mass=document.querySelector('.mass')
//Разбивка портфеля на валюты
let btcNumber=document.getElementById('btcnumber')
let ethNumber=document.getElementById('ethnumber')
let usdNumber=document.getElementById('usdnumber')

//Курс
let btc=62049
let eth=4563
let usd=1
let rub=0;
let port=0



//Раздел портфеля (расчет/очистить)
buttonPort.onclick=function(){
portfel.value=((btcNumber.value*btc)+(ethNumber.value*eth)+(usdNumber.value*usd))/usd

}
buttonDeletePort.onclick=function(){
    portfel.value=' '
    btcNumber.value=' '
    ethNumber.value=' '
    usdNumber.value=' '
}





filter.onchange=function(){
if(filter.value==='ETH'){
proizvedenie.value=eth+'руб'
 }
  if(filter.value==='BTC'){
    proizvedenie.value=btc
 }
 if(filter.value==='USD'){
     proizvedenie.value=usd
 }
};

filterto.onchange=function(){
if(filterto.value==='BTC'){
    delenie.value=btc
} 
if(filterto.value==='ETH'){
    delenie.value=eth
}
if(filterto.value==="USD"){
delenie.value=usd
}
}







//Раздел конвертации(конвертация /очистить)
    buttonConvert.onclick=function(){
      
      itogo.value=proizvedenie.value*summa.value/delenie.value
    }

buttonDelete.onclick=function(){
    itogo.value=" ";
    summa.value=" "; 
    proizvedenie.value= '';
    delenie.value= ' ';
}


