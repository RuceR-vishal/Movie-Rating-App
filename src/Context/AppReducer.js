export default (state, action) => {
    switch (action.type) {
        case 'DELETE_ARTICLE':
            return {
                ...state,
                articleList: state.articleList.filter(article => article.id !== action.payload)
            }
        case 'ADD_ARTICLE':
            return {
                ...state,
                articleList: [...state.articleList, action.payload]
            }
        default:
            return state;
    }
}