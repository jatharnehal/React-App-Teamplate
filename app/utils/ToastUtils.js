import Toast from 'react-native-toast-message';

class ToastUtils {
    static toastMsg(type,text) {
        Toast.show({
            type: type,
            position: 'bottom',
            text1: text,
        });
    }
}

export  {ToastUtils };
