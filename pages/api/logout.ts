import cookie from "cookie";

export default async function logout(req, res) {
    res.setHeader(
        "Set-Cookie",
        cookie.serialize("accessToken", "", {
          httpOnly: true,
          secure: true,
          expires: new Date(0),
          sameSite: "none",
          path: "/",
        })
      )
  res.statusCode = 200;
  res.json({loggout: true})
}
