import Faq from "./parts/Faq";
import News from "./parts/News";
import VoiceSlider from "./parts/VoiceSlider";
import Image from "next/image";
import { URL } from "./utils/const";
import { Specialty } from "./parts/Specialty";

export const runtime = "edge";

export default function Home() {
  return (
    <main className="main">
      <section className="fv">
        <div className="container">
          <div className="fv_content">
            <div className="fv_text">
              <p className="fv_sub">
                <span className="en">AIデータ生成基盤 </span>
                <span className="ja"> Anomaly Generator</span>
              </p>
              <p className="fv_title">2度とデータで悩まない。</p>
              <figure className="fv_media hide_pc">
                <Image
                  src="/img/pc.webp"
                  className="img_block"
                  alt="使用イメージ"
                  width={632}
                  height={395}
                  priority
                />
              </figure>
              <p className="fv_desc">
                不良品画像生成AIを活用して多様な学習データ、網羅的な評価データを生成することで、不良品のデータ不足課題を解決し、外観検査システムの早期立ち上げと精度向上を実現します。
              </p>
              <div className="fv_action">
                <a href={URL.download} className="btn_md btn_b">
                  資料ダウンロード
                </a>
                <a href={URL.contact} className="btn_md btn_w">
                  お問い合わせ
                </a>
              </div>
            </div>
            <figure className="fv_media hide_sp">
              <Image
                src="/img/pc.webp"
                className="img_block"
                alt="使用イメージ"
                width={632}
                height={395}
                priority
              />
            </figure>
          </div>
        </div>
      </section>

      <section className="s_experience">
        <div className="container">
          <div className="experience_title_wrap">
            <h2 className="experience_title">導入実績（一部）</h2>
          </div>
          <figure className="experience_media">
            <img src="/img/experience.webp" className="img_block hide_sp" />
            <img src="/img/experience.webp" className="img_block hide_pc" />
          </figure>
        </div>
      </section>

      <section className="onayami bgf5 s_padding">
        <div className="container_md">
          <div className="onayami_title">
            <h2 className="s_title">
              外観検査AIを構築する際に、
              <br className="hide_pc" />
              こんな課題はありませんか？
            </h2>
          </div>
          <div className="onayami_main">
            <figure className="onayami_media">
              <Image
                src="/img/onayami.webp"
                className="img_block"
                alt="お悩み"
                width={359}
                height={225}
                priority
              />
            </figure>
            <div className="onayami_text">
              <figure className="onayami_text_mark">
                <Image
                  src="/img/onayami_mark.svg"
                  className="img_block"
                  alt="AIによる不用品の生成"
                  width={800}
                  height={440}
                  priority
                />
              </figure>
              <ul>
                <li>
                  検査AIの学習と評価に十分な不良データの収集には時間がかかりすぎる
                </li>
                <li>
                  新製品のライン立ち上げのたびにデータを準備する必要がある
                </li>
                <li>
                  網羅的なプロパティを持つ不良データを人為的に作成できない
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="s_solution s_padding">
        <div className="container_sm">
          <h2 className="s_title">Anomaly Generator なら</h2>
          <div className="solution_main">
            <div className="solution_text">
              <h3>
                数枚の不良品画像から、
                <br className="hide_pc" />
                生成AIで多様な不良品画像を高速に生成し、
                <br className="hide_sp" />
                外観検査におけるデータ不足の課題を解決！
              </h3>
              <p>
                2017年創業以来、生成AIを専門に事業を展開しているデータグリッドの
                <br className="hide_sp" />
                独自の不良品画像生成AI（特許取得済み）で、自然な不良品画像を自動で生成することができます
              </p>
            </div>
            <div className="solution_media">
              <figure className="solution_img">
                <Image
                  src="/img/solution.webp"
                  className="img_block img_border"
                  width={800}
                  height={440}
                  alt="AIによって生成した不用品画像"
                />
              </figure>
              <p className="solution_media_desc">
                AIによって生成した不用品画像
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="s_feature bgf5">
        <div className="feature_title">
          <h2 className="s_title">Anomaly Generatorの強み</h2>
        </div>
        <div className="s_padding">
          <div className="container_lg">
            <div className="feature_summary">
              <div className="feature_summary_item">
                <h3>
                  <span>01</span>
                  <br className="hide_sp" />
                  高品質な画像
                </h3>
                <p>
                  本物と遜色ない画像
                  <br className="hide_sp" />
                  を生成できます
                </p>
                <figure>
                  <Image
                    src="/img/feature_summary1.webp"
                    className="img_block"
                    width={200}
                    height={200}
                    alt="高品質な画像"
                  />
                </figure>
              </div>
              <div className="feature_summary_item">
                <h3>
                  <span>02</span>
                  <br className="hide_sp" />
                  網羅的な不良生成
                </h3>
                <p>
                  プロパティの範囲を指定して
                  <br className="hide_sp" />
                  網羅的な不良を生成できます
                </p>
                <figure>
                  <Image
                    src="/img/feature_summary2.webp"
                    className="img_block"
                    width={200}
                    height={200}
                    alt="網羅的な不良作成"
                  />
                </figure>
              </div>
              <div className="feature_summary_item">
                <h3>
                  <span>03</span>
                  <br className="hide_sp" />
                  狙った位置に
                </h3>
                <p>
                  領域やエッジを指定して、
                  <br className="hide_sp" />
                  不良を生成できます
                </p>
                <figure>
                  <Image
                    src="/img/feature_summary3.webp"
                    className="img_block"
                    width={200}
                    height={200}
                    alt="狙った位置に"
                  />
                </figure>
              </div>
            </div>
            <div className="features">
              <div className="feature_item">
                <figure className="feature_item_media">
                  <Image
                    src="/img/feature1.webp"
                    className="img_block img_border"
                    width={500}
                    height={410}
                    alt="リアルな画像品質"
                  />
                </figure>
                <div className="feature_item_text">
                  <div className="feature_item_text_wrap">
                    <label className="feature_item_num">01</label>
                    <h3 className="feature_item_title">
                      <span className="color_gold">実物と遜色ない</span>
                      リアルな画像品質
                    </h3>
                    <p className="feature_item_desc">
                      不良部をコピー＆ペーストしただけのデータの水増しではなく、独自の不良品画像生成AIで自然な不良品画像データを生成できます。
                    </p>
                    <div className="feature_item_license feature_item_license--end">
                      特許取得済み
                    </div>
                  </div>
                </div>
              </div>
              <div className="feature_item feature_item--reserve">
                <figure className="feature_item_media">
                  <Image
                    src="/img/feature2.webp"
                    className="img_block"
                    width={650}
                    height={530}
                    alt="多様で網羅的な不良を生成"
                  />
                </figure>
                <div className="feature_item_text">
                  <div className="feature_item_text_wrap">
                    <label className="feature_item_num">02</label>
                    <h3 className="feature_item_title">
                      <span className="color_gold">多様で網羅的な</span>
                      不良を生成
                    </h3>
                    <p className="feature_item_desc">
                      不良部の大きさや形状・角度などを自由に操作して多様で網羅的な不良品画像を簡単に作成することができます。
                    </p>
                    <div className="feature_item_license feature_item_license--going">
                      特許出願中
                    </div>
                  </div>
                </div>
              </div>
              <div className="feature_item">
                <figure className="feature_item_media">
                  <Image
                    src="/img/feature3.webp"
                    className="img_block img_border"
                    width={650}
                    height={530}
                    alt="作りたい不良を狙った位置に"
                  />
                </figure>
                <div className="feature_item_text">
                  <div className="feature_item_text_wrap">
                    <label className="feature_item_num">03</label>
                    <h3 className="feature_item_title">
                      作りたい不良を
                      <span className="color_gold">狙った位置に</span>
                      <br className="hide_sp" />
                    </h3>
                    <p className="feature_item_desc">
                      不良を発生させたい領域やエッジを指定して、狙った位置に不良を発生させることができます。
                      <br className="hide_sp" />
                      特に、カケやスライスといった不良はエッジ不良生成機能を使って生成できます。
                    </p>
                    <div className="feature_item_license feature_item_license--going">
                      特許出願中
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
      <Specialty />
      <section className="s_function s_padding">
        <div className="container_lg">
          <h2 className="s_title">機能一覧</h2>
          <div className="functions">
            <div className="function_item">
              <figure className="function_item_media">
                <Image
                  src="/img/function1.svg"
                  className="img_block"
                  width={200}
                  height={100}
                  alt="データを一元管理"
                />
              </figure>
              <div className="function_item_text">
                <h3>データを一元管理</h3>
                <p>
                  撮像データ、合成データ、アノテーション済みデータを管理できます
                </p>
              </div>
            </div>
            <div className="function_item">
              <figure className="function_item_media">
                <Image
                  src="/img/function2.svg"
                  className="img_block"
                  width={200}
                  height={100}
                  alt="不良モード別アノテーション"
                />
              </figure>
              <div className="function_item_text">
                <h3>不良モード別アノテーション</h3>
                <p>
                  個別製品の不良モードごとにアノテーションをすることができます
                </p>
              </div>
            </div>
            <div className="function_item">
              <figure className="function_item_media">
                <Image
                  src="/img/function3.svg"
                  className="img_block"
                  width={200}
                  height={100}
                  alt="AI自動ペイント"
                />
              </figure>
              <div className="function_item_text">
                <h3>AI自動ペイント</h3>
                <p>AIで自動に不良部や製品部をアノテーションできます</p>
              </div>
            </div>
            <div className="function_item">
              <figure className="function_item_media">
                <Image
                  src="/img/function4.svg"
                  className="img_block"
                  width={200}
                  height={100}
                  alt="エッジ生成機能"
                />
              </figure>
              <div className="function_item_text">
                <h3>エッジ生成機能</h3>
                <p>
                  不良を発生させたい場所を領域だけでなく、エッジ/輪郭に設定することもできます
                </p>
              </div>
            </div>
            <div className="function_item">
              <figure className="function_item_media">
                <Image
                  src="/img/function5.svg"
                  className="img_block"
                  width={200}
                  height={100}
                  alt="プロパティの範囲指定"
                />
              </figure>
              <div className="function_item_text">
                <h3>プロパティの範囲指定</h3>
                <p>
                  大きさ、角度、色など不良部プロパティの範囲を指定して網羅的に不良を生成できます
                </p>
              </div>
            </div>
            <div className="function_item">
              <figure className="function_item_media">
                <Image
                  src="/img/function6.svg"
                  className="img_block"
                  width={200}
                  height={100}
                  alt="2種類の不良品画像生成AI"
                />
              </figure>
              <div className="function_item_text">
                <h3>4種類の不良品画像生成AI</h3>
                <p>用途に応じて4種類の画像生成AIを使い分けることができます</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="s_product s_padding bgf5">
        <div className="container_lg">
          <h2 className="s_title">対象製品例</h2>
          <div className="products">
            <ul className="product_items">
              <li>
                <figure className="product_media">
                  <Image
                    src="/img/product_1.webp"
                    className="img_block"
                    width={500}
                    height={500}
                    alt="歯車"
                  />
                </figure>
                <p>金属製品</p>
              </li>
              <li>
                <figure className="product_media">
                  <Image
                    src="/img/product_2.webp"
                    className="img_block"
                    width={500}
                    height={500}
                    alt="ミックスナッツ"
                  />
                </figure>
                <p>食品</p>
              </li>
              <li>
                <figure className="product_media">
                  <Image
                    src="/img/product_3.webp"
                    className="img_block"
                    width={500}
                    height={500}
                    alt="ひび割れたコンクリート"
                  />
                </figure>
                <p>コンクリート</p>
              </li>
              <li>
                <figure className="product_media">
                  <Image
                    src="/img/product_4.webp"
                    className="img_block"
                    width={500}
                    height={500}
                    alt="タブレット"
                  />
                </figure>
                <p>錠剤</p>
              </li>
              <li>
                <figure className="product_media">
                  <Image
                    src="/img/product_5.webp"
                    className="img_block"
                    width={500}
                    height={500}
                    alt="樹脂"
                  />
                </figure>
                <p>樹脂製品</p>
              </li>
              <li>
                <figure className="product_media">
                  <Image
                    src="/img/product_6.webp"
                    className="img_block"
                    width={500}
                    height={500}
                    alt="鉄棒"
                  />
                </figure>
                <p>鉄鋼</p>
              </li>
              <li>
                <figure className="product_media">
                  <Image
                    src="/img/product_7.webp"
                    className="img_block"
                    width={500}
                    height={500}
                    alt="自動車のパーツ"
                  />
                </figure>
                <p>自動車部品</p>
              </li>
              <li>
                <figure className="product_media">
                  <Image
                    src="/img/product_8.webp"
                    className="img_block"
                    width={500}
                    height={500}
                    alt="ペットボトル容器"
                  />
                </figure>
                <p>飲料容器</p>
              </li>
            </ul>
            <p className="product_desc">
              ※
              あくまで一例です。こちらに当てはまらない場合でもお気軽にご相談ください
            </p>
          </div>
        </div>
      </section>

      <section className="s_bad s_padding bgf5">
        <div className="container_lg">
          <h2 className="s_title">合成不良データ例</h2>
          <div className="bads">
            <ul className="bad_items">
              <li>
                <figure className="bad_media">
                  <Image
                    src="/img/bad1.webp"
                    className="img_block"
                    width={400}
                    height={400}
                    alt="合成不良データ例"
                  />
                </figure>
              </li>
              <li>
                <figure className="bad_media">
                  <Image
                    src="/img/bad2.webp"
                    className="img_block"
                    width={400}
                    height={400}
                    alt="合成不良データ例"
                  />
                </figure>
              </li>
              <li>
                <figure className="bad_media">
                  <Image
                    src="/img/bad3.webp"
                    className="img_block img_border"
                    width={400}
                    height={400}
                    alt="合成不良データ例"
                  />
                </figure>
              </li>
              <li>
                <figure className="bad_media">
                  <Image
                    src="/img/bad4.webp"
                    className="img_block img_border"
                    width={400}
                    height={400}
                    alt="合成不良データ例"
                  />
                </figure>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* <section className="s_voice s_padding">
        <div className="container_lg">
          <h2 className="s_title">事例</h2>
          <div id="voice_slider" className="voice_slider">
            <VoiceSlider />
          </div>
        </div>
      </section> */}

      <br className="hide_sp" />
      <br className="hide_sp" />
      <section className="s_new s_padding">
        <div className="container_sm">
          <h2 className="s_title">ニュース</h2>
          <div className="new_list">
            <News />
          </div>
        </div>
      </section>

      <section className="s_faq s_padding bgf5">
        <div className="container_lg">
          <h2 className="s_title">よくある質問</h2>
          <Faq />
        </div>
      </section>

      <section className="s_flow s_padding">
        <div className="container_lg">
          <h2 className="s_title">ご利用までの流れ</h2>
          <div className="flows">
            <div className="flow_item">
              <figure className="flow_item_media">
                <Image
                  src="/img/flow1.svg"
                  className="img_block"
                  width={100}
                  height={95}
                  alt="お問い合わせ"
                />
              </figure>
              <div className="flow_item_text">
                <h3>お問い合わせ</h3>
                <p>
                  以下のお問い合わせリンクに
                  <br className="hide_sp" />
                  必要情報を入力し、
                  <br className="hide_sp" />
                  送信してください
                </p>
              </div>
            </div>
            <div className="flow_item">
              <figure className="flow_item_media">
                <Image
                  src="/img/flow2.svg"
                  className="img_block"
                  width={100}
                  height={95}
                  alt="ヒアリング"
                />
              </figure>
              <div className="flow_item_text">
                <h3>ヒアリング</h3>
                <p>
                  プロダクトのデモを
                  <br className="hide_sp" />
                  お見せしながら、お客様の
                  <br className="hide_sp" />
                  ニーズをヒアリングします
                </p>
              </div>
            </div>
            <div className="flow_item">
              <figure className="flow_item_media">
                <Image
                  src="/img/flow3.svg"
                  className="img_block"
                  width={100}
                  height={95}
                  alt="トライアル"
                />
              </figure>
              <div className="flow_item_text">
                <h3>トライアル</h3>
                <p>
                  ニーズがマッチしましたら、
                  <br className="hide_sp" />
                  トライアル版を
                  <br className="hide_sp" />
                  お試しいただきます
                </p>
              </div>
            </div>
            <div className="flow_item">
              <figure className="flow_item_media">
                <Image
                  src="/img/flow4.svg"
                  className="img_block"
                  width={100}
                  height={95}
                  alt="本導入"
                />
              </figure>
              <div className="flow_item_text">
                <h3>本導入</h3>
                <p>
                  効果を実感いただけましたら、
                  <br className="hide_sp" />
                  制限なしのサービスを
                  <br className="hide_sp" />
                  提供いたします
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="s_contact s_padding">
        <div className="container_lg">
          <h2 className="s_title">まずは、お試ししてみませんか？</h2>
          <div className="contact_btns">
            <a href={URL.download} className="btn_lg btn_b">
              資料ダウンロード
            </a>
            <a href={URL.contact} className="btn_lg btn_w">
              お問い合わせ
            </a>
          </div>
        </div>
      </section>

      <section className="s_isms">
        <div className="container_sm">
          <div className="isms">
            <figure className="isms_media">
              <Image
                src="/img/ISMS.webp"
                className="img_block"
                width={1500}
                height={1000}
                alt="ISMS認証"
              />
            </figure>
            <p className="isms_text">
              データグリッドは、情報セキュリティマネジメントシステムに関する国際規格の認証を取得しています。
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
