// KMITL Location (Latitude, Longitude)
// Updated to match official coordinates: 13.726725°N, 100.780125°E
const KMITL_CENTER = [13.726725, 100.780125]; // มหาวิทยาลัยพระจอมเกล้าลาดกระบัง

// Mock Data for KMITL - Adjusted coordinates to match actual map positions
const mockTrafficData = [
    { id: 1, route: 'ถนนฉลองกรุง (ประตูหลัก - อาคารเรียน)', status: 'normal', speed: '40 km/h', time: '5 นาที', coords: [[13.726725, 100.780125], [13.7270, 100.7803]] },
    { id: 2, route: 'ถนนภายในมหาวิทยาลัย (อาคารเรียน - หอพัก)', status: 'light', speed: '25 km/h', time: '8 นาที', coords: [[13.7270, 100.7803], [13.7275, 100.7808]] },
    { id: 3, route: 'ถนนฉลองกรุง (ประตูหลัง - โรงอาหาร)', status: 'heavy', speed: '15 km/h', time: '12 นาที', coords: [[13.7258, 100.7795], [13.7271, 100.7799]] },
    { id: 4, route: 'ถนนภายใน (อาคารเรียน - สนามกีฬา)', status: 'normal', speed: '35 km/h', time: '6 นาที', coords: [[13.7270, 100.7803], [13.7272, 100.7812]] },
    { id: 5, route: 'ถนนภายใน (หอพัก - อาคารเรียน)', status: 'light', speed: '30 km/h', time: '7 นาที', coords: [[13.7275, 100.7808], [13.7270, 100.7803]] },
];

// KMITL POI Locations - Distributed with 5 units (0.0005 deg ≈ 55m) spacing
// Based on KMITL_CENTER: [13.726725, 100.780125]
const POI_SPACING = 0.0005; // 5 units ≈ 55 meters
const KMITL_BASE = [13.7235, 100.7695]; // SW corner - +5 units up


