

const string = `
.wrap * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.wrap *::after, *::before {
  box-sizing: border-box;
}



.wrap {
  background: #e1e7d3;
  width: 255px;
  height: 510px;
  position: relative;
  margin: 2% auto auto auto;
}

.base {
  position: absolute;
}

.head {
  width: 128px;
  height: 77px;
  left: 50%;
  transform: translate(-50%, 75px);
  border-radius: 100px/60px;
  background: #A4978E;
}

.middleOne {
  width: 129px;
  height: 132px;
  left: 50%;
  transform: translate(-50%, 108px);
  background: #A4978E;
}

.middleTwo {
  background: #EFDCCB;
  width: 176px;
  height: 183px;
  border-radius: 50%;
  left: 50%;
  transform: translate(-50%, 185px);
  z-index: 1;
}

.ma {
  width: 176px;
  height: 183px;
  border-radius: 50%;
  position: relative;
}

.mark {
  position: absolute;
  width: 41px;
  height: 14px;
}

.mak1 {
  background: #89775A;
  left: 50%;
  border-radius: 50%;
  transform: translate(-49%, 14px);
}

.mak1::after {
  position: absolute;
  left: 50%;
  transform: translate(-50%, 6px);
  background: #EFDCCB;
  content: "";
  width: 57px;
  height: 13px;
  border-radius: 50%;
}

.mak2 {
  background: #89775A;
  left: 50%;
  border-radius: 50%;
  transform: rotate(-21deg) translate(-168%, 1px);
}

.mak2::after {
  position: absolute;
  left: 50%;
  transform: translate(-50%, 6px);
  background: #EFDCCB;
  content: "";
  width: 57px;
  height: 13px;
  border-radius: 50%;
}

.mak3 {
  background: #89775A;
  left: 50%;
  border-radius: 50%;
  transform: rotate(34deg) translate(84%, 8px);
}

.mak3::after {
  position: absolute;
  left: 50%;
  transform: translate(-50%, 6px);
  background: #EFDCCB;
  content: "";
  width: 48px;
  height: 13px;
  border-radius: 50%;
}

.mak4 {
  background: #89775A;
  left: 50%;
  border-radius: 50%;
  transform: translate(-49%, 45px);
}

.mak4::after {
  position: absolute;
  left: 50%;
  transform: translate(-50%, 6px);
  background: #EFDCCB;
  content: "";
  width: 57px;
  height: 13px;
  border-radius: 50%;
}

.mak5 {
  background: #89775A;
  left: 50%;
  border-radius: 50%;
  transform: rotate(-21deg) translate(-185%, 27px);
}

.mak5::after {
  position: absolute;
  left: 50%;
  transform: translate(-50%, 6px);
  background: #EFDCCB;
  content: "";
  width: 51px;
  height: 13px;
  border-radius: 50%;
}

.mak6 {
  background: #89775A;
  left: 50%;
  border-radius: 50%;
  transform: rotate(34deg) translate(117%, 35px);
}

.mak6::after {
  position: absolute;
  left: 50%;
  transform: translate(-50%, 6px);
  background: #EFDCCB;
  content: "";
  width: 46px;
  height: 13px;
  border-radius: 50%;
}

.eye {
  background: white;
  width: 24px;
  height: 24px;
  top: 95px;
  border-radius: 50%;
  z-index: 6;
   animation: blink forwards infinite 3s ease-in-out;
}

.eyeLeft {
  left: 73px;
}

.eyeRight {
  right: 74px;
  top: 94px;
}

.nose {
  background: #5f5852;
  top: 157px;
  width: 30px;
  height: 10px;
  left: 50%;
  transform: translate(-50%, -48px);
  border-radius: 20px/7px;
}

.bodyOne {
  width: 222px;
  height: 227px;
  background: #A4978E;
  left: 50%;
  transform: translate(-50%, 162px);
  border-radius: 50%;
}

.arm {
  background: #A4978E;
  width: 35px;
  height: 134px;
}

.armLeft {
  transform: rotate(27deg) translate(-107%, 116px);
  left: 50%;
  border-radius: 23% 0% 0% 10%;
}

.armRight {
  transform: rotate(-27deg) translate(20%, 99px);
  left: 50%;
  border-radius: 0% 23% 0% 10%;
}

.armOne {
  width: 66px;
  height: 103px;
  transform: translate(3px, 203px);
  border-radius: 24px 0px 50px 50px / 77px 0px 0px 38px;
}

.armTwo {
  width: 66px;
  height: 103px;
  transform: translate(182px, 203px);
  border-radius: 0px 30px 50px 50px / 50px 260px 80px 25px;
}

.earLeft {
  width: 0;
  height: 0;
  border: 15px solid transparent;
  border-bottom: 41px solid #A4978E;
  left: 56px;
  top: 17px;
  transform: rotate(-18deg);
}

.earRight {
  width: 0;
  height: 0;
  border: 15px solid transparent;
  border-bottom: 41px solid #A4978E;
  transform: rotate(18deg);
  left: 162px;
  top: 17px;
}

.earTwo {
  width: 9px;
  height: 25px;
  background: #A4978E;
  left: 162px;
  top: 66px;
  transform: rotate(18deg);
}

.earOne {
  width: 9px;
  height: 25px;
  background: #A4978E;
  left: 77px;
  top: 64px;
  transform: rotate(-18deg);
}

.eye1 {
  background: black;
  width: 11px;
  height: 11px;
  position: absolute;
  border-radius: 50%;
  left: 25%;
  transform: translateY(50%);
}

.trim {
  position: absolute;
  width: 126px;
  height: 22px;
  background: #e1e7d3;
  border: 1px solid #e1e7d3;
  left: 50%;
  transform: translate(-50%, 376px);
}

.trim2 {
  position: absolute;
  width: 8px;
  height: 18px;
  background: #e1e7d3;
  border: 1px solid #e1e7d3;
  left: 50%;
  transform: rotate(18deg) translate(1409%, 356px)
}
@keyframes blink{
  0%, 2%, 60%, 62%, 100% {
    transform: scale(1,1);
  }
  1%, 61% {
    transform: scale(1.5,0.1);
  }
}

`



