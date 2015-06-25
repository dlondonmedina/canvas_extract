<html>
<head>
	<link rel="stylesheet" href="" type="text/css" />
	<script src="js/form.js"></script>
	<script src="js/functions.js"></script>
	<script type="text/javascript">
		function showForm() {
			document.getElementById("urlEntry").style.display='block';
		}
	</script>
</head>
<body>
	<div id="head">
		<h1>EWP Corpus</h1>
	</div>
	
	<div id="main">
		<div>
			<p>Thank you for taking the time to submit your students portfolios to the EWP Corpus. Their and your names will be removed for your privacy.</p>
			<form>
				<input type="button" onClick="showForm()" value="Click here to submit portfolios!">
			</form>
		</div>
		<div id="urlEntry" style="display:none">
			<form name="urlList" onsubmit="return validate()" method="post" >
				<input type="hidden" name="loginName" id="loginName" value= "<?php echo $_SESSION['REMOTE_USER']; ?>" />
				<div id="dynamicInput">
					Enter URL<br><input type="text" name="myInputs[]" size="100" >
				</div>
				<input type="button" value="Add another Portfolio" onClick="addInput('dynamicInput');">	
				<input id="submitButton" type="submit" value="Done Adding Links">
			</form>
		</div>
	</div>
	
	<div id="footer"></div>
	
	

</body>
</html>

