using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;

namespace BFISH
{
    /// <summary>
    /// PersonList
    /// </summary>
    public class PersonList : IHttpHandler
    {

        public void ProcessRequest(HttpContext context)
        {
            context.Response.ContentType = "text/html";

            // Select statement to retrieve the top 10 scores from the database.
            DataTable dt = SqlHelper.ExecuteDataTable("select top(10) * from T_People ORDER BY LevelS DESC");

            // HTML tag to fill up the leaderboard page.
            string html = CommonHelper.RenderHtml("leaderboard.html", dt.Rows);

            context.Response.Write(html);
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