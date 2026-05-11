export async function onRequest({ request }) {
    const url = new URL(request.url);
    const p = url.searchParams.get('p') || 'res0';

    // 所有资源全部放在这里，前端完全看不到
    const data = {
        res0: {
            title: "PS2025全套工具包",
            desc: "含安装包+插件+教程+滤镜，一键安装使用",
            quark: "https://pan.quark.cn/s/ba2abf643368?pwd=2bcy",
            baidu: "https://pan.baidu.com/s/1SttWSd9Hb_CW4yGcnGA2iw?pwd=5k4t"
        },
        res1: {
            title: "Python零基础全套教程",
            desc: "2025最新版，从入门到实战，课件源码齐全",
            quark: "这里填你的夸克链接",
            baidu: "这里填你的百度链接"
        },
        res2: {
            title: "4K高清电影合集",
            desc: "最新院线大片、热门剧集，持续更新",
            quark: "这里填你的夸克链接",
            baidu: "这里填你的百度链接"
        }
        // 继续加 res3、res4……res99，上百个随便加
    };

    const item = data[p] || data.res0;
    return new Response(JSON.stringify(item), {
        headers: { "Content-Type": "application/json" }
    });
}
