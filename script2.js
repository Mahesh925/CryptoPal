var btc =document.getElementById("bitcoin");
var eth =document.getElementById("ethereum");
var usdt =document.getElementById("tether");
var ltc =document.getElementById("litecoin");
var xrp =document.getElementById("ripple");
var doge =document.getElementById("dogecoin");
var dot =document.getElementById("polkadot");
var bnb =document.getElementById("binancecoin");
var sol =document.getElementById("solana");
var tron =document.getElementById("tron");
var dai =document.getElementById("dai");
var uniswap =document.getElementById("uniswap");
var monero =document.getElementById("monero");
var xlm =document.getElementById("stellar");
var ape =document.getElementById("apecoin");
var eos =document.getElementById("eos");
var ftm =document.getElementById("fantom");
var frax =document.getElementById("frax");


var settings = {
    "async": true,
    "scrossDomain": true,
    "url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Ctether%2Clitecoin%2Cripple%2Cdogecoin%2Cpolkadot%2Cbinancecoin%2Csolana%2Ctron%2Cdai%2Cuniswap%2Cmonero%2Cstellar%2Capecoin%2Ceos%2Cfantom%2Cfrax&vs_currencies=usd",
    "method": "GET",
    "headers": {}
}
$.ajax(settings).done(function (response){
    btc.innerHTML = response.bitcoin.usd;
    eth.innerHTML = response.ethereum.usd;
    usdt.innerHTML = response.tether.usd;
    ltc.innerHTML = response.litecoin.usd;
    xrp.innerHTML = response.ripple.usd;
    doge.innerHTML = response.dogecoin.usd;
    dot.innerHTML = response.polkadot.usd;
    bnb.innerHTML = response.binancecoin.usd;
    sol.innerHTML = response.solana.usd;
    tron.innerHTML = response.tron.usd;
    dai.innerHTML = response.dai.usd;
    uniswap.innerHTML = response.uniswap.usd;
    monero.innerHTML = response.monero.usd;
    xlm.innerHTML = response.stellar.usd;
    ape.innerHTML = response.apecoin.usd;
    eos.innerHTML = response.eos.usd;
    ftm.innerHTML = response.fantom.usd;
    frax.innerHTML = response.frax.usd;
})