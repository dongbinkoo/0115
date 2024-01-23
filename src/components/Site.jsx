import React from 'react'
const siteText=[
  {
    text:["Make","site compliant with","webstardard"],
    title:"웹 표준을 준수한 사이트 제작",
    site:"https://www.naver.com/",
    info:["Lorem, ipsum dolor.","Lorem, ipsum dolor.","Lorem, ipsum dolor."]
  },
  {
    text:["Make","site compliant with","webstardard"],
    title:"웹 표준을 준수한 사이트 제작",
    site:"https://www.naver.com/",
    info:["Lorem, ipsum dolor.","Lorem, ipsum dolor.","Lorem, ipsum dolor."]
  },
  {
    text:["Make","site compliant with","webstardard"],
    title:"웹 표준을 준수한 사이트 제작",
    site:"https://www.naver.com/",
    info:["Lorem, ipsum dolor.","Lorem, ipsum dolor.","Lorem, ipsum dolor."]
  },
  {
    text:["Make","site compliant with","webstardard"],
    title:"웹 표준을 준수한 사이트 제작",
    site:"https://www.naver.com/",
    info:["Lorem, ipsum dolor.","Lorem, ipsum dolor.","Lorem, ipsum dolor."]
  }
]

const Site = () => {
  return (
    <section id='site'>
      <div className="site_inner">
        <div className="site_title">
          Site coding <em>작품들</em>
        </div>
        <div className="site_wrap">
          {siteText.map((site,key)=>
          <article className={`site_items s${key + 1}`} key={key}>
            <span className='num'>0{key + 1}.</span>
            <div className="text">
              <div>{site.text[0]}</div>
              <div>{site.text[1]}</div>
              <div>{site.text[2]}</div>
            </div>
            <div className="title">{site.title}</div>
            <div className="btn">
              <a href={site.site}>code</a>
              <a href={site.site}>view</a>
            </div>
            <div className="info">
              <span>{site.info[0]}</span>
              <span>{site.info[1]}</span>
              <span>{site.info[2]}</span>
            </div>
          </article>
          )}
        </div>
      </div>
    </section>
  )
}

export default Site 
