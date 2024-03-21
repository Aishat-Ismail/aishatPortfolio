import "./Hero.css"
import alajoke from "../../assets/alajoke.png"
import aishatIsmailCV from "../../assets/aishatIsmailCV.pdf"
const Hero = () => {

    return (

        <>
            <div id="heroPage">
                <div className="leftside">
                    <div className="leftwrap">

                        <div className="bold">
                            <h3 id="hi">
                                Hi👋, I'm a
                            </h3>
                            <h1 id="soft">Software Developer</h1>
                        </div>

                        <p id="info"> I'm <span>Aishat Ismail,</span> a tenacious and ambitious Software Developer, with a passion for coding, programming,
                            and creating powerful software solutions. Seeking opportunities to utilize my technical skills and knowledge in software development and debugging. With excellent problem-solving and troubleshooting abilities, I am confident in my capacity to make a substantial contribution to the success of the company.
                        </p>

                        <div className="button">
                            <a href= {aishatIsmailCV}  target="parent" id="btn">Hire Me</a>

                        </div>



                    </div>

                </div>
                <div className="rightside">
                    <div className="rightwrap">

                        <img src={alajoke} alt="aish" id="aish" />

                    </div>

                </div>

            </div>

        </>
    )

}
export default Hero