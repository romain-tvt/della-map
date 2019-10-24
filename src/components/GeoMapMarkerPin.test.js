import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import GeoMapMarkerPin from "./GeoMapMarkerPin";
import { ICON } from "../config";

let container = null;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("GeoMapMarkerPin renders properly with binded data", () => {
  act(() => {
    render(<GeoMapMarkerPin size={20} onClick={() => {}} />, container);
  });
  expect(container.querySelectorAll('svg').length > 0).toBe(true);
});

it('GeoMapMarkerPin renders the proper svg path', () => {
  act(() => {
    render(<GeoMapMarkerPin size={20} onClick={() => {}} />, container);
  });
  expect(container.querySelector('svg path').getAttribute('d')).toBe(ICON.path);
});

it('GeoMapMarkerPin should trigger a click event properly', () => {
  const spy = jest.fn();
  act(() => {
    render(<GeoMapMarkerPin size={20} onClick={spy} />, container);
    const svg = container.querySelector('svg');
    svg.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });
  expect(spy).toHaveBeenCalledTimes(1);
});


