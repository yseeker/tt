export default function News() {
    const news = [
        {
            date: "2024/11/26",
            title: "データグリッド、製造業向け不良品画像生成ソフトウェア『Anomaly Generator』が大手製造業企業を中心に30社以上に導入",
            url: "https://datagrid.co.jp/news/2460/",
        },
        {
            date: "2024/09/02",
            title: "生成AIの論文がコンピュータービジョン分野の国際会議WACV 2025のメインカンファレンスに採択",
            url: "https://datagrid.co.jp/news/2397/",
        },
        {
            date: "2024/07/12",
            title: "PROTRUDEと戦略的アライアンス契約を締結",
            url: "https://datagrid.co.jp/news/2388/",
        },
        {
            date: "2024/05/07",
            title: "東京ウエルズ、データグリッドの生成AIを活用した製造業向けデータ生成基盤 『Anomaly Generator』を導入",
            url: "https://datagrid.co.jp/news/2364/",
        },
        {
            date: "2024/04/08",
            title: "データグリッドの生成AIを活用した製造業向けデータ生成基盤 『Anomaly Generator』を日本精工が導入",
            url: "https://datagrid.co.jp/news/2349/",
        },
        {
            date: "2024/01/14",
            title: "生成AIを活用した製造業向けデータ生成基盤『Anomaly Generator』を自動車関連部品の製造工場に導入",
            url: "https://datagrid.co.jp/news/2333/",
        },
        {
            date: "2023/12/08",
            title: "Anomaly Generatorを住友電工に導入",
            url: "https://datagrid.co.jp/news/2326/",
        },
        {
            date: "2023/10/10",
            title: "外観検査向けAIデータ生成基盤「Anomaly Generator」バージョンアップデート",
            url: "https://datagrid.co.jp/news/2316/",
        },
        {
            date: "2023/09/11",
            title: "ISMS認証を取得",
            url: "https://datagrid.co.jp/news/2310/",
        },
        {
            date: "2023/08/30",
            title: "データグリッド、外観検査ソリューションを展開するシーシーエスと業務提携",
            url: "https://datagrid.co.jp/news/2294/",
        },
        {
            date: "2023/05/16",
            title: "外観検査AI向けデータ生成基盤 『Anomaly Generator』 をリリース 〜生成AIを活用した製品データ生成により、数枚の画像からでも外観検査AIの構築を可能に〜",
            url: "https://datagrid.co.jp/news/2240/",
        },
    ]
    return (
        <ul>
            {news.map((item, i) =>
                <li key={i}>
                    <span>{item.date}</span>
                    <p><a href={item.url}>{item.title}</a></p>
                </li>
            )}
        </ul>
    );
}
