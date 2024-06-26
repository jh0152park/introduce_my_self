interface IMission {
    title: string;
    description: string;
    worked: string[];
    tech: string[];
}

interface IWorkExperience {
    company: string;
    as: string;
    period: string;
    mission: IMission[];
}

interface IOtherExperience {
    title: string;
    as: string;
    period: string;
    description: string;
}

export const WORK_EXPERIENCE: IWorkExperience[] = [
    {
        company: "삼성전자 무선사업부",
        as: "System Performance Lab",
        period: "2014.02.14 ~ 2023.05.15",
        mission: [
            {
                title: "Performance BigData 분석",
                description:
                    "전 세계 10억명 이상이 사용하는 Samsung Galaxy Smart Phone의 Runtime간 Platform Performance BigData를 수집해 단말의 H/W Spec, S/W Version, Region, Etc 기반으로 분석해 On Device Machine Learning Solution의 초기 학습 모델의 Back Data로 사용했습니다.",
                worked: [
                    "BigData 기반 Abnormal Applications 선별",
                    "BigData 기반 Frequently Used Applications 선별",
                    "성능 개선을 위한 On Device Machine Learning Solution 초기 학습 데이터 수집",
                    "H/W Spec, S/W Version별 최대 Multitasking Performance를 위한 Feature Tuning 최적화",
                ],
                tech: ["Android", "Java", "BigData"],
            },

            {
                title: "On Device Machine Learning",
                description:
                    "사용자별 Application 사용 패턴과 환경에 따른 맞춤형 On Device Machine Learning Solutions 개발에 참여했습니다. Side Effects가 적은 불필요한 High Priority ADJ Processess를 학습해 Runtime간 Pause 또는 Kill을 통해 추가적인 Free Memory를 확보해 Multitasking Performance를 향상시킵니다. 또한 사용자가 자주 사용하는 Application을 Backbground에서 최소한의 Resources로 Process를 미리 살려두어 Application Launch Performance를 향상시켜 사용자 경험을 최적화 시켰습니다.",
                worked: [
                    "Useless High Priority Processes 학습 및 선별",
                    "M/L 유무에 따른 Runtime Platform Memory 분석",
                    "M/L에 의한 Background Processes Memory 분석",
                    "M/L에 의한 Background Processes Launch Time Performance 분석",
                ],
                tech: ["Android", "Java"],
            },

            {
                title: "Low Memory Killer Daemon",
                description:
                    "Runtime간 Device의 Memory를 적정 수준으로 유지함과 동시에 Multitaksing Performance를 최대로 끌어올려 사용자에게 더 좋은 경험을 제공하기 위해 Process를 Kill해 Memory Management하는 LMKD를 운영 및 유지보수 했습니다.",
                worked: [
                    "S-LSI, QC, MediaTech LMKD 마이그레이션",
                    "Android Platform 및 Kernel Features 튜닝",
                    "Multitasking Performance 향상을 위한 Process Priority Policy 운영",
                ],
                tech: ["Android", "Kernel", "Java"],
            },

            {
                title: "Android Memory Profiling",
                description:
                    "Galaxy를 비롯한 Google, C-Brand의 Device에도 동작하는 Platform Memory를 분석하는 In-House 자동화 툴을 1인 개발했습니다. 이후 엑셀 포맷으로도 자동화를 진행해 비교분석 결과를 문서화 시켜 이력관리를 했고, PL팀에서 주력으로 사용한 S/W Version별 메모리 비교 사이트의 모태가 되었습니다.",
                worked: [
                    "In-House 자동화툴 독자 개발 및 유지보수",
                    "자체 비교분석 결과 문서화 및 이력관리",
                    "S/W 버전벌 Abnoraml Process 검출",
                ],
                tech: ["Android", "Python"],
            },

            {
                title: "Process Life Cycle Tracking",
                description:
                    "Aging, Multitasking, Perfornamce Test 결과를 분석하기 위해서 각각 개별의 Process들의 Life Cycle을 추적 및 분석하는 자동화 툴을 1인 개발했습니다. 해당 툴을 통해서 특정 Process가 Abnormal한 동작을 하는지 혹은 불필요하게 많은 Memory Resource를 점유하지는 않는지 시각적으로 비교 및 분석했습니다.",
                worked: [
                    "QA Official Performance Test Analysis",
                    "Text 기반의 Log를 시각화를 통해 비교 및 분석",
                    "Runtime간 Process별 Life Cycle 시각화",
                ],
                tech: ["Android", "Python"],
            },

            {
                title: "QA Official Test Scenario 재현",
                description:
                    "QA Team 에서 진행하는 Official S/W Performance Test를 개발팀 자체적으로 진행가능한 테스트 자동화 툴을 1인 개발했습니다. Manual Test의 경우 Scenario의 90%를 커버했으며 그 외 자동화 Test의 경우 Scenario의 100%를 커버했습니다. 동시에 Official 결과대비 90%이상의 유사도를 보여 개발팀내 의사결정의 백데이터로 사용했습니다.",
                worked: [
                    "Official Test 대비 최소 5hours 개선",
                    "Display Touch Event Base 개발",
                    "기존 Memory 분석 툴 마이그레이션",
                ],
                tech: ["Android", "Python"],
            },

            {
                title: "정규 시험결과 자동 분석 Slack Bot",
                description:
                    "HQ, China, India, Vietnam QA Team에서 진행한 Official Performance Test 결과를 Slack 메세지 1줄로 자동으로 분석 및 오류검출 하는 In-House 자동화 툴을 1인 개발했습니다. Global로 진행하는 Official QA Test 분석을 보다 효율적으로 진행하고자 개발했으며, 기존 Manual 분석에 최소 20분 소요되었던 시간을 최대 7분 미만으로 줄였습니다.",
                worked: [
                    "Slack Bot Server를 운영하는 팀과 협업",
                    "Latest Result 자동으로 파싱 및 오류 검출하는 툴 개발",
                    "Mobile Slack App으로도 가능해 사무실에 없을때에도 분석가능",
                ],
                tech: ["Android", "Python", "Slack"],
            },

            {
                title: "Android OS Upgrade",
                description:
                    "매년 Google에서 공개하는 신규 OS를 Galaxy Device에 지원하는 과정에서오는 Performance Trade-Off를 최소화해 사용자 경험을 높은 수준으로 유지하기 위해 적절한 튜닝을 진행했습니다. 주로 Runtime 중에 CUP와 Memory에 불필요하게 Burdden을 주는 Processes들 최적화에 집중했습니다.",
                worked: [
                    "Useless High Priority Processes 삭제 및 메모리 확보",
                    "Application Launch Performance 유지를 위한 Platform 튜닝",
                    "OS Upgrade에 따른 System Memory Pressure를 줄이기 위한 Kernel 튜닝",
                ],
                tech: ["Android", "Android kernel"],
            },
        ],
    },
];

export const OTHER_EXPERIENCE: IOtherExperience[] = [
    {
        title: "유한회사 노마드컴퍼니",
        as: "Python Study 1기 TA",
        period: "2024.03 ~ 2024.05",
        description:
            "노마드코더 Python Study 1기 TA를 맡아 8주동안 진행하는 Python Basic, OpenAI, LangChain, Django Course의 수강생 분들의 코드리뷰를 비롯해 문제해결을 위한 고민과 소통을 도왔습니다.",
    },
];
