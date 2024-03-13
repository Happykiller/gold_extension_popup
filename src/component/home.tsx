import * as React from 'react';
import * as dayjs from 'dayjs';
import { Trans } from 'react-i18next';
import { Send } from '@mui/icons-material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from '@mui/material';

import '@component/common.scss';
import Bar from '@component/molecule/bar';
import inversify from '@src/common/inversify';
import { Footer } from '@component/molecule/footer';
import { ThirdsSelect } from '@component/molecule/opeThirdsSelect';
import { AccountsSelect } from '@component/molecule/accountsSelect';
import { OpeCategoriesSelect } from '@component/molecule/opeCategoriesSelect';
import { OperationUsecaseModel } from '@usecase/operation/model/operation.usecase.model';
import { CreateOperationUsecaseDto } from '@usecase/operation/dto/create.operation.usecase.dto';

export const Home = () => {
  const [currentMsg, setCurrentMsg] = React.useState('');
  const [currentDsc, setCurrentDsc] = React.useState('');
  const [currentType, setCurrentType] = React.useState('2');
  const [currentThird, setCurrentThird] = React.useState('2');
  const [currentCategory, setCurrentCategory] = React.useState('1');
  const [currentAccount, setCurrentAccount] = React.useState('2');
  const [currentAccountDest, setCurrentAccountDest] = React.useState('');
  const [currentStatus, setCurrentStatus] = React.useState('2');
  const [currentAmount, setCurrentAmount] = React.useState("0.00");
  const [currentDate, setCurrentDate] = React.useState(dayjs());

  const handleClick = async (event: React.SyntheticEvent) => {
    event.preventDefault();

    const dto:CreateOperationUsecaseDto = {
      amount: parseFloat(currentAmount),
      date: currentDate.format('YYYY-MM-DD'),
      description: currentDsc,
      account_id: parseInt(currentAccount),
      status_id: parseInt(currentStatus),
      type_id: parseInt(currentType),
      third_id: parseInt(currentThird),
      category_id: parseInt(currentCategory)
    };

    if (currentAccountDest) {
      dto.account_dest_id = parseInt(currentAccountDest);
    }

    try {
      const response:OperationUsecaseModel = await inversify.createOperationUsecase.execute(dto);

      if(response.id) {
        setCurrentMsg(`Operation n°${response.id} crée`);
      }
    } catch (e) {
      setCurrentMsg(`Erreur : ${e.message}`);
    }
  }

  return (
    <div>
      <Bar/>
      <div className="app">
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

              {/* Field type */}
              <Grid 
                xs={6}
                item
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                  <InputLabel>Type</InputLabel>
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
                </FormControl>
              </Grid>

              {/* Field account */}
              <Grid 
                xs={6}
                item
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <AccountsSelect
                  value={currentAccount}
                  label={<Trans>home.account</Trans>}
                  onChange={(e:any) => { 
                    e.preventDefault();
                    setCurrentAccount(e.target.value);
                  }}
                />
              </Grid>

              {/* Field account_dest */}
              <Grid 
                xs={6}
                item
                justifyContent="center"
                alignItems="center"
                display={currentType !== '3' ? "none" : "flex"}
              >
                <AccountsSelect
                  value={currentAccountDest}
                  label={<Trans>home.account_dest</Trans>}
                  onChange={(e:any) => { 
                    e.preventDefault();
                    setCurrentAccountDest(e.target.value);
                  }}
                />
              </Grid>
              <Grid 
                xs={6}
                item
                justifyContent="center"
                alignItems="center"
                display={currentType === '3' ? "none" : "flex"}
              >
              </Grid>

              {/* Field status */}
              <Grid 
                xs={6}
                item
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                  <InputLabel>Statut</InputLabel>
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
                </FormControl>
              </Grid>

              {/* Field third */}
              <Grid 
                xs={6}
                item
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <ThirdsSelect
                  value={currentThird}
                  label={<Trans>home.third</Trans>}
                  onChange={(e:any) => { 
                    e.preventDefault();
                    setCurrentThird(e.target.value);
                  }}
                />
              </Grid>

              {/* Field category */}
              <Grid 
                xs={6}
                item
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <OpeCategoriesSelect
                  value={currentCategory}
                  label={<Trans>home.category</Trans>}
                  onChange={(e:any) => { 
                    e.preventDefault();
                    setCurrentCategory(e.target.value);
                  }}
                />
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

              {/* Button submit */}
              <Grid 
                xs={12}
                item
                textAlign='center'
              >
                {currentMsg}
              </Grid>

            </Grid>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  )
};
