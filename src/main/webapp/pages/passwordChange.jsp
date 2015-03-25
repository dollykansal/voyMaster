<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<link rel="stylesheet" type="text/css" href="static/stylesheets/bootstrap.css">
<link rel="stylesheet" type="text/css" href="static/stylesheets/custom.css">
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Change Password</title>
</head>
<body>
<div class="container" style="padding-top: 100px;">

      <form class="form-signin" action="passwordChange" method="post">
        <h2 class="form-signin-heading">Set New Password</h2>
        Username <input name="username" type="username" class="input-block-level">
        Old Password <input name="oldpassword" type="password" class="input-block-level">
        New Password <input name="newpassword" type="password" class="input-block-level">
        <button type="submit" class="btn btn-large btn-primary">Change Password</button>
      </form>

    </div>
    <script type="text/javascript" src="static/js/bootstrap.js"></script>
</body>
</html>