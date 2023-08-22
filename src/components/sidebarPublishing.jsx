import React from 'react'
import {useEffect} from 'react'
import './sidebarPublishing.css'
import FacebookLoginButton from './FacebookLoginButton'; // Adjust the path accordingly
/* eslint-disable no-undef */


const SidebarPublishing = ()=>{

          
    // useEffect(() => {
    //     window.fbAsyncInit = function () {
    //       FB.init({
    //         appId: '1016875629320851', // Replace with your app's Facebook App ID
    //         cookie: true,
    //         xfbml: true,
    //         version: 'v2.0', // Use the desired version of the Graph API
    //       });


    
    //       FB.getLoginStatus(function (response) {
    //         statusChangeCallback(response);
    //         console.log(response)
    //       });
    //     };
    


    //     // Load the Facebook SDK asynchronously
    //     (function(d, s, id){
    //         var js, fjs = d.getElementsByTagName(s)[0];
    //         if (d.getElementById(id)) {return;}
    //         js = d.createElement(s); js.id = id;
    //         js.src = "https://connect.facebook.net/en_US/sdk.js#version=v2.2&appId=12345&status=true&cookie=true&xfbml=true";
    //         fjs.parentNode.insertBefore(js, fjs);
    //     }(document, 'script', 'facebook-jssdk'));

    //     console.log('yes)')
    //   }, []);
    

      
    //     function checkLoginState() {
    //         FB.getLoginStatus(function(response) {
    //         statusChangeCallback(response);
    //         });
    //     }


    //   function statusChangeCallback(response) {
    //     // Handle the login status change
    //     // This function should be implemented based on your app's requirements
    //     if(response.status === 'connected'){
    //         console.log('Logged in and aunthenticated')
    //     }else{
    //         console.log('Not Authenticated')
    //     }
    //   }
    



    //   const handleFacebookLogin = (accessToken) => {
    //     // Handle the Facebook login, you can store the accessToken or perform other actions here
    //     console.log('User logged in with Facebook. Access token:', accessToken);
    //   };

    return <>
            <div className='sidebar'>

                <div className="sidebarinside1">
                    <ul>
                        <li>Create</li>
                        <li>Calendar</li>
                        <li>Campaigns</li>
                        <li>Queues</li>
                    </ul>
                    <div>Test</div>
                    <div>Milkfrother_guide</div>
                </div>
                
                <div className="sidebarinside2">
                    Add Channels
                </div>
                {/* <FacebookLoginButton onLogin={handleFacebookLogin} />
                {/* <button onClick={checkLoginState}>Login with Facebook</button> */}
                
            {/* <fb:login-button 
            scope="public_profile,email"
            onlogin="checkLoginState();">
            </fb:login-button> */} 

            </div>      
    </>
}


export default SidebarPublishing