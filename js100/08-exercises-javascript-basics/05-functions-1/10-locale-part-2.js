function extractRegionCode(locale) {
  return locale.substring(3, 5);
}

console.log(extractRegionCode('en_US.UTF-8'));  // 'US'
console.log(extractRegionCode('en_GB.UTF-8'));  // 'GB'
console.log(extractRegionCode('ko_KR.UTF-16')); // 'KR'