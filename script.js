/****** ROBOT "HELLO" BUTTON ********/

const helloBtn = document.getElementById('helloBtn')


const riveAnimation = new rive.Rive({
    src: '/robot.riv',
    canvas: document.getElementById('canvas'),
    autoplay: true,
    stateMachines: 'animationOne',
    fit: rive.Fit.cover,
    onLoad : ()=>{
        const inputs = riveAnimation.stateMachineInputs('animationOne')
        const trigger = inputs.find( i => i.name === 'Trigger 1')
        helloBtn.onclick = (e)=>{
            e.preventDefault();
            trigger.fire()
        }
    }
});