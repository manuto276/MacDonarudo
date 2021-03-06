import './SocialRow.css'

import { Facebook, Instagram, Twitter } from '../icon/Icon';
import { Link, SlideEffect } from '../link/Link';

function SocialRow(props) {
    return (
        <div id={props.id} className={'SocialRow' + (props.className ? ' ' + props.className : '')}>
            <Link>
                <SlideEffect height='1.5rem'>
                    <Facebook />
                </SlideEffect>
            </Link>
            <Link>
                <SlideEffect height='1.5rem'>
                    <Instagram />
                </SlideEffect>
            </Link>
            <Link>
                <SlideEffect height='1.5rem'>
                    <Twitter />
                </SlideEffect>
            </Link>
        </div>
    );
}

export { SocialRow };