export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    
    // REMOVE after finished
    // token: 'BQB3HRNZPjZ3kzh0NMVdpgi9NQL7uHIsOjVDhZPSHPK3vHl96pfVZMwxc8D0umZutqtI0TFJkPF84XkS-DscQkjQlCX7FM6YG6fJd-EVRY9_acUMDRHyOMOdWjlwsUk5IN_j2d_CKsh98rjn8J4MiceUi6c8',
};

// reducer's job is to sit idle and listen to actions
const reducer = (state, action) => {
    console.log(action);

    switch(action.type) {
        case 'SET_USER':
            return {
                // keep what was in the current state
                ...state,
                user: action.user,
            };
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token,
            };
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists,
            };
        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly: action.discover_weekly,
            };
        default:
            return state;
    }
}

export default reducer;
