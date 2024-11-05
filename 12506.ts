function replaceKeysAndConvertStrings<T>(data: T): T {
  if (typeof data === "string") {
    return data.toUpperCase() as T;
  }

  if (Array.isArray(data)) {
    return data.map(item => replaceKeysAndConvertStrings(item)) as T;
  }

  if (typeof data === "object" && data !== null) {
    const result: any = {};
    for (const key in data) {
      if (Object.prototype.hasOwnProperty.call(data, key)) {
        // Replace all instances of "id" in the key with "identifier"
        const newKey = key.replace(/id/g, "identifier");
        result[newKey] = replaceKeysAndConvertStrings((data as any)[key]);
      }
    }
    return result as T;
  }

  return data;
}

// Example usage
const data = {
  userId: "john_doe",
  details: {
    addressId: "abc123",
    name: "John",
    attributes: {
      itemId: "xyz456",
      info: "Some info here",
    },
  },
  items: [
    {
      productId: "p123",
      description: "a product",
    },
    "just a string",
  ],
};

const updatedData = replaceKeysAndConvertStrings(data);
console.log(updatedData);
