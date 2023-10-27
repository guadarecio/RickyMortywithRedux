export const charactersData = () => {
  return async dispatch => {
    try {
      const response = await fetch('https://rickandmortyapi.com/api/character');
      const data = await response.json();
      dispatch({type: 'FETCH_SUCCESS', payload: data});
    } catch (error) {
      console.log(error);
    }
  };
};