const kmitlPOIs = [
    // Gates & Entrances
    { id: 1, name: 'ประตูหลัก', type: 'gate', coords: [KMITL_BASE[0] + 7*POI_SPACING, KMITL_BASE[1] + 6*POI_SPACING], icon: 'fa-door-open', color: '#3B82F6', label: 'P' },
    
    // Buildings - Grid layout
    { id: 2, name: 'อาคารเรียนรวม', type: 'building', coords: [KMITL_BASE[0] + 4*POI_SPACING, KMITL_BASE[1] + 8*POI_SPACING], icon: 'fa-building', color: '#4B5563', label: 'B' },
    { id: 3, name: 'หอพักนักศึกษา (KMITL Dormitory)', type: 'building', coords: [KMITL_BASE[0] + 9*POI_SPACING, KMITL_BASE[1] + 13*POI_SPACING], icon: 'fa-home', color: '#10B981', label: 'H' },
    { id: 4, name: 'สำนักงานอธิการบดี', type: 'building', coords: [KMITL_BASE[0] + 9*POI_SPACING, KMITL_BASE[1] - 2*POI_SPACING], icon: 'fa-building', color: '#4B5563', label: 'B' },
    { id: 5, name: 'สนามกีฬา (KMITL Sport Center)', type: 'building', coords: [KMITL_BASE[0] + 9*POI_SPACING, KMITL_BASE[1] + 32*POI_SPACING], icon: 'fa-running', color: '#EF4444', label: 'S' },
    { id: 6, name: 'หอประชุมเจ้าพระยาสุรวงษ์ไวยวัฒน์ (วร บุนนาค)', type: 'building', coords: [KMITL_BASE[0] + 11*POI_SPACING, KMITL_BASE[1] + 0*POI_SPACING], icon: 'fa-building', color: '#4B5563', label: 'A' },
    { id: 7, name: 'หอพระราชประวัติ', type: 'building', coords: [KMITL_BASE[0] + 8*POI_SPACING, KMITL_BASE[1] - 3*POI_SPACING], icon: 'fa-building', color: '#4B5563', label: 'B' },
    { id: 8, name: 'อาคาร ECC', type: 'building', coords: [KMITL_BASE[0] + 10*POI_SPACING, KMITL_BASE[1] + 11*POI_SPACING], icon: 'fa-building', color: '#4B5563', label: 'ECC' },
    { id: 9, name: 'คณะวิศวกรรมศาสตร์-สถาปัตย์', type: 'building', coords: [KMITL_BASE[0] + 10*POI_SPACING, KMITL_BASE[1] + 1*POI_SPACING], icon: 'fa-building', color: '#4B5563', label: 'E' },
    { id: 10, name: 'คณะเทคโนโลยีสารสนเทศ', type: 'building', coords: [KMITL_BASE[0] + 15*POI_SPACING, KMITL_BASE[1] + 23*POI_SPACING], icon: 'fa-building', color: '#4B5563', label: 'IT' },
    { id: 11, name: 'คณะบริหารธุรกิจ', type: 'building', coords: [KMITL_BASE[0] + 12*POI_SPACING, KMITL_BASE[1] + 12*POI_SPACING], icon: 'fa-building', color: '#4B5563', label: 'B' },
    { id: 12, name: 'คณะวิทยาศาสตร์', type: 'building', coords: [KMITL_BASE[0] + 12*POI_SPACING, KMITL_BASE[1] + 16*POI_SPACING], icon: 'fa-building', color: '#4B5563', label: 'S' },
    { id: 13, name: 'คณะครุศาสตร์', type: 'building', coords: [KMITL_BASE[0] + 13*POI_SPACING, KMITL_BASE[1] + 14*POI_SPACING], icon: 'fa-building', color: '#4B5563', label: 'E' },
    { id: 14, name: 'คณะศิลปศาสตร์', type: 'building', coords: [KMITL_BASE[0] + 14*POI_SPACING, KMITL_BASE[1] + 15*POI_SPACING], icon: 'fa-building', color: '#4B5563', label: 'A' },
    { id: 15, name: 'ว.การบิน (Civil Aviation College)', type: 'building', coords: [KMITL_BASE[0] + 11*POI_SPACING, KMITL_BASE[1] + 18*POI_SPACING], icon: 'fa-building', color: '#4B5563', label: 'AV' },
    { id: 17, name: 'คณะสถาปัตยกรรมฯ', type: 'building', coords: [KMITL_BASE[0] + 13*POI_SPACING, KMITL_BASE[1] + 10*POI_SPACING], icon: 'fa-building', color: '#4B5563', label: 'A' },
    { id: 18, name: 'HLLC (สำนักการเรียนรู้ตลอดชีวิต)', type: 'building', coords: [KMITL_BASE[0] + 11*POI_SPACING, KMITL_BASE[1] + 3*POI_SPACING], icon: 'fa-building', color: '#4B5563', label: 'HLLC' },
    { id: 19, name: 'อาคาร 12 ชั้น', type: 'building', coords: [KMITL_BASE[0] + 15*POI_SPACING, KMITL_BASE[1] + 13*POI_SPACING], icon: 'fa-building', color: '#4B5563', label: '12F' },
    { id: 20, name: 'AJ PARK', type: 'building', coords: [KMITL_BASE[0] + 17*POI_SPACING, KMITL_BASE[1] + 11*POI_SPACING], icon: 'fa-building', color: '#4B5563', label: 'AJ' },
    
    // Food Courts
    { id: 21, name: 'โรงอาหารกลาง', type: 'food', coords: [KMITL_BASE[0] + 10*POI_SPACING, KMITL_BASE[1] - 1*POI_SPACING], icon: 'fa-utensils', color: '#F59E0B', label: 'F' },
    { id: 22, name: 'โรงอาหาร 2', type: 'food', coords: [KMITL_BASE[0] + 10*POI_SPACING, KMITL_BASE[1] + 10*POI_SPACING], icon: 'fa-utensils', color: '#F59E0B', label: 'F' },
    
    // Parking
    { id: 23, name: 'ที่จอดรถ A', type: 'parking', coords: [KMITL_BASE[0] + 6*POI_SPACING, KMITL_BASE[1] - 1*POI_SPACING], icon: 'fa-parking', color: '#3B82F6', label: 'P', available: 25, total: 50 },
    { id: 24, name: 'ที่จอดรถ B', type: 'parking', coords: [KMITL_BASE[0] + 9*POI_SPACING, KMITL_BASE[1] + 7*POI_SPACING], icon: 'fa-parking', color: '#3B82F6', label: 'P', available: 8, total: 40 },
    { id: 25, name: 'ที่จอดรถ C', type: 'parking', coords: [KMITL_BASE[0] + 13*POI_SPACING, KMITL_BASE[1] + 15*POI_SPACING], icon: 'fa-parking', color: '#3B82F6', label: 'P', available: 12, total: 35 },
    { id: 26, name: 'ที่จอดรถ D', type: 'parking', coords: [KMITL_BASE[0] + 11*POI_SPACING, KMITL_BASE[1] + 4*POI_SPACING], icon: 'fa-parking', color: '#3B82F6', label: 'P', available: 15, total: 45 },
    { id: 27, name: 'ที่จอดรถ E', type: 'parking', coords: [KMITL_BASE[0] + 8*POI_SPACING, KMITL_BASE[1] - 2*POI_SPACING], icon: 'fa-parking', color: '#3B82F6', label: 'P', available: 20, total: 60 },
    { id: 28, name: 'ที่จอดรถ F', type: 'parking', coords: [KMITL_BASE[0] + 15*POI_SPACING, KMITL_BASE[1] + 9*POI_SPACING], icon: 'fa-parking', color: '#3B82F6', label: 'P', available: 10, total: 30 },
    
    // HUB-Stations
    { id: 29, name: 'HUB-Station 1', type: 'hub', coords: [KMITL_BASE[0] + 9*POI_SPACING, KMITL_BASE[1] - 1*POI_SPACING], icon: 'fa-plus', color: '#10B981', label: 'HUB' },
    { id: 30, name: 'HUB-Station 2', type: 'hub', coords: [KMITL_BASE[0] + 9*POI_SPACING, KMITL_BASE[1] + 11*POI_SPACING], icon: 'fa-plus', color: '#10B981', label: 'HUB' },
    { id: 31, name: 'HUB-Station 3', type: 'hub', coords: [KMITL_BASE[0] + 11*POI_SPACING, KMITL_BASE[1] + 9*POI_SPACING], icon: 'fa-plus', color: '#10B981', label: 'HUB' },
    { id: 32, name: 'HUB-Station 4', type: 'hub', coords: [KMITL_BASE[0] + 13*POI_SPACING, KMITL_BASE[1] + 12*POI_SPACING], icon: 'fa-plus', color: '#10B981', label: 'HUB' },
    
    // Shuttle/Bus Stops
    { id: 33, name: 'ป้ายรถรับส่ง E1 - หอประชุม', type: 'shuttle', coords: [KMITL_BASE[0] + 11*POI_SPACING, KMITL_BASE[1] + 0*POI_SPACING], icon: 'fa-bus', color: '#1E40AF', label: 'E1' },
    { id: 34, name: 'ป้ายรถรับส่ง E1 - วิศวกรรม-สถาปัตย์', type: 'shuttle', coords: [KMITL_BASE[0] + 10*POI_SPACING, KMITL_BASE[1] + 1*POI_SPACING], icon: 'fa-bus', color: '#1E40AF', label: 'E1' },
    { id: 35, name: 'ป้ายรถรับส่ง E1 - สะพานลอย', type: 'shuttle', coords: [KMITL_BASE[0] + 12*POI_SPACING, KMITL_BASE[1] + 0*POI_SPACING], icon: 'fa-bus', color: '#1E40AF', label: 'E1' },
    { id: 36, name: 'ป้ายรถรับส่ง E1 - Airport Rail Link', type: 'shuttle', coords: [KMITL_BASE[0] + 7*POI_SPACING, KMITL_BASE[1] - 5*POI_SPACING], icon: 'fa-bus', color: '#1E40AF', label: 'E1' },
    { id: 37, name: 'ป้ายรถรับส่ง E2', type: 'shuttle', coords: [KMITL_BASE[0] + 8*POI_SPACING, KMITL_BASE[1] - 4*POI_SPACING], icon: 'fa-bus', color: '#92400E', label: 'E2' },
    { id: 38, name: 'ป้ายรถรับส่ง E3', type: 'shuttle', coords: [KMITL_BASE[0] + 11*POI_SPACING, KMITL_BASE[1] + 18*POI_SPACING], icon: 'fa-bus', color: '#FCD34D', label: 'E3' },
    
    // Golf Cart
    { id: 39, name: 'ป้ายรถรับส่ง G1', type: 'shuttle', coords: [KMITL_BASE[0] + 10*POI_SPACING, KMITL_BASE[1] - 1*POI_SPACING], icon: 'fa-bus', color: '#EC4899', label: 'G1' },
    { id: 40, name: 'ป้ายรถรับส่ง G2', type: 'shuttle', coords: [KMITL_BASE[0] + 10*POI_SPACING, KMITL_BASE[1] + 4*POI_SPACING], icon: 'fa-bus', color: '#EC4899', label: 'G2' },
    { id: 41, name: 'ป้ายรถรับส่ง G3', type: 'shuttle', coords: [KMITL_BASE[0] + 10*POI_SPACING, KMITL_BASE[1] + 12*POI_SPACING], icon: 'fa-bus', color: '#EC4899', label: 'G3' },
    { id: 42, name: 'ป้ายรถรับส่ง GE', type: 'shuttle', coords: [KMITL_BASE[0] + 12*POI_SPACING, KMITL_BASE[1] + 0*POI_SPACING], icon: 'fa-bus', color: '#EC4899', label: 'GE' },
    
    // Bicycle Stations
    { id: 43, name: 'จุดรถจักรยาน 1', type: 'bicycle', coords: [KMITL_BASE[0] + 7*POI_SPACING, KMITL_BASE[1] - 2*POI_SPACING], icon: 'fa-bicycle', color: '#10B981', label: 'B' },
    { id: 44, name: 'จุดรถจักรยาน 2', type: 'bicycle', coords: [KMITL_BASE[0] + 9*POI_SPACING, KMITL_BASE[1] + 2*POI_SPACING], icon: 'fa-bicycle', color: '#10B981', label: 'B' },
    { id: 45, name: 'จุดรถจักรยาน 3', type: 'bicycle', coords: [KMITL_BASE[0] + 10*POI_SPACING, KMITL_BASE[1] + 11*POI_SPACING], icon: 'fa-bicycle', color: '#10B981', label: 'B' },
    { id: 46, name: 'จุดรถจักรยาน 4', type: 'bicycle', coords: [KMITL_BASE[0] + 14*POI_SPACING, KMITL_BASE[1] + 14*POI_SPACING], icon: 'fa-bicycle', color: '#10B981', label: 'B' },
    
    // Medical Services
    { id: 47, name: 'จุดปฐมพยาบาล', type: 'medical', coords: [KMITL_BASE[0] + 15*POI_SPACING, KMITL_BASE[1] + 16*POI_SPACING], icon: 'fa-plus-circle', color: '#EF4444', label: '+' },
    
    // Restrooms
    { id: 48, name: 'ห้องน้ำ 1', type: 'restroom', coords: [KMITL_BASE[0] + 8*POI_SPACING, KMITL_BASE[1] - 2*POI_SPACING], icon: 'fa-restroom', color: '#6B7280', label: 'WC' },
    { id: 49, name: 'ห้องน้ำ 2', type: 'restroom', coords: [KMITL_BASE[0] + 8*POI_SPACING, KMITL_BASE[1] + 8*POI_SPACING], icon: 'fa-restroom', color: '#6B7280', label: 'WC' },
    
    // Information Points
    { id: 50, name: 'จุดข้อมูล', type: 'info', coords: [KMITL_BASE[0] + 8*POI_SPACING, KMITL_BASE[1] + 2*POI_SPACING], icon: 'fa-info-circle', color: '#7C3AED', label: 'i' },
    
    // Railway Station
    { id: 51, name: 'สถานีรถไฟหัวตะเข้', type: 'railway', coords: [KMITL_BASE[0] + 16*POI_SPACING, KMITL_BASE[1] + 3*POI_SPACING], icon: 'fa-train', color: '#6B7280', label: 'R' },
    
    // Pedestrian Areas
    { id: 52, name: 'ทางเดินเท้า', type: 'pedestrian', coords: [KMITL_BASE[0] + 11*POI_SPACING, KMITL_BASE[1] + 1*POI_SPACING], icon: 'fa-walking', color: '#EF4444', label: 'W' },
];

// Real-time Vehicle Data (Simulated) - Adjusted coordinates
let vehicles = [
    { id: 1, coords: [13.7267, 100.7801], speed: 35, direction: 45, type: 'car', color: '#3B82F6' },
    { id: 2, coords: [13.7271, 100.7802], speed: 25, direction: 90, type: 'car', color: '#EF4444' },
    { id: 3, coords: [13.7273, 100.7804], speed: 40, direction: 135, type: 'bus', color: '#8B5CF6' },
    { id: 4, coords: [13.7269, 100.7799], speed: 30, direction: 180, type: 'car', color: '#10B981' },
    { id: 5, coords: [13.7275, 100.7805], speed: 20, direction: 225, type: 'car', color: '#F59E0B' },
];

const mockRoutes = [
    'ถนนฉลองกรุง',
    'ถนนภายในมหาวิทยาลัย',
    'ถนนหลังมหาวิทยาลัย',
    'ถนนข้างมหาวิทยาลัย'
];

