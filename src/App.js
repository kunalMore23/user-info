import { Grid } from "@mui/material";
import "./App.css";
import Navbar from "./components/Navbar";
import UserCard from "./components/UserCard";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <Grid container spacing={3}>
      <Navbar></Navbar>
      <Grid xs={12}>
      </Grid>
      <Grid xs={2} style={{marginLeft : '2rem', marginTop: '0.5rem'}}>
        <Sidebar></Sidebar>
      </Grid>
      <Grid xs={9}>
        <UserCard></UserCard>
      </Grid>
    </Grid>
  );
}

export default App;
