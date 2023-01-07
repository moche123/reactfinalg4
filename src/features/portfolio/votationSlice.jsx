import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "idle",
  skills: [
    {
      id: 0,
      value: "Frontend",
      count: 0,
    },
    {
      id: 1,
      value: "Backend",
      count: 0,
    },
    {
      id: 2,
      value: "Devops",
      count: 0,
    },
    {
      id: 3,
      value: "Database",
      count: 0,
    },
  ],
};


export const votationSlice = createSlice ({

    name: 'votation',
    initialState,
    reducers: {
        //* Por qué necesito el action: En el action viene: EL ID DEL SKILL QUE QUIERO VOTAR 
        voteSkill: (state,action) => {
            state.skills.forEach(element => {
                if(element.id === action.payload) element.count++ ///* "MODIFYING STATE (OLDSTATE)"
            });
        }, 
        clearVotes: (state,action={}) => {
            state.skills.forEach(element => {
                element.count = 0
            });
        }
    }


})

export const { voteSkill,clearVotes } = votationSlice.actions

export const selectVote = (state)=> state.votation.value


const votationReduce = votationSlice.reducer

export { votationReduce }