import * as React from 'react';
import * as dayjs from 'dayjs';
import { Trans } from 'react-i18next';
import { Send } from '@mui/icons-material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Button, Grid, MenuItem, Select, TextField } from '@mui/material';

import '@component/home.scss';
import Bar from '@component/bar';
import inversify from '@src/common/inversify';
import { OperationUsecaseModel } from '@src/usecase/operation/model/operation.usecase.model';

export const Home = () => {
  const [currentMsg, setCurrentMsg] = React.useState('');
  const [currentDsc, setCurrentDsc] = React.useState('');
  const [currentType, setCurrentType] = React.useState('2');
  const [currentThird, setCurrentThird] = React.useState('2');
  const [currentCategory, setCurrentCategory] = React.useState('1');
  const [currentAccount, setCurrentAccount] = React.useState('2');
  const [currentStatus, setCurrentStatus] = React.useState('2');
  const [currentAmount, setCurrentAmount] = React.useState("0.00");
  const [currentDate, setCurrentDate] = React.useState(dayjs());

  const handleClick = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    const response:OperationUsecaseModel = await inversify.createOperationUsecase.execute({
      amount: parseFloat(currentAmount),
      date: currentDate.format('YYYY-MM-DD'),
      description: currentDsc,
      account_id: parseInt(currentAccount),
      status_id:  parseInt(currentStatus),
      type_id:  parseInt(currentType),
      third_id:  parseInt(currentThird),
      category_id:  parseInt(currentCategory)
    });
    if(response.id) {
      setCurrentMsg(`Operation crée avec l'id:${response.id}`);
    }
  }

  return (
    <div>
      <Bar/>
      <div className="home">
        <div className='title'>
          <Trans>home.title</Trans>
        </div>
        <div>
          <form
            onSubmit={handleClick}
          >
            <Grid 
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
              {/* Field amount */}
              <Grid 
                xs={6}
                item
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <TextField
                  sx={{ marginRight:1 }}
                  label={<Trans>home.amount</Trans>}
                  variant="standard"
                  size="small"
                  type='number'
                  value={currentAmount}
                  onChange={(e) => { 
                    e.preventDefault();
                    setCurrentAmount(e.target.value);
                  }}
                />
              </Grid>

              {/* Field date */}
              <Grid 
                xs={6}
                item
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    format="DD/MM/YYYY"
                    label={<Trans>home.date</Trans>}
                    value={currentDate}
                    onChange={(newValue) => setCurrentDate(newValue)}
                  />
                </LocalizationProvider>
              </Grid>

              {/* Field description */}
              <Grid 
                xs={12}
                item
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <TextField
                  sx={{ marginRight:1 }}
                  fullWidth
                  label={<Trans>home.description</Trans>}
                  variant="standard"
                  size="small"
                  value={currentDsc}
                  onChange={(e) => { 
                    e.preventDefault();
                    setCurrentDsc(e.target.value);
                  }}
                />
              </Grid>

              {/* Field account */}
              <Grid 
                xs={6}
                item
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Select
                  value={currentAccount}
                  variant="standard"
                  size="small"
                  onChange={(e) => { 
                    e.preventDefault();
                    setCurrentAccount(e.target.value);
                  }}
                >
                  <MenuItem value='2'>Courant</MenuItem>
                  <MenuItem value='4'>Alimentation</MenuItem>
                  <MenuItem value='5'>Assurances</MenuItem>
                  <MenuItem value='15'>Cadeaux</MenuItem>
                  <MenuItem value='17'>Capital</MenuItem>
                  <MenuItem value='33'>Chap42</MenuItem>
                  <MenuItem value='6'>Charges</MenuItem>
                  <MenuItem value='38'>Cluses</MenuItem>
                  <MenuItem value='7'>Distribution</MenuItem>
                  <MenuItem value='8'>Fabrice</MenuItem>
                  <MenuItem value='9'>Geek</MenuItem>
                  <MenuItem value='11'>Illidan</MenuItem>
                  <MenuItem value='34'>Impôts</MenuItem>
                  <MenuItem value='14'>Jeux</MenuItem>
                  <MenuItem value='18'>Mobilité</MenuItem>
                  <MenuItem value='10'>Régie Eau</MenuItem>
                  <MenuItem value='20'>Santé</MenuItem>
                  <MenuItem value='19'>Sorties</MenuItem>
                  <MenuItem value='21'>Taxe foncière</MenuItem>
                  <MenuItem value='22'>Taxe habitation</MenuItem>
                  <MenuItem value='23'>Vacances</MenuItem>
                </Select>
              </Grid>

              {/* Field status */}
              <Grid 
                xs={6}
                item
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Select
                  value={currentStatus}
                  variant="standard"
                  size="small"
                  onChange={(e) => { 
                    e.preventDefault();
                    setCurrentStatus(e.target.value);
                  }}
                >
                  <MenuItem value='1'>A suivre</MenuItem>
                  <MenuItem value='2'>Réconcilier</MenuItem>
                </Select>
              </Grid>

              {/* Field type */}
              <Grid 
                xs={6}
                item
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Select
                  value={currentType}
                  variant="standard"
                  size="small"
                  onChange={(e) => { 
                    e.preventDefault();
                    setCurrentType(e.target.value);
                  }}
                >
                  <MenuItem value='1'>Crédit</MenuItem>
                  <MenuItem value='2'>Débit</MenuItem>
                  <MenuItem value='3'>Virement</MenuItem>
                </Select>
              </Grid>

              {/* Field third */}
              <Grid 
                xs={6}
                item
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Select
                  value={currentThird}
                  variant="standard"
                  size="small"
                  onChange={(e) => { 
                    e.preventDefault();
                    setCurrentThird(e.target.value);
                  }}
                >
                  <MenuItem value='1'>Entreprise débitrice</MenuItem>
                  <MenuItem value='2'>Entreprise créditrice</MenuItem>
                  <MenuItem value='3'>Géant</MenuItem>
                </Select>
              </Grid>

              {/* Field category */}
              <Grid 
                xs={6}
                item
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Select
                  value={currentCategory}
                  variant="standard"
                  size="small"
                  onChange={(e) => { 
                    e.preventDefault();
                    setCurrentCategory(e.target.value);
                  }}
                >
                  <MenuItem value='1'>Autre catégorie</MenuItem>
                  <MenuItem value='2'>Alimentation</MenuItem>
                  <MenuItem value='3'>Santé</MenuItem>
                  <MenuItem value='4'>Cadeau</MenuItem>
                  <MenuItem value='5'>Prêt</MenuItem>
                  <MenuItem value='6'>Mobilité</MenuItem>
                  <MenuItem value='7'>Vacances</MenuItem>
                  <MenuItem value='8'>Illidan</MenuItem>
                  <MenuItem value='9'>Fabrice</MenuItem>
                  <MenuItem value='10'>Frais	banquaire, etc</MenuItem>
                  <MenuItem value='11'>Sortie</MenuItem>
                  <MenuItem value='12'>Revenue</MenuItem>
                  <MenuItem value='13'>Régulation</MenuItem>
                  <MenuItem value='14'>Jeux</MenuItem>
                  <MenuItem value='15'>Impôts</MenuItem>
                  <MenuItem value='16'>FAI</MenuItem>
                  <MenuItem value='17'>Immobilier</MenuItem>
                  <MenuItem value='18'>Salaire</MenuItem>
                  <MenuItem value='19'>Assurance</MenuItem>
                  <MenuItem value='20'>Charges</MenuItem>
                  <MenuItem value='21'>Geek</MenuItem>
                  <MenuItem value='22'>Régulation	équilibrage de compte</MenuItem>
                </Select>
              </Grid>

              {/* Button submit */}
              <Grid 
                xs={12}
                item
                textAlign='center'
              >
                <Button 
                  type="submit"
                  variant="contained"
                  size="small"
                  startIcon={<Send />}
                ><Trans>home.send</Trans></Button>
              </Grid>
            </Grid>
            {currentMsg}
          </form>
        </div>
      </div>
    </div>
  )
};
