getGeoLcoation(function (position) {
    console.log('main', position);
    apiCallHandler('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH&tsyms=USD,EUR', mainCallbackFun);
});



function mainCallbackFun(response) {
    console.log('successCallbackFun', response);
    var listString = listGenerator(response, 'Cryptocurrency price Chart:', 4);
    $('#box1').append(listString);
}

