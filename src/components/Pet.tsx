import { Paper, Typography } from "@mui/material";
import "./Pet.css";

export interface PetProps {
  /**
   * The name of my pet.
   */
  title: string;
  /**
   * A description of my pet.
   */
  description: string;
  /**
   * A picture of my pet.
   */
  imgSrc?: string;
}

export const Pet = ({ title, description, imgSrc }: PetProps) => {
  return (
    <Paper elevation={3} className={"pet"}>
      <Typography variant={"h3"}>{title}</Typography>
      <img src={imgSrc} alt={imgSrc} />
      <Typography>{description}</Typography>
    </Paper>
  );
};
