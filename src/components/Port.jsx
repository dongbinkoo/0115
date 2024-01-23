import React, { useEffect , useRef } from 'react'
import port01 from "../assets/img/port01.jpg";
import port02 from "../assets/img/port02.jpg";
import port03 from "../assets/img/port03.jpg";
import port04 from "../assets/img/port04.jpg";
import port05 from "../assets/img/port05.jpg";
import port06 from "../assets/img/port06.jpg";


import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const portText = [
  {
    num:"01",
    title:"team ace 팀프로젝트",
    site:"www.naver.com",
    img:port01,
    desc:"고난과 역경이 가득한 프로젝트로 팀장을 갈아서 눈물나게 만든 작품이며, 플러그인보다는 직접 프로그램을 작성하여서 이벤트를 만드는것을 중점으로 하였으며, OTT사이트를 참고하여 디벨롭 시킨 작품입니다. 팀장이 다해서 팀장이 설명해야 되는 프로젝트로 모델 이동욱님이 촬영에 임해주셔서 좋은 작품으로 탄생시켰습니다.",
    alt:"teamace 포트폴리오",
  },
  {
    num:"02",
    title:"화성 포트폴리오",
    site:"www.naver.com",
    img:port02,
    desc:"고난과 역경이 가득한 프로젝트로 팀장을 갈아서 눈물나게 만든 작품이며, 플러그인보다는 직접 프로그램을 작성하여서 이벤트를 만드는것을 중점으로 하였으며, OTT사이트를 참고하여 디벨롭 시킨 작품입니다. 팀장이 다해서 팀장이 설명해야 되는 프로젝트로 모델 이동욱님이 촬영에 임해주셔서 좋은 작품으로 탄생시켰습니다.",
    alt:"teamace 포트폴리오",
  },
  {
    num:"03",
    title:"teamc 팀프로젝트",
    site:"www.naver.com",
    img:port03,
    desc:"고난과 역경이 가득한 프로젝트로 팀장을 갈아서 눈물나게 만든 작품이며, 플러그인보다는 직접 프로그램을 작성하여서 이벤트를 만드는것을 중점으로 하였으며, OTT사이트를 참고하여 디벨롭 시킨 작품입니다. 팀장이 다해서 팀장이 설명해야 되는 프로젝트로 모델 이동욱님이 촬영에 임해주셔서 좋은 작품으로 탄생시켰습니다.",
    alt:"teamace 포트폴리오",
  },
  {
    num:"04",
    title:"team ace 팀프로젝트",
    site:"www.naver.com",
    img:port04,
    desc:"고난과 역경이 가득한 프로젝트로 팀장을 갈아서 눈물나게 만든 작품이며, 플러그인보다는 직접 프로그램을 작성하여서 이벤트를 만드는것을 중점으로 하였으며, OTT사이트를 참고하여 디벨롭 시킨 작품입니다. 팀장이 다해서 팀장이 설명해야 되는 프로젝트로 모델 이동욱님이 촬영에 임해주셔서 좋은 작품으로 탄생시켰습니다.",
    alt:"teamace 포트폴리오",
  },
  {
    num:"05",
    title:"화성 포트폴리오",
    site:"www.naver.com",
    img:port05,
    desc:"고난과 역경이 가득한 프로젝트로 팀장을 갈아서 눈물나게 만든 작품이며, 플러그인보다는 직접 프로그램을 작성하여서 이벤트를 만드는것을 중점으로 하였으며, OTT사이트를 참고하여 디벨롭 시킨 작품입니다. 팀장이 다해서 팀장이 설명해야 되는 프로젝트로 모델 이동욱님이 촬영에 임해주셔서 좋은 작품으로 탄생시켰습니다.",
    alt:"teamace 포트폴리오",
  },
  {
    num:"06",
    title:"화성 포트폴리오",
    site:"www.naver.com",
    img:port06,
    desc:"고난과 역경이 가득한 프로젝트로 팀장을 갈아서 눈물나게 만든 작품이며, 플러그인보다는 직접 프로그램을 작성하여서 이벤트를 만드는것을 중점으로 하였으며, OTT사이트를 참고하여 디벨롭 시킨 작품입니다. 팀장이 다해서 팀장이 설명해야 되는 프로젝트로 모델 이동욱님이 촬영에 임해주셔서 좋은 작품으로 탄생시켰습니다.",
    alt:"teamace 포트폴리오",
  },
  
]



const Port = () => {

  const horizontalRef = useRef(null);
  // useRef(null) 변수를 생성하고 초기화 시키겠다는 것
  const sectionsRef = useRef([])
  // useRef([]) 배열를 생성하고 빈배열로 초기화 시키겠다는 것

  useEffect(()=>{
    // useEffect는 컴포넌트가 랜더링 될 때 어떠한 작업을 수행하도록 해야하는데, 그것을 설정해주는 hook 명령어
    gsap.registerPlugin(ScrollTrigger)

    const holizontal = horizontalRef.current;
    // horizontalRef의 현재값을 holizontal에 대입
    const sections = sectionsRef.current;
    // sectionsRef의 현재값을 sections에 대입

    let scrollTween = gsap.to(sections, {
      xPercent:-120*(sections.length-1),
      scrollTrigger:{
        trigger:holizontal,
        start:"top 56px",     
        end:()=> "+="+holizontal.offsetWidth,
        pin:true,
        // 활성상태에서 트리거 요소 고정
        scrub:1,

      }

    // (sections, {},[])는 랜더링 완료 후 한번만 실행 
  })

  return()=>{
    scrollTween.kill();
    // 스크롤 애니메이션을 제거해서 컴포넌트가 언마운팅 할떄 메모리 누수를 방지한다.
    // 마운트: 데이터가 화면에 보여지는 것을 의미함
  }

},[])



  return (
    <section id="port" ref={horizontalRef}>
    <div className="port_inner">
        <div className="port_title">
            portfolio <em>포폴작업물</em>
        </div>
        <div className="port_wrap">
          {portText.map((port,key)=>(
            <article className={`port_item p${key+1}`} key={key}
              ref={(el)=>(sectionsRef.current[key] = el)}
            >
            <span className="num">{port.num}</span>
            <a href={port.site} target="_blank" className="img" rel='noopener noreferrer'>
                <img src={port.img} alt={port.alt}/>
            </a>
            <h3 className="title">{port.title}</h3>
            <p className="desc">
            {port.desc}
            </p>
            <a href={port.site} target="_blank" className="site">사이트 보기</a>
            </article>
          ))}

        </div>
    </div>
</section>      
  )
}

export default Port
