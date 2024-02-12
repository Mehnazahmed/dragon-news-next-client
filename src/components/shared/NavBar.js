import logo from "@/assets/logo.png";
import { Instagram, LinkedIn, Twitter } from "@mui/icons-material";
import FacebookIcon from "@mui/icons-material/Facebook";
import { IconButton, Stack } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Image from "next/image";
import Link from "next/link";
import Header from "./Header";

const navItems = [
  {
    route: "Home",
    pathName: "/",
  },
  {
    route: "Category",
    pathName: "/categories/news?category=all-news",
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


function NavBar() {
  return (
   <>
   <Header/>
    <AppBar position="static">
      <Container maxWidth="xl" sx={{backgroundColor:'black'}}>
        <Toolbar disableGutters>
          <Image src={logo} alt="logo" height={100} width={100} />

          <Box className='w-full text-center'>
            {navItems.map((item) => (
              <Link  key={item} href={item.pathName}>
                <Button className="text-white">
                    {item.route}
                </Button>
              </Link>
            ))}
          </Box>
          <Stack direction="row" sx={{
            "& svg":{
                color:"white"
            }
          }}>
            <IconButton aria-label="delete">
              <FacebookIcon />
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
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
   </>
  );
}
export default NavBar;
