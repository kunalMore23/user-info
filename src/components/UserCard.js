// UserCard.js
import React, { useState, useEffect } from "react";
import { Card, CardContent, Typography, CardHeader, Avatar, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  userCard: {
    borderRadius: 20,
    width: "90%",
    margin: "auto",
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
  container: {
    position: 'relative',
    marginTop: '2.5rem',
  }, 
  contentContainer: {
    paddingLeft: '2rem',
  }
});

function UserCard() {
  const classes = useStyles();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://randomuser.me/api/?results=12");
        const data = await response.json();
        setUsers(data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={classes.container}>
      <Grid container spacing={3}>
        <Grid item xs={12} className={classes.contentContainer}>
          <Grid container spacing={3}>
            {users.map((user, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card className={classes.userCard} style={{ backgroundColor: '#F5F5DC' }}>
                  <CardHeader
                    avatar={<Avatar className={classes.avatar} src={user.picture.thumbnail} />}
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
                      Address: {`${user.location.postcode}, ${user.location.city}, ${user.location.city}, ${user.location.country}`}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default UserCard;
