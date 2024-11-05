function updateObject<T, K extends keyof T>(obj: T, key: K, value: T[K]): T {
    return {
        ...obj,
        [key]: value, // Update the specific key with the new value
    };
}

const obj = { a: 1, b: 'hello', c: true };
const updated = updateObject(obj, 'b', 'world');

console.log(updated); 
