import { Header, Footer } from '../../assets/Layout/Navbar'
import Content from '../HomeScreen/Content'
import { useLocation } from "react-router-dom";
import '../../assets/Style/DashBoardScreen/dashboard.css'

export default function Dashboard() {
  const location = useLocation();
  const loggedIn = location.state && location.state.loggedIn;

  return (
    <div className='dashboard'>
      <Header loggedIn={loggedIn}/>
      <DashboardContent />
      <Footer />
    </div>
  )
}

function DashboardContent() {
  return (
    <div className='dashboard-content'>
      <Content />
    </div>
  )
}

