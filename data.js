// CPS Hardware Database
// Performance scores are normalized estimates (0-100) based on public benchmark data.

const GPUS = [
  // ===== NVIDIA =====
  // GTX 400
  {brand:"NVIDIA",series:"GTX 400",name:"GTX 480",arch:"Fermi",vram:"1.5GB GDDR5",memType:"GDDR5",cores:480,rt:0,tflops:1.34,boost:1401,tdp:250,year:2010,gaming:8,ai:2,prod:6,bench:15},
  {brand:"NVIDIA",series:"GTX 400",name:"GTX 460",arch:"Fermi",vram:"1GB GDDR5",memType:"GDDR5",cores:336,rt:0,tflops:0.91,boost:1350,tdp:160,year:2010,gaming:6,ai:1,prod:4,bench:10},
  // GTX 500
  {brand:"NVIDIA",series:"GTX 500",name:"GTX 580",arch:"Fermi",vram:"1.5GB GDDR5",memType:"GDDR5",cores:512,rt:0,tflops:1.58,boost:1544,tdp:244,year:2010,gaming:10,ai:2,prod:7,bench:18},
  {brand:"NVIDIA",series:"GTX 500",name:"GTX 560 Ti",arch:"Fermi",vram:"1GB GDDR5",memType:"GDDR5",cores:384,rt:0,tflops:1.26,boost:1645,tdp:170,year:2011,gaming:8,ai:1,prod:5,bench:13},
  // GTX 600
  {brand:"NVIDIA",series:"GTX 600",name:"GTX 680",arch:"Kepler",vram:"2GB GDDR5",memType:"GDDR5",cores:1536,rt:0,tflops:3.09,boost:1058,tdp:195,year:2012,gaming:14,ai:3,prod:10,bench:22},
  {brand:"NVIDIA",series:"GTX 600",name:"GTX 660",arch:"Kepler",vram:"2GB GDDR5",memType:"GDDR5",cores:960,rt:0,tflops:1.88,boost:1033,tdp:140,year:2012,gaming:10,ai:2,prod:7,bench:16},
  // GTX 700
  {brand:"NVIDIA",series:"GTX 700",name:"GTX 780 Ti",arch:"Kepler",vram:"3GB GDDR5",memType:"GDDR5",cores:2880,rt:0,tflops:5.04,boost:928,tdp:250,year:2013,gaming:20,ai:4,prod:15,bench:30},
  {brand:"NVIDIA",series:"GTX 700",name:"GTX 750 Ti",arch:"Maxwell",vram:"2GB GDDR5",memType:"GDDR5",cores:640,rt:0,tflops:1.30,boost:1085,tdp:60,year:2014,gaming:9,ai:2,prod:6,bench:14},
  // GTX 900
  {brand:"NVIDIA",series:"GTX 900",name:"GTX 980 Ti",arch:"Maxwell",vram:"6GB GDDR5",memType:"GDDR5",cores:2816,rt:0,tflops:5.63,boost:1075,tdp:250,year:2015,gaming:26,ai:5,prod:20,bench:36},
  {brand:"NVIDIA",series:"GTX 900",name:"GTX 970",arch:"Maxwell",vram:"4GB GDDR5",memType:"GDDR5",cores:1664,rt:0,tflops:3.49,boost:1178,tdp:145,year:2014,gaming:20,ai:4,prod:14,bench:28},
  // GTX 10
  {brand:"NVIDIA",series:"GTX 10",name:"GTX 1050 Ti",arch:"Pascal",vram:"4GB GDDR5",memType:"GDDR5",cores:768,rt:0,tflops:2.14,boost:1392,tdp:75,year:2016,gaming:15,ai:3,prod:8,bench:22},
  {brand:"NVIDIA",series:"GTX 10",name:"GTX 1060",arch:"Pascal",vram:"6GB GDDR5",memType:"GDDR5",cores:1280,rt:0,tflops:4.37,boost:1708,tdp:120,year:2016,gaming:25,ai:5,prod:18,bench:34},
  {brand:"NVIDIA",series:"GTX 10",name:"GTX 1070",arch:"Pascal",vram:"8GB GDDR5",memType:"GDDR5",cores:1920,rt:0,tflops:6.46,boost:1683,tdp:150,year:2016,gaming:32,ai:7,prod:24,bench:42},
  {brand:"NVIDIA",series:"GTX 10",name:"GTX 1080",arch:"Pascal",vram:"8GB GDDR5X",memType:"GDDR5X",cores:2560,rt:0,tflops:8.87,boost:1733,tdp:180,year:2016,gaming:38,ai:8,prod:30,bench:48},
  {brand:"NVIDIA",series:"GTX 10",name:"GTX 1080 Ti",arch:"Pascal",vram:"11GB GDDR5X",memType:"GDDR5X",cores:3584,rt:0,tflops:11.34,boost:1582,tdp:250,year:2017,gaming:45,ai:10,prod:36,bench:55},
  {brand:"NVIDIA",series:"GTX 10",name:"GTX 1650",arch:"Turing",vram:"4GB GDDR5",memType:"GDDR5",cores:896,rt:0,tflops:2.98,boost:1665,tdp:75,year:2019,gaming:18,ai:4,prod:11,bench:25},
  // RTX 20
  {brand:"NVIDIA",series:"RTX 20",name:"RTX 2060",arch:"Turing",vram:"6GB GDDR6",memType:"GDDR6",cores:1920,rt:30,tflops:6.45,boost:1680,tdp:160,year:2019,gaming:38,ai:30,prod:30,bench:48},
  {brand:"NVIDIA",series:"RTX 20",name:"RTX 2070 SUPER",arch:"Turing",vram:"8GB GDDR6",memType:"GDDR6",cores:2560,rt:40,tflops:9.06,boost:1770,tdp:215,year:2019,gaming:48,ai:38,prod:40,bench:58},
  {brand:"NVIDIA",series:"RTX 20",name:"RTX 2080 SUPER",arch:"Turing",vram:"8GB GDDR6",memType:"GDDR6",cores:3072,rt:48,tflops:11.15,boost:1815,tdp:250,year:2019,gaming:55,ai:42,prod:46,bench:65},
  {brand:"NVIDIA",series:"RTX 20",name:"RTX 2080 Ti",arch:"Turing",vram:"11GB GDDR6",memType:"GDDR6",cores:4352,rt:68,tflops:13.45,boost:1545,tdp:250,year:2018,gaming:60,ai:48,prod:55,bench:70},
  // RTX 30
  {brand:"NVIDIA",series:"RTX 30",name:"RTX 3050",arch:"Ampere",vram:"8GB GDDR6",memType:"GDDR6",cores:2560,rt:20,tflops:9.10,boost:1777,tdp:130,year:2022,gaming:38,ai:34,prod:32,bench:48},
  {brand:"NVIDIA",series:"RTX 30",name:"RTX 3060",arch:"Ampere",vram:"12GB GDDR6",memType:"GDDR6",cores:3584,rt:28,tflops:12.74,boost:1777,tdp:170,year:2021,gaming:50,ai:42,prod:44,bench:60},
  {brand:"NVIDIA",series:"RTX 30",name:"RTX 3060 Ti",arch:"Ampere",vram:"8GB GDDR6",memType:"GDDR6",cores:4864,rt:38,tflops:16.20,boost:1665,tdp:200,year:2020,gaming:58,ai:50,prod:52,bench:67},
  {brand:"NVIDIA",series:"RTX 30",name:"RTX 3070",arch:"Ampere",vram:"8GB GDDR6",memType:"GDDR6",cores:5888,rt:46,tflops:20.31,boost:1725,tdp:220,year:2020,gaming:65,ai:58,prod:60,bench:73},
  {brand:"NVIDIA",series:"RTX 30",name:"RTX 3080",arch:"Ampere",vram:"10GB GDDR6X",memType:"GDDR6X",cores:8704,rt:68,tflops:29.77,boost:1710,tdp:320,year:2020,gaming:78,ai:72,prod:74,bench:84},
  {brand:"NVIDIA",series:"RTX 30",name:"RTX 3090",arch:"Ampere",vram:"24GB GDDR6X",memType:"GDDR6X",cores:10496,rt:82,tflops:35.58,boost:1695,tdp:350,year:2020,gaming:82,ai:80,prod:88,bench:88},
  {brand:"NVIDIA",series:"RTX 30",name:"RTX 3090 Ti",arch:"Ampere",vram:"24GB GDDR6X",memType:"GDDR6X",cores:10752,rt:84,tflops:40.00,boost:1860,tdp:450,year:2022,gaming:85,ai:82,prod:90,bench:90},
  // RTX 40
  {brand:"NVIDIA",series:"RTX 40",name:"RTX 4060",arch:"Ada Lovelace",vram:"8GB GDDR6",memType:"GDDR6",cores:3072,rt:24,tflops:15.11,boost:2460,tdp:115,year:2023,gaming:55,ai:58,prod:50,bench:64},
  {brand:"NVIDIA",series:"RTX 40",name:"RTX 4060 Ti",arch:"Ada Lovelace",vram:"8GB GDDR6",memType:"GDDR6",cores:4352,rt:34,tflops:22.06,boost:2535,tdp:160,year:2023,gaming:62,ai:65,prod:60,bench:71},
  {brand:"NVIDIA",series:"RTX 40",name:"RTX 4070",arch:"Ada Lovelace",vram:"12GB GDDR6X",memType:"GDDR6X",cores:5888,rt:46,tflops:29.15,boost:2475,tdp:200,year:2023,gaming:72,ai:75,prod:72,bench:79},
  {brand:"NVIDIA",series:"RTX 40",name:"RTX 4070 SUPER",arch:"Ada Lovelace",vram:"12GB GDDR6X",memType:"GDDR6X",cores:7168,rt:56,tflops:35.48,boost:2475,tdp:220,year:2024,gaming:78,ai:80,prod:78,bench:83},
  {brand:"NVIDIA",series:"RTX 40",name:"RTX 4070 Ti SUPER",arch:"Ada Lovelace",vram:"16GB GDDR6X",memType:"GDDR6X",cores:8448,rt:66,tflops:44.10,boost:2610,tdp:285,year:2024,gaming:84,ai:86,prod:84,bench:88},
  {brand:"NVIDIA",series:"RTX 40",name:"RTX 4080 SUPER",arch:"Ada Lovelace",vram:"16GB GDDR6X",memType:"GDDR6X",cores:10240,rt:80,tflops:52.22,boost:2550,tdp:320,year:2024,gaming:90,ai:92,prod:90,bench:93},
  {brand:"NVIDIA",series:"RTX 40",name:"RTX 4090",arch:"Ada Lovelace",vram:"24GB GDDR6X",memType:"GDDR6X",cores:16384,rt:128,tflops:82.58,boost:2520,tdp:450,year:2022,gaming:98,ai:100,prod:100,bench:99},
  // RTX 50
  {brand:"NVIDIA",series:"RTX 50",name:"RTX 5070",arch:"Blackwell",vram:"12GB GDDR7",memType:"GDDR7",cores:6144,rt:48,tflops:31.50,boost:2510,tdp:250,year:2025,gaming:80,ai:88,prod:78,bench:84},
  {brand:"NVIDIA",series:"RTX 50",name:"RTX 5070 Ti",arch:"Blackwell",vram:"16GB GDDR7",memType:"GDDR7",cores:8960,rt:70,tflops:43.94,boost:2452,tdp:300,year:2025,gaming:86,ai:92,prod:86,bench:90},
  {brand:"NVIDIA",series:"RTX 50",name:"RTX 5080",arch:"Blackwell",vram:"16GB GDDR7",memType:"GDDR7",cores:10752,rt:84,tflops:56.34,boost:2617,tdp:360,year:2025,gaming:92,ai:96,prod:92,bench:94},
  {brand:"NVIDIA",series:"RTX 50",name:"RTX 5090",arch:"Blackwell",vram:"32GB GDDR7",memType:"GDDR7",cores:21760,rt:170,tflops:104.80,boost:2407,tdp:575,year:2025,gaming:100,ai:120,prod:115,bench:100},
  // Titan
  {brand:"NVIDIA",series:"Titan",name:"Titan RTX",arch:"Turing",vram:"24GB GDDR6",memType:"GDDR6",cores:4608,rt:72,tflops:16.31,boost:1770,tdp:280,year:2018,gaming:62,ai:55,prod:70,bench:72},
  {brand:"NVIDIA",series:"Titan",name:"Titan V",arch:"Volta",vram:"12GB HBM2",memType:"HBM2",cores:5120,rt:0,tflops:14.90,boost:1455,tdp:250,year:2017,gaming:55,ai:60,prod:75,bench:68},

  // ===== AMD =====
  {brand:"AMD",series:"Radeon HD",name:"HD 7970",arch:"GCN 1.0",vram:"3GB GDDR5",memType:"GDDR5",cores:2048,rt:0,tflops:3.79,boost:925,tdp:250,year:2012,gaming:14,ai:3,prod:10,bench:22},
  {brand:"AMD",series:"RX 400",name:"RX 470",arch:"Polaris",vram:"4GB GDDR5",memType:"GDDR5",cores:2048,rt:0,tflops:4.94,boost:1206,tdp:120,year:2016,gaming:22,ai:4,prod:16,bench:32},
  {brand:"AMD",series:"RX 400",name:"RX 480",arch:"Polaris",vram:"8GB GDDR5",memType:"GDDR5",cores:2304,rt:0,tflops:5.83,boost:1266,tdp:150,year:2016,gaming:25,ai:5,prod:19,bench:35},
  {brand:"AMD",series:"RX 500",name:"RX 570",arch:"Polaris",vram:"4GB GDDR5",memType:"GDDR5",cores:2048,rt:0,tflops:5.10,boost:1244,tdp:150,year:2017,gaming:23,ai:5,prod:17,bench:33},
  {brand:"AMD",series:"RX 500",name:"RX 580",arch:"Polaris",vram:"8GB GDDR5",memType:"GDDR5",cores:2304,rt:0,tflops:6.17,boost:1340,tdp:185,year:2017,gaming:27,ai:6,prod:20,bench:37},
  {brand:"AMD",series:"RX 500",name:"RX 590",arch:"Polaris",vram:"8GB GDDR5",memType:"GDDR5",cores:2304,rt:0,tflops:7.12,boost:1545,tdp:225,year:2018,gaming:30,ai:6,prod:22,bench:40},
  {brand:"AMD",series:"RX 5000",name:"RX 5500 XT",arch:"RDNA",vram:"8GB GDDR6",memType:"GDDR6",cores:1408,rt:0,tflops:5.20,boost:1845,tdp:130,year:2019,gaming:28,ai:8,prod:22,bench:38},
  {brand:"AMD",series:"RX 5000",name:"RX 5700",arch:"RDNA",vram:"8GB GDDR6",memType:"GDDR6",cores:2304,rt:0,tflops:7.95,boost:1725,tdp:180,year:2019,gaming:42,ai:14,prod:34,bench:52},
  {brand:"AMD",series:"RX 5000",name:"RX 5700 XT",arch:"RDNA",vram:"8GB GDDR6",memType:"GDDR6",cores:2560,rt:0,tflops:9.75,boost:1905,tdp:225,year:2019,gaming:48,ai:16,prod:38,bench:58},
  {brand:"AMD",series:"RX 6000",name:"RX 6600",arch:"RDNA 2",vram:"8GB GDDR6",memType:"GDDR6",cores:1792,rt:28,tflops:8.93,boost:2491,tdp:132,year:2021,gaming:46,ai:32,prod:38,bench:55},
  {brand:"AMD",series:"RX 6000",name:"RX 6700 XT",arch:"RDNA 2",vram:"12GB GDDR6",memType:"GDDR6",cores:2560,rt:40,tflops:13.21,boost:2581,tdp:230,year:2021,gaming:60,ai:42,prod:52,bench:68},
  {brand:"AMD",series:"RX 6000",name:"RX 6800 XT",arch:"RDNA 2",vram:"16GB GDDR6",memType:"GDDR6",cores:4608,rt:72,tflops:20.74,boost:2250,tdp:300,year:2020,gaming:78,ai:60,prod:72,bench:83},
  {brand:"AMD",series:"RX 6000",name:"RX 6900 XT",arch:"RDNA 2",vram:"16GB GDDR6",memType:"GDDR6",cores:5120,rt:80,tflops:23.04,boost:2250,tdp:300,year:2020,gaming:82,ai:64,prod:76,bench:86},
  {brand:"AMD",series:"RX 7000",name:"RX 7600",arch:"RDNA 3",vram:"8GB GDDR6",memType:"GDDR6",cores:2048,rt:32,tflops:21.75,boost:2655,tdp:165,year:2023,gaming:55,ai:45,prod:48,bench:64},
  {brand:"AMD",series:"RX 7000",name:"RX 7700 XT",arch:"RDNA 3",vram:"12GB GDDR6",memType:"GDDR6",cores:3456,rt:54,tflops:35.17,boost:2544,tdp:245,year:2023,gaming:72,ai:58,prod:66,bench:78},
  {brand:"AMD",series:"RX 7000",name:"RX 7800 XT",arch:"RDNA 3",vram:"16GB GDDR6",memType:"GDDR6",cores:3840,rt:60,tflops:37.32,boost:2430,tdp:263,year:2023,gaming:78,ai:64,prod:72,bench:82},
  {brand:"AMD",series:"RX 7000",name:"RX 7900 XT",arch:"RDNA 3",vram:"20GB GDDR6",memType:"GDDR6",cores:5376,rt:84,tflops:51.61,boost:2400,tdp:300,year:2022,gaming:86,ai:74,prod:84,bench:89},
  {brand:"AMD",series:"RX 7000",name:"RX 7900 XTX",arch:"RDNA 3",vram:"24GB GDDR6",memType:"GDDR6",cores:6144,rt:96,tflops:61.40,boost:2500,tdp:355,year:2022,gaming:92,ai:80,prod:88,bench:93},
  {brand:"AMD",series:"RX 9000",name:"RX 9070",arch:"RDNA 4",vram:"16GB GDDR6",memType:"GDDR6",cores:3584,rt:56,tflops:40.10,boost:2520,tdp:220,year:2025,gaming:82,ai:84,prod:78,bench:86},
  {brand:"AMD",series:"RX 9000",name:"RX 9070 XT",arch:"RDNA 4",vram:"16GB GDDR6",memType:"GDDR6",cores:4096,rt:64,tflops:48.70,boost:2970,tdp:304,year:2025,gaming:88,ai:90,prod:84,bench:90},

  // ===== INTEL ARC =====
  {brand:"INTEL",series:"Arc A",name:"Arc A380",arch:"Alchemist",vram:"6GB GDDR6",memType:"GDDR6",cores:1024,rt:8,tflops:4.20,boost:2000,tdp:75,year:2022,gaming:18,ai:22,prod:18,bench:26},
  {brand:"INTEL",series:"Arc A",name:"Arc A580",arch:"Alchemist",vram:"8GB GDDR6",memType:"GDDR6",cores:3072,rt:24,tflops:12.29,boost:1700,tdp:185,year:2023,gaming:42,ai:48,prod:40,bench:54},
  {brand:"INTEL",series:"Arc A",name:"Arc A750",arch:"Alchemist",vram:"8GB GDDR6",memType:"GDDR6",cores:3584,rt:28,tflops:17.20,boost:2050,tdp:225,year:2022,gaming:50,ai:55,prod:46,bench:60},
  {brand:"INTEL",series:"Arc A",name:"Arc A770",arch:"Alchemist",vram:"16GB GDDR6",memType:"GDDR6",cores:4096,rt:32,tflops:19.66,boost:2100,tdp:225,year:2022,gaming:56,ai:62,prod:52,bench:66},
  {brand:"INTEL",series:"Arc B",name:"Arc B580",arch:"Battlemage",vram:"12GB GDDR6",memType:"GDDR6",cores:2560,rt:20,tflops:13.62,boost:2670,tdp:190,year:2024,gaming:58,ai:68,prod:54,bench:68},
  {brand:"INTEL",series:"Arc B",name:"Arc B770",arch:"Battlemage",vram:"16GB GDDR6",memType:"GDDR6",cores:4096,rt:32,tflops:22.10,boost:2700,tdp:225,year:2025,gaming:70,ai:80,prod:66,bench:78},
];

