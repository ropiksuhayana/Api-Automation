
const newman = require("newman");

newman.run({
    collection: require('../json-collection/rofiq_new.postman_collection.json'),
    environment: require('../json-env/rofiq-env.json'),
    reporters: ["cli", "htmlextra"],
    reporter: {
        htmlextra: {
            export: "./report/report.html", // path untuk hasil report
            title: "API Automation Report"
        }
    }
}, function (err, summary) {
    if (err) {
        console.error("Terjadi kesalahan saat menjalankan Newman:", err);
        process.exit(1);
    }
    console.log("Newman test selesai.");
});

