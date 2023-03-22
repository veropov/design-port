export class PrArea {
    title: String;
    subTitle?: String;
    image?: String;

    constructor(title: String, subTitle: String, image: String) {
        this.title = title;
        this.subTitle = subTitle;
        this.image = image;
    }

    ProjArea() {
        return (
            <div className="proj_area">
                <div className="proj_cont">
                    <p className="title_proj">{this.title}</p>
                    <p className="subTitle_proj">{this.subTitle}</p>
                </div>
                <img src={`${this.image}`}/>
            </div>
        )
    }
}