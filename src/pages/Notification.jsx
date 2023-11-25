import React, { useContext, useEffect } from "react";
import PageHeading from "../components/Utils/PageHeading";
import bell from "../assets/images/darkNotification.png";
import { AuthContext } from "../contexts/AuthProvider";
import { formatDate } from "../components/Utils/convertNotificationTime";

const Notification = () => {
  const { allNotifications } = useContext(AuthContext);

  return (
    <div>
      <div className="container">
        <PageHeading path="/notification">Notifications</PageHeading>
        <div className="outterBox">
          <div className="notification">
            <span className="d-block">Today’s</span>

            <div>
              {allNotifications.length > 0 &&
                allNotifications?.map((notification, index) => (
                  <div
                    key={index}
                    className="notificationBox d-flex align-items-center gap-3"
                  >
                    <img className="img-fluid" src={bell} alt="Notifications" />
                    <div>
                      <p>{notification?.title}</p>
                      <span className="d-block noteTime">
                        {formatDate(notification?.createdAt)}
                      </span>
                      <article>
                        <p>{notification?.content}</p>
                      </article>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {/* <div className="recent">
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
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Notification;
