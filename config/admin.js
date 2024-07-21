module.exports = ({ env }) => {
  const host = env("HOST", "0.0.0.0");
  const port = env.int("PORT", 1337);

  return {
    auth: {
      secret: env("ADMIN_JWT_SECRET"),
    },
    apiToken: {
      salt: env("API_TOKEN_SALT"),
    },
    transfer: {
      token: {
        salt: env("TRANSFER_TOKEN_SALT"),
      },
    },
    // url: `http://${host}:${port}/cms/admin`,
    flags: {
      nps: env.bool("FLAG_NPS", true),
      promoteEE: env.bool("FLAG_PROMOTE_EE", true),
    },
  };
};
