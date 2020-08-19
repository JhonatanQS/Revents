import { CREATE_EVENT, UPDATE_EVENT, DELETE_EVENT } from "./eventConstants";

export function creatEvent(event) {
    return {
        type: CREATE_EVENT,
        payload: event 
    }
}

export function updateEvent(eventId) {
    return {
        type: UPDATE_EVENT,
        payload: eventId 
    }
}

export function deleteEvent(event) {
    return {
        type: DELETE_EVENT,
        payload: event 
    }
}