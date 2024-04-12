function uniqueDataTypeFunc<Type>(
    item: Type,
    defaultValue: Type
  ): [Type, Type] {
    return [item, defaultValue];
  }
  
  // Example usage
  const num = uniqueDataTypeFunc<number>(42, 0);
  console.log(num); // Outputs: [42, 0]
  
  const str = uniqueDataTypeFunc<string>("hello", "world");
  console.log(str); // Outputs: ['hello', 'world']
  
  // Example usage with a custom type
  interface Dog {
    name: string;
    breed: string;
  }
  
  const dogPair = uniqueDataTypeFunc<Dog>(
    { name: "Buddy", breed: "Labrador" },
    { name: "Default", breed: "Unknown" }
  );
  
  console.log(dogPair);