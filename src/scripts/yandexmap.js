ymaps.ready(init);

function init() {
  // Создание карты.    
  var myMap = new ymaps.Map("map", {
    // Координаты центра карты.
    // Порядок по умолчнию: «широта, долгота».
    // Чтобы не определять координаты центра карты вручную,
    // воспользуйтесь инструментом Определение координат.
    center: [54.73807045834664, 55.986416764792466],
    // Уровень масштабирования. Допустимые значения:
    // от 0 (весь мир) до 19.
    zoom: 16,
    controls: []
  });
  myMap.controls.add(new ymaps.control.ZoomControl({
    options: {
      position: {
        right: 10,
        top: 400
      }
    }
  }));
  myPin = new ymaps.GeoObjectCollection({}, {
    iconLayout: 'default#image',
    iconImageHref: '/assets/images/balloon.png',
    iconImageSize: [92, 114],
    iconImageOffset: [-50, -100]
  });
  myPlacemark1 = new ymaps.Placemark([54.73622203366129, 55.988433785971715]);
  myPin.add(myPlacemark1);
  myMap.geoObjects.add(myPin);
  $(".contacts__adress-hint-link").on("click", function (e) {
    var elem = $(this);
    var coordinates = elem.attr("value");
    var coordinatesSplitter = coordinates.split(",");
    var xCoords = parseFloat(coordinatesSplitter[0]);
    var yCoords = parseFloat(coordinatesSplitter[1]);
    myMap.panTo(
      [xCoords, yCoords], {
        flying: true
      }
    )
    return false;
  });
}