import "./Projects.css"
import expense from "../../assets/expense.png"
import trello from "../../assets/trello.png"
import huddle from "../../assets/huddle.png"
import white from "../../assets/white.png"

const Projects = () => {

    return (

        <>
            <div id="parent">
                <div className="subject">
                    <h3 id="pro">
                        <img src= {white} alt="white" id="white" /> Projects

                    </h3>

                    <p>
                        A selected number of projects.

                    </p>

                </div>

                <div className="projectCon">
                    <div className="projOne">
                        <div className="imgCont">
                            <img src={expense} alt="exp" id="exp" />

                        </div>
                        <p id="create">Created a simple expense tracker application using HTML5, CSS and Javascript.</p>
                        <div className="butHome">
                            <a href="https://cybogsail.000webhostapp.com/"><button id="bitn">Learn More ⇾</button></a>

                        </div>



                    </div>

                    <div className="projOne">
                        <div className="imgCont">
                            <img src={trello} alt="exp" id="exp" />

                        </div>
                        <p id="create">Cloned Trello Homepage to sharpen my skills using HTML5 and CSS.</p>
                        <div className="butHome">
                            <a href="https://trello-home-page.vercel.app/"><button id="bitn">Learn More ⇾</button></a>

                        </div>



                    </div>

                    <div className="projOne">
                        <div className="imgCont">
                            <img src={huddle} alt="exp" id="exp" />

                        </div>
                        <p id="create">Created a responsive result summary template page using HTML 5 and CSS.</p>
                        <div className="butHome">
                            <a href=""><button id="bitn">Learn More ⇾</button></a>

                        </div>



                    </div>



                </div>


            </div>

        </>
    )
}
export default Projects