/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/events.js":
/*!**************************!*\
  !*** ./src/js/events.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "saveNamePlayer": () => (/* binding */ saveNamePlayer),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _windowLogin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./windowLogin */ "./src/js/windowLogin.js");
/* harmony import */ var _windowRegistr_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./windowRegistr.js */ "./src/js/windowRegistr.js");
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./validate.js */ "./src/js/validate.js");
/* harmony import */ var _script__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./script */ "./src/js/script.js");







let saveNamePlayer;

function closeWindowLogin() {
    
    _windowLogin__WEBPACK_IMPORTED_MODULE_0__.closeBtn.addEventListener('click', () => {
        _windowLogin__WEBPACK_IMPORTED_MODULE_0__.modal.remove();
        _windowLogin__WEBPACK_IMPORTED_MODULE_0__.dark.remove();    
    });

    _windowLogin__WEBPACK_IMPORTED_MODULE_0__.linkRegistration.addEventListener('click', () => {
        _windowLogin__WEBPACK_IMPORTED_MODULE_0__.modal.remove();
        _windowLogin__WEBPACK_IMPORTED_MODULE_0__.dark.remove();
        (0,_windowRegistr_js__WEBPACK_IMPORTED_MODULE_1__.default)();
        (0,_validate_js__WEBPACK_IMPORTED_MODULE_2__.default)();
        
        const closeRegistration = document.querySelector('.close_btn_window_registration'),
              modalRegistration = document.querySelector('.container_modal'),
              btnRegistration = document.querySelector('.btn_modal_registration_form'),
              dark2 = document.querySelector('.dark');

        closeRegistration.addEventListener('click', () => {
            modalRegistration.remove();
            dark2.remove(); 
        });
        
        //localStorage 
        btnRegistration.addEventListener('click', e => {
            const inputName = document.querySelector('#input_1'),
                  inputEmail = document.querySelector('#input_2'),
                  inputPas = document.querySelector('#input_3'),
                  inputPasRep = document.querySelector('#input_4'),
                  user = {
                    name: inputName.value,
                    email: inputEmail.value,
                    password: inputPas.value   
                  },
                  messageErrorEmail = document.querySelector('#small_email'),
                  messageErrorName = document.querySelector('#small_name'),
                  arrayPerson = JSON.parse(localStorage.getItem('arr')) || [];
            
                const dataLocal = JSON.parse(localStorage.getItem('arr'));
                if(dataLocal == null) {
                    arrayPerson.push(user);
                    localStorage.setItem('arr', JSON.stringify(arrayPerson));
                } else {
                    const email = dataLocal.map(element => element.email);
                    const name = dataLocal.map(element => element.name);
                    
                    for(let i = 0; i < email.length; i++) {
                        if(inputName.value === '' || inputEmail.value === '' || inputPas.value === '' || inputPasRep.value === '') {
                            messageErrorName.setAttribute('class', 'small_visible');
                            messageErrorName.textContent = 'You did not fill in all the fields';
                            break;
                        } else if(inputName.value === name[i] && inputEmail.value === email[i]) {
                            messageErrorName.setAttribute('class', 'small_visible');
                            messageErrorName.textContent = 'This name is already in use';
                            messageErrorEmail.setAttribute('class', 'small_visible');
                            messageErrorEmail.textContent = 'This email is already in use';
                            break;
                        } else if(inputName.value === name[i]) {
                            messageErrorName.setAttribute('class', 'small_visible');
                            messageErrorName.textContent = 'This name is already in use';
                            break;
                        } else if(inputEmail.value === email[i]) {
                            messageErrorEmail.setAttribute('class', 'small_visible');
                            messageErrorEmail.textContent = 'This email is already in use';
                            break;
                        } else {
                            arrayPerson.push(user);
                            localStorage.setItem('arr', JSON.stringify(arrayPerson));
                            break;
                        }
                    }
                }
        })                      
        //checking username and password at registration
        {
            const inputName = document.querySelector('#input_1'),
                  inputEmail = document.querySelector('#input_2'),
                  inputPas = document.querySelector('#input_3'),
                  inputPasRep = document.querySelector('#input_4');
            
            inputPasRep.addEventListener('input', () => {
                const pas1Value = inputPas.value.split(''),
                      pas2Value = inputPasRep.value.split(''),
                      i1 = document.querySelector('#form_modal_icon_1'),
                      i2 = document.querySelector('#form_modal_icon_2'),
                      i3 = document.querySelector('#form_modal_icon_3'),
                      i4 = document.querySelector('#form_modal_icon_4'),
                      s1 = document.querySelector('#small_name'),
                      s2 = document.querySelector('#small_email'),
                      s3 = document.querySelector('#small_password'),
                      s4 = document.querySelector('#small_repeat_passwords');
               
                for(let i = 0; i < pas2Value.length; i++) {
                    if(pas1Value[i] !== pas2Value[i]) {
                        i3.classList.add('i_error', 'fa-exclamation-circle');
                        i4.classList.add('i_error', 'fa-exclamation-circle');
                        i3.classList.remove('i_super', 'fa-check-circle');
                        i4.classList.remove('i_super', 'fa-check-circle');
                        inputPas.classList.add('input_error');
                        inputPasRep.classList.add('input_error');
                        s3.classList.add('small_visible');
                        s4.classList.add('small_visible');
                        s3.textContent = 'incorrect password';
                        s4.textContent = 'incorrect password';
                        break;
                    } else {
                        if(pas1Value.length === pas2Value.length && i === pas2Value.length - 1) {
                            i3.classList.add('i_super');
                            i4.classList.add('i_super');
                            inputPas.classList.add('input_success');
                            inputPasRep.classList.add('input_success');
                            _windowRegistr_js__WEBPACK_IMPORTED_MODULE_1__.btn.classList.add('btn_success');
                            _windowRegistr_js__WEBPACK_IMPORTED_MODULE_1__.btn.classList.remove('change_color_button');
                            i3.classList.remove('i_error', 'fa-exclamation-circle');
                            i4.classList.remove('i_error', 'fa-exclamation-circle');
                            s3.classList.remove('small_visible');
                            s4.classList.remove('small_visible');
                        }
                    }
                }
                
            });
        }
    });

    const inputNameLogin = document.querySelector('#input_name'),
          inputPasLogin =  document.querySelector('#input_pas'),
          btnLodIn =  document.querySelector('.button_registr'),
          errorMessage = document.querySelector('.message_error_window_login'),
          arrayUsersLocalStorage = JSON.parse(localStorage.getItem('arr'));
    
    //checking username and password at login
    
     btnLodIn.addEventListener('click', e => {
        e.preventDefault();
        const dataLocal = JSON.parse(localStorage.getItem('arr')),
              password = dataLocal.map(element => element.password),
              name = dataLocal.map(element => element.name);
        
        for(let i = 0; i < password.length; i++) {  
            if(inputNameLogin.value === '' || inputPasLogin.value === '') {
                errorMessage.style.visibility = 'visible';
                errorMessage.innerHTML = 'You did not fill in the fields';
            } else if(name[i] === inputNameLogin.value && password[i] === inputPasLogin.value) {
                _script__WEBPACK_IMPORTED_MODULE_3__.linkLogReg.style.display = 'none';
                _windowLogin__WEBPACK_IMPORTED_MODULE_0__.modal.remove();
                _windowLogin__WEBPACK_IMPORTED_MODULE_0__.dark.remove();
                (0,_script__WEBPACK_IMPORTED_MODULE_3__.createContentHeader)(name[i]);
                saveNamePlayer = name[i];
            } else if(name[i] === inputNameLogin.value && password[i] !== inputPasLogin.value) {
                errorMessage.style.visibility = 'visible';
                errorMessage.innerHTML = 'Password incorrect';
                break;
            } else {
                errorMessage.style.visibility = 'visible';
                errorMessage.innerHTML = 'Such user is not registered';
            }
        }
    })
    // close modal window click of dark
    window.addEventListener('click', e => {
        if(e.target === _windowLogin__WEBPACK_IMPORTED_MODULE_0__.dark) {
            _windowLogin__WEBPACK_IMPORTED_MODULE_0__.modal.remove();
            _windowLogin__WEBPACK_IMPORTED_MODULE_0__.dark.remove(); 
        }
    })
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (closeWindowLogin);

/***/ }),

