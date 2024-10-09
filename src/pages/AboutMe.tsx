import { ImageList, ImageListItem, Paper, Typography } from "@mui/material";
import myPhotoSrc from "../images/me.jpeg";
import floatSrc from "../images/float.jpeg";
import floatySrc from "../images/floaty.jpeg";
import golfSrc from "../images/golf.jpeg";
import jokerSrc from "../images/joker.jpeg";
import walkSrc from "../images/walk.jpeg";

export default function AboutMe() {
  return (
    <div className={"about-me"}>
      <Typography variant="h3" color="#1ea7fd" style={{ textAlign: "center" }}>
        About Me
      </Typography>
      <ImageList sx={{ width: 500, height: 500 }} cols={3} rowHeight={164}>
        <ImageListItem>
          <img
            src={myPhotoSrc}
            alt={"Me holding the newspaper when the blues won the stanley cup."}
            loading="lazy"
          />
        </ImageListItem>
        <ImageListItem>
          <img src={golfSrc} alt={"Me golfing."} loading="lazy" />
        </ImageListItem>
        <ImageListItem>
          <img
            src={floatySrc}
            alt={"Me in florida holding a green floaty."}
            loading="lazy"
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src={jokerSrc}
            alt={"Me dressed up as the Joker."}
            loading="lazy"
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src={floatSrc}
            alt={"Me on the river floating."}
            loading="lazy"
          />
        </ImageListItem>
        <ImageListItem>
          <img src={walkSrc} alt={"Me on a walk."} loading="lazy" />
        </ImageListItem>
      </ImageList>
      <Paper
        elevation={3}
        style={{ padding: "10px", width: "75%", backgroundColor: "#282a3a" }}
      >
        <Typography
          variant="body2"
          color="white"
          style={{ textAlign: "center" }}
        >
          Hello there 👋, I'm Dustin. I am in the final semester of my
          bachelor's in computer science degree and am currently interning at
          Delta Dental of Missouri as a DevOps Engineer I grew up on video games
          and my older brother is a developer so computer science was a natural
          fit for me. I first became interested in Web Development when I was
          working my way through an online web dev curriculum called The Odin
          Project. Out of all of the subjects in the CS degree I have enjoyed
          web development the most so here I am. Outside of school and my
          internships I enjoy playing video games (mostly retro games at the
          moment I am playing: Pokemon Yellow, Earthbound, Chrono Trigger),
          sports, exercise, and spending time outside. I'm looking forward to
          this class and I am excited to get started!
        </Typography>
      </Paper>
    </div>
  );
}
