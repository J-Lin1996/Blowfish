using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Security;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace ProjectA.Members
{
    public partial class Achievements : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            // define the user id
            var userId = Convert.ToString(Membership.GetUser().ProviderUserKey);
            
            // define the model
            using (var model = new Model.ModelDataContext())
            {
                var currentAchievement = model.Achievements.FirstOrDefault(x => x.UserId.ToString() == userId);

                if (currentAchievement != null )
                {
                    switch (currentAchievement.AchievementLevel)
                    {
                        case 1:
                            {
                                Image1.ImageUrl = "~/img/Trophy3.png";
                                break;
                            }
                        case 2:
                            {
                                Image1.ImageUrl = "~/img/Trophy3.png";
                                Image2.ImageUrl = "~/img/Trophy4.png";
                                break;
                            }
                        case 3:
                            {
                                Image1.ImageUrl = "~/img/Trophy3.png";
                                Image2.ImageUrl = "~/img/Trophy4.png";
                                Image3.ImageUrl = "~/img/Trophy5.png";
                                break;
                            }
                    }
                }
            }            
        }
    }
}