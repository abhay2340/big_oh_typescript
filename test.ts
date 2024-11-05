// Utility type to extract keys of a specific type
type ExtractKeys<T, U> = {
    [K in keyof T]: T[K] extends U ? K : never
};

// Example object type
type Person = {
    name: string;
    age: number;
    isEmployed: boolean;
    birthDate: Date | null;
};

// Extract keys of type number
type NumberKeys = ExtractKeys<Person, number>; // 'age'

// Extract keys of type string
type StringKeys = ExtractKeys<Person, string>; // 'name'

// Extract keys of type Date
type DateKeys = ExtractKeys<Person, Date>; // birthDate
