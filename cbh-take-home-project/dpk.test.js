const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });
});

describe("deterministicPartitionKey", () => {
  it("Returns the literal '1' when given a partition key of type string with value 1", () => {
    const trivialKey = deterministicPartitionKey({partitionKey: "1"});
    expect(trivialKey).toBe("1");
  });
});

describe("deterministicPartitionKey", () => {
  it("Returns the literal '1' when given a partition key of type string with value a", () => {
    const trivialKey = deterministicPartitionKey({partitionKey: "a"});
    expect(trivialKey).toBe("a");
  });
});

describe("deterministicPartitionKey", () => {
  it("Returns the literal '1' when given a partition key of type int with value 1", () => {
    const trivialKey = deterministicPartitionKey({partitionKey: 1});
    expect(trivialKey).toBe("1");
  });
});

describe("deterministicPartitionKey", () => {
  it("Returns the expected hash when no partition key is provided and the event is the string a", () => {
    const trivialKey = deterministicPartitionKey("a");
    expect(trivialKey).toBe("c324156fcca3e7cb5ac7b8cd4fec155b24274972ef0bb77a34cedbf8de7d3317cf1126cc8c3924e3fb19b058a37d2bf2cd2e6563873e87de55010d3a13f76f51");
  });
});

describe("deterministicPartitionKey", () => {
  it("Returns the expected hash when no partition key is provided and the event is the int 1", () => {
    const trivialKey = deterministicPartitionKey(1);
    expect(trivialKey).toBe("ca2c70bc13298c5109ee0cb342d014906e6365249005fd4beee6f01aee44edb531231e98b50bf6810de6cf687882b09320fdd5f6375d1f2debd966fbf8d03efa");
  });
});

describe("deterministicPartitionKey", () => {
  it("Returns the expected hash when no partition key is provided and the event is the float 1.0", () => {
    const trivialKey = deterministicPartitionKey(1.0);
    expect(trivialKey).toBe("ca2c70bc13298c5109ee0cb342d014906e6365249005fd4beee6f01aee44edb531231e98b50bf6810de6cf687882b09320fdd5f6375d1f2debd966fbf8d03efa");
  });
});

describe("deterministicPartitionKey", () => {
  it("Returns the expected hash when partition key has a lenght of greated than 256", () => {
    const trivialKey = deterministicPartitionKey({partitionKey: "ca2c70bc13298c5109ee0cb342d014906e6365249005fd4beee6f01aee44edb531231e98b50bf6810de6cf687882b09320fdd5f6375d1f2debd966fbf8d03efaca2c70bc13298c5109ee0cb342d014906e6365249005fd4beee6f01aee44edb531231e98b50bf6810de6cf687882b09320fdd5f6375d1f2debd966fbf8d03efaaa"});
    expect(trivialKey).toBe("c468c4d7c39c87e87bb54c8d071980cf2be27ffbfe24d9ed77a289a76de2aeba4f8fb733d5d6eb0bc5e0cfe3859f8b9177d2ba74f7bdaa6469923feef96f5a0f");
  });
});




