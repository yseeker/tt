"use client";
import React from "react";
import Slider from "react-slick";
import Modal from "react-modal";

function ArrowLeft(props) {
  const { className, style, onClick } = props;
  return (
    <div className="slick_left" onClick={onClick}>
      <img src="/img/icon_arrow_left.svg" />
    </div>
  );
}
function ArrowRight(props) {
  const { className, style, onClick } = props;
  return (
    <div className="slick_right" onClick={onClick}>
      <img src="/img/icon_arrow_left.svg" />
    </div>
  );
}

export default function VoiceSlider() {
  const [modalData, setModalData] = React.useState(null);
  const [showModal, setShowModal] = React.useState(false);
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <ArrowLeft />,
    prevArrow: <ArrowRight />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const voices = [
    {
      img: "/img/voice1.webp",
      title: "ベアリング等多様な金属製品の不良画像を生成",
      desc: "日本精工株式会社",
      type: "aa",
    },
    {
      img: "/img/voice1.webp",
      title: "タイトルタイトルタイトルタイトルタイトルタイトルタイ",
      desc: "株式会社テキスト2",
      type: "卸売・小売",
      member: "1,957名（アルバイト含む）",
    },
    {
      img: "/img/voice1.webp",
      title: "タイトルタイトルタイトルタイトルタイトルタイトルタイ",
      desc: "株式会社テキスト3",
      type: "卸売・小売",
      member: "1,957名（アルバイト含む）",
    },
    // {
    //   img: "/img/voice1.webp",
    //   title: "タイトルタイトルタイトルタイトルタイトルタイトルタイ",
    //   desc: "株式会社テキスト4",
    //   // type: "卸売・小売",
    //   // member: "1,957名（アルバイト含む）",
    // },
  ];
  const openModal = (item) => {
    setModalData(item);
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <>
      <Slider {...settings}>
        {voices.map((item, i) => (
          <div key={i} onClick={() => openModal(item)} className="voice_item">
            <figure className="voice_media">
              <img src={item.img} className="img_cover" alt={item.title} />
            </figure>
            <div className="voice_text">
              <h2 className="voice_title">{item.title}</h2>
              <p className="voice_desc">{item.desc}</p>
              {/* <p className="voice_comment">
                業種：{item.type}
                <br />
                従業員数：{item.member}
              </p> */}
            </div>
          </div>
        ))}
      </Slider>
      <Modal
        isOpen={showModal}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
      >
        {modalData !== null && (
          <div className="voice_modal">
            <a onClick={() => closeModal()} className="voice_modal_close">
              <img src="/img/icon_close.svg" className="img_block" />
            </a>
            <h2 className="voice_modal_title">{modalData.title}</h2>
            <p className="voice_modal_desc">{modalData.desc}</p>
            <p className="voice_modal_comment">{modalData.type}</p>
            <figure className="voice_modal_media">
              <img src={modalData.img} className="img_block" />
            </figure>
          </div>
        )}
      </Modal>
    </>
  );
}
