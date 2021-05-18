import axios from 'axios';

const USER_API_BASE_URL = 'http://localhost:8080/images';
const EVENT = 'http://localhost:8080/events';
const PENDING = 'http://localhost:8080/pending'

class ApiService {

    fetchImage() {
        return axios.get(USER_API_BASE_URL);
    }

    fetchImageById(imageId) {
        return axios.get(USER_API_BASE_URL + '/' + imageId);
    }

    deleteImage(imageId) {
        return axios.delete(USER_API_BASE_URL + '/' + imageId);
    }

    addImage(image) {
        return axios.post(USER_API_BASE_URL, image);
    }

    editImage(image) {
        return axios.put(USER_API_BASE_URL + '/' + image.id, image);
    }


	fetchEvent() {
        return axios.get(EVENT);
    }

    fetchEventById(eventId) {
        return axios.get(EVENT + '/' + eventId);
    }

    deleteEvent(eventId) {
        return axios.delete(EVENT + '/' + eventId);
    }

    addEvent(event) {
        return axios.post(EVENT, event)
    }

    editEvent(event) {
        return axios.put(EVENT + '/' + event.id, event);
    }

}

export default new ApiService();
