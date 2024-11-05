function updateValuesWithPrefix<T>(obj: T, prefix: string): T {
  if (typeof obj === "string") {
    // If the value is a string, add the prefix and return it
    return (prefix + obj) as T;
  }

  if (Array.isArray(obj)) {
    // If the value is an array, recursively apply the function to each element
    return obj.map((item) => updateValuesWithPrefix(item, prefix)) as T;
  }

  if (typeof obj === "object" && obj !== null) {
    // If the value is an object, create a new object with prefixed string values
    const result: any = {};
    for (const [key, value] of Object.entries(obj)) {
      result[key] = updateValuesWithPrefix(value, prefix);
    }
    return result as T;
  }

  // For other types (number, boolean, etc.), return the value as is
  return obj;
}

// Example usage:
const obj = {
  name: "Alice",
  age: 30,
  address: {
    city: "Wonderland",
    zip: 12345,
    location: {
      country: "Fantasy",
    },
  },
  isActive: true,
};

const updatedObj = updateValuesWithPrefix(obj, "Hello, ");
console.log(updatedObj);

