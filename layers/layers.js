var wms_layers = [];

var format_SfPboundary_0 = new ol.format.GeoJSON();
var features_SfPboundary_0 = format_SfPboundary_0.readFeatures(json_SfPboundary_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SfPboundary_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SfPboundary_0.addFeatures(features_SfPboundary_0);
var lyr_SfPboundary_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SfPboundary_0, 
                style: style_SfPboundary_0,
                popuplayertitle: 'SfP boundary',
                interactive: true,
                title: '<img src="styles/legend/SfPboundary_0.png" /> SfP boundary'
            });
var format_StGiles_1 = new ol.format.GeoJSON();
var features_StGiles_1 = format_StGiles_1.readFeatures(json_StGiles_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StGiles_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StGiles_1.addFeatures(features_StGiles_1);
var lyr_StGiles_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_StGiles_1, 
                style: style_StGiles_1,
                popuplayertitle: 'St Giles',
                interactive: true,
                title: '<img src="styles/legend/StGiles_1.png" /> St Giles'
            });
var format_NorthWalworth_2 = new ol.format.GeoJSON();
var features_NorthWalworth_2 = format_NorthWalworth_2.readFeatures(json_NorthWalworth_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NorthWalworth_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NorthWalworth_2.addFeatures(features_NorthWalworth_2);
var lyr_NorthWalworth_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NorthWalworth_2, 
                style: style_NorthWalworth_2,
                popuplayertitle: 'North Walworth',
                interactive: true,
                title: '<img src="styles/legend/NorthWalworth_2.png" /> North Walworth'
            });
var format_Faraday_3 = new ol.format.GeoJSON();
var features_Faraday_3 = format_Faraday_3.readFeatures(json_Faraday_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Faraday_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Faraday_3.addFeatures(features_Faraday_3);
var lyr_Faraday_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Faraday_3, 
                style: style_Faraday_3,
                popuplayertitle: 'Faraday',
                interactive: true,
                title: '<img src="styles/legend/Faraday_3.png" /> Faraday'
            });
var format_Peckham_4 = new ol.format.GeoJSON();
var features_Peckham_4 = format_Peckham_4.readFeatures(json_Peckham_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Peckham_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Peckham_4.addFeatures(features_Peckham_4);
var lyr_Peckham_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Peckham_4, 
                style: style_Peckham_4,
                popuplayertitle: 'Peckham',
                interactive: true,
                title: '<img src="styles/legend/Peckham_4.png" /> Peckham'
            });
var format_OldKentRd_5 = new ol.format.GeoJSON();
var features_OldKentRd_5 = format_OldKentRd_5.readFeatures(json_OldKentRd_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OldKentRd_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OldKentRd_5.addFeatures(features_OldKentRd_5);
var lyr_OldKentRd_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OldKentRd_5, 
                style: style_OldKentRd_5,
                popuplayertitle: 'Old Kent Rd',
                interactive: true,
                title: '<img src="styles/legend/OldKentRd_5.png" /> Old Kent Rd'
            });
var format_CamberwellGreen_6 = new ol.format.GeoJSON();
var features_CamberwellGreen_6 = format_CamberwellGreen_6.readFeatures(json_CamberwellGreen_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CamberwellGreen_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CamberwellGreen_6.addFeatures(features_CamberwellGreen_6);
var lyr_CamberwellGreen_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CamberwellGreen_6, 
                style: style_CamberwellGreen_6,
                popuplayertitle: 'Camberwell Green',
                interactive: true,
                title: '<img src="styles/legend/CamberwellGreen_6.png" /> Camberwell Green'
            });
var format_SLB_7 = new ol.format.GeoJSON();
var features_SLB_7 = format_SLB_7.readFeatures(json_SLB_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SLB_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SLB_7.addFeatures(features_SLB_7);
var lyr_SLB_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SLB_7, 
                style: style_SLB_7,
                popuplayertitle: 'SLB',
                interactive: true,
                title: '<img src="styles/legend/SLB_7.png" /> SLB'
            });
var format_TLRN_8 = new ol.format.GeoJSON();
var features_TLRN_8 = format_TLRN_8.readFeatures(json_TLRN_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TLRN_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TLRN_8.addFeatures(features_TLRN_8);
var lyr_TLRN_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TLRN_8, 
                style: style_TLRN_8,
                popuplayertitle: 'TLRN',
                interactive: true,
                title: '<img src="styles/legend/TLRN_8.png" /> TLRN'
            });
var format_17JohnMauriceClose_9 = new ol.format.GeoJSON();
var features_17JohnMauriceClose_9 = format_17JohnMauriceClose_9.readFeatures(json_17JohnMauriceClose_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_17JohnMauriceClose_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_17JohnMauriceClose_9.addFeatures(features_17JohnMauriceClose_9);
var lyr_17JohnMauriceClose_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_17JohnMauriceClose_9, 
                style: style_17JohnMauriceClose_9,
                popuplayertitle: '17 - John Maurice Close',
                interactive: true,
                title: '<img src="styles/legend/17JohnMauriceClose_9.png" /> 17 - John Maurice Close'
            });
var format_14DarwinStreet_10 = new ol.format.GeoJSON();
var features_14DarwinStreet_10 = format_14DarwinStreet_10.readFeatures(json_14DarwinStreet_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_14DarwinStreet_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_14DarwinStreet_10.addFeatures(features_14DarwinStreet_10);
var lyr_14DarwinStreet_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_14DarwinStreet_10, 
                style: style_14DarwinStreet_10,
                popuplayertitle: '14 - Darwin Street',
                interactive: true,
                title: '<img src="styles/legend/14DarwinStreet_10.png" /> 14 - Darwin Street'
            });
var format_13BeckwayStreet_11 = new ol.format.GeoJSON();
var features_13BeckwayStreet_11 = format_13BeckwayStreet_11.readFeatures(json_13BeckwayStreet_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_13BeckwayStreet_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_13BeckwayStreet_11.addFeatures(features_13BeckwayStreet_11);
var lyr_13BeckwayStreet_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_13BeckwayStreet_11, 
                style: style_13BeckwayStreet_11,
                popuplayertitle: '13 - Beckway Street',
                interactive: true,
                title: '<img src="styles/legend/13BeckwayStreet_11.png" /> 13 - Beckway Street'
            });
var format_7EastStreet_12 = new ol.format.GeoJSON();
var features_7EastStreet_12 = format_7EastStreet_12.readFeatures(json_7EastStreet_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_7EastStreet_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_7EastStreet_12.addFeatures(features_7EastStreet_12);
var lyr_7EastStreet_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_7EastStreet_12, 
                style: style_7EastStreet_12,
                popuplayertitle: '7 - East Street',
                interactive: true,
                title: '<img src="styles/legend/7EastStreet_12.png" /> 7 - East Street'
            });
var format_12AlveyStreet_13 = new ol.format.GeoJSON();
var features_12AlveyStreet_13 = format_12AlveyStreet_13.readFeatures(json_12AlveyStreet_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_12AlveyStreet_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_12AlveyStreet_13.addFeatures(features_12AlveyStreet_13);
var lyr_12AlveyStreet_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_12AlveyStreet_13, 
                style: style_12AlveyStreet_13,
                popuplayertitle: '12 - Alvey Street',
                interactive: true,
                title: '<img src="styles/legend/12AlveyStreet_13.png" /> 12 - Alvey Street'
            });
var format_9Beaconsfield_14 = new ol.format.GeoJSON();
var features_9Beaconsfield_14 = format_9Beaconsfield_14.readFeatures(json_9Beaconsfield_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_9Beaconsfield_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_9Beaconsfield_14.addFeatures(features_9Beaconsfield_14);
var lyr_9Beaconsfield_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_9Beaconsfield_14, 
                style: style_9Beaconsfield_14,
                popuplayertitle: '9 - Beaconsfield',
                interactive: true,
                title: '<img src="styles/legend/9Beaconsfield_14.png" /> 9 - Beaconsfield'
            });
var format_2AlbanyRoad_15 = new ol.format.GeoJSON();
var features_2AlbanyRoad_15 = format_2AlbanyRoad_15.readFeatures(json_2AlbanyRoad_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2AlbanyRoad_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2AlbanyRoad_15.addFeatures(features_2AlbanyRoad_15);
var lyr_2AlbanyRoad_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2AlbanyRoad_15, 
                style: style_2AlbanyRoad_15,
                popuplayertitle: '2 - Albany Road',
                interactive: true,
                title: '<img src="styles/legend/2AlbanyRoad_15.png" /> 2 - Albany Road'
            });
var format_11NeateStreet_16 = new ol.format.GeoJSON();
var features_11NeateStreet_16 = format_11NeateStreet_16.readFeatures(json_11NeateStreet_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_11NeateStreet_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_11NeateStreet_16.addFeatures(features_11NeateStreet_16);
var lyr_11NeateStreet_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_11NeateStreet_16, 
                style: style_11NeateStreet_16,
                popuplayertitle: '11 Neate Street',
                interactive: true,
                title: '<img src="styles/legend/11NeateStreet_16.png" /> 11 Neate Street'
            });
var format_4TrafalgarAvenue_17 = new ol.format.GeoJSON();
var features_4TrafalgarAvenue_17 = format_4TrafalgarAvenue_17.readFeatures(json_4TrafalgarAvenue_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_4TrafalgarAvenue_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_4TrafalgarAvenue_17.addFeatures(features_4TrafalgarAvenue_17);
var lyr_4TrafalgarAvenue_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_4TrafalgarAvenue_17, 
                style: style_4TrafalgarAvenue_17,
                popuplayertitle: '4 - Trafalgar Avenue',
                interactive: true,
                title: '<img src="styles/legend/4TrafalgarAvenue_17.png" /> 4 - Trafalgar Avenue'
            });
var format_10GlengallRoad_18 = new ol.format.GeoJSON();
var features_10GlengallRoad_18 = format_10GlengallRoad_18.readFeatures(json_10GlengallRoad_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_10GlengallRoad_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_10GlengallRoad_18.addFeatures(features_10GlengallRoad_18);
var lyr_10GlengallRoad_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_10GlengallRoad_18, 
                style: style_10GlengallRoad_18,
                popuplayertitle: '10 - Glengall Road',
                interactive: true,
                title: '<img src="styles/legend/10GlengallRoad_18.png" /> 10 - Glengall Road'
            });
var format_9StGeorgesWay_19 = new ol.format.GeoJSON();
var features_9StGeorgesWay_19 = format_9StGeorgesWay_19.readFeatures(json_9StGeorgesWay_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_9StGeorgesWay_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_9StGeorgesWay_19.addFeatures(features_9StGeorgesWay_19);
var lyr_9StGeorgesWay_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_9StGeorgesWay_19, 
                style: style_9StGeorgesWay_19,
                popuplayertitle: '9 - St Georges Way',
                interactive: true,
                title: '<img src="styles/legend/9StGeorgesWay_19.png" /> 9 - St Georges Way'
            });
var format_1HaymerleRoad_20 = new ol.format.GeoJSON();
var features_1HaymerleRoad_20 = format_1HaymerleRoad_20.readFeatures(json_1HaymerleRoad_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1HaymerleRoad_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1HaymerleRoad_20.addFeatures(features_1HaymerleRoad_20);
var lyr_1HaymerleRoad_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1HaymerleRoad_20, 
                style: style_1HaymerleRoad_20,
                popuplayertitle: '1 - Haymerle Road',
                interactive: true,
                title: '<img src="styles/legend/1HaymerleRoad_20.png" /> 1 - Haymerle Road'
            });
var format_10BurgessPark_21 = new ol.format.GeoJSON();
var features_10BurgessPark_21 = format_10BurgessPark_21.readFeatures(json_10BurgessPark_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_10BurgessPark_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_10BurgessPark_21.addFeatures(features_10BurgessPark_21);
var lyr_10BurgessPark_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_10BurgessPark_21, 
                style: style_10BurgessPark_21,
                popuplayertitle: '10 - Burgess Park',
                interactive: true,
                title: '<img src="styles/legend/10BurgessPark_21.png" /> 10 - Burgess Park'
            });
var format_8MerrowStreet_22 = new ol.format.GeoJSON();
var features_8MerrowStreet_22 = format_8MerrowStreet_22.readFeatures(json_8MerrowStreet_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_8MerrowStreet_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_8MerrowStreet_22.addFeatures(features_8MerrowStreet_22);
var lyr_8MerrowStreet_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_8MerrowStreet_22, 
                style: style_8MerrowStreet_22,
                popuplayertitle: '8 - Merrow Street',
                interactive: true,
                title: '<img src="styles/legend/8MerrowStreet_22.png" /> 8 - Merrow Street'
            });
var format_4OrbitStreet_23 = new ol.format.GeoJSON();
var features_4OrbitStreet_23 = format_4OrbitStreet_23.readFeatures(json_4OrbitStreet_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_4OrbitStreet_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_4OrbitStreet_23.addFeatures(features_4OrbitStreet_23);
var lyr_4OrbitStreet_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_4OrbitStreet_23, 
                style: style_4OrbitStreet_23,
                popuplayertitle: '4 - Orbit Street',
                interactive: true,
                title: '<img src="styles/legend/4OrbitStreet_23.png" /> 4 - Orbit Street'
            });
var format_3PeckhamParkRoad_24 = new ol.format.GeoJSON();
var features_3PeckhamParkRoad_24 = format_3PeckhamParkRoad_24.readFeatures(json_3PeckhamParkRoad_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_3PeckhamParkRoad_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_3PeckhamParkRoad_24.addFeatures(features_3PeckhamParkRoad_24);
var lyr_3PeckhamParkRoad_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_3PeckhamParkRoad_24, 
                style: style_3PeckhamParkRoad_24,
                popuplayertitle: '3 - Peckham Park Road',
                interactive: true,
                title: '<img src="styles/legend/3PeckhamParkRoad_24.png" /> 3 - Peckham Park Road'
            });
var format_6WillowbrookRoad_25 = new ol.format.GeoJSON();
var features_6WillowbrookRoad_25 = format_6WillowbrookRoad_25.readFeatures(json_6WillowbrookRoad_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_6WillowbrookRoad_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_6WillowbrookRoad_25.addFeatures(features_6WillowbrookRoad_25);
var lyr_6WillowbrookRoad_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_6WillowbrookRoad_25, 
                style: style_6WillowbrookRoad_25,
                popuplayertitle: '6 - Willowbrook Road',
                interactive: true,
                title: '<img src="styles/legend/6WillowbrookRoad_25.png" /> 6 - Willowbrook Road'
            });
var format_2BirdinBushRoad_26 = new ol.format.GeoJSON();
var features_2BirdinBushRoad_26 = format_2BirdinBushRoad_26.readFeatures(json_2BirdinBushRoad_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2BirdinBushRoad_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2BirdinBushRoad_26.addFeatures(features_2BirdinBushRoad_26);
var lyr_2BirdinBushRoad_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2BirdinBushRoad_26, 
                style: style_2BirdinBushRoad_26,
                popuplayertitle: '2 - Bird in Bush Road',
                interactive: true,
                title: '<img src="styles/legend/2BirdinBushRoad_26.png" /> 2 - Bird in Bush Road'
            });
var format_5NaylorRoad_27 = new ol.format.GeoJSON();
var features_5NaylorRoad_27 = format_5NaylorRoad_27.readFeatures(json_5NaylorRoad_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_5NaylorRoad_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_5NaylorRoad_27.addFeatures(features_5NaylorRoad_27);
var lyr_5NaylorRoad_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_5NaylorRoad_27, 
                style: style_5NaylorRoad_27,
                popuplayertitle: '5 - Naylor Road',
                interactive: true,
                title: '<img src="styles/legend/5NaylorRoad_27.png" /> 5 - Naylor Road'
            });
var format_17CliftonWay_28 = new ol.format.GeoJSON();
var features_17CliftonWay_28 = format_17CliftonWay_28.readFeatures(json_17CliftonWay_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_17CliftonWay_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_17CliftonWay_28.addFeatures(features_17CliftonWay_28);
var lyr_17CliftonWay_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_17CliftonWay_28, 
                style: style_17CliftonWay_28,
                popuplayertitle: '17 - Clifton Way',
                interactive: true,
                title: '<img src="styles/legend/17CliftonWay_28.png" /> 17 - Clifton Way'
            });
var format_12ElephantRoad_29 = new ol.format.GeoJSON();
var features_12ElephantRoad_29 = format_12ElephantRoad_29.readFeatures(json_12ElephantRoad_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_12ElephantRoad_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_12ElephantRoad_29.addFeatures(features_12ElephantRoad_29);
var lyr_12ElephantRoad_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_12ElephantRoad_29, 
                style: style_12ElephantRoad_29,
                popuplayertitle: '12 - Elephant Road',
                interactive: true,
                title: '<img src="styles/legend/12ElephantRoad_29.png" /> 12 - Elephant Road'
            });
var format_4PomeroyStreet_30 = new ol.format.GeoJSON();
var features_4PomeroyStreet_30 = format_4PomeroyStreet_30.readFeatures(json_4PomeroyStreet_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_4PomeroyStreet_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_4PomeroyStreet_30.addFeatures(features_4PomeroyStreet_30);
var lyr_4PomeroyStreet_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_4PomeroyStreet_30, 
                style: style_4PomeroyStreet_30,
                popuplayertitle: '4 - Pomeroy Street',
                interactive: true,
                title: '<img src="styles/legend/4PomeroyStreet_30.png" /> 4 - Pomeroy Street'
            });
var format_1AsylumRoad_31 = new ol.format.GeoJSON();
var features_1AsylumRoad_31 = format_1AsylumRoad_31.readFeatures(json_1AsylumRoad_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1AsylumRoad_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1AsylumRoad_31.addFeatures(features_1AsylumRoad_31);
var lyr_1AsylumRoad_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1AsylumRoad_31, 
                style: style_1AsylumRoad_31,
                popuplayertitle: '1 - Asylum Road',
                interactive: true,
                title: '<img src="styles/legend/1AsylumRoad_31.png" /> 1 - Asylum Road'
            });
var format_2CarltonGrove_32 = new ol.format.GeoJSON();
var features_2CarltonGrove_32 = format_2CarltonGrove_32.readFeatures(json_2CarltonGrove_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2CarltonGrove_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2CarltonGrove_32.addFeatures(features_2CarltonGrove_32);
var lyr_2CarltonGrove_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2CarltonGrove_32, 
                style: style_2CarltonGrove_32,
                popuplayertitle: '2 - Carlton Grove',
                interactive: true,
                title: '<img src="styles/legend/2CarltonGrove_32.png" /> 2 - Carlton Grove'
            });
var format_14MarmontRoad_33 = new ol.format.GeoJSON();
var features_14MarmontRoad_33 = format_14MarmontRoad_33.readFeatures(json_14MarmontRoad_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_14MarmontRoad_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_14MarmontRoad_33.addFeatures(features_14MarmontRoad_33);
var lyr_14MarmontRoad_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_14MarmontRoad_33, 
                style: style_14MarmontRoad_33,
                popuplayertitle: '14 - Marmont Road',
                interactive: true,
                title: '<img src="styles/legend/14MarmontRoad_33.png" /> 14 - Marmont Road'
            });
var format_16FurleyRoad_34 = new ol.format.GeoJSON();
var features_16FurleyRoad_34 = format_16FurleyRoad_34.readFeatures(json_16FurleyRoad_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_16FurleyRoad_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_16FurleyRoad_34.addFeatures(features_16FurleyRoad_34);
var lyr_16FurleyRoad_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_16FurleyRoad_34, 
                style: style_16FurleyRoad_34,
                popuplayertitle: '16 - Furley Road',
                interactive: true,
                title: '<img src="styles/legend/16FurleyRoad_34.png" /> 16 - Furley Road'
            });
var format_13BullerClose_35 = new ol.format.GeoJSON();
var features_13BullerClose_35 = format_13BullerClose_35.readFeatures(json_13BullerClose_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_13BullerClose_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_13BullerClose_35.addFeatures(features_13BullerClose_35);
var lyr_13BullerClose_35 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_13BullerClose_35, 
                style: style_13BullerClose_35,
                popuplayertitle: '13 - Buller Close',
                interactive: true,
                title: '<img src="styles/legend/13BullerClose_35.png" /> 13 - Buller Close'
            });
var format_8SumnerRoad_36 = new ol.format.GeoJSON();
var features_8SumnerRoad_36 = format_8SumnerRoad_36.readFeatures(json_8SumnerRoad_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_8SumnerRoad_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_8SumnerRoad_36.addFeatures(features_8SumnerRoad_36);
var lyr_8SumnerRoad_36 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_8SumnerRoad_36, 
                style: style_8SumnerRoad_36,
                popuplayertitle: '8 - Sumner Road',
                interactive: true,
                title: '<img src="styles/legend/8SumnerRoad_36.png" /> 8 - Sumner Road'
            });
var format_7PeckhamHillStreet_37 = new ol.format.GeoJSON();
var features_7PeckhamHillStreet_37 = format_7PeckhamHillStreet_37.readFeatures(json_7PeckhamHillStreet_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_7PeckhamHillStreet_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_7PeckhamHillStreet_37.addFeatures(features_7PeckhamHillStreet_37);
var lyr_7PeckhamHillStreet_37 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_7PeckhamHillStreet_37, 
                style: style_7PeckhamHillStreet_37,
                popuplayertitle: '7 - Peckham Hill Street',
                interactive: true,
                title: '<img src="styles/legend/7PeckhamHillStreet_37.png" /> 7 - Peckham Hill Street'
            });