const CPUS = [
  // INTEL
  {brand:"INTEL",series:"Core 2",name:"Core 2 Duo E8400",arch:"Wolfdale",cores:2,threads:2,base:3.0,boost:3.0,cache:"6MB",tdp:65,year:2008,igpu:"None",gaming:8,ai:2,prod:6,bench:10},
  {brand:"INTEL",series:"i3",name:"i3-4170",arch:"Haswell",cores:2,threads:4,base:3.7,boost:3.7,cache:"3MB",tdp:54,year:2015,igpu:"HD 4400",gaming:14,ai:4,prod:12,bench:16},
  {brand:"INTEL",series:"i5",name:"i5-4570",arch:"Haswell",cores:4,threads:4,base:3.2,boost:3.6,cache:"6MB",tdp:84,year:2013,igpu:"HD 4600",gaming:22,ai:6,prod:20,bench:25},
  {brand:"INTEL",series:"i7",name:"i7-4790K",arch:"Haswell",cores:4,threads:8,base:4.0,boost:4.4,cache:"8MB",tdp:88,year:2014,igpu:"HD 4600",gaming:30,ai:10,prod:32,bench:36},
  {brand:"INTEL",series:"i5",name:"i5-7600K",arch:"Kaby Lake",cores:4,threads:4,base:3.8,boost:4.2,cache:"6MB",tdp:91,year:2017,igpu:"HD 630",gaming:28,ai:8,prod:25,bench:32},
  {brand:"INTEL",series:"i7",name:"i7-7700HQ",arch:"Kaby Lake",cores:4,threads:8,base:2.8,boost:3.8,cache:"6MB",tdp:45,year:2017,igpu:"HD 630",gaming:26,ai:9,prod:28,bench:30},
  {brand:"INTEL",series:"i5",name:"i5-8400",arch:"Coffee Lake",cores:6,threads:6,base:2.8,boost:4.0,cache:"9MB",tdp:65,year:2017,igpu:"UHD 630",gaming:35,ai:12,prod:34,bench:40},
  {brand:"INTEL",series:"i9",name:"i9-9900K",arch:"Coffee Lake R",cores:8,threads:16,base:3.6,boost:5.0,cache:"16MB",tdp:95,year:2018,igpu:"UHD 630",gaming:52,ai:22,prod:55,bench:60},
  {brand:"INTEL",series:"i5",name:"i5-10400F",arch:"Comet Lake",cores:6,threads:12,base:2.9,boost:4.3,cache:"12MB",tdp:65,year:2020,igpu:"None",gaming:42,ai:16,prod:42,bench:48},
  {brand:"INTEL",series:"i5",name:"i5-12400F",arch:"Alder Lake",cores:6,threads:12,base:2.5,boost:4.4,cache:"18MB",tdp:65,year:2022,igpu:"None",gaming:58,ai:30,prod:55,bench:62},
  {brand:"INTEL",series:"i7",name:"i7-12700K",arch:"Alder Lake",cores:12,threads:20,base:3.6,boost:5.0,cache:"25MB",tdp:125,year:2021,igpu:"UHD 770",gaming:72,ai:42,prod:78,bench:78},
  {brand:"INTEL",series:"i9",name:"i9-12900K",arch:"Alder Lake",cores:16,threads:24,base:3.2,boost:5.2,cache:"30MB",tdp:125,year:2021,igpu:"UHD 770",gaming:80,ai:48,prod:86,bench:85},
  {brand:"INTEL",series:"i5",name:"i5-13420H",arch:"Raptor Lake",cores:8,threads:12,base:2.1,boost:4.6,cache:"12MB",tdp:45,year:2023,igpu:"UHD",gaming:55,ai:35,prod:52,bench:60},
  {brand:"INTEL",series:"i5",name:"i5-13600K",arch:"Raptor Lake",cores:14,threads:20,base:3.5,boost:5.1,cache:"24MB",tdp:125,year:2022,igpu:"UHD 770",gaming:78,ai:48,prod:82,bench:82},
  {brand:"INTEL",series:"i7",name:"i7-13700K",arch:"Raptor Lake",cores:16,threads:24,base:3.4,boost:5.4,cache:"30MB",tdp:125,year:2022,igpu:"UHD 770",gaming:85,ai:55,prod:90,bench:88},
  {brand:"INTEL",series:"i9",name:"i9-13900K",arch:"Raptor Lake",cores:24,threads:32,base:3.0,boost:5.8,cache:"36MB",tdp:125,year:2022,igpu:"UHD 770",gaming:92,ai:65,prod:98,bench:94},
  {brand:"INTEL",series:"i9",name:"i9-14900KS",arch:"Raptor Lake R",cores:24,threads:32,base:3.2,boost:6.2,cache:"36MB",tdp:150,year:2024,igpu:"UHD 770",gaming:96,ai:68,prod:100,bench:97},
  {brand:"INTEL",series:"Ultra",name:"Intel Ultra 5 125H",arch:"Meteor Lake",cores:14,threads:18,base:1.2,boost:4.5,cache:"18MB",tdp:28,year:2024,igpu:"Arc",gaming:52,ai:60,prod:55,bench:60},
  {brand:"INTEL",series:"Ultra",name:"Intel Ultra 7 155H",arch:"Meteor Lake",cores:16,threads:22,base:1.4,boost:4.8,cache:"24MB",tdp:28,year:2024,igpu:"Arc",gaming:62,ai:72,prod:68,bench:70},
  {brand:"INTEL",series:"Ultra",name:"Intel Ultra 9 285K",arch:"Arrow Lake",cores:24,threads:24,base:3.2,boost:5.7,cache:"36MB",tdp:125,year:2024,igpu:"Xe-LPG",gaming:94,ai:88,prod:99,bench:96},
  {brand:"INTEL",series:"Xeon",name:"Xeon W-3495X",arch:"Sapphire Rapids",cores:56,threads:112,base:1.9,boost:4.8,cache:"105MB",tdp:350,year:2023,igpu:"None",gaming:60,ai:90,prod:120,bench:99},

  // AMD
  {brand:"AMD",series:"FX",name:"FX-8350",arch:"Piledriver",cores:8,threads:8,base:4.0,boost:4.2,cache:"8MB",tdp:125,year:2012,igpu:"None",gaming:18,ai:6,prod:20,bench:22},
  {brand:"AMD",series:"Ryzen 5",name:"Ryzen 5 1600",arch:"Zen",cores:6,threads:12,base:3.2,boost:3.6,cache:"16MB",tdp:65,year:2017,igpu:"None",gaming:30,ai:12,prod:36,bench:38},
  {brand:"AMD",series:"Ryzen 7",name:"Ryzen 7 1700X",arch:"Zen",cores:8,threads:16,base:3.4,boost:3.8,cache:"16MB",tdp:95,year:2017,igpu:"None",gaming:34,ai:16,prod:44,bench:44},
  {brand:"AMD",series:"Ryzen 5",name:"Ryzen 5 3600",arch:"Zen 2",cores:6,threads:12,base:3.6,boost:4.2,cache:"32MB",tdp:65,year:2019,igpu:"None",gaming:46,ai:22,prod:50,bench:54},
  {brand:"AMD",series:"Ryzen 9",name:"Ryzen 9 3900X",arch:"Zen 2",cores:12,threads:24,base:3.8,boost:4.6,cache:"64MB",tdp:105,year:2019,igpu:"None",gaming:62,ai:34,prod:78,bench:74},
  {brand:"AMD",series:"Ryzen 5",name:"Ryzen 5 5600X",arch:"Zen 3",cores:6,threads:12,base:3.7,boost:4.6,cache:"32MB",tdp:65,year:2020,igpu:"None",gaming:62,ai:30,prod:60,bench:66},
  {brand:"AMD",series:"Ryzen 5",name:"Ryzen 5 5600H",arch:"Zen 3",cores:6,threads:12,base:3.3,boost:4.2,cache:"16MB",tdp:45,year:2021,igpu:"Vega",gaming:50,ai:24,prod:52,bench:58},
  {brand:"AMD",series:"Ryzen 7",name:"Ryzen 7 5800X",arch:"Zen 3",cores:8,threads:16,base:3.8,boost:4.7,cache:"32MB",tdp:105,year:2020,igpu:"None",gaming:72,ai:40,prod:74,bench:76},
  {brand:"AMD",series:"Ryzen 7",name:"Ryzen 7 5800X3D",arch:"Zen 3 V-Cache",cores:8,threads:16,base:3.4,boost:4.5,cache:"96MB",tdp:105,year:2022,igpu:"None",gaming:84,ai:42,prod:74,bench:82},
  {brand:"AMD",series:"Ryzen 9",name:"Ryzen 9 5950X",arch:"Zen 3",cores:16,threads:32,base:3.4,boost:4.9,cache:"64MB",tdp:105,year:2020,igpu:"None",gaming:76,ai:50,prod:92,bench:86},
  {brand:"AMD",series:"Ryzen 5",name:"Ryzen 5 7600X",arch:"Zen 4",cores:6,threads:12,base:4.7,boost:5.3,cache:"32MB",tdp:105,year:2022,igpu:"RDNA2",gaming:74,ai:42,prod:68,bench:74},
  {brand:"AMD",series:"Ryzen 7",name:"Ryzen 7 7800X3D",arch:"Zen 4 V-Cache",cores:8,threads:16,base:4.2,boost:5.0,cache:"104MB",tdp:120,year:2023,igpu:"RDNA2",gaming:96,ai:55,prod:82,bench:92},
  {brand:"AMD",series:"Ryzen 9",name:"Ryzen 9 7950X",arch:"Zen 4",cores:16,threads:32,base:4.5,boost:5.7,cache:"80MB",tdp:170,year:2022,igpu:"RDNA2",gaming:88,ai:62,prod:98,bench:94},
  {brand:"AMD",series:"Ryzen 9",name:"Ryzen 9 7950X3D",arch:"Zen 4 V-Cache",cores:16,threads:32,base:4.2,boost:5.7,cache:"144MB",tdp:120,year:2023,igpu:"RDNA2",gaming:95,ai:64,prod:96,bench:96},
  {brand:"AMD",series:"Ryzen AI",name:"Ryzen AI 9 HX 370",arch:"Zen 5",cores:12,threads:24,base:2.0,boost:5.1,cache:"36MB",tdp:54,year:2024,igpu:"Radeon 890M",gaming:72,ai:90,prod:80,bench:82},
  {brand:"AMD",series:"Ryzen 9",name:"Ryzen 9 9900X",arch:"Zen 5",cores:12,threads:24,base:4.4,boost:5.6,cache:"76MB",tdp:120,year:2024,igpu:"RDNA2",gaming:86,ai:70,prod:94,bench:90},
  {brand:"AMD",series:"Ryzen 9",name:"Ryzen 9 9950X",arch:"Zen 5",cores:16,threads:32,base:4.3,boost:5.7,cache:"80MB",tdp:170,year:2024,igpu:"RDNA2",gaming:90,ai:78,prod:104,bench:98},
  {brand:"AMD",series:"Ryzen 9",name:"Ryzen 9 9950X3D",arch:"Zen 5 V-Cache",cores:16,threads:32,base:4.3,boost:5.7,cache:"144MB",tdp:170,year:2025,igpu:"RDNA2",gaming:99,ai:80,prod:106,bench:100},
  {brand:"AMD",series:"Threadripper",name:"Threadripper 7980X",arch:"Zen 4",cores:64,threads:128,base:3.2,boost:5.1,cache:"320MB",tdp:350,year:2023,igpu:"None",gaming:70,ai:95,prod:130,bench:99},
];

