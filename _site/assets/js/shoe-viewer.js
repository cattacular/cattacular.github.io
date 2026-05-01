/**
 * 3D Shoe Viewer with Material Customization
 * Features:
 * - Rotating turntable display
 * - Material switching
 * - Interactive controls
 * - Mobile-responsive layout
 */

class ShoeViewer {
  constructor(containerId, options = {}) {
    this.container = document.getElementById(containerId);
    if (!this.container) {
      console.error(`Container with id "${containerId}" not found`);
      return;
    }

    this.options = {
      backgroundColor: 0x1a1a1a,
      enableControls: true,
      autoRotate: true,
      rotationSpeed: 2.0,
      modelPath: options.modelPath || null, // Path to GLTF/GLB model
      ...options
    };

    this.scene = null;
    this.camera = null;
    this.renderer = null;
    this.controls = null;
    this.shoeModel = null;
    this.turntable = null;
    this.animationId = null;
    this.isRotating = true;
    this.currentRotationSpeed = this.options.rotationSpeed;

    // Material definitions
    this.materials = {
      'leather-black': {
        type: 'MeshStandardMaterial',
        color: 0x1a1a1a,
        roughness: 0.3,
        metalness: 0.1
      },
      'leather-brown': {
        type: 'MeshStandardMaterial',
        color: 0x8b4513,
        roughness: 0.4,
        metalness: 0.05
      },
      'canvas-white': {
        type: 'MeshStandardMaterial',
        color: 0xf5f5f5,
        roughness: 0.9,
        metalness: 0.0
      },
      'canvas-black': {
        type: 'MeshStandardMaterial',
        color: 0x2a2a2a,
        roughness: 0.9,
        metalness: 0.0
      },
      'suede-tan': {
        type: 'MeshStandardMaterial',
        color: 0xd2b48c,
        roughness: 0.95,
        metalness: 0.0
      },
      'suede-gray': {
        type: 'MeshStandardMaterial',
        color: 0x808080,
        roughness: 0.95,
        metalness: 0.0
      },
      'rubber-black': {
        type: 'MeshStandardMaterial',
        color: 0x0a0a0a,
        roughness: 0.8,
        metalness: 0.0
      },
      'metallic-silver': {
        type: 'MeshStandardMaterial',
        color: 0xc0c0c0,
        roughness: 0.2,
        metalness: 0.9
      },
      'metallic-gold': {
        type: 'MeshStandardMaterial',
        color: 0xffd700,
        roughness: 0.3,
        metalness: 0.8
      },
      'fabric-red': {
        type: 'MeshStandardMaterial',
        color: 0xcc0000,
        roughness: 0.85,
        metalness: 0.0
      },
      'fabric-blue': {
        type: 'MeshStandardMaterial',
        color: 0x0066cc,
        roughness: 0.85,
        metalness: 0.0
      }
    };

    this.init();
  }

  init() {
    this.setupScene();
    this.setupCamera();
    this.setupRenderer();
    this.setupLighting();
    this.setupTurntable();
    this.setupControls();
    this.setupUI();
    this.loadShoeModel();
    this.animate();
    this.setupResize();
  }

  setupScene() {
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(this.options.backgroundColor);
  }

  setupCamera() {
    const width = this.container.clientWidth || 800;
    const height = this.container.clientHeight || 600;
    
    this.camera = new THREE.PerspectiveCamera(
      50,
      width / height,
      0.1,
      1000
    );
    this.camera.position.set(0, 3, 8);
    this.camera.lookAt(0, 0, 0);
  }

