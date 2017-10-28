var loopback = require('loopback');
var fs = require('fs');
var ds = loopback.createDataSource('mysql', {
    "host": "localhost",
    "port": 3306,
    "database": "world",
    "username": "root",
    "password": "password"
  });

ds.discoverSchema('country', {owner : 'world'}, function(err, schema) {
  if(err) {
    console.error(err);
    return;
  }
  console.log(schema);

  var json = JSON.stringify(schema, null, '  ');
  console.log(json);

  fs.writeFile("country.json", json, function(err) {
      if(err) {
          return console.log(err);
      }
  
      console.log("The file was saved!");
  }); 

  ds.disconnect();
});

/* REMEMBER, MUST ADD Country to model-config.json,  */