import axios from "axios";

export const fetchQuestions = async (amount = 10, difficulty = "easy") => {
  try {
    const response = await axios.get(
      `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`
    );

    if (!response.data.results || !Array.isArray(response.data.results)) {
      throw new Error("Invalid data format");
    }

    // console.log(response.data.results);
    return response.data.results;
  } catch (error) {
    console.error("Error fetching trivia questions:", error);
    return [];
  }
};