const mockParkingData = [
    { id: 1, name: 'ที่จอดรถ A (ประตูหลัก)', location: 'ใกล้ประตูหลัก', available: 25, total: 50, price: 'ฟรี', coords: [13.7261, 100.7799] },
    { id: 2, name: 'ที่จอดรถ B (อาคารเรียน)', location: 'ใกล้อาคารเรียนรวม', available: 8, total: 40, price: 'ฟรี', coords: [13.7275, 100.7802] },
    { id: 3, name: 'ที่จอดรถ C (โรงอาหาร)', location: 'ใกล้โรงอาหาร', available: 12, total: 35, price: 'ฟรี', coords: [13.7271, 100.7799] },
    { id: 4, name: 'ที่จอดรถ D (หอพัก)', location: 'ใกล้หอพัก', available: 0, total: 40, price: 'ฟรี', coords: [13.7279, 100.7810] },
];

// Shuttle Routes based on ONEMAP_V2 reference
const mockShuttleRoutes = [
    // EV BUS Routes - E1: KMITL - Airport Rail Link
    { id: 'E1', name: 'EV BUS สาย 1', route: 'KMITL - Airport Rail Link', type: 'evbus', color: '#1E40AF', 
      stations: [
        'หอประชุมเจ้าพระยาสุรวงษ์ไวยวัฒน์ (วร บุนนาค)',
        'หน้าป้ายคณะวิศวกรรมศาสตร์-สถาปัตย์',
        'หน้าป้ายรถเมล์สะพานลอย (ลานน้ำพุ)',
        'คณะเทคโนโลยีสารสนเทศ',
        'แอร์พอร์ทลิ้ง ลาดกระบัง'
      ],
      returnStations: [
        'ประตูเลียบถนนมอเตอร์เวย์',
        'โรงพยาบาลพระจอมเกล้าเจ้าคุณทหาร',
        'ว.การบิน',
        'คณะบริหารธุรกิจ',
        'คณะครุศาสตร์ฯ',
        'คณะศิลปศาสตร์',
        'คณะวิทยาศาสตร์',
        'HLLC (สำนักการเรียนรู้ตลอดชีวิต)',
        'หอประชุมเจ้าพระยาสุรวงษ์ไวยวัฒน์ (วร บุนนาค)'
      ],
      frequency: '07.45 / 08.35 / 15.45 / 16.30 น.',
      coords: [
        [13.7266, 100.7800], // หอประชุม
        [13.7271, 100.7801], // วิศวกรรม-สถาปัตย์
        [13.7273, 100.7800], // สะพานลอย
        [13.7274, 100.7802], // เทคโนโลยีสารสนเทศ
        [13.7258, 100.7792]  // Airport Rail Link
      ] },
    
    // EV BUS Routes - E2: ซอยเกกีงาม - อาคาร 12 ชั้น
    { id: 'E2', name: 'EV BUS สาย 2', route: 'ซอยเกกีงาม - อาคาร 12 ชั้น', type: 'evbus', color: '#92400E',
      stations: [
        'ซอยเกกีงาม 1 และ 2',
        'AJ Apartment',
        '7-11 หน้า RNP',
        'อาคาร 12 ชั้น',
        'ประตูทางออก Tops HL Villa'
      ],
      frequency: '07.30-09.30 น. และ 16.30-19.30 น.',
      coords: [
        [13.7259, 100.7796], // ซอยเกกีงาม
        [13.7267, 100.7800], // AJ Apartment
        [13.7269, 100.7801], // 7-11
        [13.7281, 100.7808], // อาคาร 12 ชั้น
        [13.7283, 100.7806]  // Tops HL Villa
      ] },
    
    // EV BUS Routes - E3: หอประชุม - ว.การบิน
    { id: 'E3', name: 'EV BUS สาย 3', route: 'หอประชุม วร บุนนาค - ว.การบิน', type: 'evbus', color: '#FCD34D',
      stations: [
        'หอประชุมเจ้าพระยาสุรวงษ์ไวยวัฒน์ (วร บุนนาค)',
        'หน้าป้ายคณะวิศวกรรมศาสตร์ สถาปัตย์',
        'KMITL VB',
        'อาคารบูรณาการ คณะสถาปัตยกรรมฯ',
        'ประตูทางออก Tops HL Villa',
        'หน้าป้ายรถเมล์สะพานลอย (ลานน้ำพุ)',
        'คณะเทคโนโลยีสารสนเทศ',
        'ว.การบิน',
        'คณะบริหารธุรกิจ',
        'คณะครุศาสตร์ฯ-คณะศิลปศาสตร์',
        'คณะวิทยาศาสตร์',
        'HLLC (สำนักการเรียนรู้ตลอดชีวิต)'
      ],
      frequency: '07.30-09.30 น. และ 16.30-19.30 น.',
      coords: [
        [13.7266, 100.7800], // หอประชุม
        [13.7271, 100.7801], // วิศวกรรม-สถาปัตย์
        [13.7272, 100.7802], // KMITL VB
        [13.7279, 100.7805], // สถาปัตย์
        [13.7283, 100.7806], // Tops HL Villa
        [13.7273, 100.7800], // สะพานลอย
        [13.7274, 100.7802], // เทคโนโลยีสารสนเทศ
        [13.7277, 100.7813], // ว.การบิน
        [13.7278, 100.7807], // บริหารธุรกิจ
        [13.7279, 100.7809], // ครุศาสตร์-ศิลปศาสตร์
        [13.7270, 100.7801], // วิทยาศาสตร์
        [13.7272, 100.7803]  // HLLC
      ] },
    
    // Golf Cart Routes
    { id: 'G1', name: 'รถกอล์ฟ สาย 1', route: 'สำนักงานอธิการบดี - สนามกีฬา', type: 'golfcart', color: '#EC4899',
      stations: ['สำนักงานอธิการบดี', 'อาคารเรียน', 'สนามกีฬา'],
      frequency: 'ทุก 10 นาที',
      coords: [[13.7264, 100.7798], [13.7270, 100.7803], [13.7272, 100.7812]] },
    { id: 'G2', name: 'รถกอล์ฟ สาย 2', route: 'สนามกีฬา - ECC - คณะเทคโนโลยีบูรณาการ', type: 'golfcart', color: '#EC4899',
      stations: ['สนามกีฬา', 'ECC', 'คณะเทคโนโลยีบูรณาการ'],
      frequency: 'ทุก 10 นาที',
      coords: [[13.7272, 100.7812], [13.7276, 100.7806], [13.7282, 100.7810]] },
    { id: 'G3', name: 'รถกอล์ฟ สาย 3', route: 'คณะวิทยาศาสตร์ - คณะบริหารฯ', type: 'golfcart', color: '#EC4899',
      stations: ['คณะวิทยาศาสตร์', 'อาคารเรียน', 'คณะบริหารฯ'],
      frequency: 'ทุก 10 นาที',
      coords: [[13.7270, 100.7801], [13.7270, 100.7803], [13.7278, 100.7807]] },
    { id: 'GE', name: 'รถกอล์ฟ สาย 4', route: 'คณะวิศวกรรมศาสตร์ - คณะสถาปัตย์ฯ', type: 'golfcart', color: '#EC4899',
      stations: ['คณะวิศวกรรมศาสตร์', 'อาคารเรียน', 'คณะสถาปัตย์ฯ'],
      frequency: 'ทุก 10 นาที',
      coords: [[13.7271, 100.7801], [13.7270, 100.7803], [13.7279, 100.7805]] },
];

// Bicycle Routes - KOSEN KMITL Bicycle Path
const bicycleRoutes = [
    { id: 'B1', name: 'เส้นทางวิ่งรถจักรยาน KOSEN KMITL', type: 'bicycle', color: '#3B82F6',
      coords: [
        [13.7262, 100.7798],
        [13.7270, 100.7802],
        [13.7276, 100.7806],
        [13.7280, 100.7809]
      ] }
];

// Skywalk Routes
const skywalkRoutes = [
    { id: 'SW1', name: 'Skywalk 1', type: 'skywalk', color: '#FCD34D',
      coords: [
        [13.7271, 100.7801],
        [13.7273, 100.7800],
        [13.7274, 100.7802]
      ] },
    { id: 'SW2', name: 'Skywalk 2 (สะพานลอย 2)', type: 'skywalk', color: '#FCD34D',
      coords: [
        [13.7273, 100.7800],
        [13.7275, 100.7801]
      ] },
    { id: 'SW3', name: 'Skywalk 3 (สะพานลอย 3)', type: 'skywalk', color: '#FCD34D',
      coords: [
        [13.7276, 100.7804],
        [13.7278, 100.7805]
      ] }
];

const mockAnnouncements = [
    { id: 1, type: 'warning', title: 'แจ้งเตือน: งานซ่อมถนน', message: 'มีการซ่อมถนนภายในมหาวิทยาลัยช่วงอาคารเรียน-โรงอาหาร วันที่ 10-15 ก.พ. 2567', time: '2 ชั่วโมงที่แล้ว' },
    { id: 2, type: 'info', title: 'ประกาศ: เพิ่มเส้นทางรถรับส่ง', message: 'เพิ่มเส้นทางใหม่รอบมหาวิทยาลัย เริ่มให้บริการวันที่ 1 มี.ค. 2567', time: '5 ชั่วโมงที่แล้ว' },
    { id: 3, type: 'alert', title: 'แจ้งเตือน: รถติดมาก', message: 'ถนนฉลองกรุงช่วงประตูหลัง-โรงอาหาร มีรถติดมาก ขอแนะนำให้ใช้ประตูหลัก', time: '10 นาทีที่แล้ว' },
];