const player = {
  id: undefined,
  time: 100,
  ui: {
    demo: document.querySelector('#demo'),
    demo2: document.querySelector('#demo2')
  },
  events: {
    '#btnPause': 'pause',
    '#btnPlay': 'play',
    '#btnSlow': 'slow',
    '#btnNormal': 'normal',
    '#btnFast': 'fast'
  },
  n: 1,
  init: () => {
    player.ui.demo.innerText = string.substr(0, player.n)
    player.ui.demo2.innerHTML = string.substr(0, player.n)
    player.bindEvents()
    player.play()
  },
  bindEvents: () => {
    for (let key in player.events) {
      if (player.events.hasOwnProperty(key)) {
        const value = player.events[key] // pause / play / slow
        document.querySelector(key).onclick = player[value]
      }
    }

  },
  run: () => {
    player.n += 1
    if (player.n > string.length) {
      window.clearInterval(player.id)
      return
    }
    player.ui.demo.innerText = string.substr(0, player.n)
    player.ui.demo2.innerHTML = string.substr(0, player.n)
    player.ui.demo.scrollTop = player.ui.demo.scrollHeight
  },
  play: () => {
    window.clearInterval(player.id)
    player.id = setInterval(player.run, player.time)
  },
  pause: () => {
    window.clearInterval(player.id)
  },
  slow: () => {
    player.pause()
    player.time = 300
    player.play()
  },
  normal: () => {
    player.pause()
    player.time = 100
    player.play()
  },
  fast: () => {
    player.pause()
    player.time = 0
    player.play()
  }
}

player.init()