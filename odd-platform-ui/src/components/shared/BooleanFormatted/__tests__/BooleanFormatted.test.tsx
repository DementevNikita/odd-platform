import React from 'react';
import { getByText, render } from 'lib/testHelpers';
import BooleanFormatted, { type BooleanFormattedProps } from '../BooleanFormatted';

describe('BooleanFormatted', () => {
  const setupComponent = ({ value }: Partial<BooleanFormattedProps> = {}) =>
    render(<BooleanFormatted value={value} />);

  it('BooleanFormatted should return Yes while passing boolean true', () => {
    setupComponent({ value: true });
    expect(getByText('Yes').textContent).toEqual('Yes');
  });

  it('BooleanFormatted should return Yes while passing string true', () => {
    setupComponent({ value: 'true' });
    expect(getByText('Yes').textContent).toEqual('Yes');
  });

  it('BooleanFormatted should return No while passing undefined', () => {
    setupComponent({ value: undefined });
    expect(getByText('No').textContent).toEqual('No');
  });
});
