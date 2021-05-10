const createScan = require('ast-cli-javascript-wrapper/src/CxAuth');
let CxScanConfig = require('ast-cli-javascript-wrapper/src/CxScanConfig.js');


test('test', () => {
    let paramMap = new Map();
    paramMap.set("--project-name","JSScanTest");
    paramMap.set("--project-type","sast");
    paramMap.set("--preset-name","Checkmarx Default");
    paramMap.set("-d",".");

    var config = new CxScanConfig();
    config.baseuri = "https://master.cxast.com/"
    config.key = "test22"
    config.secret = "02f017ba-dd68-40b0-aec1-9e5a188ab001"
    config.paramMap = paramMap;
    
    createScan(config);
    
    expect(3).toBe(3);
});