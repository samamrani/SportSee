async function getAverageSessionsApi(userId) {
    const response = await fetch(`http://localhost:3000/user/${userId}/average-sessions`);
    if (!response.ok) {
      throw new Error('Failed to fetch aaverage-sessions data');
    }
    const data = await response.json();
    return data.data.sessions; 
  }
  
export default getAverageSessionsApi;