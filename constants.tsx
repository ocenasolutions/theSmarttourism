
import { Destination, Package, Stay, Testimonial } from './types';

export const DESTINATIONS: Destination[] = [
  {
    id: '1',
    name: 'Rajasthan',
    tagline: 'Royalty in every grain of sand',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDIVQAWIe9wA_gMRXdmkbQis5rgAJQTIBuNolU5UXNGMAqjBreVwtovlz22Zj-nTWuzt9nk2y2Qnc6_tIDtKZ1yq-adh8t8T1TIQSwdGtVpyRtUaMaeyPSwJpG6Mk6XHeBow0VEkewsjwpT2Md7e8uKjP8iRzfXdDXFm5sg_vuJVy-XUvjFHMp7kq5vnL-IxNkUcirAYi-7HG3xEhrT8PVl69VrODiAtmnyjiql2a1mr6pmfscsmPZfyUWYRVG-5amiAlEDHGcH1Zs8'
  },
  {
    id: '2',
    name: 'Goa',
    tagline: 'Beaches & Beyond',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAlcephet-qMWvlT9yr-5NSub2Y_sPxHUkvVyaYvZWzFz2DiPWrUGQ_GIBukZCANqUQikXK1bSzsPwsPIPhM253gktXSGUPBFVB1sCqHKo120XixyDh9p2T7erQzHOGVNryL2HGH-wGkxgqtsflaVtUYQuIOdswpLbgVpHoKb3QOdqRz5yz7CwLHGavLKa_tmaJj-CsdtTnTYZhgG6ICE9KigDYm18K3caBiIdP5GiZnHiYIPDlRgmfx0CoPnGYoOQa072KXMx_2U2b'
  },
  {
    id: '3',
    name: 'Dubai',
    tagline: 'Future is here',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAeZnR9uvVFL528GPltlQVEodUm3nihUBGqty5SSbdVepFr8z9DwHSd_TzNzFd5qNahncZ1sgix4Lg2uMFSlvSOTomnNRiVlw6GV4AoHi8TY9SPAT61nddrcaPlfK-LLvuk00c7aUuy0pDIZcfTdnR5x57tdQU17Kpz7ND6rPsKeWBr_8fBkOvCg4fLYJk4NtD4aV42QRBXJo0aHauA_lpXcr0V_hTg1wZRJbJiygmCqya_BSBxtTX0Nr7oy2J5YNIXBSpAf_vkW1Ls'
  }
];

export const PACKAGES: Package[] = [
  {
    id: '1',
    title: 'Himachal Backpacker Trail',
    description: '7 Days of trekking, camping, and local vibes.',
    price: 499,
    type: 'Adventure',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDgMxzxfBMC6A6b-KtrAp3RDCUtDrMAICAMTpmny6sLIgTK13zSQY5Juud8xJIViR3f9xuW6-Ta24r70tEBHby2NrPyes4Qg0d0xlgDQ6Nto17VIMbJlyi8adVIF1QP0o8-GgMg_p0g43jTBFTe197Wu53aTRsaGLIBffgVT4l1GUettM73orjieWdLwr0_EPkKaFtzydO0dZj3zKafnQxxCg6bvJQgqjG5nt6KXJoMMoiiKLkNX0RMIrMh6W1Bs2I3rtMdYMWPf6NN'
  },
  {
    id: '2',
    title: 'Maldives Luxury Retreat',
    description: 'Exclusive overwater villas & sunset dinners.',
    price: 1299,
    type: 'Honeymoon',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCgpxdd_wUegSvANYr1v9LigeBiJGioiVfiGd8XYvtZ-VEe5pflCdCjOU0-l1U3bTM8dZ2e4x7QEnRvWVNftPepSMMgZ5Td1RAOb86hBgJM7Cebqq4414konSpr7FWL6aigY1Ei5pZVtjrCvoClxG46FOQjNispZrC9cU2RmGxvHK4VG68Ynm6JKcTbY7SSW6IvvWzOlPaduC6kOkmYospQhctIWWxSyAfWl2vBN7hKdIrNYFCsmyY6KLD1_-_71Il6rNCF_onOGZKV'
  },
  {
    id: '3',
    title: 'Tokyo Neon Nights',
    description: 'Explore the fusion of tech and tradition.',
    price: 899,
    type: 'City Break',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCryrJKnIAcLqdVLWUdSLwBOVcQl1hztCWD3XhqA411tUJWIvIudzCi1xZggtptw66_BbR-gjiicoeAMq-Hg0FNmg-b8z1fj7xXca5yhIo1MTYHFrxMn6LlO5bKKIiUn8JgLXB9SESBKIfqJAQTR6uiEZx0oztSWFYxo_TGwL0CJ9uQ2yzsMglZ6AkwiwR5cXv57emyq4LyhQ2Kc6ArX0W3h_6H-Z8j_3m4GY7hzmnPMF3Ld3prREEemTTi07KQSJGJp625AQqJo7O2'
  }
];

