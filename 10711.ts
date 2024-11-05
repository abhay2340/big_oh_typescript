type TransformKeys<T, M extends { [K in keyof T]?: string }> = {
// K extends keyof M -> Checks if the key K exists in M.
// M[K] extends string ->If K exists in M, it further checks if M[K] is a valid string.
// M[K]:-> If both conditions are true, M[K] (the mapped key) is used as the new key name.
// K: If the conditions are false (i.e., K is not in M or M[K] is not a string), it defaults to the original key K.
    [K in keyof T as K extends keyof M ? (M[K] extends string ? M[K] : K) : K]: T[K]
};

function transformKeys<T, M extends { [K in keyof T]?: string }>(
    obj: T,
    mappings: M
): TransformKeys<T, M> {
    const result: any = {};
    for (const key in obj) {
        const newKey = mappings[key as keyof M] || key;
        result[newKey] = obj[key];
    }
    return result;
}

// Example usage:
const user = {
    firstName: "Tony",
    lastName: "Stark",
    age: 54
};

const transformedUser = transformKeys(user, { firstName: 'first', lastName: 'last' });
