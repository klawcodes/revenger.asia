import './app.css';
import riotlogo from './components/media/rogo.webp'

function App() {
  return (
    <div className="App">
        <div className='ppr'>
          <div className='pxx'>
            <div className='img'>
              <img src={riotlogo} alt="" />
            </div>
            <div className="pr">
              <p>Riot is a passionate 2D + 3D Artist.  I'm currently lending my creative talents to a wide range of projects, from independent productions to established brands. My expertise spans the realm of visual artistry, encompassing everything from designing mesmerizing visualizers for short music videos to orchestrating intricate lighting compositions and bringing 3D animations to life.</p>
              <p>I thrive on pushing creative boundaries and bringing imagination to reality.</p>
            </div>
            <div className='t'>
              <div className='link'>
                <a target="_blank" href="">Contact</a>
              </div>
              <div className='link'>
                <a target="_blank" href="https://instagram.com/riotrevenger">Instagram</a>
              </div>
              <div className='link'>
                <a target="_blank" href="https://x.com/RIOTREVENGER">X</a>
              </div>
              <div className='link'>
                <a target="_blank" href="https://rarible.com/riotrevenger">Rarible</a>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default App;
