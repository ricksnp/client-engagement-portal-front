/**
 * Creates an ADD_NOTIFICATION action
 */
export const addNotification = (cName:string, subj:string, date:string) => {
    return {
        type: "ADD_NOTIFICATION",
        payload: {
            clientName: cName,
            subject: subj,
            requestDate: date
        }
    }
};

/**
 * Creates a GET_NOTIFICATIONS action
 */
export const getNotifications = (cName:string, subj:string, date:string) => {
    return {
        type: "GET_NOTIFICATIONS",
        payload: {
            clientName: cName,
            subject: subj,
            requestDate: date
        }
    }
};

/**
 * Creates a REMOVE_NOTIFICATION action
 */
export const removeNotification = (cName:string, subj:string, date:string) => {
    return {
        type: "REMOVE_NOTIFICATION",
        payload: {
            clientName: cName,
            subject: subj,
            requestDate: date
        }
    }
}