/***/ "./src/js/game.js":
/*!************************!*\
  !*** ./src/js/game.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _script__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./script */ "./src/js/script.js");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./events */ "./src/js/events.js");
/* harmony import */ var _windowLogin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./windowLogin */ "./src/js/windowLogin.js");
/* harmony import */ var _windowRecord__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./windowRecord */ "./src/js/windowRecord.js");
/* harmony import */ var _windowDeveloper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./windowDeveloper */ "./src/js/windowDeveloper.js");







function startGame() {
    
    const root = document.querySelector('.root');
    root.classList.add('game-zone');

    let gameZone = document.querySelector('.root'),
        count = 0,
        fps = 1000 / 60,
        player = {
            el: false,
            x: 500,
            y: gameZone.getBoundingClientRect().bottom - 230,
            step: 10,
            run: false,
            side: 1, 
            w: 78,
            h: 77
        },
        ints = {
            plRun: false,
            run: false,
            icons: false,
            bom: false,	
            
        },
        countLife = 3,
        speedAppearElements = 1000;
    
    function randomInteger(min, max) {
        let rand = min - 0.5 + Math.random() * (max - min + 1);
        return Math.round(rand);
    }
    
    function init() {
        gameZone.innerHTML += `<div class="player" style="left: ${player.x}px; top: ${player.y}px;"></div>`;
        player.el = document.querySelector('.player');
    }
    
    function createCount() {
        const tableCoins = document.createElement('div'),
              lab = document.createElement('label'); 
    
        tableCoins.innerHTML = 'Count:';
        tableCoins.classList.add('form_count');
        lab.classList.add('count_game')
        lab.textContent = `${count}`;    
        
        tableCoins.append(lab);
        root.append(tableCoins); 
    }
    
    function createHearts() {
        const icon = document.createElement('i'),
              icon2 = document.createElement('i'),
              icon3 = document.createElement('i'),
              divIcon = document.createElement('div');
    
        divIcon.classList.add('form_icons');
        icon.classList.add('fa', 'fa-heart', 'icon_heart');
        icon2.classList.add('fa', 'fa-heart', 'icon_heart');
        icon3.classList.add('fa', 'fa-heart', 'icon_heart');

        divIcon.append(icon, icon2, icon3);
        root.append(divIcon);
    }
    
    createHearts();
    createCount();
        
    function gameOver() {
        let modal;
    
        function createModal() {
            modal = document.createElement('div');
            modal.classList.add('modal_game_over');
            document.body.appendChild(modal);
        }
    
        function createDark() {
            const dark = document.createElement('div');
            dark.classList.add('dark_game_over');
            document.body.appendChild(dark);
        }
    
        createModal();
        createDark();
    
        function createFinalPoints() {
            const div = document.createElement('div'),
                  label = document.createElement('label');
            
            div.classList.add('form_final_points');
            label.classList.add('final_points');
            div.textContent = "Your points: ";
            label.textContent = `${count}`;

            div.append(label);
            modal.append(div);
        }
        createFinalPoints();

        function createLinkReplayAndExit(classIcons, classLink) {
            const i = document.createElement('i'),
                  a = document.createElement('a');  
    
            i.classList.add('fas', classIcons);
            a.classList.add(classLink);
            a.setAttribute('href', '#')
    
            a.append(i);
            modal.append(a);
        }
        createLinkReplayAndExit('fa-redo-alt', 'link_replay');
        createLinkReplayAndExit('fa-sign-out-alt', 'link_exit');

        function savePointLocalStorage() {
            let finalPoints;
            finalPoints = JSON.parse(localStorage.getItem('points')) || [];
            const dataPoints = JSON.parse(localStorage.getItem('points'));
            let objPlayer = {
                name: _events__WEBPACK_IMPORTED_MODULE_1__.saveNamePlayer,  
                points: `${count}` 
                };

            let players = JSON.parse(localStorage.getItem('players')) || [];

            if(players == false) {
                players.push(objPlayer.name)
                localStorage.setItem('players', JSON.stringify(players));
            }

            if(finalPoints == false) {
                finalPoints.push(objPlayer);
                localStorage.setItem('points', JSON.stringify(finalPoints));
            } else {
                if(!players.includes(objPlayer.name)) {
                    finalPoints.push(objPlayer);
                    localStorage.setItem('points', JSON.stringify(finalPoints));
                    players.push(objPlayer.name)
                    localStorage.setItem('players', JSON.stringify(players));
                } else {
                    finalPoints.forEach((user, index) => {
                        if(user.name === objPlayer.name && Number(user.points) < Number(objPlayer.points)) {
                            finalPoints.splice(index, 1);
                            finalPoints.push(objPlayer);
                            localStorage.setItem('points', JSON.stringify(finalPoints));
                        } 
                    }) 
                }
            }
        }
        savePointLocalStorage();        
    }
            
    function intervals() {
        ints.plRun = setInterval(() => {
                if (player.run) {
                    switch (player.side) {
                        case 1: // Right
                            if (player.x < gameZone.getBoundingClientRect().right - player.w - 10) {
                                player.x += player.step;
                                player.el.style.left = `${player.x}px`;
                            }
                            break;
                        case 2: // Left
                            if (player.x > 0) {
                                player.x -= player.step;
                                player.el.style.left = `${player.x}px`;
                            }
                            break;
                    }
                }
        }, fps);
    
        ints.run = setInterval(() => {
            let coins = document.querySelectorAll('.coin');
                coins.forEach((coin) => {
                            if (coin.getBoundingClientRect().bottom >= gameZone.getBoundingClientRect().height - 100) {
                                coin.parentNode.removeChild(coin);
                            } else {
                                coin.style.top = coin.getBoundingClientRect().top + 3 + 'px';
                            }   
    
                const playerPosTop = player.el.getBoundingClientRect().top,
                            playerPosRight = player.el.getBoundingClientRect().right,
                            playerPosBottom = player.el.getBoundingClientRect().bottom,
                            playerPosLeft = player.el.getBoundingClientRect().left,
                            coinPosTop = coin.getBoundingClientRect().top,
                            coinPosRight = coin.getBoundingClientRect().right,
                            coinPosBottom = coin.getBoundingClientRect().bottom,
                            coinPosLeft = coin.getBoundingClientRect().left;
                    if (
                        playerPosTop < coinPosBottom &&
                        playerPosBottom > coinPosTop &&
                        playerPosRight > coinPosLeft &&
                        playerPosLeft < coinPosRight
                    ) {
                    coin.parentNode.removeChild(coin);
                    count += 100;
                    let la =  document.querySelector('.count_game');    
                    la.innerHTML = count;
                    }         
                });
    
            let bombs = document.querySelectorAll('.bomb');
                bombs.forEach((bomb) => {
                        if (bomb.getBoundingClientRect().bottom >= gameZone.getBoundingClientRect().height - 100) {
                            bomb.parentNode.removeChild(bomb);
                        } else {
                            bomb.style.top = bomb.getBoundingClientRect().top + 3 + 'px';
                        }   
                    const playerPosTop = player.el.getBoundingClientRect().top,
                                playerPosRight = player.el.getBoundingClientRect().right,
                                playerPosBottom = player.el.getBoundingClientRect().bottom,
                                playerPosLeft = player.el.getBoundingClientRect().left,
                                bombPosTop = bomb.getBoundingClientRect().top,
                                bombPosRight = bomb.getBoundingClientRect().right,
                                bombPosBottom = bomb.getBoundingClientRect().bottom,
                                bombPosLeft = bomb.getBoundingClientRect().left;
                        if (
                            playerPosTop < bombPosBottom &&
                            playerPosBottom > bombPosTop &&
                            playerPosRight > bombPosLeft &&
                            playerPosLeft < bombPosRight
                        ) {
                            if(countLife > 0) {
                                bomb.parentNode.removeChild(bomb);
                        
                                let hearts = document.querySelectorAll('.icon_heart');
                                countLife = countLife - 1;	 
                                hearts[0].remove();
                            } else {
                                clearInterval(ints.icons);
                                clearInterval(ints.bom);
                                clearInterval(ints.run);
                                clearInterval(ints.plRun);
                                gameOver();

                                const replay = document.querySelector('.link_replay'),
                                      modal = document.querySelector('.modal_game_over'),
                                      dark = document.querySelector('.dark_game_over'),
                                      pl = document.querySelector('.player'),
                                      formCount = document.querySelector('.form_count'),
                                      formCoins = document.querySelector('.form_icons'),
                                      coin = document.querySelectorAll('.coin'),
                                      bomb = document.querySelectorAll('.bomb'),
                                      exit = document.querySelector('.link_exit');

                                
                                function replayGame() {
                                    replay.addEventListener('click', () => {
                                        root.classList.remove('game-zone');
                                        modal.remove();
                                        dark.remove();
                                        pl.remove();
                                        formCount.remove();
                                        formCoins.remove();
                                        coin.forEach(e => e.remove())
                                        bomb.forEach(e => e.remove())
                                        startGame();
                                   
                                    });
                                }
                                replayGame();
                                                               
                                exit.addEventListener('click', () => {
                                    root.classList.remove('game-zone');
                                    modal.remove();
                                    dark.remove();
                                    pl.remove();
                                    formCount.remove();
                                    formCoins.remove();
                                    coin.forEach(e => e.remove());
                                    bomb.forEach(e => e.remove());
                                    
                                    (0,_script__WEBPACK_IMPORTED_MODULE_0__.createHeader)();
                                    (0,_script__WEBPACK_IMPORTED_MODULE_0__.createHeaderLoginRegistration)();
                                    (0,_script__WEBPACK_IMPORTED_MODULE_0__.createContentHeader)();
                                    (0,_script__WEBPACK_IMPORTED_MODULE_0__.createContainer)();
                                    (0,_script__WEBPACK_IMPORTED_MODULE_0__.createLink)('Start', 'link_start');
                                    (0,_script__WEBPACK_IMPORTED_MODULE_0__.createLink)('Record', 'record');
                                    (0,_script__WEBPACK_IMPORTED_MODULE_0__.createLink)('Developer', 'link_developer');

                                    const linkStart = document.querySelector('#link_start');
                                    linkStart.addEventListener('click', () => {
                                        _script__WEBPACK_IMPORTED_MODULE_0__.header.remove();
                                        _script__WEBPACK_IMPORTED_MODULE_0__.container.remove();
                                        startGame();
                                    })

                                    const linkRecord = document.querySelector('#record');

                                    linkRecord.addEventListener('click', () => {
                                        (0,_windowRecord__WEBPACK_IMPORTED_MODULE_3__.default)();
                                    });

                                    const linkDeveloper = document.querySelector('#link_developer');

                                    linkDeveloper.addEventListener('click', () => (0,_windowDeveloper__WEBPACK_IMPORTED_MODULE_4__.default)());
                                });
                            }
                        }     
                })
        }, fps);
    
        ints.icons = setInterval(() => {
            gameZone.innerHTML += `<div class="coin" style="top: 0; left: ${randomInteger(0, gameZone.getBoundingClientRect().width - player.w)}px;"></div>`;
            player.el = document.querySelector('.player');
        }, speedAppearElements);
    
        ints.bom = setInterval(() => {
            gameZone.innerHTML += `<div class="bomb" style="top: 0; left: ${randomInteger(0, gameZone.getBoundingClientRect().width - player.w)}px;"></div>`;
            player.el = document.querySelector('.player');
        }, speedAppearElements);
    }
    
    function controllers() {
        document.addEventListener('keydown', e => {
            switch (e.keyCode) {
                case 39: // Right
                    player.run = true;
                    player.side = 1;
                    break;
                case 68: // Right
                    player.run = true;
                    player.side = 1;
                    break;
                case 37: //Left
                    player.run = true;
                    player.side = 2;
                    break;
                case 65: //Left
                    player.run = true;
                    player.side = 2;
                    break;
            }
        });
    
        document.addEventListener('keyup', e => {
            if ([39, 37, 65, 68].includes(e.keyCode))
                player.run = false;
        })
    }
        
    function start() {
        init();
        controllers();
        intervals();
    }
    
    start();
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startGame); 

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "root": () => (/* binding */ root),
/* harmony export */   "container": () => (/* binding */ container),
/* harmony export */   "inputFile": () => (/* binding */ inputFile),
/* harmony export */   "imgAccount": () => (/* binding */ imgAccount),
/* harmony export */   "labelAccount": () => (/* binding */ labelAccount),
/* harmony export */   "header": () => (/* binding */ header),
/* harmony export */   "createHeader": () => (/* binding */ createHeader),
/* harmony export */   "createContentHeader": () => (/* binding */ createContentHeader),
/* harmony export */   "linkLogReg": () => (/* binding */ linkLogReg),
/* harmony export */   "createHeaderLoginRegistration": () => (/* binding */ createHeaderLoginRegistration),
/* harmony export */   "createContainer": () => (/* binding */ createContainer),
/* harmony export */   "createLink": () => (/* binding */ createLink),
/* harmony export */   "linkStart": () => (/* binding */ linkStart),
/* harmony export */   "linkRecord": () => (/* binding */ linkRecord),
/* harmony export */   "linkDeveloper": () => (/* binding */ linkDeveloper)
/* harmony export */ });
/* harmony import */ var _windowLogin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./windowLogin */ "./src/js/windowLogin.js");
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game */ "./src/js/game.js");
/* harmony import */ var _windowRecord__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./windowRecord */ "./src/js/windowRecord.js");
/* harmony import */ var _windowDeveloper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./windowDeveloper */ "./src/js/windowDeveloper.js");





