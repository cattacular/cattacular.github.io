/**
 * Three.js 3D Model Viewer Component
 * For displaying 3D objects in Jekyll posts
 */

class ThreeViewer {
    constructor(containerId, options = {}) {
        this.container = document.getElementById(containerId);
        if (!this.container) {
            console.error(`Container with id "${containerId}" not found`);
            return;
        }

        // Get model path from data attribute if available
        const modelPath = this.container.getAttribute('data-model-path');

        this.options = {
            width: 600,
            height: 400,
            backgroundColor: 0x222222,
            enableControls: true,
            autoRotate: true,
            modelPath: modelPath,
            ...options
        };

        this.scene = null;
        this.camera = null;
        this.renderer = null;
        this.controls = null;
        this.model = null;
        this.animationId = null;

        this.init();
    }

    init() {
        this.setupScene();
        this.setupCamera();
        this.setupRenderer();
        this.setupLighting();
        this.setupControls();
        this.createSuitcase();
        this.animate();
        this.setupResize();
    }

    setupScene() {
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(this.options.backgroundColor);
    }

    setupCamera() {
        this.camera = new THREE.PerspectiveCamera(
            75,
            this.options.width / this.options.height,
            0.1,
            1000
        );
        this.camera.position.set(5, 5, 5);
    }

    setupRenderer() {
        this.renderer = new THREE.WebGLRenderer({ antialias: true });
        this.renderer.setSize(this.options.width, this.options.height);
        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        this.container.appendChild(this.renderer.domElement);
    }

    setupLighting() {
        // Ambient light
        const ambientLight = new THREE.AmbientLight(0x404040, 0.6);
        this.scene.add(ambientLight);

        // Directional light
        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
        directionalLight.position.set(10, 10, 5);
        directionalLight.castShadow = true;
        directionalLight.shadow.mapSize.width = 2048;
        directionalLight.shadow.mapSize.height = 2048;
        this.scene.add(directionalLight);

        // Point light for additional illumination
        const pointLight = new THREE.PointLight(0xffffff, 0.5);
        pointLight.position.set(-10, 10, -10);
        this.scene.add(pointLight);
    }

    setupControls() {
        if (this.options.enableControls && typeof THREE.OrbitControls !== 'undefined') {
            this.controls = new THREE.OrbitControls(this.camera, this.renderer.domElement);
            this.controls.enableDamping = true;
            this.controls.dampingFactor = 0.05;
            this.controls.autoRotate = this.options.autoRotate;
            this.controls.autoRotateSpeed = 2.0;
        }
    }

    createSuitcase() {
        // Hide loading indicator once model starts loading
        const loadingElement = this.container.querySelector('.viewer-loading');
        if (loadingElement) {
            loadingElement.textContent = 'Loading 3D Model...';
        }

        // Try to load the FBX model first
        this.loadFBXModel().then(() => {
            // Success - hide loading indicator
            if (loadingElement) {
                loadingElement.style.display = 'none';
            }
        }).catch((error) => {
            console.warn('FBX model failed to load, falling back to procedural model:', error);
            // Fallback to procedural model
            this.createProceduralSuitcase();
            if (loadingElement) {
                loadingElement.style.display = 'none';
            }
        });
    }

