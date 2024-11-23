// Data.jsx
import mobile from "../images/mobile2.webp";

import lap1 from "../images/lap1.jpeg";
import add1 from "../images/ad1.jpg"
import add2 from "../images/ad2.jpg"
import ipad2 from"../images/ipad.jpeg"
import add3 from"../images/add3.jpeg";
import watch1 from"../images/watch1.jpg";
import add4 from"../images/add4.png";
import add5 from"../images/add5.png";
import add6 from"../images/add6.jpg";
import add7 from"../images/add7.jpg";
import ear1 from "../images/ear1.jpg";
import powerbank from "../images/powerbank.jpg"
import m1 from "../images/Mobiles_img/m1.jpg"
import m2 from "../images/Mobiles_img/m2.jpg"
import m3 from "../images/Mobiles_img/m3.jpg"
import m4 from "../images/Mobiles_img/m4.jpg"
import m5 from "../images/Mobiles_img/m5.jpg"
import m6 from "../images/Mobiles_img/m6.jpg"
import m7 from "../images/Mobiles_img/m7.webp"
import m8 from "../images/Mobiles_img/m8.jpg"
import m9 from "../images/Mobiles_img/m9.jpg"
import l1 from "../images/laptops_img/l1.jpg"
import l2 from "../images/laptops_img/l2.jpg"
import l3 from "../images/laptops_img/l3.jpg"
import l4 from "../images/laptops_img/l4.jpg"
import l5 from "../images/laptops_img/l5.jpg"
import l6 from "../images/laptops_img/l6.jpg"
import l7 from "../images/laptops_img/l7.jpg"
import l8 from "../images/laptops_img/l8.jpg"
import l9 from "../images/laptops_img/l9.jpg"

