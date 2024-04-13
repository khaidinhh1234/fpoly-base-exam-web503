import vine from "@vinejs/vine";

const register = vine.object({
  email: vine.string().email().minLength(1),
  password: vine.string().minLength(1).confirmed(),
  password_confirmation: vine.string().minLength(1),
});
export const vilidateregister = vine.compile(register);
const login = vine.object({
  email: vine.string().minLength(1),
  password: vine.string().minLength(1),
});
export const vilidatelogin = vine.compile(login);
