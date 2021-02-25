using Microsoft.AspNetCore.Http;
using server.Models;
using server.Utils;

namespace src.test
{
    public static class Utilities
    {
        #region snippet1
        public static void InitializeDbForTests(PostgresContext db)
        {
            db.Users.Add(BuildUser());
            db.Recipes.Add(BuildRecipe());
            db.SaveChanges();
        }

        public static void ReinitializeDbForTests(PostgresContext db)
        {
            db.Users.RemoveRange(db.Users);
            InitializeDbForTests(db);
        }

        public static User BuildUser()
        {
            return new User()
            {
                Id = ParseUserId.GetUserId(CreateAuthHeader().Request.Headers),
                Email = "xunit@dotnet.com",
                Name = "xunit"
            };
        }

        public static Recipe BuildRecipe()
        {
            return new Recipe()
            {
                Title = "Initial Recipe From xunit",
                Owner = BuildUser().Id,
            };
        }

        public static DefaultHttpContext CreateAuthHeader()
        {
            DefaultHttpContext httpContext = new();
            httpContext.Request.Headers["authorization"] = $"Bearer {Token}";
            return httpContext;
        }

        public static string Token { get => "eyJhbGciOiJSUzI1NiIsImtpZCI6IjJjMmVkODQ5YThkZTI3ZTI0NjFlNGJjM2VmMDZhYzdhYjc4OGQyMmIiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiTmljayBXYW5nIiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hLS9BT2gxNEdnNkJGa2tMVGQwbmpaV2QxS3NzXzYzQ3VFQ3pTRzVid3JCUTNsMlJnPXM5Ni1jIiwiaHR0cHM6Ly9oYXN1cmEuaW8vand0L2NsYWltcyI6eyJ4LWhhc3VyYS1kZWZhdWx0LXJvbGUiOiJ1c2VyIiwieC1oYXN1cmEtYWxsb3dlZC1yb2xlcyI6WyJ1c2VyIiwiYWRtaW4iXSwieC1oYXN1cmEtdXNlci1pZCI6IkpFRmUyU21kN2xPdHc0T0VCZTJ2b3ZHOE96SDIifSwiaXNzIjoiaHR0cHM6Ly9zZWN1cmV0b2tlbi5nb29nbGUuY29tL3RyaWVkYW5kdHJ1ZS04ZTdiOSIsImF1ZCI6InRyaWVkYW5kdHJ1ZS04ZTdiOSIsImF1dGhfdGltZSI6MTYxMjg1MTcxNSwidXNlcl9pZCI6IkpFRmUyU21kN2xPdHc0T0VCZTJ2b3ZHOE96SDIiLCJzdWIiOiJKRUZlMlNtZDdsT3R3NE9FQmUydm92RzhPekgyIiwiaWF0IjoxNjEzMTE3MjA4LCJleHAiOjE2MTMxMjA4MDgsImVtYWlsIjoid2FuZzcwMzAwMzUxNUBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJnb29nbGUuY29tIjpbIjEwMDQzNTc0MDM3NTQ2NDA2NjAwMCJdLCJlbWFpbCI6WyJ3YW5nNzAzMDAzNTE1QGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6Imdvb2dsZS5jb20ifX0.eyW55XmOIekKvQ7KwYT3sI_E75OLhgOsmke4Fowe4pMhXDuDwVMHesChh4V3nyw373ue1M0Z6fuiHCbPA0ER3GdTri2D9YfjO-SDhoYA5UiCULnswLjwUHkMV5x0uUvXqufZ5E02r-30RM-knD0wwCd6N5HQY4tAppxFmdt5e2PMEXzHalzP__QcHJjNUkVQ1NYehgHlv0kDF1jom0MRnU-36sf1GfK8_YGYCBGfLX85iEp0EaCwk2o_Ut4nJHdmTNXl-MwmpWj6fl_PMlBnhrEv7ObCoAbwmsYGesVnPpNyIj9DkAAofQqFVSeCnQoL-fm6TkA1N_6cXudzz5usdg"; }
        #endregion
    }
}