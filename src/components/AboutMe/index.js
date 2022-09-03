import './index.scss'
import Me from '../../assets/images/DSC_0210.jpg'

const AboutMe = () => {
    return(
        

        <div className="me-page">
        <h1> About Me </h1>
            <div className="pic">
            <img className="cat" src={Me} alt="Me :)"/>
            </div>
            <div className="text">
            <p>
            Hello, my name is Cole and I am a student at University of Chico State, where I am obtaining my Bachelors Degree in Computer Science.
            From my love of computers at an early age, I have always been captivated by what computing has and can do for our society.
            I want to take what I have learned and make meaningful products and services that have a positive impact on the world.
            </p>
            <p>
            I currently have alot of experience with C++/C, and have learned useful algorithms and built networking, mathmatical, and CNN's applications with them.
            I also have gathered alot of experience with using both Windows and Linux machines, which I use both daily and have a strong understanding of their structure.
            I also have a good amount of experience with web and mobile development, where i'm self-hosting this ReactJS website from a Rasberry Pi in a docker container.
            From the classes that I have taken, I have explored alot of software and tools that could carry over into use in my future career.
            </p>
            <p>
            As for hobbies outside of Computer Science, I really enjoy hiking and mountain biking, and exploring new places. I love travel as well, and am interested in exploring different cultures and trying new foods.
            I also really enjoy learning new things, and spending time with friends and family. 
            </p>
            <p>
            Currently, I am looking for a career that can both challenge me, and which I can learn from and create meaningful and impactful products.
            I am interested in anything to do with computers, but currently have been focusing alot in the AI and security topics. I also love to program and do web/mobile development, and see myself going down these career paths as well.
            </p>
            <p>
            If you would like to learn more about me, please feel free to contact me. Thank you so much!
            </p>
            </div>
        </div>
    )
}

export default AboutMe