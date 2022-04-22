
import './App.css';
import './Header.js';
import './Footer.js';
import './Gallery';
import './Sidecontent';
import './Content';

import Gallery from './Gallery.js';
import Sidecontent from './Sidecontent.js';
import Content from './Content.js';

function App() {
  return (
    <div>
   <div>
    <Header />
    <Footer />
    </div>
    
    <div className='rowc'>
     <Gallery />
     <Sidecontent />
    </div>
    <div>
    <Content />
    </div>
    
    </div>
  );
}

export default App;
