
function Submit(){
	//alert(3);
	var user=/^[f][a-zA-Z]{4,8}$/;
	alert(user);
	//alert(4);
	var userName=document.getElementById("name").value;
    //alert(userName);
	if(user.test(userName)){

		if(userName.length<4){
		document.getElementById(labelName).style.visibility="visible";
		alert("minimum 4 charchaters");
		//document.write(userName);
		return false;
	}
	if(userName.length>8){
		alert("max 8 charchaters");
		return false;
	}
	//alert("correct");
    //document.write(userName);
	return mail();
}
	alert("user name is incorrect");
	return false;
}
function mail(){
	var mailId=/[A-Za-z0-9_%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$/;
	var Mail=document.getElementById("MAIL").value;
	//alert(Mail)
	if(mailId.test(Mail)){
		//alert("vaild");
		return phone();
	}
	alert("invaild mail");
	return false;
}
function phone(){
	var ph=/^977\d{9}/
	var ph2=/^\d{4}-\d{4}-\d{4}$/
	var phuser=document.getElementById("phone").value;
	//alert(ph);
	if((ph.test(phuser))||(ph2.test(phuser))){
		//alert("phone correct");
		return country();
	}
	alert("invalid phone");
	return false;
}
function country(){
	var cntry=document.getElementById("drop").value;
	alert(cntry);
	return BEER();
}
function BEER(){
	alert("BEER");
	if(document.getElementById("yess").checked==true){
		alert("yess");
		return payment();
	}
	if(document.getElementById("no").checked==true){
		alert("noo");
		return payment();
	
	}
	alert("not true");
	return false;
}
function payment(){
	alert('payment')
	var pay=/^SBIN\d{7}$/;
	var Pay=document.getElementById("Payment").value;
	alert(Pay);
	if(pay.test(Pay)){
		alert(Pay);
		return hostel();

	}
	alert("wrong payment number");
	return false;
}
function hostel(){
	alert("hostel");
	if (document.getElementById("nuzvid").checked==true) {
		var fee=2000;
		alert("nuz");
		alert('i days');
	    var day=/^\d$/
	    alert(day);
	    var days=document.getElementById("FEE").value;
	    alert(days);
	    if(day.test(days)){
	    	alert("true");
		    alert(fee);
		    var total=fee*days;
		   // document.write(total);
		    alert(total);
		    return false;}

		return false;
	}
	if(document.getElementById("rk").checked==true){
		var fee=2000;
		alert("rk");
		alert('i days');
	var day=/^\d$/
	alert(day);
	var days=document.getElementById("FEE").value;
	alert(days);
	if(day.test(days)){
		alert("true");
		alert(fee);
		var total=2000*days;
		//document.write(total);
		alert(total);
		return false;
	}

		return false;
	}
	if(document.getElementById("ong").checked==true){
		var fee=3000;

		alert("ong");
		alert('i days');
	var day=/^\d$/
	alert(day);
	var days=document.getElementById("FEE").value;
	alert(days);
	if(day.test(days)){
		alert("true");
		alert(fee);
		var total=2000*days;
		document.write(total);
		alert(total);
		return false;
}
		return false;
	}
	if(document.getElementById("sklm").checked==true){
		var fee=3000;
		alert("sklm");
		alert('i days');
	var day=/^\d$/
	alert(day);
	var days=document.getElementById("FEE").value;
	alert(days);
	if(day.test(days)){
		alert("true");
		alert(fee);
		var total=2000*days;
		document.write(total);
		alert(total);
		return false;
}
     alert("select days");
		return false;
	}
	alert("please select hostel");
	return false;
}
function serives(){
	alert('SSSSS')
	 var b=document.getElementById("b");
	// var l=document.getElementById("l");
	// var d=document.getElementById("d");
	// var s=document.getElementById("s");
	// var e=document.getElementById("e");
	alert("serives");
	alert(b);
	if(document.getElementById("b").checked){
		alert("serives");
		return days();
	}

	else{
		alert("please select serives requried");
		return false;
	}
	return false;
}
let i=0;
function bg(){
	//var img=['C:\Users\AmeerBalu\Desktop\files\images\1.jpg','C:\Users\AmeerBalu\Desktop\files\images\2.jpg','C:\Users\AmeerBalu\Desktop\files\images\3.jpg'];
	var img=['3.jpg','2.jpg','5.jpg',"1.jpg"];
	document.getElementById('bg').style.backgroundImage="url("+img[i]+")";
	alert(i);
	i=(i+1)%img.length;
}
setInterval(bg(),5000000);

