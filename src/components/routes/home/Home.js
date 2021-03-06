import { SocialRow } from '../../socialrow/SocialRow';
import { Hamburger } from '../../hamburger/Hamburger';

import './Home.css';

function Home(props) {
    return (
        <section id='home'>
            <div className='Content'>
                <hgroup>
                    <h4>The One. The Only. The Burger.</h4>
                    <h1>Taste The Experience.</h1>
                    <SocialRow />
                </hgroup>
                <Hamburger />
            </div>
        </section>
    );
}

export { Home };