var format_2cBowyerPlSouthamptonWy_38 = new ol.format.GeoJSON();
var features_2cBowyerPlSouthamptonWy_38 = format_2cBowyerPlSouthamptonWy_38.readFeatures(json_2cBowyerPlSouthamptonWy_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2cBowyerPlSouthamptonWy_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2cBowyerPlSouthamptonWy_38.addFeatures(features_2cBowyerPlSouthamptonWy_38);
var lyr_2cBowyerPlSouthamptonWy_38 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2cBowyerPlSouthamptonWy_38, 
                style: style_2cBowyerPlSouthamptonWy_38,
                popuplayertitle: '2c - Bowyer Pl Southampton Wy',
                interactive: true,
                title: '<img src="styles/legend/2cBowyerPlSouthamptonWy_38.png" /> 2c - Bowyer Pl Southampton Wy'
            });
var format_6HavilStreet_39 = new ol.format.GeoJSON();
var features_6HavilStreet_39 = format_6HavilStreet_39.readFeatures(json_6HavilStreet_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_6HavilStreet_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_6HavilStreet_39.addFeatures(features_6HavilStreet_39);
var lyr_6HavilStreet_39 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_6HavilStreet_39, 
                style: style_6HavilStreet_39,
                popuplayertitle: '6 - Havil Street',
                interactive: true,
                title: '<img src="styles/legend/6HavilStreet_39.png" /> 6 - Havil Street'
            });
var format_17KellyAvenue_40 = new ol.format.GeoJSON();
var features_17KellyAvenue_40 = format_17KellyAvenue_40.readFeatures(json_17KellyAvenue_40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_17KellyAvenue_40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_17KellyAvenue_40.addFeatures(features_17KellyAvenue_40);
var lyr_17KellyAvenue_40 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_17KellyAvenue_40, 
                style: style_17KellyAvenue_40,
                popuplayertitle: '17 - Kelly Avenue',
                interactive: true,
                title: '<img src="styles/legend/17KellyAvenue_40.png" /> 17 - Kelly Avenue'
            });
var format_1GroveKimptonRoad_41 = new ol.format.GeoJSON();
var features_1GroveKimptonRoad_41 = format_1GroveKimptonRoad_41.readFeatures(json_1GroveKimptonRoad_41, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1GroveKimptonRoad_41 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1GroveKimptonRoad_41.addFeatures(features_1GroveKimptonRoad_41);
var lyr_1GroveKimptonRoad_41 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1GroveKimptonRoad_41, 
                style: style_1GroveKimptonRoad_41,
                popuplayertitle: '1 - Grove Kimpton Road',
                interactive: true,
                title: '<img src="styles/legend/1GroveKimptonRoad_41.png" /> 1 - Grove Kimpton Road'
            });
var format_14EdmundStreet_42 = new ol.format.GeoJSON();
var features_14EdmundStreet_42 = format_14EdmundStreet_42.readFeatures(json_14EdmundStreet_42, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_14EdmundStreet_42 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_14EdmundStreet_42.addFeatures(features_14EdmundStreet_42);
var lyr_14EdmundStreet_42 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_14EdmundStreet_42, 
                style: style_14EdmundStreet_42,
                popuplayertitle: '14 - Edmund Street',
                interactive: true,
                title: '<img src="styles/legend/14EdmundStreet_42.png" /> 14 - Edmund Street'
            });
var format_6ElmingtonRoad_43 = new ol.format.GeoJSON();
var features_6ElmingtonRoad_43 = format_6ElmingtonRoad_43.readFeatures(json_6ElmingtonRoad_43, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_6ElmingtonRoad_43 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_6ElmingtonRoad_43.addFeatures(features_6ElmingtonRoad_43);
var lyr_6ElmingtonRoad_43 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_6ElmingtonRoad_43, 
                style: style_6ElmingtonRoad_43,
                popuplayertitle: '6 - Elmington Road',
                interactive: true,
                title: '<img src="styles/legend/6ElmingtonRoad_43.png" /> 6 - Elmington Road'
            });
var format_12DanielGardens_44 = new ol.format.GeoJSON();
var features_12DanielGardens_44 = format_12DanielGardens_44.readFeatures(json_12DanielGardens_44, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_12DanielGardens_44 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_12DanielGardens_44.addFeatures(features_12DanielGardens_44);
var lyr_12DanielGardens_44 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_12DanielGardens_44, 
                style: style_12DanielGardens_44,
                popuplayertitle: '12 - Daniel Gardens',
                interactive: true,
                title: '<img src="styles/legend/12DanielGardens_44.png" /> 12 - Daniel Gardens'
            });
var format_11ChandlerWay_45 = new ol.format.GeoJSON();
var features_11ChandlerWay_45 = format_11ChandlerWay_45.readFeatures(json_11ChandlerWay_45, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_11ChandlerWay_45 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_11ChandlerWay_45.addFeatures(features_11ChandlerWay_45);
var lyr_11ChandlerWay_45 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_11ChandlerWay_45, 
                style: style_11ChandlerWay_45,
                popuplayertitle: '11 - Chandler Way',
                interactive: true,
                title: '<img src="styles/legend/11ChandlerWay_45.png" /> 11 - Chandler Way'
            });
var format_18LynbrookGrove_46 = new ol.format.GeoJSON();
var features_18LynbrookGrove_46 = format_18LynbrookGrove_46.readFeatures(json_18LynbrookGrove_46, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_18LynbrookGrove_46 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_18LynbrookGrove_46.addFeatures(features_18LynbrookGrove_46);
var lyr_18LynbrookGrove_46 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_18LynbrookGrove_46, 
                style: style_18LynbrookGrove_46,
                popuplayertitle: '18 - Lynbrook Grove',
                interactive: true,
                title: '<img src="styles/legend/18LynbrookGrove_46.png" /> 18 - Lynbrook Grove'
            });
var format_10PeckhamGrove_47 = new ol.format.GeoJSON();
var features_10PeckhamGrove_47 = format_10PeckhamGrove_47.readFeatures(json_10PeckhamGrove_47, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_10PeckhamGrove_47 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_10PeckhamGrove_47.addFeatures(features_10PeckhamGrove_47);
var lyr_10PeckhamGrove_47 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_10PeckhamGrove_47, 
                style: style_10PeckhamGrove_47,
                popuplayertitle: '10 - Peckham Grove',
                interactive: true,
                title: '<img src="styles/legend/10PeckhamGrove_47.png" /> 10 - Peckham Grove'
            });
var format_9WellsWay_48 = new ol.format.GeoJSON();
var features_9WellsWay_48 = format_9WellsWay_48.readFeatures(json_9WellsWay_48, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_9WellsWay_48 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_9WellsWay_48.addFeatures(features_9WellsWay_48);
var lyr_9WellsWay_48 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_9WellsWay_48, 
                style: style_9WellsWay_48,
                popuplayertitle: '9 - Wells Way',
                interactive: true,
                title: '<img src="styles/legend/9WellsWay_48.png" /> 9 - Wells Way'
            });
var format_5BrandonStreet_49 = new ol.format.GeoJSON();
var features_5BrandonStreet_49 = format_5BrandonStreet_49.readFeatures(json_5BrandonStreet_49, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_5BrandonStreet_49 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_5BrandonStreet_49.addFeatures(features_5BrandonStreet_49);
var lyr_5BrandonStreet_49 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_5BrandonStreet_49, 
                style: style_5BrandonStreet_49,
                popuplayertitle: '5 - Brandon Street',
                interactive: true,
                title: '<img src="styles/legend/5BrandonStreet_49.png" /> 5 - Brandon Street'
            });
var format_6BrowningStreet_50 = new ol.format.GeoJSON();
var features_6BrowningStreet_50 = format_6BrowningStreet_50.readFeatures(json_6BrowningStreet_50, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_6BrowningStreet_50 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_6BrowningStreet_50.addFeatures(features_6BrowningStreet_50);
var lyr_6BrowningStreet_50 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_6BrowningStreet_50, 
                style: style_6BrowningStreet_50,
                popuplayertitle: '6 - Browning Street',
                interactive: true,
                title: '<img src="styles/legend/6BrowningStreet_50.png" /> 6 - Browning Street'
            });
var format_Noname_51 = new ol.format.GeoJSON();
var features_Noname_51 = format_Noname_51.readFeatures(json_Noname_51, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Noname_51 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Noname_51.addFeatures(features_Noname_51);
var lyr_Noname_51 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Noname_51, 
                style: style_Noname_51,
                popuplayertitle: 'No name',
                interactive: true,
                title: '<img src="styles/legend/Noname_51.png" /> No name'
            });
var format_Noproposals_52 = new ol.format.GeoJSON();
var features_Noproposals_52 = format_Noproposals_52.readFeatures(json_Noproposals_52, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Noproposals_52 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Noproposals_52.addFeatures(features_Noproposals_52);
var lyr_Noproposals_52 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Noproposals_52, 
                style: style_Noproposals_52,
                popuplayertitle: 'No proposals',
                interactive: true,
                title: '<img src="styles/legend/Noproposals_52.png" /> No proposals'
            });
var format_TLRN_53 = new ol.format.GeoJSON();
var features_TLRN_53 = format_TLRN_53.readFeatures(json_TLRN_53, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TLRN_53 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TLRN_53.addFeatures(features_TLRN_53);
var lyr_TLRN_53 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TLRN_53, 
                style: style_TLRN_53,
                popuplayertitle: 'TLRN',
                interactive: true,
                title: '<img src="styles/legend/TLRN_53.png" /> TLRN'
            });
var format_SRN_54 = new ol.format.GeoJSON();
var features_SRN_54 = format_SRN_54.readFeatures(json_SRN_54, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SRN_54 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SRN_54.addFeatures(features_SRN_54);
var lyr_SRN_54 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SRN_54, 
                style: style_SRN_54,
                popuplayertitle: 'SRN',
                interactive: true,
                title: '<img src="styles/legend/SRN_54.png" /> SRN'
            });
var format_13PentonPlace_55 = new ol.format.GeoJSON();
var features_13PentonPlace_55 = format_13PentonPlace_55.readFeatures(json_13PentonPlace_55, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_13PentonPlace_55 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_13PentonPlace_55.addFeatures(features_13PentonPlace_55);
var lyr_13PentonPlace_55 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_13PentonPlace_55, 
                style: style_13PentonPlace_55,
                popuplayertitle: '13 - Penton Place',
                interactive: true,
                title: '<img src="styles/legend/13PentonPlace_55.png" /> 13 - Penton Place'
            });
var format_12PaselyPark_56 = new ol.format.GeoJSON();
var features_12PaselyPark_56 = format_12PaselyPark_56.readFeatures(json_12PaselyPark_56, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_12PaselyPark_56 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_12PaselyPark_56.addFeatures(features_12PaselyPark_56);
var lyr_12PaselyPark_56 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_12PaselyPark_56, 
                style: style_12PaselyPark_56,
                popuplayertitle: '12 Pasely Park',
                interactive: true,
                title: '<img src="styles/legend/12PaselyPark_56.png" /> 12 Pasely Park'
            });
var format_11OttoStreetFlemmingRoad_57 = new ol.format.GeoJSON();
var features_11OttoStreetFlemmingRoad_57 = format_11OttoStreetFlemmingRoad_57.readFeatures(json_11OttoStreetFlemmingRoad_57, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_11OttoStreetFlemmingRoad_57 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_11OttoStreetFlemmingRoad_57.addFeatures(features_11OttoStreetFlemmingRoad_57);
var lyr_11OttoStreetFlemmingRoad_57 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_11OttoStreetFlemmingRoad_57, 
                style: style_11OttoStreetFlemmingRoad_57,
                popuplayertitle: '11 - Otto Street Flemming Road',
                interactive: true,
                title: '<img src="styles/legend/11OttoStreetFlemmingRoad_57.png" /> 11 - Otto Street Flemming Road'
            });
var format_10cThompsonSultanCrown_58 = new ol.format.GeoJSON();
var features_10cThompsonSultanCrown_58 = format_10cThompsonSultanCrown_58.readFeatures(json_10cThompsonSultanCrown_58, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_10cThompsonSultanCrown_58 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_10cThompsonSultanCrown_58.addFeatures(features_10cThompsonSultanCrown_58);
var lyr_10cThompsonSultanCrown_58 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_10cThompsonSultanCrown_58, 
                style: style_10cThompsonSultanCrown_58,
                popuplayertitle: '10c - Thompson Sultan Crown',
                interactive: true,
                title: '<img src="styles/legend/10cThompsonSultanCrown_58.png" /> 10c - Thompson Sultan Crown'
            });
var format_10AmeliaStreet_59 = new ol.format.GeoJSON();
var features_10AmeliaStreet_59 = format_10AmeliaStreet_59.readFeatures(json_10AmeliaStreet_59, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_10AmeliaStreet_59 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_10AmeliaStreet_59.addFeatures(features_10AmeliaStreet_59);
var lyr_10AmeliaStreet_59 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_10AmeliaStreet_59, 
                style: style_10AmeliaStreet_59,
                popuplayertitle: '10 - Amelia Street',
                interactive: true,
                title: '<img src="styles/legend/10AmeliaStreet_59.png" /> 10 - Amelia Street'
            });
var format_9wManorPlace_60 = new ol.format.GeoJSON();
var features_9wManorPlace_60 = format_9wManorPlace_60.readFeatures(json_9wManorPlace_60, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_9wManorPlace_60 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_9wManorPlace_60.addFeatures(features_9wManorPlace_60);
var lyr_9wManorPlace_60 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_9wManorPlace_60, 
                style: style_9wManorPlace_60,
                popuplayertitle: '9w - Manor Place',
                interactive: true,
                title: '<img src="styles/legend/9wManorPlace_60.png" /> 9w - Manor Place'
            });
var format_9cBethwinRoad_61 = new ol.format.GeoJSON();
var features_9cBethwinRoad_61 = format_9cBethwinRoad_61.readFeatures(json_9cBethwinRoad_61, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_9cBethwinRoad_61 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_9cBethwinRoad_61.addFeatures(features_9cBethwinRoad_61);
var lyr_9cBethwinRoad_61 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_9cBethwinRoad_61, 
                style: style_9cBethwinRoad_61,
                popuplayertitle: '9c - Bethwin Road',
                interactive: true,
                title: '<img src="styles/legend/9cBethwinRoad_61.png" /> 9c - Bethwin Road'
            });
var format_9LorrimoreRoad_62 = new ol.format.GeoJSON();
var features_9LorrimoreRoad_62 = format_9LorrimoreRoad_62.readFeatures(json_9LorrimoreRoad_62, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_9LorrimoreRoad_62 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_9LorrimoreRoad_62.addFeatures(features_9LorrimoreRoad_62);
var lyr_9LorrimoreRoad_62 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_9LorrimoreRoad_62, 
                style: style_9LorrimoreRoad_62,
                popuplayertitle: '9 - Lorrimore Road',
                interactive: true,
                title: '<img src="styles/legend/9LorrimoreRoad_62.png" /> 9 - Lorrimore Road'
            });
var format_8wHamptonStreet_63 = new ol.format.GeoJSON();
var features_8wHamptonStreet_63 = format_8wHamptonStreet_63.readFeatures(json_8wHamptonStreet_63, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_8wHamptonStreet_63 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_8wHamptonStreet_63.addFeatures(features_8wHamptonStreet_63);
var lyr_8wHamptonStreet_63 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_8wHamptonStreet_63, 
                style: style_8wHamptonStreet_63,
                popuplayertitle: '8w - Hampton Street',
                interactive: true,
                title: '<img src="styles/legend/8wHamptonStreet_63.png" /> 8w - Hampton Street'
            });
var format_8cGrosvenorTerrace_64 = new ol.format.GeoJSON();
var features_8cGrosvenorTerrace_64 = format_8cGrosvenorTerrace_64.readFeatures(json_8cGrosvenorTerrace_64, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_8cGrosvenorTerrace_64 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_8cGrosvenorTerrace_64.addFeatures(features_8cGrosvenorTerrace_64);
var lyr_8cGrosvenorTerrace_64 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_8cGrosvenorTerrace_64, 
                style: style_8cGrosvenorTerrace_64,
                popuplayertitle: '8c - Grosvenor Terrace',
                interactive: true,
                title: '<img src="styles/legend/8cGrosvenorTerrace_64.png" /> 8c - Grosvenor Terrace'
            });
var format_8DeLauneStreet_65 = new ol.format.GeoJSON();
var features_8DeLauneStreet_65 = format_8DeLauneStreet_65.readFeatures(json_8DeLauneStreet_65, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_8DeLauneStreet_65 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_8DeLauneStreet_65.addFeatures(features_8DeLauneStreet_65);
var lyr_8DeLauneStreet_65 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_8DeLauneStreet_65, 
                style: style_8DeLauneStreet_65,
                popuplayertitle: '8 - De Laune Street',
                interactive: true,
                title: '<img src="styles/legend/8DeLauneStreet_65.png" /> 8 - De Laune Street'
            });
var format_7DracoStreet_66 = new ol.format.GeoJSON();
var features_7DracoStreet_66 = format_7DracoStreet_66.readFeatures(json_7DracoStreet_66, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_7DracoStreet_66 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_7DracoStreet_66.addFeatures(features_7DracoStreet_66);
var lyr_7DracoStreet_66 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_7DracoStreet_66, 
                style: style_7DracoStreet_66,
                popuplayertitle: '7 - Draco Street',
                interactive: true,
                title: '<img src="styles/legend/7DracoStreet_66.png" /> 7 - Draco Street'
            });
var format_6PenroseStreet_67 = new ol.format.GeoJSON();
var features_6PenroseStreet_67 = format_6PenroseStreet_67.readFeatures(json_6PenroseStreet_67, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_6PenroseStreet_67 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_6PenroseStreet_67.addFeatures(features_6PenroseStreet_67);
var lyr_6PenroseStreet_67 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_6PenroseStreet_67, 
                style: style_6PenroseStreet_67,
                popuplayertitle: '6 - Penrose Street',
                interactive: true,
                title: '<img src="styles/legend/6PenroseStreet_67.png" /> 6 - Penrose Street'
            });
var format_5ChapterRoad_68 = new ol.format.GeoJSON();
var features_5ChapterRoad_68 = format_5ChapterRoad_68.readFeatures(json_5ChapterRoad_68, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_5ChapterRoad_68 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_5ChapterRoad_68.addFeatures(features_5ChapterRoad_68);
var lyr_5ChapterRoad_68 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_5ChapterRoad_68, 
                style: style_5ChapterRoad_68,
                popuplayertitle: '5 - Chapter Road',
                interactive: true,
                title: '<img src="styles/legend/5ChapterRoad_68.png" /> 5 - Chapter Road'
            });
var format_4BraganzaStreet_69 = new ol.format.GeoJSON();
var features_4BraganzaStreet_69 = format_4BraganzaStreet_69.readFeatures(json_4BraganzaStreet_69, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_4BraganzaStreet_69 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_4BraganzaStreet_69.addFeatures(features_4BraganzaStreet_69);
var lyr_4BraganzaStreet_69 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_4BraganzaStreet_69, 
                style: style_4BraganzaStreet_69,
                popuplayertitle: '4 - Braganza Street',
                interactive: true,
                title: '<img src="styles/legend/4BraganzaStreet_69.png" /> 4 - Braganza Street'
            });
var format_3CooksRoad_70 = new ol.format.GeoJSON();
var features_3CooksRoad_70 = format_3CooksRoad_70.readFeatures(json_3CooksRoad_70, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_3CooksRoad_70 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_3CooksRoad_70.addFeatures(features_3CooksRoad_70);
var lyr_3CooksRoad_70 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_3CooksRoad_70, 
                style: style_3CooksRoad_70,
                popuplayertitle: '3 - Cooks Road',
                interactive: true,
                title: '<img src="styles/legend/3CooksRoad_70.png" /> 3 - Cooks Road'
            });
var format_TLRN_71 = new ol.format.GeoJSON();
var features_TLRN_71 = format_TLRN_71.readFeatures(json_TLRN_71, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TLRN_71 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TLRN_71.addFeatures(features_TLRN_71);
var lyr_TLRN_71 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TLRN_71, 
                style: style_TLRN_71,
                popuplayertitle: 'TLRN',
                interactive: true,
                title: '<img src="styles/legend/TLRN_71.png" /> TLRN'
            });
var format_Noproposals_72 = new ol.format.GeoJSON();
var features_Noproposals_72 = format_Noproposals_72.readFeatures(json_Noproposals_72, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Noproposals_72 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Noproposals_72.addFeatures(features_Noproposals_72);
var lyr_Noproposals_72 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Noproposals_72, 
                style: style_Noproposals_72,
                popuplayertitle: 'No proposals',
                interactive: true,
                title: '<img src="styles/legend/Noproposals_72.png" /> No proposals'
            });
var format_ExistingLBSScheme_73 = new ol.format.GeoJSON();
var features_ExistingLBSScheme_73 = format_ExistingLBSScheme_73.readFeatures(json_ExistingLBSScheme_73, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ExistingLBSScheme_73 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ExistingLBSScheme_73.addFeatures(features_ExistingLBSScheme_73);
var lyr_ExistingLBSScheme_73 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ExistingLBSScheme_73, 
                style: style_ExistingLBSScheme_73,
                popuplayertitle: 'Existing LBS Scheme',
                interactive: true,
                title: '<img src="styles/legend/ExistingLBSScheme_73.png" /> Existing LBS Scheme'
            });