// Global Map Variable
let map;
let vehicleMarkers = [];
let poiMarkers = [];
let trafficLayers = [];
let currentFilter = 'all';
let isLiveFeedActive = true; // Auto-start live feed

// Initialize App
document.addEventListener('DOMContentLoaded', function() {
    initializeTabs();
    initializeMobileMenu();
    initializeMobileNotification();
    initializeMap();
    initializeTraffic();
    initializePrediction();
    initializeRoute();
    initializeParking();
    initializeShuttle();
    initializeNotifications();
    initializeReport();
    initializeMapSearch();
    initializeFilters();
    initializeNearbyInfo();
    updateLastUpdateTime();
    setInterval(updateTrafficData, 30000); // Update every 30 seconds
    setInterval(updateVehiclePositions, 2000); // Update vehicle positions every 2 seconds
});

// Tab Navigation (Bottom Nav)
function initializeTabs() {
    const navItems = document.querySelectorAll('.nav-item');
    const mobileNavItems = document.querySelectorAll('.mobile-nav-item');
    const tabContents = document.querySelectorAll('.tab-content');
    const addBtn = document.getElementById('addBtn');
    const mobileAddBtn = document.getElementById('mobileAddBtn');

    function switchTab(targetTab, clickedItem, allNavItems) {
        // Update nav item states
        allNavItems.forEach(nav => {
            nav.classList.remove('active');
        });
        if (clickedItem) {
            clickedItem.classList.add('active');
        }

        // Show/hide tab contents
        tabContents.forEach(content => {
            content.classList.add('hidden');
        });
        const targetContent = document.getElementById(targetTab);
        if (targetContent) {
            targetContent.classList.remove('hidden');
        }

        // Close mobile menu if open
        closeMobileMenu();
    }

    // Desktop nav items
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            const targetTab = item.getAttribute('data-tab');
            if (targetTab) {
                switchTab(targetTab, item, navItems);
            }
        });
    });

    // Mobile nav items
    mobileNavItems.forEach(item => {
        item.addEventListener('click', () => {
            const targetTab = item.getAttribute('data-tab');
            if (targetTab) {
                switchTab(targetTab, item, mobileNavItems);
            }
        });
    });

    // Add button functionality - Show report form
    function showReportForm() {
        const allNavItems = [...navItems, ...mobileNavItems];
        allNavItems.forEach(nav => {
            nav.classList.remove('active');
        });
        tabContents.forEach(content => {
            content.classList.add('hidden');
        });
        const reportTab = document.getElementById('report');
        if (reportTab) {
            reportTab.classList.remove('hidden');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        closeMobileMenu();
    }

    if (addBtn) {
        addBtn.addEventListener('click', showReportForm);
    }
    if (mobileAddBtn) {
        mobileAddBtn.addEventListener('click', showReportForm);
    }
}

// Mobile Menu Functions
function initializeMobileMenu() {
    const burgerBtn = document.getElementById('burgerMenuBtn');
    const closeBtn = document.getElementById('closeMobileMenu');
    const overlay = document.getElementById('mobileMenuOverlay');
    const drawer = document.getElementById('mobileMenuDrawer');

    function openMobileMenu() {
        drawer.classList.add('open');
        overlay.classList.add('show');
        burgerBtn.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeMobileMenu() {
        drawer.classList.remove('open');
        overlay.classList.remove('show');
        burgerBtn.classList.remove('active');
        document.body.style.overflow = '';
    }

    if (burgerBtn) {
        burgerBtn.addEventListener('click', openMobileMenu);
    }
    if (closeBtn) {
        closeBtn.addEventListener('click', closeMobileMenu);
    }
    if (overlay) {
        overlay.addEventListener('click', closeMobileMenu);
    }

    // Make closeMobileMenu available globally
    window.closeMobileMenu = closeMobileMenu;
}

// Mobile Notification Button
function initializeMobileNotification() {
    const mobileNotificationBtn = document.getElementById('mobileNotificationBtn');
    if (mobileNotificationBtn) {
        mobileNotificationBtn.addEventListener('click', () => {
            openNotificationModal();
            closeMobileMenu();
        });
    }
}

// Map Initialization
function initializeMap() {
    // Initialize map centered on KMITL
    map = L.map('map').setView(KMITL_CENTER, 16);

    // Add OpenStreetMap tiles with custom styling for minimal look
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors',
        maxZoom: 19,
    }).addTo(map);

    // Add custom grayscale style (using CSS filter)
    const style = document.createElement('style');
    style.textContent = `
        .leaflet-tile-pane { filter: grayscale(0.3) brightness(0.95); }
    `;
    document.head.appendChild(style);

    // Add POI markers
    addPOIMarkers();
    
    // Add vehicles
    addVehicles();

    // Current location button
    document.getElementById('currentLocationBtn').addEventListener('click', () => {
        map.setView(KMITL_CENTER, 16);
    });
    
    // Update nearby info when map moves (if no GPS)
    map.on('moveend', () => {
        if (!userLocation) updateNearbyInfo();
    });
}

function addPOIMarkers() {
    kmitlPOIs.forEach(poi => {
        // Use direct color value or map from color name
        const iconColor = poi.color || '#6B7280';
        
        // Determine icon based on type
        let displayIcon = poi.icon;
        let displayLabel = poi.label || '';
        
        if (poi.type === 'parking') {
            displayIcon = 'fa-parking';
            displayLabel = 'P';
        } else if (poi.type === 'shuttle') {
            displayIcon = 'fa-bus';
        } else if (poi.type === 'food') {
            displayIcon = 'fa-utensils';
        } else if (poi.type === 'info') {
            displayIcon = 'fa-info-circle';
            displayLabel = 'i';
        } else if (poi.type === 'pedestrian') {
            displayIcon = 'fa-walking';
        } else if (poi.type === 'hub') {
            displayIcon = 'fa-plus';
            displayLabel = 'HUB';
        } else if (poi.type === 'medical') {
            displayIcon = 'fa-plus-circle';
            displayLabel = '+';
        } else if (poi.type === 'restroom') {
            displayIcon = 'fa-restroom';
            displayLabel = 'WC';
        } else if (poi.type === 'bicycle') {
            displayIcon = 'fa-bicycle';
            displayLabel = 'B';
        } else if (poi.type === 'railway') {
            displayIcon = 'fa-train';
            displayLabel = 'R';
        }
        
        // Special styling for HUB-Station (green cross)
        if (poi.type === 'hub') {
            const icon = L.divIcon({
                className: 'poi-marker',
                html: `<div style="background: ${iconColor}; width: 24px; height: 24px; border-radius: 4px; border: 2px solid white; box-shadow: 0 2px 6px rgba(0,0,0,0.3); display: flex; align-items: center; justify-content: center; position: relative;">
                    <div style="position: absolute; width: 2px; height: 14px; background: white; transform: rotate(45deg);"></div>
                    <div style="position: absolute; width: 2px; height: 14px; background: white; transform: rotate(-45deg);"></div>
                </div>`,
                iconSize: [24, 24],
                iconAnchor: [12, 12]
            });
            const marker = L.marker(poi.coords, { icon: icon }).addTo(map);
            marker.bindPopup(`<strong>${poi.name}</strong>`);
            poiMarkers.push({ marker, poi });
            return;
        }
        
        // Create pill-shaped marker (rounded rectangle)
        const icon = L.divIcon({
            className: 'poi-marker',
            html: `<div style="background: ${iconColor}; min-width: 32px; height: 24px; border-radius: 12px; border: 2px solid white; box-shadow: 0 2px 6px rgba(0,0,0,0.3); display: flex; align-items: center; justify-content: center; padding: 0 8px; gap: 4px;">
                <i class="fas ${displayIcon}" style="color: white; font-size: 11px;"></i>
                ${displayLabel ? `<span style="color: white; font-size: 10px; font-weight: 600;">${displayLabel}</span>` : ''}
            </div>`,
            iconSize: [null, 24],
            iconAnchor: [null, 12]
        });

        const marker = L.marker(poi.coords, { icon: icon }).addTo(map);
        
        let popupContent = `<strong>${poi.name}</strong>`;
        if (poi.type === 'parking') {
            popupContent += `<br>ที่ว่าง: ${poi.available}/${poi.total}`;
        } else if (poi.type === 'shuttle') {
            popupContent += `<br>ป้าย: ${poi.label || ''}`;
        }
        marker.bindPopup(popupContent);
        
        poiMarkers.push({ marker, poi });
    });
}

// Helper: create bounds from coords with optional padding (10 units = 0.005)
function getBoundsFromCoords(coords, padding = 0.005) {
    const lats = coords.map(c => c[0]);
    const lngs = coords.map(c => c[1]);
    const minLat = Math.min(...lats) - padding;
    const maxLat = Math.max(...lats) + padding;
    const minLng = Math.min(...lngs) - padding;
    const maxLng = Math.max(...lngs) + padding;
    return L.latLngBounds([[minLat, minLng], [maxLat, maxLng]]);
}

