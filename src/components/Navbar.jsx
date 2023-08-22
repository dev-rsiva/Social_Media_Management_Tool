import React, {useState, useEffect} from 'react'
import {FaBuffer} from 'react-icons/fa'
import {BsLightningChargeFill} from 'react-icons/bs'
import {IoMdArrowDropdown} from 'react-icons/io'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {Link} from 'react-router-dom'
import {FaUserAlt} from 'react-icons/fa'
import {IoMdSettings} from 'react-icons/io'
import {AiFillLock} from 'react-icons/ai'
import {MdMail} from 'react-icons/md'
import {AiFillAppstore} from 'react-icons/ai'
import {MdGroup} from 'react-icons/md'
import {FaHeart} from 'react-icons/fa'
import {HiBeaker} from 'react-icons/hi'
import {BiLogOut} from 'react-icons/bi'


const Navbar = ()=>{

    const [isShowed, setIshowed] = useState(false)

    const [appIsDropped, setAppIsDropped] = useState(false)
    const [helpIsDropped, setHelpIsDropped] = useState(false)

    const [isProfileDropped, setIsProfileDropped] = useState(false)

    

    function handleOutsideClicks(event){
        console.log('handleOutsideClicks triggered');
        const appList = document.getElementById('appList')
        const inside3 = document.getElementById('inside3')

        if(appList && !appList.contains(event.target)){
            setAppIsDropped(false)
            setHelpIsDropped(false)
            console.log('1')
        }

        
        if(inside3 && !inside3.contains(event.target)){
            setIsProfileDropped(false)
            console.log('14')
        }
    }


    useEffect(() => {
        
        document.addEventListener('click', handleOutsideClicks);
        return () => {
            document.removeEventListener('click', handleOutsideClicks);
        };

    }, []);
    

    






    return (
        <>
        
            <nav>
                <a href='index.html' className='logoSec'>
                    <FaBuffer className='logo company'/>
                    <span className='logoName'>Buffer</span>
                </a>


                
                  
                <div className={isShowed ?  'showmenu' : 'menu' }>
                    <ul className='navbar inside1'>
                        <li className='navitems publishing'><Link to='/publishing'>Publishing</Link></li>
                        <li className='navitems Analytics'><Link to='/analytics'>Analytics</Link></li>
                        <li className='navitems Engagement'><Link to='/engagement'>Engagement</Link></li>
                        <li className='navitems StartPage'><Link to='/startpage'>Start Page</Link></li>
                    </ul>

                    <h2 className='trial' id='trials'><BsLightningChargeFill className='logo trial' /> <Link to='/trialpage'>Start a 14-day free trail</Link></h2>
                  
                    <div id= 'appList' >
                        <ul className='navbar inside2'>
                            <li className='navitems Apps' onClick={()=>{setAppIsDropped(!appIsDropped); setHelpIsDropped(false); console.log('2')}}>
                            <a><p>Apps<IoMdArrowDropdown className='logo'/></p></a>
                            </li>
                            
                                    <ul className='AppDropdown' style={{zIndex:appIsDropped? '1' : '-1'}}>
                                        <li> Buffer for iOS</li>
                                        <li> Buffer for Android</li>
                                        <li> Browser Extensions</li>
                                        <li> Remix by Buffer</li>
                                        <li> Zapier Integrations</li>
                                        <li> Integrations</li>  
                                    </ul>
                                
                            <li className='navitems help' onClick={()=>{setHelpIsDropped(!helpIsDropped); setAppIsDropped(false);}}>
                            <a><p >help<IoMdArrowDropdown className='logo'/></p></a>
                            </li>
                                    <ul className='HelpDropdown' style={{zIndex:helpIsDropped? '1' : '-1'}}>
                                        <li> Help Center</li>
                                        <li> Get in Touch</li>
                                        <li> Plans & Pricing</li>
                                        <li> Suggest a Feature</li>
                                        <li> What's New</li>
                                    </ul>
                        </ul>
                    </div>

                    <ul className='navbar inside3' id='inside3'>
                        <li className='navitems profileEmail'>siva.torres@gmail.com</li>
                        <li className='navitems'><img className='profile' id='profile' src='Full_stack_developer_Front_end_developer__Javascript_React_developer-removebg-preview.png'/></li>
                        <li onClick={()=> setIsProfileDropped(!isProfileDropped)}><IoMdArrowDropdown className='logo profiledroplist' /></li>
                            <ul className='ProfileDropdown' style={{zIndex:isProfileDropped? '1' : '-1'}}>
                                        <li> <FaUserAlt className='profileIcons'/> Account</li>
                                        <li> <IoMdSettings className='profileIcons'/>Preferences</li>
                                        <li> <AiFillLock className='profileIcons'/>Security</li>
                                        <li> <MdMail className='profileIcons'/>Notifications Settings</li>
                                        <li> <AiFillAppstore className='profileIcons'/>Channels</li>
                                        <li> <MdGroup className='profileIcons'/>Team</li>  
                                        <li> <MdGroup className='profileIcons'/>Invite your Team</li>
                                        <li> <FaHeart className='profileIcons'/>Refer a friend</li>
                                        <li> <HiBeaker className='profileIcons'/>Beta Features</li>
                                        <li> <BiLogOut className='profileIcons'/>Logout</li>
                            </ul>
                    </ul>
                </div>

                <div className='mobileMenu'>
                    {isShowed ? 
                    (<IoMdClose className='mobileMenuLogo' onClick={()=>setIshowed(!isShowed)}/>) : 
                    (<GiHamburgerMenu className='mobileMenuLogo' onClick={()=>setIshowed(!isShowed)}/>) 
                    }            
                </div>
            </nav>
        
        </>
    )

}

export default Navbar