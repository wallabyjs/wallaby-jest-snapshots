import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { shallow } from 'enzyme';

function Layout(props) {
  return <h1>Hello, {props.name}</h1>;
}

const setup = () =>
{
  const wrapper = shallow((
    <MemoryRouter>
      <Layout />
    </MemoryRouter>
  ));

  return {
    wrapper: wrapper.dive().dive(), // Get the rendered layout
  };
};

describe('Layout', () =>
{
  test('render', () =>
  {
    const { wrapper } = setup();

    expect(wrapper).toMatchSnapshot();
  });
});