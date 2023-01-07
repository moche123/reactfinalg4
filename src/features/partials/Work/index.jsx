import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { voteSkill,clearVotes, selectVote } from '../../portfolio/votationSlice';
import { skills } from '../../sources';
import './Work.css'

const Work = () => {
  const dispatch = useDispatch();
  const vots = useSelector( voteSkill )
  console.log(vots)

  return (
    <div className='work-section'>
      <h3>My skills</h3>
      <br />
      <button className='button-clear' onClick={ ()=> dispatch(clearVotes()) }>CLEAR</button>
      <br /><br /><br /><br />

      <div className='container-skill'>
        {
          skills.map((skill)=> {
            return (
              <div key={skill.id}>
                <div className='skill-item'>{skill.tool}</div>
                <div className='container-img'>
                  <img className='img-skill' src={skill.icon} alt="icon of skill" />
                </div>
                 <div>
                  votes: {vots.payload.votation.skills[skill.id].count}
                </div>
                <div>
                  <button onClick={() => dispatch(voteSkill( skill.id ))} className="button-vote">
                    VOTE!
                  </button>
                </div> 
              </div>

            )
          })
        }
      </div>

    </div>
  )
}

export default Work