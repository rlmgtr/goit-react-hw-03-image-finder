import axios from 'axios';

export const searchImages = async (searchTerm, setState, pageNumber, replace = true) => {
  try {
    const response = await axios.get('https://pixabay.com/api/', {
      params: {
        q: searchTerm,
        page: pageNumber,
        key: '40924863-f555801e4729fc82d13bdd65e', 
        image_type: 'photo',
        orientation: 'horizontal',
        per_page: 20
      }
    });
    const images = response.data.hits;
    if (replace) {
      setState({ images }); 
    } else {
      setState(prevState => ({ images: prevState.images.concat(images) })); 
    }
    return images;
  } catch (error) {
    console.error(error);
  }
};