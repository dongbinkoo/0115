import React from 'react'

const skillText = [
  {
    title:"Lorem ipsum dolor sit amet.",
    desc:"Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.",
  },
  {
    title:"Lorem ipsum dolor sit amet.",
    desc:"Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.",
  },
  {
    title:"Lorem ipsum dolor sit amet.",
    desc:"Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.",
  },

]

const Skill = () => {
  return (
    <div id="skill">
      <div className="skill_inner">
        <h2 className='skill_title'>
          Lorem, ipsum. <em>challenge</em>
        </h2>
        <div className="skill_desc">
          {skillText.map((skill,key)=>(
               <div key={key}>
               <span>{key+1}.</span>
               <h3>{skill.title}</h3>
               <p>{skill.desc}</p>
             </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skill
