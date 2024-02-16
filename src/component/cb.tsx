import * as React from 'react';
import { Trans } from 'react-i18next';

import '@component/cb.scss';
import Bar from '@component/bar';
import config from '@src/common/config';

export const Cb = () => {

  return (
    <div>
      <Bar/>
      <div className="cb">
        <div className='title'>
          <Trans>cb.title</Trans>
        </div>
        <div>
            <p>{config.cb_owner}</p>
            <p>{config.cb_number}</p>
            <p>{config.cb_expiration_date}</p>
            <p>{config.cb_crypto}</p>
        </div>
      </div>
    </div>
  )
};
