import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import GeoMapPanelCard from './GeoMapPanelCard';
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

it('GeoMapPanelCard renders properly with binded data', () => {
  act(() => {
    render(<GeoMapPanelCard company={mock[0]} />, container);
  });
  expect(container.querySelector('h2').textContent).toBe('Pierre Amiot & Fils');
  expect(container.querySelector('p').textContent).toBe('Bourgogne - Côte de Nuits');
});

it('GeoMapPanelCard renders nothing with when no data are binded', () => {
  act(() => {
    render(<GeoMapPanelCard company={{}} />, container);
  });
  expect(container.querySelector('h2')).toBe(null);
  expect(container.querySelector('p')).toBe(null);
});
