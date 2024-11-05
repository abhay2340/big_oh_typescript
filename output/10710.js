// remove null or undefined and make optional properties required
// type DefinedProperties<T>={
//     [K in keyof T]-?: Exclude<T[K],null|undefined>;
// };
// interface Example {
//     age?: number;
//     name: string | null;
// }
