import { deleteAsync } from "del";

export const clear = async () => {
  return await deleteAsync([app.path.clean]);
};
