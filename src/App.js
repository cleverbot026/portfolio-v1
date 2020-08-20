import React, {useEffect, useState} from 'react';
import './App.css';
import img from './assets/pic_square.jpg'
import {motion} from 'framer-motion';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebookF, faGithubAlt, faInstagram, faLinkedinIn, faTwitter} from "@fortawesome/free-brands-svg-icons";


function App(){
    const [isOn, setIsOn] = useState(false);

    useEffect(() => {
        const currentTheme = localStorage.getItem('theme-color');
        setIsOn(currentTheme === 'dark' ? true: false);
    },[]);

    const toggleSwitch = () => {
        if (isOn) {
            localStorage.setItem('theme-color', 'default');
            setIsOn(false);
        } else {
            localStorage.setItem('theme-color', 'dark');
            setIsOn(true);
        }
    };

    return (
        <div
            className={`${isOn ? 'dark' : ''} main`}>
            <div className={'theme'}>
                <FontAwesomeIcon icon={faSun}/>
                <div className="switch" data-ison={isOn} onClick={toggleSwitch}>
                    <motion.div className="handle" layout transition={spring}> </motion.div>
                </div>
                <FontAwesomeIcon icon={faMoon}/>
            </div>
            <Greet/>
            <AboutMe/>
            <Work/>
            <Contact/>
            <Footer/>
        </div>
    )
}

const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30
};

function Greet(){
    return(
        <motion.div className={'container'} initial={{ opacity:0, y:50}} animate={{opacity:1, y:0 }} transition={{ease: "easeOut", duration: 0.5}}>
            <div className={'greet-title'}>
                <h1>Hi! I'm <span>James Labnao</span></h1>
            </div>
            <div className={'greet-body'}>
                <p >Cursus tortor aliquet consequatur facere dignissimos fames iste sociis hac, dictum convallis
                    Cursus tortor aliquet consequatur facere dignissimos fames iste sociis hac, dictum convallis
                    fugiat rutrum sodales commodo habitant, aperiam cumque lectus.
                    fugiat rutrum sodales commodo habitant, aperiam cumque lectus. </p>
                <span>Email me @ <a href={'mailto:jamesv.labnao@gmail.com'}>jamesv.labnao@gmail.com</a></span>
            </div>
        </motion.div>
    )
}



