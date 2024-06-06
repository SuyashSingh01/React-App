import Navbar from './components/Navbar';
import ImageCardList from './components/ImageCardList';
import './App.css';


function App() {
  return (
    <div className="font-bold w-screen bg-gray-300 min-h-screen flex flex-col">
      <Navbar/>
      <ImageCardList/>
    </div>
  );
}
export default App;