var format_29ReverdyRoad_74 = new ol.format.GeoJSON();
var features_29ReverdyRoad_74 = format_29ReverdyRoad_74.readFeatures(json_29ReverdyRoad_74, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_29ReverdyRoad_74 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_29ReverdyRoad_74.addFeatures(features_29ReverdyRoad_74);
var lyr_29ReverdyRoad_74 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_29ReverdyRoad_74, 
                style: style_29ReverdyRoad_74,
                popuplayertitle: '29 - Reverdy Road',
                interactive: true,
                title: '<img src="styles/legend/29ReverdyRoad_74.png" /> 29 - Reverdy Road'
            });
var format_28MarlboroughGrove_75 = new ol.format.GeoJSON();
var features_28MarlboroughGrove_75 = format_28MarlboroughGrove_75.readFeatures(json_28MarlboroughGrove_75, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_28MarlboroughGrove_75 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_28MarlboroughGrove_75.addFeatures(features_28MarlboroughGrove_75);
var lyr_28MarlboroughGrove_75 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_28MarlboroughGrove_75, 
                style: style_28MarlboroughGrove_75,
                popuplayertitle: '28 - Marlborough Grove',
                interactive: true,
                title: '<img src="styles/legend/28MarlboroughGrove_75.png" /> 28 - Marlborough Grove'
            });
var format_27StubbsDrive_76 = new ol.format.GeoJSON();
var features_27StubbsDrive_76 = format_27StubbsDrive_76.readFeatures(json_27StubbsDrive_76, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_27StubbsDrive_76 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_27StubbsDrive_76.addFeatures(features_27StubbsDrive_76);
var lyr_27StubbsDrive_76 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_27StubbsDrive_76, 
                style: style_27StubbsDrive_76,
                popuplayertitle: '27 - Stubbs Drive',
                interactive: true,
                title: '<img src="styles/legend/27StubbsDrive_76.png" /> 27 - Stubbs Drive'
            });
var format_26CamillaRoad_77 = new ol.format.GeoJSON();
var features_26CamillaRoad_77 = format_26CamillaRoad_77.readFeatures(json_26CamillaRoad_77, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_26CamillaRoad_77 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_26CamillaRoad_77.addFeatures(features_26CamillaRoad_77);
var lyr_26CamillaRoad_77 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_26CamillaRoad_77, 
                style: style_26CamillaRoad_77,
                popuplayertitle: '26 - Camilla Road',
                interactive: true,
                title: '<img src="styles/legend/26CamillaRoad_77.png" /> 26 - Camilla Road'
            });
var format_20Mawbey_Coopers_78 = new ol.format.GeoJSON();
var features_20Mawbey_Coopers_78 = format_20Mawbey_Coopers_78.readFeatures(json_20Mawbey_Coopers_78, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_20Mawbey_Coopers_78 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_20Mawbey_Coopers_78.addFeatures(features_20Mawbey_Coopers_78);
var lyr_20Mawbey_Coopers_78 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_20Mawbey_Coopers_78, 
                style: style_20Mawbey_Coopers_78,
                popuplayertitle: '20 - Mawbey_Coopers',
                interactive: true,
                title: '<img src="styles/legend/20Mawbey_Coopers_78.png" /> 20 - Mawbey_Coopers'
            });
var format_20MandelaWay_79 = new ol.format.GeoJSON();
var features_20MandelaWay_79 = format_20MandelaWay_79.readFeatures(json_20MandelaWay_79, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_20MandelaWay_79 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_20MandelaWay_79.addFeatures(features_20MandelaWay_79);
var lyr_20MandelaWay_79 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_20MandelaWay_79, 
                style: style_20MandelaWay_79,
                popuplayertitle: '20 - Mandela Way',
                interactive: true,
                title: '<img src="styles/legend/20MandelaWay_79.png" /> 20 - Mandela Way'
            });
var format_19DuntonRoad_80 = new ol.format.GeoJSON();
var features_19DuntonRoad_80 = format_19DuntonRoad_80.readFeatures(json_19DuntonRoad_80, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_19DuntonRoad_80 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_19DuntonRoad_80.addFeatures(features_19DuntonRoad_80);
var lyr_19DuntonRoad_80 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_19DuntonRoad_80, 
                style: style_19DuntonRoad_80,
                popuplayertitle: '19 - Dunton Road',
                interactive: true,
                title: '<img src="styles/legend/19DuntonRoad_80.png" /> 19 - Dunton Road'
            });
var format_19CrimscottStreet_81 = new ol.format.GeoJSON();
var features_19CrimscottStreet_81 = format_19CrimscottStreet_81.readFeatures(json_19CrimscottStreet_81, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_19CrimscottStreet_81 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_19CrimscottStreet_81.addFeatures(features_19CrimscottStreet_81);
var lyr_19CrimscottStreet_81 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_19CrimscottStreet_81, 
                style: style_19CrimscottStreet_81,
                popuplayertitle: '19 - Crimscott Street',
                interactive: true,
                title: '<img src="styles/legend/19CrimscottStreet_81.png" /> 19 - Crimscott Street'
            });
var format_18RowcrossStreet_82 = new ol.format.GeoJSON();
var features_18RowcrossStreet_82 = format_18RowcrossStreet_82.readFeatures(json_18RowcrossStreet_82, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_18RowcrossStreet_82 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_18RowcrossStreet_82.addFeatures(features_18RowcrossStreet_82);
var lyr_18RowcrossStreet_82 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_18RowcrossStreet_82, 
                style: style_18RowcrossStreet_82,
                popuplayertitle: '18 - Rowcross Street',
                interactive: true,
                title: '<img src="styles/legend/18RowcrossStreet_82.png" /> 18 - Rowcross Street'
            });
var format_17Oxley_Abercorn_83 = new ol.format.GeoJSON();
var features_17Oxley_Abercorn_83 = format_17Oxley_Abercorn_83.readFeatures(json_17Oxley_Abercorn_83, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_17Oxley_Abercorn_83 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_17Oxley_Abercorn_83.addFeatures(features_17Oxley_Abercorn_83);
var lyr_17Oxley_Abercorn_83 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_17Oxley_Abercorn_83, 
                style: style_17Oxley_Abercorn_83,
                popuplayertitle: '17 - Oxley_Abercorn',
                interactive: true,
                title: '<img src="styles/legend/17Oxley_Abercorn_83.png" /> 17 - Oxley_Abercorn'
            });
var format_18PagesWalk_84 = new ol.format.GeoJSON();
var features_18PagesWalk_84 = format_18PagesWalk_84.readFeatures(json_18PagesWalk_84, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_18PagesWalk_84 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_18PagesWalk_84.addFeatures(features_18PagesWalk_84);
var lyr_18PagesWalk_84 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_18PagesWalk_84, 
                style: style_18PagesWalk_84,
                popuplayertitle: '18 - Pages Walk',
                interactive: true,
                title: '<img src="styles/legend/18PagesWalk_84.png" /> 18 - Pages Walk'
            });
var format_16CatlinStreet_85 = new ol.format.GeoJSON();
var features_16CatlinStreet_85 = format_16CatlinStreet_85.readFeatures(json_16CatlinStreet_85, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_16CatlinStreet_85 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_16CatlinStreet_85.addFeatures(features_16CatlinStreet_85);
var lyr_16CatlinStreet_85 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_16CatlinStreet_85, 
                style: style_16CatlinStreet_85,
                popuplayertitle: '16 - Catlin Street',
                interactive: true,
                title: '<img src="styles/legend/16CatlinStreet_85.png" /> 16 - Catlin Street'
            });
var format_15GalleywayRoad_86 = new ol.format.GeoJSON();
var features_15GalleywayRoad_86 = format_15GalleywayRoad_86.readFeatures(json_15GalleywayRoad_86, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_15GalleywayRoad_86 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_15GalleywayRoad_86.addFeatures(features_15GalleywayRoad_86);
var lyr_15GalleywayRoad_86 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_15GalleywayRoad_86, 
                style: style_15GalleywayRoad_86,
                popuplayertitle: '15 - Galleyway Road',
                interactive: true,
                title: '<img src="styles/legend/15GalleywayRoad_86.png" /> 15 - Galleyway Road'
            });
var format_17WebbStreet_87 = new ol.format.GeoJSON();
var features_17WebbStreet_87 = format_17WebbStreet_87.readFeatures(json_17WebbStreet_87, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_17WebbStreet_87 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_17WebbStreet_87.addFeatures(features_17WebbStreet_87);
var lyr_17WebbStreet_87 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_17WebbStreet_87, 
                style: style_17WebbStreet_87,
                popuplayertitle: '17 - Webb Street',
                interactive: true,
                title: '<img src="styles/legend/17WebbStreet_87.png" /> 17 - Webb Street'
            });
var format_13Alscot_88 = new ol.format.GeoJSON();
var features_13Alscot_88 = format_13Alscot_88.readFeatures(json_13Alscot_88, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_13Alscot_88 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_13Alscot_88.addFeatures(features_13Alscot_88);
var lyr_13Alscot_88 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_13Alscot_88, 
                style: style_13Alscot_88,
                popuplayertitle: '13 - Alscot',
                interactive: true,
                title: '<img src="styles/legend/13Alscot_88.png" /> 13 - Alscot'
            });
var format_12LyntonRoad_89 = new ol.format.GeoJSON();
var features_12LyntonRoad_89 = format_12LyntonRoad_89.readFeatures(json_12LyntonRoad_89, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_12LyntonRoad_89 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_12LyntonRoad_89.addFeatures(features_12LyntonRoad_89);
var lyr_12LyntonRoad_89 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_12LyntonRoad_89, 
                style: style_12LyntonRoad_89,
                popuplayertitle: '12 - Lynton Road',
                interactive: true,
                title: '<img src="styles/legend/12LyntonRoad_89.png" /> 12 - Lynton Road'
            });
var format_9Willlow_Tanner_90 = new ol.format.GeoJSON();
var features_9Willlow_Tanner_90 = format_9Willlow_Tanner_90.readFeatures(json_9Willlow_Tanner_90, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_9Willlow_Tanner_90 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_9Willlow_Tanner_90.addFeatures(features_9Willlow_Tanner_90);
var lyr_9Willlow_Tanner_90 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_9Willlow_Tanner_90, 
                style: style_9Willlow_Tanner_90,
                popuplayertitle: '9 - Willlow_Tanner',
                interactive: true,
                title: '<img src="styles/legend/9Willlow_Tanner_90.png" /> 9 - Willlow_Tanner'
            });
var format_7StevensonCrescent_91 = new ol.format.GeoJSON();
var features_7StevensonCrescent_91 = format_7StevensonCrescent_91.readFeatures(json_7StevensonCrescent_91, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_7StevensonCrescent_91 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_7StevensonCrescent_91.addFeatures(features_7StevensonCrescent_91);
var lyr_7StevensonCrescent_91 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_7StevensonCrescent_91, 
                style: style_7StevensonCrescent_91,
                popuplayertitle: '7 - Stevenson Crescent',
                interactive: true,
                title: '<img src="styles/legend/7StevensonCrescent_91.png" /> 7 - Stevenson Crescent'
            });
var format_6RollsRoad_92 = new ol.format.GeoJSON();
var features_6RollsRoad_92 = format_6RollsRoad_92.readFeatures(json_6RollsRoad_92, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_6RollsRoad_92 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_6RollsRoad_92.addFeatures(features_6RollsRoad_92);
var lyr_6RollsRoad_92 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_6RollsRoad_92, 
                style: style_6RollsRoad_92,
                popuplayertitle: '6 - Rolls Road',
                interactive: true,
                title: '<img src="styles/legend/6RollsRoad_92.png" /> 6 - Rolls Road'
            });
var format_5SouthwarkPark_93 = new ol.format.GeoJSON();
var features_5SouthwarkPark_93 = format_5SouthwarkPark_93.readFeatures(json_5SouthwarkPark_93, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_5SouthwarkPark_93 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_5SouthwarkPark_93.addFeatures(features_5SouthwarkPark_93);
var lyr_5SouthwarkPark_93 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_5SouthwarkPark_93, 
                style: style_5SouthwarkPark_93,
                popuplayertitle: '5 - Southwark Park',
                interactive: true,
                title: '<img src="styles/legend/5SouthwarkPark_93.png" /> 5 - Southwark Park'
            });
var format_4GrangeRoad_94 = new ol.format.GeoJSON();
var features_4GrangeRoad_94 = format_4GrangeRoad_94.readFeatures(json_4GrangeRoad_94, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_4GrangeRoad_94 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_4GrangeRoad_94.addFeatures(features_4GrangeRoad_94);
var lyr_4GrangeRoad_94 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_4GrangeRoad_94, 
                style: style_4GrangeRoad_94,
                popuplayertitle: '4 - Grange Road',
                interactive: true,
                title: '<img src="styles/legend/4GrangeRoad_94.png" /> 4 - Grange Road'
            });
var format_2StJamessRoad_95 = new ol.format.GeoJSON();
var features_2StJamessRoad_95 = format_2StJamessRoad_95.readFeatures(json_2StJamessRoad_95, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2StJamessRoad_95 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2StJamessRoad_95.addFeatures(features_2StJamessRoad_95);
var lyr_2StJamessRoad_95 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2StJamessRoad_95, 
                style: style_2StJamessRoad_95,
                popuplayertitle: '2 - St James\'s Road',
                interactive: true,
                title: '<img src="styles/legend/2StJamessRoad_95.png" /> 2 - St James\'s Road'
            });
var format_Noproposals_96 = new ol.format.GeoJSON();
var features_Noproposals_96 = format_Noproposals_96.readFeatures(json_Noproposals_96, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Noproposals_96 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Noproposals_96.addFeatures(features_Noproposals_96);
var lyr_Noproposals_96 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Noproposals_96, 
                style: style_Noproposals_96,
                popuplayertitle: 'No proposals',
                interactive: true,
                title: '<img src="styles/legend/Noproposals_96.png" /> No proposals'
            });
var format_ExistingLBSScheme_97 = new ol.format.GeoJSON();
var features_ExistingLBSScheme_97 = format_ExistingLBSScheme_97.readFeatures(json_ExistingLBSScheme_97, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ExistingLBSScheme_97 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ExistingLBSScheme_97.addFeatures(features_ExistingLBSScheme_97);
var lyr_ExistingLBSScheme_97 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ExistingLBSScheme_97, 
                style: style_ExistingLBSScheme_97,
                popuplayertitle: 'Existing LBS Scheme',
                interactive: true,
                title: '<img src="styles/legend/ExistingLBSScheme_97.png" /> Existing LBS Scheme'
            });
var format_16TimberPondRoad_98 = new ol.format.GeoJSON();
var features_16TimberPondRoad_98 = format_16TimberPondRoad_98.readFeatures(json_16TimberPondRoad_98, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_16TimberPondRoad_98 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_16TimberPondRoad_98.addFeatures(features_16TimberPondRoad_98);
var lyr_16TimberPondRoad_98 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_16TimberPondRoad_98, 
                style: style_16TimberPondRoad_98,
                popuplayertitle: '16 - Timber Pond Road',
                interactive: true,
                title: '<img src="styles/legend/16TimberPondRoad_98.png" /> 16 - Timber Pond Road'
            });
var format_11PloughWay_99 = new ol.format.GeoJSON();
var features_11PloughWay_99 = format_11PloughWay_99.readFeatures(json_11PloughWay_99, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_11PloughWay_99 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_11PloughWay_99.addFeatures(features_11PloughWay_99);
var lyr_11PloughWay_99 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_11PloughWay_99, 
                style: style_11PloughWay_99,
                popuplayertitle: '11 - Plough Way',
                interactive: true,
                title: '<img src="styles/legend/11PloughWay_99.png" /> 11 - Plough Way'
            });
var format_10RobertsClose_100 = new ol.format.GeoJSON();
var features_10RobertsClose_100 = format_10RobertsClose_100.readFeatures(json_10RobertsClose_100, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_10RobertsClose_100 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_10RobertsClose_100.addFeatures(features_10RobertsClose_100);
var lyr_10RobertsClose_100 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_10RobertsClose_100, 
                style: style_10RobertsClose_100,
                popuplayertitle: '10 - Roberts Close',
                interactive: true,
                title: '<img src="styles/legend/10RobertsClose_100.png" /> 10 - Roberts Close'
            });
var format_6CanadaStreet_101 = new ol.format.GeoJSON();
var features_6CanadaStreet_101 = format_6CanadaStreet_101.readFeatures(json_6CanadaStreet_101, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_6CanadaStreet_101 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_6CanadaStreet_101.addFeatures(features_6CanadaStreet_101);
var lyr_6CanadaStreet_101 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_6CanadaStreet_101, 
                style: style_6CanadaStreet_101,
                popuplayertitle: '6 - Canada Street',
                interactive: true,
                title: '<img src="styles/legend/6CanadaStreet_101.png" /> 6 - Canada Street'
            });
var format_9SurreyQuaysRoad_102 = new ol.format.GeoJSON();
var features_9SurreyQuaysRoad_102 = format_9SurreyQuaysRoad_102.readFeatures(json_9SurreyQuaysRoad_102, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_9SurreyQuaysRoad_102 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_9SurreyQuaysRoad_102.addFeatures(features_9SurreyQuaysRoad_102);
var lyr_9SurreyQuaysRoad_102 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_9SurreyQuaysRoad_102, 
                style: style_9SurreyQuaysRoad_102,
                popuplayertitle: '9 - Surrey Quays Road',
                interactive: true,
                title: '<img src="styles/legend/9SurreyQuaysRoad_102.png" /> 9 - Surrey Quays Road'
            });
var format_8SouthSeaRoad_103 = new ol.format.GeoJSON();
var features_8SouthSeaRoad_103 = format_8SouthSeaRoad_103.readFeatures(json_8SouthSeaRoad_103, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_8SouthSeaRoad_103 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_8SouthSeaRoad_103.addFeatures(features_8SouthSeaRoad_103);
var lyr_8SouthSeaRoad_103 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_8SouthSeaRoad_103, 
                style: style_8SouthSeaRoad_103,
                popuplayertitle: '8 - South Sea Road',
                interactive: true,
                title: '<img src="styles/legend/8SouthSeaRoad_103.png" /> 8 - South Sea Road'
            });
var format_7RedriffRoad_104 = new ol.format.GeoJSON();
var features_7RedriffRoad_104 = format_7RedriffRoad_104.readFeatures(json_7RedriffRoad_104, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_7RedriffRoad_104 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_7RedriffRoad_104.addFeatures(features_7RedriffRoad_104);
var lyr_7RedriffRoad_104 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_7RedriffRoad_104, 
                style: style_7RedriffRoad_104,
                popuplayertitle: '7 - Redriff Road',
                interactive: true,
                title: '<img src="styles/legend/7RedriffRoad_104.png" /> 7 - Redriff Road'
            });
var format_5QuebecWay_105 = new ol.format.GeoJSON();
var features_5QuebecWay_105 = format_5QuebecWay_105.readFeatures(json_5QuebecWay_105, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_5QuebecWay_105 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_5QuebecWay_105.addFeatures(features_5QuebecWay_105);
var lyr_5QuebecWay_105 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_5QuebecWay_105, 
                style: style_5QuebecWay_105,
                popuplayertitle: '5 - Quebec Way',
                interactive: true,
                title: '<img src="styles/legend/5QuebecWay_105.png" /> 5 - Quebec Way'
            });
var format_4SalterRoadSouth_106 = new ol.format.GeoJSON();
var features_4SalterRoadSouth_106 = format_4SalterRoadSouth_106.readFeatures(json_4SalterRoadSouth_106, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_4SalterRoadSouth_106 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_4SalterRoadSouth_106.addFeatures(features_4SalterRoadSouth_106);
var lyr_4SalterRoadSouth_106 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_4SalterRoadSouth_106, 
                style: style_4SalterRoadSouth_106,
                popuplayertitle: '4 - Salter Road (South)',
                interactive: true,
                title: '<img src="styles/legend/4SalterRoadSouth_106.png" /> 4 - Salter Road (South)'
            });
var format_3SwanRoad_107 = new ol.format.GeoJSON();
var features_3SwanRoad_107 = format_3SwanRoad_107.readFeatures(json_3SwanRoad_107, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_3SwanRoad_107 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_3SwanRoad_107.addFeatures(features_3SwanRoad_107);
var lyr_3SwanRoad_107 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_3SwanRoad_107, 
                style: style_3SwanRoad_107,
                popuplayertitle: '3 - Swan Road',
                interactive: true,
                title: '<img src="styles/legend/3SwanRoad_107.png" /> 3 - Swan Road'
            });
var format_3SalterRoadNorth_108 = new ol.format.GeoJSON();
var features_3SalterRoadNorth_108 = format_3SalterRoadNorth_108.readFeatures(json_3SalterRoadNorth_108, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_3SalterRoadNorth_108 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_3SalterRoadNorth_108.addFeatures(features_3SalterRoadNorth_108);
var lyr_3SalterRoadNorth_108 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_3SalterRoadNorth_108, 
                style: style_3SalterRoadNorth_108,
                popuplayertitle: '3 - Salter Road (North)',
                interactive: true,
                title: '<img src="styles/legend/3SalterRoadNorth_108.png" /> 3 - Salter Road (North)'
            });
