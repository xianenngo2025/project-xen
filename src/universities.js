const universities = [
    {
        id: 1,

        // Basic University Info
        name: "Singapore Management University",
        shortName: "SMU",
        logo: "/images/logos/smu-logo.jpg",
        website: "https://www.smu.edu.sg/",
        images: [
            "",
            "",
            "",
            ""
        ],
        
        // Location
        location: {
            city: "Singapore",
            state: "Singapore",
            country: "Singapore",
            region: "Asia",
            coordinates: {
                lat: 1.29627,
                lon: 103.85185
            },
            timezone: "UTC+8"
        },

        // Estimated Exchange Costs (Monthly)
        cost: {
            currency: "SGD",
            total: 3400,
            accommodation: 2000,
            food: 900,
            transport: 200,
            personalExpenses: 300
        },

        // Academic Info
        academic: {
            modulesOffered: 120,
            language: "English",
            modulesURL: "https://courses.smu.edu.sg/courses"
        },

        // Exchange Semester
        exchange: {
            name: "Spring 2027",
            season: "Spring",
            startDate: "Jan 2027",
            endDate: "May 2027"
        },

        // Climate during Exchange
        climate: {
            minTemp: 25,
            maxTemp: 32,
            unit: "°C",
            description: "Hot & Very Humid"
        }
    },
    {
        id: 2,
        name: "Yonsei University",
        shortName: "YSU",
        logo: "/images/logos/ysu-logo.jpg",
        website: "https://www.yonsei.ac.kr/sites/en_sc/index.do",
        images: [
            "",
            "",
            "",
            ""
        ],
        location: {
            city: "Seoul",
            state: "Seoul",
            country: "South Korea",
            region: "Asia",
            coordinates: {
                lat: 37.5671131,
                lon: 126.9390292
            },
            timezone: "UTC+9"
        },
        cost: {
            currency: "KRW",
            total: 1800000,
            accommodation: 800000,
            food: 500000,
            transport: 100000,
            personalExpenses: 400000
        },
        academic: {
            modulesOffered: 150,
            language: "English / Korean",
            modulesURL: "https://underwood1.yonsei.ac.kr/com/lgin/SsoCtr/initExtPageWork.do?link=handbList&locale=en"
        },
        exchange: {
            name: "Spring 2027",
            season: "Spring",
            startDate: "Mar 2027",
            endDate: "Jun 2027"
        },
        climate: {
            minTemp: 2,
            maxTemp: 28,
            unit: "°C",
            description: "Cold to Warm"
        }
    },
    {
        id: 3,
        name: "University College London",
        shortName: "UCL",
        logo: "/images/logos/ucl-logo.jpg",
        website: "https://www.ucl.ac.uk/",
        images: [
            "",
            "",
            "",
            ""
        ],
        location: {
            city: "London",
            state: "England",
            country: "United Kingdom",
            region: "Europe",
            coordinates: {
                lat: 51.5246,
                lon: -0.1340
            },
            timezone: "UTC+0"
        },
        cost: {
            currency: "GBP",
            total: 2800,
            accommodation: 1500,
            food: 600,
            transport: 250,
            personalExpenses: 450
        },
        academic: {
            modulesOffered: 200,
            language: "English",
            modulesURL: "https://www.ucl.ac.uk/module-catalogue"
        },
        exchange: {
            name: "Fall 2027",
            season: "Fall",
            startDate: "Sep 2027",
            endDate: "Dec 2027"
        },
        climate: {
            minTemp: 3,
            maxTemp: 19,
            unit: "°C",
            description: "Cool & Often Rainy"
        }
    },
    {
        id: 4,
        name: "Kyoto University",
        shortName: "KyotoU",
        logo: "/images/logos/kyotou-logo.jpg",
        website: "https://www.kyoto-u.ac.jp/en",
        images: [
            "",
            "",
            "",
            ""
        ],
        location: {
            city: "Kyoto",
            state: "Kyoto",
            country: "Japan",
            region: "Asia",
            coordinates: {
                lat: 35.0268,
                lon: 135.7808
            },
            timezone: "UTC+9"
        },
        cost: {
            currency: "JPY",
            total: 180000,
            accommodation: 70000,
            food: 50000,
            transport: 20000,
            personalExpenses: 40000
        },
        academic: {
            modulesOffered: 180,
            language: "English / Japanese",
            modulesURL: "https://ocw.kyoto-u.ac.jp/en/course/"
        },
        exchange: {
            name: "Spring 2027",
            season: "Spring",
            startDate: "Apr 2027",
            endDate: "Sep 2027"
        },
        climate: {
            minTemp: 10,
            maxTemp: 33,
            unit: "°C",
            description: "Warm to Very Hot & Humid"
        }
    },
    {
        id: 5,
        name: "Fudan University",
        shortName: "FDU",
        logo: "/images/logos/fdu-logo.jpg",
        website: "https://www.fudan.edu.cn/en/",
        images: [
            "",
            "",
            "",
            ""
        ],
        location: {
            city: "Shanghai",
            state: "Shanghai",
            country: "China",
            region: "Asia",
            coordinates: {
                lat: 31.2977,
                lon: 121.5035
            },
            timezone: "UTC+8"
        },
        cost: {
            currency: "CNY",
            total: 7500,
            accommodation: 3000,
            food: 2000,
            transport: 500,
            personalExpenses: 2000
        },
        academic: {
            modulesOffered: 160,
            language: "English / Mandarin",
            modulesURL: "https://ogp.fudan.edu.cn/16092/list.htm"
        },
        exchange: {
            name: "Spring 2027",
            season: "Spring",
            startDate: "Feb 2027",
            endDate: "Jun 2027"
        },
        climate: {
            minTemp: 4,
            maxTemp: 28,
            unit: "°C",
            description: "Cool to Warm & Humid"
        }
    },
    {
        id: 6,
        name: "Boston University",
        shortName: "BU",
        logo: "/images/logos/bu-logo.jpg",
        website: "https://www.bu.edu/",
        images: [
            "",
            "",
            "",
            ""
        ],
        location: {
            city: "Boston",
            state: "Massachusetts",
            country: "United States",
            region: "Americas",
            coordinates: {
                lat: 42.3505,
                lon: -71.1054
            },
            timezone: "UTC-5"
        },
        cost: {
            currency: "USD",
            total: 3200,
            accommodation: 1700,
            food: 700,
            transport: 250,
            personalExpenses: 550
        },
        academic: {
            modulesOffered: 300,
            language: "English",
            modulesURL: "https://www.bu.edu/academics/cas/courses/"
        },
        exchange: {
            name: "Fall 2027",
            season: "Fall",
            startDate: "Sep 2027",
            endDate: "Dec 2027"
        },
        climate: {
            minTemp: -2,
            maxTemp: 23,
            unit: "°C",
            description: "Mild to Very Cold"
        }
    }
]

export default universities
