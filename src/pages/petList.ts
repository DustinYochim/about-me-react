import { PetType } from "../types/PetType";

import fionaImgPath from "../images/fiona.jpeg";
import oscarImgPath from "../images/oscar.jpeg";
import romeoImgPath from "../images/romeo.jpeg";

export const petList: PetType[] = [
  {
    name: "Oscar",
    description: "8 Year Old Bombay Cat",
    imgSrc: oscarImgPath,
  },
  {
    name: "Fiona",
    description: "12 Year Old Tabby Cat",
    imgSrc: fionaImgPath,
  },
  {
    name: "Romeo",
    description: "16 Year Old Shi'tzu Dog",
    imgSrc: romeoImgPath,
  },
];
