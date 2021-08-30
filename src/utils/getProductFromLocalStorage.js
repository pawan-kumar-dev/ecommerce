export const getProductFromLocalStorage = (path, type) => {
  const isExist = localStorage.getItem(path);
  if (isExist) {
    return JSON.parse(localStorage.getItem(path));
  }
  return type === "count" ? 0 : [];
};
