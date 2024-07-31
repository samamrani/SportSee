async function getAverageSessionsApi(userId) {
    const reponse = await fetch(`http://localhost:3000/user/${userId}/average-sessions`);
    return await reponse.json();  
  }
export default getAverageSessionsApi;