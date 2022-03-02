let submitBtn = document.getElementById('submit');
submitBtn.addEventListener('click', event=> {
    clickSubmit();
});

function clickSubmit(){
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const web = document.getElementById('web').value;
    const check =document.getElementById('check').value;
    console.log('The input values are: Email: ' + email 
    + ' Password: ' + password + 'Web:' + web +
    'Check: ' + check);
}