export async function API({ method = 'GET', isJson = false, body, endpoint }) {
  try {
    const headers = {
      ...(isJson && { 'Content-Type': 'application/json' })
    };
    const options = {
      method: method,
      headers,
      body: isJson ? JSON.stringify(body) : body,
      credentials: 'include'
    };

    await new Promise((resolve) => setTimeout(resolve, 5000));

    const response = await fetch(`${import.meta.env.VITE_BASE_URL}/${endpoint}`, options);
    const data = await response.json();

    if (!response.ok) {
      throw data.message;
    }
    return data;
  } catch (error) {
    throw error;
  }
}
