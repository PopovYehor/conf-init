import axios from "axios";

export const getApiData = (
  valueToBeUpdated: (data: any) => void,
  apiUrl: string
) => {
  const fetchData = async () => {
    try {
      const response = await axios.get(apiUrl);
      valueToBeUpdated(response.data);
    } catch (error) {
      console.error("Помилка при отриманні даних з API:", error);
    }
  };
  fetchData();
};
