export const BASE_URL = "https://youtube-data16.p.rapidapi.com/";

export const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "463555d0c8msh850ee55ddfc0f2fp114d2fjsnae2e7694d456",
    "x-rapidapi-host": "youtube-data16.p.rapidapi.com",
  },
};

export const fetchData = async (url) => {
  try {
    const response = await fetch(`${BASE_URL}${url}`, options);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
