<?php
	$host = 'localhost';
	$username = 'root';
	$password = '';
	$db = 'cars';
	$db_conn = mysqli_connect($host, $username, $password, $db);

	if(!$db_conn){
		die('Could not connect: ' .mysqli_error());
	}

	$query = "SELECT * FROM cars";
	$result = mysqli_query($db_conn, $query);
	$num_row = mysqli_num_rows($result);
?>
<html>
  <head>
	<style>
		.car{
		  display:flex;
		  border:1px solid black;
		  border-radius:5px;
		  width:250px;
		  padding:10px;
		}
		.title{
		  font-size:16px;
		  font-weight:bold;
		}
		.attributes .row{
		  display:flex;
		}
		.attributes .row div{
		  width:50%;
		}
		.attributes .row .name{
		  font-weight:bold;
		}
		.car img{
		  margin-right:10px;
		}
	</style>
  </head>
  <body>
    <div class="cars">
      	<?php 
      		for ($i = 0; $i < $num_row; $i++) {
            	$row = mysqli_fetch_assoc($result);
            	echo '<div class = "car">';
            	echo '<img width="100" height="60" src="' .$row['url']. '"/>';
            	echo '<div class="right">';
            	echo '<div class="title">' .$row['maker']. ' ' .$row['model']. '</div>';
            	echo '<div class="attributes">';
            	echo '<div class="row"><div class="name">Year:</div><div>' .$row['year']. '</div></div>';
          		echo '<div class="row"><div class="name">Price:</div><div>' .$row['price']. '</div></div></div></div></div>';
          	}
          	mysqli_close($db_conn);
       	?>
    </div>
  </body>
</html>