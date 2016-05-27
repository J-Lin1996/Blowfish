using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Security;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace ProjectA.Members
{
    public partial class LogOut : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            // sign out the current user account
            FormsAuthentication.SignOut();

            // redirect the index.aspx page
            Response.Redirect("~/Index.aspx");
        }
    }
}