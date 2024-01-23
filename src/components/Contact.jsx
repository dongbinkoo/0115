import React from 'react'

const contacttext = [
  {
    link:"www.naver.com",
    title:"KAKAO : KOO",
  },
  {
    link:"dongbindothome.com",
    title:"mail : KOODONGBIN@NAVER.COM",
  },
]

const Contact = () => {
  return (
<section id="contact">
            <div className="contact_inner">
                <h2 className="contact_title">Contact</h2>
                <div className="contact_lines top" aria-expanded="true">
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                </div>
                <div className="contact_text">
                    <div className="text">
                      {contacttext.map((contact, key)=>(
                        <div key={key}>
                            <a href={contact.link} target="_blank">{contact.title}</a>
                        </div>
                      ))}
                    </div>
                </div>
                <div className="contact_lines bottom" aria-hidden="true">
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                </div>
            </div>
        </section>
  )
}

export default Contact
