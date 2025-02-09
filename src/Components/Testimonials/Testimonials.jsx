import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from "../../assets/next-icon.png"
import back_icon from "../../assets/back-icon.png"
import user1 from "../../assets/user-1.png"
import user2 from "../../assets/user-2.png"
import user3 from "../../assets/user-3.png"
import user4 from "../../assets/user-4.png"


const Testimonials = () => {

const slider = useRef();
let tx = 0;
const slideForward = ()=>{
    if (tx > -50){
        tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`

}
const slideBackward = ()=>{
    if (tx < 0){
        tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`
    
}

  return (
    <div className='testimonials'>
        <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
        <img src={back_icon} alt="" className='back-btn' onClick={slideBackward} />
        <div className="slider">
            <ul ref={slider}>
                <li>
                    <div className="slide">
                        <div className="userinfo">
                            <img src={user1} alt="" />
                            <div>
                                <h3> William Jackson</h3>
                                <span> Edusity Usa</span>
                            </div>
                        </div>
                        <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur ut voluptatum eius temporibus, non, quaerat aperiam vero unde, 
                            repellat nulla mollitia repellendus incidunt. Doloremque distinctio nisi non aliquam repellat ut?
                        </p>
                    </div>
                </li>

                <li>
                    <div className="slide">
                        <div className="userinfo">
                            <img src={user2} alt="" />
                            <div>
                                <h3> Tony Stark iron</h3>
                                <span> Edusity Usa</span>
                            </div>
                        </div>
                        <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur ut voluptatum eius temporibus, non, quaerat aperiam vero unde, 
                            repellat nulla mollitia repellendus incidunt. Doloremque distinctio nisi non aliquam repellat ut?
                        </p>
                    </div>
                </li>

                <li>
                    <div className="slide">
                        <div className="userinfo">
                            <img src={user3} alt="" />
                            <div>
                                <h3>Thor jackson </h3>
                                <span> Edusity Usa</span>
                            </div>
                        </div>
                        <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur ut voluptatum eius temporibus, non, quaerat aperiam vero unde, 
                            repellat nulla mollitia repellendus incidunt. Doloremque distinctio nisi non aliquam repellat ut?
                        </p>
                    </div>
                </li>

                <li>
                    <div className="slide">
                        <div className="userinfo">
                            <img src={user4} alt="" />
                            <div>
                                <h3> Sherlock Holmes</h3>
                                <span> Edusity Usa</span>
                            </div>
                        </div>
                        <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur ut voluptatum eius temporibus, non, quaerat aperiam vero unde, 
                            repellat nulla mollitia repellendus incidunt. Doloremque distinctio nisi non aliquam repellat ut?
                        </p>
                    </div>
                </li>
            </ul>
        </div>

    </div>
  )
}

export default Testimonials