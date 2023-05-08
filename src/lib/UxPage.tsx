import { Banner } from '../components/banner/banner';
import '../style/main.css';
import Header from "./header";
import MainProject from "./projects";

const banner = new Banner(
    'Вячеслав Еропов',
    'Дизайнер интерфейсов',
    ''
)


export default function UxPage() {
    return (
        <div className="container">
            <Header />
            <div className="project_container">
                    { MainProject('Smart drive', 'Приложение, которое позволяет сократить расходы на оформление ОСАГО', 'comm', true, true, true, true, true, true) }
                    { MainProject('Smart drive', 'Приложение, которое позволяет сократить расходы на оформление ОСАГО', 'comm', false, true, false, false, true, true) }
                    { MainProject('Smart drive', 'Приложение, которое позволяет сократить расходы на оформление ОСАГО', 'comm', true, true, true, true, false, true) }
            </div>
        </div>
    )
}