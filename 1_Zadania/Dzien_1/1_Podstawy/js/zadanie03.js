function SampleTypes() {
    var sampleString='Test';
    var sampleNumber=5;
    var sampleBoolean = true;
    var sampleObject={
        name:'Sample Name',
        surname:'Sample Surname',
        age: 5
    }
    var sampleArray = [1,[2],'Ala'];
    var samplespecial = null;

    console.log('sampleString+sampleNumber');
    console.log(sampleString+sampleNumber);
    console.log(typeof (sampleString+sampleNumber));

    console.log('sampleString+sampleBoolean');
    console.log(sampleString+sampleBoolean);
    console.log(typeof (sampleString+sampleBoolean));

    console.log('sampleNumber+sampleBoolean');
    console.log(sampleNumber+sampleBoolean);
    console.log(typeof (sampleString+sampleBoolean));

    console.log('sampleObject+sampleArray');
    console.log(sampleObject+sampleArray);
    console.log(typeof (sampleObject+sampleArray));

    console.log('sampleBoolean+samplespecial');
    console.log(sampleBoolean+samplespecial);
    console.log(typeof (sampleBoolean+samplespecial));
}

SampleTypes();
