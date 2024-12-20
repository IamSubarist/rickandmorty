import axios from "axios";

/* 
  Вынести в отдельный файл конфига (config.ts).

  Так же добавить в файл с конфигом дефолтный метод для запросов.
*/
const RICK_AND_MORTY_API_URL = import.meta.env.VITE_API_BASE_URL;

const axiosInstance = axios.create({
  baseURL: RICK_AND_MORTY_API_URL,
});

// axiosInstance({
//   method: 'GET',
//   params: {
//     pagination: '1'
//   }
// })
// '..../api/characters?pagination=1'

// Будет в файле get-chatecter.ts.
export const getCharacters = async () => {
  try {
    /* 
    Выносится в отдельный файл с контсантами (constants.ts) наподобие CHARACTER_REQUEST_TARGET = '/character'
    */
    const response = await axiosInstance.get("/character");
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
