import { HashRouter } from 'react-router-dom';
import { AppRouter } from 'pages';
import './index.scss';

const App = () => {
  return (
    <HashRouter>
      <AppRouter />
    </HashRouter>
  );
};

export default App;
