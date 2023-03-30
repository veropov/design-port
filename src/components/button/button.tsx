export class Button {
    title?: String;
    link?: String;
    width?: boolean;

    constructor(title: String, link: String, width: boolean) {
        this.title = title;
        this.link = link;
        this.width = width;
    }

    //Обычная ширина кнопки
    widthDefault = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '22px 36px',
        background: '#5C59FF',
        borderRadius: '99px'
    }

    //Ширина кнопки зависит от родителя
    widthInherit = {
        display: 'inline-block',
        alignItems: 'center',
        background: '#5552FF',
        borderRadius: '16px'
    }

    p = {
        fontWeight: '700',
        fontSize: '18px',
        color: 'white'
    }

    a = {
        textDecoration: 'none'
    }

    Button() {
        return (
            <a href={`${this.link}`} style={this.a}>
                <div style={this.width == true ? this.widthDefault : this.widthInherit}>
                    <p style={this.p}>{this.title}</p>
                
                </div>
            </a>
        )
    }
}