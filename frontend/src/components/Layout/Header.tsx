import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { Input } from '@mui/material';
import {SearchOutlined,Cancel} from '@mui/icons-material/'

function Header({showSearch}:any) {
    const navigator = useNavigate()
    const [search,setSearch] = React.useState('');

    const handleCloseNavMenu = () => {
        navigator('/auth')
    };

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        LOGO
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <Button
                            onClick={()=>{navigator('/myposts')}}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            My Posts
                        </Button>
                    </Box>

                    {showSearch && <Box sx={{border:'1px solid white',color:'white',display:'flex',flexDirection:'row',paddingInline:'5px',borderRadius:'10px',marginRight:"30px"}}>
                        <Input id="search" placeholder='search' value={search} sx={{color:'white',padding:'6px',borderRadius:'10px'}} onChange={(e) => { setSearch(e.target.value) }}/>
                        <Box sx={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                        {!search ? <SearchOutlined sx={{cursor:'pointer'}} color='info'></SearchOutlined> : <Box onClick={()=>{setSearch('')}}><Cancel sx={{cursor:'pointer'}} color='warning'></Cancel></Box> }
                        </Box>
                    </Box>}
                    
                    <Button
                        onClick={handleCloseNavMenu}
                        sx={{ my: 2, color: 'white', display: 'block' }}
                    >
                        Logout
                    </Button>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Header;
