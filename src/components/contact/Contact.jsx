import './Contact.css'
import plane from "../../assets/plane.png"
import chats from "../../assets/chats.svg"


const Contact = ()=> {

    return(

        <>
        <div id='home'>

            <h3 id='contme'>Contact Me</h3>

            <div className='back'>
                <div className='lefts'>
                    <div id='chatscon'>
                    <img src= {chats} alt="chats" id='chats' />


                    </div>
                </div>
                <div className='rights'>

                    <div className='rwrap'>
                        <input type="email" name="mail" id="mall" placeholder='    Enter e-mail address*'/>
                        <textarea name="text" id="textA" cols="30" rows="10" placeholder='   Enter message*'></textarea>
                        <div id='btnsub'>
                        <button type="submit" id='done'>Send Message <img src= {plane} alt="plane" id='plane'/></button>
                        </div>
                        
                    </div>
                    
                </div>


            </div>
            

        </div>

        </>
    )

}
export default Contact