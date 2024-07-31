async function getActivityApi(userId) {
    const reponse = await fetch(`http://localhost:3000/user/${userId}/activity`);
    return await reponse.json();  
  }
  export default getActivityApi;