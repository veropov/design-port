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
        padding: '20px 36px',
        background: '#6C82F3',
        borderRadius: '16px'
    }

    //Ширина кнопки зависит от родителя
    widthInherit = {
        display: 'inline-block',
        alignItems: 'center',
        background: '#6C82F3',
        borderRadius: '16px'
    }

    p = {
        fontWeight: '700',
        fontSize: '16px',
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