import { nanoid } from "nanoid";

export default {
  beforeCreate(event) {
    if (!event.params.data.uid) {
      event.params.data.uid = nanoid(12); // Generates a 12-char random string
    }
  },
};
