type Config = {
    url: string;
    retries: number;
    timeout: number;
  };
  
  const myConfig = {
    url: "api.example.com",
    retries: 3,
    timeout: 5000,
  } satisfies Config;
  
// ----------------as-------------------


  const value: unknown = "Hello, TypeScript!";
const stringValue = value as string; // Telling TypeScript to treat `value` as a string
console.log(stringValue.toUpperCase()); // Now safe to call string methods
