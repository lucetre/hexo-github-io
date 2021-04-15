
YUI().use('dial', function(Y) {

    var dial = new Y.Dial({
        min:100,
        max:1000,
        stepsPerRevolution:100,
        value: 260,
        diameter: 130,
        strings:{label:'Frequency (Hz):', resetStr: 'Reset', tooltipHandle: 'Drag & Set'},
    });
    dial.render('#demo');

});