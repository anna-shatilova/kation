import sample from './../../videoplayback/IMG_1209.MP4';
import './slider.css'


  export const Slider = () => {

    let arrow = "------>"

    return (
          <div className='container'>
              <video className='videoTag' autoPlay loop muted>
                  <source src={sample} type='video/MP4' />
              </video>
              <div className='overlay-elements'>
                <h1>ГАЛЬВАНИЧЕСКОЕ ПОКРЫТИЕ <br></br>
                ОТ 49 РУБ ЗА ДМ2</h1>
                <p>Нанесем покрытие. Проведем шлифовку, наплавку, полировку и гарцовку. Проконсультируем бесплатно.</p>
                <a>Заказать консультацию {arrow}</a>
              </div>
          </div>
    )
  }