function testCaller(options) {
  var passed = true;
  if (!options.callerID) {
    passed = false;
    console.log('error with options.callerID');
  }
  if (!options.ID) {
    passed = false;
    console.log('error with options.callerID');
  }
  if (!options.joined_at) {
    passed = false;
    console.log('error with options.joined at');
  }
  if (passed) {
    console.log('all test passed');
  }
}

function testMethods() {
  var passed = true;
  if (!comm.getLocalID()) {
    passed = false;
    console.log('error with getLocalID');
  }
  if (!comm.getRoomSize() || isNaN(comm.getRoomSize())) {
    passed = false;
    console.log('error with getRoomSize');
  }
  if (!comm.getDomain()) {
    passed = false;
    console.log('error with getDomain');
  }
  if (!comm.getRemoteIDs()) {
    passed = false;
    console.log('error with getRemoteIDs');
  }
  if (!comm.getRooms()) {
    passed = false;
    console.log('error with getRooms');
  }
  if (passed) {
    console.log('all method test passed');
  }
}