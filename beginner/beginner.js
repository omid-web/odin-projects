//alert( 'Hello, world!' )

// Object example

localStorage.setItem('user', JSON.stringify({
    username: 'htmldog',
    api_key: 'abc123xyz789'
}));

var user = JSON.parse(localStorage.getItem('user'));
alert(user.username)