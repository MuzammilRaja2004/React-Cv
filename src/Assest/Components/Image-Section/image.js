import myimg from '../../Images/pic1.jpg'
import '../Styling/style.css';
function Image() {
    return (
        <div className="image-edit">
            <img src={myimg} className="image-in"/>
        </div>
    )
}
export default Image