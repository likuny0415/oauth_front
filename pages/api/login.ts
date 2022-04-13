import UserApi from "../../lib/api/user";
import cookie from "cookie";

export default async function handler(req, res) {
  try {
    const result = await UserApi.login(req.body);
    if (result) {
      const token = result.jwt;
      res.setHeader(
        "Set-Cookie",
        cookie.serialize("accessToken", token, {
          httpOnly: true,
          secure: process.env.NODE_ENV !== "development",
          maxAge: 60 * 60,
          sameSite: "strict",
          path: "/",
        })
      );
      res.json({ isLoggedIn: true });
    } else {
      res.json({ isLoggedIn: false})
    }
  } catch (error) {
    return error;
  }
}
