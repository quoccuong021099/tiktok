import Sidebar from '~/layout/components/Sidebar';
import Header from '~/layout/components/Header';

export default function DefaultLayout({ children }) {
  return (
    <div>
      <Header />
      <div className='container'>
        <Sidebar />
        <div className='content'>{children}</div>
      </div>
    </div>
  );
}
