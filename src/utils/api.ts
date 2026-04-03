export const API_BASE = "https://codesentinel-backend-rpop.onrender.com";
export const API_BASE_URL = API_BASE; // Keep for compatibility during transition

export const apiFetch = (endpoint: string, options: RequestInit = {}) => {
  return fetch(`${API_BASE}${endpoint}`, options);
};
