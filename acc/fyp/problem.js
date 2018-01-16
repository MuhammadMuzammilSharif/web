var problem = {basicArcs:[],nonBasicArcs:[{i:1,j:3,cost:120,xij:0},{i:1,j:4,cost:133,xij:0},{i:1,j:5,cost:133,xij:0},{i:1,j:8,cost:178,xij:0},{i:1,j:9,cost:185,xij:0},{i:1,j:2,cost:193,xij:0},{i:1,j:6,cost:209,xij:0},{i:1,j:13,cost:219,xij:0},{i:1,j:10,cost:236,xij:0},{i:1,j:14,cost:251,xij:0},{i:1,j:11,cost:254,xij:0},{i:1,j:12,cost:271,xij:0},{i:1,j:17,cost:281,xij:0},{i:1,j:15,cost:296,xij:0},{i:1,j:18,cost:315,xij:0},{i:1,j:16,cost:325,xij:0},{i:1,j:7,cost:367,xij:0},{i:1,j:20,cost:368,xij:0},{i:1,j:21,cost:430,xij:0},{i:1,j:19,cost:513,xij:0},{i:2,j:6,cost:124,xij:0},{i:2,j:3,cost:140,xij:0},{i:2,j:7,cost:145,xij:0},{i:2,j:12,cost:176,xij:0},{i:2,j:11,cost:189,xij:0},{i:2,j:4,cost:202,xij:0},{i:2,j:9,cost:202,xij:0},{i:2,j:5,cost:202,xij:0},{i:2,j:1,cost:203,xij:0},{i:2,j:14,cost:216,xij:0},{i:2,j:8,cost:217,xij:0},{i:2,j:10,cost:221,xij:0},{i:2,j:15,cost:234,xij:0},{i:2,j:16,cost:246,xij:0},{i:2,j:17,cost:256,xij:0},{i:2,j:18,cost:290,xij:0},{i:2,j:19,cost:312,xij:0},{i:2,j:20,cost:343,xij:0},{i:2,j:13,cost:351,xij:0},{i:2,j:21,cost:506,xij:0},{i:3,j:4,cost:93,xij:0},{i:3,j:5,cost:93,xij:0},{i:3,j:6,cost:112,xij:0},{i:3,j:1,cost:115,xij:0},{i:3,j:9,cost:116,xij:0},{i:3,j:2,cost:126,xij:0},{i:3,j:8,cost:131,xij:0},{i:3,j:11,cost:151,xij:0},{i:3,j:10,cost:176,xij:0},{i:3,j:14,cost:178,xij:0},{i:3,j:12,cost:182,xij:0},{i:3,j:7,cost:184,xij:0},{i:3,j:15,cost:207,xij:0},{i:3,j:17,cost:217,xij:0},{i:3,j:16,cost:237,xij:0},{i:3,j:18,cost:252,xij:0},{i:3,j:13,cost:258,xij:0},{i:3,j:20,cost:305,xij:0},{i:3,j:19,cost:310,xij:0},{i:3,j:21,cost:469,xij:0},{i:4,j:5,cost:38,xij:0},{i:4,j:8,cost:87,xij:0},{i:4,j:9,cost:102,xij:0},{i:4,j:1,cost:102,xij:0},{i:4,j:3,cost:104,xij:0},{i:4,j:10,cost:153,xij:0},{i:4,j:11,cost:158,xij:0},{i:4,j:14,cost:168,xij:0},{i:4,j:6,cost:171,xij:0},{i:4,j:13,cost:186,xij:0},{i:4,j:12,cost:188,xij:0},{i:4,j:17,cost:198,xij:0},{i:4,j:2,cost:204,xij:0},{i:4,j:15,cost:213,xij:0},{i:4,j:18,cost:232,xij:0},{i:4,j:7,cost:243,xij:0},{i:4,j:16,cost:243,xij:0},{i:4,j:20,cost:285,xij:0},{i:4,j:19,cost:316,xij:0},{i:4,j:21,cost:396,xij:0},{i:5,j:8,cost:71,xij:0},{i:5,j:9,cost:83,xij:0},{i:5,j:4,cost:27,xij:0},{i:5,j:1,cost:91,xij:0},{i:5,j:3,cost:93,xij:0},{i:5,j:10,cost:135,xij:0},{i:5,j:11,cost:139,xij:0},{i:5,j:14,cost:149,xij:0},{i:5,j:6,cost:152,xij:0},{i:5,j:12,cost:169,xij:0},{i:5,j:17,cost:179,xij:0},{i:5,j:2,cost:192,xij:0},{i:5,j:15,cost:194,xij:0},{i:5,j:18,cost:213,xij:0},{i:5,j:13,cost:222,xij:0},{i:5,j:7,cost:224,xij:0},{i:5,j:16,cost:224,xij:0},{i:5,j:20,cost:266,xij:0},{i:5,j:19,cost:297,xij:0},{i:5,j:21,cost:433,xij:0},{i:6,j:7,cost:71,xij:0},{i:6,j:12,cost:100,xij:0},{i:6,j:11,cost:124,xij:0},{i:6,j:2,cost:126,xij:0},{i:6,j:3,cost:150,xij:0},{i:6,j:14,cost:151,xij:0},{i:6,j:15,cost:155,xij:0},{i:6,j:10,cost:156,xij:0},{i:6,j:9,cost:170,xij:0},{i:6,j:16,cost:171,xij:0},{i:6,j:17,cost:190,xij:0},{i:6,j:5,cost:194,xij:0},{i:6,j:8,cost:194,xij:0},{i:6,j:4,cost:204,xij:0},{i:6,j:18,cost:225,xij:0},{i:6,j:19,cost:237,xij:0},{i:6,j:1,cost:239,xij:0},{i:6,j:20,cost:278,xij:0},{i:6,j:13,cost:286,xij:0},{i:6,j:21,cost:441,xij:0},{i:7,j:12,cost:100,xij:0},{i:7,j:6,cost:91,xij:0},{i:7,j:2,cost:135,xij:0},{i:7,j:15,cost:162,xij:0},{i:7,j:11,cost:162,xij:0},{i:7,j:16,cost:170,xij:0},{i:7,j:3,cost:188,xij:0},{i:7,j:14,cost:189,xij:0},{i:7,j:10,cost:193,xij:0},{i:7,j:9,cost:208,xij:0},{i:7,j:17,cost:228,xij:0},{i:7,j:5,cost:232,xij:0},{i:7,j:8,cost:232,xij:0},{i:7,j:19,cost:237,xij:0},{i:7,j:4,cost:242,xij:0},{i:7,j:18,cost:263,xij:0},{i:7,j:1,cost:277,xij:0},{i:7,j:20,cost:315,xij:0},{i:7,j:13,cost:324,xij:0},{i:7,j:21,cost:479,xij:0},{i:8,j:9,cost:45,xij:0},{i:8,j:13,cost:167,xij:0},{i:8,j:5,cost:71,xij:0},{i:8,j:4,cost:83,xij:0},{i:8,j:10,cost:96,xij:0},{i:8,j:11,cost:128,xij:0},{i:8,j:14,cost:137,xij:0},{i:8,j:3,cost:138,xij:0},{i:8,j:1,cost:163,xij:0},{i:8,j:6,cost:165,xij:0},{i:8,j:17,cost:168,xij:0},{i:8,j:12,cost:181,xij:0},{i:8,j:18,cost:203,xij:0},{i:8,j:15,cost:206,xij:0},{i:8,j:2,cost:217,xij:0},{i:8,j:7,cost:236,xij:0},{i:8,j:16,cost:242,xij:0},{i:8,j:20,cost:255,xij:0},{i:8,j:19,cost:295,xij:0},{i:8,j:21,cost:378,xij:0},{i:9,j:10,cost:78,xij:0},{i:9,j:11,cost:83,xij:0},{i:9,j:14,cost:93,xij:0},{i:9,j:8,cost:41,xij:0},{i:9,j:5,cost:58,xij:0},{i:9,j:4,cost:79,xij:0},{i:9,j:3,cost:105,xij:0},{i:9,j:6,cost:118,xij:0},{i:9,j:17,cost:123,xij:0},{i:9,j:12,cost:135,xij:0},{i:9,j:1,cost:142,xij:0},{i:9,j:18,cost:158,xij:0},{i:9,j:15,cost:158,xij:0},{i:9,j:2,cost:170,xij:0},{i:9,j:7,cost:189,xij:0},{i:9,j:13,cost:200,xij:0},{i:9,j:20,cost:210,xij:0},{i:9,j:16,cost:215,xij:0},{i:9,j:19,cost:250,xij:0},{i:9,j:21,cost:385,xij:0},{i:10,j:14,cost:55,xij:0},{i:10,j:11,cost:79,xij:0},{i:10,j:13,cost:163,xij:0},{i:10,j:9,cost:54,xij:0},{i:10,j:8,cost:90,xij:0},{i:10,j:5,cost:107,xij:0},{i:10,j:17,cost:114,xij:0},{i:10,j:4,cost:127,xij:0},{i:10,j:6,cost:127,xij:0},{i:10,j:18,cost:149,xij:0},{i:10,j:15,cost:149,xij:0},{i:10,j:3,cost:154,xij:0},{i:10,j:12,cost:163,xij:0},{i:10,j:1,cost:190,xij:0},{i:10,j:7,cost:198,xij:0},{i:10,j:20,cost:201,xij:0},{i:10,j:16,cost:206,xij:0},{i:10,j:2,cost:207,xij:0},{i:10,j:19,cost:241,xij:0},{i:10,j:21,cost:362,xij:0},{i:11,j:14,cost:76,xij:0},{i:11,j:12,cost:81,xij:0},{i:11,j:15,cost:102,xij:0},{i:11,j:10,cost:81,xij:0},{i:11,j:9,cost:96,xij:0},{i:11,j:17,cost:103,xij:0},{i:11,j:6,cost:107,xij:0},{i:11,j:16,cost:132,xij:0},{i:11,j:5,cost:133,xij:0},{i:11,j:8,cost:134,xij:0},{i:11,j:18,cost:138,xij:0},{i:11,j:3,cost:152,xij:0},{i:11,j:4,cost:154,xij:0},{i:11,j:7,cost:167,xij:0},{i:11,j:2,cost:187,xij:0},{i:11,j:20,cost:191,xij:0},{i:11,j:19,cost:209,xij:0},{i:11,j:13,cost:211,xij:0},{i:11,j:1,cost:217,xij:0},{i:11,j:21,cost:366,xij:0},{i:12,j:15,cost:61,xij:0},{i:12,j:16,cost:69,xij:0},{i:12,j:19,cost:136,xij:0},{i:12,j:11,cost:91,xij:0},{i:12,j:6,cost:100,xij:0},{i:12,j:7,cost:101,xij:0},{i:12,j:14,cost:131,xij:0},{i:12,j:10,cost:136,xij:0},{i:12,j:9,cost:143,xij:0},{i:12,j:17,cost:156,xij:0},{i:12,j:5,cost:157,xij:0},{i:12,j:8,cost:157,xij:0},{i:12,j:3,cost:169,xij:0},{i:12,j:2,cost:170,xij:0},{i:12,j:4,cost:177,xij:0},{i:12,j:18,cost:191,xij:0},{i:12,j:20,cost:219,xij:0},{i:12,j:1,cost:240,xij:0},{i:12,j:13,cost:266,xij:0},{i:12,j:21,cost:421,xij:0},{i:13,j:14,cost:141,xij:0},{i:13,j:8,cost:152,xij:0},{i:13,j:10,cost:161,xij:0},{i:13,j:5,cost:177,xij:0},{i:13,j:4,cost:177,xij:0},{i:13,j:18,cost:189,xij:0},{i:13,j:9,cost:190,xij:0},{i:13,j:17,cost:201,xij:0},{i:13,j:11,cost:210,xij:0},{i:13,j:20,cost:224,xij:0},{i:13,j:15,cost:229,xij:0},{i:13,j:1,cost:230,xij:0},{i:13,j:3,cost:247,xij:0},{i:13,j:6,cost:258,xij:0},{i:13,j:16,cost:259,xij:0},{i:13,j:12,cost:274,xij:0},{i:13,j:21,cost:327,xij:0},{i:13,j:7,cost:330,xij:0},{i:13,j:19,cost:335,xij:0},{i:13,j:2,cost:338,xij:0},{i:14,j:17,cost:121,xij:0},{i:14,j:18,cost:126,xij:0},{i:14,j:10,cost:57,xij:0},{i:14,j:11,cost:71,xij:0},{i:14,j:9,cost:82,xij:0},{i:14,j:8,cost:118,xij:0},{i:14,j:6,cost:119,xij:0},{i:14,j:5,cost:134,xij:0},{i:14,j:13,cost:135,xij:0},{i:14,j:15,cost:135,xij:0},{i:14,j:12,cost:155,xij:0},{i:14,j:4,cost:155,xij:0},{i:14,j:16,cost:165,xij:0},{i:14,j:3,cost:168,xij:0},{i:14,j:20,cost:188,xij:0},{i:14,j:7,cost:190,xij:0},{i:14,j:2,cost:199,xij:0},{i:14,j:1,cost:218,xij:0},{i:14,j:19,cost:241,xij:0},{i:14,j:21,cost:332,xij:0},{i:15,j:16,cost:43,xij:0},{i:15,j:17,cost:112,xij:0},{i:15,j:19,cost:124,xij:0},{i:15,j:18,cost:147,xij:0},{i:15,j:12,cost:80,xij:0},{i:15,j:11,cost:111,xij:0},{i:15,j:14,cost:118,xij:0},{i:15,j:10,cost:132,xij:0},{i:15,j:9,cost:135,xij:0},{i:15,j:6,cost:141,xij:0},{i:15,j:7,cost:166,xij:0},{i:15,j:8,cost:170,xij:0},{i:15,j:5,cost:187,xij:0},{i:15,j:20,cost:200,xij:0},{i:15,j:4,cost:207,xij:0},{i:15,j:3,cost:208,xij:0},{i:15,j:13,cost:223,xij:0},{i:15,j:2,cost:234,xij:0},{i:15,j:1,cost:271,xij:0},{i:15,j:21,cost:389,xij:0},{i:16,j:19,cost:93,xij:0},{i:16,j:20,cost:164,xij:0},{i:16,j:15,cost:35,xij:0},{i:16,j:12,cost:76,xij:0},{i:16,j:11,cost:136,xij:0},{i:16,j:17,cost:136,xij:0},{i:16,j:14,cost:142,xij:0},{i:16,j:10,cost:156,xij:0},{i:16,j:7,cost:158,xij:0},{i:16,j:9,cost:159,xij:0},{i:16,j:6,cost:161,xij:0},{i:16,j:18,cost:171,xij:0},{i:16,j:8,cost:194,xij:0},{i:16,j:5,cost:211,xij:0},{i:16,j:3,cost:227,xij:0},{i:16,j:2,cost:231,xij:0},{i:16,j:4,cost:232,xij:0},{i:16,j:13,cost:247,xij:0},{i:16,j:1,cost:295,xij:0},{i:16,j:21,cost:364,xij:0},{i:17,j:18,cost:51,xij:0},{i:17,j:20,cost:112,xij:0},{i:17,j:21,cost:323,xij:0},{i:17,j:14,cost:93,xij:0},{i:17,j:11,cost:106,xij:0},{i:17,j:10,cost:107,xij:0},{i:17,j:9,cost:110,xij:0},{i:17,j:15,cost:125,xij:0},{i:17,j:8,cost:145,xij:0},{i:17,j:5,cost:162,xij:0},{i:17,j:16,cost:162,xij:0},{i:17,j:12,cost:170,xij:0},{i:17,j:6,cost:177,xij:0},{i:17,j:4,cost:183,xij:0},{i:17,j:13,cost:194,xij:0},{i:17,j:19,cost:197,xij:0},{i:17,j:3,cost:209,xij:0},{i:17,j:1,cost:246,xij:0},{i:17,j:7,cost:256,xij:0},{i:17,j:2,cost:257,xij:0},{i:18,j:20,cost:74,xij:0},{i:18,j:21,cost:285,xij:0},{i:18,j:17,cost:37,xij:0},{i:18,j:14,cost:110,xij:0},{i:18,j:11,cost:141,xij:0},{i:18,j:10,cost:142,xij:0},{i:18,j:9,cost:145,xij:0},{i:18,j:15,cost:160,xij:0},{i:18,j:16,cost:164,xij:0},{i:18,j:13,cost:177,xij:0},{i:18,j:8,cost:180,xij:0},{i:18,j:19,cost:199,xij:0},{i:18,j:5,cost:197,xij:0},{i:18,j:6,cost:204,xij:0},{i:18,j:12,cost:205,xij:0},{i:18,j:4,cost:218,xij:0},{i:18,j:3,cost:244,xij:0},{i:18,j:1,cost:281,xij:0},{i:18,j:2,cost:284,xij:0},{i:18,j:7,cost:291,xij:0},{i:19,j:16,cost:92,xij:0},{i:19,j:15,cost:114,xij:0},{i:19,j:12,cost:150,xij:0},{i:19,j:17,cost:171,xij:0},{i:19,j:18,cost:184,xij:0},{i:19,j:20,cost:191,xij:0},{i:19,j:7,cost:209,xij:0},{i:19,j:11,cost:214,xij:0},{i:19,j:14,cost:226,xij:0},{i:19,j:6,cost:239,xij:0},{i:19,j:10,cost:239,xij:0},{i:19,j:9,cost:243,xij:0},{i:19,j:8,cost:278,xij:0},{i:19,j:5,cost:295,xij:0},{i:19,j:3,cost:306,xij:0},{i:19,j:2,cost:310,xij:0},{i:19,j:4,cost:315,xij:0},{i:19,j:13,cost:326,xij:0},{i:19,j:21,cost:359,xij:0},{i:19,j:1,cost:443,xij:0},{i:20,j:18,cost:68,xij:0},{i:20,j:17,cost:105,xij:0},{i:20,j:16,cost:169,xij:0},{i:20,j:14,cost:183,xij:0},{i:20,j:11,cost:195,xij:0},{i:20,j:10,cost:196,xij:0},{i:20,j:9,cost:199,xij:0},{i:20,j:19,cost:204,xij:0},{i:20,j:15,cost:203,xij:0},{i:20,j:13,cost:211,xij:0},{i:20,j:21,cost:215,xij:0},{i:20,j:8,cost:234,xij:0},{i:20,j:5,cost:251,xij:0},{i:20,j:12,cost:254,xij:0},{i:20,j:6,cost:266,xij:0},{i:20,j:4,cost:272,xij:0},{i:20,j:3,cost:298,xij:0},{i:20,j:1,cost:335,xij:0},{i:20,j:7,cost:339,xij:0},{i:20,j:2,cost:346,xij:0},{i:21,j:20,cost:241,xij:0},{i:21,j:18,cost:262,xij:0},{i:21,j:17,cost:300,xij:0},{i:21,j:14,cost:311,xij:0},{i:21,j:10,cost:353,xij:0},{i:21,j:13,cost:355,xij:0},{i:21,j:11,cost:357,xij:0},{i:21,j:16,cost:358,xij:0},{i:21,j:9,cost:368,xij:0},{i:21,j:8,cost:372,xij:0},{i:21,j:15,cost:373,xij:0},{i:21,j:5,cost:397,xij:0},{i:21,j:4,cost:397,xij:0},{i:21,j:6,cost:405,xij:0},{i:21,j:19,cost:408,xij:0},{i:21,j:12,cost:418,xij:0},{i:21,j:1,cost:450,xij:0},{i:21,j:3,cost:454,xij:0},{i:21,j:7,cost:476,xij:0},{i:21,j:2,cost:485,xij:0}],nodes:[{pred:0,thread:0,potential:0,depth:0,supply:0,lat:31.557851,lng:74.195258},{pred:0,thread:0,potential:0,depth:0,supply:-1765,lat:31.5913373,lng:74.3018695,name:"Azadi choeck"},{pred:0,thread:0,potential:0,depth:0,supply:-1500,lat:31.579057,lng:74.369438,name:"GT Roady Singpura"},{pred:0,thread:0,potential:0,depth:0,supply:-955,lat:31.569197,lng:74.321562,name:"77 Nisbat Road"},{pred:0,thread:0,potential:0,depth:0,supply:-945,lat:31.5619158,lng:74.2969175,name:"Sanda Rajgarh Chowck"},{pred:0,thread:0,potential:0,depth:0,supply:-1150,lat:31.558206,lng:74.304947,name:"N5 Lahore"},{pred:0,thread:0,potential:0,depth:0,supply:-935,lat:31.551508,lng:74.365239,name:"Iqbal Road Mustafabad"},{pred:0,thread:0,potential:0,depth:0,supply:-1350,lat:31.548838,lng:74.401181,name:"zarar shaeed Road"},{pred:0,thread:0,potential:0,depth:0,supply:-1480,lat:31.542748,lng:74.299965,name:"476-N Samanabad"},{pred:0,thread:0,potential:0,depth:0,supply:-1960,lat:31.539786,lng:74.317539,name:"Shama Road"},{pred:0,thread:0,potential:0,depth:0,supply:-1500,lat:31.5252054,lng:74.3185033,name:"Rehman Pura"},{pred:0,thread:0,potential:0,depth:0,supply:-2500,lat:31.522595,lng:74.343748,name:"zahor Ilahi Road"},{pred:0,thread:0,potential:0,depth:0,supply:-875,lat:31.521789,lng:74.378726,name:"CB Plaza Abid majeed Road"},{pred:0,thread:0,potential:0,depth:0,supply:-2500,lat:31.520746,lng:74.26597,name:"Main Bolevard Sabzazar"},{pred:0,thread:0,potential:0,depth:0,supply:-1550,lat:31.511431,lng:74.313999,name:"Ayubia Market"},{pred:0,thread:0,potential:0,depth:0,supply:-1400,lat:31.501435,lng:74.366226,name:"Commercial Road , Masood Anwari Road"},{pred:0,thread:0,potential:0,depth:0,supply:-965,lat:31.494955,lng:74.373674,name:"Waten Service Lane"},{pred:0,thread:0,potential:0,depth:0,supply:-1980,lat:31.48316,lng:74.331126,name:"Model Town Circular Road"},{pred:0,thread:0,potential:0,depth:0,supply:-1790,lat:31.471304,lng:74.318681,name:"Model Town Link Road"},{pred:0,thread:0,potential:0,depth:0,supply:8050,lat:31.471327,lng:74.390087,name:"DHA Phase 3"},{pred:0,thread:0,potential:0,depth:0,supply:9000,lat:31.447425,lng:74.32107,name:"Hamdard Chowk"},{pred:0,thread:0,potential:0,depth:0,supply:10050,lat:31.393563,lng:74.237656,name:"Bhuptian Road"}]};