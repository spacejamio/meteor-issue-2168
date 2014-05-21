Package.describe({
  summary: "Simple program"
})

Package.on_use(function(api) {
//  api.use(['standard-app-packages']);
  // Comment this to see the missing no-ops bugs in action
  api.use(['accounts-base']);
  api.use(['mongo-livedata'], ['server']);

  api.export('main')

  // Comment this to see the ServiceConfiguration bug in action
  api.add_files("missing-no-ops.js");
  api.add_files("main.js");

  // No way to reproduce the missing Meteor.server check in
  // accounts-base without first solving the ServiceConfiguration bug

});
