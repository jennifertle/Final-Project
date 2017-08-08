$(document).ready(function(){
  $(".wrapper").hide();
  $(".message").hide();
  $(".wrapper").empty();
  $(".button1").click(function(){
      $(".wrapper").empty();
    });
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyC89oJq1SeKPEKY6Zx4BTU1kGh5YcJELmk",
    authDomain: "mental-health-ef80b.firebaseapp.com",
    databaseURL: "https://mental-health-ef80b.firebaseio.com",
    projectId: "mental-health-ef80b",
    storageBucket: "mental-health-ef80b.appspot.com",
    messagingSenderId: "344762775236"
  };
  firebase.initializeApp(config);

  var fb = firebase.database().ref();
  // var fb = new Firebase("https://codepentestt.firebaseio.com/");
  var messages = fb.child("messages");
  var btn = $('button');
  var wrap = $('.wrapper');
  var input = $('input.message');
  var usernameInput = $('input.username');

  var user = [];

  (function($) {
    $.sanitize = function(input) {
      var output = input.replace(/<script[^>]*?>.*?<\/script>/gi, '').
             replace(/<[\/\!]*?[^<>]*?>/gi, '').
             replace(/<style[^>]*?>.*?<\/style>/gi, '').
             replace(/<![\s\S]*?--[ \t\n\r]*>/gi, '');
        return output;
    };
  })(jQuery);


  usernameInput.on('keyup', function(e) {
    if (e.keyCode === 13 && usernameInput.val().length > 0) {
      var getTxt = usernameInput.val();
      user.push(getTxt);
      usernameInput.val('');
      $('.initModal').css('display', 'none');
      console.log(user);
      $(".wrapper").show();
      $(".message").show();
    }
  });



  input.on('keyup', function(e) {
    console.log(input.val())
    var curUsername = user.join();
    if (e.keyCode === 13 && input.val().length > 0) {
      var getTxt = input.val();
      console.log(getTxt)
      messages.push({
        user: curUsername,
        message: getTxt
      });
      input.val('');
    }
  });

  messages.on("child_added", function(snap) {
    wrap.append('<li><span>' + $.sanitize(snap.val().user) + ':</span> ' + $.sanitize(snap.val().message) + '</li>');
    window.scrollTo(0,document.body.scrollHeight);
  });
});
 
