import * as React from 'react';
import { render } from '@testing-library/react';

import { App } from '@src/App';

jest.mock('react-i18next', () => ({
  withTranslation: () => (Component: any) => {
    Component.defaultProps = {...Component.defaultProps, t: (children: any) => children};
    return Component;
  },
  Trans: ({children}: any) => children, // this line was missing (() => jest.fn() might also work)
}));

test('renders learn react link', () => {
  const result = render(<App />);
  expect(result.container.getElementsByClassName('App')).toBeDefined();
});
