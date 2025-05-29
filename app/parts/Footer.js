import { URL } from "../utils/const";
import Image from "next/image";

export default function Footer() {
  const menus = [
    {
      link: URL.company,
      text: "運営会社",
    },
    {
      link: URL.terms,
      text: "利用規約",
    },
    {
      link: URL.privacy,
      text: "プライバシーポリシー",
    },
  ];
  return (
    <footer className="s_footer">
      <div className="container">
        <div className="footer">
          <a href="/" className="footer_logo">
            <Image
              src="img/logo.svg"
              className="img_block"
              alt="DATA GRID Anomaly Generator"
              width={300}
              height={40}
            />
          </a>
          <nav className="footer_main">
            <ul className="footer_menu">
              {menus.map((item, i) => (
                <li key={i}>
                  <a href={item.link}>{item.text}</a>
                </li>
              ))}
            </ul>
            <p className="copyright">
              © 2023 DATAGRID, Inc. All Right Reserved.
            </p>
          </nav>
        </div>
      </div>
    </footer>
  );
}
