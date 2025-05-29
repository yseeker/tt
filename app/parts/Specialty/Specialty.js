import Image from "next/image";
import "../../sass/index.scss";
import "./Specialty.scss";

export const Specialty = () => {
  return (
    <div className="specialty_section">
      <div className="feature_title">
        <h2 className="s_title">技術的な強み</h2>
      </div>
      <div className="subsection">
        <h3>世界最高精度の転写生成アルゴリズム（国際会議WACV2025に採択）</h3>
        {/* <div className="image_container">
          <div>
            <Image
              width={840}
              height={0}
              src="/img/specialty2.png"
              alt="自社開発の独自画像生成アルゴリズム"
              style={{ display: "block", margin: "0 auto" }}
            />
          </div>
        </div> */}
        <p>
          自社開発の世界最高精度の転写生成アルゴリズムで異なる製品間の不良の自然な移植を可能にしています。
        </p>
        <div className="image_container">
          <div>
            <Image
              width={1024}
              height={0}
              src="/img/specialty3.png"
              alt="ラベル情報を使った局所的生成技術に関する特許"
              style={{ display: "block", margin: "0 auto" }}
            />
          </div>
          <p className="patents">
            {`E. Ikuta et al. "Harmonizing Attention: Texture-Aware Geometry Transfer" WACV2025 (arXiv:2408.10846)`}
          </p>
        </div>
      </div>
      <div className="subsection">
        <h3>ラベル情報を使った局所的生成技術に関する特許</h3>
        <p>
          良品画像にペイント等で生成領域等を指定した画像を使って、不良品画像を生成するという基本ワークフローで特許を取得しています。
        </p>
        <div>
          {/* <div className="workflow">
            <div className="label">良品データ</div>
            <Image
              width={30}
              height={30}
              src={"/img/right_arrow.svg"}
              alt="→"
            />
            <div className="label">
              良品データ
              <span className="caption">+ラベル情報</span>
              <span className="caption_short">(ペイントなど)</span>
            </div>
            <Image
              width={30}
              height={30}
              src={"/img/right_arrow.svg"}
              alt="→"
            />
            <div className="label">合成不良データ</div>
          </div> */}
          <div className="image_container">
            <Image
              width={740}
              height={0}
              src="/img/specialty1b.png"
              alt="ラベル情報を使った局所的生成技術に関する特許"
              style={{ display: "flex", margin: "0.5rem auto 0 auto" }}
            />
            <p className="patents">{`特許第7398127号`}</p>
          </div>
        </div>
      </div>
    </div >
  );
};
