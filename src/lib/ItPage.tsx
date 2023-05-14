import '../style/main.css';
import Header from "./header";
import MainProject from "./projects";
import UxLeftImg from '../style/assets/img/Group 277130449.png';
import UxRightImg from '../style/assets/img/Group 277130450.png';
import json from '../components/lottie/animation/cruise.json';

import DartCode from '../style/assets/img/dart-code.png';
import JSCode from '../style/assets/img/JS-code.png';
import PHPtCode from '../style/assets/img/PHP-code.png';

export default function ItPage() {
    return (
        <div className="container">
            <Header />
            <div className='main'>
                <div className='container_main-1'>
                    <div className="container_banner_it">
                        <div className="frame_banner_it">
                            <img src={UxLeftImg} className='img_it_1'/>
                            <p className='p_banner_it'>IT</p>
                            <img src={UxRightImg} className='img_it_2'/>
                        </div>
                    </div>
                    <div className="sub_cont">
                        <p className='title_cont'>Проекты</p>
                        <div className="project_container">
                            { MainProject('Lottie анимация', 'Приложение, которое позволяет сократить расходы на оформление ОСАГО', 'comm', true, true, false, false, false, true, 'https://github.com/veropov/Fun-Sun-anim', JSCode, true) }
                            { MainProject('Сайт PHP, native JS', 'Разработка приложения с нуля, тестирование функционала, UX исследования', 'pet', false, true, false, false, false, true, 'https://github.com/veropov/Diagnostic_irk', PHPtCode, true) }
                            { MainProject('FitnestX', 'Оформление услуг в аэропорту, раздел обратной связи, поддержка NPS системы', 'pet', false, true, true, true, false, true, 'https://github.com/veropov/Train', DartCode, true) }
                        </div>
                    </div>
                    <div className="sub_cont">
                        <p className='title_cont'>Особенности работы</p>
                        <div className="about_project">
                            <div className="about_project_m">
                                <div className='cont_project_m'>
                                    <p className='bold_p'>BAT IT</p>
                                    <p className='info_proj_m'>Приложением Smart drive занималась небольшая команда, я работал с результатами ux исследований, сам не принимал в них участия (это делал аналитик). На основе исследований я создавал user flow, прототипы, добавлял ui библиотеки с изменениями под брендбук заказчика. Какое-то время в команде была нехватка флаттер программистов, и я самостоятельно занимался версткой ui компонентов и добавлял небольшой функционал. </p>
                                </div>
                                <div className='cont_project_m'>
                                    <p className='bold_p'>FUN&SUN</p>
                                    <p className='info_proj_m'>В компании моей основной обязанностью была работа с анимацией, однако иногда я подключался к веб-дизайну и дизайну интерфейсов. Ux исследования отдавали на аутсорс, я работал напрямую с заказчиками. Это были небольшие задачи, либо поддержка крупных проектов от партнеров. Я работал с готовыми ui решениями дизайн системы FUN&SUN, самостоятельно разработкой не занимался. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}