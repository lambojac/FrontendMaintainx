
import React from 'react';

const Message = () => {
  return (
    <div classname="main-container">
      <div classname="container">
      <div className='header-container'>
      <h2 className="messages">Messages</h2>
      <div className="all-team">
        <form>
          <input className="search" type="search" placeholder="Search or start a new chat" />
        </form>
        </div>
        <div className='header-button'>
        <button type="button" className="button">
        <span>+</span>
        New Message
      </button>
      </div>
      </div>
      
        
        
        
       {/* <div className="ncdmb">
          You joined Nigeria Content Development and Monitoring Board (NCDMB)
        </div>
        <div>20/04/2023</div>

        <div className="header">Direct Messages</div>
        <div className="images">
          <img src="https://app.getmaintainx.com/static/media/Messages.5ad512d8.svg" alt="Messages Icon" />

          <h2 className="header">
            Start adding conversations to Nigerian Content Development and Monitoring Board (NCDMB) on MaintainX
          </h2>
        </div>

        <div>
          <div>
            <a href="/messages/new">
              <button type="button" className="button">
                <p>Click The </p>
                
                <span></span>
                New Message
              </button>
            </a>
          </div>
        </div>
  */}
      </div>
    </div> 
 
  );
} 
export default Message

