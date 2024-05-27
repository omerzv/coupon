
import HomeIcon from '@mui/icons-material/Home';
import CodeIcon from '@mui/icons-material/Code';
import AddIcon from '@mui/icons-material/Add';
import LoginIcon from '@mui/icons-material/Login';
import BallotIcon from '@mui/icons-material/Ballot';

export const logo = 'https://i.ibb.co/s9Qys2j/logo.png';
export const logoPizza = '../../src/res/pizzal.png';


export const categories = [
  { name: 'Home', icon: <HomeIcon />, },
  { name: 'Coupons', icon: <CodeIcon />, },
  { name: 'Profile', icon: <CodeIcon />, }
];


export const authCategories = [
  { name: 'Login', icon: <LoginIcon />, },
  { name: 'Sign-In', icon: <CodeIcon />, }
];

export const couponAction = [
  { name: 'Add Coupon', icon: <AddIcon />, },
  { name: 'All My Coupons', icon: <BallotIcon />, },
 
];
export const adminAction = [
  { name: 'Add Client', icon: <AddIcon />, },
  { name: 'All Clients', icon: <BallotIcon />, },
];

