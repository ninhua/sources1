let sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

/*async function zhuli() {
    await get("2021zhuli", "login")
    for (i of new Array(5)) {
        await get("2021zhuli", "share")
    } //分享
    for (i of [1, 2, 3, 4, 5]) {
        await get("2021zhuli", `checklingqu&num=${i}`)
        await get("2021zhuli", `lingqu&num=${i}`)
    }
    await get("friend", "LingXinrenFuli")
    await get("yearend", "login")
    await get("yearend", "send&content=新年快乐&status=0")
}

*/

//  助力抽奖通用
async function jhy(id) {
    let logindata = await get("zhuli", `login&comm_id=${id}`)
    if (logindata.loginStatus == 100 && logindata.key == "ok") {
        uid = logindata.config.uid
        for (i = 0; i < 3; i++) {
            await get("zhuli", `zhuli&uid=${uid}&comm_id=${id}`)
            await get("zhuli", `choujiang&isdown=1&comm_id=${id}`)
            await sleep(1000)
        }
    }
}

//快爆粉丝福利80080
async function lottery2(a, b, c) {
    await get(`${a}/m`, `login&comm_id=${b}&isyuyue=0`)
    for (i of c) {
        await get(`${a}/m`, `DailyAppJump&comm_id=${b}&isyuyue=0&id=${i}`)
        await get(`${a}/m`, `DailyAppLing&comm_id=${b}&isyuyue=0&id=${i}`)
        await get(`${a}/m`, `chouqu&comm_id=${b}&isyuyue=0&id=${i}`)
        await get(`${a}/m`, `BaoXiangLing&comm_id=${b}&isyuyue=0&id=${i}`)
    }
    for (lid of [3, 4, 5]) {
        await get(`lottery/m`, `duihuanprize&comm_id=${lid}&resure=1&isyuyue=0&dhid=6`)
        await get(`lottery/m`, `duihuanprize&comm_id=${lid}&resure=1&isyuyue=0&dhid=5`)
    }

}

//游戏单  4.8
async function glist() {
    for (typeid of ["qq", "wx", "weibo"]) {
        await get("glist", `share&typeid=${typeid}&comm_id=1`)
        await sleep(1000)
    }
    await get("glist", "receiveBmh&comm_id=1")

}
async function task1() {
    console.log(`临时任务列表：
1：粉丝福利12344,80080,25525,630630,79979都可以去首页搜索对应数字绑定qq
2：游戏单第7期
3：2021助力活动`)
  //  await zhuli()
   await get("yyzl/m","giftCode&comm_id=17&shareCode=4cae9d15aa53c&isyuyue=0&is_down=1")

    console.log("粉丝福利任务开始,记得去app中首页分别搜索80080 25525 630630 79979进行qq号绑定哦！！")
    await lottery2("lottery2", 2, [1, 2, 3, 6, 7, 8,9])
    await lottery2("lottery", 5, [1, 2, 3, 4, 6, 7])
    await lottery2("lottery", 4, [1, 2, 4, 5, 6, 8,14])
    await lottery2("lottery", 3, [1, 2, 3, 6, 7, 8, 14])
    await lottery2("lottery", 9, [1, 3, 4, 5, 7, 8])
    //await get(`lottery/m`, "duihuanprize&comm_id=9&resure=1&isyuyue=0&dhid=2")
   // await get(`lottery/m`, "duihuanprize&comm_id=9&resure=1&isyuyue=0&dhid=1")
    result += "粉丝福利任务开始,记得去app中首页分别搜索80080 25525 630630 79979进行qq号绑定哦！！"
    console.log("四周年活动开始,请去活动里绑定qq哦,社区-四周年-活动1")
 //   await glist()
    for (id of [33,34,35,36]){
    await jhy(id)
    }   
}