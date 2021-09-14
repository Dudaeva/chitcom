import {Avatar, IconButton, MenuItem, Divider, ListItemIcon, Menu, Tooltip, } from '@mui/material';
import profileIcon from "../../images/profile.png";
import {useEffect, useState} from "react";
import {ManageAccounts, Logout} from "@mui/icons-material";
import {useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {loadUserData} from "../../redux/feautures/auth";

const HeaderProfileIcon = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    const {isSignedIn, myData} = useSelector(store => store.auth);
    const { text } = useSelector((store) => store.languages);

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        if (!isSignedIn) return sendToAddress("/sign-up");

        setAnchorEl(event.currentTarget);
    };

    useEffect(() => {
        dispatch(loadUserData());
    }, [isSignedIn]);

    const handleClose = () => {
        setAnchorEl(null);
    };
    const sendToAddress = (address) => history.push(address);

    const handleSignOut = () => {
        dispatch({type: "auth/signOut"})
        handleClose()
    }

    return (
        <>
            <Tooltip title={text.profileTitle}>
                <IconButton onClick={handleClick} size="small" sx={{ p: 0, ml: 2, color: '#fff' }}>
                    <img
                        src={profileIcon}
                        alt="profile"
                    />
                </IconButton>
            </Tooltip>
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                        },
                        '&:before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <MenuItem>
                    <Avatar src={myData?.avatar_URI} />
                    {myData? (myData.name || myData.login) : null}
                </MenuItem>
                <MenuItem onClick={() => sendToAddress("/my-profile")}>
                    <ListItemIcon>
                        <ManageAccounts fontSize="medium" />
                    </ListItemIcon>
                     {text.profile}
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleSignOut}>
                    <ListItemIcon>
                        <Logout fontSize="small" />
                    </ListItemIcon>
                    {text.logOut}
                </MenuItem>
            </Menu>
        </>
    );
}

export default HeaderProfileIcon;