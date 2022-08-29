import "../App.css";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

function Tile(props) {
  const {
    fname,
    lname,
    gender,
    streetName,
    email,
    phone,
    photo,
    timezone,
  } = props;
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        maxWidth: 400,
        mt: 3,
        ml: 3,
      }}
    >
      <CardHeader
        avatar={
          <Avatar
            alt={`${fname} ${lname}`}
            src={photo}
            sx={{ width: 150, height: 150 }}
            variant="rounded"
          />
        }
        title={`${fname} ${lname}`}
        subheader={gender}
        // subheader={gender[0].toUpperCase() + gender.substr(1).toLowerCase()}
      />
      <CardActions disableSpacing>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Box variant="body2" color="text.secondary">
            <ul className="tile">
              <li>{email}</li>
              <li>{phone}</li>
              <li>{streetName}</li>
              <li>{timezone}</li>
            </ul>
          </Box>
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default Tile;
