using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace BFISH
{
    /// <summary>
    /// PersonEdit
    /// </summary>
    public class PersonEdit : IHttpHandler
    {

        public void ProcessRequest(HttpContext context)
        {
            context.Response.ContentType = "text/html";
            //PersonEdit.ashx?action=AddNew
            //PersonEdit.ashx?action=Edit&Id=3
            string action = context.Request["action"];
            int levelF = Convert.ToInt32(context.Request["Level"]);
            if (action == "AddNew")
            {
                bool save = Convert.ToBoolean(context.Request["Save"]);
                if (save) //the user clicked save
                {
                    string name = context.Request["Name"];
                    int level = Convert.ToInt32(context.Request["LevelS"]);
                   // int level = Convert.ToInt32(context.Request["Level"]);
                    SqlHelper.ExecuteNonQuery("Insert into T_People(Name,LevelS) values(@Name,@LevelS)", new SqlParameter("@Name", name)
                       , new SqlParameter("@LevelS", level));
                    context.Response.Redirect("PersonList.ashx"); //go back to person
                }
                else  //just show the page
                {
                    var data = new { Name = "", LevelS = levelF };
                    string html = CommonHelper.RenderHtml("PersonEdit.html", data);
                    context.Response.Write(html);   
                }
            }
            else if (action == "Edit")
            {
            }
            else
            {
                context.Response.Write("Action parameter error！");
            }
        }

        public bool IsReusable
        {
            get
            {
                return false;
            }
        }
    }
}