var format_2BrunelRoad_109 = new ol.format.GeoJSON();
var features_2BrunelRoad_109 = format_2BrunelRoad_109.readFeatures(json_2BrunelRoad_109, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2BrunelRoad_109 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2BrunelRoad_109.addFeatures(features_2BrunelRoad_109);
var lyr_2BrunelRoad_109 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2BrunelRoad_109, 
                style: style_2BrunelRoad_109,
                popuplayertitle: '2 - Brunel Road',
                interactive: true,
                title: '<img src="styles/legend/2BrunelRoad_109.png" /> 2 - Brunel Road'
            });
var format_2RotherhitheStreet_110 = new ol.format.GeoJSON();
var features_2RotherhitheStreet_110 = format_2RotherhitheStreet_110.readFeatures(json_2RotherhitheStreet_110, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2RotherhitheStreet_110 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2RotherhitheStreet_110.addFeatures(features_2RotherhitheStreet_110);
var lyr_2RotherhitheStreet_110 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2RotherhitheStreet_110, 
                style: style_2RotherhitheStreet_110,
                popuplayertitle: '2 - Rotherhithe Street',
                interactive: true,
                title: '<img src="styles/legend/2RotherhitheStreet_110.png" /> 2 - Rotherhithe Street'
            });
var format_1BeatsonWalk_111 = new ol.format.GeoJSON();
var features_1BeatsonWalk_111 = format_1BeatsonWalk_111.readFeatures(json_1BeatsonWalk_111, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1BeatsonWalk_111 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1BeatsonWalk_111.addFeatures(features_1BeatsonWalk_111);
var lyr_1BeatsonWalk_111 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1BeatsonWalk_111, 
                style: style_1BeatsonWalk_111,
                popuplayertitle: '1 - Beatson Walk',
                interactive: true,
                title: '<img src="styles/legend/1BeatsonWalk_111.png" /> 1 - Beatson Walk'
            });
var format_Noname_112 = new ol.format.GeoJSON();
var features_Noname_112 = format_Noname_112.readFeatures(json_Noname_112, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Noname_112 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Noname_112.addFeatures(features_Noname_112);
var lyr_Noname_112 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Noname_112, 
                style: style_Noname_112,
                popuplayertitle: 'No name',
                interactive: true,
                title: '<img src="styles/legend/Noname_112.png" /> No name'
            });
var format_15TheGrange_113 = new ol.format.GeoJSON();
var features_15TheGrange_113 = format_15TheGrange_113.readFeatures(json_15TheGrange_113, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_15TheGrange_113 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_15TheGrange_113.addFeatures(features_15TheGrange_113);
var lyr_15TheGrange_113 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_15TheGrange_113, 
                style: style_15TheGrange_113,
                popuplayertitle: '15 - The Grange',
                interactive: true,
                title: '<img src="styles/legend/15TheGrange_113.png" /> 15 - The Grange'
            });
var format_15CarriageDrive_114 = new ol.format.GeoJSON();
var features_15CarriageDrive_114 = format_15CarriageDrive_114.readFeatures(json_15CarriageDrive_114, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_15CarriageDrive_114 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_15CarriageDrive_114.addFeatures(features_15CarriageDrive_114);
var lyr_15CarriageDrive_114 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_15CarriageDrive_114, 
                style: style_15CarriageDrive_114,
                popuplayertitle: '15 - Carriage Drive',
                interactive: true,
                title: '<img src="styles/legend/15CarriageDrive_114.png" /> 15 - Carriage Drive'
            });
var format_14RouelRoad_115 = new ol.format.GeoJSON();
var features_14RouelRoad_115 = format_14RouelRoad_115.readFeatures(json_14RouelRoad_115, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_14RouelRoad_115 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_14RouelRoad_115.addFeatures(features_14RouelRoad_115);
var lyr_14RouelRoad_115 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_14RouelRoad_115, 
                style: style_14RouelRoad_115,
                popuplayertitle: '14 - Rouel Road',
                interactive: true,
                title: '<img src="styles/legend/14RouelRoad_115.png" /> 14 - Rouel Road'
            });
var format_13AlscottRoad_116 = new ol.format.GeoJSON();
var features_13AlscottRoad_116 = format_13AlscottRoad_116.readFeatures(json_13AlscottRoad_116, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_13AlscottRoad_116 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_13AlscottRoad_116.addFeatures(features_13AlscottRoad_116);
var lyr_13AlscottRoad_116 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_13AlscottRoad_116, 
                style: style_13AlscottRoad_116,
                popuplayertitle: '13 - Alscott Road',
                interactive: true,
                title: '<img src="styles/legend/13AlscottRoad_116.png" /> 13 - Alscott Road'
            });
var format_13DruidStreet_117 = new ol.format.GeoJSON();
var features_13DruidStreet_117 = format_13DruidStreet_117.readFeatures(json_13DruidStreet_117, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_13DruidStreet_117 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_13DruidStreet_117.addFeatures(features_13DruidStreet_117);
var lyr_13DruidStreet_117 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_13DruidStreet_117, 
                style: style_13DruidStreet_117,
                popuplayertitle: '13 - Druid Street',
                interactive: true,
                title: '<img src="styles/legend/13DruidStreet_117.png" /> 13 - Druid Street'
            });
var format_12RileyRoad_118 = new ol.format.GeoJSON();
var features_12RileyRoad_118 = format_12RileyRoad_118.readFeatures(json_12RileyRoad_118, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_12RileyRoad_118 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_12RileyRoad_118.addFeatures(features_12RileyRoad_118);
var lyr_12RileyRoad_118 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_12RileyRoad_118, 
                style: style_12RileyRoad_118,
                popuplayertitle: '12 - Riley Road',
                interactive: true,
                title: '<img src="styles/legend/12RileyRoad_118.png" /> 12 - Riley Road'
            });
var format_10AbbeyStreet_119 = new ol.format.GeoJSON();
var features_10AbbeyStreet_119 = format_10AbbeyStreet_119.readFeatures(json_10AbbeyStreet_119, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_10AbbeyStreet_119 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_10AbbeyStreet_119.addFeatures(features_10AbbeyStreet_119);
var lyr_10AbbeyStreet_119 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_10AbbeyStreet_119, 
                style: style_10AbbeyStreet_119,
                popuplayertitle: '10 - Abbey Street',
                interactive: true,
                title: '<img src="styles/legend/10AbbeyStreet_119.png" /> 10 - Abbey Street'
            });
var format_10TannerStreet_120 = new ol.format.GeoJSON();
var features_10TannerStreet_120 = format_10TannerStreet_120.readFeatures(json_10TannerStreet_120, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_10TannerStreet_120 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_10TannerStreet_120.addFeatures(features_10TannerStreet_120);
var lyr_10TannerStreet_120 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_10TannerStreet_120, 
                style: style_10TannerStreet_120,
                popuplayertitle: '10 - Tanner Street',
                interactive: true,
                title: '<img src="styles/legend/10TannerStreet_120.png" /> 10 - Tanner Street'
            });
var format_9OldJamaicaRoad_121 = new ol.format.GeoJSON();
var features_9OldJamaicaRoad_121 = format_9OldJamaicaRoad_121.readFeatures(json_9OldJamaicaRoad_121, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_9OldJamaicaRoad_121 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_9OldJamaicaRoad_121.addFeatures(features_9OldJamaicaRoad_121);
var lyr_9OldJamaicaRoad_121 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_9OldJamaicaRoad_121, 
                style: style_9OldJamaicaRoad_121,
                popuplayertitle: '9 - Old Jamaica Road',
                interactive: true,
                title: '<img src="styles/legend/9OldJamaicaRoad_121.png" /> 9 - Old Jamaica Road'
            });
var format_8EnidStreet_122 = new ol.format.GeoJSON();
var features_8EnidStreet_122 = format_8EnidStreet_122.readFeatures(json_8EnidStreet_122, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_8EnidStreet_122 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_8EnidStreet_122.addFeatures(features_8EnidStreet_122);
var lyr_8EnidStreet_122 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_8EnidStreet_122, 
                style: style_8EnidStreet_122,
                popuplayertitle: '8 - Enid Street',
                interactive: true,
                title: '<img src="styles/legend/8EnidStreet_122.png" /> 8 - Enid Street'
            });
var format_8ThurlandRoad_123 = new ol.format.GeoJSON();
var features_8ThurlandRoad_123 = format_8ThurlandRoad_123.readFeatures(json_8ThurlandRoad_123, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_8ThurlandRoad_123 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_8ThurlandRoad_123.addFeatures(features_8ThurlandRoad_123);
var lyr_8ThurlandRoad_123 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_8ThurlandRoad_123, 
                style: style_8ThurlandRoad_123,
                popuplayertitle: '8 - Thurland Road',
                interactive: true,
                title: '<img src="styles/legend/8ThurlandRoad_123.png" /> 8 - Thurland Road'
            });
var format_7StJamessRoad_124 = new ol.format.GeoJSON();
var features_7StJamessRoad_124 = format_7StJamessRoad_124.readFeatures(json_7StJamessRoad_124, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_7StJamessRoad_124 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_7StJamessRoad_124.addFeatures(features_7StJamessRoad_124);
var lyr_7StJamessRoad_124 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_7StJamessRoad_124, 
                style: style_7StJamessRoad_124,
                popuplayertitle: '7 - St James\'s Road',
                interactive: true,
                title: '<img src="styles/legend/7StJamessRoad_124.png" /> 7 - St James\'s Road'
            });
var format_6TrantonRoad_125 = new ol.format.GeoJSON();
var features_6TrantonRoad_125 = format_6TrantonRoad_125.readFeatures(json_6TrantonRoad_125, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_6TrantonRoad_125 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_6TrantonRoad_125.addFeatures(features_6TrantonRoad_125);
var lyr_6TrantonRoad_125 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_6TrantonRoad_125, 
                style: style_6TrantonRoad_125,
                popuplayertitle: '6 - Tranton Road',
                interactive: true,
                title: '<img src="styles/legend/6TrantonRoad_125.png" /> 6 - Tranton Road'
            });
var format_5ClementsRoad_126 = new ol.format.GeoJSON();
var features_5ClementsRoad_126 = format_5ClementsRoad_126.readFeatures(json_5ClementsRoad_126, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_5ClementsRoad_126 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_5ClementsRoad_126.addFeatures(features_5ClementsRoad_126);
var lyr_5ClementsRoad_126 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_5ClementsRoad_126, 
                style: style_5ClementsRoad_126,
                popuplayertitle: '5 - Clements Road',
                interactive: true,
                title: '<img src="styles/legend/5ClementsRoad_126.png" /> 5 - Clements Road'
            });
var format_4DrummondRoad_127 = new ol.format.GeoJSON();
var features_4DrummondRoad_127 = format_4DrummondRoad_127.readFeatures(json_4DrummondRoad_127, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_4DrummondRoad_127 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_4DrummondRoad_127.addFeatures(features_4DrummondRoad_127);
var lyr_4DrummondRoad_127 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_4DrummondRoad_127, 
                style: style_4DrummondRoad_127,
                popuplayertitle: '4 - Drummond Road',
                interactive: true,
                title: '<img src="styles/legend/4DrummondRoad_127.png" /> 4 - Drummond Road'
            });
var format_3SouthwarkParkRoad_128 = new ol.format.GeoJSON();
var features_3SouthwarkParkRoad_128 = format_3SouthwarkParkRoad_128.readFeatures(json_3SouthwarkParkRoad_128, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_3SouthwarkParkRoad_128 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_3SouthwarkParkRoad_128.addFeatures(features_3SouthwarkParkRoad_128);
var lyr_3SouthwarkParkRoad_128 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_3SouthwarkParkRoad_128, 
                style: style_3SouthwarkParkRoad_128,
                popuplayertitle: '3 - Southwark Park Road',
                interactive: true,
                title: '<img src="styles/legend/3SouthwarkParkRoad_128.png" /> 3 - Southwark Park Road'
            });
var format_2RaymouthRoad_129 = new ol.format.GeoJSON();
var features_2RaymouthRoad_129 = format_2RaymouthRoad_129.readFeatures(json_2RaymouthRoad_129, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2RaymouthRoad_129 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2RaymouthRoad_129.addFeatures(features_2RaymouthRoad_129);
var lyr_2RaymouthRoad_129 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2RaymouthRoad_129, 
                style: style_2RaymouthRoad_129,
                popuplayertitle: '2 - Raymouth Road',
                interactive: true,
                title: '<img src="styles/legend/2RaymouthRoad_129.png" /> 2 - Raymouth Road'
            });
var format_1AbbeyfieldRoad_130 = new ol.format.GeoJSON();
var features_1AbbeyfieldRoad_130 = format_1AbbeyfieldRoad_130.readFeatures(json_1AbbeyfieldRoad_130, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1AbbeyfieldRoad_130 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1AbbeyfieldRoad_130.addFeatures(features_1AbbeyfieldRoad_130);
var lyr_1AbbeyfieldRoad_130 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1AbbeyfieldRoad_130, 
                style: style_1AbbeyfieldRoad_130,
                popuplayertitle: '1 - Abbeyfield Road',
                interactive: true,
                title: '<img src="styles/legend/1AbbeyfieldRoad_130.png" /> 1 - Abbeyfield Road'
            });
var format_name_131 = new ol.format.GeoJSON();
var features_name_131 = format_name_131.readFeatures(json_name_131, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_name_131 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_name_131.addFeatures(features_name_131);
var lyr_name_131 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_name_131, 
                style: style_name_131,
                popuplayertitle: '(name)',
                interactive: true,
                title: '<img src="styles/legend/name_131.png" /> (name)'
            });
var format_Strategicnetwork_132 = new ol.format.GeoJSON();
var features_Strategicnetwork_132 = format_Strategicnetwork_132.readFeatures(json_Strategicnetwork_132, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Strategicnetwork_132 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Strategicnetwork_132.addFeatures(features_Strategicnetwork_132);
var lyr_Strategicnetwork_132 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Strategicnetwork_132, 
                style: style_Strategicnetwork_132,
                popuplayertitle: 'Strategic network',
                interactive: true,
                title: '<img src="styles/legend/Strategicnetwork_132.png" /> Strategic network'
            });
var format_19ShadThames_133 = new ol.format.GeoJSON();
var features_19ShadThames_133 = format_19ShadThames_133.readFeatures(json_19ShadThames_133, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_19ShadThames_133 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_19ShadThames_133.addFeatures(features_19ShadThames_133);
var lyr_19ShadThames_133 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_19ShadThames_133, 
                style: style_19ShadThames_133,
                popuplayertitle: '19 - Shad Thames',
                interactive: true,
                title: '<img src="styles/legend/19ShadThames_133.png" /> 19 - Shad Thames'
            });
var format_18MillSt_134 = new ol.format.GeoJSON();
var features_18MillSt_134 = format_18MillSt_134.readFeatures(json_18MillSt_134, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_18MillSt_134 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_18MillSt_134.addFeatures(features_18MillSt_134);
var lyr_18MillSt_134 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_18MillSt_134, 
                style: style_18MillSt_134,
                popuplayertitle: '18 - Mill St',
                interactive: true,
                title: '<img src="styles/legend/18MillSt_134.png" /> 18 - Mill St'
            });
var format_17Dockhead_135 = new ol.format.GeoJSON();
var features_17Dockhead_135 = format_17Dockhead_135.readFeatures(json_17Dockhead_135, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_17Dockhead_135 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_17Dockhead_135.addFeatures(features_17Dockhead_135);
var lyr_17Dockhead_135 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_17Dockhead_135, 
                style: style_17Dockhead_135,
                popuplayertitle: '17 - Dockhead',
                interactive: true,
                title: '<img src="styles/legend/17Dockhead_135.png" /> 17 - Dockhead'
            });
var format_16GeorgeRow_136 = new ol.format.GeoJSON();
var features_16GeorgeRow_136 = format_16GeorgeRow_136.readFeatures(json_16GeorgeRow_136, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_16GeorgeRow_136 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_16GeorgeRow_136.addFeatures(features_16GeorgeRow_136);
var lyr_16GeorgeRow_136 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_16GeorgeRow_136, 
                style: style_16GeorgeRow_136,
                popuplayertitle: '16 - George Row',
                interactive: true,
                title: '<img src="styles/legend/16GeorgeRow_136.png" /> 16 - George Row'
            });
var format_15ChambersSt_137 = new ol.format.GeoJSON();
var features_15ChambersSt_137 = format_15ChambersSt_137.readFeatures(json_15ChambersSt_137, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_15ChambersSt_137 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_15ChambersSt_137.addFeatures(features_15ChambersSt_137);
var lyr_15ChambersSt_137 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_15ChambersSt_137, 
                style: style_15ChambersSt_137,
                popuplayertitle: '15 - Chambers St',
                interactive: true,
                title: '<img src="styles/legend/15ChambersSt_137.png" /> 15 - Chambers St'
            });
var format_14LlewellynSt_138 = new ol.format.GeoJSON();
var features_14LlewellynSt_138 = format_14LlewellynSt_138.readFeatures(json_14LlewellynSt_138, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_14LlewellynSt_138 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_14LlewellynSt_138.addFeatures(features_14LlewellynSt_138);
var lyr_14LlewellynSt_138 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_14LlewellynSt_138, 
                style: style_14LlewellynSt_138,
                popuplayertitle: '14 - Llewellyn St',
                interactive: true,
                title: '<img src="styles/legend/14LlewellynSt_138.png" /> 14 - Llewellyn St'
            });
var format_13BevingtonSt_139 = new ol.format.GeoJSON();
var features_13BevingtonSt_139 = format_13BevingtonSt_139.readFeatures(json_13BevingtonSt_139, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_13BevingtonSt_139 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_13BevingtonSt_139.addFeatures(features_13BevingtonSt_139);
var lyr_13BevingtonSt_139 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_13BevingtonSt_139, 
                style: style_13BevingtonSt_139,
                popuplayertitle: '13 Bevington St',
                interactive: true,
                title: '<img src="styles/legend/13BevingtonSt_139.png" /> 13 Bevington St'
            });
var format_12MarigoldSt_140 = new ol.format.GeoJSON();
var features_12MarigoldSt_140 = format_12MarigoldSt_140.readFeatures(json_12MarigoldSt_140, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_12MarigoldSt_140 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_12MarigoldSt_140.addFeatures(features_12MarigoldSt_140);
var lyr_12MarigoldSt_140 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_12MarigoldSt_140, 
                style: style_12MarigoldSt_140,
                popuplayertitle: '12 - Marigold St',
                interactive: true,
                title: '<img src="styles/legend/12MarigoldSt_140.png" /> 12 - Marigold St'
            });
var format_6Rotherhithe_141 = new ol.format.GeoJSON();
var features_6Rotherhithe_141 = format_6Rotherhithe_141.readFeatures(json_6Rotherhithe_141, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_6Rotherhithe_141 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_6Rotherhithe_141.addFeatures(features_6Rotherhithe_141);
var lyr_6Rotherhithe_141 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_6Rotherhithe_141, 
                style: style_6Rotherhithe_141,
                popuplayertitle: '6 - Rotherhithe',
                interactive: true,
                title: '<img src="styles/legend/6Rotherhithe_141.png" /> 6 - Rotherhithe'
            });
var format_5TunnelRd_142 = new ol.format.GeoJSON();
var features_5TunnelRd_142 = format_5TunnelRd_142.readFeatures(json_5TunnelRd_142, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_5TunnelRd_142 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_5TunnelRd_142.addFeatures(features_5TunnelRd_142);
var lyr_5TunnelRd_142 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_5TunnelRd_142, 
                style: style_5TunnelRd_142,
                popuplayertitle: '5 - Tunnel Rd',
                interactive: true,
                title: '<img src="styles/legend/5TunnelRd_142.png" /> 5 - Tunnel Rd'
            });
var format_4SaintMarychurdRd_143 = new ol.format.GeoJSON();
var features_4SaintMarychurdRd_143 = format_4SaintMarychurdRd_143.readFeatures(json_4SaintMarychurdRd_143, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_4SaintMarychurdRd_143 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_4SaintMarychurdRd_143.addFeatures(features_4SaintMarychurdRd_143);
var lyr_4SaintMarychurdRd_143 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_4SaintMarychurdRd_143, 
                style: style_4SaintMarychurdRd_143,
                popuplayertitle: '4 - Saint Marychurd Rd',
                interactive: true,
                title: '<img src="styles/legend/4SaintMarychurdRd_143.png" /> 4 - Saint Marychurd Rd'
            });
var format_3SwanRd_144 = new ol.format.GeoJSON();
var features_3SwanRd_144 = format_3SwanRd_144.readFeatures(json_3SwanRd_144, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_3SwanRd_144 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_3SwanRd_144.addFeatures(features_3SwanRd_144);
var lyr_3SwanRd_144 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_3SwanRd_144, 
                style: style_3SwanRd_144,
                popuplayertitle: '3 - Swan Rd',
                interactive: true,
                title: '<img src="styles/legend/3SwanRd_144.png" /> 3 - Swan Rd'
            });
var format_Strategicnetwork_145 = new ol.format.GeoJSON();
var features_Strategicnetwork_145 = format_Strategicnetwork_145.readFeatures(json_Strategicnetwork_145, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Strategicnetwork_145 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Strategicnetwork_145.addFeatures(features_Strategicnetwork_145);
var lyr_Strategicnetwork_145 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Strategicnetwork_145, 
                style: style_Strategicnetwork_145,
                popuplayertitle: 'Strategic network',
                interactive: true,
                title: '<img src="styles/legend/Strategicnetwork_145.png" /> Strategic network'
            });
