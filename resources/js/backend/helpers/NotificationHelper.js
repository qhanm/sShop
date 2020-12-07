import 'react-notifications-component/dist/theme.css'
import { store } from 'react-notifications-component';

function ShowNotification(title, message, type, insert, container)
{
    console.log('call');
    return store.addNotification({
        title: title,
        message: message,
        type: type,
        insert: insert,
        container: container,
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 4000,
          onScreen: true
        }
    });
}

export {
    ShowNotification
}