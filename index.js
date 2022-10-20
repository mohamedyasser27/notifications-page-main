"use strict";
window.onload = () => {
  let allUnreadNotifications = Array.from(document.querySelectorAll(".unread"));
  let NotificationsCountElement = document.querySelector("#NotificationsCount");
  let unreadCount = allUnreadNotifications.length;
  NotificationsCountElement.textContent = `${unreadCount}`;

  function readNotification(event) {
    if (event.currentTarget === event.target) { 

      event.target.classList.remove("unread");
      NotificationsCountElement.textContent = `${
        unreadCount !== 0 ? --unreadCount : 0
      }`;
      event.target.removeEventListener("click", readNotificationHandler);
    }
  }
  
  function readNotificationHandler(event) {
    readNotification(event)
   }
   
   
  allUnreadNotifications.forEach((notification) => {
    notification.addEventListener("click",readNotificationHandler);
  });

  

  let markAllReadBtn = document.querySelector(".markAllReadBtn");

  function readNotification(notification) {
    notification.classList.remove("unread");
    NotificationsCountElement.textContent = `${
      unreadCount !== 0 ? --unreadCount : 0
    }`;
    notification.onclick = null;
  }

  allUnreadNotifications.forEach((notification) => {
    notification.onclick = function () {
      readNotification(this);
    };
  });

  markAllReadBtn.onclick = () => {
    allUnreadNotifications.forEach((notification) => {
      if (notification.onclick !== null) {
        notification.onclick();
      }
    });
  };
};
