import { Outlet } from 'react-router-dom';

import Directory from '../../components/directory/directory.component';
import { categories } from '../../data/directory.data'
const Home = () => {
  return (
    <div>
      <Directory categories={categories} />
      <Outlet />
    </div>
  );
};

export default Home;
