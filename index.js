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

	var smicons = $('<div>');
	$(smicons).attr("id","smicons").appendTo(logDiv).css("position","absolute");

	var facebookLink = $('<a>');
	$(facebookLink).appendTo(smicons).attr("href","https://www.facebook.com/campaign/landing.php?campaign_id=1635645038&extra_1=s%7Cc%7C313628262441%7Ce%7Cfacebook%20account%7C&placement=&creative=313628262441&keyword=facebook%20account&partner_id=googlesem&extra_2=campaignid%3D1635645038%26adgroupid%3D61926920585%26matchtype%3De%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-1409284695%26loc_physical_ms%3D9063099%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gclid=Cj0KCQiAtJeNBhCVARIsANJUJ2GDutOWYvLSg8i5kDinR7SKahEN__zX23RI2lWkIDgqTnRipDKGhOgaAkQlEALw_wcB");

	var facebook = $('<img>');
	$(facebook).appendTo(facebookLink).attr("id","facebook").attr("src","Facebook.png");

	var appleLink = $('<a>');
	$(appleLink).appendTo(smicons).attr("href","https://support.apple.com/ru-ru/apple-id");

	var apple = $('<img>');
	$(apple).appendTo(appleLink).attr("id","apple").attr("src","apple.png");

	var googleLink = $('<a>');
	$(googleLink).appendTo(smicons).attr("href","https://www.google.com/account/about/");

	var google = $('<img>');
	$(google).appendTo(googleLink).attr("id","google").attr("src","google.png");

	

	
});
