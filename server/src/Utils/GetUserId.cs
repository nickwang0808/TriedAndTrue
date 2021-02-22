using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using Microsoft.AspNetCore.Http;

namespace server.Utils
{
    public static class ParseUserId
    {
        public static string GetUserId(IHeaderDictionary header)
        {
            header.TryGetValue("authorization", out var token);
            var jwtEncodedString = token.ToString().Substring(7);
            // parse the token and return the user id
            var decodedToken = new JwtSecurityTokenHandler().ReadJwtToken(jwtEncodedString);
            string userId = decodedToken.Claims.First(c => c.Type == "user_id").Value;
            return userId;
        }

    }
}