
import { getCategoryNews } from "@/utils/getCategoryNews";
import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";



const DynamicCategoryNews = async({params,searchParams}) => {
    const { data} = await getCategoryNews(searchParams.category);
    console.log(data)
    return (
        <Box>
        <h2>{searchParams.category} news:{data.length}</h2>
       
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
   {
    data.map((news)=>(
        <Grid key={news.id} item xs={6}>
       <Link href={`/${news.category.toLowerCase()}/${news._id}`}>
       <Card sx={{height:'520px'}} className="p-2 m-2 ">
        <CardActionArea className="p-2">
          <CardMedia
          sx={{
           "& img":{
            width:'100%',
            height:'250px'
           }
          }}
          >
            <Image src={news.thumbnail_url} className="w-full" width={200} height={100} alt="top news" /> 
          </CardMedia>
          <CardContent>
            <span className=" my-3 px-2 bg-red-600 p-1 w-[112px] text-center text-white rounded">
              {news.category}
            </span>
            <Typography gutterBottom variant="h6">
             {news.title.length >30? news.title.slice(0,30) + "...":news.title}
            </Typography>
            <Typography gutterBottom>By {news.author.name} - {news.author.published_date}</Typography>
            <Typography color="text.secondary">
              {news.details.length>200? news.details.slice(0,200)+"...":news.details}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
       </Link>
        </Grid>
    ))
   }
   
   
   
    
  </Grid>
        
      
    </Box>
    );
};

export default DynamicCategoryNews;
