import { createSlice } from "@reduxjs/toolkit";

const resultSlice = createSlice({
    name:'search',
    initialState : {
        query : '',
        activeTab : '',
        results : [],
        loading : false,
        error : false
    },
    reducers : {
        setQuery(state ,action){
            state.query = action.payload
        },
        setActiveTab(state ,action){
            state.activeTab = action.payload
        },
        setResults(state ,action){
            state.results = action.payload
        },
        setLoading(state ,action){
            state.loading = action.payload
            state.error = false
        },
        setError(state ,action){
            state.error = action.payload
            state.loading = false
        }
    }
})

export const {setQuery,setActiveTab,setResults,setLoading,setError} = resultSlice.actions;
export default resultSlice.reducer;