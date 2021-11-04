
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

//Нормальный курс
let btcCR=document.querySelector('.btccr')
let ethCR=document.querySelector('.ethcr')
let usdCR=document.querySelector('.usdcr')





//Курс
let btc=61003
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




//Фильтры валюты
filter.onchange=function(){
if(filter.value==='ETH'){
proizvedenie.value=eth
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


 fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
  .then((response) => response.json())
  .then((json) => {
    console.log(json);
  let btcJ=json[0].current_price
  let ethJ=json[1].current_price
  let usdJ=json[9].current_price
  console.log(btcJ)
  btc=btcJ
  eth=ethJ
  usd=usdJ
btcCR.value=btcJ
ethCR.value=ethJ
usdCR.value=usdJ
  });