function addTrafficRoutes() {
    mockTrafficData.forEach(route => {
        if (route.coords && route.coords.length >= 2) {
            const color = {
                normal: '#10B981',
                light: '#F59E0B',
                heavy: '#EF4444'
            }[route.status] || '#6B7280';

            const bounds = getBoundsFromCoords(route.coords);
            const rect = L.rectangle(bounds, {
                color: color,
                weight: 3,
                fill: false
            }).addTo(map);
            rect.bindPopup(`<strong>${route.route}</strong><br>${route.status === 'normal' ? 'ปกติ' : route.status === 'light' ? 'ติดเล็กน้อย' : 'ติดมาก'}`);

            trafficLayers.push({ polyline: rect, route });
        }
    });
}

function addShuttleRoutes() {
    mockShuttleRoutes.forEach(route => {
        if (route.coords && route.coords.length >= 2) {
            const bounds = getBoundsFromCoords(route.coords);
            const rect = L.rectangle(bounds, {
                color: route.color || '#8B5CF6',
                weight: route.type === 'evbus' ? 4 : 3,
                fill: false,
                dashArray: route.type === 'golfcart' ? '5, 5' : null
            }).addTo(map);

            // Add route label at center
            const center = bounds.getCenter();
            const label = L.marker(center, {
                icon: L.divIcon({
                    className: 'route-label',
                    html: `<div style="background: ${route.color}; color: white; padding: 2px 6px; border-radius: 8px; font-size: 10px; font-weight: 600; border: 1px solid white; box-shadow: 0 1px 3px rgba(0,0,0,0.3);">${route.id}</div>`,
                    iconSize: [null, null],
                    iconAnchor: [null, null]
                })
            }).addTo(map);
            
            let popupContent = `<strong>${route.name}</strong><br>${route.route}<br>ความถี่: ${route.frequency}`;
            if (route.stations && route.stations.length > 0) {
                popupContent += `<br><br><strong>ป้ายจอด:</strong><br>${route.stations.join('<br>')}`;
            }
            if (route.returnStations && route.returnStations.length > 0) {
                popupContent += `<br><br><strong>ขากลับ:</strong><br>${route.returnStations.join('<br>')}`;
            }
            rect.bindPopup(popupContent);
            label.bindPopup(popupContent);

            trafficLayers.push({ polyline: rect, route, label });
        }
    });
}

function addBicycleRoutes() {
    if (typeof bicycleRoutes === 'undefined') return;
    
    bicycleRoutes.forEach(route => {
        if (route.coords && route.coords.length >= 2) {
            const bounds = getBoundsFromCoords(route.coords);
            const rect = L.rectangle(bounds, {
                color: route.color || '#3B82F6',
                weight: 3,
                fill: false
            }).addTo(map);

            // Add bicycle icon at center
            const center = bounds.getCenter();
            const bikeIcon = L.marker(center, {
                icon: L.divIcon({
                    className: 'bicycle-route-icon',
                    html: `<div style="background: ${route.color}; width: 20px; height: 20px; border-radius: 50%; border: 2px solid white; box-shadow: 0 2px 4px rgba(0,0,0,0.3); display: flex; align-items: center; justify-content: center;">
                        <i class="fas fa-bicycle" style="color: white; font-size: 10px;"></i>
                    </div>`,
                    iconSize: [20, 20],
                    iconAnchor: [10, 10]
                })
            }).addTo(map);
            
            rect.bindPopup(`<strong>${route.name}</strong>`);
            bikeIcon.bindPopup(`<strong>${route.name}</strong>`);

            trafficLayers.push({ polyline: rect, route, icon: bikeIcon });
        }
    });
}

function addSkywalkRoutes() {
    if (typeof skywalkRoutes === 'undefined') return;
    
    skywalkRoutes.forEach(route => {
        if (route.coords && route.coords.length >= 2) {
            const bounds = getBoundsFromCoords(route.coords, 0.005);
            const rect = L.rectangle(bounds, {
                color: route.color || '#FCD34D',
                weight: 3,
                fill: false,
                dashArray: '10, 5'
            }).addTo(map);
            rect.bindPopup(`<strong>${route.name}</strong>`);

            trafficLayers.push({ polyline: rect, route });
        }
    });
}

function addVehicles() {
    vehicles.forEach(vehicle => {
        const icon = L.divIcon({
            className: 'vehicle-marker',
            html: `<div style="background: ${vehicle.color}; width: 16px; height: 16px; border-radius: 50%; border: 2px solid white; box-shadow: 0 2px 4px rgba(0,0,0,0.4); transform: rotate(${vehicle.direction}deg);">
                <div style="width: 0; height: 0; border-left: 4px solid transparent; border-right: 4px solid transparent; border-top: 6px solid white; position: absolute; top: -2px; left: 50%; transform: translateX(-50%);"></div>
            </div>`,
            iconSize: [16, 16],
            iconAnchor: [8, 8]
        });

        const marker = L.marker(vehicle.coords, { icon: icon }).addTo(map);
        marker.bindPopup(`รถ ID: ${vehicle.id}<br>ความเร็ว: ${vehicle.speed} km/h`);
        
        vehicleMarkers.push({ marker, vehicle });
    });
}

function updateVehiclePositions() {
    if (!isLiveFeedActive || !map) return;

    vehicleMarkers.forEach(({ marker, vehicle }) => {
        // Simulate vehicle movement along roads
        const latOffset = (Math.random() - 0.5) * 0.0005;
        const lngOffset = (Math.random() - 0.5) * 0.0005;
        
        // Keep vehicles within KMITL area - Adjusted bounds
        const newLat = Math.max(13.7258, Math.min(13.7283, vehicle.coords[0] + latOffset));
        const newLng = Math.max(100.7792, Math.min(100.7813, vehicle.coords[1] + lngOffset));
        
        vehicle.coords[0] = newLat;
        vehicle.coords[1] = newLng;
        
        // Update direction slightly
        vehicle.direction += (Math.random() - 0.5) * 10;
        if (vehicle.direction < 0) vehicle.direction += 360;
        if (vehicle.direction >= 360) vehicle.direction -= 360;
        
        // Update marker position
        marker.setLatLng(vehicle.coords);
        
        // Update icon rotation
        const icon = L.divIcon({
            className: 'vehicle-marker',
            html: `<div style="background: ${vehicle.color}; width: 16px; height: 16px; border-radius: 50%; border: 2px solid white; box-shadow: 0 2px 4px rgba(0,0,0,0.4); transform: rotate(${vehicle.direction}deg);">
                <div style="width: 0; height: 0; border-left: 4px solid transparent; border-right: 4px solid transparent; border-top: 6px solid white; position: absolute; top: -2px; left: 50%; transform: translateX(-50%);"></div>
            </div>`,
            iconSize: [16, 16],
            iconAnchor: [8, 8]
        });
        marker.setIcon(icon);
        
        // Update popup
        marker.setPopupContent(`รถ ID: ${vehicle.id}<br>ความเร็ว: ${vehicle.speed} km/h`);
    });
}

function toggleLiveFeed() {
    isLiveFeedActive = !isLiveFeedActive;
    const btn = document.getElementById('liveFeedBtn');
    const icon = btn.querySelector('i');
    
    if (isLiveFeedActive) {
        icon.classList.remove('fa-play');
        icon.classList.add('fa-pause');
        btn.classList.remove('bg-blue-600');
        btn.classList.add('bg-red-500');
        btn.classList.add('hover:bg-red-600');
        btn.classList.remove('hover:bg-blue-700');
    } else {
        icon.classList.remove('fa-pause');
        icon.classList.add('fa-play');
        btn.classList.remove('bg-red-500');
        btn.classList.remove('hover:bg-red-600');
        btn.classList.add('bg-blue-600');
        btn.classList.add('hover:bg-blue-700');
    }
}

// User location (fallback to map center)
let userLocation = null;

function initializeNearbyInfo() {
    updateNearbyInfo();
    setInterval(updateNearbyInfo, 10000); // Update every 10 seconds
    
    // Try to get user's real location
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (pos) => {
                userLocation = [pos.coords.latitude, pos.coords.longitude];
                updateNearbyInfo();
            },
            () => { userLocation = KMITL_CENTER; },
            { enableHighAccuracy: true, timeout: 5000 }
        );
    } else {
        userLocation = KMITL_CENTER;
    }
}

function getDistance(lat1, lng1, lat2, lng2) {
    const R = 6371e3; // Earth radius in meters
    const φ1 = lat1 * Math.PI / 180;
    const φ2 = lat2 * Math.PI / 180;
    const Δφ = (lat2 - lat1) * Math.PI / 180;
    const Δλ = (lng2 - lng1) * Math.PI / 180;
    const a = Math.sin(Δφ/2)**2 + Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ/2)**2;
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c;
}

