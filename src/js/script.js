import createModalLoginWindow from './windowLogin';
import startGame from './game';
import createWindowRecord from './windowRecord';
import createModalWindowDeveloper from './windowDeveloper';

export const root = document.querySelector('.root');
export let container, inputFile, imgAccount, labelAccount, header;

export function createHeader () {
    header = document.createElement('header');
       
    header.classList.add('header');
        
    root.appendChild(header);
}

createHeader();

export function createContentHeader(nameUser) {
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

export let linkLogReg;
export function createHeaderLoginRegistration() {
    linkLogReg = document.createElement('a');

    linkLogReg.classList.add('link_log_reg');
    linkLogReg.textContent = 'Log in / Registration';

    header.append(linkLogReg);
}

createHeaderLoginRegistration();
createModalLoginWindow();

export function createContainer() {
    container = document.createElement('div');
    container.classList.add('container');
    root.appendChild(container);
}

createContainer();

export function createLink (title, id) {
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

export const linkStart = document.querySelector('#link_start');

linkStart.addEventListener('click', () => {
    header.remove();
    container.remove();
    startGame();
});

export const linkRecord = document.querySelector('#record');

linkRecord.addEventListener('click', () => {
    createWindowRecord();
});

export const linkDeveloper = document.querySelector('#link_developer');

linkDeveloper.addEventListener('click', () => createModalWindowDeveloper());


