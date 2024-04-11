import "./mainpage"
import { Slider } from "../../components/slider/slider"


export const Mainpage = () => {
    return (
        <div>
            <div className="wrapper">
            {/* <button className="feedback-btn">Заказать консультацию</button> */}
            <Slider></Slider>
            </div>
        </div>
    )
}