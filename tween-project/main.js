// gsap.from('.circle', 5, {
//   x: 500,
//   opacity: 0,
//   motionPath: [
//     { x: 100, y: 50 },
//     { x: -100, y: 100 },
//     { x: 100, y: 300 },
//   ],
// });

// gsap.to('.class', {
//   keyframes: [
//     { x: 100, duration: 1 },
//     { y: 200, duration: 1, delay: 0.5 }, //create a 0.5 second gap
//     { rotation: 360, duration: 2, delay: -0.25 }, //overlap by 0.25 seconds
//   ],
//   ease: 'power3.inOut',
//   yoyo: true,
// });

const hi = document.querySelector('.hi').textContent;
console.log(hi);

for (let i = 0; i < hi.length; i++) {
  let textEle = document.createElement('span');
  let text = document.createTextNode(hi[i]);
  textEle.style.cssText = 'opacity: 0';
  textEle.appendChild(text);
  document.querySelector('.textarea').appendChild(textEle);
}

let tl = gsap.timeline();
tl.to('.circle', 1, { x: 100 }) //
  .add('start')
  .to('.class', 1, { x: -100 })
  .to('.textarea span', 0, { opacity: 1, stagger: 0.2 }, 'start');

// gsap.to('.textarea span', 0, { opacity: 1, stagger: 0.2 });

gsap.registerPlugin(MotionPathPlugin);

gsap.to('#rect', {
  duration: 5,
  repeat: 12,
  repeatDelay: 3,
  yoyo: true,
  ease: 'power1.inOut',
  motionPath: {
    path: '#path',
    align: '#path',
    autoRotate: true,
    alignOrigin: [0.5, 0.5],
  },
});
