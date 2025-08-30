import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Education from './components/Education/Education';
import Achievements from './components/Achievements/Achievements';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
	return (
		<div className='h-screen bg-gray-900 text-white overflow-x-hidden'>
			<Hero />
			<About />
			<Education />
			<Achievements />
			<Projects />
			<Skills />
			<Contact />
			<Footer />
		</div>
	);
}

export default App;
