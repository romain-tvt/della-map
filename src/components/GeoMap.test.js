import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import GeoMap from './GeoMap';
import mock from '../mock';

let container = null;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('GeoMap renders properly with binded data', () => {
  act(() => {
    render(<GeoMap data={mock} />, container);
  });
  expect(container.querySelectorAll('.geoMap').length > 0).toBe(true);
});

it('GeoMap renders nothing with when no data are binded', () => {
  act(() => {
    render(<GeoMap data={[]} />, container);
  });
  expect(container.querySelectorAll('.geoMap').length === 0).toBe(true);
});
