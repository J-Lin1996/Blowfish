<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Register.aspx.cs" Inherits="ProjectA.Register" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Register</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1" />


<style>
    #CreateUserWizard1___CustomNav0_StepNextButtonButton {
        top: 105%;
        left: 42%;
        position:absolute;
        font-size: 80%;
        width: 150px;
        height: 30px;
    }
    .background {
        top: 0px;
        left: 0px;
        position: fixed;
    }
    #form1 {
        position:absolute;
        top:3%;
        left: 4%;
        line-height: 22px;
        color: white;
        font-size: 150%;
        font-weight: bold;
        text-align: left;
    }
    #backButton {
        position:absolute;
        top: 105%;
        left: 0%;
        font-size: 80%;
        width: 80px;
        height: 30px;
    }
    #CreateUserWizard1_CompleteStepContainer_ContinueButtonButton {
        position: absolute;
        left: 42%;
        width: 150px;
        height: 30px;
        font-size: 80%;
        top: 185px;
    }
  
</style>
</head>
<body>
 <div class="mycontainer">
    <div class="background">
        <img src="img/fish.png" alt="background" />
    </div>
    <form id="form1" runat="server">
    <div>
    
    </div>
        <asp:CreateUserWizard ID="CreateUserWizard1" runat="server" ContinueDestinationPageUrl="~/Index.aspx" TabIndex="5" UserNameLabelText="User Name:       " Width="500px" style="margin-right: 0px; margin-top: 0px" CompleteSuccessText="Account created." ContinueButtonText="Continue">
            <LabelStyle Height="30px" HorizontalAlign="Left" Width="200px" />
            <TitleTextStyle Height="140px" ForeColor="White" HorizontalAlign="Justify" />
            <WizardSteps>
                <asp:CreateUserWizardStep runat="server" />
                <asp:CompleteWizardStep runat="server" />
            </WizardSteps>
        </asp:CreateUserWizard>
        <button id="backButton" onclick="window.history.back();">Back</button>
    </form>
 </div>
</body>
</html>