const root = document.querySelector('.root');
let container, inputFile, imgAccount, labelAccount, header;

function createHeader () {
    header = document.createElement('header');
       
    header.classList.add('header');
        
    root.appendChild(header);
}

createHeader();

function createContentHeader(nameUser) {
    const  div = document.createElement('div'),
           a = document.createElement('a');

    imgAccount = document.createElement('img'),
    inputFile = document.createElement('input');
    labelAccount = document.createElement('label');

    imgAccount.setAttribute('src', 'img/account_icon.png');
    imgAccount.setAttribute('alt', 'account_img');
    imgAccount.classList.add('img_account');
    div.textContent = nameUser;
    div.classList.add('name_player');
    a.classList.add('list_acc');
    inputFile.setAttribute('type', 'file');
    inputFile.setAttribute('id', 'account_file');
    labelAccount.setAttribute('for', 'account_file');
    labelAccount.setAttribute('id', 'label_account');

    labelAccount.append(inputFile, imgAccount);
    a.append(div, labelAccount);
    header.append(a);
    

    inputFile.addEventListener('change', e => {
        const selectedFile = e.target.files[0];
        const reader = new FileReader();
        
        imgAccount.title = selectedFile.name;
        
        reader.onload = e => imgAccount.src = e.target.result;
        reader.readAsDataURL(selectedFile);
    })
}

