import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async (url) => {
  const {data} = await axios.get((url), {
    headers: {
      'X-RapidAPI-Key': '40f641208fmsh43b165f2325fcd4p196f60jsn402d696b3674',
      'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
    }
  });

  return data;
}