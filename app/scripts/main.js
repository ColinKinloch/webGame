/*global require*/
'use strict';
require.config({
  baseUrl: 'scripts',
  shim: {
    three: {
      exports: 'THREE'
    }
  },
  paths: {
    three: '../bower_components/threejs/build/three'
  }
});

require(['jquery', 'three', 'game/game'],
function( $      ,  THREE ,  Game ) {
  var game = new Game($('#main-canvas'));

  var pointLight = new THREE.PointLight( 0xff00ff, 1, 100 );
  pointLight.position.set( 2, 2, 2 );

  var light = new THREE.AmbientLight( 0xaaa );
  var geometry = new THREE.BoxGeometry( 1, 1, 1 );
  var material = new THREE.MeshPhongMaterial({
    ambient: 0xaaa,
    color: 0xdddddd,
    specular: 0x009900,
    shininess: 30,
    shading: THREE.FlatShading
  });
  var cube = new THREE.Mesh( geometry, material );
  game.renderer.scene.add( cube );
  game.renderer.scene.add( light );
  game.renderer.scene.add( pointLight );
  game.renderer.camera.position.z = 5;
  game.renderer.render();

  var i = 0,
    maxSkip = 10,
    nextTick = (new Date).getTime();

  function loop(){
    cube.rotation.x += 0.1;
    cube.rotation.y += 0.1;
    setTimeout(loop, 50);
  }
  loop();
});
