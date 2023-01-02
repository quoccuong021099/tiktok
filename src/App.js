import { Fragment } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DefaultLayout from '~/layout/DefaultLayout';
import { publicRoutes } from './routes';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {publicRoutes.map((item, index) => {
          const Page = item.component;
          const Layout =
            item.layout === null ? Fragment : item.layout || DefaultLayout;
          return (
            <Route
              key={index}
              path={item.path}
              element={
                <Layout>
                  <Page />
                </Layout>
              }
            />
          );
        })}
        <Route />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
