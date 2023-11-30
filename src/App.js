import styles from './App.module.css';
import 'bootstrap/dist/css/bootstrap.css';
import Player from "./components/Player";

function App() {
  // const [flvURL, setFlvURL] = useState('https://flvplayer.js.org/assets/video/weathering-with-you.flv');
  // const [flvURL, setFlvURL] = useState('http://sin3.nguontructiep.site/MUTV?token=LX5KV');

  return (
    <>
      <Header />

      <Body>
        <Player />
      </Body>

      <Footer />
    </>
  );
}

function Header() {
  return (
    <header className={styles["header-wrapper"]}>
      <div className="container">
        <div className="row-fluid">
          <div className={styles["site-name"]}>
            <img src="https://blue2digital.com/Images/b2dheadline.png" className="headlineup" alt="logo" />
            <h1 className={styles.b2dheadline}><p>Blue2Digital</p></h1>
            <p className={styles.genuinelydesigned}>GENUINELY DESIGNED FOR THE COMMON PEOPLE</p>
          </div>
        </div>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer>
      <div className={styles['site-footer']}>
        <div className="container">
          <div className="row">
            <div className="col-2">
              <div className={styles.block}>
                <h5>About</h5>
                <ul>
                  <li><a href="https://blue2digital.com">Home</a></li>
                  <li><a href="https://blue2digital.com/about_b2d.html">Who We Are</a></li>
                </ul>
              </div>
            </div>
            <div className="col-2">
              <div className={styles.block}>
                <h5>Software</h5>
                <ul>
                  <li><a href="https://soundsofsoftware.com/services.html">Our Services</a></li>
                  <li><a href="https://soundsofsoftware.com/apps.html">Web Apps &amp; Tools</a></li>
                  <li><a href="https://soundsofsoftware.com/wm.html">Embedding Watermarks</a></li>
                </ul>
              </div>
            </div>
            <div className="col-2">
              <div className={styles.block}>
                <h5>Articles</h5>
                <ul>
                  <li><a href="https://blue2digital.com/music-business-scammers.html">Legal Issues</a></li>
                  <li><a href="https://blue2digital.com/wm/index.html">Digital Content Protection</a></li>
                  <li><a href="https://blue2digital.com/signatures.html">Digital &amp; e-Signatures</a></li>
                </ul>
              </div>
            </div>
            <div className="col-2">
              <div className={styles.block}>
                <h5>Links</h5>
                <ul>
                  <li><a href="https://blue2digital.com/terms_of_use.html">Terms And Conditions</a></li>
                  <li><a href="https://blue2digital.com/privacy.html">Privacy Policy</a></li>
                </ul>
              </div>
            </div>
            <div className="col-2">
              <div className={styles.block}>
                <h5>Contact</h5>
                <ul>
                  <li><a href="https://blue2digital.com/contact.html">Send Us A Message</a></li>
                </ul>
              </div>
            </div>
            <div className="col-2">
              <div className={styles.block}>
                <h5>Social</h5>
                <ul>
                  <li><a href="https://blue2digital.com/fb.html">
                    <img src="https://blue2digital.com/Images/logo-facebook.png" className="ah" style={{ width: "18px", height: "18px" }} alt="Facebook Logo" />
                    &nbsp;&nbsp;&nbsp;Facebook
                  </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function Body({ children }) {
  return (
    <main className="contaier" id="container" >
      <header className="container bg-white"
        style={{ 'borderTopLeftRadius': '10px', 'borderTopRightRadius': '20px', 'border': '1px solid steelblue', padding: 0 }}
      >
        <div className="row-fluid">
          <div style={{ 'height': '35px', 'background': 'steelblue', 'borderTopLeftRadius': '10px', 'borderTopRightRadius': '20px', }}></div>
          <div className={styles['main-caption']}>
            <h1 style={{ color: 'black', width: '80%', marginLeft: '9.5%' }}>
              <b>FREE LIVE STREAM FLV PLAYER</b>
            </h1>
          </div>
        </div>
      </header>
      <section className="container" style={{ 'background': 'white', 'marginTop': '-5px', 'border': '1px solid steelblue' }}>
        <div style={{ margin: "10px 5px 10px 0" }}>
          <div>
            {children}
          </div>
        </div>
      </section>
      <footer className={`container`} style={{ 'borderBottomLeftRadius': '10px', 'borderBottomRightRadius': '20px', 'border': '1px solid steelblue', paddingBottom: "10px" }}>
        <div style={{ height: '26px' }}></div>
        <div style={{ height: '2px', background: 'steelblue', width: '100%' }}></div>
        <div style={{ height: '22px' }}></div>
        <div style={{ textDecoration: 'underline', fontWeight: 'bold', lineHeight: '23px', textTransform: 'uppercase', color: '#003466' }}>
          Get or set the live stream upon every desktop and mobile device
        </div>
        <div style={{ height: "14px" }}></div>
        Live Stream FLV Player is a web app for watching live broadcasts designed to work in all operating systems and on all desktop and mobile devices.
        <div style={{ height: "14px" }}></div>
        If you want to set up your own live streaming platform and broadcast live video content worldwide, please review the <a href="faq.html">frequently asked questions</a> on this matter.
        <div style={{ height: "14px" }}></div>
        If you have any further questions, feel free to <a href="../contact.html">send us a message</a>.
      </footer>
    </main >
  );
}

export default App;
