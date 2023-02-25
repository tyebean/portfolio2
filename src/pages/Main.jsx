// * collapsed imports
import NavBar from '../components/NavBar/NavBar.jsx'
import TellMeAbtYrslf from '../components/TellMeAbtYrslf/TellMeAbtYrslf.jsx'
import Skills from '../Skills/Skills.jsx'
import Projects from '../components/Projects/Projects.jsx'

const Main = () => {
  return (
    <>
      {<NavBar />}
      {<TellMeAbtYrslf />}
      {<Skills />}
      {<Projects />}
    </>
  );
}

export default Main;