import '../css/app.css';
import github from '../images/github-mark.png';

function Footer() {
    return (
        <div className="footer">
            <img src={github} alt='github-logo' className='github-logo'/>
            <p>Made by Daniel Kim</p>
        </div>
    );
}

export default Footer;