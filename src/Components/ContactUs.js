import "./ContactFormStyles.css"

function ContactForm(){
    return(
        <div className="form-container">
            <h1>Send a message to us!</h1>
            <form action="https://tanjore-tour-api.onrender.com/home" method="POST">
                <input placeholder="Name"/>
                <input placeholder="Email"/>
                <input placeholder="Subject"/>
                <textarea placeholder="Message" rows="4"></textarea>
                <button>Send Message</button>
            </form>
        </div>
    )
}

export default ContactForm