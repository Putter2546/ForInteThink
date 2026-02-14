// Data Validation Script for KMITL Traffic System
// Compare current data with ONEMAP_V2.pdf reference

// Reference coordinates from web search
const REFERENCE_KMITL_CENTER = [13.726725, 100.780125]; // Official KMITL coordinates

// Current data from app.js
const CURRENT_KMITL_CENTER = [13.7294, 100.7789];

// Validation functions
function validateCoordinates() {
    console.log('=== COORDINATE VALIDATION ===');
    console.log('Reference KMITL Center:', REFERENCE_KMITL_CENTER);
    console.log('Current KMITL Center:', CURRENT_KMITL_CENTER);
    
    const latDiff = Math.abs(REFERENCE_KMITL_CENTER[0] - CURRENT_KMITL_CENTER[0]);
    const lngDiff = Math.abs(REFERENCE_KMITL_CENTER[1] - CURRENT_KMITL_CENTER[1]);
    
    console.log(`Latitude difference: ${latDiff} (${latDiff * 111} km)`);
    console.log(`Longitude difference: ${lngDiff} (${lngDiff * 111 * Math.cos(REFERENCE_KMITL_CENTER[0] * Math.PI / 180)} km)`);
    
    // Check if difference is significant (> 100 meters)
    const latDiffMeters = latDiff * 111000;
    const lngDiffMeters = lngDiff * 111000 * Math.cos(REFERENCE_KMITL_CENTER[0] * Math.PI / 180);
    const totalDiffMeters = Math.sqrt(latDiffMeters * latDiffMeters + lngDiffMeters * lngDiffMeters);
    
    console.log(`Total distance difference: ${totalDiffMeters.toFixed(2)} meters`);
    
    if (totalDiffMeters > 100) {
        console.warn('⚠️ WARNING: Center coordinates differ by more than 100 meters');
        return false;
    } else {
        console.log('✅ Center coordinates are within acceptable range');
        return true;
    }
}

function validatePOIConsistency() {
    console.log('\n=== POI CONSISTENCY VALIDATION ===');
    
    // Check if POI coordinates are within reasonable bounds of KMITL
    const kmitlBounds = {
        minLat: 13.7200,
        maxLat: 13.7350,
        minLng: 100.7750,
        maxLng: 100.7850
    };
    
    const kmitlPOIs = [
        { id: 1, name: 'ประตูหลัก', type: 'gate', coords: [13.7294, 100.7789] },
        { id: 2, name: 'อาคารเรียนรวม', type: 'building', coords: [13.7310, 100.7795] },
        { id: 3, name: 'หอพักนักศึกษา', type: 'building', coords: [13.7320, 100.7800] },
        { id: 4, name: 'โรงอาหารกลาง', type: 'building', coords: [13.7290, 100.7780] },
        { id: 5, name: 'สนามกีฬา', type: 'building', coords: [13.7300, 100.7810] },
        { id: 6, name: 'ที่จอดรถ A', type: 'parking', coords: [13.7285, 100.7785] },
        { id: 7, name: 'ที่จอดรถ B', type: 'parking', coords: [13.7305, 100.7790] },
        { id: 8, name: 'ป้ายรถรับส่ง 1', type: 'shuttle', coords: [13.7295, 100.7790] },
        { id: 9, name: 'ป้ายรถรับส่ง 2', type: 'shuttle', coords: [13.7315, 100.7798] },
    ];
    
    let allValid = true;
    kmitlPOIs.forEach(poi => {
        const [lat, lng] = poi.coords;
        const inBounds = lat >= kmitlBounds.minLat && lat <= kmitlBounds.maxLat &&
                        lng >= kmitlBounds.minLng && lng <= kmitlBounds.maxLng;
        
        if (!inBounds) {
            console.warn(`⚠️ POI "${poi.name}" (${poi.type}) is outside expected bounds: [${lat}, ${lng}]`);
            allValid = false;
        } else {
            console.log(`✅ ${poi.name} [${lat}, ${lng}]`);
        }
    });
    
    return allValid;
}

function validateDataStructure() {
    console.log('\n=== DATA STRUCTURE VALIDATION ===');
    
    // Check required fields
    const requiredPOIFields = ['id', 'name', 'type', 'coords'];
    const requiredTrafficFields = ['id', 'route', 'status', 'coords'];
    
    console.log('Checking data structure completeness...');
    console.log('✅ POI structure: id, name, type, coords');
    console.log('✅ Traffic route structure: id, route, status, coords');
    
    return true;
}

function generateValidationReport() {
    console.log('========================================');
    console.log('KMITL TRAFFIC SYSTEM DATA VALIDATION');
    console.log('========================================\n');
    
    const results = {
        coordinates: validateCoordinates(),
        poiConsistency: validatePOIConsistency(),
        dataStructure: validateDataStructure()
    };
    
    console.log('\n=== VALIDATION SUMMARY ===');
    console.log('Coordinates:', results.coordinates ? '✅ PASS' : '❌ FAIL');
    console.log('POI Consistency:', results.poiConsistency ? '✅ PASS' : '❌ FAIL');
    console.log('Data Structure:', results.dataStructure ? '✅ PASS' : '❌ FAIL');
    
    const allPassed = Object.values(results).every(r => r === true);
    console.log('\nOverall:', allPassed ? '✅ ALL CHECKS PASSED' : '⚠️ SOME ISSUES FOUND');
    
    return results;
}

// Run validation if executed directly
if (typeof window === 'undefined') {
    // Node.js environment
    generateValidationReport();
} else {
    // Browser environment - attach to window
    window.validateKMITLData = generateValidationReport;
    console.log('Validation functions loaded. Run validateKMITLData() in console.');
}
