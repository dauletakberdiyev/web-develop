<?php 
	$makerOfCar = $_POST['maker'];
	$modelOfCar = $_POST['model'];
	$yearOfCar = $_POST['year']; 
	$engineOfCar = $_POST['engine'];
	$priceOfCar = $_POST['price'];
	function checkbox_verify($_name){
		$result = "yes";
		if(empty($_POST[$_name])){
			$result = "no";
		}
		return $result;
	}

	echo "<label>You added new item: <strong>$makerOfCar $modelOfCar</strong></label><br>
		<label>Produced in $yearOfCar(" .(2018-$yearOfCar). " years old) with $engineOfCar engine</label><br>
		<label>Tax payed:" .checkbox_verify('additional1'). "</label><br>
		<label>Technical check passed:" .checkbox_verify('additional2'). "</label><br>
		<label>Does not require investment:" .checkbox_verify('additional3'). "</label><br>
		<label>$ $priceOfCar"
?>


