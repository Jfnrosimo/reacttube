import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) return next(createError(401, "You are not authenticated!"));

  jwt.verify(token, process.env.JWT_SECRET_KEY, (error, user) => {
    if (error) return next(createError(401, "Token is not valid!"));
    req.user = user;
    next();
  });
};
