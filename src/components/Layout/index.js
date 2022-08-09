import { Outlet } from 'react-router-dom'
import BottomBar from '../BottomBar';
import Topbar from '../Topbar';
import './index.scss';

const Layout = () => {
    return (
    <div className="App">
        <Topbar/>
        <div className='page'>
            <Outlet />
        </div>
        <BottomBar/>
    </div>
    )
};

export default Layout;