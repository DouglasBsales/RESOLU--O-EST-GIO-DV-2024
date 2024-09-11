import { infoRecinto } from "./infoRecinto.js";
import { infoAnimais } from "./infoAnimais.js";

class RecintosZoo {
  analisaRecintos(animal, quantidade) {
    const verifyAnimal = infoAnimais.filter(
      (animais) => animais.espécie === animal
    );

    if (verifyAnimal.length === 0) {
      return { erro: "Animal inválido"};
    }

    if (quantidade === 0) {
      return { erro: "Quantidade inválida"};
    }

    const validateTamanho = verifyAnimal[0].tamanho * quantidade;

    const verifyBioma = infoRecinto.filter((recinto) => {
      if (animal === "MACACO" || animal === "GAZELA") {
        return (
          (recinto.bioma.includes(verifyAnimal[0].bioma.bioma1) || 
            recinto.bioma.includes(verifyAnimal[0].bioma.bioma2)) && 
          (recinto.animaisExistentes.includes(
            verifyAnimal[0].coHabitantes.coHabitante1
          ) || 
            recinto.animaisExistentes.includes(
              verifyAnimal[0].coHabitantes.coHabitante2
            ) || 
            recinto.animaisExistentes.includes(
              verifyAnimal[0].espécie.toLowerCase()
            ) || 
            recinto.animaisExistentes.includes("vazio")) 
        );
      } else if (animal === "HIPOPOTAMO") {
        return (
          (recinto.bioma.includes(verifyAnimal[0].bioma.bioma1) || 
            recinto.bioma.includes(verifyAnimal[0].bioma.bioma2)) &&
          (recinto.animaisExistentes.includes(
            verifyAnimal[0].coHabitantes.coHabitante2
          ) || 
            recinto.animaisExistentes.includes(
              verifyAnimal[0].espécie.toLowerCase()
            ) || 
            recinto.animaisExistentes.includes("vazio")) 
        );
      } else {
        return (
          recinto.bioma.includes(verifyAnimal[0].bioma) &&
          (recinto.animaisExistentes.includes(verifyAnimal[0].coHabitantes) ||
            recinto.animaisExistentes.includes("vazio"))
        );
      }
    });

    const tamanhoRecinto = verifyBioma.filter((recinto) => {
      const espaçoLivreRecinto = recinto.tamanhoTotal - recinto.espaçoOcupado;

      if (animal === "MACACO" && recinto.animaisExistentes.includes("vazio") && quantidade <= 1) {
        return;
      }      
      return espaçoLivreRecinto >= validateTamanho;
    });

    if (tamanhoRecinto.length === 0) {
      return { erro: "Não há recinto viável"};
    }

    const resultRecintos = tamanhoRecinto.map((recinto) => {
      let tamanhoDisp = recinto.tamanhoTotal - recinto.espaçoOcupado - validateTamanho;

      if (
        (recinto.animaisExistentes.includes(
          verifyAnimal[0].coHabitantes.coHabitante1
        ) ||
        recinto.animaisExistentes.includes(
          verifyAnimal[0].coHabitantes.coHabitante2
        ))
      ) {
        tamanhoDisp -= 1; 
      }

      if(tamanhoDisp < 0){
        return null;
      }

      return `Recinto ${recinto.number} (espaço livre: ${tamanhoDisp} total: ${recinto.tamanhoTotal})`;
    })

    return { recintosViaveis: resultRecintos };
  }
}

export { RecintosZoo as RecintosZoo };


