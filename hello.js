// hello contract access via Web3.js
var express = require('express');
//var web3 = require('web3');
var app = express();
 
app.get('/', function (req, res) {
	if (typeof web3 !== 'undefined') {
        var web3 = new Web3(web3.currentProvider);
    } else {
        // set the provider you want from Web3.providers
        var web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:8545"));
    }

    web3.eth.defaultAccount = web3.eth.accounts[1];
		
	res.send(web3.eth.accounts[1]);
	
	
	var abi = [{"constant":false,"inputs":[{"name":"_fName","type":"string"},{"name":"_age","type":"uint256"}],"name":"setInfo","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getInfo","outputs":[{"name":"","type":"string"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}];
	
	var infoContract = web3.eth.contract(abi).at(web3.eth.defaultAccount);
	
	info.setInfo("jason",18);
    info.getInfo(function(error, result){
        if(!error){
        	res.send(result[0]+' ('+result[1]+' years old)');
        	console.log(result);
        }else
            console.error(error);
    });

	res.send('Hello World');
})
 
var server = app.listen(8081, function () {
 
	var host = server.address().address
	var port = server.address().port
 
	console.log("应用实例，访问地址为 http://%s:%s", host, port)

	


})