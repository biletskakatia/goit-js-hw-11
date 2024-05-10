
const API_KEY = '43802076-938fa3042b8f90b237e1b6cb9';
const BASE_URL = 'https://pixabay.com/api/';

export const fetchPhotoSearch = (q) => {
    const searchParams = new URLSearchParams({
        q,
        key: API_KEY,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
    });
    return fetch(`${BASE_URL}?${searchParams}`).then(response => {
        if (!response.ok) {
            throw new Error(response.statusText);
        }
    return response.json();
    })
}
