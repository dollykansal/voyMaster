<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<link rel="stylesheet" type="text/css" href="static/stylesheets/bootstrap.css">
<link rel="stylesheet" type="text/css" href="static/stylesheets/custom.css">
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Register New User</title>
</head>
<body>
	<div class="container" style="padding-top: 100px;">

		<form class="form-signin" action="add" method="post">
			<h2 class="form-signin-heading">Sign Up</h2>
			<input name="username" type="text" class="input-block-level shadow"
				value="Username" id="rusername"> <input name="firstName"
				type="text" class="input-block-level shadow" value="First Name"
				id="firstName"> <input name="lastName" type="text"
				class="input-block-level shadow" value="Last Name" id="lastName">
			<input name="password" type="password"
				class="input-block-level shadow" value="Password" id="rpassword">
			<button type="submit" class="btn btn-large btn-primary">Sign
				Up</button>
		</form>
	</div>
	<div id="registerModal" class="modal hide fade" tabindex="-1" role="dialog"
		aria-labelledby="myModalLabel" aria-hidden="true">
		<div class="modal-header">
			<button type="button" class="close" data-dismiss="modal"
				aria-hidden="true">×</button>
			<h3 id="myModalLabel">Message</h3>
		</div>
		<div class="modal-body">
			<p id="shown">User already exists, please try again</p>
		</div>
		<div class="modal-footer">
			<button class="btn btn-danger" data-dismiss="modal"
				aria-hidden="true">Close</button>
			<!-- 					<button class="btn btn-primary">Save changes</button> -->
		</div>
	</div>
	<script type="text/javascript" src="static/javascripts/bootstrap.js"></script>
	<script type="text/javascript" src="static/javascripts/app.js"></script>
</body>
</html>