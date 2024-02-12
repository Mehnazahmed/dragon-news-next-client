import heading from '@/assets/The Dragon News.png';
import { showCurrentDate } from '@/utils/GetCurrentDate';

import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";

const Header = () => {
  const currentDate = showCurrentDate();
  return (
    <Box >
     <Container className="w-full">
     <Image className='mx-auto py-2' src={heading} alt="heading" height={400} width={400}/>
      
      <Typography variant='body2' className='text-center py-2'>Journalism without Fear</Typography>
      <Typography  className='text-center pb-2'>{currentDate}</Typography>
     </Container>

    </Box>
  );
};

export default Header;