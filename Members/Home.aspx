<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Home.aspx.cs" Inherits="ProjectA.Members.Home" %>

<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Blowfish</title>
  <link rel="stylesheet" type="text/css" href="/css/index.css" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=no">
  <link rel="stylesheet" href="/css/Bootstrap/css/bootstrap.min.css" media="screen">
  <script type="text/javascript" src="/js/jquery-1.11.0.js"></script>
  <script type="text/javascript" src="/js/bubbles.js"></script>
  <script type="text/javascript" src="/js/wfn.js"></script>
  <script type="text/javascript" src="/js/fish.js"></script>
  <script type="text/javascript" src="/js/seafood.js"></script>
  <script type="text/javascript" src="/js/main.js"></script>
  <script type="text/javascript" src="/js/egg.js"></script>
  <script type="text/javascript" src="/js/music.js"></script>
  <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
</head>
<body>
  <div class="mycontainer">
  <div class="bubbles">
	<div class="main" id="js_main" tabindex="-1">
        <form action="/Members/Logout.aspx" method="get">
            <!--<canvas id="canvas" width="320" height="480"></canvas>-->      
		<!-- this is for the level -->
		<div class="level">
			Level: <span id="js_level">1</span>
		</div>
		
		<!-- life label -->
		<div class="life">
			<label id="js_life"></label>
		</div>

        <!--food position 1-->
        <div class="food1" id="food1">
            <img src="" alt="" id="food-0" onclick="eating(alt, id)" />
        </div>
        
        <!--food position 2-->
        <div class="food2" id="food2">
            <img src="" alt="" id="food-1" onclick="eating(alt, id)" />
        </div>
       
        <!--food position 3-->
        <div class="food3" id="food3">
            <img src="" alt="" id="food-2" onclick="eating(alt, id)" />
        </div>
        
        <!--food position 4-->
        <div class="food4" id="food4">
            <img src="" alt="" id="food-3" onclick="eating(alt, id)" />
        </div>

        <!--food position 5-->
        <div class="food5" id="food5" style="display: none">
            <img src="" alt="" id="food-4" onclick="eating(alt, id)" />
        </div>

        <!--food position 6-->
        <div class="food6" id="food6" style="display: none">
            <img src="" alt="" id="food-5" onclick="eating(alt, id)" />
        </div>

        <!--food order display-->
        <div class="foodDisplay" id="foodDisplay" style="display: block" onclick="testt()">
            <img src="" id="foodDisplay0"/>
            <img src="" id="foodDisplay1"/>
            <img src="" id="foodDisplay2"/>
            <img src="" id="foodDisplay3"/>
        </div>
		
		
        <div class="blowfish" id="fatfish" style="left:30px; display:block">
            <img src="/img/blowfish.png" alt="blowfish" class="img-responsive" id="imgfish" />
        </div>

		<div class="start_flush" id="js_start_flush">
			<a href="javascript:void(0)" id="js_start_btn" style="display: none;"
				class="start_btn" onclick="start()">
				<!--play button -->
				<img src="/img/green_play.png" alt="green_play" class="img-responsive"/>				
			</a> 
            <a id="soundbtn">
                <img src="/img/sound.png" alt="sound_button" class="img-responsive" id="music" />
            </a>
            <!--blow fish in center of home screen-->
            <p id="title">Blowfish</p>
            <div class="blow">
                <img src="/img/blowfish.png" alt="blowfish" class="img-responsive" id="myblowfish" onclick="clickEgg()"/>
            </div>
            <!------->

			<span
				id="js_start_loading"
				style="position: absolute; left: 241px; top: 417px; font-size: 16px; font-weight: bolder;">Loading...
			</span>
			
			<!--leaderboard-->
            <a href="/Members/Result.aspx?readonly=1" id="" style="" class="leader_btn">
                <img src="/img/leaderboard.png" alt="leader" class="img-responsive"/>
            </a>
         
			<!-- tutorial page button -->
            <a href="/Members/Tutorial.aspx" id="js_tutor_btn" style="display: none;" class="tutor_btn">
                <img src="/img/question.png" alt="tutorial" class="img-responsive"/>
            </a>
            <button class="logmeout" type="submit">Log Out</button> 
		</div>

        <div class="end_flush" id="js_end_flush" style="display: none">
            <span class="icon"></span>
            <p></p>
            <a href="javascript:void(0)" class="replay_btn"
               onclick="replay()"></a>
			   
			<a href="" id="database" class="submit_btn" style="display: none"></a>   
        </div>
        </form>
	</div>
  </div>
  </div>
</body>
</html>

