type NullableProperties<T> = T extends infer U
  ? U extends object
    ? {
        [K in keyof U]: NullableProperties<U[K]> | null
      }
    : U|null
  : never;

  
interface User {
    age: number;
    name: string;
}

type NullableExample = NullableProperties<User>;

interface NestedUser {
    age?: number; 
    personalInfo?: { 
        name: string; 
        address: {
            city: string ; 
        }; 
    }; 
}

type NullableNestedExample = NullableProperties<NestedUser>;

