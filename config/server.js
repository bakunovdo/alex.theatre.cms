module.exports = ({ env }) => {
  const host = env("HOST", "0.0.0.0");
  const port = env.int("PORT", 1337);

  return {
    host,
    port,
    app: {
      keys: env.array("APP_KEYS"),
    },
    // url: `http://${host}:${port}/cms/api`,
    webhooks: {
      populateRelations: env.bool("WEBHOOKS_POPULATE_RELATIONS", false),
    },
  };
};
