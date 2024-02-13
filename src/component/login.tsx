import * as React from 'react';
import { Trans } from 'react-i18next';
import { Done } from '@mui/icons-material';
import { useNavigate } from "react-router-dom";
import { Box, Button, TextField } from '@mui/material';

import '@component/login.scss';
import { contextStore } from '@component/contextStore';

export const Login = () => {
  const navigate = useNavigate();
  const [currentLogin, setCurrentLogin] = React.useState('');
  const [currentPassword, setCurrentPassword] = React.useState('');

  let errorMessage = <div></div>;
  const error = {
    message: 'coucou'
  };
  if(error) {
    errorMessage = <div><Trans>login.error</Trans><Trans>{error.message}</Trans></div>
  }

  const handleClick = () => {
    contextStore.setState({ 
      code: currentLogin
    });
    navigate("/");
  }

  return (
    <div className="login">
      <div className='title'>
        <Trans>login.title</Trans>
      </div>
      <div>
        <form
          onSubmit={handleClick}
        >
          <Box
            display="flex"
            alignItems="center"
            sx={{ 
              flexDirection: 'column',
              gap: '10px;'
            }}
          >
            <TextField
              sx={{ marginRight:1}}
              label={<Trans>login.login</Trans>}
              variant="standard"
              size="small"
              onChange={(e) => { 
                e.preventDefault();
                setCurrentLogin(e.target.value);
              }}
            />
            <TextField
              sx={{ marginRight:1}}
              label={<Trans>login.password</Trans>}
              variant="standard"
              size="small"
              onChange={(e) => { 
                e.preventDefault();
                setCurrentPassword(e.target.value);
              }}
            />
            <Button 
              type="submit"
              variant="contained"
              size="small"
              startIcon={<Done />}
              disabled={!(currentLogin.length > 3 && currentPassword.length > 3)}
            ><Trans>common.done</Trans></Button>
            {errorMessage}
          </Box>
        </form>
      </div>
    </div>
  )
};
