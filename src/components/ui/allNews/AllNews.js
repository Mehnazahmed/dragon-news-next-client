import {
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Grid,
    Typography,
} from "@mui/material";
import Image from "next/image";

export default function AllNews({ data }) {
  console.log(data);
  return (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      {data.slice(0, 4).map((news) => (
        <Grid key={news._id} item xs={6}>
          <Card >
            <CardActionArea>
              <CardMedia sx={{
           "& img":{
            width:'100%',
            height:'250px'
           }
          }}>
              <Image width={300} height={200} className="w-full" src={news.thumbnail_url} alt="top news" />
              </CardMedia>
              <CardContent>
                <span className="bg-red-600 p-1 w-[110px] text-center text-white rounded">
                  {news.category}
                </span>
                <Typography gutterBottom variant="h5">
                  {news.title}
                </Typography>
                <Typography gutterBottom>
                By {news.author.name} - {news.author.published_date}
                </Typography>
                <Typography style={{textAlign:'justify'}} color="text.secondary">
                  {news.details.length>30?news.details.slice(0,30) +'...':news.details }
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
