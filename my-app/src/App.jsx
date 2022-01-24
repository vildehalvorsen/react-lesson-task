import './sass/style.scss';
import Heading1 from "./components/Heading1";
import Heading2 from "./components/Heading2";
import Heading3 from "./components/Heading3";
import Paragraph1 from "./components/Paragraph1";
import Paragraph2 from "./components/Paragraph2";
import Footer from "./components/Footer";

function App() {
  return (
   <>
    <div className="container">
      <div>
        <Heading1 />
        <Heading2 />
        <Paragraph1 />
        <div className="card">
          <Heading3 />
          <Paragraph2 />
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
}

export default App;
