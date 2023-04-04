import { useEffect, useState } from "react";
import Comm from '../project area/commer.jpg';
import Lottie from "lottie-react";
import trans from './mm.json';


    function ProjArea() {

    const title = [
        'Коммерческие проекты',
        'Пет-проекты'
    ]

    const subTitle = [
        'B2b сервисы для агентов (FUN&SUN). Кроссплатформенные приложения для страхования (BAT IT). UI-компоненты на JS, dart',
        'Альтернативный user flow VK, Сбер, МТС. CJM, глубинное интервью. Разработка приложения для фитнеса и сайта мед услуг.'
    ]

    const image = [
        Comm,
        Comm
    ]

    const [proj, setProj] = useState({
        active: null,
        objects: [{id: 1}, {id: 2}]
    })
    
    function toggleHover(index: any) {
        return setProj({...proj, active: proj.objects[index] as any})
    }

    function toggleDisHover() {
        return setProj({...proj, active: null})
    }

    function lottieActive(index: any) {
        if (proj.objects[index] === proj.active) {
            return LottieProj(index)
        }
    }
    
    function LottieProj(index: any) {
        return (
            <div className="lottie_proj">
                <Lottie 
                    autoPlay={true}
                    loop={false} 
                    animationData={trans}
                    
                    
                />
            </div>
        )
    }

        return (
            <div className="portfolio_main">
                {proj.objects.map((elem, index) => (
                <div 
                    className="proj_area" 
                    onMouseEnter={() => toggleHover(index)}
                    onMouseLeave={() => toggleDisHover()}

                >
                    <div className="proj_cont">
                        <p className="title_proj">{title[index]}</p>
                        <p className="subTitle_proj">{subTitle[index]}</p>
                    </div>
                    <img src={`${image[index]}`}/>
                    {lottieActive(index)}
                </div>
                ))}
            </div>
        )
    }

    export default ProjArea;





// 'Пет-проекты',
// 'Альтернативный user flow VK, Сбер, МТС. CJM, глубинное интервью. Разработка приложения для фитнеса и сайта мед услуг.',
// Comm

// 'Коммерческие проекты',
// 'B2b сервисы для агентов (FUN&SUN). Кроссплатформенные приложения для страхования (BAT IT). UI-компоненты на JS, dart',
// Comm