let sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const axios = require("axios")


async function task1() {
    console.log("临时任务开始")
    let ids = await axios.get("https://mirror.ghproxy.com/https://raw.githubusercontent.com/Wenmoux/sources/master/other/id.json");
    for (id of ids.data) {
        result += await jhy(id) + "\n"
    }
    let ids2 = await axios.get("https://mirror.ghproxy.com/https://raw.githubusercontent.com/Wenmoux/sources/master/other/id2.json");
    for (id of ids2.data) {
        await ddd(id)
    }
    await lottery("lottery","0",49)
 //   await slm()
    await glist(3)
    await getxz()
    await zn5()
}
