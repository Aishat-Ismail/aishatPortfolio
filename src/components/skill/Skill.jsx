import "./Skill.css"
import boot from "../../assets/boot.png"
import css from "../../assets/css.png"
import java from "../../assets/java.png"
import html from "../../assets/html.png"
import careers from "../../assets/careers.webp"
import skills from "../../assets/skills.svg"



const Skills = () => {

    return (

        <>
            <div id="skill">
                <div className="ori">
                    <h3 id="ski">
                        Skills
                    </h3>

                </div>
                <div className="container">
                    <div className="lefty">
                        <div className="leftCont">
                            <p id="exp">
                                I have a vast experience in the following
                                web technologies:

                            </p>

                            <img src={skills} alt="skills" id="skills" />


                        </div>


                    </div>
                    <div className="righty">
                        <div className="rightCont">
                            <img src={careers} alt="career" id="career" />

                        </div>

                    </div>

                </div>

            </div>

        </>
    )




}
export default Skills