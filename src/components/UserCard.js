import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  Typography,
  CardHeader,
  Avatar,
  Grid,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

const randomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const useStyles = makeStyles({
  userCard: {
    transition: "transform 0.3s ease",
    "&:hover": {
      transform: "scale(1.05)",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    },
  },
  avatar: {
    transition: "transform 0.3s ease",
    "&:hover": {
      transform: "scale(1.1)",
    },
  },
});

function UserCard() {
  const classes = useStyles();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://randomuser.me/api/?results=15");
        const data = await response.json();
        setUsers(data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Grid container spacing={3} style={{marginTop : '1px'}}>
      {users.map((user, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card className={classes.userCard} style={{backgroundColor : randomColor()}}>
            <CardHeader
              avatar={
                <Avatar
                  className={classes.avatar}
                  src={user.picture.thumbnail}
                />
              }
              title={`${user.name.first} ${user.name.last}`}
              subheader={user.email}
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                Gender: {user.gender}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Username: {user.login.username}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Password: {user.login.password}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default UserCard;