var format_14LongLane_146 = new ol.format.GeoJSON();
var features_14LongLane_146 = format_14LongLane_146.readFeatures(json_14LongLane_146, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_14LongLane_146 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_14LongLane_146.addFeatures(features_14LongLane_146);
var lyr_14LongLane_146 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_14LongLane_146, 
                style: style_14LongLane_146,
                popuplayertitle: '14 - Long Lane',
                interactive: true,
                title: '<img src="styles/legend/14LongLane_146.png" /> 14 - Long Lane'
            });
var format_12PilgrimageSt_147 = new ol.format.GeoJSON();
var features_12PilgrimageSt_147 = format_12PilgrimageSt_147.readFeatures(json_12PilgrimageSt_147, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_12PilgrimageSt_147 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_12PilgrimageSt_147.addFeatures(features_12PilgrimageSt_147);
var lyr_12PilgrimageSt_147 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_12PilgrimageSt_147, 
                style: style_12PilgrimageSt_147,
                popuplayertitle: '12 - Pilgrimage St',
                interactive: true,
                title: '<img src="styles/legend/12PilgrimageSt_147.png" /> 12 - Pilgrimage St'
            });
var format_11StapleSt_148 = new ol.format.GeoJSON();
var features_11StapleSt_148 = format_11StapleSt_148.readFeatures(json_11StapleSt_148, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_11StapleSt_148 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_11StapleSt_148.addFeatures(features_11StapleSt_148);
var lyr_11StapleSt_148 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_11StapleSt_148, 
                style: style_11StapleSt_148,
                popuplayertitle: '11 - Staple St',
                interactive: true,
                title: '<img src="styles/legend/11StapleSt_148.png" /> 11 - Staple St'
            });
var format_9TabardSt_149 = new ol.format.GeoJSON();
var features_9TabardSt_149 = format_9TabardSt_149.readFeatures(json_9TabardSt_149, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_9TabardSt_149 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_9TabardSt_149.addFeatures(features_9TabardSt_149);
var lyr_9TabardSt_149 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_9TabardSt_149, 
                style: style_9TabardSt_149,
                popuplayertitle: '9 - Tabard St',
                interactive: true,
                title: '<img src="styles/legend/9TabardSt_149.png" /> 9 - Tabard St'
            });
var format_9WestonSt_150 = new ol.format.GeoJSON();
var features_9WestonSt_150 = format_9WestonSt_150.readFeatures(json_9WestonSt_150, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_9WestonSt_150 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_9WestonSt_150.addFeatures(features_9WestonSt_150);
var lyr_9WestonSt_150 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_9WestonSt_150, 
                style: style_9WestonSt_150,
                popuplayertitle: '9 - Weston St',
                interactive: true,
                title: '<img src="styles/legend/9WestonSt_150.png" /> 9 - Weston St'
            });
var format_8RothsaySt_151 = new ol.format.GeoJSON();
var features_8RothsaySt_151 = format_8RothsaySt_151.readFeatures(json_8RothsaySt_151, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_8RothsaySt_151 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_8RothsaySt_151.addFeatures(features_8RothsaySt_151);
var lyr_8RothsaySt_151 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_8RothsaySt_151, 
                style: style_8RothsaySt_151,
                popuplayertitle: '8 - Rothsay St',
                interactive: true,
                title: '<img src="styles/legend/8RothsaySt_151.png" /> 8 - Rothsay St'
            });
var format_5BermondseySt_152 = new ol.format.GeoJSON();
var features_5BermondseySt_152 = format_5BermondseySt_152.readFeatures(json_5BermondseySt_152, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_5BermondseySt_152 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_5BermondseySt_152.addFeatures(features_5BermondseySt_152);
var lyr_5BermondseySt_152 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_5BermondseySt_152, 
                style: style_5BermondseySt_152,
                popuplayertitle: '5 - Bermondsey St',
                interactive: true,
                title: '<img src="styles/legend/5BermondseySt_152.png" /> 5 - Bermondsey St'
            });
var format_StrategicNetwork_153 = new ol.format.GeoJSON();
var features_StrategicNetwork_153 = format_StrategicNetwork_153.readFeatures(json_StrategicNetwork_153, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StrategicNetwork_153 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StrategicNetwork_153.addFeatures(features_StrategicNetwork_153);
var lyr_StrategicNetwork_153 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_StrategicNetwork_153, 
                style: style_StrategicNetwork_153,
                popuplayertitle: 'Strategic Network',
                interactive: true,
                title: '<img src="styles/legend/StrategicNetwork_153.png" /> Strategic Network'
            });
var format_SLB_154 = new ol.format.GeoJSON();
var features_SLB_154 = format_SLB_154.readFeatures(json_SLB_154, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SLB_154 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SLB_154.addFeatures(features_SLB_154);
var lyr_SLB_154 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SLB_154, 
                style: style_SLB_154,
                popuplayertitle: 'SLB',
                interactive: true,
                title: '<img src="styles/legend/SLB_154.png" /> SLB'
            });
var format_15FalmouthRd_155 = new ol.format.GeoJSON();
var features_15FalmouthRd_155 = format_15FalmouthRd_155.readFeatures(json_15FalmouthRd_155, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_15FalmouthRd_155 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_15FalmouthRd_155.addFeatures(features_15FalmouthRd_155);
var lyr_15FalmouthRd_155 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_15FalmouthRd_155, 
                style: style_15FalmouthRd_155,
                popuplayertitle: '15 - Falmouth Rd',
                interactive: true,
                title: '<img src="styles/legend/15FalmouthRd_155.png" /> 15 - Falmouth Rd'
            });
var format_15FalmouthRd_156 = new ol.format.GeoJSON();
var features_15FalmouthRd_156 = format_15FalmouthRd_156.readFeatures(json_15FalmouthRd_156, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_15FalmouthRd_156 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_15FalmouthRd_156.addFeatures(features_15FalmouthRd_156);
var lyr_15FalmouthRd_156 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_15FalmouthRd_156, 
                style: style_15FalmouthRd_156,
                popuplayertitle: '15 - Falmouth Rd',
                interactive: true,
                title: '<img src="styles/legend/15FalmouthRd_156.png" /> 15 - Falmouth Rd'
            });
var format_18BrockhamSt_157 = new ol.format.GeoJSON();
var features_18BrockhamSt_157 = format_18BrockhamSt_157.readFeatures(json_18BrockhamSt_157, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_18BrockhamSt_157 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_18BrockhamSt_157.addFeatures(features_18BrockhamSt_157);
var lyr_18BrockhamSt_157 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_18BrockhamSt_157, 
                style: style_18BrockhamSt_157,
                popuplayertitle: '18 - Brockham St',
                interactive: true,
                title: '<img src="styles/legend/18BrockhamSt_157.png" /> 18 - Brockham St'
            });
var format_14DeverellSt_158 = new ol.format.GeoJSON();
var features_14DeverellSt_158 = format_14DeverellSt_158.readFeatures(json_14DeverellSt_158, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_14DeverellSt_158 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_14DeverellSt_158.addFeatures(features_14DeverellSt_158);
var lyr_14DeverellSt_158 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_14DeverellSt_158, 
                style: style_14DeverellSt_158,
                popuplayertitle: '14 - Deverell St',
                interactive: true,
                title: '<img src="styles/legend/14DeverellSt_158.png" /> 14 - Deverell St'
            });
var format_16FalmouthRd_159 = new ol.format.GeoJSON();
var features_16FalmouthRd_159 = format_16FalmouthRd_159.readFeatures(json_16FalmouthRd_159, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_16FalmouthRd_159 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_16FalmouthRd_159.addFeatures(features_16FalmouthRd_159);
var lyr_16FalmouthRd_159 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_16FalmouthRd_159, 
                style: style_16FalmouthRd_159,
                popuplayertitle: '16 - Falmouth Rd',
                interactive: true,
                title: '<img src="styles/legend/16FalmouthRd_159.png" /> 16 - Falmouth Rd'
            });
var format_fid_586_160 = new ol.format.GeoJSON();
var features_fid_586_160 = format_fid_586_160.readFeatures(json_fid_586_160, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_fid_586_160 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_fid_586_160.addFeatures(features_fid_586_160);
var lyr_fid_586_160 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_fid_586_160, 
                style: style_fid_586_160,
                popuplayertitle: 'fid_586',
                interactive: true,
                title: '<img src="styles/legend/fid_586_160.png" /> fid_586'
            });
var format_15TrinitySt_161 = new ol.format.GeoJSON();
var features_15TrinitySt_161 = format_15TrinitySt_161.readFeatures(json_15TrinitySt_161, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_15TrinitySt_161 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_15TrinitySt_161.addFeatures(features_15TrinitySt_161);
var lyr_15TrinitySt_161 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_15TrinitySt_161, 
                style: style_15TrinitySt_161,
                popuplayertitle: '15 - Trinity St',
                interactive: true,
                title: '<img src="styles/legend/15TrinitySt_161.png" /> 15 - Trinity St'
            });
var format_Strategicnetwork_162 = new ol.format.GeoJSON();
var features_Strategicnetwork_162 = format_Strategicnetwork_162.readFeatures(json_Strategicnetwork_162, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Strategicnetwork_162 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Strategicnetwork_162.addFeatures(features_Strategicnetwork_162);
var lyr_Strategicnetwork_162 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Strategicnetwork_162, 
                style: style_Strategicnetwork_162,
                popuplayertitle: 'Strategic network',
                interactive: true,
                title: '<img src="styles/legend/Strategicnetwork_162.png" /> Strategic network'
            });
var format_Legacyprojects_163 = new ol.format.GeoJSON();
var features_Legacyprojects_163 = format_Legacyprojects_163.readFeatures(json_Legacyprojects_163, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Legacyprojects_163 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Legacyprojects_163.addFeatures(features_Legacyprojects_163);
var lyr_Legacyprojects_163 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Legacyprojects_163, 
                style: style_Legacyprojects_163,
                popuplayertitle: 'Legacy projects',
                interactive: true,
                title: '<img src="styles/legend/Legacyprojects_163.png" /> Legacy projects'
            });
var format_14LongLane_164 = new ol.format.GeoJSON();
var features_14LongLane_164 = format_14LongLane_164.readFeatures(json_14LongLane_164, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_14LongLane_164 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_14LongLane_164.addFeatures(features_14LongLane_164);
var lyr_14LongLane_164 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_14LongLane_164, 
                style: style_14LongLane_164,
                popuplayertitle: '14 - Long Lane',
                interactive: true,
                title: '<img src="styles/legend/14LongLane_164.png" /> 14 - Long Lane'
            });
var format_10LeathermarketTannerSt_165 = new ol.format.GeoJSON();
var features_10LeathermarketTannerSt_165 = format_10LeathermarketTannerSt_165.readFeatures(json_10LeathermarketTannerSt_165, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_10LeathermarketTannerSt_165 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_10LeathermarketTannerSt_165.addFeatures(features_10LeathermarketTannerSt_165);
var lyr_10LeathermarketTannerSt_165 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_10LeathermarketTannerSt_165, 
                style: style_10LeathermarketTannerSt_165,
                popuplayertitle: '10 - Leathermarket/Tanner St',
                interactive: true,
                title: '<img src="styles/legend/10LeathermarketTannerSt_165.png" /> 10 - Leathermarket/Tanner St'
            });
var format_9Weston_166 = new ol.format.GeoJSON();
var features_9Weston_166 = format_9Weston_166.readFeatures(json_9Weston_166, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_9Weston_166 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_9Weston_166.addFeatures(features_9Weston_166);
var lyr_9Weston_166 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_9Weston_166, 
                style: style_9Weston_166,
                popuplayertitle: '9 - Weston',
                interactive: true,
                title: '<img src="styles/legend/9Weston_166.png" /> 9 - Weston'
            });
var format_7HolyroodSt_167 = new ol.format.GeoJSON();
var features_7HolyroodSt_167 = format_7HolyroodSt_167.readFeatures(json_7HolyroodSt_167, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_7HolyroodSt_167 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_7HolyroodSt_167.addFeatures(features_7HolyroodSt_167);
var lyr_7HolyroodSt_167 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_7HolyroodSt_167, 
                style: style_7HolyroodSt_167,
                popuplayertitle: '7 - Holyrood St',
                interactive: true,
                title: '<img src="styles/legend/7HolyroodSt_167.png" /> 7 - Holyrood St'
            });
var format_5NewcomenSt_168 = new ol.format.GeoJSON();
var features_5NewcomenSt_168 = format_5NewcomenSt_168.readFeatures(json_5NewcomenSt_168, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_5NewcomenSt_168 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_5NewcomenSt_168.addFeatures(features_5NewcomenSt_168);
var lyr_5NewcomenSt_168 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_5NewcomenSt_168, 
                style: style_5NewcomenSt_168,
                popuplayertitle: '5 - Newcomen St',
                interactive: true,
                title: '<img src="styles/legend/5NewcomenSt_168.png" /> 5 - Newcomen St'
            });
var format_Strategicnetwork_169 = new ol.format.GeoJSON();
var features_Strategicnetwork_169 = format_Strategicnetwork_169.readFeatures(json_Strategicnetwork_169, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Strategicnetwork_169 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Strategicnetwork_169.addFeatures(features_Strategicnetwork_169);
var lyr_Strategicnetwork_169 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Strategicnetwork_169, 
                style: style_Strategicnetwork_169,
                popuplayertitle: 'Strategic network',
                interactive: true,
                title: '<img src="styles/legend/Strategicnetwork_169.png" /> Strategic network'
            });
var format_Inprogress_170 = new ol.format.GeoJSON();
var features_Inprogress_170 = format_Inprogress_170.readFeatures(json_Inprogress_170, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Inprogress_170 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Inprogress_170.addFeatures(features_Inprogress_170);
var lyr_Inprogress_170 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Inprogress_170, 
                style: style_Inprogress_170,
                popuplayertitle: 'In progress',
                interactive: true,
                title: '<img src="styles/legend/Inprogress_170.png" /> In progress'
            });
var format_SG8OntarioSt_171 = new ol.format.GeoJSON();
var features_SG8OntarioSt_171 = format_SG8OntarioSt_171.readFeatures(json_SG8OntarioSt_171, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SG8OntarioSt_171 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SG8OntarioSt_171.addFeatures(features_SG8OntarioSt_171);
var lyr_SG8OntarioSt_171 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SG8OntarioSt_171, 
                style: style_SG8OntarioSt_171,
                popuplayertitle: 'SG8 - Ontario St',
                interactive: true,
                title: '<img src="styles/legend/SG8OntarioSt_171.png" /> SG8 - Ontario St'
            });
var format_SG7KeyworthSt_172 = new ol.format.GeoJSON();
var features_SG7KeyworthSt_172 = format_SG7KeyworthSt_172.readFeatures(json_SG7KeyworthSt_172, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SG7KeyworthSt_172 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SG7KeyworthSt_172.addFeatures(features_SG7KeyworthSt_172);
var lyr_SG7KeyworthSt_172 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SG7KeyworthSt_172, 
                style: style_SG7KeyworthSt_172,
                popuplayertitle: 'SG7 - Keyworth St',
                interactive: true,
                title: '<img src="styles/legend/SG7KeyworthSt_172.png" /> SG7 - Keyworth St'
            });
var format_SG2LancasterSt_173 = new ol.format.GeoJSON();
var features_SG2LancasterSt_173 = format_SG2LancasterSt_173.readFeatures(json_SG2LancasterSt_173, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SG2LancasterSt_173 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SG2LancasterSt_173.addFeatures(features_SG2LancasterSt_173);
var lyr_SG2LancasterSt_173 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SG2LancasterSt_173, 
                style: style_SG2LancasterSt_173,
                popuplayertitle: 'SG2 - - Lancaster St',
                interactive: true,
                title: '<img src="styles/legend/SG2LancasterSt_173.png" /> SG2 - - Lancaster St'
            });
var format_18Bankside_174 = new ol.format.GeoJSON();
var features_18Bankside_174 = format_18Bankside_174.readFeatures(json_18Bankside_174, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_18Bankside_174 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_18Bankside_174.addFeatures(features_18Bankside_174);
var lyr_18Bankside_174 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_18Bankside_174, 
                style: style_18Bankside_174,
                popuplayertitle: '18 - Bankside ',
                interactive: true,
                title: '<img src="styles/legend/18Bankside_174.png" /> 18 - Bankside '
            });
var format_17NicholsonSt_175 = new ol.format.GeoJSON();
var features_17NicholsonSt_175 = format_17NicholsonSt_175.readFeatures(json_17NicholsonSt_175, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_17NicholsonSt_175 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_17NicholsonSt_175.addFeatures(features_17NicholsonSt_175);
var lyr_17NicholsonSt_175 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_17NicholsonSt_175, 
                style: style_17NicholsonSt_175,
                popuplayertitle: '17 - Nicholson St',
                interactive: true,
                title: '<img src="styles/legend/17NicholsonSt_175.png" /> 17 - Nicholson St'
            });
var format_16SumnerSt_176 = new ol.format.GeoJSON();
var features_16SumnerSt_176 = format_16SumnerSt_176.readFeatures(json_16SumnerSt_176, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_16SumnerSt_176 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_16SumnerSt_176.addFeatures(features_16SumnerSt_176);
var lyr_16SumnerSt_176 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_16SumnerSt_176, 
                style: style_16SumnerSt_176,
                popuplayertitle: '16 - Sumner St',
                interactive: true,
                title: '<img src="styles/legend/16SumnerSt_176.png" /> 16 - Sumner St'
            });
var format_15GreatGuildfordSt_177 = new ol.format.GeoJSON();
var features_15GreatGuildfordSt_177 = format_15GreatGuildfordSt_177.readFeatures(json_15GreatGuildfordSt_177, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_15GreatGuildfordSt_177 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_15GreatGuildfordSt_177.addFeatures(features_15GreatGuildfordSt_177);
var lyr_15GreatGuildfordSt_177 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_15GreatGuildfordSt_177, 
                style: style_15GreatGuildfordSt_177,
                popuplayertitle: '15 - Great Guildford St',
                interactive: true,
                title: '<img src="styles/legend/15GreatGuildfordSt_177.png" /> 15 - Great Guildford St'
            });
var format_12MarshalseaRd_178 = new ol.format.GeoJSON();
var features_12MarshalseaRd_178 = format_12MarshalseaRd_178.readFeatures(json_12MarshalseaRd_178, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_12MarshalseaRd_178 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_12MarshalseaRd_178.addFeatures(features_12MarshalseaRd_178);
var lyr_12MarshalseaRd_178 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_12MarshalseaRd_178, 
                style: style_12MarshalseaRd_178,
                popuplayertitle: '12 - Marshalsea Rd',
                interactive: true,
                title: '<img src="styles/legend/12MarshalseaRd_178.png" /> 12 - Marshalsea Rd'
            });
var format_11RedcrossWay_179 = new ol.format.GeoJSON();
var features_11RedcrossWay_179 = format_11RedcrossWay_179.readFeatures(json_11RedcrossWay_179, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_11RedcrossWay_179 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_11RedcrossWay_179.addFeatures(features_11RedcrossWay_179);
var lyr_11RedcrossWay_179 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_11RedcrossWay_179, 
                style: style_11RedcrossWay_179,
                popuplayertitle: '11 - Redcross Way',
                interactive: true,
                title: '<img src="styles/legend/11RedcrossWay_179.png" /> 11 - Redcross Way'
            });
var format_10SawyerSt_180 = new ol.format.GeoJSON();
var features_10SawyerSt_180 = format_10SawyerSt_180.readFeatures(json_10SawyerSt_180, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_10SawyerSt_180 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_10SawyerSt_180.addFeatures(features_10SawyerSt_180);
var lyr_10SawyerSt_180 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_10SawyerSt_180, 
                style: style_10SawyerSt_180,
                popuplayertitle: '10 - Sawyer St',
                interactive: true,
                title: '<img src="styles/legend/10SawyerSt_180.png" /> 10 - Sawyer St'
            });
var format_8GreatSuffolkSt_181 = new ol.format.GeoJSON();
var features_8GreatSuffolkSt_181 = format_8GreatSuffolkSt_181.readFeatures(json_8GreatSuffolkSt_181, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_8GreatSuffolkSt_181 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_8GreatSuffolkSt_181.addFeatures(features_8GreatSuffolkSt_181);
var lyr_8GreatSuffolkSt_181 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_8GreatSuffolkSt_181, 
                style: style_8GreatSuffolkSt_181,
                popuplayertitle: '8 - Great Suffolk St',
                interactive: true,
                title: '<img src="styles/legend/8GreatSuffolkSt_181.png" /> 8 - Great Suffolk St'
            });
var format_6UnionSt_182 = new ol.format.GeoJSON();
var features_6UnionSt_182 = format_6UnionSt_182.readFeatures(json_6UnionSt_182, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_6UnionSt_182 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_6UnionSt_182.addFeatures(features_6UnionSt_182);
var lyr_6UnionSt_182 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_6UnionSt_182, 
                style: style_6UnionSt_182,
                popuplayertitle: '6 - Union St',
                interactive: true,
                title: '<img src="styles/legend/6UnionSt_182.png" /> 6 - Union St'
            });
var group_ZoneA = new ol.layer.Group({
                                layers: [lyr_Strategicnetwork_169,lyr_Inprogress_170,lyr_SG8OntarioSt_171,lyr_SG7KeyworthSt_172,lyr_SG2LancasterSt_173,lyr_18Bankside_174,lyr_17NicholsonSt_175,lyr_16SumnerSt_176,lyr_15GreatGuildfordSt_177,lyr_12MarshalseaRd_178,lyr_11RedcrossWay_179,lyr_10SawyerSt_180,lyr_8GreatSuffolkSt_181,lyr_6UnionSt_182,],
                                fold: "open",
                                title: 'Zone A'});
