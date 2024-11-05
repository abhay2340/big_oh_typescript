// Recursive generic type to transform the keys of an object
type TransformObject<T, Prefix extends string> = {
    [K in keyof T as `${Prefix}${string & K}`]: T[K] extends object
      ? TransformObject<T[K], Prefix>  // Recursive call for nested objects
      : T[K];
  };
  
  type MyObject = {
    a: {
      b: number;
      c: {
        d: string;
      };
    };
    e: boolean;
  };
  
  type Transformed = TransformObject<MyObject, 'prefixed_'>;
  