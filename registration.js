$(document).ready(function(){ 
	var newImg = $("<img>");
	$(newImg).attr("src","img.png").attr("class","backgroundImg").appendTo("body").css("width","800px");

	var signDiv = $("<div>");
	$(signDiv).appendTo("body").attr("class","signDiv").css("position","absolute").css("width","431px").css("height","598px").css("top","50px");/*.css("border","3px solid red")*/;



	var signHeading = $("<p>");
	$(signHeading).appendTo(signDiv).text("Sign Up").css("line-height","45px").css("font-family","Poppins").css("font-weight","500").css("font-size","30px");

    var signLogin1 = $("<p>");
	$(signLogin1).appendTo(signDiv).css("line-height","24px").text("If you already have an account register").css("font-family","Poppins").css("font-weight","400").css("font-size","16px");

	var signLogin2 = $("<p>");
	$(signLogin2).appendTo(signDiv).css("line-height","24px").html(`You can <a href="index.html" id="sLog">Login here !</a>`).css("font-family","Poppins").css("font-weight","400").css("font-size","16px");

	$("a#sLog").css("font=weight","600").css("color","#FF432A").css("text-decoration","none");



	var signForm = $("<form>");
	$(signForm).appendTo(signDiv).attr("class","signForm").css("position","relative").css("height","305px")/*.css("border","3px solid blue")*/;



	var emailHeading = $("<p>");
	$(emailHeading).appendTo(signForm).text("Email").css("line-height","19px").css("font-family","Poppins").css("font-weight","500").css("font-size","13px");

	var enterEmail = $('<input type="email" name="email" id="email" required>');
	$(enterEmail).appendTo(signForm).attr("placeholder","Enter your email address").keypress(function(){
			document.getElementById('rectEmail').style.backgroundColor="#FF432A";
	}).css("line-height","24px").css("font-family","Poppins").css("font-weight","400").css("font-size","16px").css("margin-left","6.29%").css("border","none").css("outline","none");

	var rectEmail = $('<div id="rectEmail">');
	$(rectEmail).appendTo(signForm).css("width","100%").css("height","1px").css("background-color","black");

	var checkEmail = $('<small id="emailvalid"></small');
	$(checkEmail).appendTo(signForm).text("Your email must be valid").css("font-family","Poppins").css("color","gray");



	var userNameHeading = $("<p>");
	$(userNameHeading).appendTo(signForm).text("Username").css("line-height","19px").css("font-family","Poppins").css("font-weight","500").css("font-size","13px").css("margin-top","30px");

	var enterUserName = $('<input type="text" name="username" id="usernames">');
	$(enterUserName).appendTo(signForm).attr("placeholder","Enter your User name").keypress(function(){
			document.getElementById('rectUserName').style.backgroundColor="#FF432A";
	}).css("line-height","24px").css("font-family","Poppins").css("font-weight","400").css("font-size","16px").css("margin-left","6.29%").css("border","none").css("outline","none");

	var rectUserName = $('<div id="rectUserName">');
	$(rectUserName).appendTo(signForm).css("width","100%").css("height","1px").css("background-color","black");

	var checkUserName = $('<h5 id="usercheck"></h5>');
	$(checkUserName).appendTo("body").css("color","#FF432A").text("Username is missing").css("font-family","Poppins").css("position","absolute").css("top","390px");



	var passwordHeading = $("<p>");
	$(passwordHeading).appendTo(signForm).text("Password").css("line-height","19px").css("margin-top","50px").css("font-family","Poppins").css("font-weight","500").css("font-size","13px");

	var enterPassword = $(`<input type="password" name="pass" id="password">`);
	$(enterPassword).appendTo(signForm).attr("placeholder","Enter your password").keypress(function(){
			document.getElementById('rectPassword').style.backgroundColor="#FF432A";
	}).css("width","90%").css("line-height","24px").css("font-family","Poppins").css("font-weight","400").css("font-size","16px").css("margin-left","6.29%").css("border","none").css("outline","none");

	var rectPassword = $('<div id="rectPassword">');
	$(rectPassword).appendTo(signForm).css("width","100%").css("height","1px").css("background-color","#000000");

	var checkPassword = $('<h5 id="passcheck"></h5>');
	$(checkPassword).appendTo("body").css("color","#FF432A").text("Please, fill the password").css("font-family","Poppins").css("position","absolute").css("top","500px");



	var confirmPasswordHeading = $("<p>");
	$(confirmPasswordHeading).appendTo(signForm).text("Confirm Password").css("line-height","19px").css("margin-top","50px").css("font-family","Poppins").css("font-weight","500").css("font-size","13px");

	var enterConfirmPassword = $(`<input type="password" name="conpassword" id="conpassword">`);
	$(enterConfirmPassword).appendTo(signForm).attr("placeholder","Confirm your password").keypress(function(){
			document.getElementById('rectConfirmPassword').style.backgroundColor="#FF432A";
	}).css("width","90%").css("line-height","24px").css("font-family","Poppins").css("font-weight","400").css("font-size","16px").css("margin-left","6.29%").css("border","none").css("outline","none");

	var rectConfirmPassword = $('<div id="rectConfirmPassword">');
	$(rectConfirmPassword).appendTo(signForm).css("width","100%").css("height","1px").css("background-color","#000000");

	var checkPassword = $('<h5 id="conpasscheck"></h5>');
	$(checkPassword).appendTo("body").css("color","#FF432A").text("Passwords didn't match").css("font-family","Poppins").css("position","absolute").css("top","610px");

	

	var button = $('<input type="submit" id="btn" value="submit">');
	$(button).appendTo(signForm).css("color","#ffffff").mouseover(function(){
		document.getElementById("btn").style.backgroundColor="#ed6a32";
	}).mouseout(function(){
		document.getElementById("btn").style.backgroundColor="#FF432A";
	}).attr("value","Register").css("border","none").css("outline","none").css("background-color","#FF432A").css("font-family","Poppins").css("font-weight","500").css("font-size","17px").css("line-height","25.5px").css("height","53px").css("border-radius","32px").css("box-shadow","0px 4px 26px rgba(0, 0, 0, 0.25)").css("margin-top","60px");



	var imgEmail = $('<img>');
	$(imgEmail).appendTo(signForm).attr("id","imgEmail").css("position","relative").css("top","-468px").css("left","0px").attr("src","msg.png");

	var imgUser = $('<img>');
	$(imgUser).appendTo(signForm).attr("id","imgUser").css("position","relative").css("top","-358px").css("left","-14px").attr("src","user.png");

	var imgLock = $('<img>');
	$(imgLock).appendTo(signForm).attr("id","imgLock").css("position","relative").css("top","-248px").css("left","-30px").attr("src","lock.png");

	var imgLock = $('<img>');
	$(imgLock).appendTo(signForm).attr("id","imgLock2").css("position","relative").css("top","-138px").css("left","-46px").attr("src","lock.png");



	$('#usercheck').hide();   
    let usernameError = true;
    $('#usernames').keyup(function () {
        validateUsername();
    });
     
    function validateUsername() {
      let usernameValue = $('#usernames').val();
      if (usernameValue.length == '') {
      $('#usercheck').show();
          usernameError = false;
          return false;
      }
      else if((usernameValue.length < 3)||
              (usernameValue.length > 10)) {
          $('#usercheck').show();
          $('#usercheck').html
("length of username must be between 3 and 10");
          usernameError = false;
          return false;
      }
      else {
          $('#usercheck').hide();
      }
    }
 
  
    const email =document.getElementById('email');
    email.addEventListener('blur', ()=>{
       let regex =
/^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
       let s = email.value;
       if(regex.test(s)){
          email.classList.remove(
                'is-invalid');
          emailError = true;

        }
        else{
            email.classList.add(
                  'is-invalid');
            emailError = false;
        }
    })
     
   // Validate Password
    $('#passcheck').hide();
    let passwordError = true;
    $('#password').keyup(function () {
        validatePassword();
    });
    function validatePassword() {
        let passwrdValue =
            $('#password').val();
        if (passwrdValue.length == '') {
            $('#passcheck').show();
            passwordError = false;
            return false;
        }
        if ((passwrdValue.length < 3)||
            (passwrdValue.length > 10)) {
            $('#passcheck').show();
            $('#passcheck').html
("length of your password must be between 3 and 10");
            $('#passcheck').css("color", "red");
            passwordError = false;
            return false;
        } else {
            $('#passcheck').hide();
        }
    }
         
// Validate Confirm Password
    $('#conpasscheck').hide();
    let confirmPasswordError = true;
    $('#conpassword').keyup(function () {
        validateConfirmPasswrd();
    });
    function validateConfirmPasswrd() {
        let confirmPasswordValue =
            $('#conpassword').val();
        let passwrdValue =
            $('#password').val();
        if (passwrdValue != confirmPasswordValue) {
            $('#conpasscheck').show();
            $('#conpasscheck').html(
                "Password didn't Match");
            $('#conpasscheck').css(
                "color", "red");
            confirmPasswordError = false;
            return false;
        } else {
            $('#conpasscheck').hide();
        }
    }
     
// Submit button
    $('#submitbtn').click(function () {
        validateUsername();
        validatePassword();
        validateConfirmPasswrd();
        validateEmail();
        if ((usernameError == true) &&
            (passwordError == true) &&
            (confirmPasswordError == true) &&
            (emailError == true)) {
            return true;
        } else {
            return false;
        }
    });
});

