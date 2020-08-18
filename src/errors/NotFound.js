import React from 'react';
import { useSnackbar } from 'notistack';

import { IconButton, Typography, Button } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const NotFound = () => {
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();
    
    React.useEffect(() => {
        const action = key => (
            <IconButton onClick={() => {
                closeSnackbar(key);
            }} className="cl-borderless">
                <CloseIcon htmlColor="white"/>
            </IconButton>
        )
        enqueueSnackbar(
            'Page not Found', {
                preventDuplicate: true,
                autoHideDuration: 3500,
                variant: 'error',
                key: '404_error',
                action
            }
        )
    }, [enqueueSnackbar, closeSnackbar]);

    return (
        <>
            <div className="d-flex flex-column">
                <Typography variant='h4' component='h4'>404 - Not Found</Typography>
                <Typography variant='body1'>Looks like our journey was unsuccessful</Typography>
            </div>
            <Button
                variant="container"
                disableElevation
                endIcon={<ExitToAppIcon/>}
                href='/'
            >
                Back to Home
            </Button>
        </>
    )
}

export default NotFound;