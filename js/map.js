(function () {
  var position = new naver.maps.LatLng(POSITION.lat, POSITION.lng);
  var isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

  var map = new naver.maps.Map('map', {
    center: position,
    zoom: 16,
    zoomControl: true,
    zoomControlOptions: {
      style: isMobile
        ? naver.maps.ZoomControlStyle.SMALL
        : naver.maps.ZoomControlStyle.LARGE,
      position: isMobile
        ? naver.maps.Position.LEFT_BOTTOM
        : naver.maps.Position.LEFT_CENTER
    }
  });

  var marker = new naver.maps.Marker({
    position: position,
    map: map
  });

  var infoWindow = new naver.maps.InfoWindow({
    content: `
      <div class="naver-label">
        ${LOCATION_NAME}
        <div class="naver-address">
          ${ADDRESS}
        </div>
        <a class="naver-link" href="${NAVER_URL}" target="_blank">
          > 네이버 지도 바로가기
        </a>
      </div>
    `,
    borderWidth: 0,
    backgroundColor: 'transparent',
    anchorSize: new naver.maps.Size(0, 0),
    pixelOffset: new naver.maps.Point(0, -28)
  });

  infoWindow.open(map, marker);
})();
