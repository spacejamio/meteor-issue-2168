Package.describe({
  summary: "Simple program"
})

Package.on_use(function(api) {
//  api.use(['standard-app-packages']);
//  api.use(['accounts-base']);
  api.use(['mongo-livedata'], ['server']);

  api.export('main')

  api.add_files("main.js");
});
