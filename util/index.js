require("dotenv").config()
const fetch = require("node-fetch")
var fs = require('fs');
let main = async () => {
    let total = []
    for (let i = 1; i < 6; i++) {
        let res = await fetch(`https://slack.com/api/files.list?channel=C027PNUCBST&page=${i}&pretty=1`, {
            headers: {
                "Authorization": "Bearer "+process.env.SLACK
            }
        })
        res = await res.json()
        res.files.map(v => {
            if (v.public_url_shared) {
                total.push({link:v.permalink_public, width:v.original_w, height:v.original_h})
            } else {
            total.push(v.id)
        }
        })
    }
    
    for (let i = 0; i < total.length; i++) {
        if (total[i][0] == "F") {
            let res = await fetch(`https://slack.com/api/files.sharedPublicURL?file=${total[i]}&pretty=1`, {
                headers: {
                    "Authorization": "Bearer "+process.env.SLACK_USER
                }
            })
            res = await res.json()
            console.log(res)
            total[i] = {link:res.file.permalink_public, width:res.file.original_w, height: res.file.original_h}
        }
    }
    fs.writeFile("urls.json", JSON.stringify(total), function(err) {
        if (err) {
            console.log(err);
        }
    });
}
main()