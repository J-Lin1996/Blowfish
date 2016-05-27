using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(ProjectA.Startup))]
namespace ProjectA
{
    public partial class Startup {
        public void Configuration(IAppBuilder app) {
            ConfigureAuth(app);
        }
    }
}
