// TODO: rewrite in es6
var NavigationModule = (function (){
    
    var createNavigation = function(data) {
        return template = '<div class="lm-sidebar--nav">'
                            + '<div class="lm-inline">'
                                + '<i class="material-icons">' + data.icon + '</i>'
                                + '<h4 class="lm-title">' + data.title + '</h4>'
                            + '</div>'
                            + '<div class="lm-inline">'
                                + '<i class="material-icons">more_vert</i>'
                            + '</div>'
                        + '</div>';
    };

    return {
        createNavigationElement: function(data) {
            return createNavigation(data);
        }
    }
})();


var data = { 
    icon: 'close',
    title: 'Postos de trabalho'
}

NavigationModule.createNavigationElement(data);