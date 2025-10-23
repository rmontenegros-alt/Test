
import React from 'react';
import type { NotificationState } from '../types';

interface NotificationProps {
  notification: NotificationState;
  onClose: () => void;
}

const Notification: React.FC<NotificationProps> = ({ notification, onClose }) => {
  if (!notification.type) {
    return null;
  }

  const baseClasses = 'p-4 mb-4 text-sm rounded-lg flex items-center justify-between';
  const typeClasses = {
    success: 'bg-green-900 text-green-300',
    error: 'bg-red-900 text-red-300',
  };

  const Icon: React.FC<{ type: 'success' | 'error' }> = ({ type }) => {
    const paths = {
      success: "M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z",
      error: "M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z"
    };
    return (
      <svg className="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
        <path d={paths[type]} />
      </svg>
    );
  };

  return (
    <div className={`${baseClasses} ${typeClasses[notification.type]}`} role="alert">
      <div>
        <Icon type={notification.type} />
        <span className="font-medium">{notification.message}</span>
      </div>
       <button onClick={onClose} className="ml-4 -mr-1 p-1 rounded-md focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 hover:bg-opacity-20 hover:bg-white">
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
      </button>
    </div>
  );
};

export default Notification;
