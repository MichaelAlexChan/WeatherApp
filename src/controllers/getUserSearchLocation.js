// Gets the user input value
export default function getUserSearchLocation() {
  const searchValue = document.querySelector('input').value;
  console.log(`You have entered: ${searchValue}`);
  return searchValue;
}
