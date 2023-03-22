export class InArea {
    title: String;
    image!: String;

    constructor(title: String, image: String) {
        this.title = title;
        this.image = image;
    }

    InfoArea() {
        return (
            <div className="content_person">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.9951 16.6768V14.1398" stroke="#6C82F3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M18.1899 5.3302C19.8799 5.3302 21.2399 6.7002 21.2399 8.3902V11.8302C18.7799 13.2702 15.5299 14.1402 11.9899 14.1402C8.44988 14.1402 5.20988 13.2702 2.74988 11.8302V8.3802C2.74988 6.6902 4.11988 5.3302 5.80988 5.3302H18.1899Z" stroke="#6C82F3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M15.4951 5.3258V4.9598C15.4951 3.7398 14.5051 2.7498 13.2851 2.7498H10.7051C9.48506 2.7498 8.49506 3.7398 8.49506 4.9598V5.3258" stroke="#6C82F3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M2.77435 15.483L2.96335 17.992C3.09135 19.683 4.50035 20.99 6.19535 20.99H17.7944C19.4894 20.99 20.8984 19.683 21.0264 17.992L21.2154 15.483" stroke="#6C82F3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <p>В активном поиске работы</p>
        </div>
        )
    }
}