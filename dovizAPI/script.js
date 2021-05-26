//api url
const api="http://api.exchangeratesapi.io/v1/"
const key="access_key=52d2b001a1160e61a284ea575aef3389";

//elements 
const currencyOne=document.querySelector('#currency_one');
const currencyTwo=document.querySelector('#currency_two');
const amountInfo=document.querySelector('#amount');
const calcute=document.querySelector('#btn_calculate');
const result=document.querySelector('#result');

//load symbols
fetch('./currencie.json').then(res=> res.json()).then(data=>
    {
        const keys=Object.keys(data);
        const values=Object.values(data);
        let options;
        for (let i = 0; i < keys.length; i++) {
                options+=`<option value=${keys[i]}>${values[i]}</option>`;
            
        }
        currencyOne.innerHTML+=options;
        currencyTwo.innerHTML+=options;

    }
    )
    calcute.addEventListener('click',()=>{
        const base_currency=currencyOne.value;
        const to=currencyTwo.value;
        const amount=amountInfo.value;

        fetch(`${api}latest?${key}&base=${base_currency}`).then(res=> res.json())
        .then(data=>{
            let rate=data.rates[to];
           result.innerHTML=`${amount} ${base_currency}=${amount*rate}`
        })
    })