const products = [
  {
    id: 1,
    name: "OnePlus 12R (Iron Gray, 8GB RAM, 128GB Storage)",
    image: mobile,
    discount: "30",
    price: "37,999",
    l1: "Processor: High performance MediaTek G85 ; Enhance gaming with 1GHz GPU | 8GB of RAM including 4GB virtual 6.74 HD+ 90Hz display with Corning Gorilla Glass 3 Protection | 50MP AI Triple camera Fast Side fingerprint 5000mAh Battery",
    l2: "6.74 HD+ 90Hz display with Corning Gorilla Glass 3 Protection, 600nits in High Brightness mode",
    l3: "50MP AI Triple camera with Primary sensor of f/1.8 (4-in-1 super pixel) with the following modes: Photo | Portrait | Night | Video | 50MP mode | Time-lapse | Classic film filters | Frame | HDR | Google lens | Voice Shutter",
    description: "Latest smartphone with advanced features.Pristine Display with Aqua Touch: Super-Bright 1.5K LTPO ProXDR Display with Dolby Vision, and a DisplayMate A+ rating, Intellignent Eye Care certified by TÜV Rheinland, 4500 nits Peak Brightness, Aqua Touch helps you stay swiping, even with wet hands",
    add:add1,
  },
  {
    id: 2,
    name: "Lenovo LOQ 2024 Intel Core i7-13650HX 15.6 (39.6cm) 144 Hz 300Nits FHD Gaming Laptop (16GB/512GB SSD/Win 11/NVIDIA RTX 4050 6GB Graphics/100%",
    image: lap1,
    discount: "20",
    price: "1,00,990",
    l1: "Processor: Intel Core i7-13650HX | P-core 2.6 / 4.9GHz, E-core 1.9 / 3.6GHz | 14 Cores | 20 Threads | 24MB Cache",
    l2: "Display: 15.6 FHD (1920x1080) IPS Technology | 144 Hz Refresh Rate | 100% sRGB |Brightness: 300Nits Anti-glare | NVDIA G-Sync || Connectivity : Wifi 6E 11ax (2x2) | Bluetooth 5.1",
    l3: "Graphics: NVIDIA GeForce RTX 4050 6GB GDDR6, Boost Clock 2370MHz, TGP 105W | Free-Sync and G-Sync || Cooling: Dual 85mm 12V high-speed fans and larger vents ensure quiet and powerful cooling.",
    description: "Audio: 2x 2W HD Stereo Speakers | Nahimic Audio with Surround Sound, Sound Tracker, Night Mode, Sound Sharing & Content Profiles || Camera: FHD 1080p | E-cam Shutter | Integrated Dual Array Microphone",
    add:add2
  },
  {
    id: 3,
    name: "Apple iPad (10th generation): with A14 Bionic chip, 27.69 cm (10.9″) Liquid Retina display, 64GB, Wi-Fi 6",
    image: ipad2,
    discount: "13",
    price: "34,900",
    l1: "WHY IPAD — Colourfully reimagined and more versatile than ever, iPad is great for the things you do every day. With an all-screen design, 27.69 cm (10.9″) Liquid Retina display, powerful A14 Bionic chip, superfast Wi-Fi and four gorgeous colours, iPad delivers a powerful way to create, stay connected and get things done.",
    l2: "iPadOS + APPS — iPadOS makes iPad more productive, intuitive and versatile. With iPadOS, run multiple apps at once, use Apple Pencil to write in any text field with Scribble, and edit and share photos. iPad comes with essential apps like Safari, Messages and Keynote, with over a million more apps available on the App Store.",
    l3: "FAST WI-FI CONNECTIVITY — Wi-Fi 6 gives you fast access to your files, uploads and downloads, and lets you seamlessly stream your favourite shows.",
    description:"APPLE PENCIL AND MAGIC KEYBOARD FOLIO — With Apple Pencil (1st generation), iPad transforms into an immersive drawing canvas and the world’s best note‑taking device. The Magic Keyboard Folio features a versatile two-piece design with a detachable keyboard and a protective back panel that both attach magnetically to iPad. (Accessories are sold separately.)",
    add:add3
  },
  {
    id: 4,
    name:"Apple Watch Ultra 2 [GPS + Cellular 49mm] Smartwatch with Rugged Titanium Case & Olive Alpine Loop Large. Fitness Tracker, Precision GPS",
    image: watch1,
    discount: "18",
    price: "89,900",
    l1:"WHY APPLE WATCH ULTRA 2 — Rugged, capable and built to meet the demands of endurance athletes, outdoor adventurers and water sports enthusiasts — with a specialised strap for each. The S9 SiP enables a super-bright display and a magical new way to quickly and easily interact with your Apple Watch without touching the display. Up to 36 hours of battery life and 72 hours in Low Power Mode",
    l2:"CARBON NEUTRAL — Apple Watch Ultra 2 paired with the latest Alpine Loop or Trail Loop is carbon neutral.",
    l3:"EXTREMELY RUGGED, INCREDIBLY CAPABLE—49mm corrosion-resistant titanium case. Large Digital Crown and customizable Action button for instant control over a variety of functions. 100m water resistance.",
    description:"FOR ATHLETES — Advanced metrics and views in the Workout app, including Heart Rate Zones, custom workouts, and new cycling workout views. Precision dual-frequency GPS provides incredible accuracy for calculating distance, pace, and route maps. Trail Loop is a light, thin, and flexible band, designed especially for all workout types.FOR OUTDOOR ADVENTURERS — The Compass app delivers helpful views and details like elevation, incline, longitude, and latitude. See the last place where you had cellular reception. Mark your location with Compass Waypoints. Backtrack uses GPS to map where you’ve been so you can retrace your steps. Alpine Loop is an extremely rugged and secure band to meet the needs of all outdoor adventurers.",
    add:add4
  },
  {
    id: 5,
    name:"boAt Bassheads 105 Wired in Ear Earphones with Mic (Black)",
    image: ear1,
    discount: "10",
    price: "399",
    l1:"BassHeads 105 delivers pure audio bliss via its 13mm drivers that makes you groove in style with that enhanced bass",
    l2:"Attend calls, activate voice assistant, access playback and seize complete control of the day’s flow courtesy its in-line mic and one-button control",
    l3:"Traverse your city with the perfect length cable made for you to stroll through with ease, Rated Power - 3mW",
    description:"It has a half in-ear design that adds to the ergonomic nature of this wired masterpiece Warranty Description: 1 Year Warranty From The Date Of Purchase; Headphones Jack: 3.5mm Jack; Size Name: One Size",
    add:add1
  },
  {
    id: 6,
    name:"MI Power Bank 3i 20000mAh Lithium Polymer 18W Fast Power Delivery Charging| Triple Output | Black.",
    image: powerbank,
    discount: "10",
    price: "2,149",
    l1:"With the use of advanced resistance-capacitance sensors, the lithium polymer batteries are not only safer, but they improve the charging conversion rates and stabilize the discharging voltage",
    l2:"Smart Power Management Double Press for Low Power Charging Simply double press the power button to enter a 2-hour low charging mode to safely charge low power devices such as the Mi Band 4, Mi True Wireless Earphones 2 etc.",
    l3:"Your mobile devices are effectively shielded against overheating, over current and short circuits with the robust 12 layer advanced protective design.",
    description:"The power delivery support helps in type-c to type-c charging output and also supports type c to lightning charging across multiple devices. The type-c port also acts as an input source for re-charging the power bank The all new powerful 3i power bank supports re-charging via the type-c port or the micro-usb. You need not search for a particular cable to charge the power bank anymore.",
    add:add3
  },
  {
    id: 7,
    name:"Redmi 13C (Stardust Black, 6GB RAM, 128GB Storage) | Powered by 4G MediaTek Helio G85 | 90Hz Display | 50MP AI Triple Camera",
    image: m1,
    discount: "13",
    price: "8,499",
    l1:"Processor: High performance MediaTek G85 ; Enhance gaming with 1GHz GPU | 12GB of RAM including 6GB virtual | 6.74 HD+ 90Hz display with Corning Gorilla Glass 3 Protection | 50MP AI Triple camera |Fast Side fingerprint | 5000mAh Battery",
    l2:"6.74 HD+ 90Hz display with Corning Gorilla Glass 3 Protection, 600nits in High Brightness mode",
    l3:"50MP AI Triple camera with Primary sensor of f/1.8 (4-in-1 super pixel) with the following modes: Photo | Portrait | Night | Video | 50MP mode | Time-lapse | Classic film filters | Frame | HDR | Google lens | Voice Shutter",
    description:"Processor: High performance MediaTek G85 ; Enhance gaming with 1GHz GPU | 12GB of RAM including 6GB virtual | 6.74HD+ 90Hz display with Corning Gorilla Glass 3 Protection | 50MP AI Triple camera |Fast Side fingerprint | 5000mAh Battery 6.74 HD+ 90Hz display with Corning Gorilla Glass 3 Protection, 600nits in High Brightness mode",
    add:add2
  },
  {
    id: 8,
    name:"Lava O2 (Imperial Green, 8GB RAM, UFS 2.2 128GB Storage) |AG Glass Back|T616 Octacore Processor|18W fast charging|6.5 inch 90Hz Punch Hole Display|50MP AI Dual Camera|Upto 16GB expandable RAM",
    image: m2,
    discount: "20",
    price: "7,999",
    l1:'(8 GB RAM,128 GB UFS2.2 ROM); Upto 16GB Expandable RAM',
    l2:"50 MP AI Dual Camera",
    l3:'18W Fast Charger with Type C USB Cable',
    description:'‎1 Lithium Polymer batteries required. (included) (8 GB RAM,128 GB UFS2.2 ROM); Upto 16GB Expandable RAM 18W Fast Charger with Type C USB Cable',
    add:add2
  },
  {
    id: 9,
    name:"Oneplus Nord CE4 (Celadon Marble, 8GB RAM, 128Gb Storage)",
    image: m3,
    discount: "10",
    price: "24,999",
    l1:'Processor: The Qualcomm Snapdragon 7 Gen 3 chipset not only gives your Nord CE4 silly levels of OnePlus Fast and Smooth performance, but it also guards your battery life and maximizes power efficiency. What  s more? You get to experience blazing download speeds up to 5Gbps deliver unceasing mobile gaming, work-from-anywhere productivity, and more',
    l2:"Design: OnePlus Nord CE4 comes in 2 colorways - Celadon Marble, a first for Nord and Dark Chrome, our signature variant. Oh, and it’s mega-durable… This phone’s bezel material is so tough, it’s thinking of taking up cage fighting. Seriously, we dropped it 1.5 meters onto marble, and it survived2. That’s tough as nails!",
    l3:'Battery & Charging: The most powerful fast charging in Nord history, with 100W SuperVOOC charging and 5500mAh Battery. Handle your low battery woes like a boss with 100W SUPERVOOC fast charging that boosts your phone to 100% power in 30 minutes. Smart Charging 4.0 learns your usage habits to optimize charging and prevent overheating and battery aging. After 10mins charging (from 1%), you get to enjoy · 7.3hrs of video watching (app:YouTube) · 19.7hrs of music listening (app:Spotify) · 10.9hrs of voice calling (app: WhatsApp) · 6.7hrs of social media browsing (app:Instagram) · 3.9hrs of gaming (app:Battlegrounds India)',
    description:'Camera: SONY LYT-600 (IMX882) 50MP camera sensor with OIS ensures that you get more stable and clearer pictures, no matter off road or uneven terrains, capture moving subjects and your unshakeable spirit. Further, with flagship-level RAW HDR algorithm, OnePlus Nord CE4 has better photography performance when taking portraits in sunny day. RAM & ROM: No one likes a slow phone, so OnePlus Nord CE4 comes with 8GB of RAM and up to 8GB of virtual RAM expansion to keep your app switching and loading slick and speedy. Plus, you get lots of space for saving evidence of your adventures, with up to 256GB of storage (ROM) and a second SIM card slot that supports microSD cards for expandable storage up to 1TB!',
    add:add2
  },
  {
    id: 10,
    name:'OnePlus 11R 5G (Galactic Silver, 8GB RAM, 128GB Storage)',
    image: m4,
    discount: "25",
    price: "29,000",
    l1:'Camera: Sensor: 50MP Main Camera with Sony IMX890 (OIS supported), 8MP Ultrawide Camera (FOV: 120 degree) and Macro Lens; 16MP Front (Selfie) Camera with EIS support.',
    l2:"Camera Modes: Nightscape, Ultra HDR, Smart Scene Recognition, Portrait Mode, Pro Mode, Panorama, Tilt-Shift mode, Long Exposure, Dual-View Video, Retouch",
    l3:'100W Fast Charger with Type C USB Cable',
    description:'Camera: Sensor: 50MP Main Camera with Sony IMX890 (OIS supported), 8MP Ultrawide Camera (FOV: 120 degree) and Macro Lens; 16MP Front (Selfie) Camera with EIS support.Camera Modes: Nightscape, Ultra HDR, Smart Scene Recognition, Portrait Mode, Pro Mode, Panorama, Tilt-Shift mode, Long Exposure, Dual-View Video, Retouch, Movie Mode, Raw file, Filters, Super Stable, Video Nightscape, Video HDR, Video Portrait, Focus Tracking, Timelapse, Macro modeDisplay: 6.7 Inches; 120 Hz Super Fluid AMOLED; Resolution: 2772 X 1240 pixels ,450 ppi, 20.1:9, 10-bit Color Depth, HDR10+Operating System: OxygenOS based on Android 1',
    add:add1
  },
  {
    id: 11,
    name:'OnePlus 11R 5G (Galactic Silver, 8GB RAM, 128GB Storage)',
    image: m5,
    discount: "10",
    price: "8,530",
    l1:'INTERFACE & PROCESSOR - Android 13 Operating System having One UI 5.1 platform with Qualcomm Snapdragon 680 Processor | 2.4GHz, 1.9GHz Octa-Core Processor',
    l2:'CAMERA - 50 MP (F1.8) Main Wide Angle + 2 MP (F2.4) Macro + 2 MP (F2.4) Depth | 13MP (F2.0) Front Camera | Video Maximum Resolution of Full HD (1920 x 1080) @60fps',
    l3:'DISPLAY - 17.08 Centimeters (6.7"Inch) PLS LCD Display, FHD+ Resolution with 1080 x 2400 Pixels , 391 PPI with 16M Colors and 90Hz Refresh Rate',
    description:'CAMERA - 50 MP (F1.8) Main Wide Angle + 2 MP (F2.4) Macro + 2 MP (F2.4) Depth | 13MP (F2.0) Front Camera | Video Maximum Resolution of Full HD (1920 x 1080) @60fps',
    add:add4
  },
  {
    id: 12,
    name:'realme 12 Pro 5G (Submarine Blue, 8GB RAM 256 GB Storage)',
    image: m6,
    discount: "20",
    price: "24,999",
    l1:'Embark on a journey of photography excellence with the realme 12 Pro 5Gs unmatched 32 MP 2X Flagship Telephoto Portrait Camera. In a league of its own, this camera brings 2x optical zoom and 4x lossless zoom to the forefront, delivering superior sharpness, noise control, and dynamic range that leaves rivals behind.',
    l2:'Transform your photography with the realme 12 Pro 5Gs pioneering 50 MP SONY IMX882 OIS Camera. Boasting the largest sensor in its segment, this camera crafts unmatched HDR and nightscape brilliance. Bid farewell to blur with SuperOIS, while the Ultra Clarity Engine and DIS Engine ensure unparalleled precision. Elevate your photography game with this game-changing device that captures moments with unprecedented clarity',
    l3:'mmerse yourself in the fusion of technology and elegance with the realme 12 Pro 5G s Luxury Watch Design. Crafted in collaboration with master watchmaker Ollivier Savelli, this smartphone integrates classic luxury watch elements. Featuring a precision Dial, Golden Fluted Bezel, and intricate textures reminiscent of high-end watch craftsmanship, this series ushers in a new era of light luxury',
    description:'Power up at lightning speed with the 67 W SUPERVOOC Charge and revel in extended usage with the robust 5000 mAh battery. Stay connected longer with reduced wait times. The dual charge pump technology and intelligent five-core chip protection ensure optimal charging efficiency and top-tier device safe',
    add:add3
  },
  {
    id: 13,
    name:'Redmi 13C 5G',
    image: m7,
    discount: "22",
    price: "10,999",
    l1:'Embark on a journey of photography excellence with the realme 12 Pro 5Gs unmatched 32 MP 2X Flagship Telephoto Portrait Camera. In a league of its own, this camera brings 2x optical zoom and 4x lossless zoom to the forefront, delivering superior sharpness, noise control, and dynamic range that leaves rivals behind.',
    l2:'Transform your photography with the realme 12 Pro 5Gs pioneering 50 MP SONY IMX882 OIS Camera. Boasting the largest sensor in its segment, this camera crafts unmatched HDR and nightscape brilliance. Bid farewell to blur with SuperOIS, while the Ultra Clarity Engine and DIS Engine ensure unparalleled precision. Elevate your photography game with this game-changing device that captures moments with unprecedented clarity',
    l3:'mmerse yourself in the fusion of technology and elegance with the realme 12 Pro 5G s Luxury Watch Design. Crafted in collaboration with master watchmaker Ollivier Savelli, this smartphone integrates classic luxury watch elements. Featuring a precision Dial, Golden Fluted Bezel, and intricate textures reminiscent of high-end watch craftsmanship, this series ushers in a new era of light luxury',
    description:'Power up at lightning speed with the 67 W SUPERVOOC Charge and revel in extended usage with the robust 5000 mAh battery. Stay connected longer with reduced wait times. The dual charge pump technology and intelligent five-core chip protection ensure optimal charging efficiency and top-tier device safe',
    add:add3
  },
  {
    id: 14,
    name:"iQOO Z9 5G (Graphene Blue, 8GB RAM, 128GB Storage)120Hz AMOLED with 1800 nits Local Peak Brightness | 44W Charger in The Box",
    image: m8,
    discount: "8",
    price: "19,999",
    l1:" Powered by MediaTek Dimensity 7200 built on flagship grade TSMC 2nd Gen 4nm process with a clock speed of 2.8GHz",
    l2:"Fast & Fully Loaded Battery - 5000mAh long-lasting battery with 44W FlashCharge",
    l3:'Battery & Charging: The most powerful fast charging in Nord history, with 100W SuperVOOC charging and 5500mAh Battery. Handle your low battery woes like a boss with 100W SUPERVOOC fast charging that boosts your phone to 100% power in 30 minutes. Smart Charging 4.0 learns your usage habits to optimize charging and prevent overheating and battery aging. After 10mins charging (from 1%), you get to enjoy · 7.3hrs of video watching (app:YouTube) · 19.7hrs of music listening (app:Spotify) · 10.9hrs of voice calling (app: WhatsApp) · 6.7hrs of social media browsing (app:Instagram) · 3.9hrs of gaming (app:Battlegrounds India)',
    description:'Camera: SONY LYT-600 (IMX882) 50MP camera sensor with OIS ensures that you get more stable and clearer pictures, no matter off road or uneven terrains, capture moving subjects and your unshakeable spirit. Further, with flagship-level RAW HDR algorithm, OnePlus Nord CE4 has better photography performance when taking portraits in sunny day. RAM & ROM: No one likes a slow phone, so OnePlus Nord CE4 comes with 8GB of RAM and up to 8GB of virtual RAM expansion to keep your app switching and loading slick and speedy. Plus, you get lots of space for saving evidence of your adventures, with up to 256GB of storage (ROM) and a second SIM card slot that supports microSD cards for expandable storage up to 1TB!',
    add:add5,
  },
  {
    id: 15,
    name:"samsung Galaxy A35 5G| 8GB RAM, 128GB Storage",
    image: m9,
    discount: "13",
    price: "25,849",
    l1:'Processor: The Qualcomm Snapdragon 7 Gen 3 chipset not only gives your Nord CE4 silly levels of OnePlus Fast and Smooth performance, but it also guards your battery life and maximizes power efficiency. What  s more? You get to experience blazing download speeds up to 5Gbps deliver unceasing mobile gaming, work-from-anywhere productivity, and more',
    l2:"Design: OnePlus Nord CE4 comes in 2 colorways - Celadon Marble, a first for Nord and Dark Chrome, our signature variant. Oh, and it’s mega-durable… This phone’s bezel material is so tough, it’s thinking of taking up cage fighting. Seriously, we dropped it 1.5 meters onto marble, and it survived2. That’s tough as nails!",
    l3:'Battery & Charging: The most powerful fast charging in Nord history, with 100W SuperVOOC charging and 5500mAh Battery. Handle your low battery woes like a boss with 100W SUPERVOOC fast charging that boosts your phone to 100% power in 30 minutes. Smart Charging 4.0 learns your usage habits to optimize charging and prevent overheating and battery aging. After 10mins charging (from 1%), you get to enjoy · 7.3hrs of video watching (app:YouTube) · 19.7hrs of music listening (app:Spotify) · 10.9hrs of voice calling (app: WhatsApp) · 6.7hrs of social media browsing (app:Instagram) · 3.9hrs of gaming (app:Battlegrounds India)',
    description:'Camera: SONY LYT-600 (IMX882) 50MP camera sensor with OIS ensures that you get more stable and clearer pictures, no matter off road or uneven terrains, capture moving subjects and your unshakeable spirit. Further, with flagship-level RAW HDR algorithm, OnePlus Nord CE4 has better photography performance when taking portraits in sunny day. RAM & ROM: No one likes a slow phone, so OnePlus Nord CE4 comes with 8GB of RAM and up to 8GB of virtual RAM expansion to keep your app switching and loading slick and speedy. Plus, you get lots of space for saving evidence of your adventures, with up to 256GB of storage (ROM) and a second SIM card slot that supports microSD cards for expandable storage up to 1TB!',
    add:add6
  },
  {
    id: 16,
    name:"HP Laptop 15, 12th Gen i5|Graphics, Backlit Keyboard, Dual Speakers, (Win 11, MSO 2021, Silver, 1.69 kg), 15s-fy5007TU",
    image: l1,
    discount: "28",
    price: "46,999",
    l1:'Processor: Intel Core i5-1235U (up to 4.4 GHz with Intel Turbo Boost Technology,12 MB L3 cache, 10 cores, 12 threads)| Memory: 8 GB DDR4-3200 MHz',
    l2:"Operating System: Windows 11 Home Single Language |Microsoft Office Home & Student Edition 2021",
    l3:"Other Features: Camera: HP True Vision 720p HD camera with temporal noise reduction and integrated dual array digital microphones",
    description:"Other Features: Camera: HP True Vision 720p HD camera with temporal noise reduction and integrated dual array digital microphones| Keyboard : Intel Iris Xᶱ Graphics|Battery: 3-cell, 41 Wh Li-ion; Up to 7 hours and 30 minutes |Audio: Dual speakersOther Features: Camera: HP True Vision 720p HD camera with temporal noise reduction and integrated dual array digital microphones",
    add:add6
  },
  {
    id: 17,
    name:"ASUS TUF Gaming F15 ",
    image: l2,
    discount: "36",
    price: "58,990",
    l1:"Processor: Intel Core i5-11400H Processor 2.7 GHz (12M Cache, up to 4.5 GHz, 6 Cores) efficient multitasking and improved performance in demanding applications.",
    l2:"Graphics: NVIDIA GeForce RTX 3050 4GB GDDR6 VRAM with Up to 1600MHz at 60W (75W with Dynamic Boost)",
    l3:"Operating System: Windows 11 Homewith Lifetime Validity | Software Included: Pre-installed Office Home and Student with Lifetime Validity",
    description:"Display: 39.62 cms (15.6) FHD (1920 x 1080) Anti-glare display having 16:09 Aspect Ratio || 144Hz refresh rate || 250nits Brightness Processor: 5000 Series, AMD Ryzen 7 5800H Mobile Processor (8-core/16-thread, 20MB cache, up to 4.4 GHz max boost)",
    add:add2,
  },
  {
    id: 18,
    name:"Dell 15 Thin & Light Laptop|16GB DDR4/512GB SSD/Intel UHD Graphics",
    image: l3,
    discount: "27",
    price: "48,990",
    l1:"Processor: Intel Core i5-1235U 12th Generation (up to 4.40 GHz, 12MB 10 Cores)",
    l2:"RAM & Storage: 16GB, 2x8GB, DDR4, 3200MHz, (2 DIMM Slots, Expandable upto 16GB) & 512GB SSD",
    l3:"Display: 15.6' FHD WVA AG 120Hz 250 nits Narrow Border",
    description:"Processor: Intel Core i5-1235U 12th Generation (up to 4.40 GHz, 12MB 10 Cores) Operating System: Windows 11 Homewith Lifetime Validity | Software Included: Pre-installed Office Home and Student with Lifetime Validity",
    add:add1,
  },
  {
    id: 19,
    name:"Lenovo IdeaPad Gaming 3 Laptop| Ryzen 5 5500H 15.6 (39.62cm) FHD IPS 300nits 144Hz (8GB/512GB",
    image: l4,
    discount: "22",
    price: "45,990",
    l1:"Lenovo, One of the below: Hefei Bitland Information Technology Co.,Ltd - No.4088 Jiuxiu Road National Hefei economic &",
    l2:"RAM & Storage: 12GB, 2x8GB, DDR4, 3300MHz, (2 DIMM Slots, Expandable upto 16GB) & 512GB SSD",
    l3:"Display: 15.6' FHD WVA AG 120Hz 250 nits Narrow Border",
    description:"Processor: Intel Core i5-1235U 11th Generation (up to 4.40 GHz, 12MB 10 Cores) Operating System: Windows 11 Homewith Lifetime Validity | Software Included: Pre-installed Office Home and Student with Lifetime Validity",
    add:add2,
  },
  {
    id: 20,
    name:"Acer Aspire Lite 12th|Windows 11 Home/8 GB RAM/512GB SSD",
    image: l5,
    discount: "15",
    price: "29,990",
    l1:"Accer, One of the below: Hefei Bitland Information Technology Co.,Ltd - No.4088 Jiuxiu Road National Hefei economic &",
    l2:"RAM & Storage: 12GB, 2x8GB, DDR4, 3300MHz, (2 DIMM Slots, Expandable upto 16GB) & 512GB SSD",
    l3:"Display: 15.6' FHD WVA AG 120Hz 250 nits Narrow Border",
    description:"Processor: Intel Core i5-1235U 11th Generation (up to 4.40 GHz, 12MB 10 Cores) Operating System: Windows 11 Homewith Lifetime Validity | Software Included: Pre-installed Office Home and Student with Lifetime Validity",
    add:add3,
  },
  {
    id: 21,
    name:"HONOR MagicBook X16 Pro|13th Gen Intel Core i5-13420H (16GB/512GB NVMe",
    image: l6,
    discount: "10",
    price: "33,990",
    l1:"Accer, One of the below: Hefei Bitland Information Technology Co.,Ltd - No.4088 Jiuxiu Road National Hefei economic &",
    l2:"RAM & Storage: 12GB, 2x8GB, DDR4, 3300MHz, (2 DIMM Slots, Expandable upto 16GB) & 512GB SSD",
    l3:"Display: 15.6' FHD WVA AG 120Hz 250 nits Narrow Border",
    description:"Processor: Intel Core i5-1235U 11th Generation (up to 4.40 GHz, 12MB 10 Cores) Operating System: Windows 11 Homewith Lifetime Validity | Software Included: Pre-installed Office Home and Student with Lifetime Validity",
    add:add4,
  },
  {
    id: 22,
    name:" DELL Latitude 5490|Core i5 8th Gen Laptop, 16 GB RAM, 512GB SSD",
    image: l7,
    discount: "27",
    price: "23,990",
    l1:"Dell, One of the below: Hefei Bitland Information Technology Co.,Ltd - No.4088 Jiuxiu Road National Hefei economic &",
    l2:"RAM & Storage: 8GB, 2x8GB, DDR4, 3300MHz, (2 DIMM Slots, Expandable upto 16GB) & 512GB SSD",
    l3:"Display: 15.6' FHD WVA AG 120Hz 250 nits Narrow Border",
    description:"Processor: Intel Core i5-1235U 11th Generation (up to 4.40 GHz, 12MB 10 Cores) Operating System: Windows 11 Homewith Lifetime Validity | Software Included: Pre-installed Office Home and Student with Lifetime Validity",
    add:add5,
  },
  {
    id: 23,
    name:"Dell Latitude 5270|6th Gen Intel Core i5 Thin & Light",
    image: l8,
    discount: "21",
    price: "15,990",
    l1:"Dell, One of the below: Hefei Bitland Information Technology Co.,Ltd - No.4088 Jiuxiu Road National Hefei economic &",
    l2:"RAM & Storage: 8GB, 2x8GB, DDR4, 3300MHz, (2 DIMM Slots, Expandable upto 16GB) & 512GB SSD",
    l3:"Display: 15.6' FHD WVA AG 120Hz 250 nits Narrow Border",
    description:"Processor: Intel Core i5-1235U 11th Generation (up to 4.40 GHz, 12MB 10 Cores) Operating System: Windows 11 Homewith Lifetime Validity | Software Included: Pre-installed Office Home and Student with Lifetime Validity",
    add:add6,
  },
  {
    id: 24,
    name:"Dell G15-5530 Gaming |Intel Core i5-13450HX Processor, 16GB DDR5",
    image: l7,
    discount: "24",
    price: "17,500",
    l1:"Dell, One of the below: Hefei Bitland Information Technology Co.,Ltd - No.4088 Jiuxiu Road National Hefei economic &",
    l2:"RAM & Storage: 8GB, 2x8GB, DDR4, 3300MHz, (2 DIMM Slots, Expandable upto 16GB) & 512GB SSD",
    l3:"Display: 15.6' FHD WVA AG 120Hz 250 nits Narrow Border",
    description:"Processor: Intel Core i5-1235U 11th Generation (up to 4.40 GHz, 12MB 10 Cores) Operating System: Windows 11 Homewith Lifetime Validity | Software Included: Pre-installed Office Home and Student with Lifetime Validity",
    add:add7,
  },
];

export default products;
