import axios from 'axios';

export const fetchImages = async () => {
    try {
        const response = await axios.get(
            'https://pixabay.com/api/?q=generic&key=40924863-f555801e4729fc82d13bdd65e'
        )
        return response.data.hits;
    } catch (error) {
        console.error(error);
        return [];
    }
}