var group_ZoneB = new ol.layer.Group({
                                layers: [lyr_Strategicnetwork_162,lyr_Legacyprojects_163,lyr_14LongLane_164,lyr_10LeathermarketTannerSt_165,lyr_9Weston_166,lyr_7HolyroodSt_167,lyr_5NewcomenSt_168,],
                                fold: "open",
                                title: 'Zone B'});
var group_ZoneC = new ol.layer.Group({
                                layers: [lyr_StrategicNetwork_153,lyr_SLB_154,lyr_15FalmouthRd_155,lyr_15FalmouthRd_156,lyr_18BrockhamSt_157,lyr_14DeverellSt_158,lyr_16FalmouthRd_159,lyr_fid_586_160,lyr_15TrinitySt_161,],
                                fold: "open",
                                title: 'Zone C'});
var group_ZoneD = new ol.layer.Group({
                                layers: [lyr_Strategicnetwork_145,lyr_14LongLane_146,lyr_12PilgrimageSt_147,lyr_11StapleSt_148,lyr_9TabardSt_149,lyr_9WestonSt_150,lyr_8RothsaySt_151,lyr_5BermondseySt_152,],
                                fold: "open",
                                title: 'Zone D'});
var group_ZoneE = new ol.layer.Group({
                                layers: [lyr_name_131,lyr_Strategicnetwork_132,lyr_19ShadThames_133,lyr_18MillSt_134,lyr_17Dockhead_135,lyr_16GeorgeRow_136,lyr_15ChambersSt_137,lyr_14LlewellynSt_138,lyr_13BevingtonSt_139,lyr_12MarigoldSt_140,lyr_6Rotherhithe_141,lyr_5TunnelRd_142,lyr_4SaintMarychurdRd_143,lyr_3SwanRd_144,],
                                fold: "open",
                                title: 'Zone E'});
var group_ZoneF = new ol.layer.Group({
                                layers: [lyr_Noname_112,lyr_15TheGrange_113,lyr_15CarriageDrive_114,lyr_14RouelRoad_115,lyr_13AlscottRoad_116,lyr_13DruidStreet_117,lyr_12RileyRoad_118,lyr_10AbbeyStreet_119,lyr_10TannerStreet_120,lyr_9OldJamaicaRoad_121,lyr_8EnidStreet_122,lyr_8ThurlandRoad_123,lyr_7StJamessRoad_124,lyr_6TrantonRoad_125,lyr_5ClementsRoad_126,lyr_4DrummondRoad_127,lyr_3SouthwarkParkRoad_128,lyr_2RaymouthRoad_129,lyr_1AbbeyfieldRoad_130,],
                                fold: "open",
                                title: 'Zone F'});
var group_ZoneG = new ol.layer.Group({
                                layers: [lyr_Noproposals_96,lyr_ExistingLBSScheme_97,lyr_16TimberPondRoad_98,lyr_11PloughWay_99,lyr_10RobertsClose_100,lyr_6CanadaStreet_101,lyr_9SurreyQuaysRoad_102,lyr_8SouthSeaRoad_103,lyr_7RedriffRoad_104,lyr_5QuebecWay_105,lyr_4SalterRoadSouth_106,lyr_3SwanRoad_107,lyr_3SalterRoadNorth_108,lyr_2BrunelRoad_109,lyr_2RotherhitheStreet_110,lyr_1BeatsonWalk_111,],
                                fold: "open",
                                title: 'Zone G'});
var group_ZoneH = new ol.layer.Group({
                                layers: [lyr_TLRN_71,lyr_Noproposals_72,lyr_ExistingLBSScheme_73,lyr_29ReverdyRoad_74,lyr_28MarlboroughGrove_75,lyr_27StubbsDrive_76,lyr_26CamillaRoad_77,lyr_20Mawbey_Coopers_78,lyr_20MandelaWay_79,lyr_19DuntonRoad_80,lyr_19CrimscottStreet_81,lyr_18RowcrossStreet_82,lyr_17Oxley_Abercorn_83,lyr_18PagesWalk_84,lyr_16CatlinStreet_85,lyr_15GalleywayRoad_86,lyr_17WebbStreet_87,lyr_13Alscot_88,lyr_12LyntonRoad_89,lyr_9Willlow_Tanner_90,lyr_7StevensonCrescent_91,lyr_6RollsRoad_92,lyr_5SouthwarkPark_93,lyr_4GrangeRoad_94,lyr_2StJamessRoad_95,],
                                fold: "open",
                                title: 'Zone H'});
var group_ZoneI = new ol.layer.Group({
                                layers: [lyr_Noname_51,lyr_Noproposals_52,lyr_TLRN_53,lyr_SRN_54,lyr_13PentonPlace_55,lyr_12PaselyPark_56,lyr_11OttoStreetFlemmingRoad_57,lyr_10cThompsonSultanCrown_58,lyr_10AmeliaStreet_59,lyr_9wManorPlace_60,lyr_9cBethwinRoad_61,lyr_9LorrimoreRoad_62,lyr_8wHamptonStreet_63,lyr_8cGrosvenorTerrace_64,lyr_8DeLauneStreet_65,lyr_7DracoStreet_66,lyr_6PenroseStreet_67,lyr_5ChapterRoad_68,lyr_4BraganzaStreet_69,lyr_3CooksRoad_70,],
                                fold: "open",
                                title: 'Zone I'});
var group_ZoneJ = new ol.layer.Group({
                                layers: [lyr_SLB_7,lyr_TLRN_8,lyr_17JohnMauriceClose_9,lyr_14DarwinStreet_10,lyr_13BeckwayStreet_11,lyr_7EastStreet_12,lyr_12AlveyStreet_13,lyr_9Beaconsfield_14,lyr_2AlbanyRoad_15,lyr_11NeateStreet_16,lyr_4TrafalgarAvenue_17,lyr_10GlengallRoad_18,lyr_9StGeorgesWay_19,lyr_1HaymerleRoad_20,lyr_10BurgessPark_21,lyr_8MerrowStreet_22,lyr_4OrbitStreet_23,lyr_3PeckhamParkRoad_24,lyr_6WillowbrookRoad_25,lyr_2BirdinBushRoad_26,lyr_5NaylorRoad_27,lyr_17CliftonWay_28,lyr_12ElephantRoad_29,lyr_4PomeroyStreet_30,lyr_1AsylumRoad_31,lyr_2CarltonGrove_32,lyr_14MarmontRoad_33,lyr_16FurleyRoad_34,lyr_13BullerClose_35,lyr_8SumnerRoad_36,lyr_7PeckhamHillStreet_37,lyr_2cBowyerPlSouthamptonWy_38,lyr_6HavilStreet_39,lyr_17KellyAvenue_40,lyr_1GroveKimptonRoad_41,lyr_14EdmundStreet_42,lyr_6ElmingtonRoad_43,lyr_12DanielGardens_44,lyr_11ChandlerWay_45,lyr_18LynbrookGrove_46,lyr_10PeckhamGrove_47,lyr_9WellsWay_48,lyr_5BrandonStreet_49,lyr_6BrowningStreet_50,],
                                fold: "open",
                                title: 'Zone J'});
var group_Wards = new ol.layer.Group({
                                layers: [lyr_StGiles_1,lyr_NorthWalworth_2,lyr_Faraday_3,lyr_Peckham_4,lyr_OldKentRd_5,lyr_CamberwellGreen_6,],
                                fold: "open",
                                title: 'Wards'});
var group_Zonesplit = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: 'Zone split'});
var group_GreaterLondoncolours = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: 'Greater London - colours'});
var group_GreaterLondongrayscale = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: 'Greater London - grayscale'});

