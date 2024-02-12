import LatestNews from "@/components/ui/latestNews/LatestNews";
import SideBar from "@/components/ui/sideBar/SideBar";
import { Grid } from "@mui/material";

export default function Home() {
  return (
    <>
      <Grid className="py-4" container spacing={2}>
        <Grid item xs={8} >
         <LatestNews />
        </Grid>
        <Grid item xs={4} >
         <SideBar/>
        </Grid>
      </Grid>
    </>
  );
}
