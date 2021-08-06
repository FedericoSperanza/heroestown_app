import { render, screen,act, findByTestId } from '@testing-library/react';
import Searchtable from '../src/components/searchTable/SearchTable';
import Header from '../src/components/header/Header';
import Footer from '../src/components/footer/Footer';
test('render header', () => {
 const component = render(<Header/>)
 component.getByText('Heroes of the Earth');
});
test('footer test', () => {
  const component = render(<Footer/>)
  component.getByText('© 2021 - Federico Speranza - Heroes Corp');
 });
