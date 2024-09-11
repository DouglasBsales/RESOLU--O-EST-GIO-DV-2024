export const infoAnimais = [
  {
    espécie: "LEAO",
    tamanho: 3,
    bioma: "savana",
    coHabitantes: "leao",
  },
  {
    espécie: "LEOPARDO",
    tamanho: 2,
    bioma: "savana",
    coHabitantes: "leopardo",
  },
  {
    espécie: "CROCODILO",
    tamanho: 3,
    bioma: "rio",
    coHabitantes: "crocodilo",
  },
  {
    espécie: "MACACO",
    tamanho: 1,
    bioma: {
      bioma1: "savana",
      bioma2: "floresta",
    },
    coHabitantes: {
      coHabitante1: "gazela",
      coHabitante2: "hipopotamo",
    } 
  },
  {
    espécie: "GAZELA",
    tamanho: 2,
    bioma: "savana",
    coHabitantes: {
      coHabitante1: "macaco",
      coHabitante2: "hipopotamo",
    } 
  },
  {
    espécie: "HIPOPOTAMO",
    tamanho: 4,
    bioma: {
      bioma1: "savana",
      bioma2: "rio",
    },
    coHabitantes: {
      coHabitante1: "macaco",
      coHabitante2: "gazela",
    } 
  },
];
