import sideTopNews from "@/assets/side-top-news.png";
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import Image from "next/image";
import ListNews from "../listNews/ListNews";

export default function SideBar() {
  return (
    <>
     <Card>
        <CardActionArea>
          <CardMedia>
            <Image className="w-full" src={sideTopNews} alt="top news" />
          </CardMedia>
          <CardContent>
            <p className="bg-red-600 p-1 w-[110px] text-center text-white rounded">
              Technology
            </p>
            <Typography gutterBottom variant="body">
              Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again
            </Typography>
            <Typography gutterBottom>By Jesun Vumula - May 18,2023</Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Box className='py-2'>
        <ListNews/>

      </Box>
      
    </>
  )
}
