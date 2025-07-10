document.addEventListener('DOMContentLoaded', function () {
  var map = L.map('map').setView([64.2008, -149.4937], 4); // Center on Alaska

  L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles © Esri — Source: Esri, Maxar, Earthstar Geographics',
    maxZoom: 19
  }).addTo(map);

  // Waypoints array
  const waypoints = [
    { coords: [25.98549, -81.25385], label: "Big Cypress National Preserve" },
    { coords: [28.89315, -82.59871], label: "Swim with Manatee" },
    { coords: [31.94638, -109.95532], label: "Cochise Stronghold" },
    { coords: [37.41871, -111.04310], label: "Coyote Gulch" },
    { coords: [62.05073, -163.18417], label: "Yukon Delta National Wildlife Refuge"},
    { coords: [70.00310, -153.08620], label: "Inigok Field Station"},
    { coords: [68.62716, -149.59300], label: "Toolik Field Station"},
    { coords: [61.85838, -149.20177], label: "Snowbird Hut"},
    { coords: [61.80719, -149.26200], label: "Pinnacle Peak"},
    { coords: [60.64285, -149.72405], label: "Resurrection Pass"},
    { coords: [61.82139, -147.21182], label: "Sled Ski", page: "sledski.md"}
  ];

  // Add each waypoint
  waypoints.forEach(point => {
    // Check if 'page' exists before making the link
    let popupContent;
    if (point.page) {
      popupContent = `<a href="pages/${point.page.replace('.md', '.html')}" target="_blank">${point.label}</a>`;
    } else {
      popupContent = point.label; // Just show label if no page
    }

    L.marker(point.coords).addTo(map).bindPopup(popupContent);
  });
});



