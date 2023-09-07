// apiService.js
import apiEndpoints from "../../constants/apiEndpoints";

const apiService = {
  fetchData: async () => {
    try {
      const response = await fetch(apiEndpoints.FETCH_DATA);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    } catch (error) {
      throw error;
    }
  },
};

export default apiService;