let linkLogReg;
function createHeaderLoginRegistration() {
    linkLogReg = document.createElement('a');

    linkLogReg.classList.add('link_log_reg');
    linkLogReg.textContent = 'Log in / Registration';

    header.append(linkLogReg);
}

createHeaderLoginRegistration();
(0,_windowLogin__WEBPACK_IMPORTED_MODULE_0__.default)();

function createContainer() {
    container = document.createElement('div');
    container.classList.add('container');
    root.appendChild(container);
}

createContainer();

function createLink (title, id) {
    let a = document.createElement('a');

    a.innerHTML = title;
    a.classList.add('a_main');
    a.setAttribute('href', '#');
    a.setAttribute('id', id);      
    container.appendChild(a);
}

createLink('Start', 'link_start');
createLink('Record', 'record');
createLink('Developer', 'link_developer');

const linkStart = document.querySelector('#link_start');

linkStart.addEventListener('click', () => {
    header.remove();
    container.remove();
    (0,_game__WEBPACK_IMPORTED_MODULE_1__.default)();
});

const linkRecord = document.querySelector('#record');

linkRecord.addEventListener('click', () => {
    (0,_windowRecord__WEBPACK_IMPORTED_MODULE_2__.default)();
});

const linkDeveloper = document.querySelector('#link_developer');

