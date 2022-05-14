const API_URL = "https://jsonplaceholder.typicode.com";

export const API_URLS = {
  USERS: {
    INDEX: `${API_URL}/users`,
    SHOW: (id: number) => `${API_URL}/users/${id}`,
  },
} as const;
