import { useState } from "react";
import  Lottie from "lottie-react";
import anHome from '../components/lottie/animation/anim_test.json';
import trans from '../components/lottie/animation/trans.json';

function Header() {

//Ссылка на стили (смотреть в header.scss)
const active = 'transparent';
const inActive = '#333333';
const backActive = 'header_active';
const backHover = 'header_hover';
const backInactive = 'header_inactive'

//Добавление Лотти анимации 
function lottieHome() {
    return (
        <div className="lottie_home"><Lottie loop={true} animationData={anHome}/></div>
    )
}

//Хук на измненение элелементов хэдера внутри каждого контейнера <a>, 
//Map состоит из элементов навигации
const [head, setHead] = useState({
    hover: null,
    active: null,
    objects: [{id: 1}, {id: 2}, {id: 3}, {id: 4}, {id: 5}]
})

//Функция активации каждого элемента внутри Map head по индексу
function toggleHeader(index: any) {
    return setHead({...head, active: head.objects[index] as any, hover: null})
 }

 //Функция активации каждого элемента внутри Map head по индексу
function hoverHeader(index: any) {
    if (head.objects[index] === head.active) {
        return null
    }
    else return setHead({...head, hover: head.objects[index] as any})
 }
 
//Функция дизактивации
function disToggleHeader() {
    return setHead({...head, hover: null as any})
}
 
 //Функция изменения бэкграунда иконок в каждом элементе хэдера, 
 //Возвращает стили элементов (смотреть в header.scss)
function toggleHeaderHover(index: any) {
    if (head.objects[index] === head.active) {
        return backActive
     }
    else if (head.objects[index] === head.hover) {
         return backHover
     } 
     else {
         return backInactive
     }
 }
 
//Функция добавления лотти анимации
function lottieHeaderActive(index: any) {
     if (head.objects[index] === head.hover) {
         return (
             lottieHome()
         ) 
     } else return null
 }

//Функция изменения цвета иконок, возвращает стили в header.scss 
function titleHeaderHover(index: any) {
     if (head.objects[index] === head.hover) {
         return active
     } else {
         return inActive
     }
 }


let index = [
    0,
    1,
    2,
    3,
    4
];

const titleHeader = [
    'Обо мне',
    'UX',
    'UI',
    'IT',
    'Контакты'
]

function ImgHeader(index: any) {
    if (head.objects[index] === head.active) {
        return imgBold[index]
    } else {
        return imgHeader[index]
    }
}

const imgBold = [
    (<svg width="24" height="26" viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21.6747 13.5375V25.3625H2.32471V13.5375" fill="#333333"/>
        <path d="M0.174805 12.4625V11.3875L11.9998 0.637512L23.8248 11.3875V12.4625" fill="#333333"/>
        <path d="M15.2249 12.4625H8.7749V19.9875H15.2249V12.4625Z" fill="#E2E1F7"/>
    </svg>),
    (<svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.775 17.6812L0.6875 25.3125L8.31875 24.225L24.9937 7.55C25.4187 7.125 25.4187 6.43125 24.9937 6.00625L19.9937 1.00625C19.5687 0.58125 18.875 0.58125 18.45 1.00625L1.775 17.6812Z" fill="#333333"/>
        <path d="M9.4126 16.5875L22.4938 3.50626" stroke="#E2E1F7" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M1.7749 17.6812L8.31865 24.225" stroke="#E2E1F7" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>),
    (<svg width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.56895 15.8437C6.7002 15.4062 5.66895 15.2937 4.73145 15.6C3.75645 15.9187 2.9627 16.6937 2.5877 17.65C2.2752 18.4375 2.28145 19.2937 2.2627 20.125C2.2377 20.9562 2.1627 21.8 1.71895 22.525C1.59395 22.725 1.4502 22.9125 1.2877 23.0812C1.19395 23.175 1.1002 23.2687 1.0002 23.35C0.981448 23.3687 0.837698 23.4687 0.843948 23.4812C0.850198 23.4937 0.912698 23.5125 0.925198 23.5125C0.987698 23.5375 1.0502 23.5562 1.1127 23.575C1.64395 23.7312 2.19395 23.825 2.74395 23.8812C3.58145 23.9625 4.4377 23.9312 5.2627 23.7625C6.2502 23.5625 7.1877 23.15 7.9877 22.5312C8.20645 22.3625 8.41895 22.175 8.6127 21.9812C9.4127 21.1812 9.7752 20.0062 9.6627 18.8875C9.61895 18.4562 9.50645 18.0375 9.3252 17.6562" fill="#333333"/>
        <path d="M11.0004 16.7438C17.0254 13.5 26.3066 1.43751 25.0379 0.168756C23.9504 -0.918744 11.7066 8.18126 8.46289 14.2063" fill="#333333"/>
        <path d="M4.98135 17.3687C4.53135 17.6437 4.1876 18.0687 4.0126 18.575C3.85635 19.0312 3.8501 19.525 3.8626 20.0187" stroke="#E2E1F7" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>),
    (<svg width="28" height="26" viewBox="0 0 28 26" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={titleHeaderHover(index[3])}>
        <path d="M11.2251 3.3125L1.9876 12.6812C1.8876 12.7812 1.8876 12.95 1.9876 13.0562L11.3626 22.625" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M16.85 3.3125L26.0938 12.6812C26.1938 12.7812 26.1938 12.95 26.0938 13.0562L16.7188 22.625" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>),
    (<svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.2123 23.8812L24.8811 2.15C25.1248 1.2125 24.1436 0.431247 23.2873 0.881247L1.55608 12.2187C0.799834 12.6125 0.749834 13.6812 1.46858 14.1437L17.5311 24.5375C18.1686 24.95 19.0248 24.6187 19.2123 23.8812Z" fill="#333333" stroke="#333333" stroke-width="1.3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M13.2437 22.0312L8.78125 25.375V18.6812" fill="#333333"/>
        <path d="M13.2437 22.0312L8.78125 25.375V18.6812" stroke="#333333" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M8.9375 18.6L19.9375 6.41251" stroke="#E2E1F7" stroke-width="1.3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>)
]

const imgHeader = [
    (<svg width="26" height="28" viewBox="0 0 26 28" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={titleHeaderHover(index[0])}>
        <path d="M22.6749 14.5375V26.3625H3.32495V14.5375" stroke-width="1.3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M1.17505 13.4625V12.3875L13 1.63751L24.8251 12.3875V13.4625" stroke-width="1.3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M16.2251 13.4625H9.77515V20.9875H16.2251V13.4625Z"  stroke-width="1.3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>),
    (<svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={titleHeaderHover(index[1])}>
        <path d="M1.775 17.6812L0.6875 25.3125L8.31875 24.225L24.9937 7.55C25.4187 7.125 25.4187 6.43125 24.9937 6.00625L19.9937 1.00625C19.5687 0.58125 18.875 0.58125 18.45 1.00625L1.775 17.6812Z" stroke-width="1.3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M9.4126 16.5875L22.4938 3.50626" stroke-width="1.3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M1.7749 17.6812L8.31865 24.225" stroke-width="1.3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>),
    (<svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={titleHeaderHover(index[2])}>
        <path d="M7.5687 16.8437C6.69995 16.4062 5.6687 16.2937 4.7312 16.6C3.7562 16.9187 2.96245 17.6937 2.58745 18.65C2.27495 19.4375 2.2812 20.2937 2.26245 21.125C2.23745 21.9562 2.16245 22.8 1.7187 23.525C1.5937 23.725 1.44995 23.9125 1.28745 24.0812C1.1937 24.175 1.09995 24.2687 0.999954 24.35C0.981204 24.3687 0.837454 24.4687 0.843704 24.4812C0.849954 24.4937 0.912454 24.5125 0.924954 24.5125C0.987454 24.5375 1.04995 24.5562 1.11245 24.575C1.6437 24.7312 2.1937 24.825 2.7437 24.8812C3.5812 24.9625 4.43745 24.9312 5.26245 24.7625C6.24995 24.5625 7.18745 24.15 7.98745 23.5312C8.2062 23.3625 8.4187 23.175 8.61245 22.9812C9.41245 22.1812 9.77495 21.0062 9.66245 19.8875C9.6187 19.4562 9.5062 19.0375 9.32495 18.6562" stroke-width="1.3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M8.33745 15.4999L7.5437 16.8875C7.5437 16.8875 7.8312 17.425 8.33745 17.9312C8.9062 18.5062 9.3187 18.6625 9.3187 18.6625L11 17.7437" stroke-width="1.3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M10.9999 17.7438C17.0249 14.5 26.3062 2.43751 25.0374 1.16876C23.9499 0.0812557 11.7062 9.18126 8.4624 15.2063"  stroke-width="1.3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M4.98111 18.3687C4.53111 18.6437 4.18736 19.0687 4.01236 19.575C3.85611 20.0312 3.84986 20.525 3.86236 21.0187" stroke-width="1.3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>),
    (<svg width="28" height="26" viewBox="0 0 28 26" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={titleHeaderHover(index[3])}>
        <path d="M11.2251 3.3125L1.9876 12.6812C1.8876 12.7812 1.8876 12.95 1.9876 13.0562L11.3626 22.625" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M16.85 3.3125L26.0938 12.6812C26.1938 12.7812 26.1938 12.95 26.0938 13.0562L16.7188 22.625" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>),
    (<svg width="26" height="27" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={titleHeaderHover(index[4])}>
        <path d="M19.2123 23.8812L24.8811 2.15C25.1248 1.2125 24.1436 0.431247 23.2873 0.881247L1.55608 12.2187C0.799834 12.6125 0.749834 13.6812 1.46858 14.1437L17.5311 24.5375C18.1686 24.95 19.0248 24.6187 19.2123 23.8812Z" stroke-width="1.3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M13.2437 22.0312L8.78125 25.375V18.6812" stroke-width="1.3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M8.9375 18.6L19.9375 6.41251" stroke-width="1.3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>)
]




    return (
        <div className="header">
            <div className="header_about">
                {head.objects.map((elements, index) => (
                    <div 
                        className='header_cont'
                        key={index} 
                        onClick={() => toggleHeader(index)}
                        onMouseEnter={() => hoverHeader(index)}
                        onMouseLeave={() => disToggleHeader()}
                    >
                        <div className={toggleHeaderHover(index)}>
                            <div className='svg_head'>
                                {ImgHeader(index)}
                            </div>
                            {lottieHeaderActive(index)}
                        </div>
                        <p className="header_p">
                            {titleHeader[index]}
                        </p>
                    </div>
                ))}
            </div>
        </div> 
    )
}

export default Header;