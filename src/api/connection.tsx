import axios from 'axios';

const API_ENDPOINT = 'https://opentdb.com/api.php?amount=10&type=multiple';

export const fetchQuestions = async () => {
  const response = await axios.get(API_ENDPOINT);
  return response.data;
};