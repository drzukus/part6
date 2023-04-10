import { createSlice } from "@reduxjs/toolkit"

const notificationSlice = createSlice({
  name: "notification",
  initialState: "",
  reducers: {
    setNotif(state, action) {
      return action.payload
    },
    removeNotif(state, action) {
      return ""
    }
  }
})

export const { setNotif, removeNotif } = notificationSlice.actions

export const setNotification = (msg, time) => {
  return async dispatch => {
    dispatch(setNotif(msg))
    setTimeout(() => dispatch(removeNotif()), time)
  }
}

export default notificationSlice.reducer