import '../style/main.css';
import Header from "./header";
import MainProject from "./projects";
import UxLeftImg from '../style/assets/img/Group 277130446.png';
import UxRightImg from '../style/assets/img/Group 277130445.png';


export default function UxPage() {
    return (
        <div className="container">
            <Header />
            <div className='main'>
                <div className='container_main-1'>
                    <div className="container_banner_ux">
                        <div className="frame_banner_ux">
                            <img src={UxLeftImg} className='img_ux_1'/>
                            <p className='p_banner_ux'>UX<br/> design</p>
                            <img src={UxRightImg} className='img_ux_2'/>
                        </div>
                    </div>
                    <div className="sub_cont">
                        <p className='title_cont'>Особенности работы</p>
                        <div className="about_project">
                            <div className="about_project_m">
                                <div className='cont_project_m'>
                                    <p className='bold_p'>BAT IT</p>
                                    <p className='info_proj_m'>Приложением Smart drive занималась небольшая команда, я работал с результатами ux исследований, сам не принимал в них участия (это делал аналитик). На основе исследований я создавал user flow, прототипы, добавлял ui библиотеки с изменениями под брендбук заказчика. Какое-то время в команде была нехватка флаттер программистов, и я самостоятельно занимался версткой ui компонентов. </p>
                                </div>
                                <div className='cont_project_m'>
                                    <p className='bold_p'>FUN&SUN</p>
                                    <p className='info_proj_m'>В компании я большую часть времени работал с анимацией, иногда подключаясь к веб-дизайну (банеры, открытки, иконки) и дизайну интерфейсов. Задачи были небольшие, однако их было достаточно много. Ux исследования отдавали на аутсорс, я работал с готовыми ui библиотеками. По части программирования я создавал прелоадеры и анимированные баннеры, используя Lottie библиотеку.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sub_cont">
                        <p className='title_cont'>Проекты</p>
                        <div className="project_container">
                            { MainProject('Smart drive', 'Приложение, которое позволяет сократить расходы на оформление ОСАГО', 'comm', true, true, true, true, true, true, 'https://www.figma.com/file/KqSP2KCkcgf5dmwGOheM7M/Smart-drive?type=design&node-id=293%3A564&t=jN8krBkmCu9Fss5J-1') }
                            { MainProject('FitnestX', 'Разработка приложения с нуля, тестирование функционала, UX исследования', 'comm', false, true, false, false, true, true, 'https://www.figma.com/file/9mZkv8cZ3mMbVoNdgDGm6k/Port?type=design&node-id=0%3A1&t=mknrEsQoNr8OEwyb-1') }
                            { MainProject('FUN&SUN project', 'Оформление услуг в аэропорту, раздел обратной связи, поддержка NPS системы', 'comm', true, true, true, true, true, false, 'https://www.figma.com/file/SQvge574qM6tTgjtcWM1GJ/FUN%26SUN-projects?type=design&node-id=0%3A1&t=1YttjT2b5n2LNMkz-1') }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}