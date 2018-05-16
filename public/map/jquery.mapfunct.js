  $(function () {

    var test_plots = {
                "US": {
                    latitude: 39.4,
                    longitude: -105.243685,
                    tooltip: {
                        content: "Estados Unidos +13644444841"
                    }
                },

                "ES": {
                    latitude: 43.0,
                    longitude: 0.0,
                    tooltip: {
                        content: "España +34668693216"
                    }
                },
                "CH": {
                    latitude: 46.0,
                    longitude: 10.0,
                    tooltip: {
                        content: "Suiza +41798071464"
                    }
                },
             
            };

            var getElemID = function(elem) {
                // Show element ID
                return $(elem.node).attr("data-id");
            };

            $(".mapcontainer_equi").mapael({
                map: {
                    name: "world_countries",
                    defaultArea: {
                        tooltip: {
                            content: getElemID
                        }
                    }
                },
                plots: test_plots
            });

            $(".mapcontainer_merc").mapael({
                map: {
                    name: "world_countries_mercator",
                    defaultArea: {
                        tooltip: {
                            content: getElemID
                        }
                    }
                },
                plots: test_plots
            });

            $(".mapcontainer_miller").mapael({
                map: {
                    name: "world_countries_miller",
                    defaultArea: {
                        tooltip: {
                            content: getElemID
                        }
                    },
                    defaultPlot: {
                        size: 9
                    }
                },
                plots: test_plots
            });
        });