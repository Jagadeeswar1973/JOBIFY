// import { UnauthenticatedError } from "../errors/customErrors.js";
// import { verifyJWT } from "../utils/tokenUtils.js";

// export const authenticatedUser = (req, res, next) => {
//   const { token } = req.cookies;
//   if (!token) throw new UnauthenticatedError("authentication invalid");
//   try {
//     const { userId, role } = verifyJWT(token);
//     req.user = { userId, role };
//     next();
//   } catch (error) {
//     throw new UnauthenticatedError("authentication invalid");
//   }
// };

import {
  UnauthenticatedError,
  BadRequestError,
  UnauthorizedError,
} from "../errors/customErrors.js";
import { verifyJWT } from "../utils/tokenUtils.js";

export const authenticatedUser = (req, res, next) => {
  const { token } = req.cookies;
  console.log("Token received:", token);

  if (!token) {
    console.log("No token found in cookies.");
    throw new UnauthenticatedError("authentication invalid");
  }

  try {
    const { userId, role } = verifyJWT(token);
    const testUser = userId === "66764eeaebb00b2c8a8af75b";
    req.user = { userId, role, testUser };
    next();
  } catch (error) {
    console.log("Error verifying token:", error.message);
    throw new UnauthenticatedError("authentication invalid");
  }
};
export const authorizePermissions = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      throw new UnauthorizedError("Unauthorized to access this route");
    }
    next();
  };
};
export const checkForTestUser = (req, res, next) => {
  if (req.user.testUser) {
    throw new BadRequestError("Demo User. Read Only!");
  }
  next();
};
