const API_KEY = '6c1c3476170c45449b26a972797cff34';
const TOP_HEADLINES_URL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`

export const fetchNews = async () => {
  const res = await fetch(TOP_HEADLINES_URL);
  return res.json();
}