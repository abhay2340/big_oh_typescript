type ApiResponse<T extends { id: number; name: string } = { id: number; name: string }> = {
    data: T;              
    status?: number;      
  };
  
  // using default values
  const defaultResponse: ApiResponse = {
    data: { id: 1, name: "Default Item" }, 
    status: 200,
  };
  
  //  Using a custom type that satisfies the constraint
  type User = {
    id: number;
    name: string;
    email: string;        
  };
  
  const userResponse: ApiResponse<User> = {
    data: { id: 2, name: "Abhay", email: "abhay@example.com" },
  };
  
  console.log(defaultResponse); 
  console.log(userResponse);    
  






















//   --------------------2nd----------------------------------

// Define a generic function where K depends on T
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
  }
  
  // Define an object type
  type Car = {
    make: string;
    model: string;
    year: number;
  };
  
  const myCar: Car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020,
  };
  
  // Use the getProperty function
  const carMake = getProperty(myCar, "make"); // inferred as string
  const carYear = getProperty(myCar, "year"); // inferred as number
  
  console.log(carMake); // Output: Toyota
  console.log(carYear); // Output: 2020
  