'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "2d7f65d9103f1479fc15d05d356dae36",
"version.json": "6d4f1f30a3420dbdc01bc258af59b083",
"index.html": "73931c3996e5d52189d7c4927331ed3b",
"/": "73931c3996e5d52189d7c4927331ed3b",
"main.dart.js": "9509b282a5f288451c3d6f1006c4fc7a",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"favicon.png": "c86f1453a7e653f75013b08550ee5eba",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "35edc987b6a7bbdaaf9648c03960e70d",
".git/ORIG_HEAD": "c399ad679f282d6b43fa94601649aacf",
".git/config": "f797b6e5d7b37cf782ac501afaf9ab49",
".git/objects/95/f4adabafbd0acd1f8188fcec45e242b0d43d99": "4cc91b443f0507577bfa02838989ab0f",
".git/objects/92/a7b0593fe0869c8725252154fbb0ea2957e994": "401cb1e90ae2dc7c11b022505b3eb99d",
".git/objects/66/da8e124988aa19f1adcfc2867c163ebc9dcad9": "e2a52fc92779dd72973124d193547396",
".git/objects/68/eb0c117e885e151d98ff939a9e96e872d8540d": "2374c1991ba7ec9ea7b671bdc39e2b4b",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/04/114d50d8cf0624ae06a778fc784885a2934f7f": "c1ffd8dc379e6aca61ae4691f7ca7bb1",
".git/objects/6a/09e00967121ab16b1f148aa647adb5277e2dec": "9f8382a3b0229afcec9c7c38d3dfc1b5",
".git/objects/32/f195150cdb223250085e3f8391eff4de6a9d2d": "2e52924fe830e524a8710fe3ea2aa5c9",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/3c/ddf31c8f6efa4f8bf433aa27656f4e1da00e06": "8764738d87b028ae515b40f0ab50200d",
".git/objects/56/dc0f6e346a578675beb7d19f55fe2fbe4b4a9d": "48f1ac9b2c58f7c065ba4f048cc71d39",
".git/objects/3d/af289a6965a41d3d5371a04bed51234704f9a2": "9fb9f65da2c6d8be38a769a5714fdc7c",
".git/objects/0b/4d4589785e26860f33c2812b2af25cd1711630": "6efa2f8601f74718a711d825b2802726",
".git/objects/34/8fada68923c67eda8e41f74bd0042fc184c99a": "b89c76ce7a2ecd90c7987b430bc062d9",
".git/objects/34/8a1d27575be90601632117e5a76e59b1f9e620": "4c3aff815c2522d4c917dad737f47bed",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/33/cfc0c4dfc46ab1fc76f2b4a2cb02e74a02e1ca": "01cd87e20ec5a0e3f4dd69718933eb5b",
".git/objects/9d/7cf220f98402e6908795046cd3c124886fc54a": "2fe461ce38db262ea17658f27acd3579",
".git/objects/a3/a3c6ffb6c07b36246a3c4d56596a773a63aea4": "ff59e49692129b74c3080d98a3c46caa",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/ac/3b7afac8746664249781c8e723c3908821e4eb": "e98bca4cdfc3d884734bb7a2178792cc",
".git/objects/ad/41136e58a25aa9a093d06c01647a6d312f7ba9": "e537ba4d79cdd7313e4d7605e4a15eb3",
".git/objects/be/5d7f2d2eaa23949c8fb7e4c55ec12f0bd0ed64": "3fbaa02db620c1f098d07b10d3556819",
".git/objects/b3/244c27b6e3e57c1570f917960e9415a54848c3": "31ae55195f523709619233087f4beb26",
".git/objects/b3/09021feb000d56db0ec18da48c48213c63380a": "76dfdcba569e7864afc8eb8fd94d4741",
".git/objects/da/888410dd4a87a3b545c6fb467e79860d9525ca": "76e92bb1a70d86f347980a2d173f8dbe",
".git/objects/da/fcdc2b564eba0c8c2638f1478084f1459ad9be": "3207e2023bce5910bc10a40b8fbb14d2",
".git/objects/da/257bd3363f08c84f58e54d7ed8684830ce19c8": "6bb9b3d5d0e0c2c6f2467f5e3dcdfe59",
".git/objects/b4/0fb546d86d59559637120b10b4cf0341660f46": "01cedde22b3dd5f1e8737c93d56df4e3",
".git/objects/b4/40ff38274dfcdd2b5536d12b4b0f8fe0ad729c": "f5ecbabf66595747f86db3dbbb9270de",
".git/objects/a2/059848475c9a02e347b28aa113bb356b8d7026": "7b2b6b18fcab05192e804d19d493262d",
".git/objects/a2/84f8984b11f8d58d9867543d2349603e752fe4": "505968d541f4a01c3262d6d19d7e0232",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/bd/35b348a7d6488cce5125e45341cdf712ef377a": "fd6a9498f3a2ca46bf1767eb254dfaf6",
".git/objects/bd/6be43d015a2a8a92db341ee519feb383a20cb4": "0df4c80430aff6e9b0cdd970bc215545",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/dc117730fe9c1ddaf978bdb34279a9a6a86aa6": "c122f7c44c07d13400b287ccbef68ce8",
".git/objects/ab/c0700ccfa50d63aa6fe7418e2ae80888453d2b": "6cf3e7b38f693afee4c4c7c5ce9d65fe",
".git/objects/e5/91a83b0b2a5ef30a48f436f24ccc1f95b4297c": "6f659406a30bb6ad617a363b7c68b1d0",
".git/objects/f3/65c1cf6624805fbd2b67129ef5c4791640a618": "cd12ca7afb6c95e6605f893d16fbb291",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/f3/668e13b24f0f8f1c91c727ba8f978164a8c5f9": "b17863a69d0b0ed82c40d1aa847db0ad",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c7/21571af4d6c92271e102d786e369811981c231": "7960565b98ebeb5fec2a93c0dc48fa18",
".git/objects/ee/0e319c5539dbb17d9167d3b7194b5e1a963b42": "b8904b0dc33f998f23b01fa587059178",
".git/objects/fc/0839067f820768318a51f94782195b4e94b359": "545e0a0abfd349e9210bc795ab57edab",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/1263b39b7250ac164c2a301554b253c032ca9e": "4de4cd91ad4e6d6c04e67b63a97b4240",
".git/objects/ca/745012d6368cb4f514fda7eb2f9a8c3473e4f1": "c3819046f4a4767035f8a4258e02044a",
".git/objects/e4/0f22e72a78c1a61bb83cce0e61df3010c14829": "b988741382a37b608a0ac035a5a83efc",
".git/objects/c8/c9825051fad7051bdf5468cbb3719adde6c312": "e9c4b8bbd8616a0be294371e8482765b",
".git/objects/c8/08fb85f7e1f0bf2055866aed144791a1409207": "92cdd8b3553e66b1f3185e40eb77684e",
".git/objects/fb/282e2ea7999163b2d8d21251c8759a9c3b0179": "1d2948f2eee7aad3441229b5fdb5296d",
".git/objects/ed/a5e9fbad3d5c69e48483b1b66e6010afabf51e": "a44031282c0b3a85f5ff91434bd94d0d",
".git/objects/c6/87b69da1ae5249685468d28c9c132d5feeb623": "feeffca61280a00f1c3494dbc5448a9c",
".git/objects/27/24a774cf38d222248f6c3c46c0c7f002b33d31": "260aa8b4fe7eda97bb3acb5a3a64a765",
".git/objects/29/36b61b141668ac0ced4fa9f905651004a69314": "269df690a8ae2adac38e02cd1295d20a",
".git/objects/16/f0d88facbd22880c53539d64edbdfa761ebf2d": "d80f56b68f357cf59b77df4e83b80ae9",
".git/objects/16/5145f778ef9bc132723238ec5ffd6968861c54": "a89001097c9f05a552e4749cff9401e9",
".git/objects/42/b54acfbfa8429eb2a4ec6965def7219690ac47": "87ce17e62d1e1aaff2a9ef42e9767ffd",
".git/objects/89/53a904fc968906184a99c9e5553fd5d00da39b": "bde719334e3c68b9d41c4dab131fbe49",
".git/objects/45/7c9c7bcef7fdcac57e1b732863cd55fa087675": "e05edf7995913c6680a76ca2ee79adf4",
".git/objects/45/f73045fe722ef678b255cea3af3acaf75c3186": "4907fbb6c558a487cb2c82b271191837",
".git/objects/1f/826a082966b4136da8c76d4bcd451561e77d65": "ec68e169ade32d035bacb4fa02b34669",
".git/objects/73/47f7b71021edf2ce396b289fca66881c01fe30": "ebed1ff80467098b6caaed61c4843aae",
".git/objects/73/c63bcf89a317ff882ba74ecb132b01c374a66f": "6ae390f0843274091d1e2838d9399c51",
".git/objects/1a/d7683b343914430a62157ebf451b9b2aa95cac": "94fdc36a022769ae6a8c6c98e87b3452",
".git/objects/1a/96cc975b41fc8fdc895b01c0e4c21c61aef4a0": "c92414cbc85bc2030d1a23165bc9f7d9",
".git/objects/1a/cf91cac2bd756f1f83b50d6f5bb63afdc7d501": "f66a153b79c52d86e0a4f3994a2186da",
".git/objects/7b/6bae3058d07bd204db74e91e6611fd59286a43": "c4a977762cb96342692943cdce48a742",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/2f0638e9dd58a3a88c879625e61811768f2cde": "bdfb1eca153ca7d29a4b9f8f338b6a86",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/fc8d01f8f4f8a5db26087745ef0d98b4bdd82a": "9f7a2c2ddc85777f3bbb04134b07d889",
".git/objects/7e/3bb2f8ce7ae5b69e9f32c1481a06f16ebcfe71": "4ac6c0fcf7071bf9fc9c013172f9996f",
".git/objects/4c/a2a1b05643f9d6b5c7366d6a20aa8213ee5926": "f1d4e22b415b41187e07cdabeb838cdf",
".git/objects/26/c96222239cd1d23869c9717652b15f4729cc9d": "272eae3a37fe812e2aab741288d69c48",
".git/objects/75/ef59eab72f9201ca4819503ce0cebc0e117fe7": "7646c536825a9ef0765804c4e99dbed0",
".git/objects/75/ab1e7b29435adeb10fc077c76ff438237710d1": "e0ea7c61fc4aba371fdc7ac8c0d683d6",
".git/objects/72/2b1fb25acab17bd3a2478f1e538a3603fcbb69": "6ace017da6e607effb5e7ea2aafb68c8",
".git/objects/72/1c2c82f90b3201bb01cb951d9601aacfa21ccb": "e73332e1f3b33bc18986ac863be3b62c",
".git/objects/72/44eac83540a07b6c3cbe759c890db478733dad": "740bc80b480e4606ebbd941faa415a5b",
".git/objects/44/085c4b7167181f3eac160c97b9470a5274d031": "5a7fe5ab14e07267f9878fc223ea2931",
".git/objects/44/7176383df3bf7c365a7c4006e954abe0fbe407": "e0ba04bb25c946547a34aea3faa5689e",
".git/objects/88/25d24e6eb5bb49432061510c7615d4b950d643": "f5f7cfeb8dfe2f0f3c92e74b4b34c162",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/1f04d8507e9f113f70ca3911fef21bcf1e3ee6": "0028762c7c64feacca1cd79b88a39a9b",
".git/objects/36/750122ff82c0ee179cdcfc3b53396c279b3b6d": "86270e0b055056ef27af3ddfe88abd3f",
".git/objects/36/6ec29f54c85bd09043e726a92177bcd96062d1": "a47101ce98d617947ed669e8f77057e6",
".git/objects/36/686c9d6ad46170d606cdb3517547819cd7d2f2": "7e54ae0696ce116bda29bb949809d74b",
".git/objects/5c/eb4608e6b01a21eda7bb906472751277691c84": "c33295c5e00a36aadf4d9b84123c0377",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/53/18a6956a86af56edbf5d2c8fdd654bcc943e88": "a686c83ba0910f09872b90fd86a98a8f",
".git/objects/53/3d2508cc1abb665366c7c8368963561d8c24e0": "4592c949830452e9c2bb87f305940304",
".git/objects/5e/94611ffcec3494028497af1bc573be73d341bd": "1f7689f4cef9322039433cbf30b7a42b",
".git/objects/55/d66008b5ca0ba589bddced13c4d2ac92827d0e": "3d968c43ba428b8f7231af2dee2ca9bf",
".git/objects/97/8d87c8b6824113922f343a4909edce6e1fb160": "345d96220d2c948873a2d150ab614b16",
".git/objects/97/66ba58f20c16441f9d00ac74287ca32ccf7924": "38e4c0d05c85ffdaf404aec425c2571d",
".git/objects/0f/14cb1f3a0865157de333fc0c89390a1943d437": "dfa0a9d671ff7b6fbe71e916f5c345dd",
".git/objects/bf/831c3ba4d98264e4f30adde1f5e4a3ad586d80": "be97f2cf5e3b4187c2db1ff2770a6af1",
".git/objects/bf/45be73e7d594122a6033c89b1ab18c4bfed851": "5f39d07605a586fc9fa87f9cc33de08e",
".git/objects/d3/3001aeaa8a2b5456a8bde1b1c73c99b2672b64": "2403c1386b7d560d91c499498cbbff40",
".git/objects/d3/46eb9185ef3dcfb353eeb2d1e199687200fe5b": "48f0a51d978fc9573c3e550c777ef906",
".git/objects/d3/ec47eb7257fe7d70a8a805ee3d1b28cc0f1904": "ce766e3eba7861a2379689ca25d2ab77",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/c1bbd59cba79a573dcf47dacdfecbe97b76d71": "a9af10eab3c451448f7b8f21e8d34492",
".git/objects/d4/22fbe63fde7dfaeb68d6855c8165d4a5758a19": "68b3333c96bbccd2e8db3ee8fe413048",
".git/objects/a0/d978b635ec760fe99afb4ad38c2aa319592eae": "d1daecc2ce9d6d15a179ea3095082a70",
".git/objects/dc/f83695f71da8c6278eb914cdd42692c427924e": "9ca7f32e12839dea4610032ada023058",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/d2/df82b5f1b7c4778510e138aa98b9d7510940e5": "52adb85a0c11663204ddf73fbf0738d5",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/37af7530c796861181b9c94d164c81e3a74e92": "08cdbb25fa42e241ae0b766f8b0c9ebd",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/de/ff6ac70fe68b75673bedbbe83fe004266492c0": "8199d155a7e8533654b45e36b724ceeb",
".git/objects/b0/88ffb46e2e29ea523a49fde56ab70150dcd841": "8e4c18f3dde635655af1c27eadb1ea99",
".git/objects/a6/42d0a3c70dba064d59dddda028e05ccbbab04f": "7940292eba4432f6bd7be1fb82c1db12",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/ef/522cfbc45e0339d2039807e46a318f9c8bc0c0": "9ce65a8e49ee038454b34048368fe83c",
".git/objects/c3/fea84f4b9ebcf6793da6642676941cd86d222e": "cc95f26a41b39dc9a386a9f9ce49580a",
".git/objects/c4/813877a21c562c1e9a3ea3e54e30a54d0ca8a6": "b35f82d39b8711d0dd0e1dc763eff52f",
".git/objects/ea/6bd92517d11f3ed509e53a1b81962bda2bec8b": "0bef9be6f027bffe2c02b854b8718c08",
".git/objects/cd/77385465be6420137b1662d995800cb559a931": "50263660472ce6e50401fbd5924a3c7c",
".git/objects/e8/9bd89092737fcb410e15fdd83ffa95c58e6705": "5dcb904ae968a10e52020d5bc63b4c75",
".git/objects/fa/9f848fd2f8a0989c214b9bc20f2f7d7557b65f": "06a2cd1b2bf8e575bbc744b284aa88e9",
".git/objects/e9/0c9479e7645b5694451f66ef110db2ee411b2c": "face0ead236a106bf1ae4bbfa64a0e06",
".git/objects/cb/d4634d874bd6d7546ce5b83bb09bef06ee5d22": "2b68ec3b07f70eea4f16a93d05ac19b1",
".git/objects/cb/fc1a20e0de98c799c52d899e9f5ff8e7467e09": "b874c75aa7591c08ee0755d72faa459c",
".git/objects/e0/7ac7b837115a3d31ed52874a73bd277791e6bf": "74ebcb23eb10724ed101c9ff99cfa39f",
".git/objects/2c/0ece026049156af30a08abab4309b169572a59": "0ae0ae21742701750fe22b030ce06450",
".git/objects/1b/49e87422afac6dc85170fe95188bd9b35a50a2": "2a1a43575996c8a76abce339207337ca",
".git/objects/77/98b0ee4ece4f8ddd1ea81317b262ea72e59713": "a36584884670dc0f3ef42f15551230ad",
".git/objects/48/63fdc6a7b9746dd9fdc7fa626853083dd6739c": "3b2fec4b968283a23bfa11ec5ede2414",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/70/2647f9877fdc020bd6d1fc4c06269e4b8c400e": "866d18e1c6940a84ef5d40b76537629c",
".git/objects/70/a3b3cfcb1bbcce1fa85a38a9332b6e6e371706": "43de2665fcf2b07e67725a1224a61a86",
".git/objects/1e/1cad0f9e1f33ebe3bafc519ccd7829b4a368b5": "940b60d973a45eef2ae5c55d43f81833",
".git/objects/23/bb7ff6df4d52d9b1d0058859986f26a463a69c": "389dbac55a3aade184cef111c8efcf8c",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/8d/d727fb26d7804a62562fb3e33ebf86fd105929": "b9a6f4b489a74f26efec922d77fd9f9d",
".git/objects/8d/191f76aab38f394b2b6ad521e3e0b3a8c790c1": "fc99ce3f84b10a1b1ee90001ccabb450",
".git/objects/8d/35f589a1908f29ede605fa4f0ef127e109f0e2": "c12aeb13f93f8055e572bce262f41019",
".git/objects/1d/f5fcc48254caf2fc0b89bc8abeac9ae3f07510": "ae2b9b0263a9f35efba55d9c342aa170",
".git/objects/82/a500a00f11630544a13c580811598f1bcc271b": "47eadfcda139cc68ff6034aad494f986",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/2b/7de5175135acc4f0833f2b545015455f90b6b9": "e602dae0a5cbff5bedb7203e3ae22e8b",
".git/objects/2b/54a45e8f3ddf1f094e6efbe0207a307b00f553": "d9f20f4da0a289d517230d8763fd4b28",
".git/objects/78/7708155cef85976cd57bdd644687afb4bec264": "26c4bd9a35607b32992bb2238f48b004",
".git/objects/7f/34eaa723ce2fb894314eea5d9023671b2dc969": "6191d4c2bdff6190f9f294c60e98e8df",
".git/objects/7f/6c7dd0ebfb95199a2eb19f951b8fc9e963c03e": "e8b38cb0f0503a6e8ca2722c7cc270af",
".git/objects/8e/69fd10a145c0a4581b05a68e561dad78e6a8be": "b4219c17f80373ac7309ad3b880c364f",
".git/objects/22/55a110c96a81b9a4ab7ceb6f28281ddba85f4e": "fa69cc02ddba8075f42180c97cbd8b8e",
".git/objects/22/d2af83731c6b82c3da11923c2f4c2184bac7a5": "b6185cfec744f5e08aadffd2264deba1",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "d07fdc33ec0696dbead7e34be6e8c9a5",
".git/logs/refs/heads/main": "20dbbb7520c620487b53b1d871bd14fe",
".git/logs/refs/remotes/origin/HEAD": "b1b64595180627e1984fcbcbd10b6603",
".git/logs/refs/remotes/origin/main": "28b6dd2b34cea8174063223ae07aa6cb",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "c2a774398e5a4a80a35c9131af8b0b7a",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "c2a774398e5a4a80a35c9131af8b0b7a",
".git/index": "14be915c45c76845f54561824fedd3a6",
".git/COMMIT_EDITMSG": "e37d0d80f4b77a15fc43dce48c3349c6",
".git/FETCH_HEAD": "01f7210f9d41b54c7a1477a478b17a08",
"assets/AssetManifest.json": "cd031eac51f5d18cdefc6540eafc642a",
"assets/NOTICES": "573fa632765e215486b932bdc8b68a4d",
"assets/FontManifest.json": "8ea50db1d9b49fe81f257115ecf29369",
"assets/AssetManifest.bin.json": "3a040735fafaff284d8341a97ec0e5a6",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "129201f5d25e983b2e1ba2c89e096ead",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/images/svg/cap_pres_14.svg": "86e54416e92c4d3ad45b355db6a8bcbb",
"assets/assets/images/svg/cap_pres_6.svg": "a19a2e29097bcf46551bae69e81780a2",
"assets/assets/images/svg/cap_pres_7.svg": "387d3e2e107ac429541f21e26e9fdde4",
"assets/assets/images/svg/cap_pres_15.svg": "c75db2f0444217ee4290b17100cf53a0",
"assets/assets/images/svg/cap_base.svg": "8bfaadce25c028b0ccbe971f4a86b396",
"assets/assets/images/svg/cap_pres_17.svg": "9f50d5480c11b343bc23a738f49123fd",
"assets/assets/images/svg/cap_pres_5.svg": "c63ea2ebd4497677d98aa0bf07ac95fb",
"assets/assets/images/svg/cap_pres_4.svg": "5e66989cd48d8a59059a91dbe75d584e",
"assets/assets/images/svg/cap_pres_16.svg": "dce5e69a422df9f9e9e5ceebc6c79d3d",
"assets/assets/images/svg/cap_pres_12.svg": "2d0e0f3c1742116f870ebe4e1a126f8b",
"assets/assets/images/svg/cap_pres_13.svg": "963f59f0bb3caeb08406bcf193074d37",
"assets/assets/images/svg/cap_pres_1.svg": "48b48a3e72ab3a294a1caa5a27fbac02",
"assets/assets/images/svg/cap_pres_3.svg": "ec34e6799b64b2c86a18882c4bd07d37",
"assets/assets/images/svg/cap_pres_11.svg": "b98747b9415caebce0183852cc99a72b",
"assets/assets/images/svg/cap_pres_10.svg": "242c6cb6b377703c007915157b188dac",
"assets/assets/images/svg/cap_pres_2.svg": "6b829ce1f864086449464069ebbbf494",
"assets/assets/images/svg/cap_back.svg": "eb7752eeed0836bc04af4466bd4c6a3e",
"assets/assets/images/svg/cap_emblem.svg": "dd433b467e00539fc7a2553acf96b0d0",
"assets/assets/images/svg/cap_pres_20.svg": "12368a0e4e914e7cf44e75c9c6f79332",
"assets/assets/images/svg/cap.svg": "a93a459f25b6c96e4301560e65afcc06",
"assets/assets/images/svg/logo.svg": "fb4ebac0bc183d590019610735279771",
"assets/assets/images/svg/cap_pres_9.svg": "eaafdba3ae07537be43a9ee9b3b803a4",
"assets/assets/images/svg/cap_pres_8.svg": "3ba3a864c6d1b93a06351158b7bb860d",
"assets/assets/images/svg/cap_side.svg": "fc97ad4322d24ba94f553308d8a98be9",
"assets/assets/images/svg/cap_pres_18.svg": "5fadd7ef005e9f7df264e16cfb6a484a",
"assets/assets/images/svg/cap_pres_19.svg": "890d502035b13601f43c893a655e24cc",
"assets/assets/images/svg/cap_visor.svg": "cf66ea320e731127027f25cf04f11e8c",
"assets/assets/fonts/Roboto-Regular.ttf": "303c6d9e16168364d3bc5b7f766cfff4",
"assets/assets/fonts/Roboto-Bold.ttf": "8c9110ec6a1737b15a5611dc810b0f92",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
