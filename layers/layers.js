var wms_layers = [];


        var lyr_ESRIStandard_0 = new ol.layer.Tile({
            'title': 'ESRI Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_adm_rt_rw_pasirkaliki_1 = new ol.format.GeoJSON();
var features_adm_rt_rw_pasirkaliki_1 = format_adm_rt_rw_pasirkaliki_1.readFeatures(json_adm_rt_rw_pasirkaliki_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_adm_rt_rw_pasirkaliki_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_adm_rt_rw_pasirkaliki_1.addFeatures(features_adm_rt_rw_pasirkaliki_1);
var lyr_adm_rt_rw_pasirkaliki_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_adm_rt_rw_pasirkaliki_1, 
                style: style_adm_rt_rw_pasirkaliki_1,
                popuplayertitle: "adm_rt_rw_pasirkaliki",
                interactive: true,
                title: '<img src="styles/legend/adm_rt_rw_pasirkaliki_1.png" /> adm_rt_rw_pasirkaliki'
            });
var format_Buffered_2 = new ol.format.GeoJSON();
var features_Buffered_2 = format_Buffered_2.readFeatures(json_Buffered_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Buffered_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Buffered_2.addFeatures(features_Buffered_2);
var lyr_Buffered_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Buffered_2, 
                style: style_Buffered_2,
                popuplayertitle: "Buffered",
                interactive: true,
                title: '<img src="styles/legend/Buffered_2.png" /> Buffered'
            });
var format_UTMVEKTOR_3 = new ol.format.GeoJSON();
var features_UTMVEKTOR_3 = format_UTMVEKTOR_3.readFeatures(json_UTMVEKTOR_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UTMVEKTOR_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UTMVEKTOR_3.addFeatures(features_UTMVEKTOR_3);
var lyr_UTMVEKTOR_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UTMVEKTOR_3, 
                style: style_UTMVEKTOR_3,
                popuplayertitle: "UTM VEKTOR",
                interactive: true,
                title: '<img src="styles/legend/UTMVEKTOR_3.png" /> UTM VEKTOR'
            });

lyr_ESRIStandard_0.setVisible(true);lyr_adm_rt_rw_pasirkaliki_1.setVisible(true);lyr_Buffered_2.setVisible(true);lyr_UTMVEKTOR_3.setVisible(true);
var layersList = [lyr_ESRIStandard_0,lyr_adm_rt_rw_pasirkaliki_1,lyr_Buffered_2,lyr_UTMVEKTOR_3];
lyr_adm_rt_rw_pasirkaliki_1.set('fieldAliases', {'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'CIMAHI_ADM': 'CIMAHI_ADM', 'CIMAHI_A_1': 'CIMAHI_A_1', 'KECAMATAN': 'KECAMATAN', 'KELURAHAN': 'KELURAHAN', 'RW': 'RW', 'RT': 'RT', });
lyr_Buffered_2.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_UTMVEKTOR_3.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', });
lyr_adm_rt_rw_pasirkaliki_1.set('fieldImages', {'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'CIMAHI_ADM': 'TextEdit', 'CIMAHI_A_1': 'TextEdit', 'KECAMATAN': 'TextEdit', 'KELURAHAN': 'TextEdit', 'RW': 'TextEdit', 'RT': 'TextEdit', });
lyr_Buffered_2.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_UTMVEKTOR_3.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', });
lyr_adm_rt_rw_pasirkaliki_1.set('fieldLabels', {'AREA': 'no label', 'PERIMETER': 'no label', 'CIMAHI_ADM': 'no label', 'CIMAHI_A_1': 'no label', 'KECAMATAN': 'no label', 'KELURAHAN': 'no label', 'RW': 'no label', 'RT': 'no label', });
lyr_Buffered_2.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_UTMVEKTOR_3.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', });
lyr_UTMVEKTOR_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});