linkDeveloper.addEventListener('click', () => (0,_windowDeveloper__WEBPACK_IMPORTED_MODULE_3__.default)());




/***/ }),

/***/ "./src/js/validate.js":
/*!****************************!*\
  !*** ./src/js/validate.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _windowRegistr_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./windowRegistr.js */ "./src/js/windowRegistr.js");




function actionBtn() {
    _windowRegistr_js__WEBPACK_IMPORTED_MODULE_0__.btn.addEventListener('mouseover', () => {
        _windowRegistr_js__WEBPACK_IMPORTED_MODULE_0__.btn.classList.add('change_color_button'); //change the style of the button
    });

    _windowRegistr_js__WEBPACK_IMPORTED_MODULE_0__.btn.addEventListener('mouseout', () => {
        _windowRegistr_js__WEBPACK_IMPORTED_MODULE_0__.btn.classList.toggle('change_color_button'); //change the style of the button
    });

    _windowRegistr_js__WEBPACK_IMPORTED_MODULE_0__.btn.addEventListener('click', () => {
        const inputName = document.querySelector('#input_1'),
              inputEmail = document.querySelector('#input_2'),
              inputPas = document.querySelector('#input_3'),
              inputPasRep = document.querySelector('#input_4'),        
              i1 = document.querySelector('#form_modal_icon_1'),
              i2 = document.querySelector('#form_modal_icon_2'),
              i3 = document.querySelector('#form_modal_icon_3'),
              i4 = document.querySelector('#form_modal_icon_4'),
              s1 = document.querySelector('#small_name'),
              s2 = document.querySelector('#small_email'),
              s3 = document.querySelector('#small_password'),
              s4 = document.querySelector('#small_repeat_passwords');
     
        if(inputPas.value !== inputPasRep.value || inputPas.value === '' || inputPasRep.value === '') {
            i3.classList.add('i_error', 'fa-exclamation-circle');
            i4.classList.add('i_error', 'fa-exclamation-circle');
            i3.classList.remove('i_super', 'fa-check-circle');
            i4.classList.remove('i_super', 'fa-check-circle');
            inputPas.classList.add('input_error');
            inputPasRep.classList.add('input_error');
            s3.classList.add('small_visible');
            s4.classList.add('small_visible');
            s3.textContent = 'incorrect password';
            s4.textContent = 'incorrect password';
        } else {
            i3.classList.add('i_super');
            i4.classList.add('i_super');
            inputPas.classList.add('input_success');
            inputPasRep.classList.add('input_success');
            _windowRegistr_js__WEBPACK_IMPORTED_MODULE_0__.btn.classList.add('btn_success');
            _windowRegistr_js__WEBPACK_IMPORTED_MODULE_0__.btn.classList.remove('change_color_button');
        } 
    });

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (actionBtn);


/***/ }),

