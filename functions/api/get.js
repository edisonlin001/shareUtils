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
        res1: {
            title: "Python零基础教程",
            desc: "2025最新版，入门到实战",
            quark: "",
            baidu: "https://pan.baidu.com/s/xxx"
        }
    };

    // 如果参数不存在 → 返回无效标记
    if (!p || !data[p]) {
        return Response.json({ valid: false });
    }

    return Response.json(data[p]);
}