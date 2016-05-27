using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Security;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace ProjectA.Members
{
    public class CustomResult
    {
        public int Rank { get; set; }

        public string Username { get; set; }

        public int LevelScore { get; set; }
    }

    public partial class Result : System.Web.UI.Page
    {
        /// <summary>
        /// Returns the acheivement level for the specified level.
        /// </summary>
        /// <param name="level"></param>
        /// <returns></returns>
        private int? GetAchievementLevel(int level)
        {           
            if (level >= 3 && level <= 5)
            {
                // get the first achievement
                return 1;  
            }
            else if (level >= 6 && level <= 8)
            {
                // get the second achievement
                return 2;
            }
            else if (level >= 9)
            {
                // get the third achievement
                return 3;
            }

            return null;
        }

        protected void Page_Load(object sender, EventArgs e)
        {
            // define the level
            var level = Convert.ToInt32(Request.QueryString["level"]);

            var userId = Convert.ToString(Membership.GetUser().ProviderUserKey);
            // define the user id

            // define the model
            using (var model = new Model.ModelDataContext())
            {
                var readOnly = Request.QueryString["readonly"];

                if (readOnly != null && Convert.ToInt32(readOnly) == 1)
                {

                }
                else
                {
                    // define the result
                    var result = new Model.Result();

                    // assign the values
                    result.LevelScore = Convert.ToInt32(Request.QueryString["level"]);
                    result.UserId = new Guid(userId);

                    // add the result
                    model.Results.InsertOnSubmit(result);

                    // commit
                    model.SubmitChanges();

                    // define the query
                    var query = model.Achievements.FirstOrDefault(x => x.UserId.ToString() == userId.ToString());

                    // determine if there is a match
                    if (query != null)
                    {
                        // there is a match

                        // define the current achievement level
                        var currentAchievementLevel = query.AchievementLevel;

                        // define the new achievement level
                        var newAchievementLevel = GetAchievementLevel(level);

                        // determine if there is an upgrade
                        if (newAchievementLevel > currentAchievementLevel)
                        {
                            // there is an upgrade

                            // assign the new achievement level
                            query.AchievementLevel = newAchievementLevel.Value;

                            // commit
                            model.SubmitChanges();
                        }
                    }
                    else
                    {
                        // there is no match

                        // define the achievement
                        var achievement = new Model.Achievement();

                        // assign the values
                        achievement.UserId = new Guid(userId);
                        achievement.AchievementLevel = GetAchievementLevel(level).Value;

                        // add the achievement
                        model.Achievements.InsertOnSubmit(achievement);

                        // commit
                        model.SubmitChanges();
                    }
                }

                // define the list                
                var list = model.UserResultsViews.OrderByDescending(x => x.LevelScore).Take(10);

                // define the list of custom results
                var customResults = new List<CustomResult>();

                // define the index
                var index = 1;

                // loop through the list
                foreach (var current in list)
                {
                    // define the custom result
                    var customResult = new CustomResult();

                    // assign the values
                    customResult.Rank = index;
                    customResult.Username = current.UserName;
                    customResult.LevelScore = current.LevelScore;

                    // add the custom result
                    customResults.Add(customResult);

                    // increment the index
                    index++;
                }




                // assign the data source
                GridView1.DataSource = customResults;

                // bind the data
                GridView1.DataBind();
            }            
        }
    }
}