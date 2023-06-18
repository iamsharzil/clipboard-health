const { deterministicPartitionKey } = require("./dpk");

console.log(deterministicPartitionKey());

console.log(
  deterministicPartitionKey({
    partitionKey: "abc123",
  })
);

console.log(
  deterministicPartitionKey({
    data: "xyz456",
  })
);

console.log(
  deterministicPartitionKey({
    partitionKey: 123,
  })
);

console.log(
  deterministicPartitionKey({
    partitionKey: "veryLongPartitionKey".repeat(20),
  })
);
