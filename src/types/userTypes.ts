import { users } from "@prisma/client";

type userType = Omit<users, "id">;

export { userType };
