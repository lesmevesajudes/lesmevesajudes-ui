import React from 'react';
import {shallow} from 'enzyme';
import App from './App';
import './i18n';

/* global it */
it('renders without crashing', () => {
  shallow(<App/>);
});
