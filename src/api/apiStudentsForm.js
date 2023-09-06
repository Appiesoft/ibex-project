// api.js

const API_BASE_URL = "https://64f179f10e1e60602d23d2e4.mockapi.io/ibex"; // Your API base URL

// Define your API endpoints
export const endpoints = {
  students: `${API_BASE_URL}/students`,
  // Add more endpoints as needed
};

// Define your API functions
export const api = {
  get: async (url) => {
    try {
      const response = await fetch(url);
      console.log(response)
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    } catch (error) {
      console.log(error)
      throw error;
    
    }
  },
  post: async (url, data) => {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    } catch (error) {
      console.log(error)
      throw error;
    }
  },
  
  delete: async (url) => {
    try {
      const response = await fetch(url, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    } catch (error) {
      console.log(error);
      throw error;
    }
  },

  // Add more HTTP methods (e.g., put, delete) as needed
};
