import { Bounce, toast } from 'react-toastify';

const toastConfig = {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce,
};

export const flash = (type, message) => {
    toast[type](message, toastConfig);
};
