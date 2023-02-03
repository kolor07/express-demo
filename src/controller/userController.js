import * as userService from "../services/userService.js";

export const getUser = (req, res) => {
  const result = userService.getUser();
  return res.json(result);
};
