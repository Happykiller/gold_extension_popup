import * as React from 'react';
import { Trans } from 'react-i18next';
import { FormControl, InputLabel, MenuItem, Select, Typography } from "@mui/material";

import inversify from '@src/common/inversify';
import { AccountUsecaseModel } from '@usecase/account/model/account.usecase.model';

export const AccountsSelect = (props:any) => {
  const [accounts, setAccounts] = React.useState<AccountUsecaseModel[]>(null);
  const [qry, setQry] = React.useState({
    loading: null,
    data: null,
    error: null
  });

  let content = <div></div>;

  if(qry.loading) {
    content = <div><Trans>common.loading</Trans></div>;
  } else if(qry.error) {
    content = <div><Trans>common.{qry.error}</Trans></div>
  } else if (accounts === null) {
    setQry(qry => ({
      ...qry,
      loading: true
    }));
    inversify.getAccountsUsecase.execute()
      .then((response:AccountUsecaseModel[]) => {
        setAccounts(response);
      })
      .catch((error:any) => {
        setQry(qry => ({
          ...qry,
          error: error.message
        }));
      })
      .finally(() => {
        setQry(qry => ({
          ...qry,
          loading: false
        }));
      });
  } else {
    content = (
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel>{props.label}</InputLabel>
        <Select
          variant="standard"
          size="small"
          displayEmpty
          value={props.value}
          onChange={(e) => { 
            e.preventDefault();
            props.onChange(e);
          }}
        >
          <MenuItem value=''><Trans>common.clear</Trans></MenuItem>
          {
            accounts.map((account) => {
              if (account.type_id === 1) {
                return <MenuItem 
                  key={account.id} 
                  value={account.id}
                  sx={{
                    width: '300px'
                  }}
                ><Typography noWrap>{account.label}</Typography></MenuItem>;
              }
            })
          }
        </Select>
      </FormControl>
    )
  }

  return content;
}