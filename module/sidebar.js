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
                        title: 'Capas Base',
                        fold: 'close',
                        layers: cargaImmx()
                    }),
                ]
            })
        ],

        // Informacion y configuraciones para carga de mapa central.
        view: new ol.View({
            center: ol.proj.transform([-96.9137, 19.5426], 'EPSG:4326', 'EPSG:900913'),
            zoom: 12,
            minZoom: 12,
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

// Carga de capas de IMMX
function cargaImmx() {
    var data = [
        new ol.layer.Image({
            title: 'Colonias',
            visible: false,
            source: new ol.source.ImageWMS({
                ratio: 1,
                params: { LAYERS: 'colonias_poligonos' },
                url: 'http://cartografia.xalapa.gob.mx/geoserver/wms',
                serverType: 'geoserver'
            })
        }),
        new ol.layer.Image({
            title: 'Area Geoestadistica Municipal',
            visible: false,
            source: new ol.source.ImageWMS({
                ratio: 1,
                params: { LAYERS: 'areageoestadisticabasicamunicipal_poligonos' },
                url: 'http://cartografia.xalapa.gob.mx/geoserver/wms',
                serverType: 'geoserver'
            })
        }),
        new ol.layer.Image({
            title: 'Area Geoestadistica',
            visible: false,
            source: new ol.source.ImageWMS({
                ratio: 1,
                params: { LAYERS: 'areageoestadisticabasicarural_poligonos' },
                url: 'http://cartografia.xalapa.gob.mx/geoserver/wms',
                serverType: 'geoserver'
            })
        }),
        new ol.layer.Image({
            title: 'Localidades Rurales',
            visible: false,
            source: new ol.source.ImageWMS({
                ratio: 1,
                params: { LAYERS: 'localidadesurbanasrurales_poligonos' },
                url: 'http://cartografia.xalapa.gob.mx/geoserver/wms',
                serverType: 'geoserver'
            })
        }),
        new ol.layer.Image({
            title: 'Localidades Urbanas',
            visible: false,
            source: new ol.source.ImageWMS({
                ratio: 1,
                params: { LAYERS: 'localidadurbanasrurales_poligonos' },
                url: 'http://cartografia.xalapa.gob.mx/geoserver/wms',
                serverType: 'geoserver'
            })
        }),
        new ol.layer.Image({
            title: 'Zona Metropolitana',
            visible: false,
            source: new ol.source.ImageWMS({
                ratio: 1,
                params: { LAYERS: 'zonametropoliana_poligonos' },
                url: 'http://cartografia.xalapa.gob.mx/geoserver/wms',
                serverType: 'geoserver'
            })
        }),
        new ol.layer.Image({
            title: 'Cuerpos de Agua',
            visible: false,
            source: new ol.source.ImageWMS({
                ratio: 1,
                params: { LAYERS: 'cuerposagua_poligonos' },
                url: 'http://cartografia.xalapa.gob.mx/geoserver/wms',
                serverType: 'geoserver'
            })
        }),
        new ol.layer.Image({
            title: 'Áreas Naturales Protegidas',
            visible: false,
            source: new ol.source.ImageWMS({
                ratio: 1,
                params: { LAYERS: 'anp_poligonos' },
                url: 'http://cartografia.xalapa.gob.mx/geoserver/wms',
                serverType: 'geoserver'
            })
        }),
        new ol.layer.Image({
            title: 'AGED Rural(AM)',
            visible: false,
            source: new ol.source.ImageWMS({
                ratio: 1,
                params: { LAYERS: 'agebruralam_poligonos' },
                url: 'http://cartografia.xalapa.gob.mx/geoserver/wms',
                serverType: 'geoserver'
            })
        }),
        new ol.layer.Image({
            title: 'AGED Rural',
            visible: false,
            source: new ol.source.ImageWMS({
                ratio: 1,
                params: { LAYERS: 'agebrural_poligonos' },
                url: 'http://cartografia.xalapa.gob.mx/geoserver/wms',
                serverType: 'geoserver'
            })
        }),
        new ol.layer.Image({
            title: 'Codigo Postal',
            visible: false,
            source: new ol.source.ImageWMS({
                ratio: 1,
                params: { LAYERS: 'cp_poligonos' },
                url: 'http://cartografia.xalapa.gob.mx/geoserver/wms',
                serverType: 'geoserver'
            })
        }),
        new ol.layer.Image({
            title: 'Codigo Postal(AM)',
            visible: false,
            source: new ol.source.ImageWMS({
                ratio: 1,
                params: { LAYERS: 'cpam_poligonos' },
                url: 'http://cartografia.xalapa.gob.mx/geoserver/wms',
                serverType: 'geoserver'
            })
        }),
        new ol.layer.Image({
            title: 'Municipio',
            visible: false,
            source: new ol.source.ImageWMS({
                ratio: 1,
                params: {
                    LAYERS: 'municipio_poligonos',
                    TILED: true
                },
                url: 'http://cartografia.xalapa.gob.mx/geoserver/municipio_poligonos/wms?service=WMS&version=1.1.0&request=GetMap&layers=municipio_poligonos%3Amunicipio_poligonos&bbox=712906.2484578167%2C2155789.083576468%2C730905.3026604024%2C2168593.3973431736&width=768&height=546&srs=EPSG%3A32614&styles=&format=application/openlayers',
                serverType: 'geoserver'
            })
        }),
        new ol.layer.Image({
            title: 'Limites Municipales',
            visible: false,
            source: new ol.source.ImageWMS({
                ratio: 1,
                params: { LAYERS: 'limitemunicipio_line' },
                url: 'http://cartografia.xalapa.gob.mx/geoserver/wms',
                serverType: 'geoserver'
            })
        }),
        new ol.layer.Image({
            title: 'Ríos',
            visible: false,
            source: new ol.source.ImageWMS({
                ratio: 1,
                params: { LAYERS: 'rios_linestring' },
                url: 'http://cartografia.xalapa.gob.mx/geoserver/wms',
                serverType: 'geoserver'
            })
        }),
        new ol.layer.Image({
            title: 'Montañas',
            visible: false,
            source: new ol.source.ImageWMS({
                ratio: 1,
                params: { LAYERS: 'curvas_poligonos' },
                url: 'http://cartografia.xalapa.gob.mx/geoserver/wms',
                serverType: 'geoserver'
            })
        }),
        new ol.layer.Image({
            title: 'Localidades Rurales Limites(Puntos)',
            visible: false,
            source: new ol.source.ImageWMS({
                ratio: 1,
                params: { LAYERS: 'localidadesruralesglobales_points' },
                url: 'http://cartografia.xalapa.gob.mx/geoserver/wms',
                serverType: 'geoserver'
            })
        }),
        new ol.layer.Image({
            title: 'Localidades Rurales(Puntos)',
            visible: false,
            source: new ol.source.ImageWMS({
                ratio: 1,
                params: { LAYERS: 'localidadesrurales_points' },
                url: 'http://cartografia.xalapa.gob.mx/geoserver/wms',
                serverType: 'geoserver'
            })
        }),
        new ol.layer.Image({
            title: 'Centro de Gestión Comunitaria(CGC)',
            visible: false,
            source: new ol.source.ImageWMS({
                ratio: 1,
                params: { LAYERS: 'cgc_puntos' },
                url: 'http://cartografia.xalapa.gob.mx/geoserver/wms',
                serverType: 'geoserver'
            })
        }),
    ];

    return data;
}