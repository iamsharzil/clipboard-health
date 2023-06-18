const {
  TRIVIAL_PARTITION_KEY,
  MAX_PARTITION_KEY_LENGTH,
} = require("./constants");

const { generateHash } = require("./utils/generate-hash");

exports.deterministicPartitionKey = (event) => {
  if (!event) return TRIVIAL_PARTITION_KEY;

  let candidate = event?.partitionKey || generateHash(event);

  if (typeof candidate !== "string") candidate = JSON.stringify(candidate);

  if (candidate.length > MAX_PARTITION_KEY_LENGTH)
    candidate = generateHash(candidate);

  return candidate;
};
