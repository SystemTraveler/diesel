//Your code here

const widgets = document.querySelectorAll('.widget');
const names = document.querySelectorAll('.name');
const icons = document.querySelectorAll('.icon');
const iconsinv = document.querySelectorAll('.invert');
const texty = document.querySelectorAll('.texty');
const images = document.querySelectorAll('.img');
const notch = document.getElementById('notch');
const main = document.getElementById('main');
const time = document.getElementById('time');
var dark = true;
var notchtrig = false;
var fullscreenapp = false;

async function changeTheme() {
    if (dark == true) {
        await Promise.all([
            new Promise(resolve => {
                widgets.forEach(widget => {
                    widget.style.backgroundColor = 'rgba(238, 238, 238, 0.3)';
                });
                resolve();
            }),
            new Promise(resolve => {
                notch.style.backgroundColor = 'rgba(238, 238, 238, 0.3)';
                notch.style.color = 'rgb(15, 15, 15)';
                resolve();
            }),
            new Promise(resolve => {
                names.forEach(name => {
                    name.style.color = 'rgb(15,15,15)';
                });
                resolve();
            }),
            new Promise(resolve => {
                texty.forEach(text => {
                    text.style.color = 'rgb(15,15,15)';
                });
                resolve();
            }),
            new Promise(resolve => {
                document.getElementById('fullscreen').style.filter = 'invert(100%)';
                resolve();
            }),
            new Promise(resolve => {
                icons.forEach(icon => {
                    icon.style.filter = 'invert(100%)';
                });
                resolve();
            }),
            new Promise(resolve => {
                images.forEach(img => {
                    img.style.filter = 'invert(100%)';
                });
                resolve();
            }),
            new Promise(resolve => {
                iconsinv.forEach(invert => {
                    invert.style.filter = 'invert(0%)';
                });
                resolve();
            })
        ]);

        dark = false;
    } else if (dark == false) {
        await Promise.all([
            new Promise(resolve => {
                widgets.forEach(widget => {
                    widget.style.backgroundColor = 'rgba(15, 15, 15, 0.3)';
                });
                resolve();
            }),
            new Promise(resolve => {
                names.forEach(name => {
                    name.style.color = 'rgb(238,238,238)';
                });
                resolve();
            }),
            new Promise(resolve => {
                document.getElementById('fullscreen').style.filter = 'invert(0%)';
                resolve();
            }),
            new Promise(resolve => {
                notch.style.backgroundColor = 'rgba(15, 15, 15, 0.3)';
                notch.style.color = 'rgb(238, 238, 238)';
                resolve();
            }),
            new Promise(resolve => {
                texty.forEach(text => {
                    text.style.color = 'rgb(238,238,238)';
                });
                resolve();
            }),
            new Promise(resolve => {
                icons.forEach(icon => {
                    icon.style.filter = 'invert(0%)';
                });
                resolve();
            }),
            new Promise(resolve => {
                images.forEach(img => {
                    img.style.filter = 'invert(0%)';
                });
                resolve();
            }),
            new Promise(resolve => {
                iconsinv.forEach(invert => {
                    invert.style.filter = 'invert(100%)';
                });
                resolve();
            })
        ]);

        dark = true;
    }
}

function trigger () {
    if (fullscreenapp == false) {
        if (notchtrig == false) {
            notch.classList.add('trigger');
            main.style.filter = 'blur(64px)';
            notchtrig = true;
            document.getElementById('fullscreen').style.display = 'block';
            time.style.marginLeft = '0px';
            time.style.fontSize = '3rem';
            
        } else if (notchtrig == true) {
            notch.classList.remove('trigger');
            main.style.filter = 'blur(0px)';
            notchtrig = false;
            document.getElementById('fullscreen').style.display = 'none';
            time.style.marginLeft = 'calc(125px)';
            time.style.fontSize = '2rem';
        }
    }
}

function fullscreen () {
    notch.style.width = '100vw';
    notch.style.height = '100vh';
    notch.style.marginLeft = '0px';
    notch.style.borderRadius = '0px 0px 0px 0px';
    if (dark == true) {
        notch.style.backgroundColor = '#0f0f0f';
    } else if (dark == false) {
        notch.style.backgroundColor = '#eee';
    }
    document.getElementById('fullscreen').style.display = 'none';
    document.getElementById('time').innerHTML = 'Назад';
    document.getElementById('time').style.fontSize = '2rem';
    fullscreenapp = true;
}

function exitapp () {
    notch.style = '';
    if (dark == true) {
        notch.style.backgroundColor = 'rgba(15,15,15,0.3)';
        notch.style.color = 'rgb(238,238,238)';
        document.getElementById('fullscreen').style.filter = 'invert(0%)';
    } else if (dark == false) {
        notch.style.backgroundColor = 'rgba(238,238,238,0.3)';
        notch.style.color = 'rgb(15,15,15)';
        document.getElementById('fullscreen').style.filter = 'invert(100%)';
    }
    main.style.filter = 'blur(0px)';
    notchtrig = false;
    document.getElementById('fullscreen').style.display = 'none';
    document.getElementById('time').innerHTML = '9:41';
    notchtrig = true;
    fullscreenapp = false;
}