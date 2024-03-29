import * as React from 'react';
import { Trans } from 'react-i18next';
import { Send } from '@mui/icons-material';
import { Box, Button, TextField } from '@mui/material';

import '@component/common.scss';
import inversify from '@src/common/inversify';
import { HelloUsecaseModel } from '@usecase/hello/model/hello.usecase.model';
import Bar from '@src/component/molecule/bar';

export const Background = () => {
  const [currentName, setCurrentName] = React.useState('');
  const [currentMsg, setCurrentMsg] = React.useState('');

  const handleClick = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    const response:HelloUsecaseModel = await inversify.helloUsecase.execute({
      name: currentName
    });
    if (response.data) {
      setCurrentMsg(response.data)
    }
  }

  return (
    <div>
      <Bar/>
      <div className="app">
        <div className='title'>
          <Trans>background.title</Trans>
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
                label={<Trans>background.name</Trans>}
                variant="standard"
                size="small"
                onChange={(e) => { 
                  e.preventDefault();
                  setCurrentName(e.target.value);
                }}
              />
              <Button 
                type="submit"
                variant="contained"
                size="small"
                startIcon={<Send />}
                disabled={!(currentName.length > 3)}
              ><Trans>common.done</Trans></Button>
            </Box>
            {currentMsg}
          </form>
        </div>
      </div>
    </div>
  )
};
