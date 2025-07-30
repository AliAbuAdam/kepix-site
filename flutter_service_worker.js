'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "e202cb7f2ec036f69048fa06c2d135d3",
"version.json": "6d4f1f30a3420dbdc01bc258af59b083",
"index.html": "3aebe3739d6561932004eb02aa8445cd",
"/": "3aebe3739d6561932004eb02aa8445cd",
"CNAME": "ed1ca7cb152396963c3ac9474aa94a3d",
"main.dart.js": "49d6a4d3ae6a4c4ea3b9e68495e1bbb6",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"favicon.png": "c86f1453a7e653f75013b08550ee5eba",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "35edc987b6a7bbdaaf9648c03960e70d",
".git/ORIG_HEAD": "3b3ca4291fed656d7078b8cde3bade05",
".git/config": "f797b6e5d7b37cf782ac501afaf9ab49",
".git/objects/0d/a611d8cded7ce2090a77dbe57683ca5b30e9dc": "d40ba2e574d4dc7eda481b9572285b6b",
".git/objects/0d/1a7bb948c2f1f0d514598c1ed6afea8a8010fe": "3f989d5dbd7218bf2eec648577a8d89b",
".git/objects/92/a7b0593fe0869c8725252154fbb0ea2957e994": "401cb1e90ae2dc7c11b022505b3eb99d",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/9b/40a92d0772cf7f818a964e913c85ebf0d62ec7": "dcf7659289e2c528e858dd77af812d4d",
".git/objects/04/114d50d8cf0624ae06a778fc784885a2934f7f": "c1ffd8dc379e6aca61ae4691f7ca7bb1",
".git/objects/32/f195150cdb223250085e3f8391eff4de6a9d2d": "2e52924fe830e524a8710fe3ea2aa5c9",
".git/objects/56/dc0f6e346a578675beb7d19f55fe2fbe4b4a9d": "48f1ac9b2c58f7c065ba4f048cc71d39",
".git/objects/0b/4d4589785e26860f33c2812b2af25cd1711630": "6efa2f8601f74718a711d825b2802726",
".git/objects/60/b04ca1a3c6411dc2e6b5b50b6e8bd2a203a664": "05734bbfd352a54ceb5608ebb07d55ba",
".git/objects/5f/5b0880023033697bb348a83fb6e70735ce2a21": "c470bdb92d455513e844958ce8bf442e",
".git/objects/9d/7cf220f98402e6908795046cd3c124886fc54a": "2fe461ce38db262ea17658f27acd3579",
".git/objects/a3/a3c6ffb6c07b36246a3c4d56596a773a63aea4": "ff59e49692129b74c3080d98a3c46caa",
".git/objects/be/1b966ae51848bbbb14f23cb84ec9f446d14b77": "4c4cc972a3fe43547fa052cf0915a66c",
".git/objects/da/fcdc2b564eba0c8c2638f1478084f1459ad9be": "3207e2023bce5910bc10a40b8fbb14d2",
".git/objects/da/257bd3363f08c84f58e54d7ed8684830ce19c8": "6bb9b3d5d0e0c2c6f2467f5e3dcdfe59",
".git/objects/b4/40ff38274dfcdd2b5536d12b4b0f8fe0ad729c": "f5ecbabf66595747f86db3dbbb9270de",
".git/objects/a5/785173d590385b3f4629faf83ffab4e28236c6": "8b1ef17b3e5849509987b2081b3477ac",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/26d8f289096d66be41a52a07c83a952151869a": "67f7c370e09253daa34dfe39101afffe",
".git/objects/ab/c0700ccfa50d63aa6fe7418e2ae80888453d2b": "6cf3e7b38f693afee4c4c7c5ce9d65fe",
".git/objects/e5/2a0d41b6fa981d799d3a97937a8915e36f2f8f": "6c6651ef5c47ae16b333dc0b9a1ba903",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/0e319c5539dbb17d9167d3b7194b5e1a963b42": "b8904b0dc33f998f23b01fa587059178",
".git/objects/fc/0839067f820768318a51f94782195b4e94b359": "545e0a0abfd349e9210bc795ab57edab",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/ca/745012d6368cb4f514fda7eb2f9a8c3473e4f1": "c3819046f4a4767035f8a4258e02044a",
".git/objects/ca/93080a3ba4b99756799826492246f7e063eb68": "834092f21d05e06c53543f5cbbcad1df",
".git/objects/e4/0f22e72a78c1a61bb83cce0e61df3010c14829": "b988741382a37b608a0ac035a5a83efc",
".git/objects/c8/08fb85f7e1f0bf2055866aed144791a1409207": "92cdd8b3553e66b1f3185e40eb77684e",
".git/objects/c1/ab966ee066df9fc95ac65650f001823ca007d1": "439c2c2ac9ffc567916516b4ca2dbda0",
".git/objects/ec/48c9883f5c81b646e657ff405cee4bd6d6c74b": "6e27557e392d895591e22efc5363aad0",
".git/objects/29/36b61b141668ac0ced4fa9f905651004a69314": "269df690a8ae2adac38e02cd1295d20a",
".git/objects/16/5145f778ef9bc132723238ec5ffd6968861c54": "a89001097c9f05a552e4749cff9401e9",
".git/objects/73/47f7b71021edf2ce396b289fca66881c01fe30": "ebed1ff80467098b6caaed61c4843aae",
".git/objects/73/c63bcf89a317ff882ba74ecb132b01c374a66f": "6ae390f0843274091d1e2838d9399c51",
".git/objects/1a/d7683b343914430a62157ebf451b9b2aa95cac": "94fdc36a022769ae6a8c6c98e87b3452",
".git/objects/1a/96cc975b41fc8fdc895b01c0e4c21c61aef4a0": "c92414cbc85bc2030d1a23165bc9f7d9",
".git/objects/1a/cf91cac2bd756f1f83b50d6f5bb63afdc7d501": "f66a153b79c52d86e0a4f3994a2186da",
".git/objects/28/1c1b9b19b7e6d31c2c5302a1b790b6914e97df": "a503e824469dccd2b8d71f058a69a642",
".git/objects/8a/f917bca2217c712ebaadf3fa7b08fd6ea2ff97": "ddbde95b401a3e00166f6ba42162e754",
".git/objects/7e/fc8d01f8f4f8a5db26087745ef0d98b4bdd82a": "9f7a2c2ddc85777f3bbb04134b07d889",
".git/objects/7e/3bb2f8ce7ae5b69e9f32c1481a06f16ebcfe71": "4ac6c0fcf7071bf9fc9c013172f9996f",
".git/objects/4c/a2a1b05643f9d6b5c7366d6a20aa8213ee5926": "f1d4e22b415b41187e07cdabeb838cdf",
".git/objects/21/5058c94c2b85c82e16b9b466c7092fac8f1580": "afa2ca03fbb3611d4fd68e57fc744eed",
".git/objects/44/7176383df3bf7c365a7c4006e954abe0fbe407": "e0ba04bb25c946547a34aea3faa5689e",
".git/objects/88/3ad35bbf1e2cefdaa81b28e9af11f4dc1d6724": "85dc04f85e11fc2c97ae370ab3041a96",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/fae66b3b81c6403a432032751fe94b717e074f": "9994f2f76d218358d4a425cfac27a77e",
".git/objects/6e/a8e87e4e5dfa1951ffe1e47e29b74c563fcb7d": "76f04e9fd19f319264e6203b28529b97",
".git/objects/36/686c9d6ad46170d606cdb3517547819cd7d2f2": "7e54ae0696ce116bda29bb949809d74b",
".git/objects/62/5f1fe22f64bbcdd00e805f981b586e0f00ade9": "6087cb0e0e68c7ec87374764edf60665",
".git/objects/96/130a6a6757291aef28956c68b4847a2bfacfce": "c684cbdfe254cf7a019a870396aced63",
".git/objects/53/18a6956a86af56edbf5d2c8fdd654bcc943e88": "a686c83ba0910f09872b90fd86a98a8f",
".git/objects/53/3d2508cc1abb665366c7c8368963561d8c24e0": "4592c949830452e9c2bb87f305940304",
".git/objects/3f/7ee55826e04bced9d9ca56ede150f039861024": "4cb3fbe886b44fd3ea9a65cd7b8d578b",
".git/objects/3f/58d12c478fd5b32606ef4ec109c7c8619ea5ad": "30ffa87385c8133a9755fe9246aae04a",
".git/objects/64/1c1091d4385fdb29bb25fa589ad0a391e79c89": "77f3186b890cce4941d7b89411eb6542",
".git/objects/bf/45be73e7d594122a6033c89b1ab18c4bfed851": "5f39d07605a586fc9fa87f9cc33de08e",
".git/objects/bf/f1fd532e54538736b30a6342de0958ebd74f6a": "87890792ade01628af4a7ff70a607c91",
".git/objects/d3/ec47eb7257fe7d70a8a805ee3d1b28cc0f1904": "ce766e3eba7861a2379689ca25d2ab77",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/c1bbd59cba79a573dcf47dacdfecbe97b76d71": "a9af10eab3c451448f7b8f21e8d34492",
".git/objects/a0/93ccb6cb8a6edea077520a9af24e783b1380b7": "1add73da33fad519c31d4707b6d4160a",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/aa/158dc83e202283953c0172a307a0696f554102": "c1af40b0446e0f5a716defa68c21a1ad",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/f4dc9358bd22081deadafb98e455e4d56ed865": "04f1ea1ad48e0629dc7744d4208f512d",
".git/objects/de/ff6ac70fe68b75673bedbbe83fe004266492c0": "8199d155a7e8533654b45e36b724ceeb",
".git/objects/a6/42d0a3c70dba064d59dddda028e05ccbbab04f": "7940292eba4432f6bd7be1fb82c1db12",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/c3/fea84f4b9ebcf6793da6642676941cd86d222e": "cc95f26a41b39dc9a386a9f9ce49580a",
".git/objects/c4/259f96a4535da369fd4e18da30fdd16a64aa6b": "7229c4600ce9d7b5dcd8a18fcc38e43e",
".git/objects/f9/700be821c4f89430f3d2d5b298876831203ff0": "55269c2de9939c5481216f730e70a367",
".git/objects/fa/9f848fd2f8a0989c214b9bc20f2f7d7557b65f": "06a2cd1b2bf8e575bbc744b284aa88e9",
".git/objects/fa/976e427a16b6616e9b391b87ef6dfcf18f630a": "c707d65885d8f175ce701208c98faaf5",
".git/objects/f1/44ed67fd8f2aa91261dac42b5802d7c9e02635": "15fe7f5497eb1d2931292bac9c7ceef6",
".git/objects/cb/ef15f5c2fc9d849531d37909179fe67fb60a6e": "0c34e6ed0e04b69b1aa79f3e5576726d",
".git/objects/e0/7ac7b837115a3d31ed52874a73bd277791e6bf": "74ebcb23eb10724ed101c9ff99cfa39f",
".git/objects/79/7c60a6a2ff6a2530afa4a964a21705b967f8f3": "3e12f924ebb77b526ad9f798e7776738",
".git/objects/83/1326fda4014e99ad322bf156b55731fdf6c22c": "93578e549e7cd9c25acebdfd85e26a21",
".git/objects/1b/49e87422afac6dc85170fe95188bd9b35a50a2": "2a1a43575996c8a76abce339207337ca",
".git/objects/77/75f14278539224efcd15a4b36fca0ea92083df": "732e258a7fe6710a724ff3e3995e23d3",
".git/objects/77/98b0ee4ece4f8ddd1ea81317b262ea72e59713": "a36584884670dc0f3ef42f15551230ad",
".git/objects/48/63fdc6a7b9746dd9fdc7fa626853083dd6739c": "3b2fec4b968283a23bfa11ec5ede2414",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/70/2647f9877fdc020bd6d1fc4c06269e4b8c400e": "866d18e1c6940a84ef5d40b76537629c",
".git/objects/70/a3b3cfcb1bbcce1fa85a38a9332b6e6e371706": "43de2665fcf2b07e67725a1224a61a86",
".git/objects/23/bb7ff6df4d52d9b1d0058859986f26a463a69c": "389dbac55a3aade184cef111c8efcf8c",
".git/objects/8d/191f76aab38f394b2b6ad521e3e0b3a8c790c1": "fc99ce3f84b10a1b1ee90001ccabb450",
".git/objects/8d/dbd27427110eb0f3b9da97f9e2a978e5d9150b": "22beb279993a4e3c36a8949f1a7aa407",
".git/objects/82/dd9471b1898eea6d2ab5ba4d568e26e8351de3": "a31bbec3fb0cd2ac497a06d266ddfd71",
".git/objects/82/a500a00f11630544a13c580811598f1bcc271b": "47eadfcda139cc68ff6034aad494f986",
".git/objects/49/ba835099fc58366682f29ff79ed750c4891de9": "21561e1aef9ced67aec2a0229cee4bf0",
".git/objects/13/489bdb947306259361750a586a8c2d629ff691": "198050f4bc98fe8d6d0dd72dc3ecc440",
".git/objects/8e/69fd10a145c0a4581b05a68e561dad78e6a8be": "b4219c17f80373ac7309ad3b880c364f",
".git/objects/22/55a110c96a81b9a4ab7ceb6f28281ddba85f4e": "fa69cc02ddba8075f42180c97cbd8b8e",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "ca79d890eeca6cf2052d4ea49c452930",
".git/logs/refs/heads/main": "6892ebf4d485afca1c7084624aadf64e",
".git/logs/refs/remotes/origin/HEAD": "6993cc331110fbe8c9791f2dcecf97d9",
".git/logs/refs/remotes/origin/main": "848b4399fa0d8496d510f631bf5e59e9",
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
".git/refs/heads/main": "0954f59bbd516e02ddc4db673b0d2ae7",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "0954f59bbd516e02ddc4db673b0d2ae7",
".git/index": "c97b8dd48c662a0096f85019da475e41",
".git/COMMIT_EDITMSG": "ae2af827aeabf58fbb20921b72d7b8a0",
".git/FETCH_HEAD": "94ff58ebbf9826953a2698e889b045c8",
"assets/AssetManifest.json": "072960444df2c4fa7264eefd7facc38e",
"assets/NOTICES": "888b06b3c6642ba760bc77405aa56026",
"assets/FontManifest.json": "8ea50db1d9b49fe81f257115ecf29369",
"assets/AssetManifest.bin.json": "fb4c55ba558e44efbaa85aa047246dc0",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "0a3303093d2fec6e4388f0eb2f18f955",
"assets/fonts/MaterialIcons-Regular.otf": "476ec603d1b26dc74e10d0c868d6eae7",
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
