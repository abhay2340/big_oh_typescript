// function flattenObject(obj: any, prefix = '', result: Record<string, any> = {}): Record<string, any> {
//     for (const key in obj) {
//       if (Object.prototype.hasOwnProperty.call(obj, key)) {
//         const value = obj[key];
//         const newKey = prefix ? `${prefix}.${key}` : key;
//         if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
//           // Recursively flatten the nested object
//           flattenObject(value, newKey, result);
//         } else if (Array.isArray(value)) {
//           // Flatten arrays with their index
//           value.forEach((item, index) => {
//             flattenObject(item, `${newKey}.${index}`, result);
//           });
//         } else {
//           // Direct assignment for primitive values
//           result[newKey] = value;
//         }
//       }
//     }
//     return result;
//   }
//   // Example usage:
//   const data = {
//     user: {
//       id: 123,
//       name: "John Doe",
//       addresses: [
//         {
//           street: "123 Main St",
//           city: "Wonderland",
//           postalCode: 12345,
//         },
//         {
//           street: "456 Elm St",
//           city: "Oz",
//           postalCode: 67890,
//         },
//       ],
//       settings: {
//         theme: "dark",
//         notifications: {
//           email: true,
//           sms: false,
//         },
//       },
//     },
//   };
//   const flattenedData = flattenObject(data);
//   console.log(flattenedData);
// -------------------------Unflattening------------------------
function unflattenObject(flatObj) {
    var result = {};
    for (var flatKey in flatObj) {
        if (Object.prototype.hasOwnProperty.call(flatObj, flatKey)) {
            var value = flatObj[flatKey];
            var keys = flatKey.split('.');
            var current = result;
            // Traverse and create nested objects/arrays based on keys
            for (var i = 0; i < keys.length; i++) {
                var key = keys[i];
                var isArrayIndex = !isNaN(Number(key));
                var isLastKey = i === keys.length - 1;
                if (isLastKey) {
                    // Assign value on the last key
                    current[key] = value;
                }
                else {
                    if (!current[key]) {
                        // Create array or object as needed
                        current[key] = isArrayIndex ? [] : {};
                    }
                    current = current[key];
                }
            }
        }
    }
    return result;
}
var flattenedData = {
    "user.id": 123,
    "user.name": "John Doe",
    "user.addresses.0.street": "123 Main St",
    "user.addresses.0.city": "Wonderland",
    "user.addresses.0.postalCode": 12345,
    "user.addresses.1.street": "456 Elm St",
    "user.addresses.1.city": "Oz",
    "user.addresses.1.postalCode": 67890,
    "user.settings.theme": "dark",
    "user.settings.notifications.email": true,
    "user.settings.notifications.sms": false,
};
// Example usage:
var unflattenedData = unflattenObject(flattenedData);
console.log(unflattenedData);
