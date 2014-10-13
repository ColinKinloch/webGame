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
  
  var geometry = new THREE.BoxGeometry(1,1,1);
  var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
  var cube = new THREE.Mesh( geometry, material );
  game.renderer.scene.add( cube );
  game.renderer.camera.position.z = 5;
  game.renderer.render();
});