function updateNearbyInfo() {
    let loc = userLocation;
    if (!loc && map) loc = map.getCenter();
    if (!loc) loc = KMITL_CENTER;
    const userLat = Array.isArray(loc) ? loc[0] : loc.lat;
    const userLng = Array.isArray(loc) ? loc[1] : loc.lng;
    
    // Find nearest POI
    let nearestPOI = null;
    let minDist = Infinity;
    kmitlPOIs.forEach(poi => {
        const d = getDistance(userLat, userLng, poi.coords[0], poi.coords[1]);
        if (d < minDist) {
            minDist = d;
            nearestPOI = poi;
        }
    });
    
    const nearestEl = document.getElementById('nearestPOIName');
    if (nearestEl && nearestPOI) {
        nearestEl.textContent = nearestPOI.name;
    }
    
    // Find nearest shuttle stop and mock arrival time
    const shuttlePOIs = kmitlPOIs.filter(p => p.type === 'shuttle');
    let nearestShuttle = null;
    let shuttleDist = Infinity;
    shuttlePOIs.forEach(poi => {
        const d = getDistance(userLat, userLng, poi.coords[0], poi.coords[1]);
        if (d < shuttleDist) {
            shuttleDist = d;
            nearestShuttle = poi;
        }
    });
    
    const arrivalEl = document.getElementById('shuttleArrivalMins');
    const routeEl = document.getElementById('shuttleRouteName');
    const vehicleEl = document.getElementById('shuttleVehicleId');
    
    if (nearestShuttle) {
        const routeId = nearestShuttle.label || nearestShuttle.name.split(' ').pop();
        const route = mockShuttleRoutes.find(r => r.id === routeId);
        const routeName = route ? route.name : `สาย ${routeId}`;
        const mins = Math.max(2, Math.min(8, Math.round(shuttleDist / 80)));
        const vehicleId = String((routeId.charCodeAt(0) || 0) + (parseInt(routeId.slice(1)) || 0) + 10).slice(-2);
        
        if (arrivalEl) arrivalEl.textContent = mins;
        if (routeEl) routeEl.textContent = routeName;
        if (vehicleEl) vehicleEl.textContent = vehicleId;
    } else {
        if (arrivalEl) arrivalEl.textContent = '--';
        if (routeEl) routeEl.textContent = '--';
        if (vehicleEl) vehicleEl.textContent = '--';
    }
}

function initializeMapSearch() {
    const searchInput = document.getElementById('mapSearch');
    const clearBtn = document.getElementById('clearSearch');

    searchInput.addEventListener('input', (e) => {
        if (e.target.value.length > 0) {
            clearBtn.classList.remove('hidden');
        } else {
            clearBtn.classList.add('hidden');
        }
    });

    clearBtn.addEventListener('click', () => {
        searchInput.value = '';
        clearBtn.classList.add('hidden');
    });

    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            performSearch(e.target.value);
        }
    });
}

function performSearch(query) {
    // Simple search implementation
    const results = kmitlPOIs.filter(poi => 
        poi.name.toLowerCase().includes(query.toLowerCase())
    );

    if (results.length > 0) {
        const firstResult = results[0];
        map.setView(firstResult.coords, 18);
        
        // Highlight marker
        poiMarkers.forEach(({ marker, poi }) => {
            if (poi.id === firstResult.id) {
                marker.openPopup();
            }
        });
    }
}

function initializeFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active state - use same style as real-time indicator
            filterButtons.forEach(b => {
                b.classList.remove('active');
                // Ensure all buttons have the same base style
                if (!b.classList.contains('bg-gray-50')) {
                    b.classList.add('bg-gray-50');
                }
                if (!b.classList.contains('border')) {
                    b.classList.add('border', 'border-gray-200');
                }
            });
            btn.classList.add('active');
            // Active state can have slightly different styling if needed, but keep same base style

            // Filter markers
            currentFilter = btn.getAttribute('data-filter');
            filterMapMarkers(currentFilter);
        });
    });
}

function filterMapMarkers(filter) {
    poiMarkers.forEach(({ marker, poi }) => {
        if (filter === 'all' || poi.type === filter) {
            marker.addTo(map);
        } else {
            map.removeLayer(marker);
        }
    });
}

// 1. Real-time Traffic
function initializeTraffic() {
    updateTrafficData();
    
    // Toggle traffic list
    const toggleBtn = document.getElementById('toggleTrafficList');
    const trafficList = document.getElementById('trafficList');
    if (toggleBtn) {
        let isExpanded = true;
        toggleBtn.addEventListener('click', () => {
            isExpanded = !isExpanded;
            if (isExpanded) {
                trafficList.style.display = 'block';
                toggleBtn.querySelector('i').classList.remove('fa-chevron-up');
                toggleBtn.querySelector('i').classList.add('fa-chevron-down');
            } else {
                trafficList.style.display = 'none';
                toggleBtn.querySelector('i').classList.remove('fa-chevron-down');
                toggleBtn.querySelector('i').classList.add('fa-chevron-up');
            }
        });
    }
}

