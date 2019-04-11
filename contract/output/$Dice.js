
	var projectContract = vnt.core.contract([{"name":"$Dice","constant":false,"inputs":[],"outputs":[],"type":"constructor"},{"name":"GetAmountFromAddress","constant":true,"inputs":[{"name":"addr","type":"address","indexed":false}],"outputs":[{"name":"output","type":"uint256","indexed":false}],"type":"function"},{"name":"WithdrawAll","constant":false,"inputs":[],"outputs":[],"type":"function"},{"name":"$DepositPool","constant":false,"inputs":[],"outputs":[],"type":"function"},{"name":"GetTotalGameCount","constant":true,"inputs":[],"outputs":[{"name":"output","type":"uint64","indexed":false}],"type":"function"},{"name":"GetFreeChips","constant":false,"inputs":[],"outputs":[],"type":"function"},{"name":"GetOwner","constant":true,"inputs":[],"outputs":[{"name":"output","type":"address","indexed":false}],"type":"function"},{"name":"WithdrawPoolAll","constant":false,"inputs":[],"outputs":[],"type":"function"},{"name":"SetNickName","constant":false,"inputs":[{"name":"name","type":"string","indexed":false}],"outputs":[],"type":"function"},{"name":"GetAmount","constant":true,"inputs":[],"outputs":[{"name":"output","type":"uint256","indexed":false}],"type":"function"},{"name":"GetWinAndLose","constant":true,"inputs":[],"outputs":[{"name":"output","type":"string","indexed":false}],"type":"function"},{"name":"testRandom","constant":true,"inputs":[],"outputs":[{"name":"output","type":"uint64","indexed":false}],"type":"function"},{"name":"Bet","constant":false,"inputs":[{"name":"amount","type":"uint256","indexed":false},{"name":"bigger","type":"int32","indexed":false}],"outputs":[],"type":"function"},{"name":"$Deposit","constant":false,"inputs":[],"outputs":[],"type":"function"},{"name":"GetNickNameFromAddress","constant":true,"inputs":[{"name":"addr","type":"address","indexed":false}],"outputs":[{"name":"output","type":"string","indexed":false}],"type":"function"},{"name":"GetNickName","constant":true,"inputs":[],"outputs":[{"name":"output","type":"string","indexed":false}],"type":"function"},{"name":"GetPool","constant":true,"inputs":[],"outputs":[{"name":"output","type":"uint256","indexed":false}],"type":"function"},{"name":"Withdraw","constant":false,"inputs":[{"name":"amount","type":"uint256","indexed":false}],"outputs":[],"type":"function"},{"name":"WithdrawPool","constant":false,"inputs":[{"name":"amount","type":"uint256","indexed":false}],"outputs":[],"type":"function"},{"name":"EVENT_BET","anonymous":false,"inputs":[{"name":"from","type":"address","indexed":true},{"name":"nickname","type":"string","indexed":false},{"name":"amount","type":"uint256","indexed":false},{"name":"bigger","type":"int32","indexed":false},{"name":"lottery","type":"uint64","indexed":false},{"name":"reward","type":"uint256","indexed":false}],"type":"event"},{"name":"EVENT_WITHDRAW","anonymous":false,"inputs":[{"name":"from","type":"address","indexed":true},{"name":"nickname","type":"string","indexed":false},{"name":"amount","type":"uint256","indexed":false}],"type":"event"},{"name":"EVENT_DEPOSIT","anonymous":false,"inputs":[{"name":"from","type":"address","indexed":true},{"name":"nickname","type":"string","indexed":false},{"name":"amount","type":"uint256","indexed":false}],"type":"event"},{"name":"EVENT_NICKNAME","anonymous":false,"inputs":[{"name":"from","type":"address","indexed":true},{"name":"nickName","type":"string","indexed":false}],"type":"event"},{"name":"EVENT_GETFREEVNT","anonymous":false,"inputs":[{"name":"from","type":"address","indexed":true},{"name":"got","type":"bool","indexed":false}],"type":"event"}]);
	var project = projectContract.new(
    {
     	from: vnt.core.accounts[0], 
     	data: '0x0161736db91a840100789cec7b0b741cd599e677ebf62db5baba5b2dc9ef6749b6c106590f3fe40736b8e58762c00eb10d04988cdc924aad8e5bdd4a77b58d4d502b124f0389c990d9c903e3f008241b0867c866c0640e4918b2c926644838316c8690d7721696249b00990d780ebbe7bfb7aaabbad5b21138c9d9dd918fbbeffdefffbeffffd7bd7dea7ff3e22b1f3bff1812f92106805d18ddcb8ad8ab8d8c602f1bc15ead5864c5bd62a438522c622fb017ac4840ec65b40036b2572b4a5c56dcab178bc5e248117b79b15884f6f580c9adcc7e7d97b5dfcad9004d6297e752b67579ca1ebc249bcad8560e8cc075bbac44ff04a81eefefef4ee4a1d12478e98ad59d3d3b0a69706fba7968d83fdd92daef9feec8f6fba7f1feb2e9ee42af9a86e2fdfd175907b76706b20810a0717b2665a712e9d421ebb2442e95e84d5b79085aa9edb6ecdd56a6dfca41a779e4925c2a635f9acad82b5677ee410dc1c21216efefcf59f9bc0235745bf6e66cc6ce25fa4a0b927e7ab7657725d2894c9fb52d971d72d782b426b67ea49070ac0d775bf69ed49095b71343c3a8f5c490e8ce557b1022500df1b8b473150c9a0576bf2fbe52b10a4adcdd764ea9a3775b36f955f2a9dd7ad9d69d7b7abab6ee4198e6d3f6e41299fc80952366aed24a8ba842bd7cfb9ef76dd915bf1c11c9bbdbb22f4ba40b96e31185b365eb25efdfbd7d8f42892958f7d63ddb766ddd7ad94ec7510ebb9ddb375fb433be63aba3dbe66ca62f4102e7cf13820b11046a6b6b2020841008ea7a50d7f55a11106c9831263883a64fe745161fbd2d6014e17efd316cd43cabcdd287aca16ceea006a3a767d04a0cf7f426f21667a19e9efe849de8b132fd5c8bf55b7de944ceeadf56c8f4d9a96c064d62f196549f85c521dbcadbbb1299feec1096f12ecbc639410ad3fe5ce200ce35dc613c9d464bd89d5d92cda6b1bcce3f2584d6f0e22dd670369fb225425bd09da29db6775bceb2360fa686f3e830765bf6ce54dfbe9d89210b2b66747b337f90ac347c0b5845fbf0fe03192b87d5d3ba2d3b3e942d646c3f7e676d098c35916ecbbe3c958967fa2fcee62dacade9b6945aebea29d4b27622dd9d18b2364becf5b58bb725d2e9de44df3e9c17fa66d33c0dc60274a10bb18f8d8e8eaad1981ac5c6e9db1860aca86d32597cf4a6d151c4ae27609c6d8b207e9f048c4a2c6d930993d1ffd80d0468d662d7d1b784dc48a3d84da325faad11c41ff5519b9af1b500d346e2c76e1d1dc583cd880b13f1da386287a5b8e71598c545fc0117a3b46a32895d5336673eea975dea4019f8772eb8a60c7c6f495619f8050f3c15d9dff1649793052ac8ca757be6dd91bd515df7afba60bd829b5ec14d2f23fbc6bb53e2e177e7a9475db2600559b0822ce827339622768f0cac5b2417c46ea5ef4e4dee6e1c5d58c3e5fe1b9f668c15e35fbc590665ec3689fdad9b25d2524dc69d03fcbe42f1c077cb80666a5905ba9306454a831337bb717eb34474f898a833e24f7b413e399ef104631ae518548ec5d936c53f82f82f6ff6b2c435ae99756a0fdcea682ebddda4c55f93dc59ece352d6db72a6b92ad33f5333e1535b4e6f767c5602b3b056a67435acee0833e2b71c2ee1d419c63f6a8c17639f90fb70843e9b58fc6e89a1604aa9470f2b15959b7f70d8b1e00dcff72662f749726fa14933117f436a240b4a13f71c552a262637a1ea8e835aaa3247ca6a94e307ae6a513379c8e71198dcbfafc5264e15adc2393ff3ed68058674ccd3e5459155facfe4db221419bff21c683cc9381be1456d24feb95b08fa49273efe4612de778bf2cc1dd2959faafc6c66b1bf95788f28bcae0bc6ee6fd6e2da879bb9b3f08f92e97f9055fd82f12eeda3cdb8df597a4ad230937fb81d680e38127fe440b50fc7d58270167e26178409333032d2f512c65c254d185137111f90367d3bc459918d6845058dff8f5b7c896722f605e7fb7e4923e3ba4953b44d3c8e3896a9bced621f7532583e845837ed76d7ca3d11c4616a4e2294e286d10e97d2a239603267ab8519f06fb5f05258ee9a6f578d384cd1a918b8dc9e7fafdc9ef7737be3bd727b43253ff9e81b251fc991a99180af2a9fc499c94d16fb3b95a4d27d45e5be8ecbfedd7da7775fd1ef3e9fbbc893d28d2b76454abe6b16f17fbdc5ab524cdb648aca2ac54ce15429853a6995faff690b9e296dc13313b7005d2bfc11ecf945f8cb2ecaaa6e5c562855752bbcf082a33726d31ba7d1fb05c5cdf3c13bd6c367f1774a167f6782c5548b9db091561bc7e96ca06aa85b35b54dee39c044ecd36e0cc164a5f8f4fca49d523f6d829f3ccbde31a5443799cf88d867249a7196f348f04e65e5c796d87f94785b1d34d72e5a97c7b7d8eda3ea14f4b15b7c7785b26786eb8139c6558c397e2a3b889c11de41878bf123c602ae94cfba27958a535979026ba560e3e5a70d7eea60e315a1fbc67be5e6dba6879d6dfa9c5c7ed3b3a9640b7ca1b41cf2684e3176d3ad93d529c9f75ea563494356aea136757bcf045b37f3d87a65083d1863774a84f652cc54395b9be874029af2eca82498578a68d31fcd12cd68f122f0567fec5545ae2f2d3a013919ef87a7c25b21ef677c6492cc731e794d5e216a62a52a4c676d75cc8c7f4eeef45da3ea1aa18e9e774d5861fe156357a952699bfc39d80cdf86961fb89dbb50f94dc983fbbce41c07bd63e6c3aac61c161cf1d1a071345058b1bab363f5ca351d6b57ac59d3d90e9aef4e0c583b0a6933bbdfca0da4b30770a903dc92da6f1e34376e34dbcb4013f076177acdabcd0de6c11224dedfefa195cbec689f00a8f287a4659b09f9eb8d99ca9849cbce590712b9fef57261c0b23a4aa3156ae4ae3b444385bc6d9e6f2a4679f91ba6c2eb55bf3faec7ceac6965b285e4a03994cd58074d3b6bf65ab6c4e9737e073413eac7a4f5e5d0120b82f6ab5fb526e79bca98c3b9d421cb1cce66d3787f267dd0b4072d337b2063e5ccbe44c6cc0e5bb9846d496e766ac81b98f9c1c44a394b65faadabe52899c82b73e5af743d09ffa4d77144be90b67d0e5c3fd1e138982d988389fd9699ccda66af3590cd59580ec48f858da01d00ae0f00883f10362ec199fefbf81ca3b5dfea2d247b529981ecdb612020e101469f612c72f08e38dfdf6080f6cf00d600d066096eea00df4014dd009e07c0dac5c500f467e983693f7791e709be5807b4570114085027f852a23e04a0669356177c03c03d72054130e021390e066f61403b09ae5babc4fc91c474041e03304ef0484dbbc6833a0348134d201865c0025ad20341fa5e46e39a60b0dd65158c052f77c7b5b38209771c328319978fb13478b53b0eb728d13319c05af573089705ce63c0250439475fc7809aa076270376d36283e083649de4fa65e63861bae03639e1ab0c38442b73041f2634b2bb969c5e0fe00b0c083d441f8f11c810001600f88006b05f848f93c4ab58e45bf29b4c8b7c5f0ec952c58554fd0107423fa18f973810fd1d07ea88f36a0075e4c15f2bf6882d063000a097f8ff8eec8dbcc04ac3174bc3fa5fd3f0751a4a4eeb014489d36b3e6de5ca0157c61f1c19522b92fc430d08fd943e5ed680862f301558eca41f7113807f23cd830120d41800a20b02402361cf226cc61c74e356009d1a90d100ed2ce3490d580ae0104db74e7b86147e931466caa4373d93e410b1df68c0a7018c12c54eb93cbb34acbf8a03da2e39eca1e11e1a369011edb49f7b2a4cf9a0df144cbf89034f00384c0caf547caf94cc0688d98768d7eb296eb59e92538f72e554edaf141b296c9800bd15c26ef20b9390630a4d41a6fd9cac7cc567fc2b9ef1af78fbf9aaf4c3b4dfd2f86d1ff6db1eb61cce90d860127dfaf600b091017f4b3625956949c9741f9996f25c36244da368bc3700bc8f541cae16973f0d54c4650385c0a30abf4a203c531608d24d2f1372b632bc58a59b6691c733fe80a390d9520b442fae75b499edc4b676b52fb631f326013c09e018d97b0d2577fd3564e4b572384ac322a561fd611a7e4c428fd0705c0eefa0e1f57278270d6f94c32fd0f0661a62d6c5ba927b3f09f804c1a6ff950e6c13c0df13e80ee5ea3be4e67c8508eff89f61a05e10f433f79462f6b3443afbeb3ab09cb93bf179b913e4d51775958ddadd159e9d43b6076a9c9d28795712b5d43844f75423da559de8904b746f35a263138830fb648d5fe72f97749e1f74383d588dd3e66055f1fb5ca287aa11dd5e9de83197e82bd5887e368108b3bb6a815449e77f2845fc85b54ec43f5a2de2c76b2b225e4a3f56eb487fac9af46fd75655f9b72ed1f16a44d342558936841ca2c7ab11f54e20720a1f65cf935e9249539e0a398f82937e016fb802fea99a803946a500c9ff7dc4ffa90afe3b8c0afe987eaf011c07f0358afca7555a3ced15d71fdee332dc4b0c4f5430fc4d2543894acf7bedb90ad4b3c395b2e7f68481b3003c41425fac97b27f290be3bcb7884581a9843c708f2c31378481ad003e530b84eea61da462735b185842de79d52b3bf786ab951d84c3c4ed65a6ac7c594a9afbfd30701580ef11ec35a5c41f64e8919c5f8581cdc4e95f3d89af5491884855893096468020807f21be27e7af88003f02406ed1c06648715c3e0d6648870718193b87f63d1171f65d67d536fec648e5c64baaafb8543555a97e3c810af3f528f02680df933211a614894945663c45e30646e723497f6e54d16b8d0ebd14ba3b0aac24e8b4aa420f44abaafa25976a7a55aa1f4ca0c20202d099e16d52752e5bf85fb8fca68785527b0153c1d25107cc03f0770610bacf00609a44b344e2b2856bd4442237edac035a008488c372893187087bea8039a4602b533cd07c4d9d3a5dce20d40e495f7b9b232b100642f56192b581d8af96fbeac85aedc8fa92236b2131d82831e610e1e3aeacf399e281a6e7ea80fd0096116a5c19f9cf34decaa87ccc7896c6dbd4f8791a77cb319a76c6805d746520e04e155d32d23e20c78d94a44728c376b18ac7fc03fec73c9a3f1f53d65e408c2e93dc173d1253a1fe01825dc1026f85812738c096eb5fe3800800b1a8731f1a4af4d195083821220e2897c824ad3c316d242f0038d7779522cfb4025801e07c1f7c05073673603b051b07e8094147a48f70808e0eee5fdcc173d7dd3f7a640402c0b400704ec083ff91036f7105377df03a3a1f0580d501608b0ffe9b003057001d02880b0f3e5b54872f1440bb034bfbe02d0e7ca7003ee4831704704000070570bd0ffe68087836049c08013f0f79f04d06709501fcb5010c1a1efce70670d200de368060d883cf0903abc3c0da30d0e5830fc7801b63c0cd31e0ae9807bf26065cebc03fe583cb33350052719133a747345d820e3bf34ee73b0e802e18dfd200ba59bcaa01745fb8810374b6ef0e007410be4128fc6500e88478910ed041ee4a1da0d3dbdd06408fabbf0e03f4e8b83e0cd033e17b6180aaf8d91180ca6d7b04a03a1b880254dafe7754dda3daeb002a0b3bea00caf8437500a5f3ad7500a5f017eb00cace137500a5de8e184099742c065022fc7d0ca0e0ffa6cf0ff864c00dec446f6fcedacfead99268a3e0d1d8ccb9d17a76e94c405b051eddde78c1ecf5c67986360be0abb1bd1108ccc0f6461e252820ea244c5f0c1e3ddf300ca0a69119865a0c4624079aac3580da5656cf1af48e462024405f462b08a2985d301b08b73235397bf605b34d03880828004989ae925475f3594723d17dd0b8c200628aad4b471a03f5ab7c740d4470e94c85de589a08609a278fe848e2f47276c46c86c34c10b399fe75256c96df0c059a6d482c608e4f594a363f3521ce733550d2e7fbd605ad2ff003943a0b854f1dd3a1179e054d7e12a54eb34f4307b4c80f220070789efb83503a95b1dea258c4afd493ec6434425fee8daaedd2bc95cbb71db052f944ead06022936cdb92ed2b0c59193bdf96ccb6e5737d6dc9943d58e86dedcb0eb5edcfd87d8389548606cbdd5fef96f75b43d936778633cfb22d5bb0870b36b03f63a753bdad83a4ba7cc1ae673867f56587865369abb50f1ad92e34b28dff0b9808859a8431a8f3cf17c704d3f92f606a0c8c41685436f82f18137ae88abbc6054bba0b92f615c6444368a3883e2e96eaaf89551bc4b9474548e7bf1f1913c6f9c4efb8d075fe5b666a5c9151d9e1bf634c44431bc5223d6812faab23a630da157a54e77f60a658a45f281af416b1e89858a98f893947457480505f1e19f073fe5f1e67a9d09b92739398af9f20ec5f8e9822c2ef62ad42d78ff2eb488cce7f0602dec988c1d13273def6cc99af1f178b4c7156ab587d9c38bd30620a9ddfc75a75fef6b51b5c363abf871d970a0434088d6a275fc2040b6d0c3e1e2cbcfe7a30194c061f0f36be1ebcc2fd78bd62ae80520dc983ea2e7f0ac4a429296a93c2d05b45ed8068d01f14ace0e1515de63f00133cb4f139b1401f10fc883e28ea2db160b958d226ea755b703d196022ca1f60633e8f0434c1f9d5ad012622fc7e3620a7ff75e4e8b8cebf54dc10608e6d12bcfff8042ccf5a7a22f09f800923b431c04428d8e66e624013319dbf0853342c17b1a458fca0e0b73f2755f90c3b21e63bdb5eda1dc2e7bf1c392a8c1562b53e46ccf4b93abfa77861d97e4d8ad6eae9cc9ed0f9e78a26ff6f4e084b4de999c5ff3b985819da28e693abf471b18cbe07f4e4736a74444cd39362d99d62e98a00130dfc248e88e8eb6e5837e8778a739322c47fef8bbf069d8f6a2661558916a55754e727d985725d19ecb7aa14f013515acb50223aff3746d6d5f0d7474e88c641329da73790bd7c46abce6f2b9afe8d637cda71cf7a19da7f0013d3424d62f6b830f423d275dc1af06d18d3f99b7e9fd1739d9f94f1b59fa28a27af134b2c61ea6362ee8098413e4c5e27665a62f61582eb03fa75226689d9fa9858b041ccd49b04d737e88362be25f8f87562063f3020e67f54f08bae13cb2cb1406f15cb3e28da2e145c6ff245149d21f8c7998c7d31531f10b1014f213a58f03be46241f0e473e362dab8888d8b86713127789188e9b668d0ff46cc785034dc29d60dca4d7c11b688de35f9f6f89c1cd0c43c9ddfcd4c715eb05112ff744ac40ba8169862ae43fcc29488233abf979962fe4b42041b45a4459cd52e846ed3a62c3aa1f37f1831c5429d3fc04c31bd9a99cf4ed5cc077d66fe68aa663ee433f3875335f32b939839cb317386ce1f61c7bf2f99af1a3b4d060634b14ee78f3153a2ff677c676a5e78cce7856f4fd50bc77d5e786aaa5e789c99a2a9d20b11bd45888b05e3e131e58b753a7f927d5096cdb5b6af40f8b2761ea198b248afa3323a8f771f151bbe2bb5da3015a516eafc9fc8a297a4b8ce49c4292c296e6d6b40e3db8f8a8579b1e06269c9c273c5591dce7e069bbdc4a59b007f5a26ee46c19394b035e3fa51d1a05f20d629794b2691d7a0f31f3bf2ce56e65d795434e4c5dc8b25d9e249c8223a7f8ec8f81252f2aaa342144464b958d646daf10746e421e727cc57ede896c25f742a4f2c291af456111b108bf4db052fb8a71e8949f718feb283398ddf561c98bca6729dff9a9962d6385548c1f4db3d36740de2af394e392729a649045e189b2a4f1e3ae271a54b157fcb51ae4ef7554fba66f1514dc99b9614b1eb9c67f39a9764b01c9a4ab0ccd1f90d9a29663be17f700ab43abf5133057f5018cbc5596d82cb6819f7f4a46b20bfcdd13336e828b9e0bbf289f7bd11db97fa319ddfae99624d4ac43e2236ed90aaa46d111d9f8219772833c49cbc68be4872d837050e3aff94668a052fc918b9cb3382eeb0fcb39546cca55350191edd71f97d5a29ea667f971ce2add3dd977fd9e1d3aab6fbe09883193be821d2e5983facf91e9cbea0a01b33ff4f934ba19b34ffba23a5e51452e8aacdbfe99a554a9285faed22f60961b68bd8c7c5a20e31ef9362ba3e26da8f8be898983e206a06f4a4088d52bcfa4c8bd1f155f3c5ff9858e01c57bf58fcb298af1fad3c22727e024775fed0b5de59a7742e946b1ef7cf13f71f4fe28f4768f179d71ffa8098a7f4c2ab3521e73298b7737de9442669eeb772f9543663ae6d6d6f6d3797dab942669fb97255c7bacef6657fbafb5b5b952bdbbb15d69bb5edb48501cb42df60228782eaa0c340ceb29c16a5445f1f7de7b1cf3a08e7b513ec978d66ce9b25c8b8cd4f793b97ca2415b583d9d395cda6712095512d4ce96c2669ca8f42269f4a66ac7e3395b1a5dcce554867f34eab53df60aa6f9fe5101d486576c997682482a3575ce985a1c4f0702a93f4de22815dde35e5bc0703f95e0b76591f29a47216fab299fe946c321bca27fd2f0ce16a78af0bed28a471c8fff210fa06adbe7daabf4bbdbc83b27633f5620b26691523f7a16a53d884d637df7b4de4f96c3ed9b16e5dfac3eabe8ea4653b1e91fa382e9163a9867aef06beaeb92ecb2e690a7fbf5c657b5c59735ca935aeac31cedf16d75d3e569ef11adccadbdbdce6b689ad6d5e635bceca43bd3285815c76086ef43bed99902f22d1478f7c09c97901299147e9c5a3d24b47cea00fbda964d2caa9e0a3704b65ec952b30904e249121c50fa43232b4dcb0033ea5076885dda66f80d338cb26f4cc6a95edb2dce9940d949a6445a93f562fb5c6d694ba6283a586d8da522f6cc8d7066b54eb800d7bcdaf91f2bed76859cb6b5d956ed758f546d77ad5e3da50d6deda58d6d93acd6d6a9d2efb5967945a59673a5dacb3bc06d6d9557b57e754b4adce2d75acce2b6f569d3fa14f7541458bea42a73bd5acefe93990c80ff5f425d2e99e3e3b9bcb374de8226d367cb9b4c8f025d362d55ebaa4b6944e6719be7c3abbb694504b75154bcb7c8da8e7f02ecb3eb7d486dae2ef425d5ed684da5ad983da56d682da5eea40ed286b405de1ef3f5d3949fbe92a7ff7e9ea52f36967d5ded3355eebe9daf2ced3756ee3e9fa897da7e7796da78f451eb9ea9a66ca8ce6f5cdd279cd2dcd7dd94cde4e64ece6f5038974de6a694e65860b76be79fd551f6a6956cf2c67621f1c264249902bd07e355fdb52e2574de332f676aee0e75e22a4b2da5ce29e2851cada60f53b7a5d5ba64d8958813c72e7115895dc41197023cba7bc6ff3df8d4baab1f4c7c899e23961734fe5e077eeb0ce5553f5973fd0cfa07132f8dfbb4da78aa17710044e9a9f29bb7c65e0942c4b041985e9b054a7b2d3e4c3693dab52f3cc84cbbbc8afb26af5deb538854f4ea18457fcff5269d365d9ef2c0412ee769dceed1e6f754af248e429e93d858d5bc1ce6082577904fef99f11ef2e7aba2749e33f63003b0ff9bf5816bb05f20cc7f01442c85fa2ff725a948ecacd2dcd894c367370285bc89f4207ba099d327a69137dfce946fece1e022d7f868ae111a4b3b66de50e9ebe0a7a24ea2e38a5c8b3f65b197ba2bbdd8bc7ff8d3e3fad71cedde9ff49dbdc6bdf9fd0b89deff4c4746a4dbd2beb9f48d764d6e7d15e55c34ea7e48746ff0f000000ffff', 
     	gas: '4000000'
    }, function (e, contract){
    	console.log(e, contract);
    	if (typeof contract.address !== 'undefined') {
        	console.log('Contract address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);
   	 	}
 	})
	