import { HobbyType } from "../types/HobbyType";
import { Paper, Typography } from "@mui/material";
import "./Hobby.css";

export interface HobbyProps {
  /**
   * The title of my hobby.
   */
  title: string;
  /**
   * The description of my hobby.
   */
  description: string;
  /**
   * A URL or Path to an image representing my hobby.
   */
  imgSrc?: string;
}

export const Hobby = ({ title, description, imgSrc }: HobbyProps) => {
  return (
    <Paper elevation={3} className={"hobby"}>
      <Typography variant={"h3"}>{title}</Typography>
      <img src={imgSrc} alt={imgSrc} />
      <Typography>{description}</Typography>
    </Paper>
  );
};
