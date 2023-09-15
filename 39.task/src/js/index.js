const content = document.getElementById('content');

const div = document.createElement('div');
div.setAttribute('class', 'content_text');
div.innerHTML = 'THIS BLOCK IS CREATING DYNAMICALLY';
content.appendChild(div);