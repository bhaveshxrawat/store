export function getItem<T>(key: string, defaultItem: T): T {
  let data;
  const storedItem = localStorage.getItem(key);
  if (storedItem) {
    if (typeof storedItem === "string") {
      data = storedItem;
    } else {
      data = JSON.parse(storedItem);
    }
    return data;
  } else {
    return defaultItem;
  }
}
export function setItem<T>(key: string, value: T) {
  try {
    if (!key || !value) throw new Error("Specify the values");

    if (typeof value === "string") {
      localStorage.setItem(key, value);
    } else {
      localStorage.setItem(key, JSON.stringify(value));
    }
  } catch (error) {
    throw new Error((error as Error).message);
  }
}