const RAM = [
  {gen:"DDR",speed:"400 MT/s",bandwidth:"3.2 GB/s",cas:3.0,voltage:2.5,year:2000,gaming:5},
  {gen:"DDR2",speed:"800 MT/s",bandwidth:"6.4 GB/s",cas:5.0,voltage:1.8,year:2003,gaming:12},
  {gen:"DDR3",speed:"1600 MT/s",bandwidth:"12.8 GB/s",cas:9,voltage:1.5,year:2007,gaming:30},
  {gen:"DDR3",speed:"2133 MT/s",bandwidth:"17 GB/s",cas:11,voltage:1.5,year:2014,gaming:35},
  {gen:"DDR4",speed:"3200 MT/s",bandwidth:"25.6 GB/s",cas:16,voltage:1.35,year:2017,gaming:62},
  {gen:"DDR4",speed:"3600 MT/s",bandwidth:"28.8 GB/s",cas:16,voltage:1.35,year:2019,gaming:70},
  {gen:"DDR4",speed:"4000 MT/s",bandwidth:"32 GB/s",cas:17,voltage:1.4,year:2020,gaming:74},
  {gen:"DDR5",speed:"4800 MT/s",bandwidth:"38.4 GB/s",cas:40,voltage:1.1,year:2021,gaming:78},
  {gen:"DDR5",speed:"6000 MT/s",bandwidth:"48 GB/s",cas:30,voltage:1.35,year:2022,gaming:90},
  {gen:"DDR5",speed:"7200 MT/s",bandwidth:"57.6 GB/s",cas:34,voltage:1.4,year:2023,gaming:94},
  {gen:"DDR5",speed:"8000 MT/s",bandwidth:"64 GB/s",cas:38,voltage:1.45,year:2024,gaming:97},
  {gen:"LPDDR4X",speed:"4267 MT/s",bandwidth:"34 GB/s",cas:36,voltage:0.6,year:2019,gaming:60},
  {gen:"LPDDR5",speed:"6400 MT/s",bandwidth:"51 GB/s",cas:40,voltage:0.5,year:2022,gaming:80},
  {gen:"LPDDR5X",speed:"8533 MT/s",bandwidth:"68 GB/s",cas:42,voltage:0.5,year:2024,gaming:88},
];

