import { USER_DATA, RECRUITER_DATA } from "./Type";

export const Set_userdata =(data) => {
    console.log(data,'in action');
    return {
        type :USER_DATA,
        payload:data,
    }
};

export const Set_recruiterdata =(data) => {
    console.log(data,'in action');
    return {
        type :RECRUITER_DATA,
        payload:data,
    }
};