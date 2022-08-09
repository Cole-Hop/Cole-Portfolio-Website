import Loader from 'react-loaders';
import Pdf from '../../assets/pdfs/Cole_Hopkins_Resume.pdf';
import './index.scss';

const Resume = () => {
    return (       
        <>
        <div className = "container resume-page"> 
        <div className= "pdf-zone">
            <object className = "pdf" data= {Pdf} type="application/pdf">   </object>
        </div>
        </div>
        <Loader type="ball-pulse-sync" />
        </>
        
    )
}

export default Resume