    async loadFBXModel() {
        return new Promise((resolve, reject) => {
            // Check if FBXLoader is available
            if (typeof THREE.FBXLoader === 'undefined') {
                reject(new Error('FBXLoader not available'));
                return;
            }

            const loader = new THREE.FBXLoader();
            const modelPath = this.options.modelPath || '/assets/images/Terminus/SM_BombSuitcase.fbx';
            
            loader.load(
                modelPath,
                (fbx) => {
                    // Model loaded successfully
                    this.model = fbx;
                    
                    // Center and scale the model appropriately
                    const box = new THREE.Box3().setFromObject(this.model);
                    const center = box.getCenter(new THREE.Vector3());
                    const size = box.getSize(new THREE.Vector3());
                    
                    // Scale the model to fit nicely in the viewer
                    const maxDimension = Math.max(size.x, size.y, size.z);
                    const targetSize = 4; // Target size for the model
                    const scale = targetSize / maxDimension;
                    
                    this.model.scale.setScalar(scale);
                    this.model.position.sub(center.multiplyScalar(scale));
                    
                    // Enable shadows for all meshes in the model
                    this.model.traverse((child) => {
                        if (child.isMesh) {
                            child.castShadow = true;
                            child.receiveShadow = true;
                        }
                    });
                    
                    // Add the model to the scene
                    this.scene.add(this.model);
                    resolve();
                },
                (progress) => {
                    // Loading progress
                    const loadingElement = this.container.querySelector('.viewer-loading');
                    if (loadingElement) {
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

    createProceduralSuitcase() {
        // Fallback procedural model (original implementation)
        this.model = new THREE.Group();

        // Suitcase body (main box)
        const bodyGeometry = new THREE.BoxGeometry(3, 2, 1.5);
        const bodyMaterial = new THREE.MeshLambertMaterial({ 
            color: 0x8B4513,
            transparent: true,
            opacity: 0.9
        });
        const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
        body.position.y = 1;
        body.castShadow = true;
        body.receiveShadow = true;
        this.model.add(body);

        // Suitcase handle
        const handleGeometry = new THREE.CylinderGeometry(0.1, 0.1, 1.5);
        const handleMaterial = new THREE.MeshLambertMaterial({ color: 0x654321 });
        const handle = new THREE.Mesh(handleGeometry, handleMaterial);
        handle.position.set(0, 2.8, 0);
        handle.rotation.z = Math.PI / 2;
        handle.castShadow = true;
        this.model.add(handle);

        // Handle supports
        const supportGeometry = new THREE.BoxGeometry(0.2, 0.5, 0.1);
        const supportMaterial = new THREE.MeshLambertMaterial({ color: 0x654321 });
        
        const leftSupport = new THREE.Mesh(supportGeometry, supportMaterial);
        leftSupport.position.set(-0.7, 2.5, 0);
        leftSupport.castShadow = true;
        this.model.add(leftSupport);

        const rightSupport = new THREE.Mesh(supportGeometry, supportMaterial);
        rightSupport.position.set(0.7, 2.5, 0);
        rightSupport.castShadow = true;
        this.model.add(rightSupport);

        // Latches
        const latchGeometry = new THREE.BoxGeometry(0.3, 0.2, 0.1);
        const latchMaterial = new THREE.MeshLambertMaterial({ color: 0xC0C0C0 });
        
        const leftLatch = new THREE.Mesh(latchGeometry, latchMaterial);
        leftLatch.position.set(-0.5, 1.8, 0.8);
        leftLatch.castShadow = true;
        this.model.add(leftLatch);

        const rightLatch = new THREE.Mesh(latchGeometry, latchMaterial);
        rightLatch.position.set(0.5, 1.8, 0.8);
        rightLatch.castShadow = true;
        this.model.add(rightLatch);

        // High-tech device inside (glowing effect)
        const deviceGeometry = new THREE.BoxGeometry(0.8, 0.4, 0.3);
        const deviceMaterial = new THREE.MeshLambertMaterial({ 
            color: 0x00ff00,
            emissive: 0x004400,
            transparent: true,
            opacity: 0.8
        });
        const device = new THREE.Mesh(deviceGeometry, deviceMaterial);
        device.position.set(0, 1, 0.2);
        device.castShadow = true;
        this.model.add(device);

        // Add the model to the scene
        this.scene.add(this.model);
    }

    animate() {
        this.animationId = requestAnimationFrame(() => this.animate());

        if (this.controls) {
            this.controls.update();
        }

        // Rotate the particles
        if (this.model) {
            const particles = this.model.children.find(child => child instanceof THREE.Points);
            if (particles) {
                particles.rotation.y += 0.01;
            }
        }

        this.renderer.render(this.scene, this.camera);
    }

    setupResize() {
        window.addEventListener('resize', () => {
            const width = this.container.clientWidth;
            const height = Math.min(width * 0.67, 400); // Maintain aspect ratio
            
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

// Auto-initialize viewers when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Look for all containers with class 'three-viewer'
    const viewerContainers = document.querySelectorAll('.three-viewer');
    
    viewerContainers.forEach((container, index) => {
        const viewerId = container.id || `three-viewer-${index}`;
        if (!container.id) {
            container.id = viewerId;
        }
        
        // Initialize the viewer
        new ThreeViewer(viewerId);
    });
});

