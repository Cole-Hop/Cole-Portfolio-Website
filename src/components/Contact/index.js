import './index.scss'
import Loader from 'react-loaders' 

const Contact = () => {
    return (
        <>
            <div className = 'contact-page'>
                <div className='container contact-info'>
                    <h1 className='contact-title'>
                        Contact Me
                    </h1>
                    <p className="contact-body">
                        I am interested in many opportunites related to technology, mainly when it comes to machine learning and security. If you
                        have any questions or requests for me, please feel free to contact me below.
                    </p>
                </div>
                <div className='container contact-form'>
                    <form>
                        <ul>
                            <li className = 'half'>
                                <input type="text" name="name" placeholder=" Name" required  />
                            </li>
                            <li className = 'half'>
                                <input type="email" name="email" placeholder=" Email" required />
                            </li>
                            <li>
                                <input type="text" name="subject" placeholder=" Subject" required />
                            </li>
                            <li>
                                <textarea name="message" placeholder=" Message" required></textarea>
                            </li>
                            <li className = 'submit-message'>
                                <input type="submit" className="flat-button" value="Send"></input>
                            </li>
                        </ul>

                    </form>

                </div>
            </div>
            <Loader type="ball-pulse-sync" />
        </>
    )
}

export default Contact