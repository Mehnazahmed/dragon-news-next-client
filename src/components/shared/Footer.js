import { Facebook, Instagram, LinkedIn, Twitter } from '@mui/icons-material';
import { Box, Button, Container, IconButton, Typography } from '@mui/material';
import Link from 'next/link';

const navItems = [
    {
      route: "Home",
      pathName: "/",
    },
    {
      route: "Category",
      pathName: "/category",
    },
    {
      route: "News",
      pathName: "/news",
    },
    {
      route: "About",
      pathName: "/about",
    },
    {
      route: "Contact",
      pathName: "/contact",
    },
  ];
export default function Footer() {
    
  return (
    <Box className="bg-black px-4 py-4 ">
        <Container>
        <Box className='w-full text-center' sx={{
            "& svg":{
                color:"white"
            }
          }}>
            <IconButton aria-label="delete">
              <Facebook />
            </IconButton>
            <IconButton aria-label="delete">
              <LinkedIn />
            </IconButton>
            <IconButton aria-label="delete">
              <Twitter />
            </IconButton>
            <IconButton aria-label="delete">
              <Instagram />
            </IconButton>
          </Box>

          <Box className='w-full text-center'>
            {navItems.map((item) => (
              <Link  key={item} href={item.pathName}>
                <Button className="text-gray">
                    {item.route}
                </Button>
              </Link>
            ))}
          </Box>
          <Typography variant='body2' color='grey' className='p-2 w-full text-center'>
            @2023 The Dragon News. Design by Programming Hero.
          </Typography>
       


        </Container>
      
    </Box>
  )
}
