export default {
  port: parseInt(process.env.PORT) || 8080,
  nodeEnv: process.env.NODE_ENV || 'production',
  saltRounds: parseInt(process.env.SALT_ROUNDS) || 10,
  jwtAccessTokenSecret:
    process.env.JWT_ACCESS_TOKEN_SECRET ||
    '4a2d8b2cd23e2bc58099337e979d6295b8bbcca60fec25fcfd94c20b6f0334ab',
  jwtRefreshTokenSecret:
    process.env.JWT_REFRESH_TOKEN_SECRET ||
    '576637e120ad1c3f5e6a4b446c298653b7d32e55427aea2601a5ac95103252e7',
};
