import '../style/main.css';
import { ClassArea } from '../components/job area/job-area';

import Avatar from '../style/assets/img/IeOXLE49ZsTul0kCRk8KHfn4JjhEKUii43Suk1bYoWxjHHt7-alhvY5yPZX4W6JSsU-dK6p3.jpg';
import FunSun from '../style/assets/fun sun.svg';
import BatIt from '../style/assets/bat it 1.svg';
import NovaDacha from '../style/assets/nova dacha 1.svg';
import Figma from '../style/assets/figma.svg';
import AfterEffect from '../style/assets/after.svg';
import Illustrator from '../style/assets/ai.svg';
import Cinema from '../style/assets/cinema.svg';
import Html from '../style/assets/html.svg';
import Css from '../style/assets/css.svg';
import Js from '../style/assets/js.svg';
import Flutter from '../style/assets/flutter.svg';


function HomePage() {

const funJob = new ClassArea(
    /* title */ 'FUN&SUN', 
    /* sub Title */ 'Моушен Дизайнер', 
    /* date Start */ 'Октябрь 2021',
    /* date End */ 'Настоящее время', 
    /* image */ FunSun
);

const batJob = new ClassArea(
    /* title */ 'BAT IT', 
    /* sub Title */ 'UX UI дизайнер', 
    /* date Start */ 'Ноябрь 2020',
    /* date End */ 'Октябрь 2021', 
    /* image */ BatIt
);

const novaJob = new ClassArea(
    /* title */ 'Nova Dacha', 
    /* sub Title */ 'Графич. дизайнер', 
    /* date Start */ 'Март 2020',
    /* date End */ 'Ноябрь 2020', 
    /* image */ NovaDacha
);

  return (
    <div className="container">
      <div className="header">
          <a className="header_link" href=""><p className="header_logo">v.eropov</p></a>
          <div className="header_about">
              <a className="header_link" href=""><p className="header_p"><input name="about" className="radio_header" type="radio" value="about_me" checked/>Обо мне</p></a>
              <a className="header_link" href=""><p className="header_p"><input name="about" className="radio_header" type="radio" value="about_proj"/>Проекты</p></a>
              <a className="header_link" href=""><p className="header_p"><input name="about" className="radio_header" type="radio" value="about_cont"/>Контакты</p></a>
          </div>
      </div>
      <div className="main">
          <p className="title_main">Вячеслав Еропов<br />Дизайнер интерфейсов</p>
          <div className="container_main-1">
              <div className="about_me">
                  <div className="person_main">
                      <div className="container_person-inf">
                          <div className="photo">
                              <img className="img_person" src={Avatar}/>
                          </div>
                          <div className="container_person-2">
                              <div className="content_person">
                                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M11.9951 16.6768V14.1398" stroke="#6C82F3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                      <path fill-rule="evenodd" clip-rule="evenodd" d="M18.1899 5.3302C19.8799 5.3302 21.2399 6.7002 21.2399 8.3902V11.8302C18.7799 13.2702 15.5299 14.1402 11.9899 14.1402C8.44988 14.1402 5.20988 13.2702 2.74988 11.8302V8.3802C2.74988 6.6902 4.11988 5.3302 5.80988 5.3302H18.1899Z" stroke="#6C82F3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                      <path d="M15.4951 5.3258V4.9598C15.4951 3.7398 14.5051 2.7498 13.2851 2.7498H10.7051C9.48506 2.7498 8.49506 3.7398 8.49506 4.9598V5.3258" stroke="#6C82F3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                      <path d="M2.77435 15.483L2.96335 17.992C3.09135 19.683 4.50035 20.99 6.19535 20.99H17.7944C19.4894 20.99 20.8984 19.683 21.0264 17.992L21.2154 15.483" stroke="#6C82F3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                  </svg>
                                  <p>В активном поиске работы</p>
                              </div>
                              <div className="content_person">
                                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9847 15.3462C8.11713 15.3462 4.81427 15.931 4.81427 18.2729C4.81427 20.6148 8.09617 21.2205 11.9847 21.2205C15.8524 21.2205 19.1543 20.6348 19.1543 18.2938C19.1543 15.9529 15.8733 15.3462 11.9847 15.3462Z" stroke="#6C82F3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                      <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9848 12.0059C14.5229 12.0059 16.58 9.94782 16.58 7.40972C16.58 4.87163 14.5229 2.81448 11.9848 2.81448C9.44667 2.81448 7.38858 4.87163 7.38858 7.40972C7.38001 9.93925 9.42382 11.9973 11.9524 12.0059H11.9848Z" stroke="#6C82F3" stroke-width="1.42857" stroke-linecap="round" stroke-linejoin="round"/>
                                  </svg>                                        
                                  <p>25 лет, не женат</p>
                              </div>
                              <div className="content_person">
                                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path fill-rule="evenodd" clip-rule="evenodd" d="M14.5 10.5005C14.5 9.11924 13.3808 8 12.0005 8C10.6192 8 9.5 9.11924 9.5 10.5005C9.5 11.8808 10.6192 13 12.0005 13C13.3808 13 14.5 11.8808 14.5 10.5005Z" stroke="#6C82F3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                      <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9995 21C10.801 21 4.5 15.8984 4.5 10.5633C4.5 6.38664 7.8571 3 11.9995 3C16.1419 3 19.5 6.38664 19.5 10.5633C19.5 15.8984 13.198 21 11.9995 21Z" stroke="#6C82F3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                  </svg>                                        
                                  <p>Иркутск, удаленная работа</p>
                              </div>
                              <div className="content_person">
                                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M17.9026 8.85114L13.4593 12.4642C12.6198 13.1302 11.4387 13.1302 10.5992 12.4642L6.11841 8.85114" stroke="#6C82F3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                      <path fill-rule="evenodd" clip-rule="evenodd" d="M16.9089 21C19.9502 21.0084 22 18.5095 22 15.4384V8.57001C22 5.49883 19.9502 3 16.9089 3H7.09114C4.04979 3 2 5.49883 2 8.57001V15.4384C2 18.5095 4.04979 21.0084 7.09114 21H16.9089Z" stroke="#6C82F3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                  </svg>                                        
                                  <p>vyacheslav.eropov@yandex.ru</p>
                              </div>
                          </div>
                      </div>
                        <div className="container_person-job">
                            { funJob.JobArea() }
                            { batJob.JobArea() }
                            { novaJob.JobArea() }
                        </div>
                  </div>
                  <div className="info_main">
                      <div className="container_info-1">
                          <p className="info_p">Привет! Мой общий опыт работы дизайнером 3 года. Один год на позиции дизайнера интерфейсов. Я люблю работать в команде, 
                              не боюсь сложных задач. Слежу за тенденциями в сфере дизайна. <br /> <a className ="link" href="">Здесь</a> я обновил свой пет-проект с Material design 2 до Material You.</p>
                          <p className="info_p">Также я интересуюсь front-end и мобильной разработкой. Этот сайт написан мной с использованием современных веб-технологий: Flexbox, SASS, React.js, lottie.js. В команде BAT IT проекты создавались 
                              на flutter, я принимал участие в написании библиотек.</p>
                      </div>
                      <div className="container_info-2">
                          <p className="bold_p">Мои навыки</p>
                          <div className="container_info-3">
                              <div className="container_info-dsgn">
                                  <div className="prog">
                                    <img src={Figma} />                                          
                                  </div>
                                  <div className="prog">
                                    <img src={AfterEffect}/>
                                  </div>
                                  <div className="prog">
                                    <img src={Illustrator}/>
                                  </div>
                                  <div className="prog">
                                    <img src={Cinema}/>
                                  </div>
                              </div>
                              <div className="container_info-dsgn-2">
                                <img src={Html}/>
                                <img src={Css}/>
                                <img src={Js}/>
                                <img src={Flutter}/>
                              </div>
                              <div className="container_info-attr">
                                  <p className="info_p">Прототипирование</p>
                                  <p className="info_p">CJM & Persona</p>
                                  <p className="info_p">User flow</p>
                                  <p className="info_p">Дизайн системы</p>
                              </div>
                              <div className="container_info-attr">
                                  <p className="info_p">Креативность</p>
                                  <p className="info_p">Стрессоустойчивость</p>
                                  <p className="info_p">Работа в команде</p>
                                  <p className="info_p">Отзывчивость</p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="portfolio_main">
              </div>
          </div>
      </div>
  </div>
  );
}

export default HomePage;
