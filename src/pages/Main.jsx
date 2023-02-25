// * collapsed imports
import NavBar from '../components/NavBar/NavBar.jsx'
import TellMeAbtYrslf from '../components/TellMeAbtYrslf/TellMeAbtYrslf.jsx'
import Skills from '../Skills/Skills.jsx'
import ContactMe from '../pages/ContactMe.jsx'

const Main = () => {
  return (
    <>
      {<NavBar />}
      {<TellMeAbtYrslf />}
      {<ContactMe />}
      {<Skills />}
    </>
  );
}

export default Main;