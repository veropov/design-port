import {Button} from '../button/button';


const button = new Button(
    'Посмотреть работы',
    'title_button_banner',
    'button_banner',
)

export class Banner {
    title: String;
    subTitle?: String;
    image?: String

    constructor(title: String, subTitle: String, image: String) {
        this.title = title;
        this.subTitle = subTitle;
        this.image = image;
    }

    BannerDots() {
        return (
            <div className="container_banner">
                <div className="frame_banner">
                    <p className='p_banner'>{this.title}<br />{this.subTitle}</p>
                    { button.Button() }
                </div>
                <img src={`${this.image}`}/>
            </div>
        )
    }
}