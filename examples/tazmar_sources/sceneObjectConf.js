let objectsConfsOnScene = {
  '7й причал. Облако точек': {
    url: "examples/tazmar_sources/7th_pier/pier/metadata.json",
    name: "7й причал. Облако точек",
    objectType: 'pointCloud',
    objectPosition: { x: 1323578.895075808, y: 12702145.969783371, z: 0 },
    objectRotation: { x: 0, y: 0, z: -3.5 },
    objectScale: { x: 0.6, y: 0.6, z: 0.6 },
    objectMaterial: {
      pointSizeType: Potree.PointSizeType.ADAPTIVE,
      size: 0.9,
      elevationRange: [0, 70],
      weightRGB: 1.0,
      weightElevation: 1.0
    },
    view: {
      viewPosition: {x: 1323583.084709522, y: 12702130.774778752, z: 30.998088128174448},
      yaw: 1.7713194131349577,
      pitch: -0.5088966469656541,
      radius: 50
    }
  },
  '7й причал. Батиметрия': {
    url: "examples/tazmar_sources/7th_pier/batimetry/metadata.json",
    name: "7й причал. Батиметрия",
    objectType: 'pointCloud',
    objectPosition: { x: 1323615.895075808, y: 12702114.969783371, z: -7 },
    objectRotation: { x: 0, y: 0, z: -3.4 },
    objectScale: { x: 0.6, y: 0.6, z: 0.6 },
    objectMaterial: {
      pointSizeType: Potree.PointSizeType.ADAPTIVE,
      size: 0.9,
      elevationRange: [0, 70],
      weightRGB: 1.0,
      weightElevation: 1.0
    },
    view: {
      viewPosition: {x: 1323583.084709522, y: 12702130.774778752, z: 30.998088128174448},
      yaw: 1.7713194131349577,
      pitch: -0.5088966469656541,
      radius: 50
    }
  },
  '7й причал. Фотограмметрия': {
    url: "examples/tazmar_sources/7th_pier/fbx/00521_Pr7_Ultra_merged.fbx",
    name: '7й причал. Фотограмметрия',
    objectType: 'fbxModel',
    objectPosition: { x: 1323530.084709522, y: 12702130.774778752, z: 0},
    objectRotation: { x: 0, y: 0, z: 5.0 },
    objectScale: { x: 0.6, y: 0.6, z: 0.6 },
    objectPosition2: { x: 39, y: 0, z: -44},
    objectRotation2: { x: -1.6000000000000003, y: 0, z: -0.4 },
  },
  '11й, 12й, 13й причалы. Лодочный лидар': {
    url: "examples/tazmar_sources/11_12_13_pier/boat_lidar/metadata.json",
    name: "11й, 12й, 13й причалы. Лодочный лидар",
    objectType: 'pointCloud',
    objectPosition: { x: 1323615.895075808, y: 12702114.969783371, z: -7 },
    objectRotation: { x: 0, y: 0, z: -3.4 },
    objectScale: { x: 0.6, y: 0.6, z: 0.6 },
    objectMaterial: {
      pointSizeType: Potree.PointSizeType.ADAPTIVE,
      size: 0.9,
      elevationRange: [0, 70],
      weightRGB: 1.0,
      weightElevation: 1.0
    },
    view: {
      viewPosition: {x: 1323583.084709522, y: 12702130.774778752, z: 30.998088128174448},
      yaw: 1.7713194131349577,
      pitch: -0.5088966469656541,
      radius: 50
    }
  },
  '11й, 12й, 13й причалы. Батиметрия': {
    url: "examples/tazmar_sources/11_12_13_pier/batimetry/metadata.json",
    name: "11й, 12й, 13й причалы. Батиметрия",
    objectType: 'pointCloud',
    objectPosition: { x: 1323615.895075808, y: 12702114.969783371, z: -7 },
    objectRotation: { x: 0, y: 0, z: -3.4 },
    objectScale: { x: 0.6, y: 0.6, z: 0.6 },
    objectMaterial: {
      pointSizeType: Potree.PointSizeType.ADAPTIVE,
      size: 0.9,
      elevationRange: [0, 70],
      weightRGB: 1.0,
      weightElevation: 1.0
    },
    view: {
      viewPosition: {x: 1323583.084709522, y: 12702130.774778752, z: 30.998088128174448},
      yaw: 1.7713194131349577,
      pitch: -0.5088966469656541,
      radius: 50
    }
  },
  '11й, 12й, 13й причалы. Фотограмметрия': {
    url: "examples/tazmar_sources/11_12_13_pier/fbx/Merged mesh.fbx",
    name: '11й, 12й, 13й причалы. Фотограмметрия',
    objectType: 'fbxModel',
    objectPosition: { x: 1323530.084709522, y: 12702130.774778752, z: 0},
    objectRotation: { x: 0, y: 0, z: 5.0 },
    objectScale: { x: 0.6, y: 0.6, z: 0.6 },
    objectPosition2: { x: 39, y: 0, z: -44},
    objectRotation2: { x: -1.6000000000000003, y: 0, z: -0.4 },
  },
}
export {objectsConfsOnScene}
