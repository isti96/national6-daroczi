export function updateLocalStorage(index, active) {
  localStorage.setItem("index", index);
  localStorage.setItem("breed", active);
}