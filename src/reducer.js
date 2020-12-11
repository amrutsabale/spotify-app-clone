export const initialState = {
    user: null,
    playList: [],
    playing: false,
    item: null,
    token: "BQD_N8uKdRM6P0ONwNshG_jiMYhWBIBOl3f7yEjQM7b-KKqc5DqKu6TBHYDJXB6kU3XPBFBEHMnAdVClD0Esfz3TpYITABlV6TTiDrmMVGi1yai_Fvs1sZ-qvThRZ2j44SuhYhNbA48PN6XLtvs9vKTzFDidD_52IOpf7UxVcAsFxDbh"
}

const reducer = (state, action) => {
    console.log(action);

    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        case "SET_TOKEN":
            return {
                ...state,
                token: action.token
            }
        case "SET_PLAYLISTS":
            return {
                ...state,
                playlists: action.playlists

            }
        default:
            return state
    }
}

export default reducer;