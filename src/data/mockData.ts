import type { WeddingData } from "../types";
import { getGalleryImages } from "../config/r2";

export const mockWeddingData: WeddingData = {
  groom: {
    name: "심준혁",
    englishName: "Sim junhyeok",
    phone: "010-2665-5995",
    father: "심상근",
    mother: "송현숙",
    relation: "장남",
  },
  bride: {
    name: "전혜진",
    englishName: "Jeon ",
    phone: "010-4522-5685",
    father: "전정석",
    mother: "서영순",
    relation: "막내",
  },
  weddingDate: "2026.10.31 (토요일)",
  weddingTime: "오전 11시",
  venue: {
    name: "라비에벨 웨딩",
    address: "경기도 부천시 길주로 105 라비에벨 9층",
    phone: "032-325-2000",
    floor: "9층",
    hall: "라비에벨 단독홀",
    mapUrl: "https://map.naver.com/v5/search/라비에벨",
    transportation: [
      {
        type: "subway",
        description: "2호선, 5호선 충정로역 4번 출구 도보 3분",
        text: "충정로역 4번 출구 도보 3분",
      },
      {
        type: "subway",
        description: "1호선, 4호선 서울역 15번출구(공항철도역) 도보 10분",
        text: "서울역 15번출구(공항철도역) 도보 10분",
      },
      {
        type: "bus",
        description:
          "한국경제신문사 하차 - [간선] 370, 603 [지선] 7011, 7013A, 7013B, 7017",
        text: "한국경제신문사 하차",
      },
      {
        type: "bus",
        description:
          "경찰청·동북아역사재단 하차 - [간선] 103, 150, 701, 704, 708, 709, 742, 750A",
        text: "경찰청·동북아역사재단 하차",
      },
      {
        type: "bus",
        description: "서울역서부 하차 - [간선] 173, 261, 262, 463, 503, 604",
        text: "서울역서부 하차",
      },
    ],
    parking: "건물 내 지하 주차장 이용 가능 (2시간 무료)",
  },
  parents: {
    groom: {
      father: "심상근",
      mother: "송현숙",
    },
    bride: {
      father: "전정석",
      mother: "서영순",
    },
  },
  gallery: getGalleryImages(),
  interview: [
    {
      question: "결혼을 결심한 이유는?",
      groomAnswer:
        "서로를 있는 그대로 존중하며 함께 웃을 수 있는 사람이기 때문입니다.",
      brideAnswer:
        "함께 있을 때 가장 행복하고 편안해서 평생 함께하고 싶었습니다.",
    },
    {
      question: "신혼여행은 어디로 가시나요?",
      groomAnswer: "자연이 아름다운 뉴질랜드로 떠날 예정입니다!",
      brideAnswer: "뉴질랜드의 멋진 자연 속에서 여유롭게 여행할 계획이에요.",
    },
    {
      question: "새로운 가정의 첫 터전은?",
      groomAnswer: "서울 사당 근처에서 삶의 터전을 시작할 계획입니다.",
      brideAnswer: "사당에서 시작해 앞으로 함께 꾸려갈 예정이에요.",
    },
  ],
  guestbook: [
    
  ],
  accounts: {
    groom: [
      {
        holder: "심준혁",
        bank: "카카오뱅크",
        accountNumber: "123-456-789012",
      },
      {
        holder: "송현숙",
        bank: "신한은행",
        accountNumber: "110-123-456789",
      },
      {
        holder: "심상근",
        bank: "신한은행",
        accountNumber: "110-123-456789",
      },
    ],
    bride: [
      {
        holder: "전혜진",
        bank: "우리은행",
        accountNumber: "1002-123-456789",
      },
      {
        holder: "서영순",
        bank: "KB국민은행",
        accountNumber: "123456-01-123456",
      },
      {
        holder: "전정석",
        bank: "KB국민은행",
        accountNumber: "123456-01-123456",
      },
    ],
  },
};
