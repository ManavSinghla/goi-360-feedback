import API from "./api";

export const getSentiment = () => API.get("/analytics/sentiment");
export const getRegionStats = () => API.get("/analytics/region");
export const getCategoryStats = () => API.get("/analytics/category");
export const getRecentFeedback = () => API.get("/analytics/recent");
