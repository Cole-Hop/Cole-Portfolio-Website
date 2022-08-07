import Pdf from './Cole_Hopkins_Resume.pdf';
import './index.scss';

const Resume = () => {
    return (       
    <div className= "pdf-zone">
        <object className = "pdf" data= {Pdf} type="application/pdf">   </object>
    </div>
    )
}

export default Resume