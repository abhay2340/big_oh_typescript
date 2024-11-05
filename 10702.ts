type NestedObject = { [key: string]: any };

// Type to extract nested property types based on a string path
type DeepPath<T, K> = 
  K extends `${infer Key}.${infer Rest}` ? Key extends keyof T ? DeepPath<T[Key], Rest> : never :
  K extends keyof T ? T[K] :
  never;

// Function to access deep properties based on a string path
function deepGet<T extends NestedObject, K extends string>(
  obj: T,
  path: K
): DeepPath<T, K> | undefined {
  const keys = path.split('.') as Array<keyof any>;
  let result: any= obj;
  for (const key of keys) {
    if (result[key] === undefined) return undefined;
    result = result[key];
  }
  return result;
}

const obj = {
  foo: {
    bar: {
      baz: 42,
    },
    list: [1, 2, { value: "test" }],
  },
};

const value = deepGet(obj, 'foo.bar.baz'); 
console.log(value); 

const invalidValue = deepGet(obj, 'foo.nonExistent.key'); 
