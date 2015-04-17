var comm = new Icecomm('3kB4PpZaNNFN4r3xhmOVgcPn2D8rzcOTtQFh4gRwmAsaGTPwlm', {debug: true});

function connect(room) {
  comm.connect(room, {audio: false}, testMethods);
}

connect(window.location.pathname);

if (comm.getLocalID()) {
  console.log('getLocalID should not change anything');
}

comm.on('connected', function(options) {
  var remote = options.getVideo();
  remote.setAttribute('class', 'remote');
  document.getElementsByClassName('colorful box')[0].appendChild(remote);
});

comm.on('local', function(options) {
  console.log('local called');
  document.getElementsByClassName('colorful box')[0].appendChild(options.getVideo());
});

comm.on('global_connect', function(options) {
  console.log('somebody joined', options);
  testCaller(options);
});

comm.on('global_disconnect', function(options) {
  testCaller(options);
});

comm.on('data', function(options) {
  $('#textarea').append(options.data);
});

comm.on('disconnect', function(options) {
  document.getElementById(options.callerID).remove();
  testCaller(options);
});

$(document).on('ready', function() {
  $('#testMethods').on('click', function() {
    testMethods();
  });

  $('#sendButton').on('click', function(e) {
    e.preventDefault();
    var message = $('#sendInput').val();
    if (message) {
      comm.send(message);
      $('#textarea').append(message);
    }
  });

  $('#changeRoom').on('click', function(e) {
    e.preventDefault();
    connect('room');
  });

  $('body').on('click', '.remote', function() {
    if (!$(this)[0].muted) {
      console.log('muting');
      $(this)[0].muted = true;
      $(this).addClass('muted');
    } else {
      $(this)[0].muted = false;
      $(this).removeClass('muted');
    }
  });
});