lyr_SfPboundary_0.setVisible(true);lyr_StGiles_1.setVisible(true);lyr_NorthWalworth_2.setVisible(true);lyr_Faraday_3.setVisible(true);lyr_Peckham_4.setVisible(true);lyr_OldKentRd_5.setVisible(true);lyr_CamberwellGreen_6.setVisible(true);lyr_SLB_7.setVisible(true);lyr_TLRN_8.setVisible(true);lyr_17JohnMauriceClose_9.setVisible(true);lyr_14DarwinStreet_10.setVisible(true);lyr_13BeckwayStreet_11.setVisible(true);lyr_7EastStreet_12.setVisible(true);lyr_12AlveyStreet_13.setVisible(true);lyr_9Beaconsfield_14.setVisible(true);lyr_2AlbanyRoad_15.setVisible(true);lyr_11NeateStreet_16.setVisible(true);lyr_4TrafalgarAvenue_17.setVisible(true);lyr_10GlengallRoad_18.setVisible(true);lyr_9StGeorgesWay_19.setVisible(true);lyr_1HaymerleRoad_20.setVisible(true);lyr_10BurgessPark_21.setVisible(true);lyr_8MerrowStreet_22.setVisible(true);lyr_4OrbitStreet_23.setVisible(true);lyr_3PeckhamParkRoad_24.setVisible(true);lyr_6WillowbrookRoad_25.setVisible(true);lyr_2BirdinBushRoad_26.setVisible(true);lyr_5NaylorRoad_27.setVisible(true);lyr_17CliftonWay_28.setVisible(true);lyr_12ElephantRoad_29.setVisible(true);lyr_4PomeroyStreet_30.setVisible(true);lyr_1AsylumRoad_31.setVisible(true);lyr_2CarltonGrove_32.setVisible(true);lyr_14MarmontRoad_33.setVisible(true);lyr_16FurleyRoad_34.setVisible(true);lyr_13BullerClose_35.setVisible(true);lyr_8SumnerRoad_36.setVisible(true);lyr_7PeckhamHillStreet_37.setVisible(true);lyr_2cBowyerPlSouthamptonWy_38.setVisible(true);lyr_6HavilStreet_39.setVisible(true);lyr_17KellyAvenue_40.setVisible(true);lyr_1GroveKimptonRoad_41.setVisible(true);lyr_14EdmundStreet_42.setVisible(true);lyr_6ElmingtonRoad_43.setVisible(true);lyr_12DanielGardens_44.setVisible(true);lyr_11ChandlerWay_45.setVisible(true);lyr_18LynbrookGrove_46.setVisible(true);lyr_10PeckhamGrove_47.setVisible(true);lyr_9WellsWay_48.setVisible(true);lyr_5BrandonStreet_49.setVisible(true);lyr_6BrowningStreet_50.setVisible(true);lyr_Noname_51.setVisible(true);lyr_Noproposals_52.setVisible(true);lyr_TLRN_53.setVisible(true);lyr_SRN_54.setVisible(true);lyr_13PentonPlace_55.setVisible(true);lyr_12PaselyPark_56.setVisible(true);lyr_11OttoStreetFlemmingRoad_57.setVisible(true);lyr_10cThompsonSultanCrown_58.setVisible(true);lyr_10AmeliaStreet_59.setVisible(true);lyr_9wManorPlace_60.setVisible(true);lyr_9cBethwinRoad_61.setVisible(true);lyr_9LorrimoreRoad_62.setVisible(true);lyr_8wHamptonStreet_63.setVisible(true);lyr_8cGrosvenorTerrace_64.setVisible(true);lyr_8DeLauneStreet_65.setVisible(true);lyr_7DracoStreet_66.setVisible(true);lyr_6PenroseStreet_67.setVisible(true);lyr_5ChapterRoad_68.setVisible(true);lyr_4BraganzaStreet_69.setVisible(true);lyr_3CooksRoad_70.setVisible(true);lyr_TLRN_71.setVisible(true);lyr_Noproposals_72.setVisible(true);lyr_ExistingLBSScheme_73.setVisible(true);lyr_29ReverdyRoad_74.setVisible(true);lyr_28MarlboroughGrove_75.setVisible(true);lyr_27StubbsDrive_76.setVisible(true);lyr_26CamillaRoad_77.setVisible(true);lyr_20Mawbey_Coopers_78.setVisible(true);lyr_20MandelaWay_79.setVisible(true);lyr_19DuntonRoad_80.setVisible(true);lyr_19CrimscottStreet_81.setVisible(true);lyr_18RowcrossStreet_82.setVisible(true);lyr_17Oxley_Abercorn_83.setVisible(true);lyr_18PagesWalk_84.setVisible(true);lyr_16CatlinStreet_85.setVisible(true);lyr_15GalleywayRoad_86.setVisible(true);lyr_17WebbStreet_87.setVisible(true);lyr_13Alscot_88.setVisible(true);lyr_12LyntonRoad_89.setVisible(true);lyr_9Willlow_Tanner_90.setVisible(true);lyr_7StevensonCrescent_91.setVisible(true);lyr_6RollsRoad_92.setVisible(true);lyr_5SouthwarkPark_93.setVisible(true);lyr_4GrangeRoad_94.setVisible(true);lyr_2StJamessRoad_95.setVisible(true);lyr_Noproposals_96.setVisible(true);lyr_ExistingLBSScheme_97.setVisible(true);lyr_16TimberPondRoad_98.setVisible(true);lyr_11PloughWay_99.setVisible(true);lyr_10RobertsClose_100.setVisible(true);lyr_6CanadaStreet_101.setVisible(true);lyr_9SurreyQuaysRoad_102.setVisible(true);lyr_8SouthSeaRoad_103.setVisible(true);lyr_7RedriffRoad_104.setVisible(true);lyr_5QuebecWay_105.setVisible(true);lyr_4SalterRoadSouth_106.setVisible(true);lyr_3SwanRoad_107.setVisible(true);lyr_3SalterRoadNorth_108.setVisible(true);lyr_2BrunelRoad_109.setVisible(true);lyr_2RotherhitheStreet_110.setVisible(true);lyr_1BeatsonWalk_111.setVisible(true);lyr_Noname_112.setVisible(true);lyr_15TheGrange_113.setVisible(true);lyr_15CarriageDrive_114.setVisible(true);lyr_14RouelRoad_115.setVisible(true);lyr_13AlscottRoad_116.setVisible(true);lyr_13DruidStreet_117.setVisible(true);lyr_12RileyRoad_118.setVisible(true);lyr_10AbbeyStreet_119.setVisible(true);lyr_10TannerStreet_120.setVisible(true);lyr_9OldJamaicaRoad_121.setVisible(true);lyr_8EnidStreet_122.setVisible(true);lyr_8ThurlandRoad_123.setVisible(true);lyr_7StJamessRoad_124.setVisible(true);lyr_6TrantonRoad_125.setVisible(true);lyr_5ClementsRoad_126.setVisible(true);lyr_4DrummondRoad_127.setVisible(true);lyr_3SouthwarkParkRoad_128.setVisible(true);lyr_2RaymouthRoad_129.setVisible(true);lyr_1AbbeyfieldRoad_130.setVisible(true);lyr_name_131.setVisible(true);lyr_Strategicnetwork_132.setVisible(true);lyr_19ShadThames_133.setVisible(true);lyr_18MillSt_134.setVisible(true);lyr_17Dockhead_135.setVisible(true);lyr_16GeorgeRow_136.setVisible(true);lyr_15ChambersSt_137.setVisible(true);lyr_14LlewellynSt_138.setVisible(true);lyr_13BevingtonSt_139.setVisible(true);lyr_12MarigoldSt_140.setVisible(true);lyr_6Rotherhithe_141.setVisible(true);lyr_5TunnelRd_142.setVisible(true);lyr_4SaintMarychurdRd_143.setVisible(true);lyr_3SwanRd_144.setVisible(true);lyr_Strategicnetwork_145.setVisible(true);lyr_14LongLane_146.setVisible(true);lyr_12PilgrimageSt_147.setVisible(true);lyr_11StapleSt_148.setVisible(true);lyr_9TabardSt_149.setVisible(true);lyr_9WestonSt_150.setVisible(true);lyr_8RothsaySt_151.setVisible(true);lyr_5BermondseySt_152.setVisible(true);lyr_StrategicNetwork_153.setVisible(true);lyr_SLB_154.setVisible(true);lyr_15FalmouthRd_155.setVisible(true);lyr_15FalmouthRd_156.setVisible(true);lyr_18BrockhamSt_157.setVisible(true);lyr_14DeverellSt_158.setVisible(true);lyr_16FalmouthRd_159.setVisible(true);lyr_fid_586_160.setVisible(true);lyr_15TrinitySt_161.setVisible(true);lyr_Strategicnetwork_162.setVisible(true);lyr_Legacyprojects_163.setVisible(true);lyr_14LongLane_164.setVisible(true);lyr_10LeathermarketTannerSt_165.setVisible(true);lyr_9Weston_166.setVisible(true);lyr_7HolyroodSt_167.setVisible(true);lyr_5NewcomenSt_168.setVisible(true);lyr_Strategicnetwork_169.setVisible(true);lyr_Inprogress_170.setVisible(true);lyr_SG8OntarioSt_171.setVisible(true);lyr_SG7KeyworthSt_172.setVisible(true);lyr_SG2LancasterSt_173.setVisible(true);lyr_18Bankside_174.setVisible(true);lyr_17NicholsonSt_175.setVisible(true);lyr_16SumnerSt_176.setVisible(true);lyr_15GreatGuildfordSt_177.setVisible(true);lyr_12MarshalseaRd_178.setVisible(true);lyr_11RedcrossWay_179.setVisible(true);lyr_10SawyerSt_180.setVisible(true);lyr_8GreatSuffolkSt_181.setVisible(true);lyr_6UnionSt_182.setVisible(true);
var layersList = [lyr_SfPboundary_0,group_Wards,group_ZoneJ,group_ZoneI,group_ZoneH,group_ZoneG,group_ZoneF,group_ZoneE,group_ZoneD,group_ZoneC,group_ZoneB,group_ZoneA];
lyr_SfPboundary_0.set('fieldAliases', {'ZoneName': 'ZoneName', 'Type': 'Type', 'fid': 'fid', });
lyr_StGiles_1.set('fieldAliases', {'fid': 'fid', 'id': 'id', });
lyr_NorthWalworth_2.set('fieldAliases', {'fid': 'fid', 'id': 'id', });
lyr_Faraday_3.set('fieldAliases', {'fid': 'fid', 'id': 'id', });
lyr_Peckham_4.set('fieldAliases', {'fid': 'fid', 'id': 'id', });
lyr_OldKentRd_5.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'layer': 'layer', 'path': 'path', });
lyr_CamberwellGreen_6.set('fieldAliases', {'fid': 'fid', 'id': 'id', });
lyr_SLB_7.set('fieldAliases', {'fid': 'fid', });
lyr_TLRN_8.set('fieldAliases', {'fid': 'fid', });
lyr_17JohnMauriceClose_9.set('fieldAliases', {'fid': 'fid', });
lyr_14DarwinStreet_10.set('fieldAliases', {'fid': 'fid', });
lyr_13BeckwayStreet_11.set('fieldAliases', {'fid': 'fid', });
lyr_7EastStreet_12.set('fieldAliases', {'fid': 'fid', });
lyr_12AlveyStreet_13.set('fieldAliases', {'fid': 'fid', });
lyr_9Beaconsfield_14.set('fieldAliases', {'fid': 'fid', });
lyr_2AlbanyRoad_15.set('fieldAliases', {'fid': 'fid', });
lyr_11NeateStreet_16.set('fieldAliases', {'fid': 'fid', });
lyr_4TrafalgarAvenue_17.set('fieldAliases', {'fid': 'fid', });
lyr_10GlengallRoad_18.set('fieldAliases', {'fid': 'fid', });
lyr_9StGeorgesWay_19.set('fieldAliases', {'fid': 'fid', });
lyr_1HaymerleRoad_20.set('fieldAliases', {'fid': 'fid', });
lyr_10BurgessPark_21.set('fieldAliases', {'fid': 'fid', });
lyr_8MerrowStreet_22.set('fieldAliases', {'fid': 'fid', });
lyr_4OrbitStreet_23.set('fieldAliases', {'fid': 'fid', });
lyr_3PeckhamParkRoad_24.set('fieldAliases', {'fid': 'fid', });
lyr_6WillowbrookRoad_25.set('fieldAliases', {'fid': 'fid', });
lyr_2BirdinBushRoad_26.set('fieldAliases', {'fid': 'fid', });
lyr_5NaylorRoad_27.set('fieldAliases', {'fid': 'fid', });
lyr_17CliftonWay_28.set('fieldAliases', {'fid': 'fid', });
lyr_12ElephantRoad_29.set('fieldAliases', {'fid': 'fid', });
lyr_4PomeroyStreet_30.set('fieldAliases', {'fid': 'fid', });
lyr_1AsylumRoad_31.set('fieldAliases', {'fid': 'fid', });
lyr_2CarltonGrove_32.set('fieldAliases', {'fid': 'fid', });
lyr_14MarmontRoad_33.set('fieldAliases', {'fid': 'fid', });
lyr_16FurleyRoad_34.set('fieldAliases', {'fid': 'fid', });
lyr_13BullerClose_35.set('fieldAliases', {'fid': 'fid', });
lyr_8SumnerRoad_36.set('fieldAliases', {'fid': 'fid', });
lyr_7PeckhamHillStreet_37.set('fieldAliases', {'fid': 'fid', });
lyr_2cBowyerPlSouthamptonWy_38.set('fieldAliases', {'fid': 'fid', });
lyr_6HavilStreet_39.set('fieldAliases', {'fid': 'fid', });
lyr_17KellyAvenue_40.set('fieldAliases', {'fid': 'fid', });
lyr_1GroveKimptonRoad_41.set('fieldAliases', {'fid': 'fid', });
lyr_14EdmundStreet_42.set('fieldAliases', {'fid': 'fid', });
lyr_6ElmingtonRoad_43.set('fieldAliases', {'fid': 'fid', });
lyr_12DanielGardens_44.set('fieldAliases', {'fid': 'fid', });
lyr_11ChandlerWay_45.set('fieldAliases', {'fid': 'fid', });
lyr_18LynbrookGrove_46.set('fieldAliases', {'fid': 'fid', });
lyr_10PeckhamGrove_47.set('fieldAliases', {'fid': 'fid', });
lyr_9WellsWay_48.set('fieldAliases', {'fid': 'fid', });
lyr_5BrandonStreet_49.set('fieldAliases', {'fid': 'fid', });
lyr_6BrowningStreet_50.set('fieldAliases', {'fid': 'fid', });
lyr_Noname_51.set('fieldAliases', {'fid': 'fid', });
lyr_Noproposals_52.set('fieldAliases', {'fid': 'fid', });
lyr_TLRN_53.set('fieldAliases', {'fid': 'fid', });
lyr_SRN_54.set('fieldAliases', {'fid': 'fid', });
lyr_13PentonPlace_55.set('fieldAliases', {'fid': 'fid', });
lyr_12PaselyPark_56.set('fieldAliases', {'fid': 'fid', });
lyr_11OttoStreetFlemmingRoad_57.set('fieldAliases', {'fid': 'fid', });
lyr_10cThompsonSultanCrown_58.set('fieldAliases', {'fid': 'fid', });
lyr_10AmeliaStreet_59.set('fieldAliases', {'fid': 'fid', });
lyr_9wManorPlace_60.set('fieldAliases', {'fid': 'fid', });
lyr_9cBethwinRoad_61.set('fieldAliases', {'fid': 'fid', });
lyr_9LorrimoreRoad_62.set('fieldAliases', {'fid': 'fid', });
lyr_8wHamptonStreet_63.set('fieldAliases', {'fid': 'fid', });
lyr_8cGrosvenorTerrace_64.set('fieldAliases', {'fid': 'fid', });
lyr_8DeLauneStreet_65.set('fieldAliases', {'fid': 'fid', });
lyr_7DracoStreet_66.set('fieldAliases', {'fid': 'fid', });
lyr_6PenroseStreet_67.set('fieldAliases', {'fid': 'fid', });
lyr_5ChapterRoad_68.set('fieldAliases', {'fid': 'fid', });
lyr_4BraganzaStreet_69.set('fieldAliases', {'fid': 'fid', });
lyr_3CooksRoad_70.set('fieldAliases', {'fid': 'fid', });
lyr_TLRN_71.set('fieldAliases', {'fid': 'fid', });
lyr_Noproposals_72.set('fieldAliases', {'fid': 'fid', });
lyr_ExistingLBSScheme_73.set('fieldAliases', {'fid': 'fid', });
lyr_29ReverdyRoad_74.set('fieldAliases', {'fid': 'fid', });
lyr_28MarlboroughGrove_75.set('fieldAliases', {'fid': 'fid', });
lyr_27StubbsDrive_76.set('fieldAliases', {'fid': 'fid', });
lyr_26CamillaRoad_77.set('fieldAliases', {'fid': 'fid', });
lyr_20Mawbey_Coopers_78.set('fieldAliases', {'fid': 'fid', });
lyr_20MandelaWay_79.set('fieldAliases', {'fid': 'fid', });
lyr_19DuntonRoad_80.set('fieldAliases', {'fid': 'fid', });
lyr_19CrimscottStreet_81.set('fieldAliases', {'fid': 'fid', });
lyr_18RowcrossStreet_82.set('fieldAliases', {'fid': 'fid', });
lyr_17Oxley_Abercorn_83.set('fieldAliases', {'fid': 'fid', });
lyr_18PagesWalk_84.set('fieldAliases', {'fid': 'fid', });
lyr_16CatlinStreet_85.set('fieldAliases', {'fid': 'fid', });
lyr_15GalleywayRoad_86.set('fieldAliases', {'fid': 'fid', });
lyr_17WebbStreet_87.set('fieldAliases', {'fid': 'fid', });
lyr_13Alscot_88.set('fieldAliases', {'fid': 'fid', });
lyr_12LyntonRoad_89.set('fieldAliases', {'fid': 'fid', });
lyr_9Willlow_Tanner_90.set('fieldAliases', {'fid': 'fid', });
lyr_7StevensonCrescent_91.set('fieldAliases', {'fid': 'fid', });
lyr_6RollsRoad_92.set('fieldAliases', {'fid': 'fid', });
lyr_5SouthwarkPark_93.set('fieldAliases', {'fid': 'fid', });
lyr_4GrangeRoad_94.set('fieldAliases', {'fid': 'fid', });
lyr_2StJamessRoad_95.set('fieldAliases', {'fid': 'fid', });
lyr_Noproposals_96.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Rating': 'Rating', 'layer': 'layer', 'path': 'path', });
lyr_ExistingLBSScheme_97.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Rating': 'Rating', 'layer': 'layer', 'path': 'path', });
lyr_16TimberPondRoad_98.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Rating': 'Rating', 'layer': 'layer', 'path': 'path', });
lyr_11PloughWay_99.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Rating': 'Rating', 'layer': 'layer', 'path': 'path', });
lyr_10RobertsClose_100.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Rating': 'Rating', 'layer': 'layer', 'path': 'path', });
lyr_6CanadaStreet_101.set('fieldAliases', {'fid': 'fid', });
lyr_9SurreyQuaysRoad_102.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Rating': 'Rating', 'layer': 'layer', 'path': 'path', });
lyr_8SouthSeaRoad_103.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Rating': 'Rating', 'layer': 'layer', 'path': 'path', });
lyr_7RedriffRoad_104.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Rating': 'Rating', 'layer': 'layer', 'path': 'path', });
lyr_5QuebecWay_105.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Rating': 'Rating', 'layer': 'layer', 'path': 'path', });
lyr_4SalterRoadSouth_106.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Rating': 'Rating', 'layer': 'layer', 'path': 'path', });
lyr_3SwanRoad_107.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Rating': 'Rating', 'layer': 'layer', 'path': 'path', });
lyr_3SalterRoadNorth_108.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Rating': 'Rating', 'layer': 'layer', 'path': 'path', });
lyr_2BrunelRoad_109.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Rating': 'Rating', 'layer': 'layer', 'path': 'path', });
lyr_2RotherhitheStreet_110.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Rating': 'Rating', 'layer': 'layer', 'path': 'path', });
lyr_1BeatsonWalk_111.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Rating': 'Rating', 'layer': 'layer', 'path': 'path', });
lyr_Noname_112.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_15TheGrange_113.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_15CarriageDrive_114.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_14RouelRoad_115.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_13AlscottRoad_116.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_13DruidStreet_117.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_12RileyRoad_118.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_10AbbeyStreet_119.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_10TannerStreet_120.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_9OldJamaicaRoad_121.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_8EnidStreet_122.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_8ThurlandRoad_123.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_7StJamessRoad_124.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_6TrantonRoad_125.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_5ClementsRoad_126.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_4DrummondRoad_127.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_3SouthwarkParkRoad_128.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_2RaymouthRoad_129.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_1AbbeyfieldRoad_130.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', });
lyr_name_131.set('fieldAliases', {'fid': 'fid', });
lyr_Strategicnetwork_132.set('fieldAliases', {'fid': 'fid', });
lyr_19ShadThames_133.set('fieldAliases', {'fid': 'fid', });
lyr_18MillSt_134.set('fieldAliases', {'fid': 'fid', });
lyr_17Dockhead_135.set('fieldAliases', {'fid': 'fid', });
lyr_16GeorgeRow_136.set('fieldAliases', {'fid': 'fid', });
lyr_15ChambersSt_137.set('fieldAliases', {'fid': 'fid', });
lyr_14LlewellynSt_138.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'path': 'path', });
lyr_13BevingtonSt_139.set('fieldAliases', {'fid': 'fid', });
lyr_12MarigoldSt_140.set('fieldAliases', {'fid': 'fid', });
lyr_6Rotherhithe_141.set('fieldAliases', {'fid': 'fid', });
lyr_5TunnelRd_142.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'path': 'path', });
lyr_4SaintMarychurdRd_143.set('fieldAliases', {'fid': 'fid', });
lyr_3SwanRd_144.set('fieldAliases', {'fid': 'fid', });
lyr_Strategicnetwork_145.set('fieldAliases', {'fid': 'fid', });
lyr_14LongLane_146.set('fieldAliases', {'fid': 'fid', });
lyr_12PilgrimageSt_147.set('fieldAliases', {'fid': 'fid', });
lyr_11StapleSt_148.set('fieldAliases', {'fid': 'fid', });
lyr_9TabardSt_149.set('fieldAliases', {'fid': 'fid', });
lyr_9WestonSt_150.set('fieldAliases', {'fid': 'fid', });
lyr_8RothsaySt_151.set('fieldAliases', {'fid': 'fid', });
lyr_5BermondseySt_152.set('fieldAliases', {'fid': 'fid', });
lyr_StrategicNetwork_153.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Rating': 'Rating', 'layer': 'layer', 'path': 'path', });
lyr_SLB_154.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Rating': 'Rating', 'layer': 'layer', 'path': 'path', });
lyr_15FalmouthRd_155.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Rating': 'Rating', 'layer': 'layer', 'path': 'path', });
lyr_15FalmouthRd_156.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Rating': 'Rating', 'layer': 'layer', 'path': 'path', });
lyr_18BrockhamSt_157.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Rating': 'Rating', 'layer': 'layer', 'path': 'path', });
lyr_14DeverellSt_158.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Rating': 'Rating', 'layer': 'layer', 'path': 'path', });
lyr_16FalmouthRd_159.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Rating': 'Rating', 'layer': 'layer', 'path': 'path', });
lyr_fid_586_160.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Rating': 'Rating', 'layer': 'layer', 'path': 'path', });
lyr_15TrinitySt_161.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Rating': 'Rating', 'layer': 'layer', 'path': 'path', });
lyr_Strategicnetwork_162.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'layer': 'layer', 'path': 'path', });
lyr_Legacyprojects_163.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'layer': 'layer', 'path': 'path', });
lyr_14LongLane_164.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'layer': 'layer', 'path': 'path', });
lyr_10LeathermarketTannerSt_165.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'layer': 'layer', 'path': 'path', });
lyr_9Weston_166.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'layer': 'layer', 'path': 'path', });
lyr_7HolyroodSt_167.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'layer': 'layer', 'path': 'path', });
lyr_5NewcomenSt_168.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'layer': 'layer', 'path': 'path', });
lyr_Strategicnetwork_169.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'layer': 'layer', 'path': 'path', 'Rating': 'Rating', });
lyr_Inprogress_170.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'layer': 'layer', 'path': 'path', 'Rating': 'Rating', });
lyr_SG8OntarioSt_171.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'layer': 'layer', 'path': 'path', 'Rating': 'Rating', });
lyr_SG7KeyworthSt_172.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'layer': 'layer', 'path': 'path', 'Rating': 'Rating', });
lyr_SG2LancasterSt_173.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'layer': 'layer', 'path': 'path', 'Rating': 'Rating', });
lyr_18Bankside_174.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'layer': 'layer', 'path': 'path', 'Rating': 'Rating', });
lyr_17NicholsonSt_175.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'layer': 'layer', 'path': 'path', 'Rating': 'Rating', });
lyr_16SumnerSt_176.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'layer': 'layer', 'path': 'path', 'Rating': 'Rating', });
lyr_15GreatGuildfordSt_177.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'layer': 'layer', 'path': 'path', 'Rating': 'Rating', });
lyr_12MarshalseaRd_178.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'layer': 'layer', 'path': 'path', 'Rating': 'Rating', });
lyr_11RedcrossWay_179.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'layer': 'layer', 'path': 'path', 'Rating': 'Rating', });
lyr_10SawyerSt_180.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'layer': 'layer', 'path': 'path', 'Rating': 'Rating', });
lyr_8GreatSuffolkSt_181.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'layer': 'layer', 'path': 'path', 'Rating': 'Rating', });
lyr_6UnionSt_182.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'layer': 'layer', 'path': 'path', 'Rating': 'Rating', });
lyr_SfPboundary_0.set('fieldImages', {'ZoneName': 'TextEdit', 'Type': 'TextEdit', 'fid': 'TextEdit', });
lyr_StGiles_1.set('fieldImages', {'fid': '', 'id': '', });
lyr_NorthWalworth_2.set('fieldImages', {'fid': '', 'id': '', });
lyr_Faraday_3.set('fieldImages', {'fid': '', 'id': '', });
lyr_Peckham_4.set('fieldImages', {'fid': '', 'id': '', });
lyr_OldKentRd_5.set('fieldImages', {'fid': '', 'id': '', 'layer': '', 'path': '', });
lyr_CamberwellGreen_6.set('fieldImages', {'fid': '', 'id': '', });
lyr_SLB_7.set('fieldImages', {'fid': '', });
lyr_TLRN_8.set('fieldImages', {'fid': '', });
lyr_17JohnMauriceClose_9.set('fieldImages', {'fid': 'TextEdit', });
lyr_14DarwinStreet_10.set('fieldImages', {'fid': 'TextEdit', });
lyr_13BeckwayStreet_11.set('fieldImages', {'fid': 'TextEdit', });
lyr_7EastStreet_12.set('fieldImages', {'fid': 'TextEdit', });
lyr_12AlveyStreet_13.set('fieldImages', {'fid': 'TextEdit', });
lyr_9Beaconsfield_14.set('fieldImages', {'fid': 'TextEdit', });
lyr_2AlbanyRoad_15.set('fieldImages', {'fid': 'TextEdit', });
lyr_11NeateStreet_16.set('fieldImages', {'fid': 'TextEdit', });
lyr_4TrafalgarAvenue_17.set('fieldImages', {'fid': 'TextEdit', });
lyr_10GlengallRoad_18.set('fieldImages', {'fid': 'TextEdit', });
lyr_9StGeorgesWay_19.set('fieldImages', {'fid': 'TextEdit', });
lyr_1HaymerleRoad_20.set('fieldImages', {'fid': 'TextEdit', });
lyr_10BurgessPark_21.set('fieldImages', {'fid': 'TextEdit', });
lyr_8MerrowStreet_22.set('fieldImages', {'fid': 'TextEdit', });
lyr_4OrbitStreet_23.set('fieldImages', {'fid': 'TextEdit', });
lyr_3PeckhamParkRoad_24.set('fieldImages', {'fid': 'TextEdit', });
lyr_6WillowbrookRoad_25.set('fieldImages', {'fid': 'TextEdit', });
lyr_2BirdinBushRoad_26.set('fieldImages', {'fid': 'TextEdit', });
lyr_5NaylorRoad_27.set('fieldImages', {'fid': 'TextEdit', });
lyr_17CliftonWay_28.set('fieldImages', {'fid': 'TextEdit', });
lyr_12ElephantRoad_29.set('fieldImages', {'fid': 'TextEdit', });
lyr_4PomeroyStreet_30.set('fieldImages', {'fid': 'TextEdit', });
lyr_1AsylumRoad_31.set('fieldImages', {'fid': 'TextEdit', });
lyr_2CarltonGrove_32.set('fieldImages', {'fid': 'TextEdit', });
lyr_14MarmontRoad_33.set('fieldImages', {'fid': 'TextEdit', });
lyr_16FurleyRoad_34.set('fieldImages', {'fid': 'TextEdit', });
lyr_13BullerClose_35.set('fieldImages', {'fid': 'TextEdit', });
lyr_8SumnerRoad_36.set('fieldImages', {'fid': 'TextEdit', });
lyr_7PeckhamHillStreet_37.set('fieldImages', {'fid': 'TextEdit', });
lyr_2cBowyerPlSouthamptonWy_38.set('fieldImages', {'fid': 'TextEdit', });
lyr_6HavilStreet_39.set('fieldImages', {'fid': 'TextEdit', });
lyr_17KellyAvenue_40.set('fieldImages', {'fid': 'TextEdit', });
lyr_1GroveKimptonRoad_41.set('fieldImages', {'fid': 'TextEdit', });
lyr_14EdmundStreet_42.set('fieldImages', {'fid': 'TextEdit', });
lyr_6ElmingtonRoad_43.set('fieldImages', {'fid': 'TextEdit', });
lyr_12DanielGardens_44.set('fieldImages', {'fid': 'TextEdit', });
lyr_11ChandlerWay_45.set('fieldImages', {'fid': 'TextEdit', });
lyr_18LynbrookGrove_46.set('fieldImages', {'fid': 'TextEdit', });
lyr_10PeckhamGrove_47.set('fieldImages', {'fid': 'TextEdit', });
lyr_9WellsWay_48.set('fieldImages', {'fid': 'TextEdit', });
lyr_5BrandonStreet_49.set('fieldImages', {'fid': 'TextEdit', });
lyr_6BrowningStreet_50.set('fieldImages', {'fid': 'TextEdit', });
lyr_Noname_51.set('fieldImages', {'fid': 'TextEdit', });
lyr_Noproposals_52.set('fieldImages', {'fid': 'TextEdit', });
lyr_TLRN_53.set('fieldImages', {'fid': 'TextEdit', });
lyr_SRN_54.set('fieldImages', {'fid': 'TextEdit', });
lyr_13PentonPlace_55.set('fieldImages', {'fid': 'TextEdit', });
lyr_12PaselyPark_56.set('fieldImages', {'fid': 'TextEdit', });
lyr_11OttoStreetFlemmingRoad_57.set('fieldImages', {'fid': 'TextEdit', });
lyr_10cThompsonSultanCrown_58.set('fieldImages', {'fid': 'TextEdit', });
lyr_10AmeliaStreet_59.set('fieldImages', {'fid': 'TextEdit', });
lyr_9wManorPlace_60.set('fieldImages', {'fid': 'TextEdit', });
lyr_9cBethwinRoad_61.set('fieldImages', {'fid': 'TextEdit', });
lyr_9LorrimoreRoad_62.set('fieldImages', {'fid': 'TextEdit', });
lyr_8wHamptonStreet_63.set('fieldImages', {'fid': 'TextEdit', });
lyr_8cGrosvenorTerrace_64.set('fieldImages', {'fid': 'TextEdit', });
lyr_8DeLauneStreet_65.set('fieldImages', {'fid': 'TextEdit', });
lyr_7DracoStreet_66.set('fieldImages', {'fid': 'TextEdit', });
lyr_6PenroseStreet_67.set('fieldImages', {'fid': 'TextEdit', });
lyr_5ChapterRoad_68.set('fieldImages', {'fid': 'TextEdit', });
lyr_4BraganzaStreet_69.set('fieldImages', {'fid': 'TextEdit', });
lyr_3CooksRoad_70.set('fieldImages', {'fid': 'TextEdit', });
lyr_TLRN_71.set('fieldImages', {'fid': '', });
lyr_Noproposals_72.set('fieldImages', {'fid': 'TextEdit', });
lyr_ExistingLBSScheme_73.set('fieldImages', {'fid': 'TextEdit', });
lyr_29ReverdyRoad_74.set('fieldImages', {'fid': 'TextEdit', });
lyr_28MarlboroughGrove_75.set('fieldImages', {'fid': 'TextEdit', });
lyr_27StubbsDrive_76.set('fieldImages', {'fid': 'TextEdit', });
lyr_26CamillaRoad_77.set('fieldImages', {'fid': 'TextEdit', });
lyr_20Mawbey_Coopers_78.set('fieldImages', {'fid': 'TextEdit', });
lyr_20MandelaWay_79.set('fieldImages', {'fid': 'TextEdit', });
lyr_19DuntonRoad_80.set('fieldImages', {'fid': 'TextEdit', });
lyr_19CrimscottStreet_81.set('fieldImages', {'fid': 'TextEdit', });
lyr_18RowcrossStreet_82.set('fieldImages', {'fid': 'TextEdit', });
lyr_17Oxley_Abercorn_83.set('fieldImages', {'fid': 'TextEdit', });
lyr_18PagesWalk_84.set('fieldImages', {'fid': 'TextEdit', });
lyr_16CatlinStreet_85.set('fieldImages', {'fid': 'TextEdit', });
lyr_15GalleywayRoad_86.set('fieldImages', {'fid': 'TextEdit', });
lyr_17WebbStreet_87.set('fieldImages', {'fid': 'TextEdit', });
lyr_13Alscot_88.set('fieldImages', {'fid': 'TextEdit', });
lyr_12LyntonRoad_89.set('fieldImages', {'fid': 'TextEdit', });
lyr_9Willlow_Tanner_90.set('fieldImages', {'fid': 'TextEdit', });
lyr_7StevensonCrescent_91.set('fieldImages', {'fid': 'TextEdit', });
lyr_6RollsRoad_92.set('fieldImages', {'fid': 'TextEdit', });
lyr_5SouthwarkPark_93.set('fieldImages', {'fid': 'TextEdit', });
lyr_4GrangeRoad_94.set('fieldImages', {'fid': 'TextEdit', });
lyr_2StJamessRoad_95.set('fieldImages', {'fid': 'TextEdit', });
lyr_Noproposals_96.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Rating': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_ExistingLBSScheme_97.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Rating': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_16TimberPondRoad_98.set('fieldImages', {'fid': 'TextEdit', 'id': '', 'Rating': '', 'layer': '', 'path': '', });
lyr_11PloughWay_99.set('fieldImages', {'fid': 'TextEdit', 'id': '', 'Rating': '', 'layer': '', 'path': '', });
lyr_10RobertsClose_100.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Rating': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_6CanadaStreet_101.set('fieldImages', {'fid': 'TextEdit', });
lyr_9SurreyQuaysRoad_102.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Rating': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_8SouthSeaRoad_103.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Rating': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_7RedriffRoad_104.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Rating': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_5QuebecWay_105.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Rating': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_4SalterRoadSouth_106.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Rating': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_3SwanRoad_107.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Rating': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_3SalterRoadNorth_108.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Rating': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_2BrunelRoad_109.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Rating': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_2RotherhitheStreet_110.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Rating': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_1BeatsonWalk_111.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Rating': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Noname_112.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', });
lyr_15TheGrange_113.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', });
lyr_15CarriageDrive_114.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', });
lyr_14RouelRoad_115.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', });
lyr_13AlscottRoad_116.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', });
lyr_13DruidStreet_117.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', });
lyr_12RileyRoad_118.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', });
lyr_10AbbeyStreet_119.set('fieldImages', {'fid': 'TextEdit', 'layer': '', });
lyr_10TannerStreet_120.set('fieldImages', {'fid': 'TextEdit', 'layer': '', });
lyr_9OldJamaicaRoad_121.set('fieldImages', {'fid': 'TextEdit', 'layer': '', });
lyr_8EnidStreet_122.set('fieldImages', {'fid': 'TextEdit', 'layer': '', });
lyr_8ThurlandRoad_123.set('fieldImages', {'fid': 'TextEdit', 'layer': '', });
lyr_7StJamessRoad_124.set('fieldImages', {'fid': 'TextEdit', 'layer': '', });
lyr_6TrantonRoad_125.set('fieldImages', {'fid': 'TextEdit', 'layer': '', });
lyr_5ClementsRoad_126.set('fieldImages', {'fid': 'TextEdit', 'layer': '', });
lyr_4DrummondRoad_127.set('fieldImages', {'fid': 'TextEdit', 'layer': '', });
lyr_3SouthwarkParkRoad_128.set('fieldImages', {'fid': 'TextEdit', 'layer': '', });
lyr_2RaymouthRoad_129.set('fieldImages', {'fid': 'TextEdit', 'layer': '', });
lyr_1AbbeyfieldRoad_130.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', });
lyr_name_131.set('fieldImages', {'fid': 'TextEdit', });
lyr_Strategicnetwork_132.set('fieldImages', {'fid': 'TextEdit', });
lyr_19ShadThames_133.set('fieldImages', {'fid': 'TextEdit', });
lyr_18MillSt_134.set('fieldImages', {'fid': 'TextEdit', });
lyr_17Dockhead_135.set('fieldImages', {'fid': 'TextEdit', });
lyr_16GeorgeRow_136.set('fieldImages', {'fid': 'TextEdit', });
lyr_15ChambersSt_137.set('fieldImages', {'fid': 'TextEdit', });
lyr_14LlewellynSt_138.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_13BevingtonSt_139.set('fieldImages', {'fid': 'TextEdit', });
lyr_12MarigoldSt_140.set('fieldImages', {'fid': 'TextEdit', });
lyr_6Rotherhithe_141.set('fieldImages', {'fid': 'TextEdit', });
lyr_5TunnelRd_142.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_4SaintMarychurdRd_143.set('fieldImages', {'fid': 'TextEdit', });
lyr_3SwanRd_144.set('fieldImages', {'fid': 'TextEdit', });
lyr_Strategicnetwork_145.set('fieldImages', {'fid': 'TextEdit', });
lyr_14LongLane_146.set('fieldImages', {'fid': 'TextEdit', });
lyr_12PilgrimageSt_147.set('fieldImages', {'fid': 'TextEdit', });
lyr_11StapleSt_148.set('fieldImages', {'fid': 'TextEdit', });
lyr_9TabardSt_149.set('fieldImages', {'fid': 'TextEdit', });
lyr_9WestonSt_150.set('fieldImages', {'fid': 'TextEdit', });
lyr_8RothsaySt_151.set('fieldImages', {'fid': 'TextEdit', });
lyr_5BermondseySt_152.set('fieldImages', {'fid': 'TextEdit', });
lyr_StrategicNetwork_153.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Rating': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_SLB_154.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Rating': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_15FalmouthRd_155.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Rating': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_15FalmouthRd_156.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Rating': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_18BrockhamSt_157.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Rating': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_14DeverellSt_158.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Rating': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_16FalmouthRd_159.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Rating': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_fid_586_160.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Rating': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_15TrinitySt_161.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Rating': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Strategicnetwork_162.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Legacyprojects_163.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_14LongLane_164.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_10LeathermarketTannerSt_165.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_9Weston_166.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_7HolyroodSt_167.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_5NewcomenSt_168.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Strategicnetwork_169.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'Rating': 'TextEdit', });
lyr_Inprogress_170.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'Rating': 'TextEdit', });
lyr_SG8OntarioSt_171.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'Rating': 'TextEdit', });
lyr_SG7KeyworthSt_172.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'Rating': 'TextEdit', });
lyr_SG2LancasterSt_173.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'Rating': 'TextEdit', });
lyr_18Bankside_174.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'Rating': 'TextEdit', });
lyr_17NicholsonSt_175.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'Rating': 'TextEdit', });
lyr_16SumnerSt_176.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'Rating': 'TextEdit', });
lyr_15GreatGuildfordSt_177.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'Rating': 'TextEdit', });
lyr_12MarshalseaRd_178.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'Rating': 'TextEdit', });
lyr_11RedcrossWay_179.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'Rating': 'TextEdit', });
lyr_10SawyerSt_180.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'Rating': 'TextEdit', });
lyr_8GreatSuffolkSt_181.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'Rating': 'TextEdit', });
lyr_6UnionSt_182.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'Rating': 'TextEdit', });
lyr_SfPboundary_0.set('fieldLabels', {'ZoneName': 'no label', 'Type': 'no label', 'fid': 'no label', });
lyr_StGiles_1.set('fieldLabels', {'fid': 'no label', 'id': 'no label', });
lyr_NorthWalworth_2.set('fieldLabels', {'fid': 'no label', 'id': 'no label', });
lyr_Faraday_3.set('fieldLabels', {'fid': 'no label', 'id': 'no label', });
lyr_Peckham_4.set('fieldLabels', {'fid': 'no label', 'id': 'no label', });
lyr_OldKentRd_5.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_CamberwellGreen_6.set('fieldLabels', {'fid': 'no label', 'id': 'no label', });
lyr_SLB_7.set('fieldLabels', {'fid': 'no label', });
lyr_TLRN_8.set('fieldLabels', {'fid': 'no label', });
lyr_17JohnMauriceClose_9.set('fieldLabels', {'fid': 'no label', });
lyr_14DarwinStreet_10.set('fieldLabels', {'fid': 'no label', });
lyr_13BeckwayStreet_11.set('fieldLabels', {'fid': 'no label', });
lyr_7EastStreet_12.set('fieldLabels', {'fid': 'no label', });
lyr_12AlveyStreet_13.set('fieldLabels', {'fid': 'no label', });
lyr_9Beaconsfield_14.set('fieldLabels', {'fid': 'no label', });
lyr_2AlbanyRoad_15.set('fieldLabels', {'fid': 'no label', });
lyr_11NeateStreet_16.set('fieldLabels', {'fid': 'no label', });
lyr_4TrafalgarAvenue_17.set('fieldLabels', {'fid': 'no label', });
lyr_10GlengallRoad_18.set('fieldLabels', {'fid': 'no label', });
lyr_9StGeorgesWay_19.set('fieldLabels', {'fid': 'no label', });
lyr_1HaymerleRoad_20.set('fieldLabels', {'fid': 'no label', });
lyr_10BurgessPark_21.set('fieldLabels', {'fid': 'no label', });
lyr_8MerrowStreet_22.set('fieldLabels', {'fid': 'no label', });
lyr_4OrbitStreet_23.set('fieldLabels', {'fid': 'no label', });
lyr_3PeckhamParkRoad_24.set('fieldLabels', {'fid': 'no label', });
lyr_6WillowbrookRoad_25.set('fieldLabels', {'fid': 'no label', });
lyr_2BirdinBushRoad_26.set('fieldLabels', {'fid': 'no label', });
lyr_5NaylorRoad_27.set('fieldLabels', {'fid': 'no label', });
lyr_17CliftonWay_28.set('fieldLabels', {'fid': 'no label', });
lyr_12ElephantRoad_29.set('fieldLabels', {'fid': 'no label', });
lyr_4PomeroyStreet_30.set('fieldLabels', {'fid': 'no label', });
lyr_1AsylumRoad_31.set('fieldLabels', {'fid': 'no label', });
lyr_2CarltonGrove_32.set('fieldLabels', {'fid': 'no label', });
lyr_14MarmontRoad_33.set('fieldLabels', {'fid': 'no label', });
lyr_16FurleyRoad_34.set('fieldLabels', {'fid': 'no label', });
lyr_13BullerClose_35.set('fieldLabels', {'fid': 'no label', });
lyr_8SumnerRoad_36.set('fieldLabels', {'fid': 'no label', });
lyr_7PeckhamHillStreet_37.set('fieldLabels', {'fid': 'no label', });
lyr_2cBowyerPlSouthamptonWy_38.set('fieldLabels', {'fid': 'no label', });
lyr_6HavilStreet_39.set('fieldLabels', {'fid': 'no label', });
lyr_17KellyAvenue_40.set('fieldLabels', {'fid': 'no label', });
lyr_1GroveKimptonRoad_41.set('fieldLabels', {'fid': 'no label', });
lyr_14EdmundStreet_42.set('fieldLabels', {'fid': 'no label', });
lyr_6ElmingtonRoad_43.set('fieldLabels', {'fid': 'no label', });
lyr_12DanielGardens_44.set('fieldLabels', {'fid': 'no label', });
lyr_11ChandlerWay_45.set('fieldLabels', {'fid': 'no label', });
lyr_18LynbrookGrove_46.set('fieldLabels', {'fid': 'no label', });
lyr_10PeckhamGrove_47.set('fieldLabels', {'fid': 'no label', });
lyr_9WellsWay_48.set('fieldLabels', {'fid': 'no label', });
lyr_5BrandonStreet_49.set('fieldLabels', {'fid': 'no label', });
lyr_6BrowningStreet_50.set('fieldLabels', {'fid': 'no label', });
lyr_Noname_51.set('fieldLabels', {'fid': 'no label', });
lyr_Noproposals_52.set('fieldLabels', {'fid': 'no label', });
lyr_TLRN_53.set('fieldLabels', {'fid': 'no label', });
lyr_SRN_54.set('fieldLabels', {'fid': 'no label', });
lyr_13PentonPlace_55.set('fieldLabels', {'fid': 'no label', });
lyr_12PaselyPark_56.set('fieldLabels', {'fid': 'no label', });
lyr_11OttoStreetFlemmingRoad_57.set('fieldLabels', {'fid': 'no label', });
lyr_10cThompsonSultanCrown_58.set('fieldLabels', {'fid': 'no label', });
lyr_10AmeliaStreet_59.set('fieldLabels', {'fid': 'no label', });
lyr_9wManorPlace_60.set('fieldLabels', {'fid': 'no label', });
lyr_9cBethwinRoad_61.set('fieldLabels', {'fid': 'no label', });
lyr_9LorrimoreRoad_62.set('fieldLabels', {'fid': 'no label', });
lyr_8wHamptonStreet_63.set('fieldLabels', {'fid': 'no label', });
lyr_8cGrosvenorTerrace_64.set('fieldLabels', {'fid': 'no label', });
lyr_8DeLauneStreet_65.set('fieldLabels', {'fid': 'no label', });
lyr_7DracoStreet_66.set('fieldLabels', {'fid': 'no label', });
lyr_6PenroseStreet_67.set('fieldLabels', {'fid': 'no label', });
lyr_5ChapterRoad_68.set('fieldLabels', {'fid': 'no label', });
lyr_4BraganzaStreet_69.set('fieldLabels', {'fid': 'no label', });
lyr_3CooksRoad_70.set('fieldLabels', {'fid': 'no label', });
lyr_TLRN_71.set('fieldLabels', {'fid': 'no label', });
lyr_Noproposals_72.set('fieldLabels', {'fid': 'no label', });
lyr_ExistingLBSScheme_73.set('fieldLabels', {'fid': 'no label', });
lyr_29ReverdyRoad_74.set('fieldLabels', {'fid': 'no label', });
lyr_28MarlboroughGrove_75.set('fieldLabels', {'fid': 'no label', });
lyr_27StubbsDrive_76.set('fieldLabels', {'fid': 'no label', });
lyr_26CamillaRoad_77.set('fieldLabels', {'fid': 'no label', });
lyr_20Mawbey_Coopers_78.set('fieldLabels', {'fid': 'no label', });
lyr_20MandelaWay_79.set('fieldLabels', {'fid': 'no label', });
lyr_19DuntonRoad_80.set('fieldLabels', {'fid': 'no label', });
lyr_19CrimscottStreet_81.set('fieldLabels', {'fid': 'no label', });
lyr_18RowcrossStreet_82.set('fieldLabels', {'fid': 'no label', });
lyr_17Oxley_Abercorn_83.set('fieldLabels', {'fid': 'no label', });
lyr_18PagesWalk_84.set('fieldLabels', {'fid': 'no label', });
lyr_16CatlinStreet_85.set('fieldLabels', {'fid': 'no label', });
lyr_15GalleywayRoad_86.set('fieldLabels', {'fid': 'no label', });
lyr_17WebbStreet_87.set('fieldLabels', {'fid': 'no label', });
lyr_13Alscot_88.set('fieldLabels', {'fid': 'no label', });
lyr_12LyntonRoad_89.set('fieldLabels', {'fid': 'no label', });
lyr_9Willlow_Tanner_90.set('fieldLabels', {'fid': 'no label', });
lyr_7StevensonCrescent_91.set('fieldLabels', {'fid': 'no label', });
lyr_6RollsRoad_92.set('fieldLabels', {'fid': 'no label', });
lyr_5SouthwarkPark_93.set('fieldLabels', {'fid': 'no label', });
lyr_4GrangeRoad_94.set('fieldLabels', {'fid': 'no label', });
lyr_2StJamessRoad_95.set('fieldLabels', {'fid': 'no label', });
lyr_Noproposals_96.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Rating': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_ExistingLBSScheme_97.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Rating': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_16TimberPondRoad_98.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Rating': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_11PloughWay_99.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Rating': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_10RobertsClose_100.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Rating': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_6CanadaStreet_101.set('fieldLabels', {'fid': 'no label', });
lyr_9SurreyQuaysRoad_102.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Rating': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_8SouthSeaRoad_103.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Rating': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_7RedriffRoad_104.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Rating': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_5QuebecWay_105.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Rating': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_4SalterRoadSouth_106.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Rating': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_3SwanRoad_107.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Rating': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_3SalterRoadNorth_108.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Rating': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_2BrunelRoad_109.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Rating': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_2RotherhitheStreet_110.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Rating': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_1BeatsonWalk_111.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Rating': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Noname_112.set('fieldLabels', {'fid': 'no label', 'layer': 'no label', });
lyr_15TheGrange_113.set('fieldLabels', {'fid': 'no label', 'layer': 'no label', });
lyr_15CarriageDrive_114.set('fieldLabels', {'fid': 'no label', 'layer': 'no label', });
lyr_14RouelRoad_115.set('fieldLabels', {'fid': 'no label', 'layer': 'no label', });
lyr_13AlscottRoad_116.set('fieldLabels', {'fid': 'no label', 'layer': 'no label', });
lyr_13DruidStreet_117.set('fieldLabels', {'fid': 'no label', 'layer': 'no label', });
lyr_12RileyRoad_118.set('fieldLabels', {'fid': 'no label', 'layer': 'no label', });
lyr_10AbbeyStreet_119.set('fieldLabels', {'fid': 'no label', 'layer': 'no label', });
lyr_10TannerStreet_120.set('fieldLabels', {'fid': 'no label', 'layer': 'no label', });
lyr_9OldJamaicaRoad_121.set('fieldLabels', {'fid': 'no label', 'layer': 'no label', });
lyr_8EnidStreet_122.set('fieldLabels', {'fid': 'no label', 'layer': 'no label', });
lyr_8ThurlandRoad_123.set('fieldLabels', {'fid': 'no label', 'layer': 'no label', });
lyr_7StJamessRoad_124.set('fieldLabels', {'fid': 'no label', 'layer': 'no label', });
lyr_6TrantonRoad_125.set('fieldLabels', {'fid': 'no label', 'layer': 'no label', });
lyr_5ClementsRoad_126.set('fieldLabels', {'fid': 'no label', 'layer': 'no label', });
lyr_4DrummondRoad_127.set('fieldLabels', {'fid': 'no label', 'layer': 'no label', });
lyr_3SouthwarkParkRoad_128.set('fieldLabels', {'fid': 'no label', 'layer': 'no label', });
lyr_2RaymouthRoad_129.set('fieldLabels', {'fid': 'no label', 'layer': 'no label', });
lyr_1AbbeyfieldRoad_130.set('fieldLabels', {'fid': 'no label', 'layer': 'no label', });
lyr_name_131.set('fieldLabels', {'fid': 'no label', });
lyr_Strategicnetwork_132.set('fieldLabels', {'fid': 'no label', });
lyr_19ShadThames_133.set('fieldLabels', {'fid': 'no label', });
lyr_18MillSt_134.set('fieldLabels', {'fid': 'no label', });
lyr_17Dockhead_135.set('fieldLabels', {'fid': 'no label', });
lyr_16GeorgeRow_136.set('fieldLabels', {'fid': 'no label', });
lyr_15ChambersSt_137.set('fieldLabels', {'fid': 'no label', });
lyr_14LlewellynSt_138.set('fieldLabels', {'fid': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_13BevingtonSt_139.set('fieldLabels', {'fid': 'no label', });
lyr_12MarigoldSt_140.set('fieldLabels', {'fid': 'no label', });
lyr_6Rotherhithe_141.set('fieldLabels', {'fid': 'no label', });
lyr_5TunnelRd_142.set('fieldLabels', {'fid': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_4SaintMarychurdRd_143.set('fieldLabels', {'fid': 'no label', });
lyr_3SwanRd_144.set('fieldLabels', {'fid': 'no label', });
lyr_Strategicnetwork_145.set('fieldLabels', {'fid': 'no label', });
lyr_14LongLane_146.set('fieldLabels', {'fid': 'no label', });
lyr_12PilgrimageSt_147.set('fieldLabels', {'fid': 'no label', });
lyr_11StapleSt_148.set('fieldLabels', {'fid': 'no label', });
lyr_9TabardSt_149.set('fieldLabels', {'fid': 'no label', });
lyr_9WestonSt_150.set('fieldLabels', {'fid': 'no label', });
lyr_8RothsaySt_151.set('fieldLabels', {'fid': 'no label', });
lyr_5BermondseySt_152.set('fieldLabels', {'fid': 'no label', });
lyr_StrategicNetwork_153.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Rating': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_SLB_154.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Rating': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_15FalmouthRd_155.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Rating': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_15FalmouthRd_156.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Rating': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_18BrockhamSt_157.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Rating': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_14DeverellSt_158.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Rating': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_16FalmouthRd_159.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Rating': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_fid_586_160.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Rating': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_15TrinitySt_161.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Rating': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Strategicnetwork_162.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Legacyprojects_163.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_14LongLane_164.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_10LeathermarketTannerSt_165.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_9Weston_166.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_7HolyroodSt_167.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_5NewcomenSt_168.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Strategicnetwork_169.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'layer': 'no label', 'path': 'no label', 'Rating': 'no label', });
lyr_Inprogress_170.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'layer': 'no label', 'path': 'no label', 'Rating': 'no label', });
lyr_SG8OntarioSt_171.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'layer': 'no label', 'path': 'no label', 'Rating': 'no label', });
lyr_SG7KeyworthSt_172.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'layer': 'no label', 'path': 'no label', 'Rating': 'no label', });
lyr_SG2LancasterSt_173.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'layer': 'no label', 'path': 'no label', 'Rating': 'no label', });
lyr_18Bankside_174.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'layer': 'no label', 'path': 'no label', 'Rating': 'no label', });
lyr_17NicholsonSt_175.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'layer': 'no label', 'path': 'no label', 'Rating': 'no label', });
lyr_16SumnerSt_176.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'layer': 'no label', 'path': 'no label', 'Rating': 'no label', });
lyr_15GreatGuildfordSt_177.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'layer': 'no label', 'path': 'no label', 'Rating': 'no label', });
lyr_12MarshalseaRd_178.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'layer': 'no label', 'path': 'no label', 'Rating': 'no label', });
lyr_11RedcrossWay_179.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'layer': 'no label', 'path': 'no label', 'Rating': 'no label', });
lyr_10SawyerSt_180.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'layer': 'no label', 'path': 'no label', 'Rating': 'no label', });
lyr_8GreatSuffolkSt_181.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'layer': 'no label', 'path': 'no label', 'Rating': 'no label', });
lyr_6UnionSt_182.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'layer': 'no label', 'path': 'no label', 'Rating': 'no label', });
lyr_6UnionSt_182.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});