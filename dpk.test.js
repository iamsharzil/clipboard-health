const { TRIVIAL_PARTITION_KEY } = require("./constants");
const { deterministicPartitionKey } = require("./dpk");
const { generateHash } = require("./utils/generate-hash");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    const expected = TRIVIAL_PARTITION_KEY;
    expect(trivialKey).toBe(expected);
  });

  it("should return the partitionKey if it exists in the event", () => {
    const event = {
      partitionKey: "abc123",
    };
    const expected = "abc123";
    const result = deterministicPartitionKey(event);
    expect(result).toBe(expected);
  });

  it("should generate a partitionKey hash if partitionKey is missing in the event", () => {
    const event = {
      data: "xyz456",
    };
    const expected = generateHash(event);
    const result = deterministicPartitionKey(event);
    expect(result).toBe(expected);
  });

  it("should handle candidate as non-string and generate a string representation", () => {
    const event = {
      partitionKey: 123,
    };
    const expected = "123";
    const result = deterministicPartitionKey(event);
    expect(result).toBe(expected);

    const event2 = 123;
    const expected2 = generateHash(event2);
    const result2 = deterministicPartitionKey(event2);
    expect(result2).toBe(expected2);
  });

  it("should truncate the candidate if it exceeds the maximum length", () => {
    const event = "veryLongPartitionKey".repeat(20);
    const expected = generateHash(event);
    const result = deterministicPartitionKey({ partitionKey: event });
    expect(result).toBe(expected);
  });
});
