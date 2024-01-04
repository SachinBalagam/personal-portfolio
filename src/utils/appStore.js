import { configureStore } from "@reduxjs/toolkit";
import ProjectsReducer from "./projectsSilce";

const appStore = configureStore({
  reducer: {
    projects: ProjectsReducer,
  },
});

export default appStore;
