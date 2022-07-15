// Deep merge fields from two objects and return a new object.
// The first object is the base object and the second object is the
// object to merge into the base object.
export const deepMergeObject = (obj1: any, obj2: any): any => {
  const result = { ...obj1 };
  for (const key in obj2) {
    if (obj2.hasOwnProperty(key)) {
      if (typeof obj2[key] === "object") {
        result[key] = deepMergeObject(result[key], obj2[key]);
      } else {
        result[key] = obj2[key];
      }
    }
  }
  return result;
};
