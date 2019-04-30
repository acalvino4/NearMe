app.service('places',['$http', '$sce', function($http, $sce) {
    //let trustedUrl = $sce.trustAsResourceUrl('https://en.wikipedia.org/w/api.php?action=query&list=geosearch&gsradius=5000&gscoord=40.741934%7C-74.004897&gslimit=30&format=json')
    this.getPlaces = function(mapCenter) {
        let radius = Math.min(Math.max(85000/mapCenter.zoom, 10), 10000)
        let url = 'https://en.wikipedia.org/w/api.php?action=query&list=geosearch&gsradius='+radius+'&gscoord='+mapCenter.lat+'|'+mapCenter.lng+'&gslimit=30&format=json'
        let trustedUrl = $sce.trustAsResourceUrl(url)
        return $http.jsonp(trustedUrl)
    }
}])