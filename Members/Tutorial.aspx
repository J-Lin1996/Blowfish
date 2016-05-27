<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Tutorial.aspx.cs" Inherits="ProjectA.Members.Tutorial" %>




<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>tutorialnew1</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=no">
    <link rel="stylesheet" href="/css/Bootstrap/css/bootstrap.min.css" media="screen">
    <link rel="stylesheet" type="text/css" href="/css/mobile.css" />
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
    <div class="fish" id="fish" style="text-align:center; display:block">
        <img src="/img/helloblowfish.png" alt="blowfish" class="img-responsive" id="blowfish"  />
	</div>
	
	<!-- Food order display-->
	<div class="order" id="order" style="text-align:center; display:block">
        <img src="/img/order.png" alt="order" class="img-responsive" id="order"/>
    </div>
	
	<!-- Yellow Right Arrow -->
	<div class="arrow" id="arrow" style="text-align:center; display:block">
        <img src="/img/arrow.png" alt="arrow" class="img-responsive" id="arrow"  />
    </div>
	
	<!-- Message -->
	<p class="message">Remember the order of the food<br> items as they will fade away in<br> 2 seconds.</p>
	
	<!-- Home button-->
	<div class="homebutton" id="homebutton" >
        <a href="/Members/Home.aspx"><img src="/img/homebutton.png" alt="homebutton" class="img-responsive" id="homebutton" /></a>
    </div>
	
	<!-- Next button -->
	<div class="nextbutton" id="nextbutton" >
        <a href="/Members/Tutorial2.aspx"><img src="/img/rightarrow1.png" alt="nextbutton" class="img-responsive" id="nextbutton" /></a>
    </div>
  <div>
</body>
</html>


