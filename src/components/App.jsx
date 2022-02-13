//rfc
import '../assets/css/app.css';
import SideBar from './SideBar';
import TopBar from './TopBar';
import ContentWrapper from './ContentWrapper';

function App() {
  return (
    <div className="App MiApp" >
      
      
      <SideBar  />
      <div className='MiDivTC'>
      <TopBar />
      <ContentWrapper />
      </div>
      
    </div>
  );
}

export default App;
