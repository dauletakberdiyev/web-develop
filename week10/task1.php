<!DOCTYPE html>
<html>
<head>
	<title></title>
	<style type="text/css">
		.error{
			display: block;
			border: 1px solid red;
			padding: 5px;
			margin-bottom: 5px;
			width: 500px;
		}
	</style>
</head>
<body>
	<?php 
		if(!empty($_POST)) {
	        $username = $_POST["username"];
	        $password = $_POST["password"];
	        $confPass= $_POST["confirm_password"];

	        if($username=="") {
            	print "<label class='error'>Username should not be empty</label>\n";
	        }
	        else {
	            print "<label class='error'>Username $username is already reserved</label>";
	        }
	        if($password == "" and $confPass =="") {
	            print "<label class='error'>Password and Confirm Password should not be empty</label>";
	        }
	        if($password != $confPass) {
	            print "<label class='error'>Password and Confirm Password doesn't equal to each other</label>";
	        }
	    }
	?>
	<form method="POST" action="task1.php">
		<table border="0">
			<tr><td>Username:</td><td><input type="text" name="username"></td></tr>
			<tr><td>Password:</td><td><input type="password" name="password"></td></tr>
			<tr><td>Confirm Password:</td><td><input type="password" name="confirm_password"></td></tr>
			<tr><td><input type="submit" name="submit" value="Submit"></td></tr>
		</table>
	</form>
</body>
</html>