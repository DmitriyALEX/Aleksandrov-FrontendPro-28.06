import './styles.css';
import main_img from '../../img/main_img.png';

export default function Main() {
    return (
        <div className="main">
            <div>
                <p className="title">Main side</p>
                <img src={main_img} alt="main_img" className="img"/>
            </div>
        </div>
    )
}