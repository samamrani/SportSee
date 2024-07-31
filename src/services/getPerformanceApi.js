async function getPerformanceApi(userId) {
    const reponse = await fetch(`http://localhost:3000/user/${userId}/performance`);
    return await reponse.json();  
  }

export default getPerformanceApi;