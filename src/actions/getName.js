import setName from "./setName";

export default function getName() {
    return function (dispatch) {
        const request = new Request('http://localhost:8095/name', {
            method: 'GET',
            mode: 'cors'
        })

        return fetch(request)
            .then(data => data.json())
            .then(({name}) => dispatch(setName(name)))
    }
}