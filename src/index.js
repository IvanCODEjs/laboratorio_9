import "./styles.css";
import { getActorsList, getActor } from "./data-business";
import { createCharacterRow, showCharacter } from "./utils.js";

getActorsList().then((actors) => {
  const actorsNodes = [];
  for (const actor of actors) {
    const actorhtml = createCharacterRow(actor);
    actorsNodes.push(actorhtml);
  }
  for (const node of actorsNodes) {
    document.getElementById("root").append(node);
  }

  const divActors = document.getElementsByName("actor");

  for (const actorDiv of divActors) {
    actorDiv.childNodes[0].addEventListener(
      "click",
      function (e) {
        const divParentElement = e.target.parentElement;
        console.log(divParentElement.id);
        getActor(divParentElement.id).then((actorInfo) => {
          showCharacter(actorInfo[0]);
        });
      },
      false
    );
  }
});
