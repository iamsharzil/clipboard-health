// Keep constants out of the function to avoid creating memory space for these variables on each function execution
const TRIVIAL_PARTITION_KEY = "0";
const MAX_PARTITION_KEY_LENGTH = 256;
const HASH_ALGORITHM = "sha3-512";
const DIGEST_ENCODING = "hex";

module.exports = {
  TRIVIAL_PARTITION_KEY,
  MAX_PARTITION_KEY_LENGTH,
  HASH_ALGORITHM,
  DIGEST_ENCODING,
};