function updateTrafficData() {
    // Simulate real-time updates
    const normal = mockTrafficData.filter(r => r.status === 'normal').length;
    const light = mockTrafficData.filter(r => r.status === 'light').length;
    const heavy = mockTrafficData.filter(r => r.status === 'heavy').length;

    const normalEl = document.getElementById('normalRoutes');
    const lightEl = document.getElementById('lightTraffic');
    const heavyEl = document.getElementById('heavyTraffic');
    
    if (normalEl) normalEl.textContent = normal;
    if (lightEl) lightEl.textContent = light;
    if (heavyEl) heavyEl.textContent = heavy;

    const trafficList = document.getElementById('trafficList');
    trafficList.innerHTML = mockTrafficData.map(route => {
        const statusColors = {
            normal: { bg: 'bg-green-50', border: 'border-green-200', text: 'text-green-700', icon: 'fa-check-circle' },
            light: { bg: 'bg-yellow-50', border: 'border-yellow-200', text: 'text-yellow-700', icon: 'fa-exclamation-triangle' },
            heavy: { bg: 'bg-red-50', border: 'border-red-200', text: 'text-red-700', icon: 'fa-times-circle' }
        };
        const colors = statusColors[route.status];
        const statusText = { normal: 'ปกติ', light: 'ติดเล็กน้อย', heavy: 'ติดมาก' }[route.status];

        return `
            <div class="${colors.bg} ${colors.border} border rounded-lg p-3 sm:p-4">
                <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0">
                    <div class="flex-1 min-w-0">
                        <h4 class="font-medium text-gray-800 text-sm sm:text-base break-words">${route.route}</h4>
                        <div class="flex flex-wrap items-center gap-3 sm:gap-4 mt-2 text-xs sm:text-sm">
                            <span class="text-gray-600 whitespace-nowrap"><i class="fas fa-tachometer-alt mr-1"></i>${route.speed}</span>
                            <span class="text-gray-600 whitespace-nowrap"><i class="fas fa-clock mr-1"></i>${route.time}</span>
                        </div>
                    </div>
                    <div class="sm:ml-4 flex-shrink-0">
                        <span class="${colors.text} font-semibold text-xs sm:text-sm">
                            <i class="fas ${colors.icon} mr-1"></i>${statusText}
                        </span>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

function updateLastUpdateTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString('th-TH', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    document.getElementById('lastUpdate').textContent = timeString;
    setTimeout(updateLastUpdateTime, 1000);
}

// 2. Traffic Prediction
function initializePrediction() {
    const routeSelect = document.getElementById('routeSelect');
    mockRoutes.forEach(route => {
        const option = document.createElement('option');
        option.value = route;
        option.textContent = route;
        routeSelect.appendChild(option);
    });

    routeSelect.addEventListener('change', updatePrediction);
    document.getElementById('dateSelect').addEventListener('change', updatePrediction);
    
    // Set default date to today
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('dateSelect').value = today;
}

function updatePrediction() {
    const route = document.getElementById('routeSelect').value;
    const date = document.getElementById('dateSelect').value;
    const resultDiv = document.getElementById('predictionResult');

    if (!route || !date) {
        resultDiv.innerHTML = '<p class="text-gray-500 text-center py-6 sm:py-8 text-sm sm:text-base">กรุณาเลือกเส้นทางและวันที่</p>';
        return;
    }

    // Mock prediction data
    const predictions = [
        { time: '06:00 - 08:00', level: 'heavy', levelText: 'ติดมาก', color: 'red' },
        { time: '08:00 - 10:00', level: 'heavy', levelText: 'ติดมาก', color: 'red' },
        { time: '10:00 - 12:00', level: 'light', levelText: 'ติดเล็กน้อย', color: 'yellow' },
        { time: '12:00 - 14:00', level: 'normal', levelText: 'ปกติ', color: 'green' },
        { time: '14:00 - 16:00', level: 'light', levelText: 'ติดเล็กน้อย', color: 'yellow' },
        { time: '16:00 - 18:00', level: 'heavy', levelText: 'ติดมาก', color: 'red' },
        { time: '18:00 - 20:00', level: 'heavy', levelText: 'ติดมาก', color: 'red' },
        { time: '20:00 - 22:00', level: 'light', levelText: 'ติดเล็กน้อย', color: 'yellow' },
    ];

    resultDiv.innerHTML = `
        <div class="bg-blue-50 border border-blue-200 rounded-lg p-3 sm:p-4 mb-3 sm:mb-4">
            <h3 class="font-semibold text-gray-800 mb-2 text-sm sm:text-base">พยากรณ์สำหรับ: ${route}</h3>
            <p class="text-xs sm:text-sm text-gray-600">วันที่ ${new Date(date).toLocaleDateString('th-TH', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </div>
        <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 md:gap-4">
            ${predictions.map(pred => {
                const colorClasses = {
                    red: 'bg-red-50 border-red-200 text-red-700',
                    yellow: 'bg-yellow-50 border-yellow-200 text-yellow-700',
                    green: 'bg-green-50 border-green-200 text-green-700'
                };
                return `
                    <div class="${colorClasses[pred.color]} border rounded-lg p-3 sm:p-4">
                        <p class="font-medium mb-1 sm:mb-2 text-xs sm:text-sm">${pred.time}</p>
                        <p class="text-xs sm:text-sm">${pred.levelText}</p>
                    </div>
                `;
            }).join('')}
        </div>
    `;
}

// 3. Route Recommendation
function initializeRoute() {
    document.getElementById('findRouteBtn').addEventListener('click', findRoute);
}

function findRoute() {
    const origin = document.getElementById('originInput').value.trim();
    const destination = document.getElementById('destinationInput').value.trim();
    const resultsDiv = document.getElementById('routeResults');

    if (!origin || !destination) {
        alert('กรุณากรอกจุดเริ่มต้นและจุดหมายปลายทาง');
        return;
    }

    // Mock route recommendations
    const routes = [
        {
            name: 'เส้นทางที่ 1: เส้นทางเร็วที่สุด',
            distance: '12.5 กม.',
            time: '25 นาที',
            traffic: 'ปกติ',
            steps: ['เริ่มจาก ' + origin, 'ไปตามถนนพหลโยธิน', 'เลี้ยวซ้ายเข้าถนนสีลม', 'ถึง ' + destination],
            color: 'green'
        },
        {
            name: 'เส้นทางที่ 2: เส้นทางสั้นที่สุด',
            distance: '10.8 กม.',
            time: '30 นาที',
            traffic: 'ติดเล็กน้อย',
            steps: ['เริ่มจาก ' + origin, 'ไปตามถนนสุขุมวิท', 'เลี้ยวขวาเข้าซอย', 'ถึง ' + destination],
            color: 'yellow'
        },
        {
            name: 'เส้นทางที่ 3: หลีกเลี่ยงรถติด',
            distance: '15.2 กม.',
            time: '28 นาที',
            traffic: 'ปกติ',
            steps: ['เริ่มจาก ' + origin, 'ไปตามถนนรัชดาภิเษก', 'เลี้ยวซ้ายเข้าถนนเพชรบุรี', 'ถึง ' + destination],
            color: 'green'
        }
    ];

    resultsDiv.innerHTML = routes.map((route, index) => {
        const colorClasses = {
            green: 'border-green-200 bg-green-50',
            yellow: 'border-yellow-200 bg-yellow-50',
            red: 'border-red-200 bg-red-50'
        };
        return `
            <div class="${colorClasses[route.color]} border rounded-lg p-4 sm:p-6">
                <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3 sm:mb-4 gap-3">
                    <div class="flex-1 min-w-0">
                        <h3 class="font-semibold text-gray-800 text-base sm:text-lg mb-2 break-words">${route.name}</h3>
                        <div class="flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-600">
                            <span class="whitespace-nowrap"><i class="fas fa-route mr-1"></i>${route.distance}</span>
                            <span class="whitespace-nowrap"><i class="fas fa-clock mr-1"></i>${route.time}</span>
                            <span class="whitespace-nowrap"><i class="fas fa-traffic-light mr-1"></i>${route.traffic}</span>
                        </div>
                    </div>
                    <button class="w-full sm:w-auto px-4 py-2.5 sm:py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 active:bg-blue-800 transition text-xs sm:text-sm whitespace-nowrap">
                        <i class="fas fa-directions mr-1"></i>ใช้เส้นทางนี้
                    </button>
                </div>
                <div class="border-t border-gray-200 pt-3 sm:pt-4">
                    <h4 class="font-medium text-gray-700 mb-2 text-sm sm:text-base">ขั้นตอนการเดินทาง:</h4>
                    <ol class="list-decimal list-inside space-y-1 text-xs sm:text-sm text-gray-600">
                        ${route.steps.map(step => `<li class="break-words">${step}</li>`).join('')}
                    </ol>
                </div>
            </div>
        `;
    }).join('');
}

// 4. Parking System
function initializeParking() {
    updateParkingData();
}

function updateParkingData() {
    const total = mockParkingData.reduce((sum, p) => sum + p.total, 0);
    const occupied = mockParkingData.reduce((sum, p) => sum + (p.total - p.available), 0);
    const available = total - occupied;

    document.getElementById('totalParking').textContent = total;
    document.getElementById('occupiedParking').textContent = occupied;
    document.getElementById('availableParking').textContent = available;

    const parkingList = document.getElementById('parkingList');
    parkingList.innerHTML = mockParkingData.map(parking => {
        const availabilityPercent = (parking.available / parking.total) * 100;
        const statusColor = availabilityPercent > 30 ? 'green' : availabilityPercent > 10 ? 'yellow' : 'red';
        const colorClasses = {
            green: 'bg-green-50 border-green-200',
            yellow: 'bg-yellow-50 border-yellow-200',
            red: 'bg-red-50 border-red-200'
        };

        return `
            <div class="${colorClasses[statusColor]} border rounded-lg p-3 sm:p-4">
                <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    <div class="flex-1 min-w-0">
                        <h4 class="font-medium text-gray-800 text-sm sm:text-base break-words">${parking.name}</h4>
                        <p class="text-xs sm:text-sm text-gray-600 mt-1"><i class="fas fa-map-marker-alt mr-1"></i>${parking.location}</p>
                        <div class="flex flex-wrap items-center gap-2 sm:gap-4 mt-2 text-xs sm:text-sm">
                            <span class="text-gray-600 whitespace-nowrap">ที่ว่าง: <span class="font-semibold">${parking.available}/${parking.total}</span></span>
                            <span class="text-gray-600 whitespace-nowrap">${parking.price}</span>
                        </div>
                    </div>
                    <div class="sm:ml-4 w-full sm:w-auto">
                        <button class="w-full sm:w-auto px-4 py-2.5 sm:py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 active:bg-blue-800 transition text-xs sm:text-sm whitespace-nowrap">
                            <i class="fas fa-map-marked-alt mr-1"></i>ดูแผนที่
                        </button>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

// 5. Shuttle/Bus System
function initializeShuttle() {
    const routeSelect = document.getElementById('shuttleRouteSelect');
    mockShuttleRoutes.forEach(route => {
        const option = document.createElement('option');
        option.value = route.id;
        option.textContent = route.name;
        routeSelect.appendChild(option);
    });

    routeSelect.addEventListener('change', updateShuttleStations);
    document.getElementById('shuttleStationSelect').addEventListener('change', updateShuttleInfo);
}

function updateShuttleStations() {
    const routeId = parseInt(document.getElementById('shuttleRouteSelect').value);
    const stationSelect = document.getElementById('shuttleStationSelect');
    const shuttleInfo = document.getElementById('shuttleInfo');

    stationSelect.innerHTML = '<option value="">-- เลือกสถานี --</option>';
    shuttleInfo.innerHTML = '';

    if (!routeId) return;

    const route = mockShuttleRoutes.find(r => r.id === routeId);
    if (route) {
        route.stations.forEach(station => {
            const option = document.createElement('option');
            option.value = station;
            option.textContent = station;
            stationSelect.appendChild(option);
        });
    }
}

function updateShuttleInfo() {
    const routeId = parseInt(document.getElementById('shuttleRouteSelect').value);
    const station = document.getElementById('shuttleStationSelect').value;
    const shuttleInfo = document.getElementById('shuttleInfo');

    if (!routeId || !station) {
        shuttleInfo.innerHTML = '';
        return;
    }

    const route = mockShuttleRoutes.find(r => r.id === routeId);
    if (!route) return;

    // Mock next arrival times
    const nextArrivals = [
        { time: '5 นาที', status: 'on-time' },
        { time: '20 นาที', status: 'on-time' },
        { time: '35 นาที', status: 'on-time' }
    ];

    shuttleInfo.innerHTML = `
        <div class="bg-blue-50 border border-blue-200 rounded-lg p-4 sm:p-6">
            <h3 class="text-base sm:text-lg font-semibold text-gray-800 mb-3 sm:mb-4">ข้อมูลรถรับส่ง</h3>
            <div class="space-y-3 sm:space-y-4">
                <div>
                    <p class="text-xs sm:text-sm text-gray-600">เส้นทาง</p>
                    <p class="font-medium text-gray-800 text-sm sm:text-base">${route.name}</p>
                </div>
                <div>
                    <p class="text-xs sm:text-sm text-gray-600">สถานีปัจจุบัน</p>
                    <p class="font-medium text-gray-800 text-sm sm:text-base">${station}</p>
                </div>
                <div>
                    <p class="text-xs sm:text-sm text-gray-600">ความถี่</p>
                    <p class="font-medium text-gray-800 text-sm sm:text-base">${route.frequency}</p>
                </div>
                <div class="border-t border-gray-200 pt-3 sm:pt-4">
                    <p class="text-xs sm:text-sm text-gray-600 mb-2">รถมาถึงครั้งถัดไป:</p>
                    <div class="space-y-2">
                        ${nextArrivals.map(arrival => `
                            <div class="bg-white rounded-lg p-2.5 sm:p-3 flex items-center justify-between">
                                <span class="text-gray-700 text-xs sm:text-sm"><i class="fas fa-clock mr-2 text-blue-600"></i>อีก ${arrival.time}</span>
                                <span class="text-green-600 text-xs sm:text-sm"><i class="fas fa-check-circle mr-1"></i>ตรงเวลา</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
                <div class="pt-3 sm:pt-4">
                    <p class="text-xs sm:text-sm text-gray-600 mb-2">สถานีทั้งหมด:</p>
                    <div class="flex flex-wrap gap-2">
                        ${route.stations.map(s => `
                            <span class="px-2.5 sm:px-3 py-1 rounded-full ${s === station ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'} text-xs sm:text-sm">
                                ${s}
                            </span>
                        `).join('')}
                    </div>
                </div>
            </div>
        </div>
    `;
}

// 6. Notifications & Announcements
function initializeNotifications() {
    displayAnnouncements();
    document.getElementById('notificationBtn').addEventListener('click', openNotificationModal);
    document.getElementById('closeNotificationModal').addEventListener('click', closeNotificationModal);
    
    // Map announcements panel (no close button - always visible)
    
    // Show badge if there are unread notifications
    const unreadCount = mockAnnouncements.filter(a => !a.read).length;
    if (unreadCount > 0) {
        const desktopBadge = document.getElementById('notificationBadge');
        const mobileBadge = document.getElementById('mobileNotificationBadge');
        if (desktopBadge) {
            desktopBadge.textContent = unreadCount;
            desktopBadge.classList.remove('hidden');
        }
        if (mobileBadge) {
            mobileBadge.textContent = unreadCount;
            mobileBadge.classList.remove('hidden');
        }
    }
}

function displayAnnouncements() {
    const announcementsList = document.getElementById('announcementsList');
    const mapAnnouncementsList = document.getElementById('mapAnnouncementsList');
    
    const announcementHTML = mockAnnouncements.map(announcement => {
        const typeColors = {
            warning: 'bg-yellow-50 border-yellow-200 text-yellow-800',
            info: 'bg-blue-50 border-blue-200 text-blue-800',
            alert: 'bg-red-50 border-red-200 text-red-800'
        };
        const typeIcons = {
            warning: 'fa-exclamation-triangle',
            info: 'fa-info-circle',
            alert: 'fa-bell'
        };
        return `
            <div class="${typeColors[announcement.type]} border rounded-lg p-3 sm:p-4">
                <div class="flex items-start">
                    <i class="fas ${typeIcons[announcement.type]} text-lg sm:text-xl mr-2 sm:mr-3 mt-0.5 sm:mt-1 flex-shrink-0"></i>
                    <div class="flex-1 min-w-0">
                        <h4 class="font-semibold mb-1 text-sm sm:text-base break-words">${announcement.title}</h4>
                        <p class="text-xs sm:text-sm mb-2 break-words">${announcement.message}</p>
                        <p class="text-xs opacity-75">${announcement.time}</p>
                    </div>
                </div>
            </div>
        `;
    }).join('');
    
    if (announcementsList) {
        announcementsList.innerHTML = announcementHTML;
    }
    
    // Display on map overlay (compact version)
    if (mapAnnouncementsList) {
        mapAnnouncementsList.innerHTML = mockAnnouncements.map(announcement => {
            const typeColors = {
                warning: 'bg-yellow-50 border-yellow-200',
                info: 'bg-blue-50 border-blue-200',
                alert: 'bg-red-50 border-red-200'
            };
            const typeIcons = {
                warning: 'fa-exclamation-triangle',
                info: 'fa-info-circle',
                alert: 'fa-bell'
            };
            return `
                <div class="${typeColors[announcement.type]} border rounded-lg p-2.5">
                    <div class="flex items-start gap-2">
                        <i class="fas ${typeIcons[announcement.type]} text-xs mt-0.5 flex-shrink-0"></i>
                        <div class="flex-1 min-w-0">
                            <h4 class="font-semibold mb-0.5 text-xs break-words">${announcement.title}</h4>
                            <p class="text-xs mb-1 break-words line-clamp-2">${announcement.message}</p>
                            <p class="text-xs opacity-75">${announcement.time}</p>
                        </div>
                    </div>
                </div>
            `;
        }).join('');
    }
}

function openNotificationModal() {
    const modal = document.getElementById('notificationModal');
    const content = document.getElementById('notificationContent');
    
    content.innerHTML = mockAnnouncements.map(announcement => {
        const typeColors = {
            warning: 'bg-yellow-50 border-yellow-200',
            info: 'bg-blue-50 border-blue-200',
            alert: 'bg-red-50 border-red-200'
        };
        return `
            <div class="${typeColors[announcement.type]} border rounded-lg p-3 sm:p-4">
                <h4 class="font-semibold mb-1 text-sm sm:text-base break-words">${announcement.title}</h4>
                <p class="text-xs sm:text-sm mb-2 break-words">${announcement.message}</p>
                <p class="text-xs text-gray-500">${announcement.time}</p>
            </div>
        `;
    }).join('');
    
    modal.classList.remove('hidden');
    document.getElementById('notificationBadge').classList.add('hidden');
    
    // Close modal when clicking outside
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeNotificationModal();
        }
    });
}

function closeNotificationModal() {
    document.getElementById('notificationModal').classList.add('hidden');
}

// 7. User Reporting
function initializeReport() {
    const reportForm = document.getElementById('reportForm');
    reportForm.addEventListener('submit', handleReportSubmit);
    loadReports();
}

function handleReportSubmit(e) {
    e.preventDefault();
    
    const type = document.getElementById('reportType').value;
    const location = document.getElementById('reportLocation').value;
    const description = document.getElementById('reportDescription').value;
    
    // Save to localStorage
    const reports = JSON.parse(localStorage.getItem('userReports') || '[]');
    const newReport = {
        id: Date.now(),
        type: type,
        typeText: getReportTypeText(type),
        location: location,
        description: description,
        timestamp: new Date().toLocaleString('th-TH'),
        status: 'pending'
    };
    reports.unshift(newReport);
    localStorage.setItem('userReports', JSON.stringify(reports));
    
    // Reset form
    reportForm.reset();
    
    // Show success message
    alert('ส่งรายงานสำเร็จ! ขอบคุณสำหรับข้อมูล');
    
    // Reload reports
    loadReports();
}

function getReportTypeText(type) {
    const types = {
        accident: 'อุบัติเหตุ',
        traffic: 'รถติด',
        roadwork: 'งานซ่อมถนน',
        hazard: 'สิ่งกีดขวาง',
        other: 'อื่นๆ'
    };
    return types[type] || type;
}

function loadReports() {
    const reports = JSON.parse(localStorage.getItem('userReports') || '[]');
    const reportsList = document.getElementById('reportsList');
    
    if (reports.length === 0) {
        reportsList.innerHTML = '<p class="text-gray-500 text-center py-4 text-sm sm:text-base">ยังไม่มีรายงาน</p>';
        return;
    }
    
    reportsList.innerHTML = reports.map(report => {
        const statusColors = {
            pending: 'bg-yellow-50 border-yellow-200 text-yellow-700',
            processing: 'bg-blue-50 border-blue-200 text-blue-700',
            resolved: 'bg-green-50 border-green-200 text-green-700'
        };
        return `
            <div class="${statusColors[report.status]} border rounded-lg p-3 sm:p-4">
                <div class="flex items-start justify-between">
                    <div class="flex-1 min-w-0">
                        <div class="flex flex-wrap items-center gap-2 mb-2">
                            <span class="font-semibold text-sm sm:text-base break-words">${report.typeText}</span>
                            <span class="text-xs px-2 py-1 bg-white rounded-full whitespace-nowrap">${report.status === 'pending' ? 'รอดำเนินการ' : report.status === 'processing' ? 'กำลังดำเนินการ' : 'แก้ไขแล้ว'}</span>
                        </div>
                        <p class="text-xs sm:text-sm text-gray-700 mb-1 break-words"><i class="fas fa-map-marker-alt mr-1"></i>${report.location}</p>
                        <p class="text-xs sm:text-sm text-gray-600 mb-2 break-words">${report.description}</p>
                        <p class="text-xs text-gray-500">${report.timestamp}</p>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}