<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Tutorial2.aspx.cs" Inherits="ProjectA.Members.Tutorial2" %>





<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>tutorialnew2</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=no">
    <link rel="stylesheet" href="/css/Bootstrap/css/bootstrap.min.css" media="screen">
    <link rel="stylesheet" type="text/css" href="/css/mobile2.css" />
	<script type="text/javascript" src="/js/music.js"></script>
</head>
<body>
  <div class="container-fluid">
	<!-- Tutorial Title -->
	 <div class="tutorials" id="tutorials" >
		<p class="tutorialtitle">Tutorial</p>
	</div>
	
	<!-- Sound Button -->
	<a id="soundbtn">
        <img src="/img/sound.png" alt="sound_button" class="img-responsive" id="music" />
    </a>	
	
	
	<!-- Blowfish -->
	<div class="fish" id="fish">
		<img src="/img/blowfish.png" alt="blowfish" class="img-responsive" id="blowfish" />
	</div>
	
	<!-- Crab -->
	<div class="crab" id="crab">
        <img src="/img/crab.png" alt="crab" class="img-responsive" id="crab" />
	</div>
	
	<!-- Shrimp -->
	<div class="shrimp" id="shrimp">
        <img src="/img/shrimp.png" alt="shrimp" class="img-responsive" id="shrimp" />
	</div>
	
	<!-- Mussel -->
	<div class="mussel" id="mussel">
        <img src="/img/mussel.png" alt="mussel" class="img-responsive" id="mussel" />
	</div>
	
	<!-- Squid -->
	<div class="squid" id="squid">
        <img src="/img/squid.png" alt="squid" class="img-responsive" id="squid" />
	</div>
	
	<!-- Feed me message -->
	<div class="feedme" id="feedme">
        <img src="/img/feedme.png" alt="feedme" class="img-responsive" id="feedme" />
    </div>
	
	<!-- Order display -->
	<div class="order" id="order">
        <img src="/img/order.png" alt="order" class="img-responsive" id="order" />
    </div>
	
	<!-- Back button-->
	<div class="leftbutton" id="leftbutton" >
        <a href="/Members/Tutorial.aspx"><img src="/img/leftarrow1.png" alt="leftbutton" class="img-responsive" id="leftbutton" /></a>
    </div>
	
	<!-- Play button-->
	<div class="playGame" id="playGame">
		<a href="/Members/Home.aspx"><img src="/img/green_play.png" alt="playGame" class="img-responsive" id="playGame" /></a>
	</div>
  </div>
</body>
</html>

