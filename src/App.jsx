import { useEffect, useState } from 'react'
import './App.css'
import TwitterIcon from '@mui/icons-material/Twitter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'

function App() {

  const [fraseActualIndex, setFraseActualIndex] = useState(0);
  const [colorActualIndex, setColorActualIndex] = useState(0);
  const [datos, setDatos] = useState([]);

  const colores = [
    {
      "color": "IndianRed"
    },
    {
      "color": "DarkOrange"
    },
    {
      "color": "Gold"
    },
    {
      "color": "Medium Purple"
    },
    {
      "color": "MediumSeaGreen"
    },
    {
      "color": "SlateBlue"
    },
    {
      "color": "CornflowerBlue"
    }
  ];

  useEffect(() => {
    const url = 'http://localhost:5000/quotes';



    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setDatos(data);
      } catch (error) {
        console.error('Error al cargar datos:', error);
      }
    };

    fetchData();

  }, []);

  const cambiarFrase = () => {
    const newIndex = Math.floor(Math.random() * datos.length); // Obtén un índice aleatorio de las frases disponibles
    setFraseActualIndex(newIndex);
    cambiarColor();
  };

  const cambiarColor = () => {
    const newIndex = Math.floor(Math.random() * colores.length); // Obtén un índice aleatorio de las frases disponibles
    setColorActualIndex(newIndex);
  };



  return (
    <div className='App' style={{ backgroundColor: colores[colorActualIndex].color }}>
      <div id='quote-box'>
        <div className='top-section'>
          <div id='text'>
            {datos.length > 0 &&
              <p className="quote text-focus-in" style={{ color: colores[colorActualIndex].color }} key={datos[fraseActualIndex].id}>
                <FontAwesomeIcon className="quote-icon" icon={faQuoteLeft} size="lg" />
                <div className='space'></div>
                {datos[fraseActualIndex].q}</p>}
          </div>

          <div id='author'>
            {datos.length > 0 && <span className='text-focus-in' style={{ color: colores[colorActualIndex].color }}>- {datos[fraseActualIndex].a}</span>}
          </div>
        </div>
        <div className='bottom-section'>
          <div className='buttons-container'>
            <a href="https://twitter.com/i/flow/login?redirect_after_login=%2Fintent%2Ftweet" target="_blank">
              <div className='twitter-button-container'>
                <TwitterIcon id="tweet-quote" style={{ backgroundColor: colores[colorActualIndex].color, fontSize: 'xx-large' }} className='icon'></TwitterIcon>
              </div>
            </a>
            <div style={{ backgroundColor: colores[colorActualIndex].color }} id='new-quote' className='new-quote-button' onClick={cambiarFrase}>
              <p>New quote</p>
            </div>

          </div>
        </div>
      </div>
      <p className='programmer'>by DeividDS</p>
    </div>
  )
}

export default App
