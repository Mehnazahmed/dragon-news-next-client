import { getAllCategories } from "@/utils/getCategories";
import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import Link from "next/link";


export const CategoryList=async()=> {
    const {data:categories} =await getAllCategories();
    // console.log(categories);
  return (
    <Box className="bg-gray-300 px-5 py-2 mt-5">
        <Typography variant="h6">Categories</Typography>
        <Divider/>
        <Stack rowGap={1} sx={{mt:2}}>
            {
                categories.map((category)=>(
                    <Button variant="outlined" key={category.id}>
                     <Link href={`/categories/news?category=${category.title.toLowerCase()}`}>{category.title}</Link>
                    </Button>
                ))
            }
        </Stack>
        
      
    </Box>
  )
}
