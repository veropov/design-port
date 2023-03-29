import {Button} from '../button/button';

const button = new Button(
    'Посмотреть работы',
    '',
    true
)

export class Banner {
    title: String;
    subTitle?: String;
    image?: String;

    constructor(title: String, subTitle: String, image: String) {
        this.title = title;
        this.subTitle = subTitle;
        this.image = image;
    }

    p = {
        fontWeight: '700',
        fontSize: '48px',
        lineHeight: '110%',
    }

    BannerDots() {
        return (
            <div className="container_banner">
                <div className="frame_banner">
                    <p  style={this.p}>{this.title}<br />{this.subTitle}</p>
                    { button.Button() }
                </div>
                <img src={`${this.image}`}/>
            </div>
        )
    }
}