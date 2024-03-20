module.paths.push("/usr/local/lib/node_modules");
module.paths.push("/media/ubuntu/5F906D2039164F88/Projects/AcronisTIBParser/Attempt2/acronis-tib/dist");

const archive = require('archive');
const volume = require('win/volume');
// https://stackoverflow.com/questions/33007878/nodejs-typeerror-require-is-not-a-function : "For me, when I do Immediately invoked function, I need to put ; at the end of require()."

// https://stackoverflow.com/questions/46515764/how-can-i-use-async-await-at-the-top-level
(async () => {
    try {
	//v = await volume.Windows2015Volume.Open('../../MySamples/Black_XPS_Primary_HHDD_inc_b1_s16_v1.tib');
	fname = process.argv[2];
	console.log(fname);
	v = await volume.Windows2015Volume.Open(fname);
	
	console.log(v);
	//console.log(v.header);
	
	//await v.readAll("outputFolder");
	
	fo = await v.readFooter();
	console.log(fo);
    } catch (e) {
        // Deal with the fact the chain failed
        console.log(e)
    }
})();
