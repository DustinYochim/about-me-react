import { Pet } from "../components/Pet";
import { petList } from "./petList";
import { Typography } from "@mui/material";
import "./Pets.css";

export const Pets = () => {
  return (
    <div className={"pet-container"}>
      <Typography variant={"h2"}> Pets </Typography>
      {petList.map((pet, index) => {
        return (
          <Pet
            title={pet.name}
            description={pet.description}
            imgSrc={pet.imgSrc}
            key={index}
          />
        );
      })}
    </div>
  );
};
