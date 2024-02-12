import { getcardDetails } from "@/utils/getCardDetails";
import { Avatar, Box, Grid, Typography } from "@mui/material";
import Image from "next/image";

const NewsDetailsPage = async ({ params }) => {
  // console.log(params)
  const { data: news } = await getcardDetails(params.newsId);
  // console.log(data)
  return (
    <Box className="mt-2">
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item lg={6}>
          <Image src={news.thumbnail_url} width={800} height={400} alt="news" />
          <Grid
          style={{marginTop:'2px'}}
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item lg={6}>
              <Image src={news.image_url} width={800} height={400} alt="news" />
            </Grid>
            <Grid item lg={6}>
              <Image src={news.image_url} width={800} height={400} alt="news" />
            </Grid>
          </Grid>
        </Grid>

        <Grid item lg={6}>
          <Typography variant="h5" component="h2">{news.title}</Typography>
          <Box className="flex items-center ">
          <Avatar alt="Remy Sharp" src={news.author.img} />
            <Typography className="mx-4" variant="body2">By {news.author.name}</Typography>
            <Typography variant="body2">Published: {news.author.published_date}</Typography>
          </Box>
          <Typography
          style={{
            textAlign:'justify',
            whiteSpace:'pre-line',
            margin:'10px 0px',
            color:'gray'
          }}
          >{news.details}</Typography>
          <Typography variant="h5">``Many desktop publishing packages and web page editors now use as their default model text!</Typography>
          <Typography style={{textAlign:'justify'}}>- shunder Pichai</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default NewsDetailsPage;
