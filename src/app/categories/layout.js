import { CategoryList } from "@/components/ui/categoryList/CategoryList";
import { Grid } from "@mui/material";

export default function CategoriesLayOut({children}) {
  return (
    <>
    <Grid className="py-4" container spacing={2}>
        <Grid item xs={3} >
         
         <CategoryList/>
        </Grid>
        <Grid item xs={9} >
            <h2>Dynamic</h2>
         {children}
        </Grid>
      </Grid>
      
    </>
  )
}
