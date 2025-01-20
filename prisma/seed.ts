import prisma from "@/lib/prisma";

async function main() {
  // 프로필 생성
  const profile = await prisma.profile.create({
    data: {
      name: "오윤석",
      email: "auraoys@gmail.com",
      phone: "010-9011-5618",
      companies: {
        create: [
          {
            name: "블로코",
            websiteUrl: "blocko.io",
            startDate: new Date("2024-02"),
            position: "블록체인기반 MSP/SI",
            projects: {
              create: [
                {
                  title: "MExchange",
                  websiteUrl: "mexchange.xyz",
                  description: "Meme을 테마로 한 암호화폐 거래소 구축 프로젝트",
                  bulletPoints: [
                    "프론트엔드 개발 & 인프라구축 역할 수행",
                    "OpenCEX 기반 거래소 플랫폼 구축 - EC2, ECR",
                    "디자인 리뉴얼 및 신규 페이지 작성 - Vue.js, Nuxt",
                    "CI/CD 파이프라인 구축 - Jenkins, AWS CLI"
                  ],
                  techStack: ["Vue.js", "Nuxt", "Jenkins", "AWS CLI", "EC2", "ECR"],
                  startDate: new Date("2024-10"),
                  endDate: new Date("2025-01")
                },
                {
                  title: "GEMverse",
                  websiteUrl: "verse.blocko.io",
                  description: "자동화된 워크플로우를 생성하는 노코드 웹3 빌더",
                  bulletPoints: [
                    "프론트엔드 개발 역할 수행",
                    "UI 개발 및 api 연동 - react.js, javascript"
                  ],
                  techStack: ["react.js", "javascript"],
                  startDate: new Date("2024-05"),
                  endDate: new Date("2024-08")
                },
                {
                  title: "BLOOM I.N.G",
                  description: "페스티벌 티켓 구매 및 정보공유를 위한 채팅 플랫폼 (app)",
                  bulletPoints: [
                    "UI개발 및 api 연동 - flutter",
                    "CI/CD 및 앱배포 자동화 환경 구축 - codemagic",
                    "채팅기능 구현 - sendbird"
                  ],
                  techStack: ["flutter", "codemagic", "sendbird"],
                  startDate: new Date("2024-02"),
                  endDate: new Date("2024-05")
                }
              ]
            }
          },
          {
            name: "펀블",
            startDate: new Date("2022-05"),
            endDate: new Date("2024-02"),
            position: "부동산 조각투자 사업을 개발/운영하는 혁신금융서비스 지정 아기유니콘 기업",
            projects: {
              create: [
                {
                  title: "펀블(Funble)",
                  description: "부동산 조각투자 청약/거래 플랫폼 (app)",
                  bulletPoints: [
                    "프론트엔드 개발 역할 수행",
                    "하이브리드 앱 개발 / 배포관리 - (react-native)",
                    "웹뷰 개발 및 연동 - vue.js",
                    "어드민 개발 - vue.js",
                    "CI/CD 구축 - Jenkins, github action"
                  ],
                  techStack: ["react-native", "vue.js", "Jenkins", "github action"],
                  startDate: new Date("2022-05"),
                  endDate: new Date("2024-02")
                }
              ]
            }
          },
          {
            name: "에셋플러스자산운용",
            startDate: new Date("2019-05"),
            endDate: new Date("2022-05"),
            position: "AUM 3조 규모의 독립계 자산운용사",
            projects: {
              create: [
                {
                  title: "ETF 펀드 상세 페이지 제작",
                  description: "신규 상장 ETF 펀드 상세 페이지 제작",
                  bulletPoints: [
                    "Daily 기준가 및 시장가, 수익률 표시를 위한 DB연동",
                    "펀드 PDF 리스트 표시 및 iNAV 호출, API 이식",
                    "실시간 시장가 표시를 위한 크롤러 개발 및 적용"
                  ],
                  techStack: ["Spring framework", "html", "css"],
                  startDate: new Date("2021-11"),
                  endDate: new Date("2021-11")
                },
                {
                  title: "고객상담 관리용 CRM 신규 개발",
                  description: "고객 별 상담 내역 조회, 상담 기록 입력 페이지 개발",
                  bulletPoints: [
                    "상담 기록 검색 및 상담원 별 조회 페이지 개발",
                    "이기종간 데이터베이스 마이그레이션(Oracle → Mysql)",
                    "개인식별번호 암/복호화 모듈 적용"
                  ],
                  techStack: ["react.js", "Oracle", "MySQL"],
                  startDate: new Date("2021-05"),
                  endDate: new Date("2021-08")
                },
                {
                  title: "MTS TFT 참여",
                  description: "화면/서비스 기획, UI/UX 정의 및 FlowChart 작성",
                  techStack: ["figma", "ppt"],
                  startDate: new Date("2020-11"),
                  endDate: new Date("2021-05")
                },
                {
                  title: "자산운용현황 SMS알림 서비스 개발",
                  description: "데이터 테이블 설계 및 크롤러 개발/운영",
                  bulletPoints: [
                    "데이터 테이블 설계",
                    "데이터 크롤러 개발 및 운영",
                    "SMS발송 서비스 개발"
                  ],
                  techStack: ["python"],
                  startDate: new Date("2021-03"),
                  endDate: new Date("2021-05")
                },
                {
                  title: "KRX 종가데이터 크롤링",
                  description: "한국 거래소 대상 종목별 종가데이터 크롤링",
                  bulletPoints: [
                    "테이블 정의 및 생성",
                    "크롤링 데이터 적재"
                  ],
                  techStack: ["python"],
                  startDate: new Date("2021-01"),
                  endDate: new Date("2021-01")
                },
                {
                  title: "펀드매니징플랫폼 서비스 개발",
                  description: "Client / Server 개발",
                  bulletPoints: [
                    "Jenkins / Gitlab 구축",
                    "데이터 수집 및 적재"
                  ],
                  techStack: ["react.js"],
                  startDate: new Date("2019-05"),
                  endDate: new Date("2020-10")
                }
              ]
            }
          },
          {
            name: "인젠트",
            startDate: new Date("2015-12"),
            endDate: new Date("2018-06"),
            position: "금융 SI/솔루션 업체",
            projects: {
              create: [
                {
                  title: "신한은행 비정형데이터 암호화",
                  description: "수신/여신/대출/외환 비정형 데이터 암복호화 필터 개발",
                  bulletPoints: [
                    "데이터 마이그레이션 ( 약 10억건 )"
                  ],
                  techStack: ["java"],
                  startDate: new Date("2017-05"),
                  endDate: new Date("2018-06")
                },
                {
                  title: "한국자산관리공사 채권통합관리시스템 구축",
                  description: "파일시스템 윈백",
                  bulletPoints: [
                    "데이터 암복호화 필터 개발 및 적용",
                    "Multi-TIF 이미지 Split 필터 개발 및 적용",
                    "ECM 솔루션 Xvarm 구축 및 마이그레이션"
                  ],
                  techStack: ["java"],
                  startDate: new Date("2016-10"),
                  endDate: new Date("2017-03")
                },
                {
                  title: "전국렌터카공제조합 이미지 고도화/웹팩스 구축",
                  description: "신분증 이미지, 스캔이미지 대상 고객정보 마스킹 필터 적용",
                  bulletPoints: [
                    "데이터 마이그레이션"
                  ],
                  techStack: ["java"],
                  startDate: new Date("2016-03"),
                  endDate: new Date("2016-08")
                },
                {
                  title: "한국무역정보통신 이미지 고도화",
                  description: "SWING을 이용한 대용량 이미지 마이그레이션 프로그램 개발",
                  bulletPoints: [
                    "ECM 솔루션 Xvarm 구축",
                    "이미지 Fomat 변환 필터 개발 및 적용"
                  ],
                  techStack: ["java"],
                  startDate: new Date("2015-12"),
                  endDate: new Date("2016-02")
                }
              ]
            }
          }
        ]
      },
      education: {
        create: [
          {
            title: "항해99 플러스 프론트엔드 개발자 과정 수료",
            institute: "항해99",
            date: new Date("2024-08")
          },
          {
            title: "RPA 중급개발자 과정 수료",
            institute: "KS아카데미",
            date: new Date("2021-09")
          },
          {
            title: "빅데이터를 이용한 웹어플리케이션 전문가 양성 과정 수료",
            institute: "한국EMC",
            date: new Date("2016-12")
          },
          {
            title: "컴퓨터공학과 졸업",
            institute: "한국공학대학교",
            date: new Date("2016-02")
          }
        ]
      },
      skills: {
        create: [
          {
            category: "Front-End",
            items: ["javascript", "react.js", "vue.js", "flutter"]
          },
          {
            category: "Database",
            items: ["Oracle", "Mysql"]
          },
          {
            category: "OS",
            items: ["Linux", "Windows NT"]
          },
          {
            category: "Tools",
            items: ["Docker", "Jenkins", "Gitlab", "git", "aws"]
          }
        ]
      },
      certificates: {
        create: [
          { name: "증권투자자문인력" },
          { name: "정보처리기사" },
          { name: "사회복지사2급" }
        ]
      }
    }
  });

  console.log('Seed data created:', profile);
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })