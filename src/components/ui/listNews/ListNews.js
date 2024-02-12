import sideBottomNews from "@/assets/side-bottom-img.png";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Image from 'next/image';

export default function ListNews() {
  

  return (
    <>
    <Card className='mb-2' sx={{ display: 'flex' }}>
        <CardMedia>
            <Image className="h-full" src={sideBottomNews} alt='side bottom news' width={100}/>
        </CardMedia>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            Live From Space
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Mac Miller
          </Typography>
          <Typography variant="body2" color="text.secondary" component="div">
            May 24,2023
          </Typography>
        </CardContent>
        
      </Box>
      
    </Card>
    <Card className='mb-2' sx={{ display: 'flex' }}>
        <CardMedia>
            <Image className="h-full" src={sideBottomNews} alt='side bottom news' width={100}/>
        </CardMedia>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            Live From Space
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Mac Miller
          </Typography>
          <Typography variant="body2" color="text.secondary" component="div">
            May 24,2023
          </Typography>
        </CardContent>
        
      </Box>
      
    </Card>
    <Card className='mb-2' sx={{ display: 'flex' }}>
        <CardMedia>
            <Image className="h-full" src={sideBottomNews} alt='side bottom news' width={100}/>
        </CardMedia>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            Live From Space
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Mac Miller
          </Typography>
          <Typography variant="body2" color="text.secondary" component="div">
            May 24,2023
          </Typography>
        </CardContent>
        
      </Box>
      
    </Card>
    <Card className='mb-2' sx={{ display: 'flex' }}>
        <CardMedia>
            <Image className="h-full" src={sideBottomNews} alt='side bottom news' width={100}/>
        </CardMedia>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            Live From Space
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Mac Miller
          </Typography>
          <Typography variant="body2" color="text.secondary" component="div">
            May 24,2023
          </Typography>
        </CardContent>
        
      </Box>
      
    </Card>
    <Card className='mb-2' sx={{ display: 'flex' }}>
        <CardMedia>
            <Image className="h-full" src={sideBottomNews} alt='side bottom news' width={100}/>
        </CardMedia>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            Live From Space
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Mac Miller
          </Typography>
          <Typography variant="body2" color="text.secondary" component="div">
            May 24,2023
          </Typography>
        </CardContent>
        
      </Box>
      
    </Card>
    
  
   
    </>
  );
}