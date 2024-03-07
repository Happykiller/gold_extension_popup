import * as React from 'react';
import * as dayjs from 'dayjs';
import { Trans } from 'react-i18next';
import { Send } from '@mui/icons-material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from '@mui/material';

import '@component/common.scss';
import Bar from '@component/bar';
import { Footer } from '@component/footer';
import inversify from '@src/common/inversify';
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
                <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                  <InputLabel>Compte</InputLabel>
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
                </FormControl>
              </Grid>

              {/* Field account_dest */}
              <Grid 
                xs={6}
                item
                justifyContent="center"
                alignItems="center"
                display={currentType !== '3' ? "none" : "flex"}
              >
                <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                  <InputLabel>Compte Destination</InputLabel>
                  <Select
                    value={currentAccountDest}
                    variant="standard"
                    size="small"
                    onChange={(e) => { 
                      e.preventDefault();
                      setCurrentAccountDest(e.target.value);
                    }}
                  >
                    <MenuItem value=''>Aucun</MenuItem>
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
                </FormControl>
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
                <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                  <InputLabel>Tiers</InputLabel>
                  <Select
                    value={currentThird}
                    variant="standard"
                    size="small"
                    onChange={(e) => { 
                      e.preventDefault();
                      setCurrentThird(e.target.value);
                    }}
                  >
                    <MenuItem value='20'>Amazon</MenuItem>
                    <MenuItem value='26'>Aréa</MenuItem>
                    <MenuItem value='11'>Aurore Mondésir</MenuItem>
                    <MenuItem value='8'>Banque</MenuItem>
                    <MenuItem value='35'>BBCEP</MenuItem>
                    <MenuItem value='10'>Blizzard</MenuItem>
                    <MenuItem value='40'>Botanic</MenuItem>
                    <MenuItem value='34'>Boursorama</MenuItem>
                    <MenuItem value='25'>Carrefour</MenuItem>
                    <MenuItem value='14'>Castorama</MenuItem>
                    <MenuItem value='31'>Cinéma</MenuItem>
                    <MenuItem value='28'>CPAM</MenuItem>
                    <MenuItem value='15'>Darty</MenuItem>
                    <MenuItem value='18'>Decathlon</MenuItem>
                    <MenuItem value='21'>Delivroo</MenuItem>
                    <MenuItem value='9'>Employeur</MenuItem>
                    <MenuItem value='4'>Epicerie Asiatique</MenuItem>
                    <MenuItem value='2'>Entreprise créditrice</MenuItem>
                    <MenuItem value='1'>Entreprise débitrice</MenuItem>
                    <MenuItem value='39'>Essence</MenuItem>
                    <MenuItem value='43'>FitnessBoutique</MenuItem>
                    <MenuItem value='3'>Géant</MenuItem>
                    <MenuItem value='6'>Généraliste</MenuItem>
                    <MenuItem value='42'>Google</MenuItem>
                    <MenuItem value='16'>Ikea</MenuItem>
                    <MenuItem value='23'>Le verre à soi</MenuItem>
                    <MenuItem value='38'>LeroyMerlin</MenuItem>
                    <MenuItem value='37'>Locataires</MenuItem>
                    <MenuItem value='19'>Mac Donald</MenuItem>
                    <MenuItem value='36'>Médecin</MenuItem>
                    <MenuItem value='17'>Micromania</MenuItem>
                    <MenuItem value='29'>Mutuelle</MenuItem>
                    <MenuItem value='13'>Nano Mireille</MenuItem>
                    <MenuItem value='5'>Ophtalmologue</MenuItem>
                    <MenuItem value='30'>Orange</MenuItem>
                    <MenuItem value='24'>Parking</MenuItem>
                    <MenuItem value='22'>Pharmacie</MenuItem>
                    <MenuItem value='32'>Restauration</MenuItem>
                    <MenuItem value='7'>Shopping</MenuItem>
                    <MenuItem value='33'>Syndic</MenuItem>
                    <MenuItem value='41'>TIER</MenuItem>
                    <MenuItem value='12'>Trésor public</MenuItem>
                    <MenuItem value='27'>Vinted</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              {/* Field category */}
              <Grid 
                xs={6}
                item
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                  <InputLabel>Catégorie</InputLabel>
                  <Select
                    value={currentCategory}
                    variant="standard"
                    size="small"
                    onChange={(e) => { 
                      e.preventDefault();
                      setCurrentCategory(e.target.value);
                    }}
                  >
                    <MenuItem value='2'>Alimentation</MenuItem>
                    <MenuItem value='1'>Autre catégorie</MenuItem>
                    <MenuItem value='19'>Assurance</MenuItem>
                    <MenuItem value='4'>Cadeau</MenuItem>
                    <MenuItem value='20'>Charges</MenuItem>
                    <MenuItem value='9'>Fabrice</MenuItem>
                    <MenuItem value='16'>FAI</MenuItem>
                    <MenuItem value='10'>Frais	banquaire, etc</MenuItem>
                    <MenuItem value='21'>Geek</MenuItem>
                    <MenuItem value='8'>Illidan</MenuItem>
                    <MenuItem value='17'>Immobilier</MenuItem>
                    <MenuItem value='15'>Impôts</MenuItem>
                    <MenuItem value='14'>Jeux</MenuItem>
                    <MenuItem value='6'>Mobilité</MenuItem>
                    <MenuItem value='5'>Prêt</MenuItem>
                    <MenuItem value='13'>Régulation</MenuItem>
                    <MenuItem value='12'>Revenue</MenuItem>
                    <MenuItem value='18'>Salaire</MenuItem>
                    <MenuItem value='3'>Santé</MenuItem>
                    <MenuItem value='11'>Sortie</MenuItem>
                    <MenuItem value='7'>Vacances</MenuItem>
                  </Select>
                </FormControl>
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
