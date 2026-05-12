export async function onRequest({ request }) {
    const url = new URL(request.url);
    const p = url.searchParams.get('p');

    // 你的资源库
    const data = {
        pr24: {
            title: "PR24 mac版安装包",
            desc: "只支持m芯片",
            quark: "https://pan.quark.cn/s/ba2abf643368?pwd=2bcy",
            baidu: ""
        },
        pI3oiOfKAAKz: {
            title: "百元之恋",
            desc: "早已过了而立之年的一子（安藤樱 饰）整天百无聊赖，她根本无心帮助打理自家的料理店，整日玩游戏虐杀小外甥。她的妹妹二三子（早织 饰）离婚后回到娘家，极度看不惯姐姐的作为，为此两姐妹甚至大打出手。自感不被家人所容的一子搬了出去，并在日常光顾的百元超市谋得收银员的职位。这间小 店云集着许多怪人，患有忧郁症的店长、话唠猥琐的同事、因盗窃被开除却还时常回来拿临过期食品的老太。在这些人中间，一子的心情愈加苦闷。偶然机缘，她和名不见经传的拳击手狩野（新井浩文 饰）走到一起，无奈他们之间甚至连爱情都谈不上。极度压抑之际一子选择学习拳击，她渴望释放心中的委屈和不满，渴望获得哪怕只有一次的认可。",
            quark: "https://pan.quark.cn/s/f2bc4eec54b1?pwd=Rz9P",
            baidu: ""
        }
    };

    // 如果参数不存在 → 返回无效标记
    if (!p || !data[p]) {
        return Response.json({ valid: false });
    }

    return Response.json(data[p]);
}