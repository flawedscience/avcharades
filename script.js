const cards = [
    "Lidar sensor (Hint: It scans the environment with lasers!)",
    "Radar sensor (Hint: It detects objects using radio waves!)",
    "Camera sensor (Hint: Captures images like your phone does!)",
    "Ultrasonic sensor (Hint: It uses sound to measure distance!)",
    "Inertial Measurement Unit (IMU) (Hint: Tracks movement and orientation!)",
    "GPS receiver (Hint: Tells the vehicle its exact location!)",
    "Depth sensor (Hint: Measures how far away things are in 3D!)",
    "Stereo camera (Hint: Sees the world in 3D using two lenses!)",
    "Proximity sensor (Hint: Detects how close objects are!)",
    "Occupancy grid (Hint: Represents the environment as a grid!)",
    "Sensor fusion (Hint: Combining data from different sensors!)",
    "Simultaneous Localization and Mapping (SLAM) (Hint: Maps while figuring out where it is!)",
    "Point cloud (Hint: A collection of data points representing 3D space!)",
    "Mesh rendering (Hint: Turning wireframes into 3D objects!)",
    "Ray tracing (Hint: Simulating light rays to create realistic images!)",
    "Texture mapping (Hint: Applying images to 3D models!)",
    "Virtual reality (VR) (Hint: A completely simulated 3D environment!)",
    "Augmented reality (AR) (Hint: Mixing real and virtual worlds!)",
    "Physics engine (Hint: Simulating forces and motion in 3D worlds!)",
    "Shading (Hint: Adding light and dark effects to 3D objects!)",
    "Motion blur (Hint: The streaking effect of fast-moving objects!)",
    "Field of view (FOV) (Hint: How much a camera or sensor can 'see'!)",
    "Occlusion (Hint: When one object blocks another from view!)",
    "Bounding box (Hint: A box that defines an object's 3D space!)",
    "Autonomous navigation (Hint: Self-driving vehicles moving on their own!)",
    "Dynamic environment (Hint: A constantly changing world in a simulation!)",
    "Collision detection (Hint: Knowing when objects crash into each other!)",
    "Fog simulation (Hint: Reducing visibility in a 3D scene with mist!)",
    "Path planning (Hint: Finding the best route to a destination!)",
    "Rendering pipeline (Hint: The steps to create a 3D image from models!)"
];

function drawCard() {
    const cardText = cards[Math.floor(Math.random() * cards.length)];
    document.getElementById("card").textContent = cardText;
}
