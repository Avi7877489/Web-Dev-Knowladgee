import Image from "next/image";



 
export const metadata = {
  title: 'Avi "s Dev Portfolio',
  description: 'Hey This is Avi"s dev Portfolio',
}

 

export default function Home() {
  return (
    <>
        <header>
        <nav>
            <div className="left">Avi ' s Protfolio</div>
            <div className="right">
                <ul>
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Services</a></li>
                <li><a href="">Projects</a></li>
                <li><a href="">Contact Me</a></li>
            </ul>
        </div>
        </nav>
    </header>

    <main>
        <section className="first">
            <div className="leftSection">
           <div> Hi, My Name is <span className="purple">Avijit</span></div>
                <div>and I am a Passionate </div>
                <span id="element"></span>

                <div className="buttons">
                   <button className="btn">Download Resume</button>
                   <button className="btn">Visit Github</button>
                </div>

            </div>
            <div className="rightSection">
                <img src="/bgg.png" alt=""/>
            </div>
        </section>
        <hr/>
        <section className="secondSection">
            <span className="text-gray">What I have done so fare</span>
            <h1>Work Experience</h1>

            <div className="box">
                <div className="vertical">
                    <img src="/html.png" alt="" className="image-top"/>
                    <div className="vertical-text">
                        HTML Developer (2021 - 2022)
                    </div>
                    <div className="vertical-desc">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, ipsum?
                    </div>
                </div>
                <div className="vertical">
                    <img src="/nodejs.png" alt="" className="image-top"/>
                    <div className="vertical-text">
                        Node Js Developer (2022 - 2023)
                    </div>
                    <div className="vertical-desc">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, ipsum?
                    </div>
                </div>
                <div className="vertical">
                    <img src="/vertical3.png" alt="" className="image-top"/>
                    <div className="vertical-text">
                        HTML Developer (2022 - 2023)
                    </div>
                    <div className="vertical-desc">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, ipsum?
                    </div>
                </div>
                <div className="vertical">
                    <img src="/vertical3.png" alt="" className="image-top"/>
                    <div className="vertical-text">
                        HTML Developer (2022 - 2023)
                    </div>
                    <div className="vertical-desc">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, ipsum?
                    </div>
                </div>
                <div className="vertical">
                    <img src="/vertical3.png" alt="" className="image-top"/>
                    <div className="vertical-text">
                        HTML Developer (2022 - 2023)
                    </div>
                    <div className="vertical-desc">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, ipsum?
                    </div>
                </div>
                <div className="vertical">
                    <img src="/vertical3.png" alt="" className="image-top"/>
                    <div className="vertical-text">
                        HTML Developer (2022 - 2023)
                    </div>
                    <div className="vertical-desc">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, ipsum?
                    </div>
                </div>
                
            </div>
        </section>
    </main>

    <footer>
        <div className="footer">
            <div className="footer-first">
                <h3>Avi's Developer Protfolio</h3>
            </div>
            <div className="footer-second">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Services</li>
                </ul>
            </div>
            <div className="footer-third">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Services</li>
                </ul>

            </div>
            <div className="footer-fourth">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Services</li>
                </ul>

            </div>
        </div>

        <div className="footer-rights">
           Copyright &copy; www.avisportfolio.com | All rights reserved
        </div>

    </footer>

 

    
    </>
  
  );
}
