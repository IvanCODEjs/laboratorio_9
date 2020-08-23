export const getActorsList = () => {
  return fetch("https://breakingbadapi.com/api/characters").then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      console.log(response.statusText);
    }
  });
};

export const getActor = (actorId) => {
  return fetch(`https://breakingbadapi.com/api/characters/${actorId}`).then(
    (response) => {
      if (response.ok) {
        return response.json();
      } else {
        console.log(response.statusText);
      }
    }
  );
};
