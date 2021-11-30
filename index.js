$(document).ready(function(){ 
	
	var newImg = $("<img>");
	$(newImg).attr("src","img.png").appendTo("body").css("width","800px").attr("class","backgroundImg");

	var logDiv = $("<div>");
	$(logDiv).appendTo("body").attr("class","logDiv").css("position","absolute").css("height","598px").css("top","50px");/*.css("border","3px solid red")*/;

	var logHeading = $("<p>");
	$(logHeading).appendTo(logDiv).attr("id","heading").text("Sign in").css("line-height","45px").css("font-family","Poppins").css("font-weight","500").css("font-size","30px");

    var logRegister1 = $("<p>");
	$(logRegister1).appendTo(logDiv).css("line-height","24px").text("If you don’t have an account register").css("font-family","Poppins").css("font-weight","400").css("font-size","16px");

	var logRegister2 = $("<p>");
	$(logRegister2).appendTo(logDiv).css("line-height","24px").html(`You can <a href="registration.html" id="sReg">Register here !</a>`).css("font-family","Poppins").css("font-weight","400").css("font-size","16px");

	$("a#sReg").css("font=weight","600").css("color","#FF432A").css("text-decoration","none");


	var logForm = $("<form>");
	$(logForm).appendTo(logDiv).attr("class","logForm").css("position","relative").css("height","305px")/*.css("border","3px solid blue")*/;

	var email = $("<p>");
	$(email).appendTo(logForm).text("Email").css("line-height","19px").css("font-family","Poppins").css("font-weight","500").css("font-size","13px");

	var enterEmail = $('<input type="text">');
	$(enterEmail).appendTo(logForm).attr("placeholder","Enter your email address").keypress(function(){
			document.getElementById('rectEmail').style.backgroundColor="#FF432A";
	}).css("line-height","24px").css("font-family","Poppins").css("font-weight","400").css("font-size","16px").css("margin-left","6.29%").css("border","none").css("outline","none");

	var rectEmail = $('<div id="rectEmail">');
	$(rectEmail).appendTo(logForm).css("height","2px").css("background-color","black");

	var password = $("<p>");
	$(password).appendTo(logForm).text("Password").css("line-height","19px").css("margin-top","60px").css("font-family","Poppins").css("font-weight","500").css("font-size","13px");

	var enterPassword = $(`<input type="password">`);
	$(enterPassword).appendTo(logForm).attr("placeholder","Enter your password").keypress(function(){
			document.getElementById('rectPassword').style.backgroundColor="#FF432A";
	}).css("width","90%").css("line-height","24px").css("font-family","Poppins").css("font-weight","400").css("font-size","16px").css("margin-left","6.29%").css("border","none").css("outline","none");

	var rectPassword = $('<div id="rectPassword">');
	$(rectPassword).appendTo(logForm).css("height","2px").css("background-color","#000000");

	var checkRem = $('<input type="checkbox">');
	$(checkRem).appendTo(logForm).css("margin-top","30px");

	var checkLabel = $('<span>');
	$(checkLabel).appendTo(logForm).text("Remember me").css("margin-top","30px").css("line-height","18px").css("font-family","Poppins").css("font-weight","300").css("font-size","12px");

	var checkLabel = $('<a></a>');
	$(checkLabel).appendTo(logForm).attr("href","").css("text-decoration","none").css("color","black").text("Forgot password ?").css("margin-left","35%").css("margin-top","30px").css("line-height","18px").css("font-family","Poppins").css("font-weight","300").css("font-size","12px");

	var button = $('<input type="button" id="btn">');
	$(button).appendTo(logForm).css("color","#ffffff").mouseover(function(){
		document.getElementById("btn").style.backgroundColor="#ed6a32";
	}).mouseout(function(){
		document.getElementById("btn").style.backgroundColor="#FF432A";
	}).attr("value","Login").css("border","none").css("outline","none").css("background-color","#FF432A").css("font-family","Poppins").css("font-weight","500").css("font-size","17px").css("line-height","25.5px").css("height","53px").css("border-radius","32px").css("box-shadow","0px 4px 26px rgba(0, 0, 0, 0.25)").css("margin-top","60px");

	var contText =$('<span>');
	$(contText).appendTo(logDiv).text("or continue with").css("color","#B5B5B5").css("line-height","24px").css("font-family","Poppins").css("font-weight","500").css("font-size","16px").css("position","relative").css("top","83px").css("left","35%");

	var imgEmail = $('<img>');
	$(imgEmail).appendTo(logForm).attr("id","imgEmail").css("position","relative").attr("src","msg.png");

	var imgLock = $('<img>');
	$(imgLock).appendTo(logForm).attr("id","imgLock").css("position","relative").attr("src","lock.png");
});