/***/ "./src/js/windowDeveloper.js":
/*!***********************************!*\
  !*** ./src/js/windowDeveloper.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _script__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./script */ "./src/js/script.js");



function createModalWindowDeveloper() {
    let modal;

    class Page {
        constructor(name) {
            this.name = name;  
        }
     
        createModal() {
            modal = document.createElement('div');
            modal.classList.add('modal_developer');
            _script__WEBPACK_IMPORTED_MODULE_0__.root.appendChild(modal);
        }
     
        createDark() {
            const dark = document.createElement('div');
            dark.classList.add('dark_developer');
            _script__WEBPACK_IMPORTED_MODULE_0__.root.appendChild(dark);
        }
        
        createClose() {
            const closeBtn = document.createElement('i');
            closeBtn.classList.add('fas', 'fa-times', 'close_btn_window_developer');
            modal.appendChild(closeBtn);
        }

        createTitle(classTitle, textTitle, placeTitle) {
            const h1 = document.createElement('h1');
            h1.classList.add(classTitle);
            h1.textContent = textTitle;

            placeTitle.appendChild(h1);
        } 

        createWrapper(classWrapeer, textWrapper) {
            const div = document.createElement('div');
            div.classList.add(classWrapeer);
            div.textContent = textWrapper;

            modal.appendChild(div);
        }
    }
    
    class Developer {
        constructor(name) {
            this.name = name;
        }
      
        createAvatar(place) {
            fetch('https://api.github.com/users/kayarmolenka')
            .then(response => response.json())
            .then(user => {
                let img = document.createElement('img');
                img.src = user.avatar_url;
                img.alt = 'avatar';
                img.className = 'avatar';
                place.appendChild(img);
            })
        }

        createName(place) {
            fetch('https://api.github.com/users/kayarmolenka')
            .then(response => response.json())
            .then(user => new Promise((res, rej) => {
                let p = document.createElement('p');
                p.textContent = user.name;
                p.className = 'name_user';
                place.appendChild(p);
            }));
        }

        createLinkRepository(place) {
        fetch('https://api.github.com/users/kayarmolenka/repos')
            .then(response => response.json())
            .then(response => response.map(repos => repos.html_url))
            .then(url => new Promise((res, rej) => {
                let p = document.createElement('p');
                p.className = 'text_repos';
                p.innerHTML = `If you want to see the code of the game, you can go to the <a class="link_repos_dom" href="${url[0]}" target="_blank">repository</a>.`
                place.appendChild(p);
            }));
        }
    
    }
    
    const pageDeveloper = new Page();
    
    pageDeveloper.createModal();
    pageDeveloper.createDark();
    pageDeveloper.createClose();

    pageDeveloper.createWrapper('title_developer');
    const titleDeveloper = document.querySelector('.title_developer');
    pageDeveloper.createTitle('header_developer', 'Application developer', titleDeveloper);
    
    pageDeveloper.createWrapper('image_developer');
    const imageDeveloper = document.querySelector('.image_developer');
    
    pageDeveloper.createWrapper('name_developer');
    const nameDeveloper = document.querySelector('.name_developer');
    pageDeveloper.createWrapper('repos_developer');
    const reposDeveloper = document.querySelector('.repos_developer');
    
    
    const kosty = new Developer();
    kosty.createAvatar(imageDeveloper);
    kosty.createName(nameDeveloper);
    kosty.createLinkRepository(reposDeveloper);

    function closeWindowDeveloper() {
        const d = document.querySelector('.dark_developer'),
        m = document.querySelector('.modal_developer'),
        iconsClose = document.querySelector('.close_btn_window_developer');

        window.addEventListener('click', e => {
            if(e.target === d) {
                m.remove();
                d.remove(); 
            }
        });
        
        iconsClose.addEventListener('click', () => {
            m.remove();
            d.remove();  
        })
    }
    closeWindowDeveloper();
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createModalWindowDeveloper);


