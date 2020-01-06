import React from "react";
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { AcUnit as SkiIcon, WbSunny as WeatherIcon } from "@material-ui/icons";

const items = [
  {
    text: "Weather",
    icon: <WeatherIcon />
  },
  {
    text: "Skiing",
    icon: <SkiIcon />
  }
];

const ListItems: React.FunctionComponent = () => {
  const handleListItemClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, itemText: string) => {
    e.preventDefault();
    switch(itemText.toUpperCase()) {
      case "WEATHER":
        console.log("Weather Icon Clicked!");
        break;
      case "SKIING":
        console.log("Skiing Icon Clicked!");
        break;
      default:
        break;
    }
  };

  return (
    <List>
      {items.map((item, index) => (
        <ListItem button key={index} onClick={e => handleListItemClick(e, item.text)}>
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText primary={item.text} />
        </ListItem>
      ))}
    </List>
  );
};

export default ListItems;
