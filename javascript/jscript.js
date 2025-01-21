<!--Author: Konstantinos Dingelidis-->
document.getElementById('bpm').addEventListener('click', function() {
    const audio = new Audio('../sound/100bpmMetronome.mp3'); 
    audio.play();
});


window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("scrollToTop").style.display = "block";
    } else {
        document.getElementById("scrollToTop").style.display = "none";
    }
};

document.getElementById("scrollToTop").onclick = function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};
