var events = (function(){
    var topics = {};
    var hOP = topics.hasOwnProperty;

    return {
        subscribe: function(topic, listener) {
            if(!hOP.call(topics, topic)) topics[topic] = [];

            var index = topics[topic].push(listener) -1; 

            return {
                remove: function() {
                    delete topics[topic][index];
                }
            };
        },
        publish: function(topic, info) {
            if(!hOP.call(topics, topic)) return;

            topics[topic].forEach(function(item) {
                item(info != undefined ? info : {});
            });
        }
    };
})();

events.publish('page/load/', {
    url: '/loaded/page'
});
var subscription = events.subscribe('page/load/', function(obj) {
    console.log(obj);
});