export const STAYS: Stay[] = [
  {
    id: '1',
    name: 'The Jungle Bubble Lodge',
    location: 'Udaipur, Rajasthan',
    rating: 4.9,
    reviews: 120,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCkrdA1cad9V4tc98VpfKkXPalcNl4y-DLe3jRa4PyFaHRvhDFmdylHAY6YkPNYSGARexPwR8hartBFTHHs59qxIsftA-FU8geGwgDrN0sx4bP5dLw6vusUfhSCpck9HzKt2TUN3QkGmEbSjXILiFa4xmd10GsXMIdbroWYPuZgXXGh5R-KCvU1ynD7FOiHmbIs31SbQ_p4KABRH-9nX-yoQs_SQ13umMRldUN56q2KNMHF0Cwx_naPLOPsijZ9CSMBXpsbwhDYlvOR'
  },
  {
    id: '2',
    name: 'Oceanic Minimalism Villa',
    location: 'North Goa, India',
    rating: 5.0,
    reviews: 88,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuASRidlWtpOEy_CMdZ5KY7OGq1cE6TRxwEeH9S1M6r5dkpWaDSR_5HdIIE5je1qM8NuTIhhsieHv0BoGI7aqKArP82WG1bc6ZPtkcbm2PPzSJL7_Ba49ruxZsI_zoDPNq_VzoXttHLly0hVZ-Zx2WHbactzYydgBRxBsdjtLpGwwGd2LkFq84dnE3aDd8rK6UFGThC0oWex1CY0lhBNFTQFpokTHmiqUy35NVsyc66vRPmeAHt7lUf5jMyN6TFS88rHp7Ros3Z5Jq0k'
  },
  {
    id: '3',
    name: 'The Skyline Penthouse',
    location: 'Downtown, Dubai',
    rating: 4.7,
    reviews: 240,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuASDJ8ZKRaHxcBwqWbYwIhl67JkBogUggGyGEMJh71bM-Z_86PaMc_ftj04wdLZ2boht4eYUFIUiaRuX0Lw7uZ5_J2mnP-q2we8VLoGi06X-D4Yh6Iw1KfvyX6Q46ihYIyq8ELBKuDoK-_acgh05-J3ztRt4RvznUg80_1ZYj1K9dCOSIk9fJKi3RVdv72Z77v0P-uUqlnojxFIhlAkZCikOoI8CYaUPBuzVQcffluQjfIhvOCHK12fRz_KQV8l_BV2zPHKPoYATMA-'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Aarav K.',
    handle: '@aaravtravels',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDk0xgfPU55vIcA-F2K2p1RiWbEBlI4-luWnVOCqoNVgB3PmGEhzn8XZ_3gjlAS3y-ysUimFOkskLnHZzX4I1LWS0U9Rxk4sQsY6zbq_y8OXVliuwAwcHMp5hchtBHfYPioV5RwJbf9Ram-Fka8uFtj0XkgPeVq2D76O2btyxWn1sQhDQhnFjPqleeluE5WSb7acmGpE1nDU2uW9Juud9ZDzFelQD4ea779FbKFy2XAh-2ShqF6wEOQ5oLK78zCl9AvQF0Ug-f2weGV',
    rating: 5,
    content: "Literally life-changing. Asked for a quote for a 'vibey but cheap' Goa trip and they absolutely delivered. No more 50 tabs open for me. Fr fr best travel service."
  },
  {
    id: '2',
    name: 'Meera S.',
    handle: '@meerawander',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuALFDGZTwSEPjPS3Ewvo1o_LWGRPApTs48K-zTsvPa4eIPkk3Vd6v2o4gUjLvsNlPUmpbb5R-z03csTufno4FEs2mI1G2DhMzKrJ_tQXudDOhHeCE7bgwsnjBXKH_VV_KZVUYraHO_z2tgYABeFFhh6ITJGh83uL6Fvdo-k4DNmVf5IuqNymUlSc8Wp6JemnxbQIrNm8Ytb2L5NH_JU2SoDZE9rWxDVRyb2f3yYuo3UFpLZ3FALmRn0IhM_UJSlzXuvXrYGVLz4a6Uc',
    rating: 5,
    content: "The itinerary for our honeymoon was insane. Every spot was so aesthetic. It's like they know exactly what's trending before it even hits my feed."
  },
  {
    id: '3',
    name: 'Rohan J.',
    handle: '@rohan_vlogs',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD5jsa2omA4_jEOT0orsBVFOwy00zVeP0q9Th7OpYEmKs90K-eKAbP4_BuFtw1dhuYeg44fryiWw-9z0XCrTS3kr-qV4qnG2zsEX_p_L5_5VkZRY5_MLRIh278ULEOGe69E6URza_wTZouEkH1jmV7ayV4G5ytj2WD7JxB65I2QoEdqN5NyXTMfmxdgDZZB7fi_LwUgblNauWSI_oMbP5be8w7TMgzjKRzxDcBQYct_t64DbJb5ifTpXZE09opEb7XsyFNHlUcYkZsi',
    rating: 5,
    content: "Actually talked to a human for my trip planning. No robot nonsense. They saved me like $200 on flights. 10/10 would recommend to the squad."
  }
];
