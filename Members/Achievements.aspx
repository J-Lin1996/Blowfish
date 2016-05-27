<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Achievements.aspx.cs" Inherits="ProjectA.Members.Achievements" %>

<!DOCTYPE html>
<html>
<head runat="server">
  <meta charset="UTF-8">
  <title>Blowfish</title>
  <link rel="stylesheet" type="text/css" href="/css/acheive.css" />
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">
  </head>
  <body>
    <div class="main" id="js_main" tabindex="-1">
  <div class="container">
    <form id="form1" runat="server">
  <div class="title">
 	<h1 style="font-size: 125px; margin-top: 100px; font-weight: bold;">Achievements</h1>
	</div>
  <div class="row">
  <div class="col-sm-1">
   <asp:Image ID="Image1" runat="server" ImageUrl="~/img/Trophy3Gray.png" />
  </div>
  <div class="col-sm-5"></div>
  <div class="col-sm-6">
  <p>
  Reach level 3
  </p>
  </div>
  </div>

 <div class="row">
   <div class="col-sm-1">
    <asp:Image ID="Image2" runat="server" ImageUrl="~/img/Trophy4gray.png" />
  </div>
    <div class="col-sm-5"></div>
	<div class="col-sm-6">
  <p>
  Reach level 6
  </p>
  </div>
  </div>
 <div class="row">
   <div class="col-sm-1">
    <asp:Image ID="Image3" runat="server" ImageUrl="~/img/Trophy5gray.png" />
  </div>
    <div class="col-sm-5"></div>
	<div class="col-sm-6">
  <p>
  Reach level 9
  </p>
  </div>
 </div>
      <button class="but" onclick="window.history.back();" >Back</button>
         <button class="butt" onclick="window.history.go(-2)">Home</button>
        </form>
  </div>    
  </div>
  
  </body>
</html>
