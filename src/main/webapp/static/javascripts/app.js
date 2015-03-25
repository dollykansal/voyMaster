(function() {
	$(".shadow").click(function() {
		$(this).removeClass("shadow");
		$(this).val("");
	});
	
	$("#login form").submit(function(){
		if(($("#username").val()==""||$("#username").val()=="Username") && ($("#password").val()==""||$("#password").val()=="Password")){
			message="Username and Password cannot be blank";
			$("#loginshown").html(message);
			$('#registerModal').modal();
			return false;
		}else if($("#username").val()==""||$("#username").val()=="Username"){
			message="Username cannot be blank";
			$("#loginshown").html(message);
			$('#registerModal').modal();
			return false;
		}else if($("#password").val()==""||$("#password").val()=="Password"){
			message="Password cannot be blank";
			$("#loginshown").html(message);
			$('#registerModal').modal();
			return false;
		}
		return true;
	});
	
	$("#username,#password").click(function(){
		$(this).html('');
	});
		
	$("#username").blur(function() {
		if ($(this).val() == "") {
			$(this).addClass("shadow");
			$(this).val("Username");
			$("#loginshown").html("Username cannot be blank");
			$('#registerModal').modal();
		}
	});

	$("#firstName").blur(function() {
		if ($(this).val() == "") {
			$(this).addClass("shadow");
			$(this).val("First Name");
			$("#shown").html("First Name cannot be blank");
			$('#registerModal').modal();
		}else if($(this).val() != ""){
			var pattern="[a-zA-Z]"
				if(!$(this).val().match(pattern)){
					$("#shown").html("First Name can only be alphabetical");
					$('#registerModal').modal();
					$(this).addClass("shadow");
					$(this).val("First Name");
				}
		}
	});
	$("#lastName").blur(function() {
		if ($(this).val() == "") {
			$(this).addClass("shadow");
			$(this).val("Last Name");
			$("#shown").html("Last Name cannot be blank");
			$('#registerModal').modal();
		}else if($(this).val() != ""){
			var pattern="[a-zA-Z]"
				if(!$(this).val().match(pattern)){
					$("#shown").html("Last Name can only be alphabetical");
					$('#registerModal').modal();
					$(this).addClass("shadow");
					$(this).val("Last Name");
				}
		}
	});
	$("#password,#rpassword").blur(function() {
		if ($(this).val() == "") {
			$(this).addClass("shadow");
			$(this).val("Password");
			$("#shown,#loginshown").html("Password cannot be blank");
			$('#registerModal').modal();
		}
	});
	$("#rusername").blur(function() {
		if ($(this).val() == "") {
			$(this).addClass("shadow");
			$(this).val("Username");
		}else if($(this).val() != ""){
			var pattern="[a-zA-Z]{5,15}"
			if(!$(this).val().match(pattern)){
				$("#shown").html("Username can only be alphabetical and minmum length should be 5");
				$('#registerModal').modal();
				$(this).addClass("shadow");
				$(this).val("Username");
			}
		}
		if ($(this).val() != "" && $(this).val() != "Username") {
			$.ajax({
				type : "POST",
				data : {
					"username" : $(this).val()
				},
				url : "checkUser",
				success : function(data) {
					if (data=='Y') {
						$("#shown").html("User already exists, please try again");
						$('#registerModal').modal();
					}
				}
			});
		}
	});
}).call(this);