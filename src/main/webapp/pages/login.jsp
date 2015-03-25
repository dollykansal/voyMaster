<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    <%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" type="text/css" href="static/stylesheets/bootstrap.css">
<link rel="stylesheet" type="text/css" href="static/stylesheets/custom.css">
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Login</title>
<script src="resources/sap-ui-core.js" id="sap-ui-bootstrap"
	data-sap-ui-libs="sap.ui.commons,sap.ui.table,sap.viz,sap.suite.ui.commons,sap.ui.ux3"
	data-sap-ui-xx-bindingSyntax="complex"
	data-sap-ui-theme="sap_goldreflection" data-sap-ui-debug=true>
</script>
</head>
<body>
<div class="container" style="padding-top: 100px;" id="login">

      <form class="form-signin" action="auth" method="post">
        <h2 class="form-signin-heading">Please sign in</h2>
        <input name="username" type="text" class="input-block-level shadow" value="Username" id="username">
        <input name="password" type="password" class="input-block-level shadow" value="Password" id="password">
        <label class="checkbox">
          <input type="checkbox" value="remember-me"> Remember me
        </label>
        <button id="sign" class="btn btn-large btn-primary">Sign in</button>
        <a href="register" class="pc">Register New User</a>
        <c:if test="${changed}">
        <div><h5>Password has changed, please login again</h5></div>
        </c:if>
        <c:if test="${Failed}"></br></br><h5>You have entered an invalid Username or Password!</h5>
        </c:if>
        <div id="registerModal" class="modal hide fade" tabindex="-1" role="dialog"
		aria-labelledby="myModalLabel" aria-hidden="true">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal"
					aria-hidden="true">×</button>
				<h3 id="myModalLabel">Message</h3>
			</div>
			<div class="modal-body">
				<p id="loginshown">User already exists, please try again</p>
			</div>
			<div class="modal-footer">
				<button class="btn btn-danger" data-dismiss="modal"
					aria-hidden="true">Close</button>
				<!-- 					<button class="btn btn-primary">Save changes</button> -->
			</div>
		</div>
      </form>
    </div>
    <script type="text/javascript" src="static/javascripts/jquery-1.8.3.min.js"></script>
    <script type="text/javascript" src="static/javascripts/bootstrap.js"></script>
    <script type="text/javascript" src="static/javascripts/app.js"></script>
</body>
</html>