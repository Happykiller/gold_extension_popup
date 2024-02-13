import * as React from 'react';
import { Trans } from 'react-i18next';
import { Done } from '@mui/icons-material';
import { Box, Button, TextField } from '@mui/material';

import '@component/login.scss';
import { routerStore } from '@component/routerStore';
import { contextStore } from '@component/contextStore';
import { AuthUsecaseModel } from '@usecase/model/auth.usecase.model';
import inversify from '@src/common/inversify';

export const Login = () => {
  const routeur = routerStore();
  const [currentLogin, setCurrentLogin] = React.useState('');
  const [currentPassword, setCurrentPassword] = React.useState('');

  let errorMessage = <div></div>;
  const error = {
    message: 'coucou'
  };
  if(error) {
    errorMessage = <div><Trans>login.error</Trans><Trans>{error.message}</Trans></div>
  }

  const handleClick = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    const response:AuthUsecaseModel = await inversify.authUsecase.execute({
      login: currentLogin,
      password: currentPassword
    });
    if (response.data) {
      contextStore.setState({ 
        id: response.data.id,
        code: response.data.code,
        access_token: response.data.access_token,
        name_first: response.data.name_first,
        name_last: response.data.name_last,
      });
      routeur.navigateTo('/');
    }
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
