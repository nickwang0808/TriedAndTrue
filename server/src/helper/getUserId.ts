import jwt from "jsonwebtoken";

export default function getUserId(auth: string) {
  if (!auth) {
    throw new Error("no auth token found");
  }
  const token = auth.replace("Bearer ", "");
  const { user_id } = jwt.decode(token);
  return user_id;
}
