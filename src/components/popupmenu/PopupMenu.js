import './PopupMenu.css';
import { Link, SlideEffect } from "../link/Link";
import { useEffect, useRef } from 'react';

function PopupMenu(props) {
    const node = useRef();
    const pointerEvent = (e) => {
        if(!node.current.contains(e.target)) {
            props.onDismiss();
            return;
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', pointerEvent);
        document.addEventListener('scroll', pointerEvent);
    
        return () => {
            document.removeEventListener('mousedown', pointerEvent);
            document.removeEventListener('scroll', pointerEvent);
        }
    });

    return (
        <div ref={node} className={'PopupMenu' + (props.isVisible ? ' Show' : '')}>
            { props.menuItems !== null ? 
                props.menuItems.map((item, index) => 
                    <Link 
                        key={index} 
                        className='Item' 
                        to={item.to}
                        onClick={() => {
                            if (item.onClick)
                                item.onClick(); 
                            props.onDismiss()}}>
                        <SlideEffect height='1rem'>{item.title}</SlideEffect>
                    </Link>
                ) : null}
        </div>
    );
}

export { PopupMenu };