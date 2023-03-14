// Gets the user input value
export default function getUserSearchLocation() {
  const searchInput = document.querySelector('input');
  const searchValue = document.querySelector('input').value;
  searchInput.value = '';
  return searchValue;
}
