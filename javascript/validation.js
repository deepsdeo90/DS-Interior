function validate(form){
	/*First Name (name=first): check for non blank and nonzero length.*/
	var valid =true;
	var firstName = form.first;
	var lastName = form.last;
	var address = form.address;
	var city = form.city;
	var state = form.state;
	var zip = form.zip;
	var phone = form.phone;
	var email = form.email;
	var ccnum = form.ccnum;
	var cctype = form.cctype;
	var ccexpire = form.ccexpire;
	var comment = form.comment;
	
	if(!firstName.value.trim() || firstName.value.trim().length==0){ 
		alert("Please enter first name");
		firstName.focus();
		firstName.select();
		valid=false;
		return false;
	}
	if(!lastName.value.trim() || lastName.value.trim().length==0){
		alert("Please enter last name");
		lastName.focus();
		lastName.select();
		valid=false;
		return false;
	}
	if(!address.value.trim() || address.value.trim().length==0){
		alert("Please enter address");
		address.focus();
		address.select();
		valid=false;
		return false;
	}
	if(!city.value.trim() || city.value.trim().length==0){
		alert("Please enter city");
		city.focus();
		city.select();
		valid=false;
		return false;
	}
	if(!state.value.trim()|| state.value.trim().length==0){
		alert("Please enter state");
		state.focus();
		state.select();
		valid=false;
		return false;
	}if(!zip.value.trim()|| zip.value.trim().length==0){
		alert("Please enter zip");
		zip.focus();
		zip.select();
		valid=false;
		return false;
	}
	if(!validateZip(zip.value.trim())){
		alert("Please enter either 5 digits or 9 digits zip code.");
		zip.focus();
		zip.select();
		valid=false;
		return false;
	}if(!phone.value.trim()|| phone.value.trim().length==0){
		alert("Please enter phone number");
		phone.focus();
		phone.select();
		valid=false;
		return false;
	}
	if(!validatePhone(phone.value.trim())){
		alert("Please enter valid format (xxx) xxx-xxxx.");
		phone.focus();
		phone.select();
		valid=false;
		return false;
	}if(!email.value.trim()|| email.value.trim().length==0){
		alert("Please enter email");
		email.focus();
		email.select();
		valid=false;
		return false;
	}if(!ccnum.value.trim()|| ccnum.value.trim().length==0){
		alert("Please enter credit card number");
		ccnum.focus();
		ccnum.select();
		valid=false;
		return false;
	}
	if(!validateCcnum(ccnum.value.trim())){
		alert("Please enter 16 digit number");
		ccnum.focus();
		ccnum.select();
		valid=false;
		return false;
	}if(!cctype.value || cctype.value.length==0){
		alert("Please select credit card type");
		cctype.focus();
		//cctype.select();
		valid=false;
		return false;
	}if(!ccexpire.value.trim() || ccexpire.value.trim().length==0){
		alert("Please enter credit expiration date");
		ccexpire.focus();
		ccexpire.select();
		valid=false;
		return false;
	}
	if(!validateExpirationDate(ccexpire.value.trim())){
		alert("Please enter valid expiration date mm/yyyy");
		ccexpire.focus();
		ccexpire.select();
		valid=false;
		return false;
	}if(!comment.value.trim() || comment.value.trim().length==0){
		alert("Please enter comment");
		comment.focus();
		comment.select();
		valid=false;
		return false;
	}
	if(valid)
		return true;
	else
		return false;
}
function validateZip(zip){
	var pattern = /(^\d{5}$)|(^\d{9}$)/;
	return pattern.test(zip);
}
function validatePhone(phone){
	var pattern =  /^[(]{1}[0-9]{3}[)]{1}[\s]{1}[0-9]{3}[-]{1}[0-9]{4}$/;
	return pattern.test(phone);
}
function validateCcnum(ccnum){
	var pattern = /^\d{16}$/;
	return pattern.test(ccnum);
}
function validateExpirationDate(ccexpire){
	var pattern = /^(0[1-9]|1[0-2])\/?([0-9]{4})$/;
	if(pattern.test(ccexpire)){
		//alert("true");
	
		var parts = ccexpire.split("/");
		var today, ccexpireDate;
		var ccexpireMonth=parseInt(parts[0], 10);;
		var ccexpireYear=parseInt(parts[1], 10);;
		today = new Date();
		ccexpireDate = new Date();
		ccexpireDate.setFullYear(ccexpireYear, ccexpireMonth, 1);
		if(ccexpireDate<today){
			//alert("wrong date");
			return false;
		}else{
			return true;
		}
	}else{
		return false;	
	}
	
}
function update()
{
	var price11 = document.getElementById("inputunitprice11").innerHTML;
		price11 = price11.substring(1);
		price11 = parseFloat(price11);	

	var qnty11 = parseFloat(document.getElementById("inputqnty11").value);
		qnty11 = isNaN(qnty11)?0:qnty11;
	var totprice11 = qnty11 * price11

	document.getElementById("inputprice11").value = totprice11;

	var price12 = document.getElementById("inputunitprice12").innerHTML;
		price12 = price12.substring(1);
		price12 = parseFloat(price12);	

	var qnty12 = parseFloat(document.getElementById("inputqnty12").value);
		qnty12 = isNaN(qnty12)?0:qnty12;

	var totprice12 	= qnty12 * price12;
	document.getElementById("inputprice12").value = totprice12;
	var subtotal1 = totprice11 + totprice12;
	document.getElementById("inputsubtotal1").value  = subtotal1;

	/*---------------*/
	var price21 = document.getElementById("inputunitprice21").innerHTML;
		price21 = price21.substring(1);
		price21 = parseFloat(price21);	

	var qnty21 = parseFloat(document.getElementById("inputqnty21").value);
		qnty21 = isNaN(qnty21)?0:qnty21;
	var totprice21 = qnty21 * price21

	document.getElementById("inputprice21").value = totprice21;

	var price22 = document.getElementById("inputunitprice22").innerHTML;
		price22 = price22.substring(1);
		price22 = parseFloat(price22);	

	var qnty22 = parseFloat(document.getElementById("inputqnty22").value);
		qnty22 = isNaN(qnty22)?0:qnty22;

	var totprice22 	= qnty22 * price22;
	document.getElementById("inputprice22").value = totprice22;
	var subtota21 = totprice21 + totprice22;
	document.getElementById("inputsubtotal2").value  = subtota21;

	/*--------------------*/
	var price31 = document.getElementById("inputunitprice31").innerHTML;
		price31 = price31.substring(1);
		price31 = parseFloat(price31);	

	var qnty31 = parseFloat(document.getElementById("inputqnty31").value);
		qnty31 = isNaN(qnty31)?0:qnty31;
	var totprice31 = qnty31 * price31

	document.getElementById("inputprice31").value = totprice31;

	var price32 = document.getElementById("inputunitprice32").innerHTML;
		price32 = price32.substring(1);
		price32 = parseFloat(price32);	

	var qnty32 = parseFloat(document.getElementById("inputqnty32").value);
		qnty32 = isNaN(qnty32)?0:qnty32;

	var totprice32 	= qnty32 * price32;
	document.getElementById("inputprice32").value = totprice32;
	var subtota31 = totprice31 + totprice32;
	document.getElementById("inputsubtotal3").value  = subtota31;

	var total =subtotal1+subtota21+subtota31;
	document.getElementById("inputtotal").value = total;

	var salesTax =(total*8.5)/100;
	document.getElementById("inputsalesTax").value =salesTax;
	var afterSalesTax = total+salesTax;
	document.getElementById("inputtotalwithtax").value =afterSalesTax;

	var shipping =0;

	if(afterSalesTax>0)
		shipping =100;

	document.getElementById("inputshipping").value=shipping;
	
	document.getElementById("inputgrandTotal").value=shipping+afterSalesTax;

	/*		
	var qnty11 = parseFloat(document.getElementById("qnty11").value);
		qnty11 = isNaN(qnty11)?0:qnty11;
	
	var qnty11 = isNaN(parseFloat(document.getElementById(ctrlName).value;)?0:parseFloat(document.getElementById(ctrlName).value);

	document.getElementById("txttot1").value=getValue("txtcq1")*getValue("hdnCost1");
	document.getElementById("txttot2").value=getValue("txtcq2")*getValue("hdnCost2");
	document.getElementById("txtsub1").value= getValue("txttot1")+getValue("txttot2");

	document.getElementById("txttot3").value=getValue("txtcq3")*getValue("hdnCost3");
	document.getElementById("txttot4").value=getValue("txtcq4")*getValue("hdnCost4");
	document.getElementById("txtsub2").value= getValue("txttot3")+getValue("txttot4");

	document.getElementById("txttot5").value=getValue("txtcq5")*getValue("hdnCost5");
	document.getElementById("txttot6").value=getValue("txtcq6")*getValue("hdnCost6");
	document.getElementById("txtsub3").value= getValue("txttot5")+getValue("txttot6");
	
	document.getElementById("txttola1").value=getValue("txtsub1")+ getValue("txtsub2")+ getValue("txtsub3") 

	document.getElementById("txtstax").value=(document.getElementById("txttola1").value*8.5)/100;
	 document.getElementById("txttola2").value=getValue("txttola1")+getValue("txtstax");
	if(document.getElementById("txttola2").value>0)
	document.getElementById("txttola3").value=100;
	else
	document.getElementById("txttola3").value=0;
	document.getElementById("txttola4").value=getValue("txttola3")+getValue("txttola2");*/
}