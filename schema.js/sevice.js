import vine from "@vinejs/vine";

const service = vine.object({
  name: vine.string().minLength(1),
  vendor: vine.string().minLength(1),
  description: vine.string().minLength(1),
  price: vine.string().minLength(1),
});
export const vilidateService = vine.compile(service);
