import React, { useReducer } from 'react';
import axios from 'axios';
// запросы axios
// get - для получения одного объекта или всех
// post - добавляет
// delete - удаление
// patch - частичная замена
// put - полная замена

// вызываем метод Реакта для создания контекста
export const videosContext = React.createContext()

// API
const API = "http://localhost:8000/videos"
// начальное состояние, чтоб позже могли сохранить данные
const INIT_STATE = {
    videos: []
}
// reducer - это функция, которая будет менять INIT_STATE
// action - это объект с ключами type (то действие, которое выполняется), payload (данные)
// let action = {
//     type: "value",
//     payload: "data"
// }
const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case "GET_VIDEOS":
            return {
                ...state, videos: action.payload.data
            }
        default:
            return state
    }
}
const VideosContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE)
    async function getAllVideos() {
        let result = await axios.get(API)
        // console.log("result from getAllVideos", result)
        let action = {
            type: "GET_VIDEOS",
            payload: result
        }
        dispatch(action)
    }
    async function deleteVideo(id) {
        await axios.delete(`${API}/${id}`)
        // API + "/" + id
        getAllVideos()
    }
    return (
        <videosContext.Provider value={{
            videos: state.videos,
            getAllVideos,
            deleteVideo
        }}>
            {children}
        </videosContext.Provider>
    )
}
export default VideosContextProvider