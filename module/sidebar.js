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
                        layers: cargaSeguCiu()
                    }),
                    new ol.layer.Group({
                        title: 'Obras Públicas',
                        fold: 'close',
                        layers: cargaObraPub()
                    }),
                    new ol.layer.Group({
                        title: 'Participación Ciudadana',
                        fold: 'close',
                        layers: cargaPartCiu()
                    }),
                    new ol.layer.Group({
                        title: 'Desarrollo Urbano',
                        fold: 'close',
                        layers: cargaDesaUrb()
                    }),
                    new ol.layer.Group({
                        title: 'Desarrollo Social',
                        fold: 'close',
                        layers: cargaDesaSoc()
                    }),
                    new ol.layer.Group({
                        title: 'IMMX',
                        fold: 'close',
                        layers: cargaImmx()
                    }),
                    new ol.layer.Group({
                        title: 'Desarrollo Económico',
                        fold: 'close',
                        layers: cargaDesaEco()
                    }),
                    new ol.layer.Group({
                        title: 'Cartografía',
                        fold: 'close',
                        layers: cargaCartografia()
                    }),
                    new ol.layer.Group({
                        title: 'CMAS',
                        fold: 'close',
                        layers: cargaCmas()
                    }),
                    new ol.layer.Group({
                        title: 'Medio Ambiente y Sustentabilidad',
                        fold: 'close',
                        layers: cargaMays()
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

// Carga de capas de Medio Ambiente y Sustentabilidad
function cargaMays() {
    var data = [];

    return data;
}

// Carga de capas de CMAS
function cargaCmas() {
    var data = [];

    return data;
}

// Carga de capas de Cartografia
function cargaCartografia() {
    var data = [];

    return data;
}

// Carga de capas de Desarrollo Economico
function cargaDesaEco() {
    var data = [];

    return data;
}

// Carga de capas de IMMX
function cargaImmx() {
    var data = [
        new ol.layer.Image({
            title: 'CGC',
            visible: false,
            source: new ol.source.ImageWMS({
                ratio: 1,
                params: { LAYERS: 'show:0' },
                url: 'http://cartografia.xalapa.gob.mx/geoserver/cgc_puntos/wms?service=WMS&version=1.1.0&request=GetMap&layers=cgc_puntos:gc_puntos&bbox=714989.0794947173,2158725.2883159253,726772.5071550107,2166679.2346946606&width=768&height=518&srs=EPSG:32614&styles=&format=image/png',
                serverType: 'geoserver'
            })
        }),
        new ol.layer.Image({
            title: 'Colonias',
            visible: false,
            source: new ol.source.ImageWMS({
                ratio: 1,
                params: { LAYERS: 'show:0' },
                url: 'http://cartografia.xalapa.gob.mx/geoserver/colonias_poligonos/wms?service=WMS&version=1.1.0&request=GetMap&layers=colonias_poligonos%3Acolonias_poligonos&bbox=713070.5210811349%2C2155983.6202275706%2C727856.8402272151%2C2167101.511132997&width=768&height=577&srs=EPSG%3A32614&styles=&format=image%2Fpng',
                serverType: 'geoserver'
            })
        })
    ];

    return data;
}

// Carga de capas de Desarrollo Social
function cargaDesaSoc() {
    var data = [];

    return data;
}

// Carga de capas de Desarrollo Urbano
function cargaDesaUrb() {
    var data = [];

    return data;
}

// Carga de capas de Participacion Ciudadana
function cargaPartCiu() {
    var data = [];

    return data;
}

// Carga de capas de Obras Publicas
function cargaObraPub() {
    var data = [];

    return data;
}

// Carga de capas de Seguridad Ciudadana
function cargaSeguCiu() {
    var data = [];

    return data;
}