import logo from '../assets/images/logo.svg';
import main from '../assets/images/main.svg';

const Landing = () => {
  return (
    <main>
      <nav>
        <img src={logo} alt='jobster logo' className='logo' />
      </nav>
      <div className='container'>
        {/* info */}
        <div className='info'>
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Jean shorts mumblecore pitchfork activated charcoal street art
            hammock chartreuse bicycle rights snackwave freegan before they sold
            out salvia gochujang raw denim four loko.
          </p>
          <button className='btn btn-hero'>Login/Register</button>
        </div>
        <img src={main} alt='job hunt' className='img main-img' />
      </div>
    </main>
  );
};

export default Landing;
