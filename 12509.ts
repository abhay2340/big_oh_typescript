type User = { id: number; [key: string]: any };
type RelatedData = { userId: number; [key: string]: any };

// Generic function to merge user data with related data
function mergeUserData<U extends User, R extends RelatedData>(
  users: U[],
  relatedData: R[],
  key: string
): Array<U & { [K in typeof key]: R[] }> {
  return users.map((user) => {
    // Filter related data items where userId matches user id
    const userRelatedData = relatedData.filter((item) => item.userId === user.id);
    return {
      ...user,
      [key]: userRelatedData,
    } as U & { [K in typeof key]: R[] };
  });
}

// Example usage:
const users = [
  { id: 1, name: "John Doe", email: "john@example.com" },
  { id: 2, name: "Jane Smith", email: "jane@example.com" },
  { id: 3, name: "Jim Brown", email: "jim@example.com" },
];

const purchases = [
  { userId: 1, item: "Laptop", price: 1200 },
  { userId: 2, item: "Phone", price: 800 },
  { userId: 1, item: "Mouse", price: 20 },
  { userId: 3, item: "Keyboard", price: 100 },
  { userId: 2, item: "Monitor", price: 200 },
];

const userReviews = [
  { userId: 1, review: "Not good", star: 1200 },
  { userId: 2, review: "Bad", star: 800 },
  { userId: 1, review: "Average", star: 20 },
  { userId: 3, review: "Excellent", star: 100 },
  { userId: 2, review: "Poor", star: 200 },
];

// Merging purchases with users
const mergedDataWithPurchases = mergeUserData(users, purchases, "purchases");

// Merging reviews with users
const mergedDataWithReviews = mergeUserData(users, userReviews, "reviews");

console.log("Merged with Purchases:", mergedDataWithPurchases);
console.log("Merged with Reviews:", mergedDataWithReviews);
