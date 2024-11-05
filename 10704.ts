type Reverse<T extends any[]> = T extends [infer First, ...infer Rest] 
    ? [...Reverse<Rest>, First]
    : [];

    const arr: [number, string, boolean] = [42, 'hello', true];

    type ReversedTuple = Reverse<typeof arr>; 
    