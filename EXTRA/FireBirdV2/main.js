//CUSTOM BUTTON

var _googleUser = {};
  var startApp = function() {
    gapi.load('auth2', function(){
      // Retrieve the singleton for the GoogleAuth library and set up the client.
      auth2 = gapi.auth2.init({
        client_id: '679358592795-uphmeq7v5iqm04rklj7fjiqti9gnipk4.apps.googleusercontent.com',
        cookiepolicy: 'single_host_origin',
		fetch_basic_profile: false,
		scope: 'profile',
		 hosted_domain: "itismeucci.com"
		//ux_mode: "redirect"
        // Request scopes in addition to 'profile' and 'email'
        //scope: 'additional_scope'
      });
	  
      attachSignin(document.getElementById('loginBtn'));
    });
  };

  function attachSignin(element) {
    auth2.attachClickHandler(element, {},
        function(googleUser) {
          SignIn(googleUser);
        }, function(error) {
          alert(JSON.stringify(error, undefined, 2));
        });
  }
  
startApp();

// ON SIGNIN

function SignIn(googleUser) {
  _googleUser = googleUser;
  var profile = googleUser.getBasicProfile();
  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
}

// LOGOUT

  function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
    });
  }