const STORAGE = [
  {type:"HDD",name:"WD Blue 7200RPM",capacity:"2TB",read:160,write:150,endurance:"—",boot:55,year:2015},
  {type:"SATA SSD",name:"Samsung 870 EVO",capacity:"1TB",read:560,write:530,endurance:"600 TBW",boot:18,year:2021},
  {type:"SATA SSD",name:"Crucial MX500",capacity:"1TB",read:560,write:510,endurance:"360 TBW",boot:19,year:2018},
  {type:"NVMe Gen3",name:"Samsung 970 EVO Plus",capacity:"1TB",read:3500,write:3300,endurance:"600 TBW",boot:11,year:2019},
  {type:"NVMe Gen3",name:"WD Blue SN570",capacity:"1TB",read:3500,write:3000,endurance:"600 TBW",boot:12,year:2021},
  {type:"NVMe Gen4",name:"Samsung 980 Pro",capacity:"2TB",read:7000,write:5100,endurance:"1200 TBW",boot:9,year:2020},
  {type:"NVMe Gen4",name:"WD Black SN850X",capacity:"2TB",read:7300,write:6600,endurance:"1200 TBW",boot:9,year:2022},
  {type:"NVMe Gen4",name:"Samsung 990 Pro",capacity:"2TB",read:7450,write:6900,endurance:"1200 TBW",boot:8,year:2022},
  {type:"NVMe Gen5",name:"Crucial T700",capacity:"2TB",read:12400,write:11800,endurance:"1200 TBW",boot:7,year:2023},
  {type:"NVMe Gen5",name:"Samsung 990 EVO Plus",capacity:"4TB",read:14000,write:13000,endurance:"2400 TBW",boot:6,year:2025},
];
