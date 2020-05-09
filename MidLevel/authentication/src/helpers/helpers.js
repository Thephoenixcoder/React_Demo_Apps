import { toast } from 'react-toastify';


export function handleLoginResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if ([401, 403].indexOf(response.status) !== -1) {
                // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
                toast("You are not  authorized !");

            }
        }

        return data;
    });
}