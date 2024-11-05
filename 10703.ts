function mapObject<T extends Record<string, any>, U>(
    obj: T,
    callback: (value: T[keyof T]) => U
): { [K in keyof T]: U } {
    const result = {} as { [K in keyof T]: U }; // Type assertion for the result

    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            // Apply callback to each value and store in result with the same key
            result[key as keyof T] = callback(obj[key]);
        }
    }

    return result;
}

const originalObject = { a: 1, b: 2, c: 3 };
const mappedObject = mapObject(originalObject, (value) => value.toString());

console.log(mappedObject);  