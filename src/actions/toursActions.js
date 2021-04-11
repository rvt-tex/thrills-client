
export const fetchTours = () => {
    return (dispatch) => {
        fetch('http://localhost:3000/tours')
        .then(resp => resp.json())
        .then(tours => dispatch({ type: 'FETCH_TOURS', payload: tours}))
    }
}