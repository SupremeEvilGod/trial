import {Routes, Route} from 'react-router-dom'
import './App.css';
import LobbyScreen from './screens/Lobby';
import RoomPage from './screens/Room';
import HomeScrean from './screens/1';
import GameMenu from './screens/game';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomeScrean />}/>
        <Route path='/Lobby' element={<LobbyScreen />} />
        <Route path='/room/:roomId' element={<RoomPage />} />
        <Route path='/game' element={<GameMenu />} />
      </Routes>
    </div>
  );
}

export default App;