  setupRenderer() {
    const width = this.container.clientWidth || 800;
    const height = this.container.clientHeight || 600;

    this.renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: false
    });
    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.outputEncoding = THREE.sRGBEncoding;
    this.container.appendChild(this.renderer.domElement);
  }

  setupLighting() {
    // Ambient light for overall illumination
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    this.scene.add(ambientLight);

    // Main directional light
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(5, 10, 5);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 2048;
    directionalLight.shadow.mapSize.height = 2048;
    directionalLight.shadow.camera.near = 0.5;
    directionalLight.shadow.camera.far = 50;
    directionalLight.shadow.camera.left = -10;
    directionalLight.shadow.camera.right = 10;
    directionalLight.shadow.camera.top = 10;
    directionalLight.shadow.camera.bottom = -10;
    this.scene.add(directionalLight);

    // Fill light from opposite side
    const fillLight = new THREE.DirectionalLight(0xffffff, 0.3);
    fillLight.position.set(-5, 5, -5);
    this.scene.add(fillLight);

    // Rim light for better definition
    const rimLight = new THREE.PointLight(0xffffff, 0.4);
    rimLight.position.set(0, 8, -8);
    this.scene.add(rimLight);
  }

  setupTurntable() {
    // Create a rotating platform/table
    const tableGeometry = new THREE.CylinderGeometry(4, 4, 0.2, 32);
    const tableMaterial = new THREE.MeshStandardMaterial({
      color: 0x333333,
      roughness: 0.7,
      metalness: 0.1
    });
    this.turntable = new THREE.Mesh(tableGeometry, tableMaterial);
    this.turntable.position.y = -0.1;
    this.turntable.receiveShadow = true;
    this.scene.add(this.turntable);

    // Add a subtle rim to the table
    const rimGeometry = new THREE.TorusGeometry(4, 0.1, 8, 32);
    const rimMaterial = new THREE.MeshStandardMaterial({
      color: 0x444444,
      roughness: 0.5,
      metalness: 0.3
    });
    const rim = new THREE.Mesh(rimGeometry, rimMaterial);
    rim.position.y = 0;
    rim.rotation.x = Math.PI / 2;
    this.scene.add(rim);
  }

  setupControls() {
    if (this.options.enableControls && typeof THREE.OrbitControls !== 'undefined') {
      this.controls = new THREE.OrbitControls(this.camera, this.renderer.domElement);
      this.controls.enableDamping = true;
      this.controls.dampingFactor = 0.05;
      this.controls.minDistance = 5;
      this.controls.maxDistance = 15;
      this.controls.maxPolarAngle = Math.PI / 2.2; // Prevent going below the table
      this.controls.target.set(0, 1, 0);
      this.controls.update();
    }
  }

  setupUI() {
    // Material selector
    const materialSelect = document.getElementById('material-select');
    if (materialSelect) {
      materialSelect.addEventListener('change', (e) => {
        this.applyMaterial(e.target.value);
      });
    }

    // Rotation speed control
    const rotationSpeed = document.getElementById('rotation-speed');
    const speedValue = document.getElementById('speed-value');
    if (rotationSpeed && speedValue) {
      rotationSpeed.addEventListener('input', (e) => {
        this.currentRotationSpeed = parseFloat(e.target.value);
        speedValue.textContent = this.currentRotationSpeed.toFixed(1);
      });
    }

    // Reset camera button
    const resetCamera = document.getElementById('reset-camera');
    if (resetCamera) {
      resetCamera.addEventListener('click', () => {
        this.resetCamera();
      });
    }

    // Toggle rotation button
    const toggleRotation = document.getElementById('toggle-rotation');
    if (toggleRotation) {
      toggleRotation.addEventListener('click', () => {
        this.isRotating = !this.isRotating;
        toggleRotation.textContent = this.isRotating ? 'Pause Rotation' : 'Resume Rotation';
      });
    }
  }

  async loadShoeModel() {
    const loadingElement = this.container.querySelector('.viewer-loading');
    
    if (loadingElement) {
      loadingElement.textContent = 'Loading 3D Model...';
    }

    // If no model path provided, create a procedural shoe
    if (!this.options.modelPath) {
      this.createProceduralShoe();
      if (loadingElement) {
        loadingElement.style.display = 'none';
      }
      return;
    }

    // Try to load GLTF/GLB model
    try {
      await this.loadGLTFModel(this.options.modelPath);
      if (loadingElement) {
        loadingElement.style.display = 'none';
      }
    } catch (error) {
      console.warn('Failed to load GLTF model, creating procedural shoe:', error);
      this.createProceduralShoe();
      if (loadingElement) {
        loadingElement.style.display = 'none';
      }
    }
  }

  async loadGLTFModel(path) {
    return new Promise((resolve, reject) => {
      if (typeof THREE.GLTFLoader === 'undefined') {
        reject(new Error('GLTFLoader not available'));
        return;
      }

      const loader = new THREE.GLTFLoader();
      loader.load(
        path,
        (gltf) => {
          this.shoeModel = gltf.scene;
          
          // Center and scale the model
          const box = new THREE.Box3().setFromObject(this.shoeModel);
          const center = box.getCenter(new THREE.Vector3());
          const size = box.getSize(new THREE.Vector3());
          
          const maxDimension = Math.max(size.x, size.y, size.z);
          const targetSize = 3;
          const scale = targetSize / maxDimension;
          
          this.shoeModel.scale.setScalar(scale);
          this.shoeModel.position.sub(center.multiplyScalar(scale));
          this.shoeModel.position.y = 1; // Place on table
          
          // Enable shadows and store original materials
          this.shoeModel.traverse((child) => {
            if (child.isMesh) {
              child.castShadow = true;
              child.receiveShadow = true;
              // Store reference to original material for material switching
              if (!child.userData.originalMaterial) {
                child.userData.originalMaterial = child.material;
              }
            }
          });
          
          this.scene.add(this.shoeModel);
          
          // Apply default material
          this.applyMaterial('leather-black');
          
          resolve();
        },
        (progress) => {
          const loadingElement = this.container.querySelector('.viewer-loading');
          if (loadingElement && progress.total) {
            const percent = Math.round((progress.loaded / progress.total) * 100);
            loadingElement.textContent = `Loading 3D Model... ${percent}%`;
          }
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

  createProceduralShoe() {
    // Create a simple procedural shoe model as fallback
    this.shoeModel = new THREE.Group();

    // Shoe sole
    const soleGeometry = new THREE.BoxGeometry(1.2, 0.2, 0.4);
    const soleMaterial = new THREE.MeshStandardMaterial({
      color: 0x1a1a1a,
      roughness: 0.8,
      metalness: 0.0
    });
    const sole = new THREE.Mesh(soleGeometry, soleMaterial);
    sole.position.y = 0.1;
    sole.castShadow = true;
    sole.receiveShadow = true;
    this.shoeModel.add(sole);

    // Shoe upper (simplified)
    const upperGeometry = new THREE.BoxGeometry(1.0, 0.8, 0.35);
    const upperMaterial = new THREE.MeshStandardMaterial({
      color: 0x2a2a2a,
      roughness: 0.4,
      metalness: 0.1
    });
    const upper = new THREE.Mesh(upperGeometry, upperMaterial);
    upper.position.set(0, 0.5, 0);
    upper.castShadow = true;
    upper.receiveShadow = true;
    this.shoeModel.add(upper);

    // Toe cap
    const toeGeometry = new THREE.BoxGeometry(0.3, 0.3, 0.35);
    const toeMaterial = new THREE.MeshStandardMaterial({
      color: 0x2a2a2a,
      roughness: 0.4,
      metalness: 0.1
    });
    const toe = new THREE.Mesh(toeGeometry, toeMaterial);
    toe.position.set(0.5, 0.4, 0);
    toe.castShadow = true;
    this.shoeModel.add(toe);

    // Store material references for switching
    this.shoeModel.traverse((child) => {
      if (child.isMesh) {
        child.userData.originalMaterial = child.material;
      }
    });

    this.shoeModel.position.y = 1;
    this.scene.add(this.shoeModel);

    // Apply default material
    this.applyMaterial('leather-black');
  }

  applyMaterial(materialKey) {
    if (!this.shoeModel) return;

    const materialDef = this.materials[materialKey];
    if (!materialDef) {
      console.warn(`Material "${materialKey}" not found`);
      return;
    }

    this.shoeModel.traverse((child) => {
      if (child.isMesh) {
        const materialProps = {
          color: materialDef.color,
          roughness: materialDef.roughness,
          metalness: materialDef.metalness
        };

        // Create new material based on type
        let newMaterial;
        if (materialDef.type === 'MeshStandardMaterial') {
          newMaterial = new THREE.MeshStandardMaterial(materialProps);
        } else {
          newMaterial = new THREE.MeshStandardMaterial(materialProps);
        }

        // Preserve other properties
        if (child.userData.originalMaterial) {
          if (child.userData.originalMaterial.map) {
            newMaterial.map = child.userData.originalMaterial.map;
            newMaterial.map.needsUpdate = true;
          }
          if (child.userData.originalMaterial.normalMap) {
            newMaterial.normalMap = child.userData.originalMaterial.normalMap;
            newMaterial.normalMap.needsUpdate = true;
          }
        }

        child.material = newMaterial;
        child.material.needsUpdate = true;
      }
    });
  }

  resetCamera() {
    if (this.controls) {
      this.controls.reset();
    }
    this.camera.position.set(0, 3, 8);
    this.camera.lookAt(0, 1, 0);
    if (this.controls) {
      this.controls.target.set(0, 1, 0);
      this.controls.update();
    }
  }

  animate() {
    this.animationId = requestAnimationFrame(() => this.animate());

    // Rotate turntable and shoe
    if (this.isRotating && this.currentRotationSpeed > 0) {
      const rotationDelta = (this.currentRotationSpeed * 0.01);
      if (this.turntable) {
        this.turntable.rotation.y += rotationDelta;
      }
      if (this.shoeModel) {
        this.shoeModel.rotation.y += rotationDelta;
      }
    }

    if (this.controls) {
      this.controls.update();
    }

    this.renderer.render(this.scene, this.camera);
  }

  setupResize() {
    window.addEventListener('resize', () => {
      const width = this.container.clientWidth;
      const height = this.container.clientHeight;
      
      this.camera.aspect = width / height;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(width, height);
    });
  }

  dispose() {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
    
    if (this.renderer) {
      this.renderer.dispose();
    }
    
    if (this.controls) {
      this.controls.dispose();
    }
  }
}

// Initialize the shoe viewer when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  const viewerContainer = document.getElementById('shoe-viewer');
  if (viewerContainer) {
    // You can pass a model path here if you have a GLTF/GLB file
    // Example: new ShoeViewer('shoe-viewer', { modelPath: '/assets/models/shoe.glb' });
    new ShoeViewer('shoe-viewer');
  }
});

