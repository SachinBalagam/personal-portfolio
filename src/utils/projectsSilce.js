import { createSlice } from "@reduxjs/toolkit";

const projectsSlice = createSlice({
  name: "project",
  initialState: {
    projectsList: [
      {
        title: "Project 1",
        description:
          "I created this personal project in order to show how to create an interface in Figma using a portfolio as an example.",
        imageUrl:
          "https://res.cloudinary.com/sachinbalagam/image/upload/v1704392304/dkgb0inwabtecu4vkvnw.png",
        link: "https://www.youtube.com/",
      },
      {
        title: "Project 2",
        description:
          "What was your role, your deliverables, if the project was personal, freelancing.",
        imageUrl:
          "https://res.cloudinary.com/sachinbalagam/image/upload/v1704393135/adpipfwveow4g2rrb3ix.png",
        link: "https://www.swiggy.com/",
      },
      {
        title: "Project 3",
        description:
          "You can also add in this description the type of the project, if it was for web, mobile, electron.",
        imageUrl:
          "https://res.cloudinary.com/sachinbalagam/image/upload/v1704393202/jb7sc1y86psm2se8ssoh.png",
        link: "https://www.zomato.com/",
      },
    ],
  },
  reducers: {
    addProject: (state, action) => {
      state.projectsList.push(action.payload);
    },
  },
});

export const { addProject } = projectsSlice.actions;
export default projectsSlice.reducer;
