const crypto = require("crypto");
const { HASH_ALGORITHM, DIGEST_ENCODING } = require("../constants");

const generateHash = (
  data = "",
  options = { algorithm: HASH_ALGORITHM, encoding: DIGEST_ENCODING }
) => {
  if (typeof data !== "string") data = JSON.stringify(data);

  if (typeof options !== "object" || options === null) {
    options = { algorithm: HASH_ALGORITHM, encoding: DIGEST_ENCODING };
  }

  const { algorithm, encoding } = options;
  return crypto.createHash(algorithm).update(data).digest(encoding);
};

module.exports = {
  generateHash,
};
