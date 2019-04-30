app.controller('MapController',['$scope', 'places', function($scope, places) {
    $scope.mapCenter = {
        lat: 40.741934,
        lng: -74.004897,
        zoom: 17,
        autoDiscover: true
    }
    function getNewMarkers() {
        setTimeout(function() {
            places.getPlaces($scope.mapCenter).then(function(data) {
                $scope.geodata = data.data
                $scope.mapMarkers = geodataToMarkers($scope.geodata)
            }, err => err)
        }, 200)
    }
    $scope.$on('leafletDirectiveMap.dragend', function(event) {
        getNewMarkers()
    })
    $scope.$on('leafletDirectiveMap.zoomend', function(event) {
        getNewMarkers()
    })
    getNewMarkers()
    
}])