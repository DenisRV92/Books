import React from 'react';

export const ContextApp = React.createContext();

export const initialState = {
    books: [],
    loading: false,
};

// &key=AIzaSyDqGOZbu-wLQnXYT4Oa-gIcv8n5sqZCmDk

export function reducers(state, action) {

    switch (action.type) {
        case 'loading':
            return {
                ...state,
                loading: action.loading
            }
        case 'booksSearch':
        case 'art':
        case 'biography':
        case 'computers':
        case 'history':
        case 'medical':
        case 'poetry':
            if (!state.books.map(v => v.id).includes(action.id)) {
                return {
                    ...state,
                    books: [...state.books, {
                        category: action.type,
                        id: action.id,
                        title: action.title,
                        img: action.img,
                        authors: action.authors,
                        description: action.description,
                        previewLink: action.previewLink,
                        infoLink: action.infoLink,
                    }],
                    totalItems: action.totalItems
                }
            } else {
                // debugger
                return {
                    ...state,
                    books: [...state.books]
                }
            }
        default:
            return state;
    }

}
