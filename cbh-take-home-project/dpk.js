const crypto = require("crypto");

exports.deterministicPartitionKey = (event) => {
  const TRIVIAL_PARTITION_KEY = "0";
  const MAX_PARTITION_KEY_LENGTH = 256;
  let candidate = TRIVIAL_PARTITION_KEY;

  if (event) {
    if (event.partitionKey) {
      candidate = event.partitionKey;
    } 
    else {
      const data = JSON.stringify(event);
      candidate = crypto.createHash("sha3-512").update(data).digest("hex");
    }

    if (typeof candidate !== "string") {
      candidate = JSON.stringify(candidate);
    }

    if (candidate.length > MAX_PARTITION_KEY_LENGTH) {
      candidate = crypto.createHash("sha3-512").update(candidate).digest("hex");
    }
  }

  return candidate;
};

// I have refactored the above code by removing a few redundant if..else statements. In the original code and in the first if statement block, we can see that the 
// candidate attribute is getting assigned a value, which accounts for the if block of the next set of if..else statements. 
// We can elimiate the else block of this if..else statement by simply assisgning the TRIVIAL_PARTITION_KEY as the default value of the candidate. If the event exisits,
// it's value gets overwritten. Lastly, we can also incorporate the final if statement into the if block, because we know for a fact that the default value of (0) < 256.
// Since the value of the candidate is only getting modified by the first if block, we can simply place it within the first block itself.

// This also makes our code more readable, as there is there just one if block, instead of 3 in the original code. It is also easy to follow along how the candidate value keeps 
// getting updated in the following lines of code and it is then simply returned. If there is a null input, it is also easy to infer that the function would simply return the 
// default value of the candidate, which is the TRIVIAL_PARTITION_KEY (0) in this case. 