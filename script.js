const MENU = document.getElementById('menu');
const BUTTON = document.getElementById('submit-button');
const CLOSE_BUTTON = document.getElementById('close-button');

MENU.addEventListener('click', (event) => {
    MENU.querySelectorAll('a').forEach(el => el.classList.remove('active-nav'));
    event.target.classList.add('active-nav');
});

BUTTON.addEventListener('click', () => {
    if (document.getElementById('contact-name').value.toString() != '' && document.getElementById('contact-email').value.toString() != '') {
        const name = document.getElementById('contact-name').value.toString();    
        const subject = document.getElementById('contact-subject').value.toString();
        const comment = document.getElementById('contact-comment').value.toString();
        
        document.getElementById('result_name').innerText = name;
        document.getElementById('message-block').classList.remove('hidden');

        if (document.getElementById('contact-subject').value.toString() != '') {
            document.getElementById('result_subject').innerText = subject;
            } else {
            document.getElementById('result_subject').innerText = 'Без темы';
        }

        if (document.getElementById('contact-comment').value.toString() != '') {
            document.getElementById('result_comment').innerText = comment;
            } else {
            document.getElementById('result_comment').innerText = 'Без темы';
        }
    }
});

CLOSE_BUTTON.addEventListener('click', (event) => {
    document.getElementById('result_subject').innerText = '';
    document.getElementById('contact-comment').innerText = '';   
    document.getElementById('message-block').classList.add('hidden');
});