/***/ }),

/***/ "./src/js/windowLogin.js":
/*!*******************************!*\
  !*** ./src/js/windowLogin.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "linkRegistration": () => (/* binding */ linkRegistration),
/* harmony export */   "closeBtn": () => (/* binding */ closeBtn),
/* harmony export */   "modal": () => (/* binding */ modal),
/* harmony export */   "dark": () => (/* binding */ dark),
/* harmony export */   "btn": () => (/* binding */ btn),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _script__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./script */ "./src/js/script.js");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./events */ "./src/js/events.js");



let linkRegistration;
let closeBtn;
let modal;
let dark;
let btn;

function createModalLoginWindow () {

    let form;

    function createModal() {
        modal = document.createElement('div');
        modal.classList.add('modal');
        document.body.appendChild(modal);
    }

    function createDark() {
        dark = document.createElement('div');
        dark.classList.add('dark');
        document.body.appendChild(dark);
    }

    function createClose() {
        closeBtn = document.createElement('i');
        closeBtn.classList.add('fas', 'fa-times', 'close_btn_window_login');
        modal.appendChild(closeBtn);
    }

    function createHeaderModal() {
        let headerModal = document.createElement('div');

        headerModal.textContent = 'LOG IN';
        headerModal.classList.add('header_modal');
        modal.appendChild(headerModal);
    }

    function createForm() {
        form = document.createElement('form');
        form.classList.add('form_modal');
        modal.appendChild(form);
    }

    function createInput(ID, NamePlaceholder, TypeInput,labelFor, labelText,labelID) {
        const input = document.createElement('input'),
            label = document.createElement('label'),
            divInput = document.createElement('div');

        input.setAttribute('type', TypeInput);
        input.setAttribute('placeholder', NamePlaceholder);
        divInput.classList.add('form_row'); 
        input.setAttribute('id', ID);
        label.setAttribute('for', labelFor);
        label.setAttribute('id', labelID);
        label.textContent = labelText;


        divInput.appendChild(input);  
        divInput.appendChild(label);  
        form.appendChild(divInput); 

    }

    function createLinkForgot() {
        let divAnhor = document.createElement('div');

        linkRegistration = document.createElement('a');
        
        divAnhor.classList.add('form_forgot'); 
        linkRegistration.classList.add('link_registration'); 
        linkRegistration.textContent = 'Create new account'; 

        divAnhor.appendChild(linkRegistration);
        form.appendChild(divAnhor);
        
    }
    
    function createButton() {
        btn = document.createElement('button');
        const containerBtn = document.createElement('div'),
              messageError = document.createElement('div');   

        containerBtn.classList.add('form_row', 'form_button'); 
        btn.classList.add('button_registr');
        btn.textContent = 'LOG IN';
        messageError.classList.add('message_error_window_login');
        messageError.textContent = 'Incorrect password or username';

        containerBtn.append(messageError, btn);
        form.appendChild(containerBtn);   
    }

    _script__WEBPACK_IMPORTED_MODULE_0__.linkLogReg.addEventListener('click', () => {
        
        createModal();
        createDark();
        createClose();
        createHeaderModal();
        createForm(); 
        createInput('input_name', 'Username', 'text', 'input_name','', 'label_1');
        createInput('input_pas', 'Password', 'password', 'input_pas','', 'label_2'); 
        createInput('input_box', '', 'checkbox', 'input_box', 'Remember me', 'label_3');
        createButton();
        createLinkForgot();
        (0,_events__WEBPACK_IMPORTED_MODULE_1__.default)();
    });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createModalLoginWindow);

    




/***/ }),

/***/ "./src/js/windowRecord.js":
/*!********************************!*\
  !*** ./src/js/windowRecord.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _script__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./script */ "./src/js/script.js");



