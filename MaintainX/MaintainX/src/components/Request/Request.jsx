import React from 'react';

const Request = () => {
  return (
    <div className="header">
      <div className="request">
        <h2 className="requests">Requests</h2>
      </div>
      <div className="form">
        <form className="search-form">
          <input className="search" type="search" placeholder="Search Requests" />
        </form>
      </div>
      <div className="drop-down">
        <button class="button">Asset</button>
        <button class="button">Location</button>
        <button class="button">Priority</button>
        <button class="button"> Status</button>
      </div>

      <div class="box">
        <div class="container">
          <img src="https://app.getmaintainx.com/static/media/WorkRequest.da08978a.svg" alt="Image description" />
          <h2 class="text1">Start adding Requests to Nigerian Content Development and Monitoring Board (NCDMB) on MaintainX</h2>
          <p class="text2">You do not have permission to add Requests. Please refer to an administrator of your organization.</p>
        </div>
      </div>
    </div>
  );
};

export default Request;
