import { useState, Fragment } from 'react';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import Tooltip from '@mui/material/Tooltip';
import { useSession } from 'next-auth/react';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/dist/client/router';
import { Button } from '@mui/material';

export default function NavigationDropDown() {
    const router = useRouter();
    const { data: session, status } = useSession();
    const [ anchorEl, setAnchorEl ] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <Fragment>
            <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                <Tooltip title="haz click para ver mas opciones">
                    <Button
                        variant='outlined'
                        onClick={handleClick}
                        size="small"
                        sx={{ ml: 2 }}
                        aria-controls={open ? 'account-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                    >
                        Cartas
                    </Button>
                </Tooltip>
            </Box>
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: 1,
                            mr: 1,
                        }
                    },
                }}
                transformOrigin={{ horizontal: 'center', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'center', vertical: 'bottom' }}
            >
                <MenuItem onClick={() => { router.push('/editor') }}>
                    <Typography>
                        Editor
                    </Typography>
                </MenuItem>
                <MenuItem onClick={() => { router.push('/masseditor') }}>
                    <Typography>
                        Editor en Masa
                    </Typography>
                </MenuItem>
                <Divider />
                <MenuItem onClick={() => { router.push('/history/') }}>
                    <Typography>
                        Historial de edicion
                    </Typography>
                </MenuItem>
            </Menu>
        </Fragment>
    );
}
