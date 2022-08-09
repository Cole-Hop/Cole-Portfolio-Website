import {Link} from 'react-router-dom';
import './index.scss';

const Home = () => {
    return (
        <div className= "container home-page">
            <div className= "text-zone">
                <h1>Hi, <br /> I'm Cole
                <br />
                I like computers!
                </h1>
                <h2> Taco eater, train watcher, doomsday preper</h2>
                <Link to="/contact" className="flat-button">CONTACT ME</Link>
            </div>
        </div>
    )
}

export default Home