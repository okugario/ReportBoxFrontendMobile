import * as React from 'react';
import ReactDOM from 'react-dom';
import HomePage from './HomePage';
import AdministrationPageMenu from './AdministrationPageMenu';
function App() {
  return (
    <>
      <AdministrationPageMenu></AdministrationPageMenu>
    </>
  );
}
ReactDOM.render(<App />, document.getElementById('root'));
