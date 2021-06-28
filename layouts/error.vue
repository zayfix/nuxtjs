<template>
  <div>
    <NuxtLink to="/">
      <div class="container items-center max-w-none">
        <h1 class="glitch">404</h1>
        <br />
        <h2 class="glitch">Not Found</h2>
      </div>
    </NuxtLink>
  </div>
</template>

<script>
export default {}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

body,
html {
  width: 100%;
  height: 100%;
  background-color: #eee;
  overflow: hidden;
}

.container {
  height: 100%;
  display: block;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.container h1.glitch {
  color: black;
  font-family: sans-serif;
  font-weight: 800;
  position: flex;
  font-size: 100px;
  padding: 30px;
}

.container h1.glitch::before,
.container h1.glitch::after {
  padding: 30px;
  color: black;
  content: '404';
  position: absolute;
  width: 100%;
  height: 100%;
  background: #eee;
  overflow: hidden;
  top: 0;
}

.container .glitch::before {
  left: 3px;
  text-shadow: -2px 0 red;
  animation-name: glitch-animation-1;
  animation-duration: 2s;
  animation-timing-function: linear;
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: reverse-alternate;
}

.container .glitch::after {
  left: -3px;
  text-shadow: -2px 0 blue;
  animation-name: glitch-animation-2;
  animation-duration: 2s;
  animation-timing-function: linear;
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: reverse-alternate;
}

.container h2.glitch {
  color: black;
  font-family: sans-serif;
  font-weight: 800;
  position: relative;
  font-size: 100px;
  padding: 30px;
}

.container h2.glitch::before,
.container h2.glitch::after {
  padding: 30px;
  color: black;
  content: 'Not Found';
  position: absolute;
  width: 100%;
  height: 100%;
  background: #eee;
  overflow: hidden;
  top: 0;
}

@keyframes glitch-animation-1 {
  0% {
    clip: rect(37px, 2000px, 117px, 0px);
  }
  5% {
    clip: rect(114px, 2000px, 119px, 0px);
  }
  10% {
    clip: rect(24px, 2000px, 80px, 0px);
  }
  15% {
    clip: rect(10px, 2000px, 82px, 0px);
  }
  20% {
    clip: rect(76px, 2000px, 76px, 0px);
  }
  25% {
    clip: rect(120px, 2000px, 27px, 0px);
  }
  30% {
    clip: rect(140px, 2000px, 1px, 0px);
  }
  35% {
    clip: rect(135px, 2000px, 7px, 0px);
  }
  40% {
    clip: rect(51px, 2000px, 150px, 0px);
  }
  45% {
    clip: rect(93px, 2000px, 96px, 0px);
  }
  50% {
    clip: rect(109px, 2000px, 55px, 0px);
  }
  55% {
    clip: rect(120px, 2000px, 114px, 0px);
  }
  60% {
    clip: rect(79px, 2000px, 56px, 0px);
  }
  65% {
    clip: rect(46px, 2000px, 134px, 0px);
  }
  70% {
    clip: rect(42px, 2000px, 53px, 0px);
  }
  75% {
    clip: rect(89px, 2000px, 44px, 0px);
  }
  80% {
    clip: rect(68px, 2000px, 61px, 0px);
  }
  85% {
    clip: rect(93px, 2000px, 66px, 0px);
  }
  90% {
    clip: rect(100px, 2000px, 9px, 0px);
  }
  95% {
    clip: rect(107px, 2000px, 18px, 0px);
  }
  100% {
    clip: rect(128px, 2000px, 99px, 0px);
  }
}

@keyframes glitch-animation-2 {
  0% {
    clip: rect(57px, 2000px, 3px, 0px);
  }
  5% {
    clip: rect(89px, 2000px, 91px, 0px);
  }
  10% {
    clip: rect(117px, 2000px, 26px, 0px);
  }
  15% {
    clip: rect(55px, 2000px, 141px, 0px);
  }
  20% {
    clip: rect(59px, 2000px, 4px, 0px);
  }
  25% {
    clip: rect(116px, 2000px, 119px, 0px);
  }
  30% {
    clip: rect(78px, 2000px, 21px, 0px);
  }
  35% {
    clip: rect(77px, 2000px, 10px, 0px);
  }
  40% {
    clip: rect(13px, 2000px, 24px, 0px);
  }
  45% {
    clip: rect(3px, 2000px, 21px, 0px);
  }
  50% {
    clip: rect(83px, 2000px, 52px, 0px);
  }
  55% {
    clip: rect(4px, 2000px, 8px, 0px);
  }
  60% {
    clip: rect(130px, 2000px, 78px, 0px);
  }
  65% {
    clip: rect(39px, 2000px, 64px, 0px);
  }
  70% {
    clip: rect(118px, 2000px, 41px, 0px);
  }
  75% {
    clip: rect(141px, 2000px, 59px, 0px);
  }
  80% {
    clip: rect(49px, 2000px, 14px, 0px);
  }
  85% {
    clip: rect(111px, 2000px, 111px, 0px);
  }
  90% {
    clip: rect(112px, 2000px, 64px, 0px);
  }
  95% {
    clip: rect(40px, 2000px, 78px, 0px);
  }
  100% {
    clip: rect(94px, 2000px, 115px, 0px);
  }
}
</style>
