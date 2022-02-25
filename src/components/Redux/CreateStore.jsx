

export function createStore(rootReducer ,initialState){
    let state = rootReducer(initialState, {type: 'INIT'});
    const setSubscribe = []

    return {
        dispatch(action){
            state = rootReducer(state, action)
            setSubscribe.foeEach(sub => sub())
        },

        subscribe(callback){
            setSubscribe.push(callback)
        },

        getState(){
            return state;
        }
    }
}