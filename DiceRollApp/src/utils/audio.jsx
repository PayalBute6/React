export function playDiceRollSound(){
    const AudioContext = window.AudioContext || Window.webkitAudioContext;
    if(!AudioContext) return;

    const ctx = new AudioContext();
    const now = ctx.currentTime;
    const numClatters = 4 + Math.floor(Math.random()*4);

    for(let i = 0; i<numClatters; i++){
        const time = now + i*0.12+Math.random()*0.05;

        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.type = "triangle";
        osc.frequency.setValueAtTime(110+Math.random()*50,time);
        osc.frequency.exponentialRampToValueAtTime(30, time+0.08);

        gain.gain.setValueAtTime(0.25, time);
        gain.gain.exponentialRampToValueAtTime(0.001, time+0.08);

        osc.start(time);
        osc.stop(time + 0.09);

        const clickOsc = ctx.createOscillator();
        const clickGain = ctx.createGain();
        clickOsc.connect(clickGain);
        clickGain.connect(ctx.destination);

        clickOsc.type='sine';
        clickOsc.frequency.setValueAtTime(1600+Math.random()*400,time);

        clickGain.gain.setValueAtTime(0.06, time);
        clickGain.gain.exponentialRampToValueAtTime(0.001,time+0.03);

        clickOsc.start(time);
        clickOsc.stop(time + 0.04);
    }
}