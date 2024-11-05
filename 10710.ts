// remove null or undefined and make optional properties required
// type DefinedProperties<T>={
//     [K in keyof T]-?: Exclude<T[K],null|undefined>;
// };
// interface Example {
//     age?: number;
//     name: string | null;
// }

// type DefinedExample = DefinedProperties<Example>;

// --------------For Nested--------------------

type DefinedProperties<T> = T extends infer U
  ? U extends object
    ? {
      // [K in keyof Required<U>]: DefinedProperties<Exclude<U[K], null | undefined>>;
        [K in keyof U]-?: DefinedProperties<NonNullable<U[K]>>;
      }
    : U
  : never;

interface NestedUser {
  age?: number;
  personalInfo?: {
    name: string | null;
    address?: {
      city: string | null;
      zip?: string;
    };
  };
}

type NestedDefineExample = DefinedProperties<NestedUser>;

//   ------------Notes----------------?

// Conditional Type Basics: The general structure of a conditional type in TypeScript is A extends B ? C : D. This means:

// If A is assignable to B, the type evaluates to C.
// If not, it evaluates to D.
// Using infer: When you see T extends infer U, you are telling TypeScript:

// Check if T can be assigned to some type.
// If it can, infer the type and refer to it as U in the true branch of the conditional type.
