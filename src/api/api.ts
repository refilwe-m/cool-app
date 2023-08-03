export const getData = async () => {
  const response = await fetch(
    "https://restcountries.com/v3.1/name/south africa"
  );
  return await response.json();
};
