(function() {
    var map = new ol.Map({
        target: 'map',
        layers: [

            // Primer apartado, cargado de mapas bases.
            new ol.layer.Group({
                title: 'Mapa Base(Temas)',
                layers: [
                    new ol.layer.Group({
                        title: 'Terrain Colors Con Etiquetas',
                        type: 'base',
                        combine: true,
                        visible: false,
                        layers: [
                            new ol.layer.Tile({
                                source: new ol.source.Stamen({
                                    layer: 'terrain'
                                })
                            }),
                            new ol.layer.Tile({
                                source: new ol.source.Stamen({
                                    layer: 'terrain-labels'
                                })
                            })
                        ]
                    }),
                    new ol.layer.Tile({
                        title: 'Terreno Colors',
                        type: 'base',
                        visible: false,
                        source: new ol.source.Stamen({
                            layer: 'terrain'
                        })
                    }),
                    new ol.layer.Group({
                        title: 'Toner Colors Con Etiquetas',
                        type: 'base',
                        combine: true,
                        visible: false,
                        layers: [
                            new ol.layer.Tile({
                                source: new ol.source.Stamen({
                                    layer: 'toner'
                                })
                            }),
                            new ol.layer.Tile({
                                source: new ol.source.Stamen({
                                    layer: 'terrain-labels'
                                })
                            })
                        ]
                    }),
                    new ol.layer.Tile({
                        title: 'Toner Colors',
                        type: 'base',
                        visible: false,
                        source: new ol.source.Stamen({
                            layer: 'toner'
                        })
                    }),
                    new ol.layer.Group({
                        title: 'Aqua Colors Con Etiquetas',
                        type: 'base',
                        combine: true,
                        visible: false,
                        layers: [
                            new ol.layer.Tile({
                                source: new ol.source.Stamen({
                                    layer: 'watercolor'
                                })
                            }),
                            new ol.layer.Tile({
                                source: new ol.source.Stamen({
                                    layer: 'terrain-labels'
                                })
                            })
                        ]
                    }),
                    new ol.layer.Tile({
                        title: 'Aqua Colors',
                        type: 'base',
                        visible: false,
                        source: new ol.source.Stamen({
                            layer: 'watercolor'
                        })
                    }),
                    new ol.layer.Tile({
                        title: 'OSM',
                        type: 'base',
                        visible: true,
                        source: new ol.source.OSM()
                    }),
                    /*new ol.layer.Tile({
                      title: 'Satélite',
                      type: 'base',
                      visible: false,
                      source: new ol.source.MapQuest({layer: 'sat'})
                    }),*/
                ]
            }),

            // Segundo apartado, cargado de capas.
            new ol.layer.Group({
                title: 'Capas',
                fold: 'open',
                layers: [
                    new ol.layer.Group({
                        title: 'Seguridad Ciudadana',
                        fold: 'close',
                        layers: []
                    }),
                    new ol.layer.Group({
                        title: 'Obras Públicas',
                        fold: 'close',
                        layers: []
                    }),
                    new ol.layer.Group({
                        title: 'Participación Ciudadana',
                        fold: 'close',
                        layers: []
                    }),
                    new ol.layer.Group({
                        title: 'Desarrollo Urbano',
                        fold: 'close',
                        layers: []
                    }),
                    new ol.layer.Group({
                        title: 'Desarrollo Social',
                        fold: 'close',
                        layers: []
                    }),
                    new ol.layer.Group({
                        title: 'IMMX',
                        fold: 'close',
                        layers: cargaImmx()
                    }),
                    new ol.layer.Group({
                        title: 'Desarrollo Económico',
                        fold: 'close',
                        layers: []
                    }),
                    new ol.layer.Group({
                        title: 'Cartografía',
                        fold: 'close',
                        layers: []
                    }),
                    new ol.layer.Group({
                        title: 'CMAS',
                        fold: 'close',
                        layers: []
                    }),
                    new ol.layer.Group({
                        title: 'Medio Ambiente y Sustentabilidad',
                        fold: 'close',
                        layers: []
                    })
                ]
            })
        ],

        // Informacion y configuraciones para carga de mapa central.
        view: new ol.View({
            center: ol.proj.transform([-96.9137, 19.5426], 'EPSG:4326', 'EPSG:900913'),
            zoom: 12,
            //minZoom: 12,
            //extent: [-10794744.84438, 2212072.63612, -10775612.40370, 2225646.98972],
        })
    });

    // Funcion para la deteccion de moviemiento en los checks de carga.
    var sidebar = new ol.control.Sidebar({
        element: 'sidebar',
        position: 'left'
    });
    var toc = document.getElementById('layers');
    ol.control.LayerSwitcher.renderPanel(map, toc, { reverse: true });
    map.addControl(sidebar);
})();

function cargaMays() {}

function cargaImmx() {
    var data = [
        new ol.layer.Image({
            title: 'CGC',
            visible: false,
            source: new ol.source.ImageWMS({
                ratio: 1,
                params: { LAYERS: 'show:0' },
                url: '',
                serverType: 'geoserver'
            })
        }),
        new ol.layer.Image({
            title: 'Luminarias',
            visible: false,
            source: new ol.source.ImageWMS({
                ratio: 1,
                params: { LAYERS: 'show:0' },
                url: '',
                serverType: 'geoserver'
            })
        })
    ]
    return data
}