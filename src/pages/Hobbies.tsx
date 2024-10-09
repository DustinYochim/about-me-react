import { Hobby } from "../components/Hobby";
import { hobbyList } from "./hobbyList";
import { Typography } from "@mui/material";
import "./Hobbies.css";

export const Hobbies = () => {
  return (
    <div className={"hobby-container"}>
      <Typography variant={"h2"}> Hobbies </Typography>
      {hobbyList.map((hobby, index) => {
        return (
          <Hobby
            title={hobby.title}
            description={hobby.description}
            imgSrc={hobby.imgSrc}
            key={index}
          />
        );
      })}
    </div>
  );
};