function AboutMe(){
    const [shouldShow, setShouldShow] = React.useState(false);
    const [lastYpos, setLastYpos] = React.useState(0);

    React.useEffect(() => {
        function handleScroll() {
            const yPos = window.scrollY;
            const isScrollingUp = (yPos >= 469 && yPos <= 750) ? true : false;
            setShouldShow(isScrollingUp);
            setLastYpos(yPos);
            console.log(yPos);
        }
        window.addEventListener('scroll', handleScroll, false);
        return () =>{
            window.removeEventListener('scroll', handleScroll, false)
        };
    }, [lastYpos]);

    return(
        <motion.div className={'container-about'}
                    animate={shouldShow && {opacity: 1, y: 0}}
                    initial={{opacity: 0, y:100}}
                    transition={{ease: "easeOut", duration: 0.5}}>

            <img className={'about-icon'} src={img} alt=""/>
            <div className={'about-body'}>
                <h2 className={"about-title"}>about me</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit pretium congue mi nec auctor facilisi senectus
                    aenean in suscipit vivamus, massa lobortis accumsan feugiat penatibus eget purus vulputate etiam
                    mauris montes posuere dui bibendum nulla.
                    <br/>
                    <br/>
                    Here are some of the technologies I've been working with recently:
                </p>
                <div className={'skills'}>
                    <div>
                        <h4>Languages</h4>
                        <ul>
                            <li>PHP</li>
                            <li>Java</li>
                            <li>C/C++</li>
                            <li>HTML</li>
                            <li>JavaScript</li>
                            <li>CSS</li>
                            <li>SQL</li>
                        </ul>
                    </div>

                    <div>
                        <h4>Tools</h4>
                        <ul>
                            <li>Git</li>
                            <li>GitHub</li>
                        </ul>
                    </div>
                    <div>
                        <h4>Frameworks</h4>
                        <ul>
                            <li>React</li>
                            <li>Laravel</li>
                            <li>Spring</li>
                            <li>Codeigniter</li>
                        </ul>
                    </div>
                    <div>
                        <h4>Others</h4>
                        <ul>
                            <li>Illustrator</li>
                            <li>Photoshop</li>
                        </ul>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}


function Work() {
    const [shouldShow, setShouldShow] = React.useState(false);
    const [lastYpos, setLastYpos] = React.useState(0);

    React.useEffect(() => {
        function handleScroll() {
            const yPos = window.scrollY;
            const isScrollingUp = (yPos >= 1015 && yPos <= 1860) ? true : false;
            setShouldShow(isScrollingUp);
            setLastYpos(yPos);
            console.log(yPos);
        }
        window.addEventListener('scroll', handleScroll, false);
        return () =>{
            window.removeEventListener('scroll', handleScroll, false)
        };
    }, [lastYpos]);

    const workInfo = [
        {
            id: 1,
            company: 'Department of Education',
            position: 'Programming Teacher',
            startDate: 'June, 2016',
            endDate: 'August, 2020',
            description: 'Iusto, explicabo exercitation. Porta taciti urna omnis consequatur tempor distinctio? Natoque, qui, nostra aliquet dicta, nulla beatae do! Tenetur aute.',
            isActive: false,
            standby: 'menu-02'
        },{
            id: 2,
            company: '88DB',
            position: 'Backend Developer Intern',
            startDate: 'April, 2015',
            endDate: 'May, 2015',
            description: 'Iusto, explicabo exercitation. Porta taciti urna omnis consequatur tempor distinctio? ',
            isActive: true,
            standby: 'menu-01'
        }];

    const workList = workInfo.map(info =>
        <div className={'works'} key={info.id}>
            <h3 className={'job-title'}> {info.position} </h3>
            <h4 className={'company'}> {info.company} </h4>
            <span className={'date'}> {info.startDate} - {info.endDate} </span>
            <p className={'desc'}> {info.description} </p>
        </div>);

    return(
        <motion.div className={'container'}
                    animate={shouldShow && {opacity: 1, y: 0}}
                    initial={{opacity: 0, y:100}}
                    transition={{ease: "easeOut", duration: 0.5}}>
            <h2 className={'work-title'}>work experience</h2>
            <>
                {workList}
            </>
        </motion.div>
    )

}

function Contact() {
    const [shouldShow, setShouldShow] = React.useState(false);
    const [lastYpos, setLastYpos] = React.useState(0);

    React.useEffect(() => {
        function handleScroll() {
            const yPos = window.scrollY;
            const isScrollingUp = (yPos >= 1700 && yPos <= 1863) ? true : false;
            setShouldShow(isScrollingUp);
            setLastYpos(yPos);
            console.log(yPos);
        }
        window.addEventListener('scroll', handleScroll, false);
        return () =>{
            window.removeEventListener('scroll', handleScroll, false)
        };
    }, [lastYpos]);

    return(
        <motion.div className={"container-contact"}
                    animate={shouldShow && {opacity: 1, y: 0}}
                    initial={{opacity: 0, y:100}}
                    transition={{ease: "easeOut", duration: 0.5}}>

            <p>I am currently looking for a developer position. If you happen to know someone who is hiring kindly </p>

            <a className={'email'} href={"mailto:jamesv.labnao@gmail.com"}> Email Me! </a>
        </motion.div>
    )
}

function Footer() {
    return(
        <div className={'footer'}>
            <div>
                <a href={'https://www.github.com/cleverbot026'}>
                    {/*<img src="https://img.icons8.com/material-sharp/48/000000/github.png"/>*/}
                    <FontAwesomeIcon icon={faGithubAlt} size={'2x'}/>
                </a>
                <a href={'https://www.linkedin.com/in/jameslabnao'}>
                    {/*<img src="https://img.icons8.com/material-sharp/48/000000/linkedin.png"/>*/}
                    <FontAwesomeIcon icon={faLinkedinIn} size={'2x'}/>
                </a>
                <a href={'https://www.instagram.com/jameslovenow'}>
                    {/*<img src="https://img.icons8.com/material-sharp/48/000000/instagram-new.png"/>*/}
                    <FontAwesomeIcon icon={faInstagram} size={'2x'}/>
                </a>
                <a href={'https://www.twitter.com/jameslovenow'}>
                    {/*<img src="https://img.icons8.com/material-sharp/48/000000/twitter.png"/>*/}
                    <FontAwesomeIcon icon={faTwitter} size={'2x'}/>
                </a>
                <a href={'https://www.facebook.com/james.labnao'}>
                    {/*<img src="https://img.icons8.com/material-sharp/48/000000/facebook.png"/>*/}
                    <FontAwesomeIcon icon={faFacebookF} size={'2x'}/>
                </a>
            </div>

            <p> Built by James Labnao. Powered by ReactJS</p>

        </div>
    )
}

export default App;
