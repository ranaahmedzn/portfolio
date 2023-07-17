import './Skills.css'
import html from '../../assets/icons/html.png'
import css from '../../assets/icons/css.png'
import js from '../../assets/icons/js.png'
import react from '../../assets/icons/react.png'
import bootstrap from '../../assets/icons/bootstrap.png'
import tailwind from '../../assets/icons/tailwind.png'
import node from '../../assets/icons/node-js.png'
import express from '../../assets/icons/express-js.png'
import mongodb from '../../assets/icons/mongodb.png'
import npm from '../../assets/icons/npm.png'
import firebase from '../../assets/icons/firebase.png'
import github from '../../assets/icons/github.png'
import vscode from '../../assets/icons/vscode.png'


const Skills = () => {
    return (
        <section id="skills" className="pt-10 pb-20">
            <hr className="animate-bounce h-2 w-[80px] mx-auto mb-3 border-0 rounded-full bg-[#6f54ef]" />
            <h2 className="poppins-font text-4xl font-bold text-center text-white">My Skills</h2>

            <div id='large' className='hidden md:block mt-16 space-y-8'>
                <div className='flex justify-between gap-8'>
                    <div className='skill-card'>
                        <img src={html} alt="" />
                        <h4>HTML5</h4>
                    </div>
                    <div className='skill-card'>
                        <img src={css} alt="" />
                        <h4>CSS3</h4>
                    </div>
                    <div className='skill-card'>
                        <img src={js} alt="" />
                        <h4>JavaScript</h4>
                    </div>
                    <div className='skill-card'>
                        <img src={react} alt="" />
                        <h4>React</h4>
                    </div>
                </div>
                <div className='flex justify-between gap-8'>
                    <div className='skill-card'>
                        <img src={bootstrap} alt="" />
                        <h4>Bootstrap</h4>
                    </div>
                    <div className='skill-card'>
                        <img className='py-4' src={tailwind} alt="" />
                        <h4>Tailwind CSS</h4>
                    </div>
                    <div className='skill-card'>
                        <img src={node} alt="" />
                        <h4>Node JS</h4>
                    </div>
                    <div className='skill-card'>
                        <img src={express} alt="" />
                        <h4>Express JS</h4>
                    </div>
                </div>

                <div className='flex justify-center gap-8'>
                    <div className='skill-card'>
                        <img src={mongodb} alt="" />
                        <h4>MongoDB</h4>
                    </div>
                    <div className='skill-card'>
                        <img src={firebase} alt="" />
                        <h4>Firebase</h4>
                    </div>
                    <div className='skill-card'>
                        <img src={npm} alt="" />
                        <h4>NPM</h4>
                    </div>
                </div>

                <div className='flex justify-center gap-8'>
                    <div className='skill-card'>
                        <img src={github} alt="" />
                        <h4>Github</h4>
                    </div>
                    <div className='skill-card'>
                        <img src={vscode} alt="" />
                        <h4>VS Code</h4>
                    </div>
                </div>
            </div>

            <div id='small' className='md:hidden mt-16 space-y-8'>
                <div className='grid grid-cols-2 gap-4'>
                    <div className='skill-card'>
                        <img src={html} alt="" />
                        <h4>HTML5</h4>
                    </div>
                    <div className='skill-card'>
                        <img src={css} alt="" />
                        <h4>CSS3</h4>
                    </div>
                    <div className='skill-card'>
                        <img src={js} alt="" />
                        <h4>JavaScript</h4>
                    </div>
                    <div className='skill-card'>
                        <img src={react} alt="" />
                        <h4>React</h4>
                    </div>
                    <div className='skill-card'>
                        <img src={bootstrap} alt="" />
                        <h4>Bootstrap</h4>
                    </div>
                    <div className='skill-card'>
                        <img className='pb-3' src={tailwind} alt="" />
                        <h4>Tailwind CSS</h4>
                    </div>
                    <div className='skill-card'>
                        <img src={node} alt="" />
                        <h4>Node JS</h4>
                    </div>
                    <div className='skill-card'>
                        <img src={express} alt="" />
                        <h4>Express JS</h4>
                    </div>
                    <div className='skill-card'>
                        <img src={mongodb} alt="" />
                        <h4>MongoDB</h4>
                    </div>
                    <div className='skill-card'>
                        <img src={firebase} alt="" />
                        <h4>Firebase</h4>
                    </div>
                    <div className='skill-card'>
                        <img src={npm} alt="" />
                        <h4>NPM</h4>
                    </div>
                    <div className='skill-card'>
                        <img src={github} alt="" />
                        <h4>Github</h4>
                    </div>
                    <div className='skill-card'>
                        <img src={vscode} alt="" />
                        <h4>VS Code</h4>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;