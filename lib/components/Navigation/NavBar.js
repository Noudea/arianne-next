import {useEffect,useState,useContext} from 'react'


const NavBar = ({children},props) => {

    return (
        <>
            <style jsx>{`
                .navContainer {
                    position:relative;
                    top:0px;
                    left:0px;
                }
                .topNavContent {
                    width:100%;
                    margin : 0 auto;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    height:100%;
                }
                .topNav {
                    background-color: black;
                    height:48px;
                }
                .topNav,
                .bottomNav {
                    height: 48px;
                    width: 100%;
                }
                .bottomNav {
                    position: sticky;
                    position: -webkit-sticky;
                    top: 0px;
                    left: 0px;
                    background-color: rgba(29, 29, 31, 0.72);
                    backdrop-filter: saturate(180%) blur(20px);
                    margin: 0px;
                    z-index: 10;
                }
                .bottomNavTitle {
                    color: #fff;
                    opacity: 0.92;
                    font-size: var(--smallFontSize);
                    font-weight: 600;
                    margin: 0px;
                }
                .bottomNavContent{
                    max-width:var(--maxWidth);
                    margin : 0 auto;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    height:100%;
                }
                a {
                    color: white;
                    font-size: var(--smallFontSize);
                }
                img {
                    width:30px;
                    cursor:pointer;
                }
            `}</style>
            <div className="navContainer">
                <nav>
                    <div className="topNav">
                        <div className='topNavContent'>
                            {children}
                        </div>
                    </div>
                </nav>
                <div className="bottomNav">
                    <div className='bottomNavContent'>
                        <div>
                            <p>{props.test}</p>
                        </div>
                        <div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavBar