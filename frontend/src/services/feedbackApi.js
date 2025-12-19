import API from "./api";

export const submitFeedback = (feedbackData) => {
  return API.post("/feedback", feedbackData);
};
