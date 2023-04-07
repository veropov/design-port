import { useState } from "react"
import anHome from '../components/lottie/animation/anim_test.json';
import penHome from '../components/lottie/animation/pencil_anim.json';

import Lo from '../style/assets/img/IeOXLE49ZsTul0kCRk8KHfn4JjhEKUii43Suk1bYoWxjHHt7-alhvY5yPZX4W6JSsU-dK6p3.jpg'

export default function MainProject() {

    const activeProj = 'transparent';
    const inActiveProj = '#333333';

    let index = [
        0,
        1,
        2
    ]

    const animBox = [
        anHome,
        penHome,
    ]

    const [project, setProject] = useState({
        hover: null,
        active: null,
        objects: [{id: 1}, {id: 2}, {id: 3}]
    })

    function HoverProject(index: any) {
        return setProject({...project, hover: project.objects[index] as any})
    }

    function CleanProject() {
        return setProject({...project, hover: null as any})
    }

    function ActiveProject(index: any) {
        return setProject({...project, active: project.objects[index] as any})
    }

    function PrHover(index: any) {
        if (project.objects[index] === project.hover) {
            return activeProj
        } else {
            return inActiveProj
        }
    }

    const svgProj = [
        (<svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={PrHover(index[1])}>
        <path d="M1.775 17.6812L0.6875 25.3125L8.31875 24.225L24.9937 7.55C25.4187 7.125 25.4187 6.43125 24.9937 6.00625L19.9937 1.00625C19.5687 0.58125 18.875 0.58125 18.45 1.00625L1.775 17.6812Z" stroke-width="1.3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M9.4126 16.5875L22.4938 3.50626" stroke-width="1.3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M1.7749 17.6812L8.31865 24.225" stroke-width="1.3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>),
        (<svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={PrHover(index[2])}>
            <path d="M7.5687 16.8437C6.69995 16.4062 5.6687 16.2937 4.7312 16.6C3.7562 16.9187 2.96245 17.6937 2.58745 18.65C2.27495 19.4375 2.2812 20.2937 2.26245 21.125C2.23745 21.9562 2.16245 22.8 1.7187 23.525C1.5937 23.725 1.44995 23.9125 1.28745 24.0812C1.1937 24.175 1.09995 24.2687 0.999954 24.35C0.981204 24.3687 0.837454 24.4687 0.843704 24.4812C0.849954 24.4937 0.912454 24.5125 0.924954 24.5125C0.987454 24.5375 1.04995 24.5562 1.11245 24.575C1.6437 24.7312 2.1937 24.825 2.7437 24.8812C3.5812 24.9625 4.43745 24.9312 5.26245 24.7625C6.24995 24.5625 7.18745 24.15 7.98745 23.5312C8.2062 23.3625 8.4187 23.175 8.61245 22.9812C9.41245 22.1812 9.77495 21.0062 9.66245 19.8875C9.6187 19.4562 9.5062 19.0375 9.32495 18.6562" stroke-width="1.3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M8.33745 15.4999L7.5437 16.8875C7.5437 16.8875 7.8312 17.425 8.33745 17.9312C8.9062 18.5062 9.3187 18.6625 9.3187 18.6625L11 17.7437" stroke-width="1.3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M10.9999 17.7438C17.0249 14.5 26.3062 2.43751 25.0374 1.16876C23.9499 0.0812557 11.7062 9.18126 8.4624 15.2063"  stroke-width="1.3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M4.98111 18.3687C4.53111 18.6437 4.18736 19.0687 4.01236 19.575C3.85611 20.0312 3.84986 20.525 3.86236 21.0187" stroke-width="1.3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>),
        (<svg width="28" height="26" viewBox="0 0 28 26" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={PrHover(index[3])}>
            <path d="M11.2251 3.3125L1.9876 12.6812C1.8876 12.7812 1.8876 12.95 1.9876 13.0562L11.3626 22.625" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M16.85 3.3125L26.0938 12.6812C26.1938 12.7812 26.1938 12.95 26.0938 13.0562L16.7188 22.625" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>),
    ]

    const titleProj = [
        'UX',
        'UI',
        'IT'
    ]

    return (
        <div className="project_container">
            <div className="cont_head_project">
                <div className="head_project">
                    <div className="title_project">
                        <p>Smart drive</p>
                        <div className="type_project">comm</div>
                    </div>
                    <p className="proj_subTitle">Программа вождения, которая позволяет сократить расходы на ОСАГО</p>
                </div>
                <div className="foot_project">
                    <div className="img_project">
                        <img src={Lo}/>
                    </div>
                    <div className="feat_main">
                    {project.objects.map((obj, index) => 
                        <div className="feat_container">
                            <div className="feat_project">
                                <div className="feat">
                                    { svgProj[index] }
                                    <p>{ titleProj[index] }</p>
                                </div>
                            </div>
                        </div>
                    )}
                    </div>
                </div>
            </div>
            <div className="cont_head_project">
                <div className="head_project">
                    <div className="title_project">
                        <p>Smart drive</p>
                        <div className="type_project">comm</div>
                    </div>
                    <p className="proj_subTitle">B2b сервисы для агентов (FUN&SUN). Кроссплатформенные приложения для страхования (BAT IT). UI-компоненты на JS, dart</p>
                </div>
                <div className="foot_project">
                    <div className="img_project">
                        <img src={Lo}/>
                    </div>
                    <div className="feat_main">
                    {project.objects.map((obj, index) => 
                        <div className="feat_container">
                            <div className="feat_project">
                                <div className="feat">
                                    { svgProj[index] }
                                    <p>{ titleProj[index] }</p>
                                </div>
                            </div>
                        </div>
                    )}
                    </div>
                </div>
            </div>
            <div className="cont_head_project">
                <div className="head_project">
                    <div className="title_project">
                        <p>Smart drive</p>
                        <div className="type_project">comm</div>
                    </div>
                    <p className="proj_subTitle">Программа вождения, которая позволяет сократить расходы на ОСАГО</p>
                </div>
                <div className="foot_project">
                    <div className="img_project">
                        <img src={Lo}/>
                    </div>
                    <div className="feat_main">
                    {project.objects.map((obj, index) => 
                        <div className="feat_container">
                            <div className="feat_project">
                                <div className="feat">
                                    { svgProj[index] }
                                    <p>{ titleProj[index] }</p>
                                </div>
                            </div>
                        </div>
                    )}
                    </div>
                </div>
            </div>
            <div className="cont_head_project">
                <div className="head_project">
                    <div className="title_project">
                        <p>Smart drive</p>
                        <div className="type_project">comm</div>
                    </div>
                    <p className="proj_subTitle">Программа вождения, которая позволяет сократить расходы на ОСАГО</p>
                </div>
                <div className="foot_project">
                    <div className="img_project">
                        <img src={Lo}/>
                    </div>
                    <div className="feat_main">
                    {project.objects.map((obj, index) => 
                        <div className="feat_container">
                            <div className="feat_project">
                                <div className="feat">
                                    { svgProj[index] }
                                    <p>{ titleProj[index] }</p>
                                </div>
                            </div>
                        </div>
                    )}
                    </div>
                </div>
            </div>
        </div>
    )
}