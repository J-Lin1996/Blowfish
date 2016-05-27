<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Result.aspx.cs" Inherits="ProjectA.Members.Result" %>

<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <link rel="stylesheet" type="text/css" href="/css/tableresult.css" />
    <link rel="stylesheet" type="text/css" href="/css/index.css" />
</head>
<body>

    <form id="form1" runat="server">
        
    <div class="background">
        <div class="ranking">
		    <p class="blowfishranking">Blowfish Ranking</p>
	    </div>
        <asp:GridView ID="GridView1" runat="server">
        </asp:GridView>
    
        <br />
        <br />

        <button class="rhome" onclick="window.history.go(-1)">Home</button>


        <button class="achievement"><asp:HyperLink ID="HyperLink1" runat="server" NavigateUrl="~/Members/Achievements.aspx">Achievements</asp:HyperLink></button>
        
  

    
    </div>
           
    </form>

</body>
</html>
