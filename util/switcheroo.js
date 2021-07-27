const fs = require("fs")
const parse = require('node-html-parser').parse
const files = JSON.parse(fs.readFileSync("urls.json"))
const fetch = require("node-fetch")
let newe = []
let main = async () => {
    for (let i = 0; i < files.length; i++) {
        let res = await fetch(files[i].link)
        res = await res.text()
        let root = parse(res)
        if (root.querySelector(".file_body") == null) {
            console.log(res)
        } else {
            newe.push({link:root.querySelector(".file_body").getAttribute("href"), width:files[i].width, height:files[i].height})
        }
    }
    fs.writeFile("pub.json", JSON.stringify(newe), function(err) {
        if (err) {
            console.log(err);
        }
    });
}
main()