<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Index.aspx.cs" Inherits="ProjectA.Index" %>

<!DOCTYPE html>

<head runat="server">
    <link rel="stylesheet" type="text/css" href="css/login.css" />
	   
    <link rel="stylesheet" href="css/Bootstrap/css/bootstrap.min.css" media="screen"/>
    <title></title>
</head>
<body>
<div class="container">
<div class="main" id="js_main" tabindex="-1">
<img src="img/blowfishflower.png"/>
<div class="row">
</div>
<div class="col-sm-2"></div>
    <div class="col-sm-10">
	<h1 style="color: white; font-size: 100px; top: 40%; left:40%; margin-bottom: 30px; ">Login</h1>
   <form id="form1" runat="server">

	<asp:Login ID="Login1" runat="server" DestinationPageUrl="~/Members/Home.aspx" TitleText="">
        <CheckBoxStyle HorizontalAlign="Center" VerticalAlign="Middle" />
        <LabelStyle HorizontalAlign="Left" />
        <TitleTextStyle Height="400px" HorizontalAlign="Center" />
	</asp:Login>

  <div class="button register">
 <button><asp:HyperLink ID="HyperLink1" runat="server" NavigateUrl="~/Register.aspx">Register</asp:HyperLink></button>
        <br />
		</div>
		</form>
        </div>
		</div>
	</div>
   
</body>
</html>
