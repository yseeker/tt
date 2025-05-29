import { URL } from "../utils/const";
import Image from "next/image";

export default function Header() {
  return (
    <header className="s_header">
      <h1 className="header_logo">
        <a href="/">
          <Image
            src="img/logo.svg"
            className="img_block"
            alt="DATA GRID Anomaly Generator"
            width={300}
            height={40}
            priority
          />
        </a>
      </h1>
      <div className="header_action">
        <a href={URL.download} className="btn_sm btn_b">
          資料ダウンロード
        </a>
        <a href={URL.contact} className="btn_sm btn_w">
          お問い合わせ
        </a>
      </div>
    </header>
  );
}
