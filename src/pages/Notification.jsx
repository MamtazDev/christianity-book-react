import React from "react";
import PageHeading from "../components/Utils/PageHeading";
import bell from "../assets/images/darkNotification.png";

const Notification = () => {
  const notifications = [
    {
      status: "Booked",
      time: "02",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's...",
    },
    {
      status: "Booked",
      time: "02",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's...",
    },
    {
      status: "Booked",
      time: "02",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's...",
    },
  ];
  return (
    <div>
      <div className="container">
        <PageHeading>Notifications</PageHeading>
        <div className="outterBox">
          <div className="notification">
            <span className="d-block">Today’s</span>

            <div>
              {notifications.map((notification, index) => (
                <div
                  key={index}
                  className="notificationBox d-flex align-items-center gap-3"
                >
                  <img className="img-fluid" src={bell} alt="Notifications" />
                  <div>
                    <p>{notification.status}</p>
                    <span className="d-block noteTime">
                      {notification.time} min ago
                    </span>
                    <article>
                      <p>{notification.description}</p>
                    </article>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="recent">
            <div className="notification">
              <span className="d-block">Recent</span>

              <div>
                {notifications.map((notification, index) => (
                  <div
                    key={index}
                    className="notificationBox d-flex align-items-center gap-3"
                  >
                    <img className="img-fluid" src={bell} alt="Notifications" />
                    <div>
                      <p>{notification.status}</p>
                      <span className="d-block noteTime">
                        {notification.time} min ago
                      </span>
                      <article>
                        <p>{notification.description}</p>
                      </article>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
