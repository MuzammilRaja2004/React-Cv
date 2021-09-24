import '../Styling/style.css';

// Material Ui Icons
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import LanguageIcon from '@material-ui/icons/Language';


const Contact = () => {
    return (
        <div className="contact-dev">
            <h1 className="cont-head">Contact</h1>
            <div className="borders"></div>

            <p className="cont-pera-1 pears"> <span className="mat-icons"><LocationOnIcon fontSize="small"/></span>12 Street City Country</p>

            <p className="cont-pera-2 pears"> <span className="mat-icons"><PhoneIcon fontSize="small"/></span>111 111 111 11</p>

            <p className="cont-pera-3 pears"><span className="mat-icons"><EmailIcon fontSize="small"/></span> Myname@gmail.com</p>

            <p className="cont-pera-4 pears"><span className="mat-icons"><LanguageIcon fontSize="small"/></span>www.myportfolio.com</p>
        </div>
    )
}
export default Contact;

