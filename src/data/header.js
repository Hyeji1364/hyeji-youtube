import { IoHeartCircle } from "react-icons/io5";
import { GiJapan } from "react-icons/gi";
import { FaFlag } from "react-icons/fa";
import { SiSingaporeairlines } from "react-icons/si";
import { FaFlagUsa } from "react-icons/fa";
import { HiGlobeAsiaAustralia } from "react-icons/hi2";
import { GiEuropeanFlag } from "react-icons/gi";

import { AiFillGithub } from "react-icons/ai";
import { FaBlogger } from "react-icons/fa";
import { AiFillYoutube } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";

export const headerMenus = [
    {
        title: "추천 영상",
        icon: <IoHeartCircle />,
        src: "/today"
    },
    {
        title: "일본",
        icon: <GiJapan />,
        src: "/japan"
    },
    {
        title: "대만",
        icon: <FaFlag />,
        src: "/taiwan"
    },
    {
        title: "베트남",
        icon: <FaFlag />,
        src: "/vietnam"
    },
    {
        title: "홍콩",
        icon: <FaFlag />,
        src: "/honkong"
    },
    {
        title: "싱가포르",
        icon: <SiSingaporeairlines />,
        src: "/singapore"
    },
    {
        title: "미국",
        icon: <FaFlagUsa />,
        src: "/usa"
    },
    {
        title: "호주",
        icon: <HiGlobeAsiaAustralia />,
        src: "/australia"
    }, {
        title: "유럽",
        icon: <GiEuropeanFlag />,
        src: "/europe"
    }
];

export const searchKeyword = [
    {
        title: "food",
        src: "/search/food"
    },
    {
        title: "장소",
        src: "/search/spot"
    },
    {
        title: "즐길거리",
        src: "/search/enjoy"
    },
    {
        title: "명소",
        src: "/search/attraction"
    },
    {
        title: "쇼핑리스트",
        src: "/search/shoppinglist"
    }
];

export const snsLink = [
    {
        title: "github",
        url: "https://github.com/Hyeji1364",
        icon: <AiFillGithub />
    },
    {
        title: "youtube",
        url: "",
        icon: <AiFillYoutube />
    },
    {
        title: "blog",
        url: "https://hyeji1364.github.io/",
        icon: <FaBlogger />
    },
    {
        title: "instagram",
        url: "",
        icon: <AiOutlineInstagram />
    }
]