function createWindowRecord() {

    let modal, containerRecord;

    function createModal() {
        modal = document.createElement('div');
        modal.classList.add('modal_record');
        _script__WEBPACK_IMPORTED_MODULE_0__.root.appendChild(modal);
    }

    function createDark() {
        const dark = document.createElement('div');
        dark.classList.add('dark_record');
        _script__WEBPACK_IMPORTED_MODULE_0__.root.appendChild(dark);
    }
    function createClose() {
        const closeBtn = document.createElement('i');
        closeBtn.classList.add('fas', 'fa-times', 'close_btn_window_record');
        modal.appendChild(closeBtn);
    }

    createModal();
    createDark();
    createClose();

    function createHeader() {
        const div = document.createElement('div');
        div.classList.add('header_record');
        div.textContent = 'List of records';
        modal.appendChild(div);
    }
    createHeader();

    function createContainerRecord() {
        containerRecord = document.createElement('div');
        containerRecord.classList.add('container_record');
        modal.appendChild(containerRecord);
    }
    createContainerRecord();

    function createManyDiv(text) {
        const div = document.createElement('div');
        div.classList.add('cel_record');
        div.textContent = text;
        containerRecord.appendChild(div);
    }

    createManyDiv('№');
    createManyDiv('Name');
    createManyDiv('Points');

    let num = 1;
    const getPointsLocalStorage = JSON.parse(localStorage.getItem('points'));
    if(getPointsLocalStorage) {
        getPointsLocalStorage.sort((a,b) => b.points - a.points).forEach(person => {
            if(Object.keys(person).length > 1) {
                createManyDiv(num);
                createManyDiv(person.name);
                createManyDiv(person.points);
                num++;
            }
        });
    }
    function closeWindowRecord() {
        const d = document.querySelector('.dark_record'),
        m = document.querySelector('.modal_record'),
        iconsClose = document.querySelector('.close_btn_window_record');

        window.addEventListener('click', e => {
            if(e.target === d) {
                m.remove();
                d.remove(); 
            }
        });
        
        iconsClose.addEventListener('click', () => {
            m.remove();
            d.remove();  
        })
    }
    closeWindowRecord();
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createWindowRecord);

/***/ }),

/***/ "./src/js/windowRegistr.js":
/*!*********************************!*\
  !*** ./src/js/windowRegistr.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "btn": () => (/* binding */ btn),
/* harmony export */   "form": () => (/* binding */ form),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _script_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./script.js */ "./src/js/script.js");


let btn;
let form;

function callRegistrationWindow() {

    const containerModal = document.createElement('div');

    function createForm() {
        let header = document.createElement('div'),
            h2 = document.createElement('h2'),
            closeModalRegistration = document.createElement('i');

        form = document.createElement('form');
        
        h2.textContent = 'Create Account';
        form.classList.add('form_registration');
        form.setAttribute('name', 'form_inputs');
        header.classList.add('header_modal_login');
        containerModal.classList.add('container_modal');
        closeModalRegistration.classList.add('fas', 'fa-times', 'close_btn_window_registration');

    
        header.append(h2);
        containerModal.append(header, form, closeModalRegistration);
    }

    createForm();
    let dark2;
    function createDark() {
        dark2 = document.createElement('div');
        dark2.classList.add('dark');
        document.body.appendChild(dark2);
    }

    createDark();

    function createFormControl (options) {
        let formControl = document.createElement('div'),
            label = document.createElement('label'),
            input = document.createElement('input'),
            icon = document.createElement('i'),
            small = document.createElement('small');
            
        label.textContent = options.nameInput;
        small.textContent = 'Error message';
        label.classList.add('label_form_registration');
        small.classList.add('small_registration');
        small.setAttribute('id', options.smallId);

        formControl.classList.add('form_control');
        input.setAttribute('type',options.inputType);
        input.setAttribute('placeholder',options.placeholder);
        input.setAttribute('class','input');
        input.setAttribute('id',options.inputID);

        icon.setAttribute('class','fas fa-check-circle'); 
        icon.setAttribute('id',options.iconID);

        formControl.append(label, input, icon, small);

        form.append(formControl);

    }
    createFormControl({
        nameInput: 'Username',
        placeholder: 'nic08',
        iconID: 'form_modal_icon_1',
        inputID: 'input_1',
        inputType: 'text',
        smallId: 'small_name'
    });

    createFormControl({
        nameInput: 'Email',
        placeholder: 'kayarmolenka@gmail.com',
        iconID: 'form_modal_icon_2',
        inputID: 'input_2',
        inputType: 'email',
        smallId: 'small_email'
    });

    createFormControl({
        nameInput: 'Password',
        placeholder: '47hYnn&',
        iconID: 'form_modal_icon_3',
        inputID: 'input_3',
        inputType: 'password',
        smallId: 'small_password'
    });

    createFormControl({
        nameInput: 'Password check',
        placeholder: '47hYnn&',
        iconID: 'form_modal_icon_4',
        inputID: 'input_4',
        inputType: 'password',
        smallId: 'small_repeat_passwords'
    });
    
    function createButton() {
        btn = document.createElement('button');
        
        let div = document.createElement('div');

        btn.classList.add('btn_modal_registration');
        btn.textContent = 'Submit';
        div.classList.add('btn_modal_registration_form');

        div.append(btn);
        form.append(div);
        
    }
    
    createButton();

    _script_js__WEBPACK_IMPORTED_MODULE_0__.root.append(containerModal);
    
    function closeModalRegistration() {
        const d = document.querySelector('.dark'),
              m = document.querySelector('.container_modal');
    
        d.addEventListener('click', () => {
            d.remove(); 
            m.remove(); 
        })
    }
    closeModalRegistration();
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (callRegistrationWindow);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	__webpack_require__("./src/js/script.js");
/******/ })()
;
//# sourceMappingURL=bundle.js.map