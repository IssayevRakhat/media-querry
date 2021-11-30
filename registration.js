$(document).ready(function(){ 
	var newImg = $("<img>");
	$(newImg).attr("src","img.png").attr("class","backgroundImg").appendTo("body").css("width","800px");

	var signDiv = $("<div>");
	$(signDiv).appendTo("body").css("position","absolute").css("width","431px").css("height","598px").css("top","80px").css("left","865px")/*.css("border","3px solid red")*/;



	var signHeading = $("<p>");
	$(signHeading).appendTo(signDiv).text("Sign Up").css("line-height","45px").css("font-family","Poppins").css("font-weight","500").css("font-size","30px");

    var signLogin1 = $("<p>");
	$(signLogin1).appendTo(signDiv).css("line-height","24px").text("If you already have an account register").css("font-family","Poppins").css("font-weight","400").css("font-size","16px");

	var signLogin2 = $("<p>");
	$(signLogin2).appendTo(signDiv).css("line-height","24px").html(`You can <a href="index.html" id="sLog">Login here !</a>`).css("font-family","Poppins").css("font-weight","400").css("font-size","16px");

	$("a#sLog").css("font=weight","600").css("color","#FF432A").css("text-decoration","none");



	var signForm = $("<form>");
	$(signForm).appendTo(signDiv).css("position","relative").css("width","431px").css("height","305px")/*.css("border","3px solid blue")*/;



	var email = $("<p>");
	$(email).appendTo(signForm).text("Email").css("line-height","19px").css("font-family","Poppins").css("font-weight","500").css("font-size","13px");

	var enterEmail = $('<input type="text">');
	$(enterEmail).appendTo(signForm).attr("placeholder","Enter your email address").keypress(function(){
			document.getElementById('rectEmail').style.backgroundColor="#FF432A";
	}).css("line-height","24px").css("font-family","Poppins").css("font-weight","400").css("font-size","16px").css("margin-left","6.29%").css("border","none").css("outline","none");

	var rectEmail = $('<div id="rectEmail">');
	$(rectEmail).appendTo(signForm).css("width","100%").css("height","2px").css("background-color","black");



	var userName = $("<p>");
	$(userName).appendTo(signForm).text("Username").css("line-height","19px").css("font-family","Poppins").css("font-weight","500").css("font-size","13px").css("margin-top","50px");

	var enterUserName = $('<input type="text">');
	$(enterUserName).appendTo(signForm).attr("placeholder","Enter your User name").keypress(function(){
			document.getElementById('rectUserName').style.backgroundColor="#FF432A";
	}).css("line-height","24px").css("font-family","Poppins").css("font-weight","400").css("font-size","16px").css("margin-left","6.29%").css("border","none").css("outline","none");

	var rectUserName = $('<div id="rectUserName">');
	$(rectUserName).appendTo(signForm).css("width","100%").css("height","2px").css("background-color","black");



	var confirmPassword = $("<p>");
	$(confirmPassword).appendTo(signForm).text("Confirm Password").css("line-height","19px").css("margin-top","50px").css("font-family","Poppins").css("font-weight","500").css("font-size","13px");

	var enterConfirmPassword = $(`<input type="password">`);
	$(enterConfirmPassword).appendTo(signForm).attr("placeholder","Confirm your password").keypress(function(){
			document.getElementById('rectConfirmPassword').style.backgroundColor="#FF432A";
	}).css("width","90%").css("line-height","24px").css("font-family","Poppins").css("font-weight","400").css("font-size","16px").css("margin-left","6.29%").css("border","none").css("outline","none");

	var rectConfirmPassword = $('<div id="rectConfirmPassword">');
	$(rectConfirmPassword).appendTo(signForm).css("width","100%").css("height","2px").css("background-color","#000000");



	var password = $("<p>");
	$(password).appendTo(signForm).text("Password").css("line-height","19px").css("margin-top","50px").css("font-family","Poppins").css("font-weight","500").css("font-size","13px");

	var enterPassword = $(`<input type="password">`);
	$(enterPassword).appendTo(signForm).attr("placeholder","Enter your password").keypress(function(){
			document.getElementById('rectPassword').style.backgroundColor="#FF432A";
	}).css("width","90%").css("line-height","24px").css("font-family","Poppins").css("font-weight","400").css("font-size","16px").css("margin-left","6.29%").css("border","none").css("outline","none");

	var rectPassword = $('<div id="rectPassword">');
	$(rectPassword).appendTo(signForm).css("width","100%").css("height","2px").css("background-color","#000000");



	var button = $('<input type="button" id="btn">');
	$(button).appendTo(signForm).css("color","#ffffff").mouseover(function(){
		document.getElementById("btn").style.backgroundColor="#ed6a32";
	}).mouseout(function(){
		document.getElementById("btn").style.backgroundColor="#FF432A";
	}).attr("value","Register").css("border","none").css("outline","none").css("background-color","#FF432A").css("font-family","Poppins").css("font-weight","500").css("font-size","17px").css("line-height","25.5px").css("width","429px").css("height","53px").css("border-radius","32px").css("box-shadow","0px 4px 26px rgba(0, 0, 0, 0.25)").css("margin-top","60px");



	var imgEmail = $('<img>');
	$(imgEmail).appendTo(signForm).css("position","relative").css("top","-468px").css("left","0px").attr("src","msg.png");

	var imgUser = $('<img>');
	$(imgUser).appendTo(signForm).css("position","relative").css("top","-358px").css("left","-14px").attr("src","user.png");

	var imgLock = $('<img>');
	$(imgLock).appendTo(signForm).css("position","relative").css("top","-248px").css("left","-30px").attr("src","lock.png");

	var imgLock = $('<img>');
	$(imgLock).appendTo(signForm).css("position","relative").css("top","-138px").css("left","-46px").attr("src","lock.png");

});
