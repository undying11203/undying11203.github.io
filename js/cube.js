window.onload = function(){
	var width = window.innerWidth;
	var height = window.innerHeight;

	var canv = document.getElementById('canv');
	var ctx = canv.getContext('3d');

	canv.setAttribute('width', width)
	canv.setAttribute('height', height)

	var renderer = new THREE.WebGLRenderer({canvas:canv});
	renderer.setClearColor(0x000000);

	var scene = new THREE.Scene();

	var camera = new THREE.PerspectiveCamera(45, width/height, 0.1, 5000);
	camera.position.set(100,0,1000);

	var light = new THREE.AmbientLight(0xffffff);
	scene.add(light);

	var geometry = new THREE.BoxGeometry(200, 200, 200);
	var material = new THREE.MeshBasicMaterial({color:0xffffff, vertexColors: THREE.FaceColors});
	
	for (var i = 0; i < geometry.faces.length; i++) {
		geometry.faces[i].color.setRGB(Math.random(), Math.random(), Math.random());
	}

	var mesh = new THREE.Mesh(geometry, material);
	scene.add(mesh)

	function loop(){
		mesh.rotation.y += Math.PI/500;

		renderer.render(scene, camera);
		requestAnimationFrame(function(){loop();});
	}
	
	loop();
}

