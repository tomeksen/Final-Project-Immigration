export const BASEURL = process.env.NEXT_PUBLIC_BACKEND_URL + "/api";

/**
 * Sends a fetch request to a specified API endpoint.
 *
 * @param {string} endpoint - The API endpoint to call (e.g., "users", "posts/1").
 * @param {RequestInit} [options={}] - Additional options for the fetch request, such as method, headers, and body.
 * @param {string} token - The token from clerk using useAuth and getToken
 * @returns {Promise<any>} - A promise that resolves to the JSON response from the API.
 * @throws {Error} - Throws an error if the response status is not ok.
 */
export const apiClientFetch = async (
  endpoint: string,
  token: string,
  options: RequestInit = {}
) => {
  const baseURL = BASEURL || "http://localhost:3000";

  const { headers, ...restOptions } = options;
  const response = await fetch(`${baseURL}/${endpoint}`, {
    ...restOptions,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
      ...headers,
    },
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
};
