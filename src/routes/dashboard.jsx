import Typography from 'views/Typography/Typography.jsx';
import RegularTables from 'views/Tables/RegularTables.jsx';
import ExtendedTables from 'views/Tables/ExtendedTables.jsx';
import ReactTables from 'views/Tables/ReactTables.jsx';

import DashboardIcon from '@material-ui/icons/Dashboard';
import GridOn from '@material-ui/icons/GridOn';
// import Image from '@material-ui/icons/Image';
// import Apps from '@material-ui/icons/Apps';
// import Place from '@material-ui/icons/Place';
// import WidgetsIcon from '@material-ui/icons/Widgets';
// import Timeline from '@material-ui/icons/Timeline';
// import DateRange from '@material-ui/icons/DateRange';
// import PersonAdd from '@material-ui/icons/PersonAdd';
// import Fingerprint from '@material-ui/icons/Fingerprint';
// import MonetizationOn from '@material-ui/icons/MonetizationOn';
// import LockOpen from '@material-ui/icons/LockOpen';

const dashRoutes = [
  {
    path: '/dashboard',
    name: 'dashboard',
    icon: DashboardIcon,
    component: ExtendedTables,
  },
  {
    collapse: true,
    path: '/tables',
    name: 'Tables',
    state: 'openTables',
    icon: GridOn,
    views: [
      {
        path: '/tables/regular-tables',
        name: 'Regular Tables',
        mini: 'RT',
        component: RegularTables,
      },
      {
        path: '/tables/extended-tables',
        name: 'Extended Tables',
        mini: 'ET',
        component: ExtendedTables,
      },
      {
        path: '/tables/react-tables',
        name: 'React Tables',
        mini: 'RT',
        component: ReactTables,
      },
    ],
  },
];

export default dashRoutes;
