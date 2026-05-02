# Estrutura de Pastas e Código do Projeto

## Árvore de Diretórios

├── .env.example
├── .env.local
├── .eslintrc.json
├── .git
│   ├── COMMIT_EDITMSG
│   ├── config
│   ├── description
│   ├── gk
│   │   └── config
│   ├── HEAD
│   ├── hooks
│   │   ├── applypatch-msg.sample
│   │   ├── commit-msg.sample
│   │   ├── fsmonitor-watchman.sample
│   │   ├── post-update.sample
│   │   ├── pre-applypatch.sample
│   │   ├── pre-commit.sample
│   │   ├── pre-merge-commit.sample
│   │   ├── pre-push.sample
│   │   ├── pre-rebase.sample
│   │   ├── pre-receive.sample
│   │   ├── prepare-commit-msg.sample
│   │   ├── push-to-checkout.sample
│   │   ├── sendemail-validate.sample
│   │   └── update.sample
│   ├── index
│   ├── info
│   │   └── exclude
│   ├── logs
│   │   ├── HEAD
│   │   └── refs
│   │       ├── heads
│   │       │   └── master
│   │       └── remotes
│   │           └── origin
│   │               └── master
│   ├── objects
│   │   ├── 00
│   │   │   ├── d40024a2a575feaa38f284e139bfcdc621b218
│   │   │   └── f6a90e7a8b1601a0d32cbd6314f814ee4cc877
│   │   ├── 02
│   │   │   └── 624d05fefa400ef8e2a7c5c84dd50e4c372cc7
│   │   ├── 03
│   │   │   ├── 5e310937858523039b641ca4e12657a56e1ada
│   │   │   ├── b4045817529702c85ef84c5304be3ea4f70f8a
│   │   │   ├── d24e34877fc283a6d079d08bd62b34caa6e6ef
│   │   │   └── f7afc1bdf62d949662dc1025af04124523a846
│   │   ├── 04
│   │   │   ├── 68c957c22e12cafb3093770143d0c45642a4e9
│   │   │   ├── 97bbe824a6fb526e465b5ef7eb06c4f26e8a9b
│   │   │   └── b32ec583b23fa91c6aac67a3bd01d4684852c5
│   │   ├── 05
│   │   │   └── 1f4be7fbefa7eacb404d1dc7df86a1536ec1d8
│   │   ├── 06
│   │   │   └── e85a29593773e09fec5b705fdfaf5ce52141de
│   │   ├── 07
│   │   │   ├── 0b5b0034b914e2c05b123c6df62e7d7c38780a
│   │   │   ├── 32f1ede5a0fc7c773ac29f0e4817ab53854bdd
│   │   │   ├── 383168b2dfeb02273e8f9d2ad909d0198160e7
│   │   │   ├── 5cfedcfff3e585b57f899205237f423218dbf0
│   │   │   └── bf8850476c08edb86578b98fa8016b950234e7
│   │   ├── 08
│   │   │   ├── 122c10a353554783a5f4cc90f81e33cb30b771
│   │   │   ├── 3ae602d73d08cca5f4768a6359e4b3f916ae79
│   │   │   ├── 670e5ddb3d0d6b934559c597b9e5caf0cea61c
│   │   │   ├── df960767fd14dbbbd135de51abd8d93fad3799
│   │   │   └── e8eaf643276de0ef7ec5d28a0a2fa3f785e93a
│   │   ├── 09
│   │   │   ├── 2b791a4c0910029d5abb3a980863a43dee55f9
│   │   │   ├── 4088ce63d60feb70dbb3473cdc9cdb6df5bb34
│   │   │   ├── 5c19d562c4dae31031c3db0b12f678897be049
│   │   │   ├── 610bb4da4a5e5b369d9e2bc795207f7ca9f0a1
│   │   │   └── a3341e58b94b1c7cdccad78b51c4370d418872
│   │   ├── 0a
│   │   │   ├── 3d68acba53bdbd85c8add97b2dae7b5564b39e
│   │   │   ├── 48d4648a05a4a6afcbdc8474a51edb8a67eb2d
│   │   │   ├── d28fe2e1fa22aa1142994fb94361ead1cb7390
│   │   │   └── e189fea3c4bc3a0ff9cf53b438985c787f7b47
│   │   ├── 0b
│   │   │   └── 2f8b22fd98b247a03ff7096e47c45d3a3aa741
│   │   ├── 0c
│   │   │   └── cca6ba0e61163d3e420ee579a54b679a55de09
│   │   ├── 0d
│   │   │   ├── 0d5362fb78bba7f2f64237ff10460bda533d57
│   │   │   └── 1559e58109be768bbc87802cc43604a6cdb57e
│   │   ├── 0e
│   │   │   ├── 73bf55680ccc3931b16eed5249a243f359ed94
│   │   │   └── f15676d001cfdb0db891f05d114295f213c8e7
│   │   ├── 0f
│   │   │   ├── 7997790465352fba8ab297ed1c86ed73219c59
│   │   │   └── 9659b7f4fae85b091fb6fd3492fec6c118aac6
│   │   ├── 10
│   │   │   ├── 0e55f415cd1e71ca8e8bc40a57be3d4bef920f
│   │   │   └── 3d5026ba84031ca80ec09747c68f3bdc1b79b9
│   │   ├── 11
│   │   │   ├── 5351bc3d327cd1e0f1e1928304d862259fed0d
│   │   │   ├── 538aa8e5c7b76f9d0501fbd7ba44dbcc39777e
│   │   │   └── a2046194946eeda771e05db2c2429ea4762761
│   │   ├── 12
│   │   │   ├── 32b5c45fdfb294de5c6bc1222e501a9ededf00
│   │   │   ├── 969201b7ce5bdd94608d422669c3d2a3b80d3d
│   │   │   ├── af07c29937d6d9fed84374853d38cfc9545dfa
│   │   │   └── be84237d07791f1da3da4a0611765ae581a5bd
│   │   ├── 13
│   │   │   └── 6a2cd5e6e6e14925955b7736861b1fef4c30b8
│   │   ├── 14
│   │   │   ├── a762abdf818327fd7eff59cc9b35a3242a1a49
│   │   │   └── b99a3592f7f497101af3aab8aae5d8bbb20e02
│   │   ├── 15
│   │   │   ├── 4169f6ac4d66da4cecebe0ca4dc858090c5598
│   │   │   ├── 81c13453aadfd01c05706ba62c8e3869a23b6d
│   │   │   └── 8adbe1e5f373c6868b649e2fdb713cd5edd344
│   │   ├── 16
│   │   │   ├── 1d2282015a630ee9d2b211302c956a3c1d2be9
│   │   │   ├── eacb67a6869c462e128bbdc54441581a7e4eb0
│   │   │   └── eb6cb863b262d1f63a681991246543298beeb2
│   │   ├── 17
│   │   │   ├── 4df449b534f51cb8135dbcb03c90eb5df9828a
│   │   │   ├── 92c916560d5073ce122005894ce0542372ff77
│   │   │   └── c403566633e6209372d8627e7ae5077625ec27
│   │   ├── 18
│   │   │   ├── 03d90ecb589b66ad7ab2fcb3cd6eb14198e698
│   │   │   └── f86319b443a11e74f9656a2a299241c0e6b6c5
│   │   ├── 1a
│   │   │   ├── 2fcf75720db184a72cfd2be2c792c77817f003
│   │   │   └── 84a6acc6fab623dba6f3aae36eb3815e296ebd
│   │   ├── 1b
│   │   │   └── 1b11ff18712bb31b7c7ff9161605ab7323d7b9
│   │   ├── 1c
│   │   │   ├── 29fef3499f76b71eb142f3759ff66347c1f5b6
│   │   │   ├── 30031e79ce7c46c4f9e62baf84d0aa6cab38e2
│   │   │   └── f20e1e2f947ab0ce0a128067906a0842f1c00f
│   │   ├── 1d
│   │   │   ├── 5b44dc92f74e332073e6bfe9cebcfac736672b
│   │   │   ├── 7c03db80b3774956d00a72b435c5bcc46afa1f
│   │   │   ├── be365b26113d0ab87516ab8871ed22d3e3269f
│   │   │   └── d11d6fda744e809abf5df52e7d4f873c7f66ee
│   │   ├── 1e
│   │   │   └── a990b6084f374375d551601e72b34f86a3291b
│   │   ├── 1f
│   │   │   ├── 069346b78d450b039b73a9cc5c79c43edcf182
│   │   │   ├── 8b7d6fca3ea23c2b5e864584419732f7876bae
│   │   │   ├── b3e8634909eb1857adf4845d890c9ab6332d16
│   │   │   ├── c31a1065837b157c3643ad53de3b693977fb37
│   │   │   └── cde3a398c3b481ee958d5d13ef99384cfa3f9c
│   │   ├── 20
│   │   │   ├── 133a6d908c669becc62fd20432567ee52e4c89
│   │   │   ├── cb0199bdc53c10479cd6c750c1d7a74a3465ab
│   │   │   └── d88a5a829f0cc83dfee6873cab9c5e3b2dec34
│   │   ├── 21
│   │   │   └── 0771255d9bf16ddbdcc776ed5c6fc775428aae
│   │   ├── 22
│   │   │   └── 60768dc5ed2038ca4a4ee405a15f82886a290f
│   │   ├── 23
│   │   │   ├── 4916364894b01cfb8a8c3f344a4c2967e30483
│   │   │   ├── 55dbf56f1c29a42aa2ca4e2fe993b5b0234eae
│   │   │   ├── 6590c9a7e5b180aaf868f4371c0fceedaac32c
│   │   │   └── 888110ba0f75644e30b0dab8924dee76d32de6
│   │   ├── 24
│   │   │   ├── ba719812d4836556d986dee9709e162683578a
│   │   │   └── c2cf8fed1c0073eb3d472e3cd97677974c74cf
│   │   ├── 25
│   │   │   ├── 67848fb636f9eb1dd0ac375761abc39b0c2222
│   │   │   ├── 8786e3abfb961aa83af24d636eea837b87880b
│   │   │   └── f5489f5215b06197ce4a607c32df0b164c3a21
│   │   ├── 26
│   │   │   └── c5d1f7f5268d5db6f0da46d19b9594b869c06d
│   │   ├── 27
│   │   │   ├── 06628de8564f0b9289f7ea69f1ea5e26f73cfd
│   │   │   ├── 17de0fe43043f1a7e1f38325d34d39464035c6
│   │   │   ├── 9255ff02c7828b87713bbaf8a08d2f73916c5a
│   │   │   └── e2c6b3f06a1d397ff5dc951fef8b002edb65db
│   │   ├── 28
│   │   │   ├── 060fd18c7ab39231b6e0dd684fb465c0407619
│   │   │   ├── 31058c5965da8e3503c5794e18675e25b729cc
│   │   │   └── fef958ee5de9603145b4b48304cdd562a54676
│   │   ├── 29
│   │   │   ├── 4d17ae8560e37ffe2a8aec5fa5b7ef2791e108
│   │   │   ├── 609b4343b50e037891fe1bbfa0d97e8799459a
│   │   │   └── 9dae2582e21062d1e703c5e9111783819dfc26
│   │   ├── 2a
│   │   │   ├── 2705bca96eb3bb433c0fbe1afd9b7decd6b1ea
│   │   │   ├── 48e453cfdfe3b99edde3be59d3fd6f63ecd45e
│   │   │   ├── 491d0bd806078ee27b64380ae6fed9f1b0ca21
│   │   │   ├── 643eae21147185f2c11b04119d479e8081dfe3
│   │   │   └── 9aeb1665e6456671cd932e856881cfb9fb34c9
│   │   ├── 2b
│   │   │   ├── 82d8615e704f5ce205ee6610ba0b93f5d47aa3
│   │   │   └── f68a8a0dc58d8a536b4404be2e2f00e20e7a41
│   │   ├── 2c
│   │   │   ├── 403313b839f6c8d7aec8600fb76dddd4ac4123
│   │   │   ├── 51617f280f1b8951e731480eec2ee397db1da6
│   │   │   ├── 55be5b71c5585c6599a721b387d60d32a820d1
│   │   │   ├── 640fb5597e58e9b1db7f1b8277dbbe272baae6
│   │   │   └── d014ee8d00bf37a8ea90cbdd120f2677efa27f
│   │   ├── 2d
│   │   │   ├── 77dd3a497b12175b211a78a3d4a3aac0776edf
│   │   │   ├── 884f12a1b512bd8a87245c18015efd345c8d43
│   │   │   ├── 8b27e984c0d933879a42deeed15d238a925fdd
│   │   │   ├── a5b2d1521b6b1902487452ca205a9315764959
│   │   │   ├── b00b1c2875794b9f36f0224ab9d3baa7ca6453
│   │   │   └── ec86fd431cee8f356ae4bf54c00b17000ddd52
│   │   ├── 2e
│   │   │   ├── 1beab466bdda1c71ac05f83e2457d8d7d5e205
│   │   │   └── 2d4cc468096454c84503d19d77fc784ce058a9
│   │   ├── 2f
│   │   │   ├── 30822690163cc4f6ba1cf3a577ff0dd7dfac0a
│   │   │   ├── 542f082df008afb13ff48d8230adf81cbab6d4
│   │   │   ├── 833eba25e7e0f6beece54024cb0a22bd516555
│   │   │   └── d01b523fb94b709513be49735db3b1b0ed947c
│   │   ├── 30
│   │   │   ├── 0c7c5af0564a6c6f0446ed8d9960e3f08b1f96
│   │   │   ├── 87f0707568918e35deb4bc7b9c238696cdd866
│   │   │   ├── ea2cbfead507aa514363c166044f5dc2728eab
│   │   │   └── f41d788f40b9a53b037424a3d434e1f3fbac21
│   │   ├── 31
│   │   │   ├── 11634de87887c44405ec450a7fcbe559ff0113
│   │   │   └── 96eec2989ed263c54fbfbcb065aea8193fc41f
│   │   ├── 32
│   │   │   └── 0e5bef6975f2850bc9c9ced5b8d3db8e7e5db5
│   │   ├── 33
│   │   │   ├── ab65ec3c20c3d5983342d59450090e5254cd68
│   │   │   └── cae07579b1068b0c5bc10b58ab129e466f1d7f
│   │   ├── 34
│   │   │   ├── 3e27351ccc73c242c1e726a5899b8f34648d71
│   │   │   ├── 5778996af2fdc20a377210d22456a6f1820ed0
│   │   │   ├── 58cedb22a033b005d781fa1838e36ac84f4310
│   │   │   └── c06b9a0a47911651dfc19adb4166238bc70102
│   │   ├── 35
│   │   │   ├── 9000063f52040947e8ef61b1f40a18005eb321
│   │   │   └── e12713810ccb4ab6673c4b2b695e58dc348c33
│   │   ├── 36
│   │   │   ├── 73fe011ec32b23a819d2d8cb740b4e152f811c
│   │   │   └── c39a6f1286a309b00d4820d7045cd6aa97667c
│   │   ├── 37
│   │   │   ├── 105c63f5ca640044787d9a5d9a3d40dbc09fc4
│   │   │   ├── 68bf1989337c51594757b1db5dd7d3f0b55868
│   │   │   └── a24f44a7370f316a134a41e7784d243edf7508
│   │   ├── 38
│   │   │   ├── 05df3a0cc4bee98e3acd5399f6b840edab7cf3
│   │   │   ├── 279e68c9a806deede129d1a5eb20e2adbfbf24
│   │   │   └── f19403ac7f4ca9391d66ddbece135be52109f7
│   │   ├── 3a
│   │   │   └── 0af10046b163f3266250a8cccc7f05c99ef1a4
│   │   ├── 3b
│   │   │   ├── 02e31fb5538b7d761a5b402719ccfccc5b9a0a
│   │   │   ├── 10924ca6480bb3686862586bc05a2071bbfb98
│   │   │   └── 6ea36edf4434ed322ebb35185200a5946df7ef
│   │   ├── 3c
│   │   │   ├── 013dbb92e888118e642e38d4948187cbd0f9a9
│   │   │   ├── 1294f868e4ee4a27aa59c576b2a4affbcf0750
│   │   │   └── 84be0be7c4c7e3f03d6d3e1ff325011025fce3
│   │   ├── 3d
│   │   │   ├── 9b4737e18315e19fca966ed4ce9328d44e9a58
│   │   │   └── aa7b40f20eb368a5f4b777da9ec00a9eff8d81
│   │   ├── 3e
│   │   │   └── b6837372bbdb09096d6b5749b8d3b33584161d
│   │   ├── 40
│   │   │   ├── 7db8de8b27710242321c8eaab14fffc6a7014a
│   │   │   └── c3d68096c270ef976f3db4e9eb42b05c7067bb
│   │   ├── 41
│   │   │   └── ca4109fbc88bce02666f6d8012c4f20e9c62a7
│   │   ├── 42
│   │   │   ├── 6c377fcb53358cccee64305dd42d5dcce809ef
│   │   │   └── 74c92e9755a0c640b2ae6a2f082b7af9a0cd07
│   │   ├── 43
│   │   │   ├── 11936921e110fa160d3be7dd1c4168e4172388
│   │   │   ├── 1c074cf71c69cf5b0ef326bbf5978605854bb5
│   │   │   └── 72e401ba1bf0ad8dbe2a9a971d426d3189d711
│   │   ├── 44
│   │   │   ├── b359e189550c93696c9b8f0c2c22c9cd6a9291
│   │   │   └── c91eb182b06a71897fa12e7790879af6b0a586
│   │   ├── 46
│   │   │   └── 6196c049d93cd315fec5479b147e5d4f7b997d
│   │   ├── 47
│   │   │   ├── 0eaf70992dde897084de1f886d08798e2f0278
│   │   │   └── 575db3c4ab39f80fd830cc52e46cd90111d505
│   │   ├── 48
│   │   │   ├── 582b5a4f16d297a1b3ae25a86430fd22d56c17
│   │   │   ├── 5a51b9a9fa143f9116d27cb9c4ff1893fcf9b4
│   │   │   └── d681beca5776126d384010f3df554cc841fe2d
│   │   ├── 49
│   │   │   ├── 0d32d59cf74e898aa469b38ef2501edd031245
│   │   │   ├── 298900be5d98148e01dc93aee092585cef8769
│   │   │   ├── 3706ba0f0556ae2086ea6c2700be0facaecd5f
│   │   │   ├── 4698bff2d388564345b7e8213a8edd3471044f
│   │   │   ├── b90022e4eba7aeb2ee83c5cc70f4a16ec9d9e2
│   │   │   ├── bda6942613811f4841dd1d7a64003131091fcd
│   │   │   └── eac26fc9c17618d952d572dcf2bfc0abd7753d
│   │   ├── 4a
│   │   │   └── de964404792e7696373bc4cd6f71adff9f5ef1
│   │   ├── 4b
│   │   │   ├── 324e911d6114e4bf27a53e0738a6894110d125
│   │   │   └── 6ee0b8fdd8907ec3fde5be081807a9059565d8
│   │   ├── 4c
│   │   │   └── 5b984a71d5c27c7aceb5c848d7a77c37a2d778
│   │   ├── 4d
│   │   │   └── 07ef4e7de11e784169875f41235a4822ada4ec
│   │   ├── 4e
│   │   │   └── c5d472cd7a5c93ddfd431734bc9ec29ec5d018
│   │   ├── 4f
│   │   │   └── b38a9c0d14d3c57cbc2fd70947b9cac6d55ed5
│   │   ├── 50
│   │   │   └── 71e68a6f2e43a878aa84f81376e065541c94db
│   │   ├── 51
│   │   │   ├── 13457ad78a0bcdb10089bc8b8dc5bc3eab1471
│   │   │   ├── 25fb7e430f458eb9f6c2594a621afe12156564
│   │   │   ├── a66fd516d304108310941dfcfc7728f5011a27
│   │   │   └── e370edfbdffd4231884f21682d3ee1b6a8ddcd
│   │   ├── 52
│   │   │   ├── 351c0d0cd68d60e0a512d456042c7afe8891c3
│   │   │   ├── 74138b7eb7c666dc44e63c1994132023701b3d
│   │   │   ├── 92f16853fc77497af5a2ea4c9d83f8e5f7c732
│   │   │   └── e5f78cd7c13b0cb6f57538c7386878a96ebd78
│   │   ├── 53
│   │   │   ├── 3bc958fe54eb952f75d0033175ce46cf89e8d5
│   │   │   ├── 4589ff46c12c5a39b46a5f99e3f42c8f489d08
│   │   │   ├── 803e167b201815131036213962b4240fe56955
│   │   │   └── c6cad8f160ef0a8c376516b3d84b5952a9f0ec
│   │   ├── 55
│   │   │   └── 4ae4a8348c2c642b5c77948459ec0744913da2
│   │   ├── 56
│   │   │   ├── 0dfe7396eecf549855f5d7c5cb7c271c443ffe
│   │   │   ├── 18d27c2acb204d23a59e11a65c23f38e405563
│   │   │   ├── 1b76b271bb94edbe284be17be6be2fbf2a4018
│   │   │   └── 57eada258e24b06f70677b1d2d84db65f45a03
│   │   ├── 57
│   │   │   ├── 05f5a87fb315c041096d643eddc6e2a6fbf525
│   │   │   └── 3118ba118034169de34d787e7c4eda55abdc88
│   │   ├── 58
│   │   │   ├── 6aca0c2f5607dcd134da9d779b314cef312013
│   │   │   └── a4ca4cafe909005fb2c6b940a7fd55ea5d38ac
│   │   ├── 59
│   │   │   ├── 528e125f5c278b8714f1dbb9b6495faac36b5c
│   │   │   ├── 7bfb24af36ff0ae32365e8dbc63af677341f64
│   │   │   ├── a80ae8cbac36598514b5ebd7a3323b6642dc9f
│   │   │   ├── d3465d0e3634482302652741f2b5d20c9441b9
│   │   │   └── e7f03a1ca17fff7d4e492ec202bda1b64b6b4c
│   │   ├── 5a
│   │   │   ├── 2b731ce7ff4225dbbe38586f2ff20b99d56707
│   │   │   ├── 49ea1137bd76661db726f944050c8a435df0b3
│   │   │   └── c1e8e00052ac8b0238c878bd54f4c71a8b752c
│   │   ├── 5b
│   │   │   ├── 167e8bcc1725d2cd4dd4f9103b1cd42497866f
│   │   │   ├── 34cd6160f0358742d92306ea164b91e3bd7edb
│   │   │   ├── 3ff592fd46c8736892a12864fdf3fed8775202
│   │   │   ├── 48169bfac4880838a5aa60f141effd272cc966
│   │   │   └── b315267b9f4ce2389da46b3b91466038f27bd3
│   │   ├── 5c
│   │   │   └── 82546596fac55f34fad12b97e6790e0e0d4654
│   │   ├── 5d
│   │   │   ├── 0b044bcca135bb10eac0197071d50ac40c23e8
│   │   │   ├── 5142822c967f5eea5db61091be433220349b96
│   │   │   └── eede226985b16fbe4315c2cf1032b9b57ee638
│   │   ├── 5e
│   │   │   ├── 1842f9fee80d0dbb789ac7abd8625a49d70e28
│   │   │   ├── 30b1205e065eff414ccc46f4058540df027dd8
│   │   │   ├── 8c7967f27600ad83157e96b53ff543bd7faeaa
│   │   │   └── 9cabd33aee35601fe743fb734b5a2287f960b4
│   │   ├── 5f
│   │   │   ├── 0a5590fec8ce14cf3a0d4591bc60175ca254cd
│   │   │   ├── 3045728e3e7381ae8777fa2d885116e1cb2e29
│   │   │   └── e3be808c52b088edfd55eaef0fbce9cfb74cf8
│   │   ├── 60
│   │   │   ├── 2aecdb7b115118a004df9adc40b97dc9c1e7d4
│   │   │   ├── ba96d1118059db3e3ea2b08d80fa9af15baf6a
│   │   │   ├── c09295d5eb5a8919230b7a6d9a34fd7bf10270
│   │   │   └── e57f4e99f130d244c68691e00e37269f822961
│   │   ├── 62
│   │   │   └── f11cf85f7854ac3fb4141c97ff1ca0486831ed
│   │   ├── 63
│   │   │   ├── adbc0f5678ce75df70bc0326ba90729c9df93c
│   │   │   └── d8500c386822ccf675fab3d0f6219fbc5d16d0
│   │   ├── 64
│   │   │   ├── 386a49910dd0abe9685528e0684b27ddc37b60
│   │   │   ├── 4734b36a3254c492fd5d899e90f1b1b321665b
│   │   │   └── 9bdbc1ee24d5d2f79d7d47c1a40f22ee1d81e2
│   │   ├── 65
│   │   │   ├── bcc527c4907c6baddc0bbffc5d9333a2711441
│   │   │   ├── c4fa505bb27dc1aef1f1519f48eec7d25abedc
│   │   │   └── c9b3d8852d4638ad8140a484f83560aa964c5f
│   │   ├── 66
│   │   │   ├── cfa288513b7e70830c301db94135f4a5712fde
│   │   │   └── da5a9b707ed8ea7c840fc1fab809cab67c58fe
│   │   ├── 67
│   │   │   ├── 22e8f690998f99808e6b0bfbf00df34250268e
│   │   │   ├── 3945c07b9aa8aa168689148f9d1b209fa3c926
│   │   │   ├── 448f77faed8f72ccb0f22efcab8b86ab9567f5
│   │   │   └── 6917a1fc1b3f343adc189da6329b8dd5461fd3
│   │   ├── 68
│   │   │   ├── 2109e975bd43233fd2cd1307c2a4c313a3dd75
│   │   │   └── 2cb11a5366a9d2f258b619329f859127b37aaa
│   │   ├── 69
│   │   │   ├── 1fbf356108705d3070e5614d2022c58f68c5c5
│   │   │   ├── aae55539d212b47824c9ddd09af08da3c892a3
│   │   │   ├── b344523fe65e726037780c5648317e601ab3e6
│   │   │   └── cb1383c7c2f9e15eae455a14b485105d39995f
│   │   ├── 6b
│   │   │   └── 6bdc9a020fa43586a001432b48489f2ce41bee
│   │   ├── 6c
│   │   │   └── 78e7a7d8b9dfdb85ad94f82ddc60e16dcd40fd
│   │   ├── 6d
│   │   │   ├── cedcfec883ebc6f9c76130de88332ae4daeb35
│   │   │   └── fb05142951d498eb414fed1a753996653136b6
│   │   ├── 6e
│   │   │   └── 209af1b6c7337de4494f628467946517a4695a
│   │   ├── 6f
│   │   │   ├── 9aa436464308aef67b31c39eefac122e9de996
│   │   │   └── b763cf4f6e4c7d2b05e66e8cd25d30cf1243c6
│   │   ├── 71
│   │   │   ├── 13e6f350fb2f5be45cd0e213790fa22cb185fa
│   │   │   └── 9f1aad124cae94cee849f718817829ea2f71a5
│   │   ├── 72
│   │   │   ├── 430060003b080b984462b5e9dd28c31f07fcd8
│   │   │   ├── 8be5e86253cd480ee61bf8abad2597ed0c4b74
│   │   │   └── e2e0c574ff8738d7257e0c729c10cfb47a6614
│   │   ├── 74
│   │   │   ├── 0029ac74183b1f90c3d41a19a8f4d7356546a7
│   │   │   ├── 03272b2edee8cfb75191b9b70ba9cb1ee83939
│   │   │   ├── 61b53aa6f123ac04f5d2f3f8fd16a259b4cd36
│   │   │   ├── 70a5bedd1ff487196916dd35304e2ff9523423
│   │   │   ├── d477aad003dd02cd7b0269e8238d1507f12ccd
│   │   │   ├── d98bfc3f3b23e2450ccaf127dd2114ec844e2e
│   │   │   ├── e035eaac755f70b9f82873931d34c567625623
│   │   │   └── f88838e039863b3ec8e4d9b3b956f4cb3ea292
│   │   ├── 76
│   │   │   ├── 3bf9074f9dc08b01c3ca6b7d8044e36e471fcf
│   │   │   └── a9f5cdc23b5274d9be3af744f04ba93df0bb54
│   │   ├── 77
│   │   │   └── 3ff1bc3c202b999cce2210ab1efd4bddc3f3d7
│   │   ├── 78
│   │   │   ├── ced9d926793c72e33e082b5a0726ecf2953f5e
│   │   │   ├── d411bab4b47333b5aab452e9eb7e7b10cc0af2
│   │   │   ├── db2e52123f04340aaad80dd4991622fa142f61
│   │   │   └── f3f18c3d46c6afc6861e3ebcb6b4b7afd86a91
│   │   ├── 79
│   │   │   ├── 246b2329b3880650c7f911328832ad3e26f693
│   │   │   ├── 60e3010ad9d82a93c378485172921672977837
│   │   │   ├── 789b44ec399b31284922b58b3f42a438c070b8
│   │   │   └── a867b0c0774d9cab3368e9dcdf580b14b19503
│   │   ├── 7a
│   │   │   ├── 0f16978eb49679a54a276d8f3785c0b560dcc8
│   │   │   ├── 6d71da6f70cb487412a9556cbcfaf0d0dc4ee1
│   │   │   ├── b741bafb45fff41e94a45953f009d32f4936a1
│   │   │   ├── bc5273f8cd75571e8adfda8c9d88ecc061b031
│   │   │   └── c657516dc154be6d60f088aca47c0a5b5cf7f9
│   │   ├── 7b
│   │   │   ├── 517912a544ea78f51f9f8130185cdc8c9f9603
│   │   │   └── cc522aa8a0d76b43ab2761c2611ac8000de747
│   │   ├── 7c
│   │   │   └── 63bfcddd03028add00c489c165ef8f3ad60942
│   │   ├── 7d
│   │   │   ├── 245d23ba2c02882390c81cf86ecc7f6cdb6b53
│   │   │   ├── 446abb2344f8f9ad09a08d8c191bc182d58488
│   │   │   └── 7ff90d2e2710425ba42e4662387db16127d8b4
│   │   ├── 7f
│   │   │   ├── b0d9075159b64d6d16791bdd2e31ebc33c86e8
│   │   │   └── d90a128d60362756738e1387d5bcf50572f7d3
│   │   ├── 80
│   │   │   ├── 4226538e570654d6eab344ef61792049decc6d
│   │   │   ├── 510e84f00d0e8c8d406e8ed6eca7e025a04fec
│   │   │   ├── 728ab5562791fe7782fb4ef9997b34653f76a6
│   │   │   └── c7bb06296124bb5a4cec013ff73c7a98882bf2
│   │   ├── 81
│   │   │   ├── 43c5e0282ae1334924a793a08c186f5d8940b4
│   │   │   ├── 613533d83b4740332985bd2492cbb0c5a392fe
│   │   │   └── 9e57c776567d334a9dce08602c0d40135542db
│   │   ├── 82
│   │   │   ├── 8ff7d51d420ea94a2596f7c469a7947f478d83
│   │   │   ├── 90396fcd74854f7151ef9b00bfe627e12ae7ad
│   │   │   └── bd3a89724940b6dfb51681cc196c6422ab591d
│   │   ├── 83
│   │   │   ├── 12b8308741965436947da20eccd40ea333bae6
│   │   │   ├── 3d5dcccb080a9565760d3ce626fda91791d650
│   │   │   └── 49607bd45b6102cb43b5d71f802e1f9129aefa
│   │   ├── 84
│   │   │   ├── 6e739e95b2312b2fa862f09d792a960370785f
│   │   │   └── a19cb805e09b95bba9561d741fca88ce7675d1
│   │   ├── 85
│   │   │   └── 355b160f7b68c395e6c976f37e00139bc66b68
│   │   ├── 86
│   │   │   └── da96a710b50b6010ec1e03e23d11646aa7d13b
│   │   ├── 87
│   │   │   ├── 10d39f8a3acca6e383f2575f00982daf44764d
│   │   │   ├── 55336627f91ce7eb1be33dfe0c6b57cba44463
│   │   │   ├── b74fc5ec49b25292f7c270b0543af0092b7ebc
│   │   │   └── df297c3827fe2b880b607d3de1a90ea679b684
│   │   ├── 88
│   │   │   └── 3c9dcee1e8646640c1f9a5ee0eab2376b8b933
│   │   ├── 89
│   │   │   ├── 2c6a227e56ed2ea61fe44e17eb43a8a80c7292
│   │   │   └── 2fda906d2cb4287bbda25235c683f4a1480f5b
│   │   ├── 8a
│   │   │   └── a936c95ed04c30f29233c71c007cd5198059d5
│   │   ├── 8b
│   │   │   └── 5a5a6df1d74d0e85f7db684e36bb63c4812a44
│   │   ├── 8c
│   │   │   ├── 1f4df0c9e4b08a67d88de9878d43cc28df9293
│   │   │   ├── a113cbcc54adc36e0682c36f8ffa1d17e74326
│   │   │   ├── a1766849e1cbc9d8d6316ec629ed418f2fb474
│   │   │   └── ba09da87e0ca7a9d1afb37d337e87e4873ba83
│   │   ├── 8d
│   │   │   ├── 4398f804679548f060adb2607e143ed20d5d3b
│   │   │   ├── 43e3fca578e3abdf271833504adecb45aa82aa
│   │   │   ├── 62b883cfef7d545e113669893eb928d0bdf061
│   │   │   └── adfb9c5ddd69ddf1c5d6424e44044c8c116802
│   │   ├── 8e
│   │   │   └── 64706dccd4f073c36b8f9e94c4e1e624fb6f2b
│   │   ├── 8f
│   │   │   └── 224353323b2a625c78cdd14f94bdff4f634219
│   │   ├── 90
│   │   │   ├── 22027cc341b0605d3defa3d3ac36babed10c78
│   │   │   ├── 73a74efd8c42e5b7a158346d8da309891993c8
│   │   │   └── cbedf66501bcc9319f4ce2e52098ca4d307407
│   │   ├── 92
│   │   │   ├── 008d8bd609f2c753657bf8c0aa17f052a1822b
│   │   │   ├── 1b776edef910cbed9134e01ce96cd5e88cb8f7
│   │   │   ├── 60eb52bd287f234973c4194765f244a7d151c5
│   │   │   └── b950ff0928696ea62e6c28e569014d80019dfa
│   │   ├── 93
│   │   │   ├── ae73265c878c05bbabd4f5d9f15cf0f2e17b31
│   │   │   └── f0d59681f15b421b7abfed3a13e26092072d0b
│   │   ├── 94
│   │   │   └── 9046b2d91d37fe50647a1119a8da8d0e1408ad
│   │   ├── 95
│   │   │   ├── 02e4718da9bc82b4e9269b5fd1d516255633a8
│   │   │   ├── 30f88572b76e5719f2ed1cbb5538dffae154b3
│   │   │   └── 747c8a27cd37a2d22e701cd114422a427d3c4e
│   │   ├── 96
│   │   │   ├── 64e829e1477b2b7b220146cfc3df29b3a2371e
│   │   │   ├── 66f1ca6954bd3a00edeaf836b67ca3e93d08ad
│   │   │   └── dbff3317b2852577421be69367cc1089a95d73
│   │   ├── 97
│   │   │   ├── 7aee1c8a29501db357163390061a9baec93b11
│   │   │   └── da8799d62385d21c5e824296f02cc76015d3be
│   │   ├── 98
│   │   │   ├── 2f6996a92cddc6092f6a2fc8294a8ba18411e3
│   │   │   ├── fce758e3c342167ab8a9ea0abca08ca6112db9
│   │   │   ├── fdb07b6330bee6bb80876df3fb2ac280479456
│   │   │   └── fe77de173f7c451f6bb0a33a0f06db2c6faf6e
│   │   ├── 99
│   │   │   └── e9be22317d3926ab11cc4ee564195f8d23ac37
│   │   ├── 9a
│   │   │   ├── 6131d284e066d9614d3fcb830f3d71fae5000b
│   │   │   ├── b9a5c8649e19ebcfad808c6bc335750ea8f73b
│   │   │   └── d008463ec4e87124b1afaa7f43f2a0126b0cb9
│   │   ├── 9b
│   │   │   └── e9b6c2bb5aaf663cd4426ebb2369d510483e09
│   │   ├── 9c
│   │   │   ├── 21f434591a6324f13a3f65062f779006305085
│   │   │   ├── 8fa89d847b640878572960313451a79fa27949
│   │   │   ├── b3bc260a845c2d1de71006a10fd8c6aed0e75a
│   │   │   └── d094f1227b1fbfcc2bc794e06649d1990cf862
│   │   ├── 9d
│   │   │   ├── 00796f5366505f2782cfd4ac4dd2c40563cc14
│   │   │   ├── 767d24c2e819b819556937837386c405ba8c5f
│   │   │   └── f65be810e24f476d54020fe51962cee28138a9
│   │   ├── 9e
│   │   │   ├── 1a940064b0066815727bb53a6d4f99da746c8f
│   │   │   ├── 78009dc4179845485edb7e646b55740c0d2785
│   │   │   └── ca4d95634172ba1d8cca146a775b35b4e3a273
│   │   ├── 9f
│   │   │   ├── c46dd680af518caa7b22522763d7d94b182f3b
│   │   │   └── ed48d42a030f68ef4fb8c516e3ae009fbdd8e4
│   │   ├── a0
│   │   │   ├── 17bf17a295aed14e602b0eeac63eadcab48b00
│   │   │   ├── 4a959db9623f7aa67333f1b74d5a9e2f8a9fa9
│   │   │   ├── 8821a60bbbc54770d2e0b889d0ca9e4b5cc6b2
│   │   │   ├── a804d6d004d494ce07abe3fd37f31dc5b273bf
│   │   │   ├── aa22c70b34088cf1cf4a02d6cc87463b19ca14
│   │   │   ├── e544e6cf5bcfe1585aea57d9b80d4bea5d54ea
│   │   │   └── e6b44e23a1c339fafa7ee365cf0d91a7995a45
│   │   ├── a1
│   │   │   ├── 191be6a9d54a85665544125e267e0a1a9f23cc
│   │   │   ├── 3da6b499170f9f55c22ece1c49ba7052b61120
│   │   │   ├── bad28f5b23799a698a9b9c6ea229e56460ed28
│   │   │   └── c9a71ff3863499447ad47125b104d6b076b9f7
│   │   ├── a2
│   │   │   ├── 3e964b138c8174068cd7182c07c9c7e285f497
│   │   │   ├── 421c88523dece1390c1910e503cd41336882ca
│   │   │   ├── 59e1820bb2b7ccbedf07667645994c8bd3c31e
│   │   │   └── a3b315c2b4060170052e65fc0056c861067b3c
│   │   ├── a4
│   │   │   ├── 4ff9b54f1304c69b6d518fb73c61f6ebb33a5c
│   │   │   └── b654c3c4bf48f0dd3c1c47faec523deec597cf
│   │   ├── a5
│   │   │   ├── 1c7eac4d2c4c5d30fe18ce8a8613105f95ed27
│   │   │   ├── 6cb7b6298258b1b1e1f5bec15b578f31be4668
│   │   │   ├── 7faa95423a655c5eaa95ba7edf3553ae54bb8a
│   │   │   ├── 9b408b721bf2f0b819e0054e283ed367b7c3cd
│   │   │   └── bceeb4ab39da222b93fbe982171db4dc673743
│   │   ├── a6
│   │   │   └── 7e1c394ace98c4983fc44ecca0a7696cc76033
│   │   ├── a7
│   │   │   └── 69da76215efce0fe9796d043b261bf6bbe19b6
│   │   ├── a8
│   │   │   ├── 2a005b70876d43b9ffa45166aea3660555a183
│   │   │   ├── 41f4745c0a5cc48eecb519d2a07aac3854cae3
│   │   │   ├── 85215d42463e7ccb9a8bb9c74e802f6e938c51
│   │   │   ├── c2c2f437ada63517d42b47f00a3ecd51bacc31
│   │   │   └── e0cba6e856c0766ab8a713c160abb1fbc872ee
│   │   ├── a9
│   │   │   ├── 1807247f03b8ef828325d0b808d8d4c42a50b7
│   │   │   ├── 18b585af929473d16f4ebe3ddec724e614dd8e
│   │   │   └── 305c47111c245d7d1050bae8069f09e297d80d
│   │   ├── aa
│   │   │   ├── 95b29c6c2d7e55b6bbb8aa9b2b16d9d10e3fd9
│   │   │   └── ea8c9775d118d57815e66f3854b92b08089ef3
│   │   ├── ab
│   │   │   ├── 15b00cd587ff89c622b67fc687b6de04d78ec9
│   │   │   ├── 422b94a4fbe76275d31c0bf7ef334768b39cae
│   │   │   ├── 7906a6077a8b43a72813f5e423c7e334d02b17
│   │   │   └── 7aaf033bd7351e46b8236328ef471c6d370ff4
│   │   ├── ac
│   │   │   ├── abb13a00876a45fac9d71bd7df59aca2aa712b
│   │   │   ├── cebdae610d27acd359b0cc491432c3cbac7193
│   │   │   ├── d771c96604814753d88276340159cf8a7cadb4
│   │   │   └── fd87f4fce7ffa74b5f02a1e2f72ac282646255
│   │   ├── ad
│   │   │   ├── 7e0ddff0d0ef6760193170dbbd88b7776ec663
│   │   │   ├── 8b9f3350ab037bba6b0cabb987ddc0a427a3d4
│   │   │   ├── 97b14ce53bcc7d0b7cec72a7cd08f0106b4e30
│   │   │   ├── 9debcdabca56b475e24cd4de0f10c3b0d3cfe7
│   │   │   └── dfa206fe0d46728488e38abc036fa445a9dd91
│   │   ├── ae
│   │   │   ├── 30fb0b28dd2f62aca26f48f03764504c7ffe00
│   │   │   └── aae9c10084bbfa5c328ea5a0b484c08e2b1302
│   │   ├── af
│   │   │   ├── 2b5ed3557e91ebc15c04a2efd2b4f30f4fb7ce
│   │   │   ├── 51b8549d1c2ba84f5bc2a0a73e2aaa0405bf23
│   │   │   ├── 6d5ea798f4f2bd9920037c2c984604801783be
│   │   │   ├── bc052dd5222e426fc64fe7338b4a96a31848c3
│   │   │   ├── cef0f38dc1884eba48f94ad9971a2ba7a3fc63
│   │   │   ├── d0bc292e36a6b516c6d4eca170cfe131b015f7
│   │   │   └── e15f5545a81fffca0ea7d64fb1ef662e9819fb
│   │   ├── b0
│   │   │   ├── 0641cdf871e7113e9915285bb3c9184692c130
│   │   │   └── 87410833089b211942ec85f41f70c9d0572279
│   │   ├── b1
│   │   │   ├── 124271928559645fb345934eff2d0eb3147fca
│   │   │   ├── baa3314821a9806674d8a87f6f370d7f4cc3dd
│   │   │   ├── e8e9ce99f7d7b8c5d1e60fd4d1a8a3694b9b31
│   │   │   └── f24f6304bcf93b1fd02487194a61f8fef33705
│   │   ├── b2
│   │   │   ├── 8e12719c1a7a610c2bb736be287f277f97e8a5
│   │   │   └── f14e2dc0139212fcabd9eba26262691dc0a212
│   │   ├── b3
│   │   │   ├── 26007548a345f78f1f952b2cff5c50bb69c2e3
│   │   │   ├── 49a52a166900747f98f68c63b90f869fe74ac1
│   │   │   ├── 97c3ec3617ae3062827a965ba617ee9ec5c70a
│   │   │   └── e5db1bbab3bdbd4fd910539b4fa3e0786cca7d
│   │   ├── b4
│   │   │   └── 48d292008edd6b07af2ac902e9971de24bc433
│   │   ├── b5
│   │   │   ├── 0d54e67e1330cc509c9db34be26db61699c14b
│   │   │   ├── 3803f7fb20b4aa76e191457f38eaa148431a48
│   │   │   ├── 59b43222f7462f56016edeac57359713785b4c
│   │   │   ├── 66f33b98f828e695e1e7852e7c22e0b43840cb
│   │   │   ├── a316cfef092934530415535e86a1d7ba0c837f
│   │   │   └── a374805cd0d642d416e34ac19f76dc4284b55f
│   │   ├── b6
│   │   │   └── 1fc186e074e85c8670ddf45b3cc1d279c0b096
│   │   ├── b7
│   │   │   ├── 1e6635cdb15c3f88c060d24d02643c424cc4d4
│   │   │   ├── 37b80836ddda6b783ab0c0002cfbc9d4499dc9
│   │   │   ├── b97924b7b06d0204e584807749e2cdf4bf4613
│   │   │   └── d32c45398b3b97698a8093fbe55f6a63a493e9
│   │   ├── b8
│   │   │   ├── 6ba001d8f1241573e953628cfdeebe339f0061
│   │   │   ├── cb0b15a1ffe2647b3c81f7c89f62188127f577
│   │   │   └── e84d3b4c352cd981f127ab504f62e4fc8f5ca2
│   │   ├── b9
│   │   │   ├── 21d9e8e5d537e3f9ad3a90c82ba571e3379e70
│   │   │   ├── 2e90b2233f3ee111ba353dc1a6246106f53bdf
│   │   │   └── 75d72b3dea0e8eb0dbc0326b41345466ac3abc
│   │   ├── ba
│   │   │   ├── 3ba8073c63f6c5058604f25c852e4c2edf26c4
│   │   │   ├── 696bdb5b7e30a26b4dc7fb2d4e76defa63a5c1
│   │   │   ├── c8362818304278f9596caccce13cfa079e8024
│   │   │   ├── d093d8f698dbf93a842af172b66cd89731747b
│   │   │   └── d55866819706d613012fba8bf273648de46982
│   │   ├── bb
│   │   │   └── 3485d3e198d39022699d1ff83ee4cd77b2f1c9
│   │   ├── bd
│   │   │   └── 57e7728ba26f3978e48da414212531a19f6037
│   │   ├── be
│   │   │   ├── 29c54154039d52c72e1b42f7ab74e95cbc13da
│   │   │   ├── eafeae5eb3b227d504bf43e5ef1c8555e7daa6
│   │   │   └── ef6d2f61e989befdbb51ce6b8a2977d9d5d36d
│   │   ├── bf
│   │   │   ├── 17f51380138761954ef4b47adbbc0440994c4b
│   │   │   ├── 29dddcfce94dcf3abb2ec8b9468ce8ffe7eff6
│   │   │   ├── 6d8a3ad6047e7bf36b2a6fd5ce6b74f67307df
│   │   │   ├── 879f60b34947b9edd916162c6065d466212f13
│   │   │   ├── edb9cec58441bf9ea06cfe6a1668cda944d32c
│   │   │   └── fb357a7122523ec94045523758c4b825b448ef
│   │   ├── c0
│   │   │   ├── 26bca3204296f2c67d1c2fcba55bc7b33a05d1
│   │   │   ├── 73a06ef658bc5531723c351acf0e80bda6f422
│   │   │   └── cb6ee29ae7971e0da4e7c565cdf19142a647e9
│   │   ├── c1
│   │   │   ├── 0ae9cd43fd6b5907c1d130a865ab4837aa8c49
│   │   │   ├── 1e8ac2d260badc3c18d17b467997b6360192ba
│   │   │   ├── 2a3e76c42cbdfee7d7b393d0435daf226eef49
│   │   │   └── c09b8403f5bf24c6dbee2cbd59ce309a9b90c0
│   │   ├── c3
│   │   │   ├── 3cc70010c2bc9618e9359a3c2e3c8bfa25751a
│   │   │   └── 3fed4c80cb4eb5123b5da0e1fcc9c091ac9203
│   │   ├── c4
│   │   │   └── d85c46f61eca8ecdaf1bcd227498a9e184fb52
│   │   ├── c5
│   │   │   ├── 4005a16c310babe1329406b831fef26e15887b
│   │   │   └── 42427e07b6a0985d83d9e09df6d6e7332ef179
│   │   ├── c6
│   │   │   ├── 557fc0e496e6d57f5da7f0103eb2f9a82dcaa1
│   │   │   └── fbf9da3d980866472ccf948970becfc1ddc055
│   │   ├── c7
│   │   │   ├── 3e2e8ffa9d266478950cbf5055b90e1024a69f
│   │   │   ├── b55fa4d4a8d6ccb54522e590d7d9002e04533c
│   │   │   └── fca2f4e27cea449502c9ea6cb80bff78c8dfd6
│   │   ├── c8
│   │   │   ├── 46a3f93046443990f229d779e66cd9dc15a879
│   │   │   ├── 6a79ef008996340a909c537dc118ca37100341
│   │   │   └── c3a0a1bf18021083f5e1c2287628b41cc88def
│   │   ├── c9
│   │   │   └── 967884f4f03d5cfb8f9601092bc86456e2079e
│   │   ├── ca
│   │   │   ├── 1a6cfc1d17e11d6958f4ab5e49efe26d87a170
│   │   │   ├── 249e46f40be074b35cc1faadc6f4489167ced0
│   │   │   └── cfa932826191077184b164c5e9feef3c407477
│   │   ├── cb
│   │   │   ├── 29ba663ba81c385656e236b6e13d4f4734e678
│   │   │   ├── 633a938abd5b67d01764b89eee357f175285e5
│   │   │   └── e3288b2d22ce741d5535fab8b4069fa78df723
│   │   ├── cc
│   │   │   ├── 26ffbaad0c22d3f508a8cfce050826b905fe5f
│   │   │   ├── 35d858c7b9280e84767ed61f90ca0dba4a3072
│   │   │   └── 39ef846e2dd55d576ab0275079194e79dbad16
│   │   ├── cd
│   │   │   └── 5ff5a9544b75482d32e71d053eda254dcb5dc8
│   │   ├── ce
│   │   │   └── bfc2aaf25851c545a74ae192bc2446d4b1857a
│   │   ├── d0
│   │   │   ├── b4bd30559cf942cd5585c99d02a296ab9a6c69
│   │   │   └── c378fb70ee4a8881e4a5c42c28b2b5f19fc1e9
│   │   ├── d1
│   │   │   └── 38626d31c755a270e1e3df032bfeea3b0c3d85
│   │   ├── d3
│   │   │   ├── 43870debe98692f794ea1d67bad047a9253c48
│   │   │   ├── 54a1dccabcd26f052f8d6c99e88d27ed076206
│   │   │   ├── 7d566781ed6dea521fe6241fcaac2207cc811b
│   │   │   └── b087112b73283b967a8a81cf2b607eb0e332c7
│   │   ├── d4
│   │   │   └── 2457e24e0b83ce163c8b855d66bb4819b75d43
│   │   ├── d5
│   │   │   ├── 4967cb70bfadfff0476509188e68834cc4e464
│   │   │   └── 897a2637172c31efa80d5058a818db3064a3ba
│   │   ├── d6
│   │   │   ├── 2d4a447bdbe1359bc9618b152381f0eaac538d
│   │   │   ├── 30d7538daafe3b0bcd68289a0fc8a444344c3c
│   │   │   ├── 6c0ea4c10e1795b6bf6fa7434c5a872a0201c7
│   │   │   └── 90b31197821734e4b74a70fc1af5b14ddd2584
│   │   ├── d8
│   │   │   └── 9b951eb7c16636b55498cc0e81b65efccabe36
│   │   ├── d9
│   │   │   ├── 0828f4568551f78ef979165c0ecdd61b45d114
│   │   │   ├── 16360f8d52750ce05ef8a3df714f94cf199783
│   │   │   └── d9bcdb1d98c1ce53463fee15ea0e67f208ede4
│   │   ├── da
│   │   │   ├── 2d6693a4a70cb18349171d17b7dcaebbf07982
│   │   │   └── db23d3d25c7f6984bd66d7e4df6c0e426f60fc
│   │   ├── db
│   │   │   └── 101425abb9e9c89caf9b1579fa07fa2f706a52
│   │   ├── dc
│   │   │   ├── 0a5dad02314e6fe772b98c04fba8b49957a8f0
│   │   │   ├── 4c344de2831e8554fcb37a0c31f2b092c988f0
│   │   │   ├── 58d8e24a13615f1d718b041fcfc7dce8a0990e
│   │   │   ├── 60db126771910ff7a0ad12a8d239c32d980e01
│   │   │   └── d119035cbd438f75270d3f0b7f386ba8d7d9e5
│   │   ├── de
│   │   │   └── 3fab6e7e7c9f2a26903c1ed50eb728c61add3f
│   │   ├── df
│   │   │   ├── 47a7a530a62ef7103ec64419daa8bafcfbe599
│   │   │   ├── 91c8d2baba7284126840e31bc88f97b9a67def
│   │   │   └── 91f19de47afc010e8b5e0a6252d0c1668127cf
│   │   ├── e0
│   │   │   ├── 3c2166ce1b49bc50f21118741a9543f56ef6d6
│   │   │   └── e5b8efcd7be56e8aa742f8c52a4024e8ff02a8
│   │   ├── e1
│   │   │   ├── 83940d9e478e4c2a1b57f14924bbc2970b64dc
│   │   │   └── 9fe86ca3cde5673e543ba72e5364a3138b1bb0
│   │   ├── e2
│   │   │   └── 8b09d9156c3b633d1cb4cdbce3fb2fb9cc9916
│   │   ├── e3
│   │   │   └── 55dfa0ce79918cd7650d75b4d5d02bc6ac1f75
│   │   ├── e4
│   │   │   ├── 1eabf0d746fd0d301a0b441c7656000ed154a0
│   │   │   ├── 3c55e22a0214950cd93156285cb929cd95d85d
│   │   │   └── 43b8ef5e5c1fa7a5481e91b441e17a9b2a644e
│   │   ├── e5
│   │   │   ├── 002e082e018f09f4c647b02207b1e43e544727
│   │   │   ├── 47e8213b057bc0bca372d5b603eb3007438199
│   │   │   ├── 69de258bf9b6f65ce84d3a998ebc1e83508f47
│   │   │   ├── 6a46ca81e4911d0005fd6a5334ab605d710ad4
│   │   │   ├── 8272598223dd0e3fee7ca16de19c2ca8ccd197
│   │   │   └── e40058c703feb5adcef57c2d05a1d949382633
│   │   ├── e6
│   │   │   ├── 9de29bb2d1d6434b8b29ae775ad8c2e48c5391
│   │   │   └── fef0e9041f81f8709efdb7f971093bd8acdf5f
│   │   ├── e7
│   │   │   ├── f4f6f9db679d644cc9d08f2ef8f68c7570bd45
│   │   │   ├── f921d50386a8e6c7491c80e62ac3c8daf60037
│   │   │   └── fe7b028625b074f17d60db27cd2f21ee83613b
│   │   ├── e8
│   │   │   ├── 3e1eff4ca5c668dce82f2ae558c6e3147a0aa2
│   │   │   ├── 76b05fb864af7bde7f932ffd8d278c744255cc
│   │   │   ├── 9d62e544778b3c5d5b7c546eba24a6e0f129a4
│   │   │   └── c9aa45410aea16ba00792ca9ff014ffd0ccc34
│   │   ├── e9
│   │   │   ├── 51eaf1cc9e54f1251e24dca86e719645b2d2a4
│   │   │   ├── 88f6bf25fb5a4abd959f9c43b7256d17e50114
│   │   │   └── feef93fce0e832eae288caa3c869a5a65e98ff
│   │   ├── ea
│   │   │   ├── 1b016089599e11a9f5ff14b86e2a8d5fbc657c
│   │   │   ├── 943d708306419ab7cda69ea1b172bbe0bf0d4b
│   │   │   ├── 947da3b7cf5b54d0b27bca9ad24e07db686109
│   │   │   ├── b01c17392741577378a618757066cbf300a4e2
│   │   │   ├── cf89ff75b636fdabc8ee8e88315207ecaad0d3
│   │   │   └── e41a0720ac1b8adc2ee5fa1d1536bb82b2af28
│   │   ├── eb
│   │   │   ├── 63afb72a418abec5d6f06097b1bcfdc2833fb0
│   │   │   └── 9c74d9f059aa89f6f19b3858361a499c5fb2b9
│   │   ├── ec
│   │   │   ├── 53c0bf5be8b8730e9b6c33aa54cda946764948
│   │   │   └── 5b243a82e0ec855c2b49ff0f5f38e2d1112ba1
│   │   ├── ed
│   │   │   ├── 0840fc9cc02fdce315067df4e8d8510c1769b0
│   │   │   └── 32e0029f63e5e2c3de7b4b5739f84623bf1214
│   │   ├── ee
│   │   │   ├── 0ca3c65ba41e8a6694b373b77528c2040801fc
│   │   │   ├── 2c9d4158a2fda50b400b25c291cca7896f8ba9
│   │   │   ├── 49f926e640026e20c77d1c1dd56e68dcf81e59
│   │   │   └── fa468f98545a6d9d4e839f2ff9b535e8b7742c
│   │   ├── ef
│   │   │   ├── 36756f7b2a409192246aa07992ce249523236c
│   │   │   ├── 4de0937f87fd32937d9235b87aa90ded414232
│   │   │   ├── 702b57940c221b4523253c40045db1441094be
│   │   │   └── 76b509587a4ae6564c3100d9f8856a20925841
│   │   ├── f0
│   │   │   └── d0806f3d7d4bf4eeb8af790a7439a1746fd847
│   │   ├── f1
│   │   │   ├── 00318cb4d76cd50a69372436f9e6afe7e99932
│   │   │   ├── 2fa073537def3f8e213237d37d0878d29495aa
│   │   │   ├── 56faa7c5965f84b68ac266f6cda588ef04b6ac
│   │   │   └── da46422256b052a35b048f2b7164fdedc23447
│   │   ├── f2
│   │   │   ├── 1acc446207d06704fc427ecf07f2a415c923b4
│   │   │   ├── 7a451373165665d3c96522aa99e4700068fa72
│   │   │   └── f8cc68622bac3953add84a1ed13dfce4bdf0ea
│   │   ├── f3
│   │   │   └── bab1404d8c634984b79f02c479e75817409136
│   │   ├── f4
│   │   │   ├── 5fb3272d03869bd305289a5b6428fae6ec383e
│   │   │   ├── 7f9135335a681831d5fdce82e84147d7e92fba
│   │   │   ├── c84131a4163ace2e570b9a729b7a282e1f71e9
│   │   │   └── cc837c649868a0e8ba2b1b00db85f3a7628dd8
│   │   ├── f5
│   │   │   ├── 26edae0749ab66d93c41dca7086fe29ff07052
│   │   │   ├── a11b2e3e7c1bddcd60ece5d31c6c5b64ac755a
│   │   │   ├── a7e7acf19a5de400f8ad0c382f0506c8b8985c
│   │   │   ├── d28236ac1645809d50f16e8986cc8616105ef9
│   │   │   └── d6357393472a64a995c0a30535a2079b7d1d3b
│   │   ├── f6
│   │   │   ├── 3ab64a7c334d2b0919c306c33c0527da7924eb
│   │   │   └── cedcba89d4f1c1ac8dfe080d2227b73864ae41
│   │   ├── f7
│   │   │   ├── 15248cc75782768b916c61927e47256363854f
│   │   │   ├── 3cdb0c37decd1fd3696e7448c9d0ffba6bc6c1
│   │   │   └── deba83880f7eb8d4da57ae3f5705e8cb41f970
│   │   ├── f8
│   │   │   ├── 14e58f14e734d87b7f7d398d9cd80c216fd281
│   │   │   └── be8c24adf665e7843b52e3f271ddb9b5e924ac
│   │   ├── f9
│   │   │   ├── d78dafffa28663ccabb25264bc289628bcf050
│   │   │   └── fe2b4fd9f4935575b7f840cb34ced2c9fa8d1b
│   │   ├── fa
│   │   │   ├── 409bf2304c6012f89b2710333ae4e682da159a
│   │   │   ├── 95fd8fe39f2156448b304380a5df9a452be140
│   │   │   └── b0a9ca03ba716c073ba3c9397a3203c3d8d074
│   │   ├── fb
│   │   │   ├── 2d455bcd86c8b7fa9f118b83da065b96d04149
│   │   │   ├── 82c5c480a601d9a034e3bcec9c1569ece5f003
│   │   │   └── 92f6fd9a34f61dceb7d3c3a6280509e3c1aca5
│   │   ├── fc
│   │   │   └── d91f10e7b7eee633f89d9dc47d6ce23e3c332a
│   │   ├── fd
│   │   │   └── 8ab3501529438803cf3eabd1576947fbc8aacc
│   │   ├── fe
│   │   │   └── cf4611623d874c2bbe4ed13f236545f8faabc2
│   │   └── ff
│   │       ├── 18fa88e4cd9dfbb601b5da91ce8bcc7c8e156a
│   │       ├── 7f685b2f8222aadc85e531780ad2f542a33d43
│   │       └── f574dba4e3fd536dd354ec588f5b0809e7a54d
│   └── refs
│       ├── heads
│       │   └── master
│       └── remotes
│           └── origin
│               └── master
├── .gitignore
├── app
│   ├── (main)
│   │   ├── layout.jsx
│   │   ├── page.jsx
│   │   ├── produtos
│   │   │   ├── page.jsx
│   │   │   ├── produtos.css
│   │   │   └── ProdutosContent.jsx
│   │   └── sobre-nos
│   │       ├── page.jsx
│   │       └── SobreNosContent.jsx
│   ├── admin
│   │   └── produtos
│   │       └── page.jsx
│   ├── globals.css
│   ├── layout.jsx
│   └── linktree
│       ├── layout.jsx
│       ├── linktree.css
│       └── page.jsx
├── components
│   ├── BrandsCarousel.css
│   ├── BrandsCarousel.jsx
│   ├── Carrossel.jsx
│   ├── CarrosselPromocoes.jsx
│   ├── FloatingWhatsApp.css
│   ├── FloatingWhatsApp.jsx
│   ├── Footer.jsx
│   ├── GerenciadorPrioridades.jsx
│   ├── Header.css
│   ├── Header.jsx
│   ├── Icons.jsx
│   ├── ProductCard.jsx
│   └── WhatsAppButton.jsx
├── generate_structure.py
├── lib
│   ├── produtosData.js
│   ├── produtosStorage.js
│   ├── produtosUtils.js
│   ├── publicPath.js
│   └── whatsappReducer.js
├── next-env.d.ts
├── next.config.js
├── package-lock.json
├── package.json
├── public
│   ├── avatar-whatsapp.jpg
│   ├── bg-chat-tile-dark.png
│   ├── bg-chat-tile-light.png
│   ├── fachada.jpg
│   ├── Fotos
│   │   ├── foto (1).jpg
│   │   ├── foto (10).jpg
│   │   ├── foto (11).jpg
│   │   ├── foto (13).jpg
│   │   ├── foto (15).jpg
│   │   ├── foto (17).jpg
│   │   ├── foto (19).jpg
│   │   ├── foto (2).jpg
│   │   ├── foto (20).jpg
│   │   ├── foto (22).jpg
│   │   ├── foto (25).jpg
│   │   ├── foto (26).jpg
│   │   ├── foto (3).jpg
│   │   ├── foto (33).jpg
│   │   ├── foto (34).jpg
│   │   ├── foto (35).jpg
│   │   ├── foto (36).jpg
│   │   ├── foto (38).jpg
│   │   ├── foto (40).jpg
│   │   ├── foto (41).jpg
│   │   ├── foto (42).jpg
│   │   ├── foto (44).jpg
│   │   ├── foto (46).jpg
│   │   ├── foto (48).jpg
│   │   ├── foto (49).jpg
│   │   ├── foto (5).jpg
│   │   ├── foto (51).jpg
│   │   ├── foto (53).jpg
│   │   ├── foto (55).jpg
│   │   ├── foto (56).jpg
│   │   ├── foto (58).jpg
│   │   ├── foto (59).jpg
│   │   ├── foto (6).jpg
│   │   ├── foto (60).jpg
│   │   ├── foto (61).jpg
│   │   ├── foto (62).jpg
│   │   ├── foto (63).jpg
│   │   ├── foto (64).jpg
│   │   ├── foto (65).jpg
│   │   ├── foto (66).jpg
│   │   ├── foto (67).jpg
│   │   ├── foto (69).jpg
│   │   ├── foto (7).jpg
│   │   ├── foto (71).jpg
│   │   ├── foto (73).jpg
│   │   ├── foto (74).jpg
│   │   ├── foto (75).jpg
│   │   ├── foto (76).jpg
│   │   ├── foto (77).jpg
│   │   ├── foto (79).jpg
│   │   ├── foto (80).jpg
│   │   ├── foto (82).jpg
│   │   ├── foto (83).jpg
│   │   ├── foto (84).jpg
│   │   ├── foto (86).jpg
│   │   ├── foto (87).jpg
│   │   ├── foto (88).jpg
│   │   ├── foto (89).jpg
│   │   ├── foto (9).jpg
│   │   ├── foto (90).jpg
│   │   ├── foto (91).jpg
│   │   ├── foto (92).jpg
│   │   └── foto (94).jpg
│   ├── ico
│   │   ├── facebook.svg
│   │   ├── google-maps.svg
│   │   ├── instagram.svg
│   │   ├── internet.svg
│   │   ├── phone-receiver.svg
│   │   ├── star-struck.svg
│   │   ├── stopwatch-time.svg
│   │   ├── tiktok.svg
│   │   └── whatsapp.svg
│   ├── logo roda pe.png
│   ├── logo.svg
│   ├── Produtos
│   │   ├── Besser
│   │   │   ├── Besser_Natural_Cães_Adultos.png
│   │   │   ├── Besser_Natural_Cães_Adultos_de_Raças_Pequenas_e_Médias.png
│   │   │   ├── Besser_Natural_Cães_Filhotes.png
│   │   │   └── Besser_Natural_Gatos_Filhotes.png
│   │   ├── Bionatural
│   │   │   ├── Bionatural_Adultos_RAÇAS MÉDIAS E GRANDES_Frango.png
│   │   │   ├── Bionatural_Adultos_RAÇAS PEQUENAS_Cordeiro.png
│   │   │   ├── Bionatural_Adultos_RAÇAS PEQUENAS_Frango.png
│   │   │   ├── Bionatural_Adultos_salmao.png
│   │   │   ├── Bionatural_Castrados_Frango.png
│   │   │   ├── Bionatural_Castrados_Salmao.png
│   │   │   ├── Bionatural_Junior_RAÇAS PEQUENAS_Frango.png
│   │   │   ├── Bionatural_RAÇAS MÉDIAS E GRANDES_Cordeiro.png
│   │   │   └── Bionatural_Senior_RAÇAS PEQUENAS_Frango.png
│   │   ├── Finotrato
│   │   │   ├── Finotrato_Bifinho_Carne_-_Cães.png
│   │   │   ├── Finotrato_Bifinho_Frango_-_Cães.png
│   │   │   ├── Finotrato_Bio-Litter.png
│   │   │   ├── Finotrato_Cat_Nuggets_Sabor_Carne_-_Gatos_Adultos.png
│   │   │   ├── Finotrato_Cat_Stix_Atum.png
│   │   │   ├── Finotrato_Cat_Stix_Carne.png
│   │   │   ├── Finotrato_Cat_Stix_Frango.png
│   │   │   ├── Finotrato_Cat_Stix_Salmão.png
│   │   │   ├── Finotrato_Dog_Stix_Carne.png
│   │   │   ├── Finotrato_Dog_Stix_Frango.png
│   │   │   ├── Finotrato_Gold_Cães_Adultos_de_Raças_Mini_e_Pequenas.png
│   │   │   ├── Finotrato_Gold_Cães_Adultos_de_Raças_Médias_e_Grandes.png
│   │   │   ├── Finotrato_Gold_Cães_Filhotes_de_Raças_Mini_e_Pequenas.png
│   │   │   ├── Finotrato_Gold_Cães_Filhotes_de_Raças_Médias_e_Grandes.png
│   │   │   ├── Finotrato_Gold_Salmão_e_Frango_Gatos_Adultos.png
│   │   │   ├── Finotrato_Gold_Salmão_e_Frango_Gatos_Castrados.png
│   │   │   ├── Finotrato_Gold_Salmão_e_Frango_Gatos_Filhotes.png
│   │   │   ├── Finotrato_Life_Active_Frango_e_Arroz_Cães_Adultos.png
│   │   │   ├── Finotrato_Life_Active_Frango_e_Arroz_Cães_Filhotes.png
│   │   │   ├── Finotrato_Life_Light_Frango_e_Arroz_Cães_Adultos_de_Raças_Grandes.png
│   │   │   ├── Finotrato_Life_Light_Frango_e_Arroz_Cães_Adultos_de_Raças_Pequenas_e_Médias.png
│   │   │   ├── Finotrato_Life_Sensitive_Cordeiro_e_Arroz_Cães_Adultos_de_Raças_Pequenas_e_Médias.png
│   │   │   ├── Finotrato_Life_Sênior_Frango_e_Arroz_Cães_Senis_de_Raças_Grandes.png
│   │   │   ├── Finotrato_Life_Sênior_Frango_e_Arroz_Cães_Senis_de_Raças_Pequenas_e_Médias.png
│   │   │   ├── Finotrato_Nature_Cães_Adultos_de_Raças_Grandes.png
│   │   │   ├── Finotrato_Nature_Cães_Adultos_de_Raças_Pequenas_e_Médias.png
│   │   │   ├── Finotrato_Nature_Cães_Filhotes_de_Raças_Pequenas_e_Médias.png
│   │   │   ├── Finotrato_Patê_Carne_-_Cães_Adultos.png
│   │   │   ├── Finotrato_Patê_Carne_-_Cães_Filhotes.png
│   │   │   ├── Finotrato_Prime_Carne_e_Arroz_Cães_Adultos_de_Raças_Grandes.png
│   │   │   ├── Finotrato_Prime_Carne_e_Arroz_Cães_Adultos_de_Raças_Pequenas_e_Médias.png
│   │   │   ├── Finotrato_Prime_Frango_e_Arroz_Cães_Adultos_de_Raças_Grandes.png
│   │   │   ├── Finotrato_Prime_Frango_e_Arroz_Cães_Adultos_de_Raças_Pequenas_e_Médias.png
│   │   │   ├── Finotrato_Prime_Frango_e_Arroz_Cães_Filhotes_de_Raças_Pequenas_e_Médias.png
│   │   │   ├── Finotrato_Select_Cães_Adultos.png
│   │   │   ├── Finotrato_Select_Cães_Adultos_Raças_Pequenas_e_Médias.png
│   │   │   └── Finotrato_Select_Gatos_Adultos.png
│   │   ├── Fórmula Natural
│   │   │   ├── Fórmula Natural Dog Biscuits Batata Doce, Banana e Linhaça Pequeno Porte.png
│   │   │   ├── Fórmula Natural Life Cães Adultos Portes Médio e Grande.png
│   │   │   ├── Fórmula Natural Life Cães Filhotes Portes Mini e Pequeno.png
│   │   │   ├── Fórmula Natural Life Cão Sênior Portes Mini e Pequeno.png
│   │   │   ├── Fórmula Natural Life Cão Sênior Portes Médio e Grande.png
│   │   │   ├── Fórmula Natural Pro Cães Adultos Portes Mini e Pequeno.png
│   │   │   ├── Fórmula Natural Pro Cães Adultos Portes Médio e Grande.png
│   │   │   ├── Fórmula Natural Pro Cães Filhotes Portes Médio e Grande.png
│   │   │   ├── Fórmula Natural Receitas Caseiras Cães Adultos Cordeiro com Batata e Hortelã.png
│   │   │   ├── Fórmula Natural Receitas Caseiras Cães Adultos Picadinho de Carne com Abóbora e Mandioquinha.png
│   │   │   ├── Fórmula Natural Receitas Caseiras Gatos Adultos Carne.png
│   │   │   ├── Fórmula Natural Receitas Caseiras Gatos Adultos Salmão com Maracujá ao Molho.png
│   │   │   ├── Fórmula Natural Snacks Antiestresse Cães Adultos Portes Mini e Pequeno.png
│   │   │   ├── Fórmula Natural Snacks Antiestresse Cães Adultos Portes Médio e Grande.png
│   │   │   ├── Fórmula Natural Snacks Vitalidade Cães Adultos Portes Mini e Pequeno.png
│   │   │   ├── Fórmula Natural Vet Care Renal Gatos Úmido.png
│   │   │   ├── Fórmula Natural-LIFE_ADULTOS_MINI-E-PEQUENO.png
│   │   │   ├── Fórmula Natural_LIFE_CAES_FILHOTES Portes Médio e Grande.png
│   │   │   ├── Fórmula_Natural_Fresh_Meat_Controle_De_Peso_Cães_Adultos_Portes_Mini_e_Pequeno.png
│   │   │   ├── Fórmula_Natural_FRESH_MEAT_CUIDADO_ORAL_Portes_Mini_e_Pequeno.png
│   │   │   ├── Fórmula_Natural_Fresh_Meat_Cães_Adultos_Porte_Médio.png
│   │   │   ├── Fórmula_Natural_Fresh_Meat_Cães_Adultos_Portes_Mini_e_Pequeno....png
│   │   │   ├── Fórmula_Natural_Fresh_Meat_Cães_Filhotes_Portes_Mini_e_Pequeno....png
│   │   │   ├── Fórmula_Natural_Fresh_Meat_Cão_Sênior_Portes_Mini_e_Pequeno.png
│   │   │   ├── Fórmula_Natural_Fresh_Meat_Cão_Sênior_Portes_Médio_e_Grande.png
│   │   │   ├── Fórmula_Natural_Fresh_Meat_Gatos_Adultos_Frango.png
│   │   │   ├── Fórmula_Natural_Fresh_Meat_Gatos_Castrados_Carne.png
│   │   │   ├── Fórmula_Natural_Fresh_Meat_Gatos_Castrados_Salmão.png
│   │   │   ├── Fórmula_Natural_Fresh_Meat_Gatos_Sênior.png
│   │   │   ├── Fórmula_Natural_Fresh_Meat_Sensitive_Cães_Adultos_Portes_Mini_e_Pequeno.png
│   │   │   └── Fórmula_Natural_Life_Gatos_Castrados_Sabor_Frango.png
│   │   ├── GoldeN
│   │   │   ├── GoldeN_Formula_Cães_Adultos_Porte_Pequeno_Carne_e_Arroz.png
│   │   │   ├── GoldeN_Formula_Cães_Adultos_Porte_Pequeno_Frango_&_Arroz.png
│   │   │   ├── GoldeN_Formula_Cães_Adultos_Porte_Pequeno_Frango_&_Arroz_Light.png
│   │   │   ├── GoldeN_Formula_Cães_Adultos_Porte_Pequeno_Peru_&_Arroz.png
│   │   │   ├── GoldeN_Formula_Cães_Filhotes_Carne_&_Arroz.png
│   │   │   ├── GoldeN_Formula_Cães_Filhotes_Frango_&_Arroz.png
│   │   │   ├── GoldeN_Formula_Cães_Filhotes_Porte_Pequeno_Frango_&_Arroz.png
│   │   │   ├── GoldeN_Formula_Cães_Seniores_Porte_Pequeno_Frango_e_Arroz_Mini_Bits.png
│   │   │   ├── GoldeN_Gatos_Adultos_Carne.png
│   │   │   ├── GoldeN_Gatos_Adultos_Frango.png
│   │   │   ├── GoldeN_Gatos_Adultos_Salmão.png
│   │   │   ├── GoldeN_Gatos_Castrados_Carne.png
│   │   │   ├── GoldeN_Gatos_Castrados_Frango.png
│   │   │   ├── GoldeN_Gatos_Castrados_Salmão.png
│   │   │   ├── GoldeN_Gatos_Filhotes_Frango.png
│   │   │   ├── GoldeN_Special_Cães_Adultos_Porte_Pequeno_Frango_e_Carne.png
│   │   │   └── GoldeN_Special_Cães_Filhotes_Porte_Pequeno_Frango_e_Carne.png
│   │   ├── Magnus
│   │   │   ├── Magnus_Bifinhos_Cães_Sabor_Carne.png
│   │   │   ├── Magnus_Bifinhos_Cães_Sabor_Frango.png
│   │   │   ├── Magnus_Biscoito_Cães_Adultos_Pequeno_Porte.png
│   │   │   ├── Magnus_Biscoito_Mix_Cães_Adultos.png
│   │   │   ├── Magnus_Todo_Dia_Cães_Adultos_Pequeno_Porte_Sabor_Carne_e_Frango.png
│   │   │   ├── Magnus_Todo_Dia_Cães_Adultos_Sabor_Carne.png
│   │   │   └── Magnus_Todo_Dia_Cães_Filhotes_Sabor_Carne.png
│   │   ├── Marca
│   │   │   ├── Besser.png
│   │   │   ├── Bionatural.png
│   │   │   ├── Finotrato.png
│   │   │   ├── formlanatural.png
│   │   │   ├── golden.png
│   │   │   ├── hills.avif
│   │   │   ├── MAGNUS.png
│   │   │   ├── n&d.png
│   │   │   ├── ORIGENS.png
│   │   │   ├── Premier.png
│   │   │   ├── PremieR_Nattu.png
│   │   │   ├── SpecialCat.png
│   │   │   ├── SpecialDog.png
│   │   │   └── VittA_Natural.png
│   │   ├── N&D
│   │   │   ├── N&D TROPICAL SELECTION CANINE CORDEIRO ADULT MINI.png
│   │   │   ├── N&D TROPICAL SELECTION CANINE CORDEIRO PUPPY MINI.png
│   │   │   ├── N&D TROPICAL SELECTION CANINE FRANGO ADULT MINI.png
│   │   │   ├── N&D TROPICAL SELECTION CANINE SALMÃO ADULT MINI.png
│   │   │   ├── N&D TROPICAL SELECTION CANINE SUÍNO ADULT MINI.png
│   │   │   ├── N&D TROPICAL SELECTION CANINE SUÍNO PUPPY MINI.png
│   │   │   ├── n&d_Ancestral_Canine_Cordeiro_Adulto_Mini.png
│   │   │   ├── n&d_cao-white-puppy-mini.png
│   │   │   ├── n&d_cao_ANCESTRAL_ADULT_MEDIUM.png
│   │   │   ├── N&D_cao_White Adult Mini - Merluza, Spirulina e Erva Doce.png
│   │   │   ├── n&d_gatos_Frango Adult Castrados.png
│   │   │   └── n&d_Gatos_Tilápia, Spirulina e Goji Berry Adult.png
│   │   ├── Origens
│   │   │   ├── Origens Class Cães Adultos Portes Mini e Pequeno.png
│   │   │   ├── Origens Dental Cães.png
│   │   │   ├── Origens Energy Cães Adultos Sabor Frango e Cereais.png
│   │   │   ├── Origens Petiscos Naturais Traqueia Bovina.png
│   │   │   ├── Origens Raças Específicas Cães Adultos Shih Tzu e Lhasa Apso.png
│   │   │   ├── Origens Raças Específicas Cães Adultos Yorkshire, Maltês e Spitz.png
│   │   │   ├── Origens_Cães_Adultos_Portes_Mini_e_Pequeno_Sabor_Carne.png
│   │   │   ├── Origens_Cães_Adultos_Portes_Mini_e_Pequeno_Sabor_Frango.png
│   │   │   ├── Origens_Cães_Adultos_Sabor_Carne_e_Cereais.png
│   │   │   ├── Origens_Cães_Sênior_Portes_Mini_e_Pequeno.png
│   │   │   ├── Origens_Premium_Especial_Gatos_Adultos_Sabor_Carne.png
│   │   │   ├── Origens_Premium_Especial_Gatos_Adultos_Sabor_Frango.png
│   │   │   ├── Origens_Premium_Especial_Gatos_Castrados_Sabor_Carne.png
│   │   │   ├── Origens_Premium_Especial_Gatos_Castrados_Sabor_Frango.png
│   │   │   ├── Origens_Premium_Especial_Gatos_Castrados_Sabor_Salmão.png
│   │   │   └── Origens_Premium_Especial_Gatos_Filhotes_Sabor_Frango_e_Cereais.png
│   │   ├── PremieR
│   │   │   ├── PremieR_Ambientes_Internos_Cães_Adultos_Porte_Pequeno_Frango_e_Salmão.png
│   │   │   ├── PremieR_Ambientes_Internos_Cães_Adultos_Porte_Pequeno_Frango_e_Salmão_Castrados.png
│   │   │   ├── PremieR_Ambientes_Internos_Cães_Adultos_Porte_Pequeno_Frango_e_Salmão_Light.png
│   │   │   ├── PremieR_Ambientes_Internos_Cães_Adultos_Porte_Pequeno_Frango_e_Salmão_Senior.png
│   │   │   ├── PremieR_Ambientes_Internos_Cães_Adultos_Porte_Pequeno_Salmão_Dermacare.png
│   │   │   ├── PremieR_Ambientes_Internos_Cães_Filhotes_Porte_Pequeno_Frango_e_Salmão.png
│   │   │   ├── PremieR_Formula_Cães_Adultos_Porte_Médio_Frango.png
│   │   │   ├── PremieR_Formula_Cães_Adultos_Porte_Pequeno_Frango.png
│   │   │   ├── PremieR_Formula_Cães_Filhotes_Porte_Pequeno_Frango.png
│   │   │   ├── PremieR_Raças_Específicas_Bulldog_Francês_Adultos_Porte_Pequeno_Frango.png
│   │   │   ├── PremieR_Raças_Específicas_Bulldog_Inglês_Adultos_Porte_Médio_Frango.png
│   │   │   ├── PremieR_Raças_Específicas_Filhotes_Frango_Bulldog_Francês.png
│   │   │   ├── PremieR_Raças_Específicas_Shih_Tzu_Adultos_Porte_Pequeno_Frango.png
│   │   │   ├── PremieR_Raças_Específicas_Shih_Tzu_Filhotes_Porte_Pequeno_Frango.png
│   │   │   ├── PremieR_Raças_Específicas_Spitz_Alemão_Adulto_Porte_Pequeno_Frango.png
│   │   │   ├── PremieR_Raças_Específicas_Spitz_Alemão_Filhotes_Porte_Pequeno_Frango.png
│   │   │   ├── PremieR_Raças_Específicas_Yorkshire_Adultos_Porte_Pequeno_Frango.png
│   │   │   └── PremieR_Raças_Específicas_Yorkshire_Filhotes_Porte_Pequeno_Frango.png
│   │   ├── PremieR_Nattu
│   │   │   ├── PremieR_Nattu_Cães_Adultos_Porte_Pequeno_Frango,_Abóbora,_Brócolis,_Quinoa_&_Blueberry.png
│   │   │   ├── PremieR_Nattu_Cães_Adultos_Porte_Pequeno_Frango,_Mandioca,_Beterraba,_Linhaça_&_Cranberry.png
│   │   │   ├── PremieR_Nattu_Cães_Adultos_Porte_Pequeno_Frango_Mandioquinha,_Espinafre,_Cúrcuma_&_Blackberry.png
│   │   │   ├── PremieR_Nattu_Cães_Filhotes_Porte_Pequeno_Frango,_Mandioca,_Beterraba,_Linhaça_e_Cranberry.png
│   │   │   └── PremieR_Nattu_Cães_Sênior_Porte_Pequeno_Frango,_Mandioca,_Beterraba,_Linhaça_&_Cranberry.png
│   │   ├── special Cat
│   │   │   ├── Special Cat_Adultos_Mix.png
│   │   │   ├── Special Cat_Castrados_Mix.png
│   │   │   ├── Special Cat_Ultralife_Adultos Frango.png
│   │   │   ├── Special Cat_Ultralife_Adultos Salmão.png
│   │   │   ├── Special Cat_Ultralife_Castrados Frango.png
│   │   │   ├── Special Cat_Ultralife_Castrados10+Salmão.png
│   │   │   └── Special Cat_Ultralife_Filhotes Salmão.png
│   │   ├── Special dog
│   │   │   ├── Special Dog-Sacaria-Performance-Junior-.png
│   │   │   ├── SPECIAL DOG_Adultos_Carne.png
│   │   │   ├── SPECIAL DOG_Adultos_Pequeno Porte_Carne.png
│   │   │   ├── Special Dog_Ultralife_Adultos RAÇAS MÉDIAS E GRANDES.png
│   │   │   ├── Special Dog_Ultralife_Adultos RAÇAS PEQUENAS.png
│   │   │   ├── Special Dog_Ultralife_Adultos RAÇAS PEQUENAS_Cordeiro.png
│   │   │   ├── Special Dog_Ultralife_Junior RAÇAS MÉDIAS E GRANDES.png
│   │   │   ├── Special Dog_Ultralife_Junior RAÇAS PEQUENAS.png
│   │   │   ├── Special Dog_Ultralife_Light RAÇAS MÉDIAS E GRANDES.png
│   │   │   ├── Special Dog_Ultralife_Light RAÇAS PEQUENAS.png
│   │   │   ├── Special Dog_Ultralife_Performance_.png
│   │   │   ├── Special Dog_Ultralife_Senior RAÇAS MÉDIAS E GRANDES.png
│   │   │   └── Special Dog_Ultralife_Senior RAÇAS PEQUENAS.png
│   │   └── VittA_Natural
│   │       ├── VittA_Natural_Cães_Adultos_Carne_e_Arroz.png
│   │       ├── VittA_Natural_Cães_Adultos_Frango_e_Arroz.png
│   │       ├── VittA_Natural_Cães_Adultos_Porte_Pequeno_Carne_e_Arroz.png
│   │       ├── VittA_Natural_Cães_Adultos_Porte_Pequeno_Frango_e_Arroz.png
│   │       ├── VittA_Natural_Cães_Filhotes_Carne_e_Arroz.png
│   │       ├── Vitta_Natural_Cães_Filhotes_Frango_e_Arroz.png
│   │       └── VittA_Natural_Cães_Filhotes_Porte_Pequeno_Frango_e_Arroz.png
│   ├── Promocao
│   │   ├── promo1.jpeg
│   │   ├── promo12.jpeg
│   │   ├── promo14.jpeg
│   │   ├── promo15.jpeg
│   │   ├── promo16.jpeg
│   │   ├── promo2.jpeg
│   │   ├── promo3.jpeg
│   │   ├── promo4.jpeg
│   │   ├── promo5.jpeg
│   │   ├── promo6.jpeg
│   │   ├── promo7.jpeg
│   │   ├── promo8.jpeg
│   │   └── promo9.jpeg
│   ├── victorbrunna.jpg
│   └── whatsapp-notification.mp3
└── tsconfig.json

## Conteúdo dos Arquivos

### `.env.example`
```
# GitHub Pages Configuration
# Use these environment variables para customizar o basePath e assetPrefix

# Para desenvolvimento local (sem basePath)
NEXT_PUBLIC_BASE_PATH=
NEXT_PUBLIC_ASSET_PREFIX=

# Para GitHub Pages (com basePath)
# NEXT_PUBLIC_BASE_PATH=/casaderacaoatlantico
# NEXT_PUBLIC_ASSET_PREFIX=/casaderacaoatlantico/

# Para produção (domínio customizado)
# NEXT_PUBLIC_BASE_PATH=
# NEXT_PUBLIC_ASSET_PREFIX=
```

### `.env.local`
```
# Variáveis de ambiente
# Adicione aqui suas variáveis específicas da aplicação
NEXT_PUBLIC_BASE_PATH=/casaderacaoatlantico
NEXT_PUBLIC_ASSET_PREFIX=/casaderacaoatlantico/
```

### `.eslintrc.json`
```
{
  "extends": "next/core-web-vitals"
}
```

### `.git\COMMIT_EDITMSG`
```

# Please enter the commit message for your changes. Lines starting
# with '#' will be ignored, and an empty message aborts the commit.
#
# On branch master
# Your branch is up to date with 'origin/master'.
#
# Changes to be committed:
#	modified:   app/globals.css
#	modified:   app/layout.jsx
#	modified:   app/linktree/linktree.css
#	deleted:    docs/404.html
#	deleted:    docs/Fotos/foto (1).jpg
#	deleted:    docs/Fotos/foto (10).jpg
#	deleted:    docs/Fotos/foto (11).jpg
#	deleted:    docs/Fotos/foto (13).jpg
#	deleted:    docs/Fotos/foto (15).jpg
#	deleted:    docs/Fotos/foto (17).jpg
#	deleted:    docs/Fotos/foto (19).jpg
#	deleted:    docs/Fotos/foto (2).jpg
#	deleted:    docs/Fotos/foto (20).jpg
#	deleted:    docs/Fotos/foto (22).jpg
#	deleted:    docs/Fotos/foto (25).jpg
#	deleted:    docs/Fotos/foto (26).jpg
#	deleted:    docs/Fotos/foto (3).jpg
#	deleted:    docs/Fotos/foto (33).jpg
#	deleted:    docs/Fotos/foto (34).jpg
#	deleted:    docs/Fotos/foto (35).jpg
#	deleted:    docs/Fotos/foto (36).jpg
#	deleted:    docs/Fotos/foto (38).jpg
#	deleted:    docs/Fotos/foto (40).jpg
#	deleted:    docs/Fotos/foto (41).jpg
#	deleted:    docs/Fotos/foto (42).jpg
#	deleted:    docs/Fotos/foto (44).jpg
#	deleted:    docs/Fotos/foto (46).jpg
#	deleted:    docs/Fotos/foto (48).jpg
#	deleted:    docs/Fotos/foto (49).jpg
#	deleted:    docs/Fotos/foto (5).jpg
#	deleted:    docs/Fotos/foto (51).jpg
#	deleted:    docs/Fotos/foto (53).jpg
#	deleted:    docs/Fotos/foto (55).jpg
#	deleted:    docs/Fotos/foto (56).jpg
#	deleted:    docs/Fotos/foto (58).jpg
#	deleted:    docs/Fotos/foto (59).jpg
#	deleted:    docs/Fotos/foto (6).jpg
#	deleted:    docs/Fotos/foto (60).jpg
#	deleted:    docs/Fotos/foto (61).jpg
#	deleted:    docs/Fotos/foto (62).jpg
#	deleted:    docs/Fotos/foto (63).jpg
#	deleted:    docs/Fotos/foto (64).jpg
#	deleted:    docs/Fotos/foto (65).jpg
#	deleted:    docs/Fotos/foto (66).jpg
#	deleted:    docs/Fotos/foto (67).jpg
#	deleted:    docs/Fotos/foto (69).jpg
#	deleted:    docs/Fotos/foto (7).jpg
#	deleted:    docs/Fotos/foto (71).jpg
#	deleted:    docs/Fotos/foto (73).jpg
#	deleted:    docs/Fotos/foto (74).jpg
#	deleted:    docs/Fotos/foto (75).jpg
#	deleted:    docs/Fotos/foto (76).jpg
#	deleted:    docs/Fotos/foto (77).jpg
#	deleted:    docs/Fotos/foto (79).jpg
#	deleted:    docs/Fotos/foto (80).jpg
#	deleted:    docs/Fotos/foto (82).jpg
#	deleted:    docs/Fotos/foto (83).jpg
#	deleted:    docs/Fotos/foto (84).jpg
#	deleted:    docs/Fotos/foto (86).jpg
#	deleted:    docs/Fotos/foto (87).jpg
#	deleted:    docs/Fotos/foto (88).jpg
#	deleted:    docs/Fotos/foto (89).jpg
#	deleted:    docs/Fotos/foto (9).jpg
#	deleted:    docs/Fotos/foto (90).jpg
#	deleted:    docs/Fotos/foto (91).jpg
#	deleted:    docs/Fotos/foto (92).jpg
#	deleted:    docs/Fotos/foto (94).jpg
#	deleted:    "docs/Produtos/Besser/Besser_Natural_C\303\243es_Adultos.png"
#	deleted:    "docs/Produtos/Besser/Besser_Natural_C\303\243es_Adultos_de_Ra\303\247as_Pequenas_e_M\303\251dias.png"
#	deleted:    "docs/Produtos/Besser/Besser_Natural_C\303\243es_Filhotes.png"
#	deleted:    docs/Produtos/Besser/Besser_Natural_Gatos_Filhotes.png
#	deleted:    "docs/Produtos/Bionatural/Bionatural_Adultos_RA\303\207AS M\303\211DIAS E GRANDES_Frango.png"
#	deleted:    "docs/Produtos/Bionatural/Bionatural_Adultos_RA\303\207AS PEQUENAS_Cordeiro.png"
#	deleted:    "docs/Produtos/Bionatural/Bionatural_Adultos_RA\303\207AS PEQUENAS_Frango.png"
#	deleted:    docs/Produtos/Bionatural/Bionatural_Adultos_salmao.png
#	deleted:    docs/Produtos/Bionatural/Bionatural_Castrados_Frango.png
#	deleted:    docs/Produtos/Bionatural/Bionatural_Castrados_Salmao.png
#	deleted:    "docs/Produtos/Bionatural/Bionatural_Junior_RA\303\207AS PEQUENAS_Frango.png"
#	deleted:    "docs/Produtos/Bionatural/Bionatural_RA\303\207AS M\303\211DIAS E GRANDES_Cordeiro.png"
#	deleted:    "docs/Produtos/Bionatural/Bionatural_Senior_RA\303\207AS PEQUENAS_Frango.png"
#	deleted:    "docs/Produtos/Finotrato/Finotrato_Bifinho_Carne_-_C\303\243es.png"
#	deleted:    "docs/Produtos/Finotrato/Finotrato_Bifinho_Frango_-_C\303\243es.png"
#	deleted:    docs/Produtos/Finotrato/Finotrato_Bio-Litter.png
#	deleted:    docs/Produtos/Finotrato/Finotrato_Cat_Nuggets_Sabor_Carne_-_Gatos_Adultos.png
#	deleted:    docs/Produtos/Finotrato/Finotrato_Cat_Stix_Atum.png
#	deleted:    docs/Produtos/Finotrato/Finotrato_Cat_Stix_Carne.png
#	deleted:    docs/Produtos/Finotrato/Finotrato_Cat_Stix_Frango.png
#	deleted:    "docs/Produtos/Finotrato/Finotrato_Cat_Stix_Salm\303\243o.png"
#	deleted:    docs/Produtos/Finotrato/Finotrato_Dog_Stix_Carne.png
#	deleted:    docs/Produtos/Finotrato/Finotrato_Dog_Stix_Frango.png
#	deleted:    "docs/Produtos/Finotrato/Finotrato_Gold_C\303\243es_Adultos_de_Ra\303\247as_Mini_e_Pequenas.png"
#	deleted:    "docs/Produtos/Finotrato/Finotrato_Gold_C\303\243es_Adultos_de_Ra\303\247as_M\303\251dias_e_Grandes.png"
#	deleted:    "docs/Produtos/Finotrato/Finotrato_Gold_C\303\243es_Filhotes_de_Ra\303\247as_Mini_e_Pequenas.png"
#	deleted:    "docs/Produtos/Finotrato/Finotrato_Gold_C\303\243es_Filhotes_de_Ra\303\247as_M\303\251dias_e_Grandes.png"
#	deleted:    "docs/Produtos/Finotrato/Finotrato_Gold_Salm\303\243o_e_Frango_Gatos_Adultos.png"
#	deleted:    "docs/Produtos/Finotrato/Finotrato_Gold_Salm\303\243o_e_Frango_Gatos_Castrados.png"
#	deleted:    "docs/Produtos/Finotrato/Finotrato_Gold_Salm\303\243o_e_Frango_Gatos_Filhotes.png"
#	deleted:    "docs/Produtos/Finotrato/Finotrato_Life_Active_Frango_e_Arroz_C\303\243es_Adultos.png"
#	deleted:    "docs/Produtos/Finotrato/Finotrato_Life_Active_Frango_e_Arroz_C\303\243es_Filhotes.png"
#	deleted:    "docs/Produtos/Finotrato/Finotrato_Life_Light_Frango_e_Arroz_C\303\243es_Adultos_de_Ra\303\247as_Grandes.png"
#	deleted:    "docs/Produtos/Finotrato/Finotrato_Life_Light_Frango_e_Arroz_C\303\243es_Adultos_de_Ra\303\247as_Pequenas_e_M\303\251dias.png"
#	deleted:    "docs/Produtos/Finotrato/Finotrato_Life_Sensitive_Cordeiro_e_Arroz_C\303\243es_Adultos_de_Ra\303\247as_Pequenas_e_M\303\251dias.png"
#	deleted:    "docs/Produtos/Finotrato/Finotrato_Life_S\303\252nior_Frango_e_Arroz_C\303\243es_Senis_de_Ra\303\247as_Grandes.png"
#	deleted:    "docs/Produtos/Finotrato/Finotrato_Life_S\303\252nior_Frango_e_Arroz_C\303\243es_Senis_de_Ra\303\247as_Pequenas_e_M\303\251dias.png"
#	deleted:    "docs/Produtos/Finotrato/Finotrato_Nature_C\303\243es_Adultos_de_Ra\303\247as_Grandes.png"
#	deleted:    "docs/Produtos/Finotrato/Finotrato_Nature_C\303\243es_Adultos_de_Ra\303\247as_Pequenas_e_M\303\251dias.png"
#	deleted:    "docs/Produtos/Finotrato/Finotrato_Nature_C\303\243es_Filhotes_de_Ra\303\247as_Pequenas_e_M\303\251dias.png"
#	deleted:    "docs/Produtos/Finotrato/Finotrato_Pat\303\252_Carne_-_C\303\243es_Adultos.png"
#	deleted:    "docs/Produtos/Finotrato/Finotrato_Pat\303\252_Carne_-_C\303\243es_Filhotes.png"
#	deleted:    "docs/Produtos/Finotrato/Finotrato_Prime_Carne_e_Arroz_C\303\243es_Adultos_de_Ra\303\247as_Grandes.png"
#	deleted:    "docs/Produtos/Finotrato/Finotrato_Prime_Carne_e_Arroz_C\303\243es_Adultos_de_Ra\303\247as_Pequenas_e_M\303\251dias.png"
#	deleted:    "docs/Produtos/Finotrato/Finotrato_Prime_Frango_e_Arroz_C\303\243es_Adultos_de_Ra\303\247as_Grandes.png"
#	deleted:    "docs/Produtos/Finotrato/Finotrato_Prime_Frango_e_Arroz_C\303\243es_Adultos_de_Ra\303\247as_Pequenas_e_M\303\251dias.png"
#	deleted:    "docs/Produtos/Finotrato/Finotrato_Prime_Frango_e_Arroz_C\303\243es_Filhotes_de_Ra\303\247as_Pequenas_e_M\303\251dias.png"
#	deleted:    "docs/Produtos/Finotrato/Finotrato_Select_C\303\243es_Adultos.png"
#	deleted:    "docs/Produtos/Finotrato/Finotrato_Select_C\303\243es_Adultos_Ra\303\247as_Pequenas_e_M\303\251dias.png"
#	deleted:    docs/Produtos/Finotrato/Finotrato_Select_Gatos_Adultos.png
#	deleted:    "docs/Produtos/F\303\263rmula Natural/F\303\263rmula Natural Dog Biscuits Batata Doce, Banana e Linha\303\247a Pequeno Porte.png"
#	deleted:    "docs/Produtos/F\303\263rmula Natural/F\303\263rmula Natural Life C\303\243es Adultos Portes M\303\251dio e Grande.png"
#	deleted:    "docs/Produtos/F\303\263rmula Natural/F\303\263rmula Natural Life C\303\243es Filhotes Portes Mini e Pequeno.png"
#	deleted:    "docs/Produtos/F\303\263rmula Natural/F\303\263rmula Natural Life C\303\243o S\303\252nior Portes Mini e Pequeno.png"
#	deleted:    "docs/Produtos/F\303\263rmula Natural/F\303\263rmula Natural Life C\303\243o S\303\252nior Portes M\303\251dio e Grande.png"
#	deleted:    "docs/Produtos/F\303\263rmula Natural/F\303\263rmula Natural Pro C\303\243es Adultos Portes Mini e Pequeno.png"
#	deleted:    "docs/Produtos/F\303\263rmula Natural/F\303\263rmula Natural Pro C\303\243es Adultos Portes M\303\251dio e Grande.png"
#	deleted:    "docs/Produtos/F\303\263rmula Natural/F\303\263rmula Natural Pro C\303\243es Filhotes Portes M\303\251dio e Grande.png"
#	deleted:    "docs/Produtos/F\303\263rmula Natural/F\303\263rmula Natural Receitas Caseiras C\303\243es Adultos Cordeiro com Batata e Hortel\303\243.png"
#	deleted:    "docs/Produtos/F\303\263rmula Natural/F\303\263rmula Natural Receitas Caseiras C\303\243es Adultos Picadinho de Carne com Ab\303\263bora e Mandioquinha.png"
#	deleted:    "docs/Produtos/F\303\263rmula Natural/F\303\263rmula Natural Receitas Caseiras Gatos Adultos Carne.png"
#	deleted:    "docs/Produtos/F\303\263rmula Natural/F\303\263rmula Natural Receitas Caseiras Gatos Adultos Salm\303\243o com Maracuj\303\241 ao Molho.png"
#	deleted:    "docs/Produtos/F\303\263rmula Natural/F\303\263rmula Natural Snacks Antiestresse C\303\243es Adultos Portes Mini e Pequeno.png"
#	deleted:    "docs/Produtos/F\303\263rmula Natural/F\303\263rmula Natural Snacks Antiestresse C\303\243es Adultos Portes M\303\251dio e Grande.png"
#	deleted:    "docs/Produtos/F\303\263rmula Natural/F\303\263rmula Natural Snacks Vitalidade C\303\243es Adultos Portes Mini e Pequeno.png"
#	deleted:    "docs/Produtos/F\303\263rmula Natural/F\303\263rmula Natural Vet Care Renal Gatos \303\232mido.png"
#	deleted:    "docs/Produtos/F\303\263rmula Natural/F\303\263rmula Natural-LIFE_ADULTOS_MINI-E-PEQUENO.png"
#	deleted:    "docs/Produtos/F\303\263rmula Natural/F\303\263rmula Natural_LIFE_CAES_FILHOTES Portes M\303\251dio e Grande.png"
#	deleted:    "docs/Produtos/F\303\263rmula Natural/F\303\263rmula_Natural_FRESH_MEAT_CUIDADO_ORAL_Portes_Mini_e_Pequeno.png"
#	deleted:    "docs/Produtos/F\303\263rmula Natural/F\303\263rmula_Natural_Fresh_Meat_Controle_De_Peso_C\303\243es_Adultos_Portes_Mini_e_Pequeno.png"
#	deleted:    "docs/Produtos/F\303\263rmula Natural/F\303\263rmula_Natural_Fresh_Meat_C\303\243es_Adultos_Porte_M\303\251dio.png"
#	deleted:    "docs/Produtos/F\303\263rmula Natural/F\303\263rmula_Natural_Fresh_Meat_C\303\243es_Adultos_Portes_Mini_e_Pequeno....png"
#	deleted:    "docs/Produtos/F\303\263rmula Natural/F\303\263rmula_Natural_Fresh_Meat_C\303\243es_Filhotes_Portes_Mini_e_Pequeno....png"
#	deleted:    "docs/Produtos/F\303\263rmula Natural/F\303\263rmula_Natural_Fresh_Meat_C\303\243o_S\303\252nior_Portes_Mini_e_Pequeno.png"
#	deleted:    "docs/Produtos/F\303\263rmula Natural/F\303\263rmula_Natural_Fresh_Meat_C\303\243o_S\303\252nior_Portes_M\303\251dio_e_Grande.png"
#	deleted:    "docs/Produtos/F\303\263rmula Natural/F\303\263rmula_Natural_Fresh_Meat_Gatos_Adultos_Frango.png"
#	deleted:    "docs/Produtos/F\303\263rmula Natural/F\303\263rmula_Natural_Fresh_Meat_Gatos_Castrados_Carne.png"
#	deleted:    "docs/Produtos/F\303\263rmula Natural/F\303\263rmula_Natural_Fresh_Meat_Gatos_Castrados_Salm\303\243o.png"
#	deleted:    "docs/Produtos/F\303\263rmula Natural/F\303\263rmula_Natural_Fresh_Meat_Gatos_S\303\252nior.png"
#	deleted:    "docs/Produtos/F\303\263rmula Natural/F\303\263rmula_Natural_Fresh_Meat_Sensitive_C\303\243es_Adultos_Portes_Mini_e_Pequeno.png"
#	deleted:    "docs/Produtos/F\303\263rmula Natural/F\303\263rmula_Natural_Life_Gatos_Castrados_Sabor_Frango.png"
#	deleted:    "docs/Produtos/GoldeN/GoldeN_Formula_C\303\243es_Adultos_Porte_Pequeno_Carne_e_Arroz.png"
#	deleted:    "docs/Produtos/GoldeN/GoldeN_Formula_C\303\243es_Adultos_Porte_Pequeno_Frango_&_Arroz.png"
#	deleted:    "docs/Produtos/GoldeN/GoldeN_Formula_C\303\243es_Adultos_Porte_Pequeno_Frango_&_Arroz_Light.png"
#	deleted:    "docs/Produtos/GoldeN/GoldeN_Formula_C\303\243es_Adultos_Porte_Pequeno_Peru_&_Arroz.png"
#	deleted:    "docs/Produtos/GoldeN/GoldeN_Formula_C\303\243es_Filhotes_Carne_&_Arroz.png"
#	deleted:    "docs/Produtos/GoldeN/GoldeN_Formula_C\303\243es_Filhotes_Frango_&_Arroz.png"
#	deleted:    "docs/Produtos/GoldeN/GoldeN_Formula_C\303\243es_Filhotes_Porte_Pequeno_Frango_&_Arroz.png"
#	deleted:    "docs/Produtos/GoldeN/GoldeN_Formula_C\303\243es_Seniores_Porte_Pequeno_Frango_e_Arroz_Mini_Bits.png"
#	deleted:    docs/Produtos/GoldeN/GoldeN_Gatos_Adultos_Carne.png
#	deleted:    docs/Produtos/GoldeN/GoldeN_Gatos_Adultos_Frango.png
#	deleted:    "docs/Produtos/GoldeN/GoldeN_Gatos_Adultos_Salm\303\243o.png"
#	deleted:    docs/Produtos/GoldeN/GoldeN_Gatos_Castrados_Carne.png
#	deleted:    docs/Produtos/GoldeN/GoldeN_Gatos_Castrados_Frango.png
#	deleted:    "docs/Produtos/GoldeN/GoldeN_Gatos_Castrados_Salm\303\243o.png"
#	deleted:    docs/Produtos/GoldeN/GoldeN_Gatos_Filhotes_Frango.png
#	deleted:    "docs/Produtos/GoldeN/GoldeN_Special_C\303\243es_Adultos_Porte_Pequeno_Frango_e_Carne.png"
#	deleted:    "docs/Produtos/GoldeN/GoldeN_Special_C\303\243es_Filhotes_Porte_Pequeno_Frango_e_Carne.png"
#	deleted:    "docs/Produtos/Magnus/Magnus_Bifinhos_C\303\243es_Sabor_Carne.png"
#	deleted:    "docs/Produtos/Magnus/Magnus_Bifinhos_C\303\243es_Sabor_Frango.png"
#	deleted:    "docs/Produtos/Magnus/Magnus_Biscoito_C\303\243es_Adultos_Pequeno_Porte.png"
#	deleted:    "docs/Produtos/Magnus/Magnus_Biscoito_Mix_C\303\243es_Adultos.png"
#	deleted:    "docs/Produtos/Magnus/Magnus_Todo_Dia_C\303\243es_Adultos_Pequeno_Porte_Sabor_Carne_e_Frango.png"
#	deleted:    "docs/Produtos/Magnus/Magnus_Todo_Dia_C\303\243es_Adultos_Sabor_Carne.png"
#	deleted:    "docs/Produtos/Magnus/Magnus_Todo_Dia_C\303\243es_Filhotes_Sabor_Carne.png"
#	deleted:    docs/Produtos/Marca/Besser.png
#	deleted:    docs/Produtos/Marca/Bionatural.png
#	deleted:    docs/Produtos/Marca/Finotrato.png
#	deleted:    docs/Produtos/Marca/MAGNUS.png
#	deleted:    docs/Produtos/Marca/ORIGENS.png
#	deleted:    docs/Produtos/Marca/PremieR_Nattu.png
#	deleted:    docs/Produtos/Marca/Premier.png
#	deleted:    docs/Produtos/Marca/SpecialCat.png
#	deleted:    docs/Produtos/Marca/SpecialDog.png
#	deleted:    docs/Produtos/Marca/VittA_Natural.png
#	deleted:    docs/Produtos/Marca/formlanatural.png
#	deleted:    docs/Produtos/Marca/golden.png
#	deleted:    docs/Produtos/Marca/hills.avif
#	deleted:    docs/Produtos/Marca/n&d.png
#	deleted:    docs/Produtos/N&D/N&D TROPICAL SELECTION CANINE CORDEIRO ADULT MINI.png
#	deleted:    docs/Produtos/N&D/N&D TROPICAL SELECTION CANINE CORDEIRO PUPPY MINI.png
#	deleted:    docs/Produtos/N&D/N&D TROPICAL SELECTION CANINE FRANGO ADULT MINI.png
#	deleted:    "docs/Produtos/N&D/N&D TROPICAL SELECTION CANINE SALM\303\203O ADULT MINI.png"
#	deleted:    "docs/Produtos/N&D/N&D TROPICAL SELECTION CANINE SU\303\215NO ADULT MINI.png"
#	deleted:    "docs/Produtos/N&D/N&D TROPICAL SELECTION CANINE SU\303\215NO PUPPY MINI.png"
#	deleted:    docs/Produtos/N&D/N&D_cao_White Adult Mini - Merluza, Spirulina e Erva Doce.png
#	deleted:    docs/Produtos/N&D/n&d_Ancestral_Canine_Cordeiro_Adulto_Mini.png
#	deleted:    "docs/Produtos/N&D/n&d_Gatos_Til\303\241pia, Spirulina e Goji Berry Adult.png"
#	deleted:    docs/Produtos/N&D/n&d_cao-white-puppy-mini.png
#	deleted:    docs/Produtos/N&D/n&d_cao_ANCESTRAL_ADULT_MEDIUM.png
#	deleted:    docs/Produtos/N&D/n&d_gatos_Frango Adult Castrados.png
#	deleted:    "docs/Produtos/Origens/Origens Class C\303\243es Adultos Portes Mini e Pequeno.png"
#	deleted:    "docs/Produtos/Origens/Origens Dental C\303\243es.png"
#	deleted:    "docs/Produtos/Origens/Origens Energy C\303\243es Adultos Sabor Frango e Cereais.png"
#	deleted:    docs/Produtos/Origens/Origens Petiscos Naturais Traqueia Bovina.png
#	deleted:    "docs/Produtos/Origens/Origens Ra\303\247as Espec\303\255ficas C\303\243es Adultos Shih Tzu e Lhasa Apso.png"
#	deleted:    "docs/Produtos/Origens/Origens Ra\303\247as Espec\303\255ficas C\303\243es Adultos Yorkshire, Malt\303\252s e Spitz.png"
#	deleted:    "docs/Produtos/Origens/Origens_C\303\243es_Adultos_Portes_Mini_e_Pequeno_Sabor_Carne.png"
#	deleted:    "docs/Produtos/Origens/Origens_C\303\243es_Adultos_Portes_Mini_e_Pequeno_Sabor_Frango.png"
#	deleted:    "docs/Produtos/Origens/Origens_C\303\243es_Adultos_Sabor_Carne_e_Cereais.png"
#	deleted:    "docs/Produtos/Origens/Origens_C\303\243es_S\303\252nior_Portes_Mini_e_Pequeno.png"
#	deleted:    docs/Produtos/Origens/Origens_Premium_Especial_Gatos_Adultos_Sabor_Carne.png
#	deleted:    docs/Produtos/Origens/Origens_Premium_Especial_Gatos_Adultos_Sabor_Frango.png
#	deleted:    docs/Produtos/Origens/Origens_Premium_Especial_Gatos_Castrados_Sabor_Carne.png
#	deleted:    docs/Produtos/Origens/Origens_Premium_Especial_Gatos_Castrados_Sabor_Frango.png
#	deleted:    "docs/Produtos/Origens/Origens_Premium_Especial_Gatos_Castrados_Sabor_Salm\303\243o.png"
#	deleted:    docs/Produtos/Origens/Origens_Premium_Especial_Gatos_Filhotes_Sabor_Frango_e_Cereais.png
#	deleted:    "docs/Produtos/PremieR/PremieR_Ambientes_Internos_C\303\243es_Adultos_Porte_Pequeno_Frango_e_Salm\303\243o.png"
#	deleted:    "docs/Produtos/PremieR/PremieR_Ambientes_Internos_C\303\243es_Adultos_Porte_Pequeno_Frango_e_Salm\303\243o_Castrados.png"
#	deleted:    "docs/Produtos/PremieR/PremieR_Ambientes_Internos_C\303\243es_Adultos_Porte_Pequeno_Frango_e_Salm\303\243o_Light.png"
#	deleted:    "docs/Produtos/PremieR/PremieR_Ambientes_Internos_C\303\243es_Adultos_Porte_Pequeno_Frango_e_Salm\303\243o_Senior.png"
#	deleted:    "docs/Produtos/PremieR/PremieR_Ambientes_Internos_C\303\243es_Adultos_Porte_Pequeno_Salm\303\243o_Dermacare.png"
#	deleted:    "docs/Produtos/PremieR/PremieR_Ambientes_Internos_C\303\243es_Filhotes_Porte_Pequeno_Frango_e_Salm\303\243o.png"
#	deleted:    "docs/Produtos/PremieR/PremieR_Formula_C\303\243es_Adultos_Porte_M\303\251dio_Frango.png"
#	deleted:    "docs/Produtos/PremieR/PremieR_Formula_C\303\243es_Adultos_Porte_Pequeno_Frango.png"
#	deleted:    "docs/Produtos/PremieR/PremieR_Formula_C\303\243es_Filhotes_Porte_Pequeno_Frango.png"
#	deleted:    "docs/Produtos/PremieR/PremieR_Ra\303\247as_Espec\303\255ficas_Bulldog_Franc\303\252s_Adultos_Porte_Pequeno_Frango.png"
#	deleted:    "docs/Produtos/PremieR/PremieR_Ra\303\247as_Espec\303\255ficas_Bulldog_Ingl\303\252s_Adultos_Porte_M\303\251dio_Frango.png"
#	deleted:    "docs/Produtos/PremieR/PremieR_Ra\303\247as_Espec\303\255ficas_Filhotes_Frango_Bulldog_Franc\303\252s.png"
#	deleted:    "docs/Produtos/PremieR/PremieR_Ra\303\247as_Espec\303\255ficas_Shih_Tzu_Adultos_Porte_Pequeno_Frango.png"
#	deleted:    "docs/Produtos/PremieR/PremieR_Ra\303\247as_Espec\303\255ficas_Shih_Tzu_Filhotes_Porte_Pequeno_Frango.png"
#	deleted:    "docs/Produtos/PremieR/PremieR_Ra\303\247as_Espec\303\255ficas_Spitz_Alem\303\243o_Adulto_Porte_Pequeno_Frango.png"
#	deleted:    "docs/Produtos/PremieR/PremieR_Ra\303\247as_Espec\303\255ficas_Spitz_Alem\303\243o_Filhotes_Porte_Pequeno_Frango.png"
#	deleted:    "docs/Produtos/PremieR/PremieR_Ra\303\247as_Espec\303\255ficas_Yorkshire_Adultos_Porte_Pequeno_Frango.png"
#	deleted:    "docs/Produtos/PremieR/PremieR_Ra\303\247as_Espec\303\255ficas_Yorkshire_Filhotes_Porte_Pequeno_Frango.png"
#	deleted:    "docs/Produtos/PremieR_Nattu/PremieR_Nattu_C\303\243es_Adultos_Porte_Pequeno_Frango,_Ab\303\263bora,_Br\303\263colis,_Quinoa_&_Blueberry.png"
#	deleted:    "docs/Produtos/PremieR_Nattu/PremieR_Nattu_C\303\243es_Adultos_Porte_Pequeno_Frango,_Mandioca,_Beterraba,_Linha\303\247a_&_Cranberry.png"
#	deleted:    "docs/Produtos/PremieR_Nattu/PremieR_Nattu_C\303\243es_Adultos_Porte_Pequeno_Frango_Mandioquinha,_Espinafre,_C\303\272rcuma_&_Blackberry.png"
#	deleted:    "docs/Produtos/PremieR_Nattu/PremieR_Nattu_C\303\243es_Filhotes_Porte_Pequeno_Frango,_Mandioca,_Beterraba,_Linha\303\247a_e_Cranberry.png"
#	deleted:    "docs/Produtos/PremieR_Nattu/PremieR_Nattu_C\303\243es_S\303\252nior_Porte_Pequeno_Frango,_Mandioca,_Beterraba,_Linha\303\247a_&_Cranberry.png"
#	deleted:    docs/Produtos/Special dog/SPECIAL DOG_Adultos_Carne.png
#	deleted:    docs/Produtos/Special dog/SPECIAL DOG_Adultos_Pequeno Porte_Carne.png
#	deleted:    docs/Produtos/Special dog/Special Dog-Sacaria-Performance-Junior-.png
#	deleted:    "docs/Produtos/Special dog/Special Dog_Ultralife_Adultos RA\303\207AS M\303\211DIAS E GRANDES.png"
#	deleted:    "docs/Produtos/Special dog/Special Dog_Ultralife_Adultos RA\303\207AS PEQUENAS.png"
#	deleted:    "docs/Produtos/Special dog/Special Dog_Ultralife_Adultos RA\303\207AS PEQUENAS_Cordeiro.png"
#	deleted:    "docs/Produtos/Special dog/Special Dog_Ultralife_Junior RA\303\207AS M\303\211DIAS E GRANDES.png"
#	deleted:    "docs/Produtos/Special dog/Special Dog_Ultralife_Junior RA\303\207AS PEQUENAS.png"
#	deleted:    "docs/Produtos/Special dog/Special Dog_Ultralife_Light RA\303\207AS M\303\211DIAS E GRANDES.png"
#	deleted:    "docs/Produtos/Special dog/Special Dog_Ultralife_Light RA\303\207AS PEQUENAS.png"
#	deleted:    docs/Produtos/Special dog/Special Dog_Ultralife_Performance_.png
#	deleted:    "docs/Produtos/Special dog/Special Dog_Ultralife_Senior RA\303\207AS M\303\211DIAS E GRANDES.png"
#	deleted:    "docs/Produtos/Special dog/Special Dog_Ultralife_Senior RA\303\207AS PEQUENAS.png"
#	deleted:    "docs/Produtos/VittA_Natural/VittA_Natural_C\303\243es_Adultos_Carne_e_Arroz.png"
#	deleted:    "docs/Produtos/VittA_Natural/VittA_Natural_C\303\243es_Adultos_Frango_e_Arroz.png"
#	deleted:    "docs/Produtos/VittA_Natural/VittA_Natural_C\303\243es_Adultos_Porte_Pequeno_Carne_e_Arroz.png"
#	deleted:    "docs/Produtos/VittA_Natural/VittA_Natural_C\303\243es_Adultos_Porte_Pequeno_Frango_e_Arroz.png"
#	deleted:    "docs/Produtos/VittA_Natural/VittA_Natural_C\303\243es_Filhotes_Carne_e_Arroz.png"
#	deleted:    "docs/Produtos/VittA_Natural/VittA_Natural_C\303\243es_Filhotes_Porte_Pequeno_Frango_e_Arroz.png"
#	deleted:    "docs/Produtos/VittA_Natural/Vitta_Natural_C\303\243es_Filhotes_Frango_e_Arroz.png"
#	deleted:    docs/Produtos/special Cat/Special Cat_Adultos_Mix.png
#	deleted:    docs/Produtos/special Cat/Special Cat_Castrados_Mix.png
#	deleted:    docs/Produtos/special Cat/Special Cat_Ultralife_Adultos Frango.png
#	deleted:    "docs/Produtos/special Cat/Special Cat_Ultralife_Adultos Salm\303\243o.png"
#	deleted:    docs/Produtos/special Cat/Special Cat_Ultralife_Castrados Frango.png
#	deleted:    "docs/Produtos/special Cat/Special Cat_Ultralife_Castrados10+Salm\303\243o.png"
#	deleted:    "docs/Produtos/special Cat/Special Cat_Ultralife_Filhotes Salm\303\243o.png"
#	deleted:    docs/Promocao/promo1.jpeg
#	deleted:    docs/Promocao/promo12.jpeg
#	deleted:    docs/Promocao/promo14.jpeg
#	deleted:    docs/Promocao/promo15.jpeg
#	deleted:    docs/Promocao/promo16.jpeg
#	deleted:    docs/Promocao/promo2.jpeg
#	deleted:    docs/Promocao/promo3.jpeg
#	deleted:    docs/Promocao/promo4.jpeg
#	deleted:    docs/Promocao/promo5.jpeg
#	deleted:    docs/Promocao/promo6.jpeg
#	deleted:    docs/Promocao/promo7.jpeg
#	deleted:    docs/Promocao/promo8.jpeg
#	deleted:    docs/Promocao/promo9.jpeg
#	deleted:    docs/_next/static/chunks/117-0810fe27365af366.js
#	deleted:    docs/_next/static/chunks/509-a197abfdf098d741.js
#	deleted:    docs/_next/static/chunks/933-10b59ccea420cd4b.js
#	deleted:    docs/_next/static/chunks/app/(main)/layout-fcec5cd19c4e2251.js
#	deleted:    docs/_next/static/chunks/app/(main)/page-d11974a48f1bdc69.js
#	deleted:    docs/_next/static/chunks/app/(main)/produtos/page-691e0e6e9a60b78b.js
#	deleted:    docs/_next/static/chunks/app/(main)/sobre-nos/page-fe49d24a3b7bf0a5.js
#	deleted:    docs/_next/static/chunks/app/_not-found/page-990f8e70efc1a263.js
#	deleted:    docs/_next/static/chunks/app/admin/produtos/page-d076f906018554db.js
#	deleted:    docs/_next/static/chunks/app/layout-1ca9a61e708a6667.js
#	deleted:    docs/_next/static/chunks/app/layout.js
#	deleted:    docs/_next/static/chunks/app/linktree/layout-1781e1dfbf109726.js
#	deleted:    docs/_next/static/chunks/app/linktree/page-21bf61bcc4d8b78e.js
#	deleted:    docs/_next/static/chunks/fd9d1056-fffa46e3e31c51f3.js
#	deleted:    docs/_next/static/chunks/framework-f66176bb897dc684.js
#	deleted:    docs/_next/static/chunks/main-1b902654f0f1e874.js
#	deleted:    docs/_next/static/chunks/main-app-9bc05279b996a38b.js
#	deleted:    docs/_next/static/chunks/pages/_app-72b849fbd24ac258.js
#	deleted:    docs/_next/static/chunks/pages/_error-7ba65e1336b92748.js
#	deleted:    docs/_next/static/chunks/polyfills-42372ed130431b0a.js
#	deleted:    docs/_next/static/chunks/webpack-0ed9c761f2df0276.js
#	deleted:    docs/_next/static/chunks/webpack.js
#	deleted:    docs/_next/static/css/4eece9108cd4979c.css
#	deleted:    docs/_next/static/css/68203812ce229a20.css
#	deleted:    docs/_next/static/css/b8e302d41b271438.css
#	deleted:    docs/_next/static/css/d6e634b6bd23fcbf.css
#	deleted:    docs/_next/static/css/f5a1f91594c1778d.css
#	deleted:    docs/_next/static/development/_buildManifest.js
#	deleted:    docs/_next/static/development/_ssgManifest.js
#	deleted:    docs/_next/static/sJWrGWLwUARx1sgnQRhjf/_buildManifest.js
#	deleted:    docs/_next/static/sJWrGWLwUARx1sgnQRhjf/_ssgManifest.js
#	deleted:    docs/_next/static/webpack/6d66ebf0faade85b.webpack.hot-update.json
#	deleted:    docs/_next/static/webpack/app/layout.6d66ebf0faade85b.hot-update.js
#	deleted:    docs/_next/static/webpack/webpack.6d66ebf0faade85b.hot-update.js
#	deleted:    docs/admin/produtos.html
#	deleted:    docs/admin/produtos.txt
#	deleted:    docs/avatar-whatsapp.jpg
#	deleted:    docs/bg-chat-tile-dark.png
#	deleted:    docs/bg-chat-tile-light.png
#	deleted:    docs/fachada.jpg
#	deleted:    docs/ico/facebook.svg
#	deleted:    docs/ico/google-maps.svg
#	deleted:    docs/ico/instagram.svg
#	deleted:    docs/ico/internet.svg
#	deleted:    docs/ico/phone-receiver.svg
#	deleted:    docs/ico/star-struck.svg
#	deleted:    docs/ico/stopwatch-time.svg
#	deleted:    docs/ico/tiktok.svg
#	deleted:    docs/ico/whatsapp.svg
#	deleted:    docs/index.html
#	deleted:    docs/index.txt
#	deleted:    docs/linktree.html
#	deleted:    docs/linktree.txt
#	deleted:    docs/logo roda pe.png
#	deleted:    docs/logo.svg
#	deleted:    docs/produtos.html
#	deleted:    docs/produtos.txt
#	deleted:    docs/sobre-nos.html
#	deleted:    docs/sobre-nos.txt
#	deleted:    docs/whatsapp-notification.mp3
#	deleted:    docs_backup/.nojekyll
#	deleted:    docs_backup/404.html
#	deleted:    docs_backup/Fotos/foto (1).jpg
#	deleted:    docs_backup/Fotos/foto (10).jpg
#	deleted:    docs_backup/Fotos/foto (11).jpg
#	deleted:    docs_backup/Fotos/foto (13).jpg
#	deleted:    docs_backup/Fotos/foto (15).jpg
#	deleted:    docs_backup/Fotos/foto (17).jpg
#	deleted:    docs_backup/Fotos/foto (19).jpg
#	deleted:    docs_backup/Fotos/foto (2).jpg
#	deleted:    docs_backup/Fotos/foto (20).jpg
#	deleted:    docs_backup/Fotos/foto (22).jpg
#	deleted:    docs_backup/Fotos/foto (25).jpg
#	deleted:    docs_backup/Fotos/foto (26).jpg
#	deleted:    docs_backup/Fotos/foto (3).jpg
#	deleted:    docs_backup/Fotos/foto (33).jpg
#	deleted:    docs_backup/Fotos/foto (34).jpg
#	deleted:    docs_backup/Fotos/foto (35).jpg
#	deleted:    docs_backup/Fotos/foto (36).jpg
#	deleted:    docs_backup/Fotos/foto (38).jpg
#	deleted:    docs_backup/Fotos/foto (40).jpg
#	deleted:    docs_backup/Fotos/foto (41).jpg
#	deleted:    docs_backup/Fotos/foto (42).jpg
#	deleted:    docs_backup/Fotos/foto (44).jpg
#	deleted:    docs_backup/Fotos/foto (46).jpg
#	deleted:    docs_backup/Fotos/foto (48).jpg
#	deleted:    docs_backup/Fotos/foto (49).jpg
#	deleted:    docs_backup/Fotos/foto (5).jpg
#	deleted:    docs_backup/Fotos/foto (51).jpg
#	deleted:    docs_backup/Fotos/foto (53).jpg
#	deleted:    docs_backup/Fotos/foto (55).jpg
#	deleted:    docs_backup/Fotos/foto (56).jpg
#	deleted:    docs_backup/Fotos/foto (58).jpg
#	deleted:    docs_backup/Fotos/foto (59).jpg
#	deleted:    docs_backup/Fotos/foto (6).jpg
#	deleted:    docs_backup/Fotos/foto (60).jpg
#	deleted:    docs_backup/Fotos/foto (61).jpg
#	deleted:    docs_backup/Fotos/foto (62).jpg
#	deleted:    docs_backup/Fotos/foto (63).jpg
#	deleted:    docs_backup/Fotos/foto (64).jpg
#	deleted:    docs_backup/Fotos/foto (65).jpg
#	deleted:    docs_backup/Fotos/foto (66).jpg
#	deleted:    docs_backup/Fotos/foto (67).jpg
#	deleted:    docs_backup/Fotos/foto (69).jpg
#	deleted:    docs_backup/Fotos/foto (7).jpg
#	deleted:    docs_backup/Fotos/foto (71).jpg
#	deleted:    docs_backup/Fotos/foto (73).jpg
#	deleted:    docs_backup/Fotos/foto (74).jpg
#	deleted:    docs_backup/Fotos/foto (75).jpg
#	deleted:    docs_backup/Fotos/foto (76).jpg
#	deleted:    docs_backup/Fotos/foto (77).jpg
#	deleted:    docs_backup/Fotos/foto (79).jpg
#	deleted:    docs_backup/Fotos/foto (80).jpg
#	deleted:    docs_backup/Fotos/foto (82).jpg
#	deleted:    docs_backup/Fotos/foto (83).jpg
#	deleted:    docs_backup/Fotos/foto (84).jpg
#	deleted:    docs_backup/Fotos/foto (86).jpg
#	deleted:    docs_backup/Fotos/foto (87).jpg
#	deleted:    docs_backup/Fotos/foto (88).jpg
#	deleted:    docs_backup/Fotos/foto (89).jpg
#	deleted:    docs_backup/Fotos/foto (9).jpg
#	deleted:    docs_backup/Fotos/foto (90).jpg
#	deleted:    docs_backup/Fotos/foto (91).jpg
#	deleted:    docs_backup/Fotos/foto (92).jpg
#	deleted:    docs_backup/Fotos/foto (94).jpg
#	deleted:    docs_backup/MD1_4003 (1).jpg
#	deleted:    "docs_backup/Produtos/Besser/Besser_Natural_C\303\243es_Adultos.png"
#	deleted:    "docs_backup/Produtos/Besser/Besser_Natural_C\303\243es_Adultos_de_Ra\303\247as_Pequenas_e_M\303\251dias.png"
#	deleted:    "docs_backup/Produtos/Besser/Besser_Natural_C\303\243es_Filhotes.png"
#	deleted:    docs_backup/Produtos/Besser/Besser_Natural_Gatos_Filhotes.png
#	deleted:    "docs_backup/Produtos/Bionatural/Bionatural_Adultos_RA\303\207AS M\303\211DIAS E GRANDES_Frango.png"
#	deleted:    "docs_backup/Produtos/Bionatural/Bionatural_Adultos_RA\303\207AS PEQUENAS_Cordeiro.png"
#	deleted:    "docs_backup/Produtos/Bionatural/Bionatural_Adultos_RA\303\207AS PEQUENAS_Frango.png"
#	deleted:    docs_backup/Produtos/Bionatural/Bionatural_Adultos_salmao.png
#	deleted:    docs_backup/Produtos/Bionatural/Bionatural_Castrados_Frango.png
#	deleted:    docs_backup/Produtos/Bionatural/Bionatural_Castrados_Salmao.png
#	deleted:    "docs_backup/Produtos/Bionatural/Bionatural_Junior_RA\303\207AS PEQUENAS_Frango.png"
#	deleted:    "docs_backup/Produtos/Bionatural/Bionatural_RA\303\207AS M\303\211DIAS E GRANDES_Cordeiro.png"
#	deleted:    "docs_backup/Produtos/Bionatural/Bionatural_Senior_RA\303\207AS PEQUENAS_Frango.png"
#	deleted:    "docs_backup/Produtos/Finotrato/Finotrato_Bifinho_Carne_-_C\303\243es.png"
#	deleted:    "docs_backup/Produtos/Finotrato/Finotrato_Bifinho_Frango_-_C\303\243es.png"
#	deleted:    docs_backup/Produtos/Finotrato/Finotrato_Bio-Litter.png
#	deleted:    docs_backup/Produtos/Finotrato/Finotrato_Cat_Nuggets_Sabor_Carne_-_Gatos_Adultos.png
#	deleted:    docs_backup/Produtos/Finotrato/Finotrato_Cat_Stix_Atum.png
#	deleted:    docs_backup/Produtos/Finotrato/Finotrato_Cat_Stix_Carne.png
#	deleted:    docs_backup/Produtos/Finotrato/Finotrato_Cat_Stix_Frango.png
#	deleted:    "docs_backup/Produtos/Finotrato/Finotrato_Cat_Stix_Salm\303\243o.png"
#	deleted:    docs_backup/Produtos/Finotrato/Finotrato_Dog_Stix_Carne.png
#	deleted:    docs_backup/Produtos/Finotrato/Finotrato_Dog_Stix_Frango.png
#	deleted:    "docs_backup/Produtos/Finotrato/Finotrato_Gold_C\303\243es_Adultos_de_Ra\303\247as_Mini_e_Pequenas.png"
#	deleted:    "docs_backup/Produtos/Finotrato/Finotrato_Gold_C\303\243es_Adultos_de_Ra\303\247as_M\303\251dias_e_Grandes.png"
#	deleted:    "docs_backup/Produtos/Finotrato/Finotrato_Gold_C\303\243es_Filhotes_de_Ra\303\247as_Mini_e_Pequenas.png"
#	deleted:    "docs_backup/Produtos/Finotrato/Finotrato_Gold_C\303\243es_Filhotes_de_Ra\303\247as_M\303\251dias_e_Grandes.png"
#	deleted:    "docs_backup/Produtos/Finotrato/Finotrato_Gold_Salm\303\243o_e_Frango_Gatos_Adultos.png"
#	deleted:    "docs_backup/Produtos/Finotrato/Finotrato_Gold_Salm\303\243o_e_Frango_Gatos_Castrados.png"
#	deleted:    "docs_backup/Produtos/Finotrato/Finotrato_Gold_Salm\303\243o_e_Frango_Gatos_Filhotes.png"
#	deleted:    "docs_backup/Produtos/Finotrato/Finotrato_Life_Active_Frango_e_Arroz_C\303\243es_Adultos.png"
#	deleted:    "docs_backup/Produtos/Finotrato/Finotrato_Life_Active_Frango_e_Arroz_C\303\243es_Filhotes.png"
#	deleted:    "docs_backup/Produtos/Finotrato/Finotrato_Life_Light_Frango_e_Arroz_C\303\243es_Adultos_de_Ra\303\247as_Grandes.png"
#	deleted:    "docs_backup/Produtos/Finotrato/Finotrato_Life_Light_Frango_e_Arroz_C\303\243es_Adultos_de_Ra\303\247as_Pequenas_e_M\303\251dias.png"
#	deleted:    "docs_backup/Produtos/Finotrato/Finotrato_Life_Sensitive_Cordeiro_e_Arroz_C\303\243es_Adultos_de_Ra\303\247as_Pequenas_e_M\303\251dias.png"
#	deleted:    "docs_backup/Produtos/Finotrato/Finotrato_Life_S\303\252nior_Frango_e_Arroz_C\303\243es_Senis_de_Ra\303\247as_Grandes.png"
#	deleted:    "docs_backup/Produtos/Finotrato/Finotrato_Life_S\303\252nior_Frango_e_Arroz_C\303\243es_Senis_de_Ra\303\247as_Pequenas_e_M\303\251dias.png"
#	deleted:    "docs_backup/Produtos/Finotrato/Finotrato_Nature_C\303\243es_Adultos_de_Ra\303\247as_Grandes.png"
#	deleted:    "docs_backup/Produtos/Finotrato/Finotrato_Nature_C\303\243es_Adultos_de_Ra\303\247as_Pequenas_e_M\303\251dias.png"
#	deleted:    "docs_backup/Produtos/Finotrato/Finotrato_Nature_C\303\243es_Filhotes_de_Ra\303\247as_Pequenas_e_M\303\251dias.png"
#	deleted:    "docs_backup/Produtos/Finotrato/Finotrato_Pat\303\252_Carne_-_C\303\243es_Adultos.png"
#	deleted:    "docs_backup/Produtos/Finotrato/Finotrato_Pat\303\252_Carne_-_C\303\243es_Filhotes.png"
#	deleted:    "docs_backup/Produtos/Finotrato/Finotrato_Prime_Carne_e_Arroz_C\303\243es_Adultos_de_Ra\303\247as_Grandes.png"
#	deleted:    "docs_backup/Produtos/Finotrato/Finotrato_Prime_Carne_e_Arroz_C\303\243es_Adultos_de_Ra\303\247as_Pequenas_e_M\303\251dias.png"
#	deleted:    "docs_backup/Produtos/Finotrato/Finotrato_Prime_Frango_e_Arroz_C\303\243es_Adultos_de_Ra\303\247as_Grandes.png"
#	deleted:    "docs_backup/Produtos/Finotrato/Finotrato_Prime_Frango_e_Arroz_C\303\243es_Adultos_de_Ra\303\247as_Pequenas_e_M\303\251dias.png"
#	deleted:    "docs_backup/Produtos/Finotrato/Finotrato_Prime_Frango_e_Arroz_C\303\243es_Filhotes_de_Ra\303\247as_Pequenas_e_M\303\251dias.png"
#	deleted:    "docs_backup/Produtos/Finotrato/Finotrato_Select_C\303\243es_Adultos.png"
#	deleted:    "docs_backup/Produtos/Finotrato/Finotrato_Select_C\303\243es_Adultos_Ra\303\247as_Pequenas_e_M\303\251dias.png"
#	deleted:    docs_backup/Produtos/Finotrato/Finotrato_Select_Gatos_Adultos.png
#	deleted:    "docs_backup/Produtos/F\303\263rmula Natural/F\303\263rmula Natural Dog Biscuits Batata Doce, Banana e Linha\303\247a Pequeno Porte.png"
#	deleted:    "docs_backup/Produtos/F\303\263rmula Natural/F\303\263rmula Natural Life C\303\243es Adultos Portes M\303\251dio e Grande.png"
#	deleted:    "docs_backup/Produtos/F\303\263rmula Natural/F\303\263rmula Natural Life C\303\243es Filhotes Portes Mini e Pequeno.png"
#	deleted:    "docs_backup/Produtos/F\303\263rmula Natural/F\303\263rmula Natural Life C\303\243o S\303\252nior Portes Mini e Pequeno.png"
#	deleted:    "docs_backup/Produtos/F\303\263rmula Natural/F\303\263rmula Natural Life C\303\243o S\303\252nior Portes M\303\251dio e Grande.png"
#	deleted:    "docs_backup/Produtos/F\303\263rmula Natural/F\303\263rmula Natural Pro C\303\243es Adultos Portes Mini e Pequeno.png"
#	deleted:    "docs_backup/Produtos/F\303\263rmula Natural/F\303\263rmula Natural Pro C\303\243es Adultos Portes M\303\251dio e Grande.png"
#	deleted:    "docs_backup/Produtos/F\303\263rmula Natural/F\303\263rmula Natural Pro C\303\243es Filhotes Portes M\303\251dio e Grande.png"
#	deleted:    "docs_backup/Produtos/F\303\263rmula Natural/F\303\263rmula Natural Receitas Caseiras C\303\243es Adultos Cordeiro com Batata e Hortel\303\243.png"
#	deleted:    "docs_backup/Produtos/F\303\263rmula Natural/F\303\263rmula Natural Receitas Caseiras C\303\243es Adultos Picadinho de Carne com Ab\303\263bora e Mandioquinha.png"
#	deleted:    "docs_backup/Produtos/F\303\263rmula Natural/F\303\263rmula Natural Receitas Caseiras Gatos Adultos Carne.png"
#	deleted:    "docs_backup/Produtos/F\303\263rmula Natural/F\303\263rmula Natural Receitas Caseiras Gatos Adultos Salm\303\243o com Maracuj\303\241 ao Molho.png"
#	deleted:    "docs_backup/Produtos/F\303\263rmula Natural/F\303\263rmula Natural Snacks Antiestresse C\303\243es Adultos Portes Mini e Pequeno.png"
#	deleted:    "docs_backup/Produtos/F\303\263rmula Natural/F\303\263rmula Natural Snacks Antiestresse C\303\243es Adultos Portes M\303\251dio e Grande.png"
#	deleted:    "docs_backup/Produtos/F\303\263rmula Natural/F\303\263rmula Natural Snacks Vitalidade C\303\243es Adultos Portes Mini e Pequeno.png"
#	deleted:    "docs_backup/Produtos/F\303\263rmula Natural/F\303\263rmula Natural Vet Care Renal Gatos \303\232mido.png"
#	deleted:    "docs_backup/Produtos/F\303\263rmula Natural/F\303\263rmula Natural-LIFE_ADULTOS_MINI-E-PEQUENO.png"
#	deleted:    "docs_backup/Produtos/F\303\263rmula Natural/F\303\263rmula Natural_LIFE_CAES_FILHOTES Portes M\303\251dio e Grande.png"
#	deleted:    "docs_backup/Produtos/F\303\263rmula Natural/F\303\263rmula_Natural_FRESH_MEAT_CUIDADO_ORAL_Portes_Mini_e_Pequeno.png"
#	deleted:    "docs_backup/Produtos/F\303\263rmula Natural/F\303\263rmula_Natural_Fresh_Meat_Controle_De_Peso_C\303\243es_Adultos_Portes_Mini_e_Pequeno.png"
#	deleted:    "docs_backup/Produtos/F\303\263rmula Natural/F\303\263rmula_Natural_Fresh_Meat_C\303\243es_Adultos_Porte_M\303\251dio.png"
#	deleted:    "docs_backup/Produtos/F\303\263rmula Natural/F\303\263rmula_Natural_Fresh_Meat_C\303\243es_Adultos_Portes_Mini_e_Pequeno....png"
#	deleted:    "docs_backup/Produtos/F\303\263rmula Natural/F\303\263rmula_Natural_Fresh_Meat_C\303\243es_Filhotes_Portes_Mini_e_Pequeno....png"
#	deleted:    "docs_backup/Produtos/F\303\263rmula Natural/F\303\263rmula_Natural_Fresh_Meat_C\303\243o_S\303\252nior_Portes_Mini_e_Pequeno.png"
#	deleted:    "docs_backup/Produtos/F\303\263rmula Natural/F\303\263rmula_Natural_Fresh_Meat_C\303\243o_S\303\252nior_Portes_M\303\251dio_e_Grande.png"
#	deleted:    "docs_backup/Produtos/F\303\263rmula Natural/F\303\263rmula_Natural_Fresh_Meat_Gatos_Adultos_Frango.png"
#	deleted:    "docs_backup/Produtos/F\303\263rmula Natural/F\303\263rmula_Natural_Fresh_Meat_Gatos_Castrados_Carne.png"
#	deleted:    "docs_backup/Produtos/F\303\263rmula Natural/F\303\263rmula_Natural_Fresh_Meat_Gatos_Castrados_Salm\303\243o.png"
#	deleted:    "docs_backup/Produtos/F\303\263rmula Natural/F\303\263rmula_Natural_Fresh_Meat_Gatos_S\303\252nior.png"
#	deleted:    "docs_backup/Produtos/F\303\263rmula Natural/F\303\263rmula_Natural_Fresh_Meat_Sensitive_C\303\243es_Adultos_Portes_Mini_e_Pequeno.png"
#	deleted:    "docs_backup/Produtos/F\303\263rmula Natural/F\303\263rmula_Natural_Life_Gatos_Castrados_Sabor_Frango.png"
#	deleted:    "docs_backup/Produtos/GoldeN/GoldeN_Formula_C\303\243es_Adultos_Porte_Pequeno_Carne_e_Arroz.png"
#	deleted:    "docs_backup/Produtos/GoldeN/GoldeN_Formula_C\303\243es_Adultos_Porte_Pequeno_Frango_&_Arroz.png"
#	deleted:    "docs_backup/Produtos/GoldeN/GoldeN_Formula_C\303\243es_Adultos_Porte_Pequeno_Frango_&_Arroz_Light.png"
#	deleted:    "docs_backup/Produtos/GoldeN/GoldeN_Formula_C\303\243es_Adultos_Porte_Pequeno_Peru_&_Arroz.png"
#	deleted:    "docs_backup/Produtos/GoldeN/GoldeN_Formula_C\303\243es_Filhotes_Carne_&_Arroz.png"
#	deleted:    "docs_backup/Produtos/GoldeN/GoldeN_Formula_C\303\243es_Filhotes_Frango_&_Arroz.png"
#	deleted:    "docs_backup/Produtos/GoldeN/GoldeN_Formula_C\303\243es_Filhotes_Porte_Pequeno_Frango_&_Arroz.png"
#	deleted:    "docs_backup/Produtos/GoldeN/GoldeN_Formula_C\303\243es_Seniores_Porte_Pequeno_Frango_e_Arroz_Mini_Bits.png"
#	deleted:    docs_backup/Produtos/GoldeN/GoldeN_Gatos_Adultos_Carne.png
#	deleted:    docs_backup/Produtos/GoldeN/GoldeN_Gatos_Adultos_Frango.png
#	deleted:    "docs_backup/Produtos/GoldeN/GoldeN_Gatos_Adultos_Salm\303\243o.png"
#	deleted:    docs_backup/Produtos/GoldeN/GoldeN_Gatos_Castrados_Carne.png
#	deleted:    docs_backup/Produtos/GoldeN/GoldeN_Gatos_Castrados_Frango.png
#	deleted:    "docs_backup/Produtos/GoldeN/GoldeN_Gatos_Castrados_Salm\303\243o.png"
#	deleted:    docs_backup/Produtos/GoldeN/GoldeN_Gatos_Filhotes_Frango.png
#	deleted:    "docs_backup/Produtos/GoldeN/GoldeN_Special_C\303\243es_Adultos_Porte_Pequeno_Frango_e_Carne.png"
#	deleted:    "docs_backup/Produtos/GoldeN/GoldeN_Special_C\303\243es_Filhotes_Porte_Pequeno_Frango_e_Carne.png"
#	deleted:    "docs_backup/Produtos/Magnus/Magnus_Bifinhos_C\303\243es_Sabor_Carne.png"
#	deleted:    "docs_backup/Produtos/Magnus/Magnus_Bifinhos_C\303\243es_Sabor_Frango.png"
#	deleted:    "docs_backup/Produtos/Magnus/Magnus_Biscoito_C\303\243es_Adultos_Pequeno_Porte.png"
#	deleted:    "docs_backup/Produtos/Magnus/Magnus_Biscoito_Mix_C\303\243es_Adultos.png"
#	deleted:    "docs_backup/Produtos/Magnus/Magnus_Todo_Dia_C\303\243es_Adultos_Pequeno_Porte_Sabor_Carne_e_Frango.png"
#	deleted:    "docs_backup/Produtos/Magnus/Magnus_Todo_Dia_C\303\243es_Adultos_Sabor_Carne.png"
#	deleted:    "docs_backup/Produtos/Magnus/Magnus_Todo_Dia_C\303\243es_Filhotes_Sabor_Carne.png"
#	deleted:    docs_backup/Produtos/Marca/Besser.png
#	deleted:    docs_backup/Produtos/Marca/Bionatural.png
#	deleted:    docs_backup/Produtos/Marca/Finotrato.png
#	deleted:    docs_backup/Produtos/Marca/MAGNUS.png
#	deleted:    docs_backup/Produtos/Marca/ORIGENS.png
#	deleted:    docs_backup/Produtos/Marca/PremieR_Nattu.png
#	deleted:    docs_backup/Produtos/Marca/Premier.png
#	deleted:    docs_backup/Produtos/Marca/SpecialCat.png
#	deleted:    docs_backup/Produtos/Marca/SpecialDog.png
#	deleted:    docs_backup/Produtos/Marca/VittA_Natural.png
#	deleted:    docs_backup/Produtos/Marca/formlanatural.png
#	deleted:    docs_backup/Produtos/Marca/golden.png
#	deleted:    docs_backup/Produtos/Marca/hills.avif
#	deleted:    docs_backup/Produtos/Marca/n&d.png
#	deleted:    docs_backup/Produtos/N&D/N&D TROPICAL SELECTION CANINE CORDEIRO ADULT MINI.png
#	deleted:    docs_backup/Produtos/N&D/N&D TROPICAL SELECTION CANINE CORDEIRO PUPPY MINI.png
#	deleted:    docs_backup/Produtos/N&D/N&D TROPICAL SELECTION CANINE FRANGO ADULT MINI.png
#	deleted:    "docs_backup/Produtos/N&D/N&D TROPICAL SELECTION CANINE SALM\303\203O ADULT MINI.png"
#	deleted:    "docs_backup/Produtos/N&D/N&D TROPICAL SELECTION CANINE SU\303\215NO ADULT MINI.png"
#	deleted:    "docs_backup/Produtos/N&D/N&D TROPICAL SELECTION CANINE SU\303\215NO PUPPY MINI.png"
#	deleted:    docs_backup/Produtos/N&D/N&D_cao_White Adult Mini - Merluza, Spirulina e Erva Doce.png
#	deleted:    docs_backup/Produtos/N&D/n&d_Ancestral_Canine_Cordeiro_Adulto_Mini.png
#	deleted:    "docs_backup/Produtos/N&D/n&d_Gatos_Til\303\241pia, Spirulina e Goji Berry Adult.png"
#	deleted:    docs_backup/Produtos/N&D/n&d_cao-white-puppy-mini.png
#	deleted:    docs_backup/Produtos/N&D/n&d_cao_ANCESTRAL_ADULT_MEDIUM.png
#	deleted:    docs_backup/Produtos/N&D/n&d_gatos_Frango Adult Castrados.png
#	deleted:    "docs_backup/Produtos/Origens/Origens Class C\303\243es Adultos Portes Mini e Pequeno.png"
#	deleted:    "docs_backup/Produtos/Origens/Origens Dental C\303\243es.png"
#	deleted:    "docs_backup/Produtos/Origens/Origens Energy C\303\243es Adultos Sabor Frango e Cereais.png"
#	deleted:    docs_backup/Produtos/Origens/Origens Petiscos Naturais Traqueia Bovina.png
#	deleted:    "docs_backup/Produtos/Origens/Origens Ra\303\247as Espec\303\255ficas C\303\243es Adultos Shih Tzu e Lhasa Apso.png"
#	deleted:    "docs_backup/Produtos/Origens/Origens Ra\303\247as Espec\303\255ficas C\303\243es Adultos Yorkshire, Malt\303\252s e Spitz.png"
#	deleted:    "docs_backup/Produtos/Origens/Origens_C\303\243es_Adultos_Portes_Mini_e_Pequeno_Sabor_Carne.png"
#	deleted:    "docs_backup/Produtos/Origens/Origens_C\303\243es_Adultos_Portes_Mini_e_Pequeno_Sabor_Frango.png"
#	deleted:    "docs_backup/Produtos/Origens/Origens_C\303\243es_Adultos_Sabor_Carne_e_Cereais.png"
#	deleted:    "docs_backup/Produtos/Origens/Origens_C\303\243es_S\303\252nior_Portes_Mini_e_Pequeno.png"
#	deleted:    docs_backup/Produtos/Origens/Origens_Premium_Especial_Gatos_Adultos_Sabor_Carne.png
#	deleted:    docs_backup/Produtos/Origens/Origens_Premium_Especial_Gatos_Adultos_Sabor_Frango.png
#	deleted:    docs_backup/Produtos/Origens/Origens_Premium_Especial_Gatos_Castrados_Sabor_Carne.png
#	deleted:    docs_backup/Produtos/Origens/Origens_Premium_Especial_Gatos_Castrados_Sabor_Frango.png
#	deleted:    "docs_backup/Produtos/Origens/Origens_Premium_Especial_Gatos_Castrados_Sabor_Salm\303\243o.png"
#	deleted:    docs_backup/Produtos/Origens/Origens_Premium_Especial_Gatos_Filhotes_Sabor_Frango_e_Cereais.png
#	deleted:    "docs_backup/Produtos/PremieR/PremieR_Ambientes_Internos_C\303\243es_Adultos_Porte_Pequeno_Frango_e_Salm\303\243o.png"
#	deleted:    "docs_backup/Produtos/PremieR/PremieR_Ambientes_Internos_C\303\243es_Adultos_Porte_Pequeno_Frango_e_Salm\303\243o_Castrados.png"
#	deleted:    "docs_backup/Produtos/PremieR/PremieR_Ambientes_Internos_C\303\243es_Adultos_Porte_Pequeno_Frango_e_Salm\303\243o_Light.png"
#	deleted:    "docs_backup/Produtos/PremieR/PremieR_Ambientes_Internos_C\303\243es_Adultos_Porte_Pequeno_Frango_e_Salm\303\243o_Senior.png"
#	deleted:    "docs_backup/Produtos/PremieR/PremieR_Ambientes_Internos_C\303\243es_Adultos_Porte_Pequeno_Salm\303\243o_Dermacare.png"
#	deleted:    "docs_backup/Produtos/PremieR/PremieR_Ambientes_Internos_C\303\243es_Filhotes_Porte_Pequeno_Frango_e_Salm\303\243o.png"
#	deleted:    "docs_backup/Produtos/PremieR/PremieR_Formula_C\303\243es_Adultos_Porte_M\303\251dio_Frango.png"
#	deleted:    "docs_backup/Produtos/PremieR/PremieR_Formula_C\303\243es_Adultos_Porte_Pequeno_Frango.png"
#	deleted:    "docs_backup/Produtos/PremieR/PremieR_Formula_C\303\243es_Filhotes_Porte_Pequeno_Frango.png"
#	deleted:    "docs_backup/Produtos/PremieR/PremieR_Ra\303\247as_Espec\303\255ficas_Bulldog_Franc\303\252s_Adultos_Porte_Pequeno_Frango.png"
#	deleted:    "docs_backup/Produtos/PremieR/PremieR_Ra\303\247as_Espec\303\255ficas_Bulldog_Ingl\303\252s_Adultos_Porte_M\303\251dio_Frango.png"
#	deleted:    "docs_backup/Produtos/PremieR/PremieR_Ra\303\247as_Espec\303\255ficas_Filhotes_Frango_Bulldog_Franc\303\252s.png"
#	deleted:    "docs_backup/Produtos/PremieR/PremieR_Ra\303\247as_Espec\303\255ficas_Shih_Tzu_Adultos_Porte_Pequeno_Frango.png"
#	deleted:    "docs_backup/Produtos/PremieR/PremieR_Ra\303\247as_Espec\303\255ficas_Shih_Tzu_Filhotes_Porte_Pequeno_Frango.png"
#	deleted:    "docs_backup/Produtos/PremieR/PremieR_Ra\303\247as_Espec\303\255ficas_Spitz_Alem\303\243o_Adulto_Porte_Pequeno_Frango.png"
#	deleted:    "docs_backup/Produtos/PremieR/PremieR_Ra\303\247as_Espec\303\255ficas_Spitz_Alem\303\243o_Filhotes_Porte_Pequeno_Frango.png"
#	deleted:    "docs_backup/Produtos/PremieR/PremieR_Ra\303\247as_Espec\303\255ficas_Yorkshire_Adultos_Porte_Pequeno_Frango.png"
#	deleted:    "docs_backup/Produtos/PremieR/PremieR_Ra\303\247as_Espec\303\255ficas_Yorkshire_Filhotes_Porte_Pequeno_Frango.png"
#	deleted:    "docs_backup/Produtos/PremieR_Nattu/PremieR_Nattu_C\303\243es_Adultos_Porte_Pequeno_Frango,_Ab\303\263bora,_Br\303\263colis,_Quinoa_&_Blueberry.png"
#	deleted:    "docs_backup/Produtos/PremieR_Nattu/PremieR_Nattu_C\303\243es_Adultos_Porte_Pequeno_Frango,_Mandioca,_Beterraba,_Linha\303\247a_&_Cranberry.png"
#	deleted:    "docs_backup/Produtos/PremieR_Nattu/PremieR_Nattu_C\303\243es_Adultos_Porte_Pequeno_Frango_Mandioquinha,_Espinafre,_C\303\272rcuma_&_Blackberry.png"
#	deleted:    "docs_backup/Produtos/PremieR_Nattu/PremieR_Nattu_C\303\243es_Filhotes_Porte_Pequeno_Frango,_Mandioca,_Beterraba,_Linha\303\247a_e_Cranberry.png"
#	deleted:    "docs_backup/Produtos/PremieR_Nattu/PremieR_Nattu_C\303\243es_S\303\252nior_Porte_Pequeno_Frango,_Mandioca,_Beterraba,_Linha\303\247a_&_Cranberry.png"
#	deleted:    docs_backup/Produtos/Special dog/SPECIAL DOG_Adultos_Carne.png
#	deleted:    docs_backup/Produtos/Special dog/SPECIAL DOG_Adultos_Pequeno Porte_Carne.png
#	deleted:    docs_backup/Produtos/Special dog/Special Dog-Sacaria-Performance-Junior-.png
#	deleted:    "docs_backup/Produtos/Special dog/Special Dog_Ultralife_Adultos RA\303\207AS M\303\211DIAS E GRANDES.png"
#	deleted:    "docs_backup/Produtos/Special dog/Special Dog_Ultralife_Adultos RA\303\207AS PEQUENAS.png"
#	deleted:    "docs_backup/Produtos/Special dog/Special Dog_Ultralife_Adultos RA\303\207AS PEQUENAS_Cordeiro.png"
#	deleted:    "docs_backup/Produtos/Special dog/Special Dog_Ultralife_Junior RA\303\207AS M\303\211DIAS E GRANDES.png"
#	deleted:    "docs_backup/Produtos/Special dog/Special Dog_Ultralife_Junior RA\303\207AS PEQUENAS.png"
#	deleted:    "docs_backup/Produtos/Special dog/Special Dog_Ultralife_Light RA\303\207AS M\303\211DIAS E GRANDES.png"
#	deleted:    "docs_backup/Produtos/Special dog/Special Dog_Ultralife_Light RA\303\207AS PEQUENAS.png"
#	deleted:    docs_backup/Produtos/Special dog/Special Dog_Ultralife_Performance_.png
#	deleted:    "docs_backup/Produtos/Special dog/Special Dog_Ultralife_Senior RA\303\207AS M\303\211DIAS E GRANDES.png"
#	deleted:    "docs_backup/Produtos/Special dog/Special Dog_Ultralife_Senior RA\303\207AS PEQUENAS.png"
#	deleted:    "docs_backup/Produtos/VittA_Natural/VittA_Natural_C\303\243es_Adultos_Carne_e_Arroz.png"
#	deleted:    "docs_backup/Produtos/VittA_Natural/VittA_Natural_C\303\243es_Adultos_Frango_e_Arroz.png"
#	deleted:    "docs_backup/Produtos/VittA_Natural/VittA_Natural_C\303\243es_Adultos_Porte_Pequeno_Carne_e_Arroz.png"
#	deleted:    "docs_backup/Produtos/VittA_Natural/VittA_Natural_C\303\243es_Adultos_Porte_Pequeno_Frango_e_Arroz.png"
#	deleted:    "docs_backup/Produtos/VittA_Natural/VittA_Natural_C\303\243es_Filhotes_Carne_e_Arroz.png"
#	deleted:    "docs_backup/Produtos/VittA_Natural/VittA_Natural_C\303\243es_Filhotes_Porte_Pequeno_Frango_e_Arroz.png"
#	deleted:    "docs_backup/Produtos/VittA_Natural/Vitta_Natural_C\303\243es_Filhotes_Frango_e_Arroz.png"
#	deleted:    docs_backup/Produtos/special Cat/Special Cat_Adultos_Mix.png
#	deleted:    docs_backup/Produtos/special Cat/Special Cat_Castrados_Mix.png
#	deleted:    docs_backup/Produtos/special Cat/Special Cat_Ultralife_Adultos Frango.png
#	deleted:    "docs_backup/Produtos/special Cat/Special Cat_Ultralife_Adultos Salm\303\243o.png"
#	deleted:    docs_backup/Produtos/special Cat/Special Cat_Ultralife_Castrados Frango.png
#	deleted:    "docs_backup/Produtos/special Cat/Special Cat_Ultralife_Castrados10+Salm\303\243o.png"
#	deleted:    "docs_backup/Produtos/special Cat/Special Cat_Ultralife_Filhotes Salm\303\243o.png"
#	deleted:    docs_backup/Promocao/promo1.jpeg
#	deleted:    docs_backup/Promocao/promo12.jpeg
#	deleted:    docs_backup/Promocao/promo14.jpeg
#	deleted:    docs_backup/Promocao/promo15.jpeg
#	deleted:    docs_backup/Promocao/promo16.jpeg
#	deleted:    docs_backup/Promocao/promo2.jpeg
#	deleted:    docs_backup/Promocao/promo3.jpeg
#	deleted:    docs_backup/Promocao/promo4.jpeg
#	deleted:    docs_backup/Promocao/promo5.jpeg
#	deleted:    docs_backup/Promocao/promo6.jpeg
#	deleted:    docs_backup/Promocao/promo7.jpeg
#	deleted:    docs_backup/Promocao/promo8.jpeg
#	deleted:    docs_backup/Promocao/promo9.jpeg
#	deleted:    docs_backup/_next/static/chunks/117-0810fe27365af366.js
#	deleted:    docs_backup/_next/static/chunks/641-9c1e6b2ba8b115c6.js
#	deleted:    docs_backup/_next/static/chunks/648-85a4f199abf0273b.js
#	deleted:    docs_backup/_next/static/chunks/app/(main)/layout-0095ae60766c9e5b.js
#	deleted:    docs_backup/_next/static/chunks/app/(main)/page-482c5f28e30965b4.js
#	deleted:    docs_backup/_next/static/chunks/app/(main)/produtos/page-2f422267d848806f.js
#	deleted:    docs_backup/_next/static/chunks/app/(main)/sobre-nos/page-915aa35e9b74add2.js
#	deleted:    docs_backup/_next/static/chunks/app/_not-found/page-990f8e70efc1a263.js
#	deleted:    docs_backup/_next/static/chunks/app/admin/produtos/page-20ac725593dd0009.js
#	deleted:    docs_backup/_next/static/chunks/app/layout-23586e5d12dedb36.js
#	deleted:    docs_backup/_next/static/chunks/app/linktree/layout-1781e1dfbf109726.js
#	deleted:    docs_backup/_next/static/chunks/app/linktree/page-21bf61bcc4d8b78e.js
#	deleted:    docs_backup/_next/static/chunks/fd9d1056-fffa46e3e31c51f3.js
#	deleted:    docs_backup/_next/static/chunks/framework-f66176bb897dc684.js
#	deleted:    docs_backup/_next/static/chunks/main-1b902654f0f1e874.js
#	deleted:    docs_backup/_next/static/chunks/main-app-9bc05279b996a38b.js
#	deleted:    docs_backup/_next/static/chunks/pages/_app-72b849fbd24ac258.js
#	deleted:    docs_backup/_next/static/chunks/pages/_error-7ba65e1336b92748.js
#	deleted:    docs_backup/_next/static/chunks/polyfills-42372ed130431b0a.js
#	deleted:    docs_backup/_next/static/chunks/webpack-d00c43f81f69742b.js
#	deleted:    docs_backup/_next/static/css/4eece9108cd4979c.css
#	deleted:    docs_backup/_next/static/css/68203812ce229a20.css
#	deleted:    docs_backup/_next/static/css/6884f18bb2b05f4f.css
#	deleted:    docs_backup/_next/static/css/b8e302d41b271438.css
#	deleted:    docs_backup/_next/static/css/db650029eeeb4a43.css
#	deleted:    docs_backup/_next/static/sv6Ht7QyjzO3MPQlB8kbK/_buildManifest.js
#	deleted:    docs_backup/_next/static/sv6Ht7QyjzO3MPQlB8kbK/_ssgManifest.js
#	deleted:    docs_backup/admin/produtos.html
#	deleted:    docs_backup/admin/produtos.txt
#	deleted:    docs_backup/avatar-whatsapp.jpg
#	deleted:    docs_backup/bg-chat-tile-dark.png
#	deleted:    docs_backup/bg-chat-tile-light.png
#	deleted:    docs_backup/fachada.jpg
#	deleted:    docs_backup/ico/facebook.svg
#	deleted:    docs_backup/ico/google-maps.svg
#	deleted:    docs_backup/ico/instagram.svg
#	deleted:    docs_backup/ico/internet.svg
#	deleted:    docs_backup/ico/phone-receiver.svg
#	deleted:    docs_backup/ico/star-struck.svg
#	deleted:    docs_backup/ico/stopwatch-time.svg
#	deleted:    docs_backup/ico/tiktok.svg
#	deleted:    docs_backup/ico/whatsapp.svg
#	deleted:    docs_backup/index.html
#	deleted:    docs_backup/index.txt
#	deleted:    docs_backup/linktree.html
#	deleted:    docs_backup/linktree.txt
#	deleted:    docs_backup/logo roda pe.png
#	deleted:    docs_backup/logo.svg
#	deleted:    docs_backup/produtos.html
#	deleted:    docs_backup/produtos.txt
#	deleted:    docs_backup/sobre-nos.html
#	deleted:    docs_backup/sobre-nos.txt
#	deleted:    docs_backup/whatsapp-notification.mp3
#	deleted:    public/MD1_4003 (1).jpg
#	renamed:    docs/MD1_4003 (1).jpg -> public/victorbrunna.jpg
#
# Changes not staged for commit:
#	deleted:    .github/workflows/deploy.yml
#	deleted:    DEPLOYMENT.md
#	deleted:    RANKING_PRODUTOS.md
#	modified:   package.json
#
# Untracked files:
#	generate_structure.py
#
```

### `.git\config`
```
[core]
	repositoryformatversion = 0
	filemode = false
	bare = false
	logallrefupdates = true
	symlinks = false
	ignorecase = true
[remote "origin"]
	url = https://github.com/victorpk-3477/casaderacaoatlantico.git
	fetch = +refs/heads/*:refs/remotes/origin/*
[branch "master"]
	remote = origin
	merge = refs/heads/master
```

### `.git\description`
```
Unnamed repository; edit this file 'description' to name the repository.
```

### `.git\gk\config`
```
[branch "master"]
	gk-last-accessed = 2026-05-02T16:18:03.096Z
	gk-last-modified = 2026-05-02T16:18:03.096Z
```

### `.git\HEAD`
```
ref: refs/heads/master
```

### `.git\hooks\applypatch-msg.sample`
```
#!/bin/sh
#
# An example hook script to check the commit log message taken by
# applypatch from an e-mail message.
#
# The hook should exit with non-zero status after issuing an
# appropriate message if it wants to stop the commit.  The hook is
# allowed to edit the commit message file.
#
# To enable this hook, rename this file to "applypatch-msg".

. git-sh-setup
commitmsg="$(git rev-parse --git-path hooks/commit-msg)"
test -x "$commitmsg" && exec "$commitmsg" ${1+"$@"}
:
```

### `.git\hooks\commit-msg.sample`
```
#!/bin/sh
#
# An example hook script to check the commit log message.
# Called by "git commit" with one argument, the name of the file
# that has the commit message.  The hook should exit with non-zero
# status after issuing an appropriate message if it wants to stop the
# commit.  The hook is allowed to edit the commit message file.
#
# To enable this hook, rename this file to "commit-msg".

# Uncomment the below to add a Signed-off-by line to the message.
# Doing this in a hook is a bad idea in general, but the prepare-commit-msg
# hook is more suited to it.
#
# SOB=$(git var GIT_AUTHOR_IDENT | sed -n 's/^\(.*>\).*$/Signed-off-by: \1/p')
# grep -qs "^$SOB" "$1" || echo "$SOB" >> "$1"

# This example catches duplicate Signed-off-by lines.

test "" = "$(grep '^Signed-off-by: ' "$1" |
	 sort | uniq -c | sed -e '/^[ 	]*1[ 	]/d')" || {
	echo >&2 Duplicate Signed-off-by lines.
	exit 1
}
```

### `.git\hooks\fsmonitor-watchman.sample`
```
#!/usr/bin/perl

use strict;
use warnings;
use IPC::Open2;

# An example hook script to integrate Watchman
# (https://facebook.github.io/watchman/) with git to speed up detecting
# new and modified files.
#
# The hook is passed a version (currently 2) and last update token
# formatted as a string and outputs to stdout a new update token and
# all files that have been modified since the update token. Paths must
# be relative to the root of the working tree and separated by a single NUL.
#
# To enable this hook, rename this file to "query-watchman" and set
# 'git config core.fsmonitor .git/hooks/query-watchman'
#
my ($version, $last_update_token) = @ARGV;

# Uncomment for debugging
# print STDERR "$0 $version $last_update_token\n";

# Check the hook interface version
if ($version ne 2) {
	die "Unsupported query-fsmonitor hook version '$version'.\n" .
	    "Falling back to scanning...\n";
}

my $git_work_tree = get_working_dir();

my $retry = 1;

my $json_pkg;
eval {
	require JSON::XS;
	$json_pkg = "JSON::XS";
	1;
} or do {
	require JSON::PP;
	$json_pkg = "JSON::PP";
};

launch_watchman();

sub launch_watchman {
	my $o = watchman_query();
	if (is_work_tree_watched($o)) {
		output_result($o->{clock}, @{$o->{files}});
	}
}

sub output_result {
	my ($clockid, @files) = @_;

	# Uncomment for debugging watchman output
	# open (my $fh, ">", ".git/watchman-output.out");
	# binmode $fh, ":utf8";
	# print $fh "$clockid\n@files\n";
	# close $fh;

	binmode STDOUT, ":utf8";
	print $clockid;
	print "\0";
	local $, = "\0";
	print @files;
}

sub watchman_clock {
	my $response = qx/watchman clock "$git_work_tree"/;
	die "Failed to get clock id on '$git_work_tree'.\n" .
		"Falling back to scanning...\n" if $? != 0;

	return $json_pkg->new->utf8->decode($response);
}

sub watchman_query {
	my $pid = open2(\*CHLD_OUT, \*CHLD_IN, 'watchman -j --no-pretty')
	or die "open2() failed: $!\n" .
	"Falling back to scanning...\n";

	# In the query expression below we're asking for names of files that
	# changed since $last_update_token but not from the .git folder.
	#
	# To accomplish this, we're using the "since" generator to use the
	# recency index to select candidate nodes and "fields" to limit the
	# output to file names only. Then we're using the "expression" term to
	# further constrain the results.
	my $last_update_line = "";
	if (substr($last_update_token, 0, 1) eq "c") {
		$last_update_token = "\"$last_update_token\"";
		$last_update_line = qq[\n"since": $last_update_token,];
	}
	my $query = <<"	END";
		["query", "$git_work_tree", {$last_update_line
			"fields": ["name"],
			"expression": ["not", ["dirname", ".git"]]
		}]
	END

	# Uncomment for debugging the watchman query
	# open (my $fh, ">", ".git/watchman-query.json");
	# print $fh $query;
	# close $fh;

	print CHLD_IN $query;
	close CHLD_IN;
	my $response = do {local $/; <CHLD_OUT>};

	# Uncomment for debugging the watch response
	# open ($fh, ">", ".git/watchman-response.json");
	# print $fh $response;
	# close $fh;

	die "Watchman: command returned no output.\n" .
	"Falling back to scanning...\n" if $response eq "";
	die "Watchman: command returned invalid output: $response\n" .
	"Falling back to scanning...\n" unless $response =~ /^\{/;

	return $json_pkg->new->utf8->decode($response);
}

sub is_work_tree_watched {
	my ($output) = @_;
	my $error = $output->{error};
	if ($retry > 0 and $error and $error =~ m/unable to resolve root .* directory (.*) is not watched/) {
		$retry--;
		my $response = qx/watchman watch "$git_work_tree"/;
		die "Failed to make watchman watch '$git_work_tree'.\n" .
		    "Falling back to scanning...\n" if $? != 0;
		$output = $json_pkg->new->utf8->decode($response);
		$error = $output->{error};
		die "Watchman: $error.\n" .
		"Falling back to scanning...\n" if $error;

		# Uncomment for debugging watchman output
		# open (my $fh, ">", ".git/watchman-output.out");
		# close $fh;

		# Watchman will always return all files on the first query so
		# return the fast "everything is dirty" flag to git and do the
		# Watchman query just to get it over with now so we won't pay
		# the cost in git to look up each individual file.
		my $o = watchman_clock();
		$error = $output->{error};

		die "Watchman: $error.\n" .
		"Falling back to scanning...\n" if $error;

		output_result($o->{clock}, ("/"));
		$last_update_token = $o->{clock};

		eval { launch_watchman() };
		return 0;
	}

	die "Watchman: $error.\n" .
	"Falling back to scanning...\n" if $error;

	return 1;
}

sub get_working_dir {
	my $working_dir;
	if ($^O =~ 'msys' || $^O =~ 'cygwin') {
		$working_dir = Win32::GetCwd();
		$working_dir =~ tr/\\/\//;
	} else {
		require Cwd;
		$working_dir = Cwd::cwd();
	}

	return $working_dir;
}
```

### `.git\hooks\post-update.sample`
```
#!/bin/sh
#
# An example hook script to prepare a packed repository for use over
# dumb transports.
#
# To enable this hook, rename this file to "post-update".

exec git update-server-info
```

### `.git\hooks\pre-applypatch.sample`
```
#!/bin/sh
#
# An example hook script to verify what is about to be committed
# by applypatch from an e-mail message.
#
# The hook should exit with non-zero status after issuing an
# appropriate message if it wants to stop the commit.
#
# To enable this hook, rename this file to "pre-applypatch".

. git-sh-setup
precommit="$(git rev-parse --git-path hooks/pre-commit)"
test -x "$precommit" && exec "$precommit" ${1+"$@"}
:
```

### `.git\hooks\pre-commit.sample`
```
#!/bin/sh
#
# An example hook script to verify what is about to be committed.
# Called by "git commit" with no arguments.  The hook should
# exit with non-zero status after issuing an appropriate message if
# it wants to stop the commit.
#
# To enable this hook, rename this file to "pre-commit".

if git rev-parse --verify HEAD >/dev/null 2>&1
then
	against=HEAD
else
	# Initial commit: diff against an empty tree object
	against=$(git hash-object -t tree /dev/null)
fi

# If you want to allow non-ASCII filenames set this variable to true.
allownonascii=$(git config --type=bool hooks.allownonascii)

# Redirect output to stderr.
exec 1>&2

# Cross platform projects tend to avoid non-ASCII filenames; prevent
# them from being added to the repository. We exploit the fact that the
# printable range starts at the space character and ends with tilde.
if [ "$allownonascii" != "true" ] &&
	# Note that the use of brackets around a tr range is ok here, (it's
	# even required, for portability to Solaris 10's /usr/bin/tr), since
	# the square bracket bytes happen to fall in the designated range.
	test $(git diff-index --cached --name-only --diff-filter=A -z $against |
	  LC_ALL=C tr -d '[ -~]\0' | wc -c) != 0
then
	cat <<\EOF
Error: Attempt to add a non-ASCII file name.

This can cause problems if you want to work with people on other platforms.

To be portable it is advisable to rename the file.

If you know what you are doing you can disable this check using:

  git config hooks.allownonascii true
EOF
	exit 1
fi

# If there are whitespace errors, print the offending file names and fail.
exec git diff-index --check --cached $against --
```

### `.git\hooks\pre-merge-commit.sample`
```
#!/bin/sh
#
# An example hook script to verify what is about to be committed.
# Called by "git merge" with no arguments.  The hook should
# exit with non-zero status after issuing an appropriate message to
# stderr if it wants to stop the merge commit.
#
# To enable this hook, rename this file to "pre-merge-commit".

. git-sh-setup
test -x "$GIT_DIR/hooks/pre-commit" &&
        exec "$GIT_DIR/hooks/pre-commit"
:
```

### `.git\hooks\pre-push.sample`
```
#!/bin/sh

# An example hook script to verify what is about to be pushed.  Called by "git
# push" after it has checked the remote status, but before anything has been
# pushed.  If this script exits with a non-zero status nothing will be pushed.
#
# This hook is called with the following parameters:
#
# $1 -- Name of the remote to which the push is being done
# $2 -- URL to which the push is being done
#
# If pushing without using a named remote those arguments will be equal.
#
# Information about the commits which are being pushed is supplied as lines to
# the standard input in the form:
#
#   <local ref> <local oid> <remote ref> <remote oid>
#
# This sample shows how to prevent push of commits where the log message starts
# with "WIP" (work in progress).

remote="$1"
url="$2"

zero=$(git hash-object --stdin </dev/null | tr '[0-9a-f]' '0')

while read local_ref local_oid remote_ref remote_oid
do
	if test "$local_oid" = "$zero"
	then
		# Handle delete
		:
	else
		if test "$remote_oid" = "$zero"
		then
			# New branch, examine all commits
			range="$local_oid"
		else
			# Update to existing branch, examine new commits
			range="$remote_oid..$local_oid"
		fi

		# Check for WIP commit
		commit=$(git rev-list -n 1 --grep '^WIP' "$range")
		if test -n "$commit"
		then
			echo >&2 "Found WIP commit in $local_ref, not pushing"
			exit 1
		fi
	fi
done

exit 0
```

### `.git\hooks\pre-rebase.sample`
```
#!/bin/sh
#
# Copyright (c) 2006, 2008 Junio C Hamano
#
# The "pre-rebase" hook is run just before "git rebase" starts doing
# its job, and can prevent the command from running by exiting with
# non-zero status.
#
# The hook is called with the following parameters:
#
# $1 -- the upstream the series was forked from.
# $2 -- the branch being rebased (or empty when rebasing the current branch).
#
# This sample shows how to prevent topic branches that are already
# merged to 'next' branch from getting rebased, because allowing it
# would result in rebasing already published history.

publish=next
basebranch="$1"
if test "$#" = 2
then
	topic="refs/heads/$2"
else
	topic=`git symbolic-ref HEAD` ||
	exit 0 ;# we do not interrupt rebasing detached HEAD
fi

case "$topic" in
refs/heads/??/*)
	;;
*)
	exit 0 ;# we do not interrupt others.
	;;
esac

# Now we are dealing with a topic branch being rebased
# on top of master.  Is it OK to rebase it?

# Does the topic really exist?
git show-ref -q "$topic" || {
	echo >&2 "No such branch $topic"
	exit 1
}

# Is topic fully merged to master?
not_in_master=`git rev-list --pretty=oneline ^master "$topic"`
if test -z "$not_in_master"
then
	echo >&2 "$topic is fully merged to master; better remove it."
	exit 1 ;# we could allow it, but there is no point.
fi

# Is topic ever merged to next?  If so you should not be rebasing it.
only_next_1=`git rev-list ^master "^$topic" ${publish} | sort`
only_next_2=`git rev-list ^master           ${publish} | sort`
if test "$only_next_1" = "$only_next_2"
then
	not_in_topic=`git rev-list "^$topic" master`
	if test -z "$not_in_topic"
	then
		echo >&2 "$topic is already up to date with master"
		exit 1 ;# we could allow it, but there is no point.
	else
		exit 0
	fi
else
	not_in_next=`git rev-list --pretty=oneline ^${publish} "$topic"`
	/usr/bin/perl -e '
		my $topic = $ARGV[0];
		my $msg = "* $topic has commits already merged to public branch:\n";
		my (%not_in_next) = map {
			/^([0-9a-f]+) /;
			($1 => 1);
		} split(/\n/, $ARGV[1]);
		for my $elem (map {
				/^([0-9a-f]+) (.*)$/;
				[$1 => $2];
			} split(/\n/, $ARGV[2])) {
			if (!exists $not_in_next{$elem->[0]}) {
				if ($msg) {
					print STDERR $msg;
					undef $msg;
				}
				print STDERR " $elem->[1]\n";
			}
		}
	' "$topic" "$not_in_next" "$not_in_master"
	exit 1
fi

<<\DOC_END

This sample hook safeguards topic branches that have been
published from being rewound.

The workflow assumed here is:

 * Once a topic branch forks from "master", "master" is never
   merged into it again (either directly or indirectly).

 * Once a topic branch is fully cooked and merged into "master",
   it is deleted.  If you need to build on top of it to correct
   earlier mistakes, a new topic branch is created by forking at
   the tip of the "master".  This is not strictly necessary, but
   it makes it easier to keep your history simple.

 * Whenever you need to test or publish your changes to topic
   branches, merge them into "next" branch.

The script, being an example, hardcodes the publish branch name
to be "next", but it is trivial to make it configurable via
$GIT_DIR/config mechanism.

With this workflow, you would want to know:

(1) ... if a topic branch has ever been merged to "next".  Young
    topic branches can have stupid mistakes you would rather
    clean up before publishing, and things that have not been
    merged into other branches can be easily rebased without
    affecting other people.  But once it is published, you would
    not want to rewind it.

(2) ... if a topic branch has been fully merged to "master".
    Then you can delete it.  More importantly, you should not
    build on top of it -- other people may already want to
    change things related to the topic as patches against your
    "master", so if you need further changes, it is better to
    fork the topic (perhaps with the same name) afresh from the
    tip of "master".

Let's look at this example:

		   o---o---o---o---o---o---o---o---o---o "next"
		  /       /           /           /
		 /   a---a---b A     /           /
		/   /               /           /
	       /   /   c---c---c---c B         /
	      /   /   /             \         /
	     /   /   /   b---b C     \       /
	    /   /   /   /             \     /
    ---o---o---o---o---o---o---o---o---o---o---o "master"


A, B and C are topic branches.

 * A has one fix since it was merged up to "next".

 * B has finished.  It has been fully merged up to "master" and "next",
   and is ready to be deleted.

 * C has not merged to "next" at all.

We would want to allow C to be rebased, refuse A, and encourage
B to be deleted.

To compute (1):

	git rev-list ^master ^topic next
	git rev-list ^master        next

	if these match, topic has not merged in next at all.

To compute (2):

	git rev-list master..topic

	if this is empty, it is fully merged to "master".

DOC_END
```

### `.git\hooks\pre-receive.sample`
```
#!/bin/sh
#
# An example hook script to make use of push options.
# The example simply echoes all push options that start with 'echoback='
# and rejects all pushes when the "reject" push option is used.
#
# To enable this hook, rename this file to "pre-receive".

if test -n "$GIT_PUSH_OPTION_COUNT"
then
	i=0
	while test "$i" -lt "$GIT_PUSH_OPTION_COUNT"
	do
		eval "value=\$GIT_PUSH_OPTION_$i"
		case "$value" in
		echoback=*)
			echo "echo from the pre-receive-hook: ${value#*=}" >&2
			;;
		reject)
			exit 1
		esac
		i=$((i + 1))
	done
fi
```

### `.git\hooks\prepare-commit-msg.sample`
```
#!/bin/sh
#
# An example hook script to prepare the commit log message.
# Called by "git commit" with the name of the file that has the
# commit message, followed by the description of the commit
# message's source.  The hook's purpose is to edit the commit
# message file.  If the hook fails with a non-zero status,
# the commit is aborted.
#
# To enable this hook, rename this file to "prepare-commit-msg".

# This hook includes three examples. The first one removes the
# "# Please enter the commit message..." help message.
#
# The second includes the output of "git diff --name-status -r"
# into the message, just before the "git status" output.  It is
# commented because it doesn't cope with --amend or with squashed
# commits.
#
# The third example adds a Signed-off-by line to the message, that can
# still be edited.  This is rarely a good idea.

COMMIT_MSG_FILE=$1
COMMIT_SOURCE=$2
SHA1=$3

/usr/bin/perl -i.bak -ne 'print unless(m/^. Please enter the commit message/..m/^#$/)' "$COMMIT_MSG_FILE"

# case "$COMMIT_SOURCE,$SHA1" in
#  ,|template,)
#    /usr/bin/perl -i.bak -pe '
#       print "\n" . `git diff --cached --name-status -r`
# 	 if /^#/ && $first++ == 0' "$COMMIT_MSG_FILE" ;;
#  *) ;;
# esac

# SOB=$(git var GIT_COMMITTER_IDENT | sed -n 's/^\(.*>\).*$/Signed-off-by: \1/p')
# git interpret-trailers --in-place --trailer "$SOB" "$COMMIT_MSG_FILE"
# if test -z "$COMMIT_SOURCE"
# then
#   /usr/bin/perl -i.bak -pe 'print "\n" if !$first_line++' "$COMMIT_MSG_FILE"
# fi
```

### `.git\hooks\push-to-checkout.sample`
```
#!/bin/sh

# An example hook script to update a checked-out tree on a git push.
#
# This hook is invoked by git-receive-pack(1) when it reacts to git
# push and updates reference(s) in its repository, and when the push
# tries to update the branch that is currently checked out and the
# receive.denyCurrentBranch configuration variable is set to
# updateInstead.
#
# By default, such a push is refused if the working tree and the index
# of the remote repository has any difference from the currently
# checked out commit; when both the working tree and the index match
# the current commit, they are updated to match the newly pushed tip
# of the branch. This hook is to be used to override the default
# behaviour; however the code below reimplements the default behaviour
# as a starting point for convenient modification.
#
# The hook receives the commit with which the tip of the current
# branch is going to be updated:
commit=$1

# It can exit with a non-zero status to refuse the push (when it does
# so, it must not modify the index or the working tree).
die () {
	echo >&2 "$*"
	exit 1
}

# Or it can make any necessary changes to the working tree and to the
# index to bring them to the desired state when the tip of the current
# branch is updated to the new commit, and exit with a zero status.
#
# For example, the hook can simply run git read-tree -u -m HEAD "$1"
# in order to emulate git fetch that is run in the reverse direction
# with git push, as the two-tree form of git read-tree -u -m is
# essentially the same as git switch or git checkout that switches
# branches while keeping the local changes in the working tree that do
# not interfere with the difference between the branches.

# The below is a more-or-less exact translation to shell of the C code
# for the default behaviour for git's push-to-checkout hook defined in
# the push_to_deploy() function in builtin/receive-pack.c.
#
# Note that the hook will be executed from the repository directory,
# not from the working tree, so if you want to perform operations on
# the working tree, you will have to adapt your code accordingly, e.g.
# by adding "cd .." or using relative paths.

if ! git update-index -q --ignore-submodules --refresh
then
	die "Up-to-date check failed"
fi

if ! git diff-files --quiet --ignore-submodules --
then
	die "Working directory has unstaged changes"
fi

# This is a rough translation of:
#
#   head_has_history() ? "HEAD" : EMPTY_TREE_SHA1_HEX
if git cat-file -e HEAD 2>/dev/null
then
	head=HEAD
else
	head=$(git hash-object -t tree --stdin </dev/null)
fi

if ! git diff-index --quiet --cached --ignore-submodules $head --
then
	die "Working directory has staged changes"
fi

if ! git read-tree -u -m "$commit"
then
	die "Could not update working tree to new HEAD"
fi
```

### `.git\hooks\sendemail-validate.sample`
```
#!/bin/sh

# An example hook script to validate a patch (and/or patch series) before
# sending it via email.
#
# The hook should exit with non-zero status after issuing an appropriate
# message if it wants to prevent the email(s) from being sent.
#
# To enable this hook, rename this file to "sendemail-validate".
#
# By default, it will only check that the patch(es) can be applied on top of
# the default upstream branch without conflicts in a secondary worktree. After
# validation (successful or not) of the last patch of a series, the worktree
# will be deleted.
#
# The following config variables can be set to change the default remote and
# remote ref that are used to apply the patches against:
#
#   sendemail.validateRemote (default: origin)
#   sendemail.validateRemoteRef (default: HEAD)
#
# Replace the TODO placeholders with appropriate checks according to your
# needs.

validate_cover_letter () {
	file="$1"
	# TODO: Replace with appropriate checks (e.g. spell checking).
	true
}

validate_patch () {
	file="$1"
	# Ensure that the patch applies without conflicts.
	git am -3 "$file" || return
	# TODO: Replace with appropriate checks for this patch
	# (e.g. checkpatch.pl).
	true
}

validate_series () {
	# TODO: Replace with appropriate checks for the whole series
	# (e.g. quick build, coding style checks, etc.).
	true
}

# main -------------------------------------------------------------------------

if test "$GIT_SENDEMAIL_FILE_COUNTER" = 1
then
	remote=$(git config --default origin --get sendemail.validateRemote) &&
	ref=$(git config --default HEAD --get sendemail.validateRemoteRef) &&
	worktree=$(mktemp --tmpdir -d sendemail-validate.XXXXXXX) &&
	git worktree add -fd --checkout "$worktree" "refs/remotes/$remote/$ref" &&
	git config --replace-all sendemail.validateWorktree "$worktree"
else
	worktree=$(git config --get sendemail.validateWorktree)
fi || {
	echo "sendemail-validate: error: failed to prepare worktree" >&2
	exit 1
}

unset GIT_DIR GIT_WORK_TREE
cd "$worktree" &&

if grep -q "^diff --git " "$1"
then
	validate_patch "$1"
else
	validate_cover_letter "$1"
fi &&

if test "$GIT_SENDEMAIL_FILE_COUNTER" = "$GIT_SENDEMAIL_FILE_TOTAL"
then
	git config --unset-all sendemail.validateWorktree &&
	trap 'git worktree remove -ff "$worktree"' EXIT &&
	validate_series
fi
```

### `.git\hooks\update.sample`
```
#!/bin/sh
#
# An example hook script to block unannotated tags from entering.
# Called by "git receive-pack" with arguments: refname sha1-old sha1-new
#
# To enable this hook, rename this file to "update".
#
# Config
# ------
# hooks.allowunannotated
#   This boolean sets whether unannotated tags will be allowed into the
#   repository.  By default they won't be.
# hooks.allowdeletetag
#   This boolean sets whether deleting tags will be allowed in the
#   repository.  By default they won't be.
# hooks.allowmodifytag
#   This boolean sets whether a tag may be modified after creation. By default
#   it won't be.
# hooks.allowdeletebranch
#   This boolean sets whether deleting branches will be allowed in the
#   repository.  By default they won't be.
# hooks.denycreatebranch
#   This boolean sets whether remotely creating branches will be denied
#   in the repository.  By default this is allowed.
#

# --- Command line
refname="$1"
oldrev="$2"
newrev="$3"

# --- Safety check
if [ -z "$GIT_DIR" ]; then
	echo "Don't run this script from the command line." >&2
	echo " (if you want, you could supply GIT_DIR then run" >&2
	echo "  $0 <ref> <oldrev> <newrev>)" >&2
	exit 1
fi

if [ -z "$refname" -o -z "$oldrev" -o -z "$newrev" ]; then
	echo "usage: $0 <ref> <oldrev> <newrev>" >&2
	exit 1
fi

# --- Config
allowunannotated=$(git config --type=bool hooks.allowunannotated)
allowdeletebranch=$(git config --type=bool hooks.allowdeletebranch)
denycreatebranch=$(git config --type=bool hooks.denycreatebranch)
allowdeletetag=$(git config --type=bool hooks.allowdeletetag)
allowmodifytag=$(git config --type=bool hooks.allowmodifytag)

# check for no description
projectdesc=$(sed -e '1q' "$GIT_DIR/description")
case "$projectdesc" in
"Unnamed repository"* | "")
	echo "*** Project description file hasn't been set" >&2
	exit 1
	;;
esac

# --- Check types
# if $newrev is 0000...0000, it's a commit to delete a ref.
zero=$(git hash-object --stdin </dev/null | tr '[0-9a-f]' '0')
if [ "$newrev" = "$zero" ]; then
	newrev_type=delete
else
	newrev_type=$(git cat-file -t $newrev)
fi

case "$refname","$newrev_type" in
	refs/tags/*,commit)
		# un-annotated tag
		short_refname=${refname##refs/tags/}
		if [ "$allowunannotated" != "true" ]; then
			echo "*** The un-annotated tag, $short_refname, is not allowed in this repository" >&2
			echo "*** Use 'git tag [ -a | -s ]' for tags you want to propagate." >&2
			exit 1
		fi
		;;
	refs/tags/*,delete)
		# delete tag
		if [ "$allowdeletetag" != "true" ]; then
			echo "*** Deleting a tag is not allowed in this repository" >&2
			exit 1
		fi
		;;
	refs/tags/*,tag)
		# annotated tag
		if [ "$allowmodifytag" != "true" ] && git rev-parse $refname > /dev/null 2>&1
		then
			echo "*** Tag '$refname' already exists." >&2
			echo "*** Modifying a tag is not allowed in this repository." >&2
			exit 1
		fi
		;;
	refs/heads/*,commit)
		# branch
		if [ "$oldrev" = "$zero" -a "$denycreatebranch" = "true" ]; then
			echo "*** Creating a branch is not allowed in this repository" >&2
			exit 1
		fi
		;;
	refs/heads/*,delete)
		# delete branch
		if [ "$allowdeletebranch" != "true" ]; then
			echo "*** Deleting a branch is not allowed in this repository" >&2
			exit 1
		fi
		;;
	refs/remotes/*,commit)
		# tracking branch
		;;
	refs/remotes/*,delete)
		# delete tracking branch
		if [ "$allowdeletebranch" != "true" ]; then
			echo "*** Deleting a tracking branch is not allowed in this repository" >&2
			exit 1
		fi
		;;
	*)
		# Anything else (is there anything else?)
		echo "*** Update hook: unknown type of update to ref $refname of type $newrev_type" >&2
		exit 1
		;;
esac

# --- Finished
exit 0
```

### `.git\info\exclude`
```
# git ls-files --others --exclude-from=.git/info/exclude
# Lines that start with '#' are comments.
# For a project mostly in C, the following would be a good set of
# exclude patterns (uncomment them if you want to use them):
# *.[oa]
# *~
```

### `.git\logs\HEAD`
```
0000000000000000000000000000000000000000 f9d78dafffa28663ccabb25264bc289628bcf050 victorpk-3477 <casaderacaoatlantico@gmail.com> 1777582759 -0300	commit (initial): Initial commit
f9d78dafffa28663ccabb25264bc289628bcf050 0000000000000000000000000000000000000000 victorpk-3477 <casaderacaoatlantico@gmail.com> 1777635385 -0300	Branch: renamed refs/heads/master to refs/heads/master
f9d78dafffa28663ccabb25264bc289628bcf050 f9d78dafffa28663ccabb25264bc289628bcf050 victorpk-3477 <casaderacaoatlantico@gmail.com> 1777635385 -0300	Branch: renamed refs/heads/master to refs/heads/master
f9d78dafffa28663ccabb25264bc289628bcf050 7c63bfcddd03028add00c489c165ef8f3ad60942 victorpk-3477 <casaderacaoatlantico@gmail.com> 1777635813 -0300	commit: Prepare GitHub Pages deploy via docs folder
7c63bfcddd03028add00c489c165ef8f3ad60942 f0d0806f3d7d4bf4eeb8af790a7439a1746fd847 victorpk-3477 <casaderacaoatlantico@gmail.com> 1777637063 -0300	commit: Fix GitHub Pages static export config and JSX quoting
f0d0806f3d7d4bf4eeb8af790a7439a1746fd847 7fd90a128d60362756738e1387d5bcf50572f7d3 victorpk-3477 <casaderacaoatlantico@gmail.com> 1777637297 -0300	commit: Add full GitHub Pages docs folder and nojekyll support
7fd90a128d60362756738e1387d5bcf50572f7d3 1803d90ecb589b66ad7ab2fcb3cd6eb14198e698 victorpk-3477 <casaderacaoatlantico@gmail.com> 1777647165 -0300	commit: Initial commit
1803d90ecb589b66ad7ab2fcb3cd6eb14198e698 bf17f51380138761954ef4b47adbbc0440994c4b victorpk-3477 <casaderacaoatlantico@gmail.com> 1777648102 -0300	commit: Add docs folder for GitHub Pages deployment and update deployment docs
bf17f51380138761954ef4b47adbbc0440994c4b f12fa073537def3f8e213237d37d0878d29495aa victorpk-3477 <casaderacaoatlantico@gmail.com> 1777650509 -0300	commit: Build with basePath-prefixed asset URLs for GitHub Pages deployment
f12fa073537def3f8e213237d37d0878d29495aa 7abc5273f8cd75571e8adfda8c9d88ecc061b031 victorpk-3477 <casaderacaoatlantico@gmail.com> 1777651294 -0300	commit: Update basePath asset URLs and refresh docs deployment output
7abc5273f8cd75571e8adfda8c9d88ecc061b031 2da5b2d1521b6b1902487452ca205a9315764959 victorpk-3477 <casaderacaoatlantico@gmail.com> 1777651808 -0300	commit: Fix GitHub Pages workflow permissions for gh-pages deployment
2da5b2d1521b6b1902487452ca205a9315764959 2db00b1c2875794b9f36f0224ab9d3baa7ca6453 victorpk-3477 <casaderacaoatlantico@gmail.com> 1777654130 -0300	commit: Prevent GitHub Pages deploy on pull request runs
2db00b1c2875794b9f36f0224ab9d3baa7ca6453 1f8b7d6fca3ea23c2b5e864584419732f7876bae victorpk-3477 <casaderacaoatlantico@gmail.com> 1777662699 -0300	commit: Fix CSS background images with basePath prefix
1f8b7d6fca3ea23c2b5e864584419732f7876bae 02624d05fefa400ef8e2a7c5c84dd50e4c372cc7 victorpk-3477 <casaderacaoatlantico@gmail.com> 1777663188 -0300	commit: Fix hero section background image URL with correct basePath
02624d05fefa400ef8e2a7c5c84dd50e4c372cc7 2831058c5965da8e3503c5794e18675e25b729cc victorpk-3477 <casaderacaoatlantico@gmail.com> 1777665911 -0300	commit: Fix local dev basePath handling and header asset URLs
2831058c5965da8e3503c5794e18675e25b729cc 2831058c5965da8e3503c5794e18675e25b729cc victorpk-3477 <casaderacaoatlantico@gmail.com> 1777738522 -0300	checkout: moving from master to master
```

### `.git\logs\refs\heads\master`
```
0000000000000000000000000000000000000000 f9d78dafffa28663ccabb25264bc289628bcf050 victorpk-3477 <casaderacaoatlantico@gmail.com> 1777582759 -0300	commit (initial): Initial commit
f9d78dafffa28663ccabb25264bc289628bcf050 f9d78dafffa28663ccabb25264bc289628bcf050 victorpk-3477 <casaderacaoatlantico@gmail.com> 1777635385 -0300	Branch: renamed refs/heads/master to refs/heads/master
f9d78dafffa28663ccabb25264bc289628bcf050 7c63bfcddd03028add00c489c165ef8f3ad60942 victorpk-3477 <casaderacaoatlantico@gmail.com> 1777635813 -0300	commit: Prepare GitHub Pages deploy via docs folder
7c63bfcddd03028add00c489c165ef8f3ad60942 f0d0806f3d7d4bf4eeb8af790a7439a1746fd847 victorpk-3477 <casaderacaoatlantico@gmail.com> 1777637063 -0300	commit: Fix GitHub Pages static export config and JSX quoting
f0d0806f3d7d4bf4eeb8af790a7439a1746fd847 7fd90a128d60362756738e1387d5bcf50572f7d3 victorpk-3477 <casaderacaoatlantico@gmail.com> 1777637297 -0300	commit: Add full GitHub Pages docs folder and nojekyll support
7fd90a128d60362756738e1387d5bcf50572f7d3 1803d90ecb589b66ad7ab2fcb3cd6eb14198e698 victorpk-3477 <casaderacaoatlantico@gmail.com> 1777647165 -0300	commit: Initial commit
1803d90ecb589b66ad7ab2fcb3cd6eb14198e698 bf17f51380138761954ef4b47adbbc0440994c4b victorpk-3477 <casaderacaoatlantico@gmail.com> 1777648102 -0300	commit: Add docs folder for GitHub Pages deployment and update deployment docs
bf17f51380138761954ef4b47adbbc0440994c4b f12fa073537def3f8e213237d37d0878d29495aa victorpk-3477 <casaderacaoatlantico@gmail.com> 1777650509 -0300	commit: Build with basePath-prefixed asset URLs for GitHub Pages deployment
f12fa073537def3f8e213237d37d0878d29495aa 7abc5273f8cd75571e8adfda8c9d88ecc061b031 victorpk-3477 <casaderacaoatlantico@gmail.com> 1777651294 -0300	commit: Update basePath asset URLs and refresh docs deployment output
7abc5273f8cd75571e8adfda8c9d88ecc061b031 2da5b2d1521b6b1902487452ca205a9315764959 victorpk-3477 <casaderacaoatlantico@gmail.com> 1777651808 -0300	commit: Fix GitHub Pages workflow permissions for gh-pages deployment
2da5b2d1521b6b1902487452ca205a9315764959 2db00b1c2875794b9f36f0224ab9d3baa7ca6453 victorpk-3477 <casaderacaoatlantico@gmail.com> 1777654130 -0300	commit: Prevent GitHub Pages deploy on pull request runs
2db00b1c2875794b9f36f0224ab9d3baa7ca6453 1f8b7d6fca3ea23c2b5e864584419732f7876bae victorpk-3477 <casaderacaoatlantico@gmail.com> 1777662699 -0300	commit: Fix CSS background images with basePath prefix
1f8b7d6fca3ea23c2b5e864584419732f7876bae 02624d05fefa400ef8e2a7c5c84dd50e4c372cc7 victorpk-3477 <casaderacaoatlantico@gmail.com> 1777663188 -0300	commit: Fix hero section background image URL with correct basePath
02624d05fefa400ef8e2a7c5c84dd50e4c372cc7 2831058c5965da8e3503c5794e18675e25b729cc victorpk-3477 <casaderacaoatlantico@gmail.com> 1777665911 -0300	commit: Fix local dev basePath handling and header asset URLs
```

### `.git\logs\refs\remotes\origin\master`
```
0000000000000000000000000000000000000000 f9d78dafffa28663ccabb25264bc289628bcf050 victorpk-3477 <casaderacaoatlantico@gmail.com> 1777635415 -0300	update by push
f9d78dafffa28663ccabb25264bc289628bcf050 7c63bfcddd03028add00c489c165ef8f3ad60942 victorpk-3477 <casaderacaoatlantico@gmail.com> 1777635816 -0300	update by push
7c63bfcddd03028add00c489c165ef8f3ad60942 f0d0806f3d7d4bf4eeb8af790a7439a1746fd847 victorpk-3477 <casaderacaoatlantico@gmail.com> 1777637065 -0300	update by push
f0d0806f3d7d4bf4eeb8af790a7439a1746fd847 7fd90a128d60362756738e1387d5bcf50572f7d3 victorpk-3477 <casaderacaoatlantico@gmail.com> 1777637329 -0300	update by push
7fd90a128d60362756738e1387d5bcf50572f7d3 1803d90ecb589b66ad7ab2fcb3cd6eb14198e698 victorpk-3477 <casaderacaoatlantico@gmail.com> 1777647749 -0300	update by push
1803d90ecb589b66ad7ab2fcb3cd6eb14198e698 bf17f51380138761954ef4b47adbbc0440994c4b victorpk-3477 <casaderacaoatlantico@gmail.com> 1777648132 -0300	update by push
bf17f51380138761954ef4b47adbbc0440994c4b f12fa073537def3f8e213237d37d0878d29495aa victorpk-3477 <casaderacaoatlantico@gmail.com> 1777650513 -0300	update by push
f12fa073537def3f8e213237d37d0878d29495aa 7abc5273f8cd75571e8adfda8c9d88ecc061b031 victorpk-3477 <casaderacaoatlantico@gmail.com> 1777651297 -0300	update by push
7abc5273f8cd75571e8adfda8c9d88ecc061b031 2da5b2d1521b6b1902487452ca205a9315764959 victorpk-3477 <casaderacaoatlantico@gmail.com> 1777651811 -0300	update by push
2da5b2d1521b6b1902487452ca205a9315764959 2db00b1c2875794b9f36f0224ab9d3baa7ca6453 victorpk-3477 <casaderacaoatlantico@gmail.com> 1777654133 -0300	update by push
2db00b1c2875794b9f36f0224ab9d3baa7ca6453 1f8b7d6fca3ea23c2b5e864584419732f7876bae victorpk-3477 <casaderacaoatlantico@gmail.com> 1777662702 -0300	update by push
1f8b7d6fca3ea23c2b5e864584419732f7876bae 02624d05fefa400ef8e2a7c5c84dd50e4c372cc7 victorpk-3477 <casaderacaoatlantico@gmail.com> 1777663191 -0300	update by push
02624d05fefa400ef8e2a7c5c84dd50e4c372cc7 2831058c5965da8e3503c5794e18675e25b729cc victorpk-3477 <casaderacaoatlantico@gmail.com> 1777665913 -0300	update by push
```

### `.git\refs\heads\master`
```
2831058c5965da8e3503c5794e18675e25b729cc
```

### `.git\refs\remotes\origin\master`
```
2831058c5965da8e3503c5794e18675e25b729cc
```

### `.gitignore`
```
# Dependências
node_modules/
/.pnp
.pnp.js

# Testes
/coverage

# Produção
/build
/.next/
/out/

# Diversos
.DS_Store
*.pem

# Debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Variáveis de ambiente (local)
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# IDE
.idea/
.vscode/
*.swp
*.swo
*~

# OS
Thumbs.db
```

### `app\(main)\layout.jsx`
```
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function MainLayout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
```

### `app\(main)\page.jsx`
```
'use client';

import { useEffect } from 'react';
import CarrosselPromocoes from '@/components/CarrosselPromocoes';

export default function Home() {
  useEffect(() => {
    // Carrega o script do Elfsight para avaliações
    const scriptId = 'elfsight-platform';
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://static.elfsight.com/platform/platform.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <>
      {/* FACHADA COM PROMOÇÕES */}
      <section className="cra-fachada">
        <div className="cra-fachada-overlay">
          <div className="cra-fachada-content">
            <h1 className="cra-title cra-fachada-title">
              Promoções em destaque
            </h1>
            <CarrosselPromocoes />
          </div>
        </div>
      </section>

      {/* SEÇÃO AVALIAÇÕES */}
      <main className="cra-main">
        <section className="cra-section-content">
          <div className="cra-section-right" style={{ margin: '0 auto', maxWidth: '600px' }}>
            <h2 className="cra-title">Avaliações dos Clientes</h2>
            <div
              className="elfsight-app-bcacbcd4-37c8-4c8e-b74b-e74243ce64b8"
              data-elfsight-app-lazy
            ></div>
          </div>
        </section>
      </main>
    </>
  );
}
```

### `app\(main)\produtos\page.jsx`
```
import ProdutosContent from './ProdutosContent';

export const metadata = {
  title: 'Produtos | Casa de Ração Atlântico',
  description: 'Confira nosso catálogo de rações, petiscos e acessórios para cães, gatos e pets em Goiânia.',
  keywords: 'ração cão, ração gato, petiscos, acessórios pet, produtos para cães',
};

export default function ProdutosPage() {
  return <ProdutosContent />;
}
```

### `app\(main)\produtos\produtos.css`
```
.produtos-wrapper {
  width: 100%;
  background-color: #ffffff;
  min-height: 100vh;
  padding-top: 14vh;
}

.produtos-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 40px 20px;
  background-color: transparent;
}

.produtos-header {
  text-align: center;
  margin-bottom: 40px;
  padding: 20px 0;
}

.produtos-header h1 {
  font-family: "Fraunces", serif;
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 10px;
  color: #003759;
}

.produtos-header p {
  font-size: 18px;
  color: #666;
  margin: 0;
}

/* ============================================================
   FILTROS
   ============================================================ */

.produtos-filtros {
  text-align: center;
  margin-bottom: 40px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
}

.filtro-btn {
  padding: 10px 20px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  font-size: 14px;
  transition: all 0.3s ease;
  background-color: #e0e0e0;
  color: #333;
}

.filtro-btn.active {
  background-color: #003759;
  color: #fff;
}

.filtro-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

/* ============================================================
   INFINITE SCROLL
   ============================================================ */

.loading-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
  gap: 20px;
}

.loading-spinner {
  width: 40px;
  height: 40px;
  border: 4px solid #e0e0e0;
  border-top: 4px solid #25d366;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.loading-container p {
  color: #666;
  font-size: 16px;
  margin: 0;
  font-weight: 500;
}

.no-more-products {
  text-align: center;
  padding: 40px 20px;
  color: #003759;
  font-size: 18px;
  font-weight: 600;
}

.no-more-products p {
  margin: 0;
  background: linear-gradient(135deg, #25d366, #003759);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* ============================================================
   RESPONSIVIDADE
   ============================================================ */

@media (max-width: 768px) {
  .produtos-container {
    padding: 30px 15px;
  }

  .produtos-header h1 {
    font-size: 36px;
  }

  .produtos-header p {
    font-size: 16px;
  }

  .loading-container {
    padding: 30px 15px;
  }

  .loading-spinner {
    width: 35px;
    height: 35px;
  }

  .loading-container p {
    font-size: 15px;
  }

  .no-more-products {
    padding: 30px 15px;
    font-size: 16px;
  }
}

@media (max-width: 600px) {
  .produtos-wrapper {
    padding-top: 80px;
  }

  .produtos-container {
    padding: 20px 10px;
  }

  .produtos-header h1 {
    font-size: 28px;
    margin-bottom: 8px;
  }

  .produtos-header p {
    font-size: 14px;
  }

  .produtos-filtros {
    margin-bottom: 30px;
  }

  .filtro-btn {
    padding: 8px 16px;
    font-size: 13px;
  }

  .loading-container {
    padding: 25px 10px;
    gap: 15px;
  }

  .loading-spinner {
    width: 30px;
    height: 30px;
    border-width: 3px;
  }

  .loading-container p {
    font-size: 14px;
  }

  .no-more-products {
    padding: 25px 10px;
    font-size: 15px;
  }
}

@media (max-width: 480px) {
  .produtos-header h1 {
    font-size: 24px;
  }

  .produtos-header p {
    font-size: 13px;
  }

  .filtro-btn {
    padding: 8px 14px;
    font-size: 12px;
  }

  .loading-container p {
    font-size: 13px;
  }

  .no-more-products {
    font-size: 14px;
  }
}
```

### `app\(main)\produtos\ProdutosContent.jsx`
```
'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import ProductCard from '@/components/ProductCard';
import BrandsCarousel from '@/components/BrandsCarousel';
import { brands, produtosMock } from '@/lib/produtosData';
import { carregarProdutosSalvos } from '@/lib/produtosStorage';
import './produtos.css';

const PRODUCTS_PER_LOAD = 12; // Quantidade de produtos carregados por vez

export default function ProdutosContent() {
  const [selectedBrand, setSelectedBrand] = useState('Todos');
  const [visibleProducts, setVisibleProducts] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [produtosAtuais, setProdutosAtuais] = useState(produtosMock);
  const observerRef = useRef();

  useEffect(() => {
    const savedProdutos = carregarProdutosSalvos();
    if (savedProdutos) {
      setProdutosAtuais(savedProdutos);
    }
  }, []);

  // Filtrar e ordenar produtos por prioridade
  const produtosFiltrados = React.useMemo(() => {
    let produtos = selectedBrand === 'Todos'
      ? produtosAtuais
      : produtosAtuais.filter((produto) => produto.marca === selectedBrand);

    // Ordenar por prioridade (menor número = maior prioridade)
    return [...produtos].sort((a, b) => (a.prioridade || 999) - (b.prioridade || 999));
  }, [selectedBrand, produtosAtuais]);

  // Reset visible products quando a marca ou o ranking de produtos muda
  useEffect(() => {
    setVisibleProducts(produtosFiltrados.slice(0, PRODUCTS_PER_LOAD));
    setIsLoading(false); // Reset loading state
  }, [selectedBrand, produtosFiltrados]);

  // Atualizar hasMore quando produtosFiltrados muda
  useEffect(() => {
    setHasMore(produtosFiltrados.length > PRODUCTS_PER_LOAD);
  }, [produtosFiltrados]);

  // Função para carregar mais produtos
  const loadMoreProducts = useCallback(() => {
    if (isLoading || !hasMore) return;

    setIsLoading(true);

    // Simular delay de carregamento (pode ser removido em produção)
    setTimeout(() => {
      setVisibleProducts(prevVisible => {
        const currentLength = prevVisible.length;
        const nextProducts = produtosFiltrados.slice(
          currentLength,
          currentLength + PRODUCTS_PER_LOAD
        );

        const newVisibleProducts = [...prevVisible, ...nextProducts];
        setHasMore(newVisibleProducts.length < produtosFiltrados.length);
        setIsLoading(false);

        return newVisibleProducts;
      });
    }, 500); // 500ms de delay para simular carregamento
  }, [produtosFiltrados, isLoading, hasMore]);

  // Intersection Observer para detectar quando chegar no final
  const lastProductRef = useCallback(
    (node) => {
      if (isLoading) return;
      if (observerRef.current) observerRef.current.disconnect();

      observerRef.current = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting && hasMore) {
            loadMoreProducts();
          }
        },
        { threshold: 0.1 }
      );

      if (node) observerRef.current.observe(node);
    },
    [isLoading, hasMore, loadMoreProducts]
  );

  return (
    <div className="produtos-wrapper">
      <div className="produtos-container">


        {/* BRANDS CAROUSEL */}
        <BrandsCarousel
          brands={brands}
          selectedBrand={selectedBrand}
          onBrandClick={setSelectedBrand}
        />

        {/* GRID DE PRODUTOS */}
        <div className="produtos-grid">
          {visibleProducts.map((produto, index) => (
            <div
              key={produto.id}
              ref={index === visibleProducts.length - 1 ? lastProductRef : null}
            >
              <ProductCard product={produto} />
            </div>
          ))}
        </div>

        {/* LOADING INDICATOR */}
        {isLoading && (
          <div className="loading-container">
            <div className="loading-spinner"></div>
            <p>Carregando mais produtos...</p>
          </div>
        )}

        {/* MENSAGEM QUANDO NÃO HÁ MAIS PRODUTOS */}
        {!hasMore && visibleProducts.length > 0 && (
          <div className="no-more-products">
            <p>Você viu todos os produtos desta categoria! 🎉</p>
          </div>
        )}

        {/* CTA FINAL */}
        <div style={{ textAlign: 'center', marginTop: '60px', paddingBottom: '40px' }}>
          <h2 style={{ fontSize: '28px', marginBottom: '20px', color: '#003759' }}>
            Não encontrou o que procura?
          </h2>
          <p style={{ fontSize: '18px', marginBottom: '30px', color: '#666' }}>
            Entre em contato pelo WhatsApp e fale com nosso time
          </p>
          <a
            href="https://wa.me/556235881956"
            target="_blank"
            rel="noreferrer"
            style={{
              display: 'inline-block',
              backgroundColor: '#25D366',
              color: 'white',
              padding: '15px 40px',
              borderRadius: '50px',
              textDecoration: 'none',
              fontWeight: 'bold',
              fontSize: '18px',
              transition: 'background-color 0.2s',
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = '#128C7E')}
            onMouseOut={(e) => (e.target.style.backgroundColor = '#25D366')}
          >
            <i className="fab fa-whatsapp" style={{ marginRight: '10px' }}></i>
            Fale com a gente
          </a>
        </div>
      </div>
    </div>
  );
}
```

### `app\(main)\sobre-nos\page.jsx`
```
import SobreNosContent from './SobreNosContent';

export const metadata = {
  title: 'Sobre Nós | Casa de Ração Atlântico - Goiânia',
  description: 'Conheça a história da Casa de Ração Atlântico. Ração barata e de qualidade em Goiânia, Jardim Atlântico. Pet shop especializado.',
  keywords: 'sobre nós, pet shop Goiânia, ração barata Goiânia, Jardim Atlântico',
};

export default function SobreNosPage() {
  return <SobreNosContent />;
}
```

### `app\(main)\sobre-nos\SobreNosContent.jsx`
```
'use client';

import Carrossel from '@/components/Carrossel';

export default function SobreNosContent() {
  return (
    <div className="sobre-nos-wrapper">
      {/* SEÇÃO PRINCIPAL COM CARROSSEL E QUEM SOMOS */}
      <main className="cra-hero-section">
        {/* CARROSSEL LADO ESQUERDO */}
        <div className="cra-hero-carousel">
          <h2 className="cra-title">Fotos da Casa de Ração Atlântico</h2>
          <Carrossel />
        </div>

        {/* SEÇÃO QUEM SOMOS LADO DIREITO */}
        <section className="cra-hero-content">
          <h2 className="cra-quem-somos-title">Bem-vindo à Casa de Ração Atlântico</h2>
        <p className="cra-quem-somos-descricao">
          Somos uma empresa dedicada ao bem-estar dos animais, oferecendo
          produtos de alta qualidade para pets em Goiânia. Localizada no bairro
          Jardim Atlântico, nossa loja oferece uma variedade completa de rações,
          petiscos e acessórios para cães, gatos e outros pets. 
        </p>
        <p className="cra-quem-somos-descricao" style={{ marginTop: '20px' }}>
          Mais do que vender produtos, empreender com propósito é servir. É
          abençoar vidas, gerar empregos, cultivar relacionamentos e refletir
          a luz de Cristo em cada detalhe do negócio. É entender que
          prosperidade não se mede apenas em cifras, mas em impacto,
          integridade e fidelidade.
        </p>
        </section>
      </main>

      {/* CONTEÚDO SOBRE A EMPRESA */}
      <div className="produtos-container">
        <div style={{ maxWidth: '900px', margin: '0 auto', lineHeight: '1.8' }}>
          <section style={{ marginBottom: '50px' }}>
            <h2 style={{ fontSize: '28px', color: '#003759', marginBottom: '20px' }}>
              Nossos Valores
            </h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '20px',
            }}>
              <div style={{
                backgroundColor: '#f5f5f5',
                padding: '20px',
                borderRadius: '8px',
                border: '2px solid #25D366',
              }}>
                <h3 style={{ color: '#003759', marginBottom: '10px' }}>
                  <i className="fas fa-heart" style={{ marginRight: '10px', color: '#25D366' }}></i>
                  Bem-estar Animal
                </h3>
                <p style={{ fontSize: '14px', color: '#555' }}>
                  Dedicados ao bem-estar e saúde dos seus pets
                </p>
              </div>
              <div style={{
                backgroundColor: '#f5f5f5',
                padding: '20px',
                borderRadius: '8px',
                border: '2px solid #25D366',
              }}>
                <h3 style={{ color: '#003759', marginBottom: '10px' }}>
                  <i className="fas fa-star" style={{ marginRight: '10px', color: '#25D366' }}></i>
                  Qualidade
                </h3>
                <p style={{ fontSize: '14px', color: '#555' }}>
                  Oferecemos apenas produtos de qualidade premium
                </p>
              </div>
              <div style={{
                backgroundColor: '#f5f5f5',
                padding: '20px',
                borderRadius: '8px',
                border: '2px solid #25D366',
              }}>
                <h3 style={{ color: '#003759', marginBottom: '10px' }}>
                  <i className="fas fa-handshake" style={{ marginRight: '10px', color: '#25D366' }}></i>
                  Confiança
                </h3>
                <p style={{ fontSize: '14px', color: '#555' }}>
                  Relacionamentos baseados em integridade e honestidade
                </p>
              </div>
            </div>
          </section>

          <section style={{ marginBottom: '50px' }}>
            <h2 style={{ fontSize: '28px', color: '#003759', marginBottom: '20px' }}>
              Nossa Localização
            </h2>
            <div style={{
              backgroundColor: '#f5f5f5',
              padding: '30px',
              borderRadius: '8px',
              marginBottom: '20px',
            }}>
              <p style={{ fontSize: '16px', color: '#333', marginBottom: '15px' }}>
                <strong>Casa de Ração Atlântico</strong>
              </p>
              <p style={{ fontSize: '16px', color: '#555', marginBottom: '10px' }}>
                📍 Av. Guarujá, nº 84, Jardim Atlântico, Goiânia – GO
              </p>
              <p style={{ fontSize: '16px', color: '#555', marginBottom: '10px' }}>
                📞 (62) 3588-1956
              </p>
              <p style={{ fontSize: '16px', color: '#555' }}>
                🕐 Segunda a sábado: 7h às 19h
              </p>
            </div>
            <div style={{ height: '300px', borderRadius: '8px', overflow: 'hidden' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15282.95012099381!2d-49.295514!3d-16.739943!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ef70062f7c0cb%3A0xa043d7ff1ae1cfd6!2zQ2FzYSBkZSBSYcOnw6NvIEF0bMOibnRpY28!5e0!3m2!1spt-BR!2sbr!4v1753994278177!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Casa de Ração Atlântico"
              ></iframe>
            </div>
          </section>

          <section style={{ marginBottom: '50px', textAlign: 'center' }}>
            <h2 style={{ fontSize: '28px', color: '#003759', marginBottom: '30px' }}>
              Venha nos Visitar!
            </h2>
            <a
              href="https://wa.me/556235881956"
              target="_blank"
              rel="noreferrer"
              style={{
                display: 'inline-block',
                backgroundColor: '#25D366',
                color: 'white',
                padding: '15px 40px',
                borderRadius: '50px',
                textDecoration: 'none',
                fontWeight: 'bold',
                fontSize: '18px',
                transition: 'background-color 0.2s',
                marginRight: '20px',
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = '#128C7E')}
              onMouseOut={(e) => (e.target.style.backgroundColor = '#25D366')}
            >
              <i className="fab fa-whatsapp" style={{ marginRight: '10px' }}></i>
              Conversar no WhatsApp
            </a>
            <a
              href="https://www.google.com/maps/place/Casa+de+Ra%C3%A7%C3%A3o+Atl%C3%A2ntico/@-16.7399401,-49.2968012,18z/data=!3m1!4b1!4m6!3m5!1s0x935ef70062f7c0cb:0xa043d7ff1ae1cfd6!8m2!3d-16.7399427!4d-49.2955137!16s%2Fg%2F11x6lty7sr?entry=ttu&g_ep=EgoyMDI2MDQxNC4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noreferrer"
              style={{
                display: 'inline-block',
                backgroundColor: '#003759',
                color: 'white',
                padding: '15px 40px',
                borderRadius: '50px',
                textDecoration: 'none',
                fontWeight: 'bold',
                fontSize: '18px',
                transition: 'background-color 0.2s',
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = '#002540')}
              onMouseOut={(e) => (e.target.style.backgroundColor = '#003759')}
            >
              <i className="fas fa-map-location-dot" style={{ marginRight: '10px' }}></i>
              Como Chegar
            </a>
          </section>
        </div>
      </div>
    </div>
  );
}
```

### `app\admin\produtos\page.jsx`
```
'use client';

import { useState, useEffect } from 'react';
import GerenciadorPrioridades from '@/components/GerenciadorPrioridades';
import { produtosMock } from '@/lib/produtosData';
import { carregarProdutosSalvos, salvarProdutosNoLocalStorage } from '@/lib/produtosStorage';

export default function AdminProdutosPage() {
  const [produtos, setProdutos] = useState(produtosMock);
  const [mensagem, setMensagem] = useState('');

  useEffect(() => {
    const savedProdutos = carregarProdutosSalvos();
    if (savedProdutos) {
      setProdutos(savedProdutos);
    }
  }, []);

  const handleProdutosChange = (novosProdutos) => {
    setProdutos(novosProdutos);
    salvarProdutosNoLocalStorage(novosProdutos);
    setMensagem('Prioridades salvas com sucesso!');

    setTimeout(() => setMensagem(''), 3000);
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f8f9fa', padding: '20px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <header style={{ marginBottom: '30px', textAlign: 'center' }}>
          <h1 style={{ color: '#003759', marginBottom: '10px' }}>
            Administração - Produtos
          </h1>
          <p style={{ color: '#666', margin: 0 }}>
            Gerencie as prioridades dos produtos para controlar a ordem de exibição
          </p>
        </header>

        {mensagem && (
          <div style={{
            padding: '15px',
            backgroundColor: '#d4edda',
            color: '#155724',
            border: '1px solid #c3e6cb',
            borderRadius: '4px',
            marginBottom: '20px',
            textAlign: 'center'
          }}>
            {mensagem}
          </div>
        )}

        <GerenciadorPrioridades
          produtos={produtos}
          onProdutosChange={handleProdutosChange}
        />

        <div style={{ marginTop: '30px', textAlign: 'center' }}>
          <a
            href="/produtos"
            style={{
              display: 'inline-block',
              padding: '12px 24px',
              backgroundColor: '#003759',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '6px',
              fontWeight: 'bold'
            }}
          >
            ← Voltar para Produtos
          </a>
        </div>
      </div>
    </div>
  );
}
```

### `app\globals.css`
```
/* ============================================================
   RESET
   ============================================================ */

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: sans-serif;
  overflow-x: hidden;
  background-color: #fff;
}

main {
  min-height: 100vh;
}

/* ============================================================
   TIPOGRAFIA GLOBAL
   ============================================================ */

.cra-title {
  font-family: "Fraunces", serif;
  font-weight: 700;
  font-size: 50px;
  margin-bottom: 10px;
  color: #fff;
  text-align: center;
}

/* ============================================================
   HEADER
   ============================================================ */

.cra-header-bar {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  background: #003759;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
}

.cra-logo {
  width: 500px;
  height: auto;
}

.cra-btn-whatsapp {
  background-color: #25D366;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 10px;
  transition: background 0.2s;
  border: none;
  cursor: pointer;
  font-size: 1rem;
}

.cra-btn-whatsapp:hover { background-color: #128C7E; }

.cra-btn-whatsapp i { font-size: 30px; }

.cra-btn-whatsapp p { margin: 0; }

/* ============================================================
   FACHADA (HERO BANNER)
   ============================================================ */

.cra-fachada {
  margin-top: 14vh;
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.cra-fachada::before {
  content: "";
  position: absolute;
  inset: 0;
  background: var(--background-fachada-image) center / cover no-repeat;
  filter: blur(3px) brightness(0.9);
  transform: scale(1.1);
  z-index: 0;
}

.cra-fachada-overlay {
  position: relative;
  z-index: 1;
  width: 120%;
  max-width: 5500px;
  margin-top: 0%;
}

.cra-fachada-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.cra-fachada-title {
  font-size: 32px;
  color: #fff;
}

/* ============================================================
   CARROSSEL DE PROMOÇÕES (KeenSlider)
   ============================================================ */

.cra-carrossel-promocoes {
  width: 100%;
  height: 500px;
  margin: 10px;
  border-radius: 10px;
  overflow: hidden;
  max-width: 1200px;
}

.cra-carrossel-promocoes .keen-slider__slide {
  aspect-ratio: 9 / 16;
}

.cra-carrossel-promocoes .cra-carrossel-item {
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 12px;
}

.cra-carrossel-promocoes img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
}

/* ============================================================
   HERO SECTION (CARROSSEL PRINCIPAL + QUEM SOMOS)
   ============================================================ */

.cra-hero-section {
  display: grid;
  margin-top: 20px;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  max-width: 100%;
  align-items: center;
  background: linear-gradient(rgba(1, 37, 83, 0.623), rgba(5, 55, 121, 0.644)),
              var(--background-hero-image) center / cover no-repeat;
}

.cra-hero-carousel {
  border-radius: 20px;
  padding: 20px;
  overflow: hidden;
  position: relative;
  max-height: 100%;
}

.cra-hero-carousel .cra-title {
  margin-top: 90px;
  justify-self: center;
  padding: 30px;
}

.cra-hero-carousel .cra-carrossel {
  height: 600px;
  background-color: rgba(15, 114, 28, 0.61);
}

.cra-hero-content {
  padding: 50px 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  background-color: rgba(15, 114, 28, 0.61);
  border-radius: 20px;
  color: #fff;
  margin: 30px 30px 30px 0;
}

.cra-hero-content .cra-quem-somos-title {
  margin-top: 0;
  margin-bottom: 20px;
}

.cra-hero-content .cra-quem-somos-descricao {
  font-size: 16px;
  line-height: 1.6;
  text-align: justify;
}

/* ============================================================
   CARROSSEL PRINCIPAL (manual, com botões)
   ============================================================ */

.cra-carrossel {
  width: 100%;
  height: 600px;
  padding: 20px;
  border-radius: 20px;
  overflow: hidden;
  max-width: 100%;
  position: relative;
}

.cra-carrossel-container {
  display: flex;
  height: 100%;
  width: 100%;
  gap: 20px;
  transition: transform 0.5s ease-in-out;
}

.cra-carrossel-item {
  width: 100%;
  height: 100%;
  overflow: hidden;
  flex-shrink: 0;
  aspect-ratio: 1 / 1;
  position: relative;
}

.cra-carrossel-item::before {
  content: "";
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  filter: blur(20px);
  transform: scale(1.2);
  z-index: 0;
}

.cra-carrossel-item img {
  position: relative;
  z-index: 1;
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.cra-carrossel img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
}

.cra-prev,
.cra-next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.6);
  border: none;
  color: white;
  font-size: 24px;
  padding: 15px 20px;
  cursor: pointer;
  z-index: 10;
  transition: background-color 0.3s ease;
  border-radius: 5px;
}

.cra-prev:hover,
.cra-next:hover { background-color: rgba(0, 0, 0, 0.9); }

.cra-prev { left: 10px; }

.cra-next { right: 10px; }

/* ============================================================
   SECTION CONTENT (LAYOUT GERAL)
   ============================================================ */

.cra-main {
  background: var(--background-hero-image) center / cover no-repeat;
  background-size: cover;
  min-height: 100vh;
}

.cra-section-content {
  display: flex;
  align-items: start;
  justify-content: space-between;
  gap: 100px;
  max-width: 1400px;
  margin: 20px auto;
  text-align: center;
  background-color: rgba(15, 114, 28, 0.61);
  padding: 50px;
  border-radius: 20px;
  color: #fff;
}

.cra-section-left,
.cra-section-right {
  color: #000;
  line-height: 1;
  max-width: 100vw;
  overflow-x: hidden;
  flex: 1;
}

/* ============================================================
   QUEM SOMOS
   ============================================================ */

.cra-quem-somos {
  padding: 20px;
  text-align: center;
  background-color: rgba(15, 114, 28, 0.61);
  border-radius: 20px;
  margin: 10px auto;
  max-width: 1400px;
  color: #fff;
}

.cra-quem-somos-title {
  font-family: "Fraunces", serif;
  font-weight: 700;
  font-size: 36px;
  margin-bottom: 10px;
  color: #fff;
}

.cra-quem-somos-descricao {
  font-size: 24px;
  line-height: 1.5;
  text-align: justify;
  color: #fff;
  font-weight: 400;
}

/* ============================================================
   PRODUTOS
   ============================================================ */

.produtos-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 40px 20px;
  margin-top: 14vh;
}

.produtos-header {
  text-align: center;
  margin-bottom: 50px;
}

.produtos-header h1 {
  font-family: "Fraunces", serif;
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 10px;
  color: #003759;
}

.produtos-header p {
  font-size: 18px;
  color: #666;
}

.produtos-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 30px;
  margin-bottom: 40px;
}

.product-card {
  background: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

.product-card img {
  width: 100%;
  height: 250px;
  object-fit: contain;
  background-color: #f8f8f8;
}

.product-card-content { padding: 20px; }

.product-card h3 {
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 8px;
  color: #003759;
}

.product-card-category {
  font-size: 12px;
  color: #999;
  text-transform: uppercase;
  margin-bottom: 12px;
}

.product-card-price {
  font-size: 24px;
  font-weight: 700;
  color: #25D366;
  margin-bottom: 16px;
}

.product-card-button {
  width: 100%;
  background-color: #25D366;
  color: white;
  padding: 12px;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s;
  text-decoration: none;
  display: inline-block;
  text-align: center;
}

.product-card-button:hover { background-color: #128C7E; }

/* ============================================================
   FOOTER
   ============================================================ */

.cra-footer {
  background-color: #003759;
  color: #fff;
}

.cra-footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
}

.cra-footer-info {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
}

.cra-footer-info-logo img {
  width: 100px;
  height: auto;
}

.cra-footer-social {
  display: flex;
  justify-content: left;
  margin-top: 10px;
  gap: 10px;
}

.cra-footer-social a {
  color: #fff;
  font-size: 24px;
  text-decoration: none;
  transition: opacity 0.2s;
}

.cra-footer-social a:hover { opacity: 0.8; }

.cra-footer-info-text {
  font-size: 16px;
  line-height: 1.7;
  text-align: left;
  color: #fff;
}

.cra-footer-info-text p { margin: 0; }

.cra-footer-info-text i { margin-right: 5px; }

.cra-footer-map iframe {
  width: 400px;
  height: 280px;
  border: 0;
  border-radius: 12px;
}

.cra-footer-credito {
  text-align: center;
  padding: 5px 0;
  font-size: 14px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

/* ============================================================
   BOTÃO WHATSAPP FIXO
   ============================================================ */

.cra-whatsapp-button-fixed {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 999;
  background-color: #25D366;
  color: white;
  padding: 15px 20px;
  border-radius: 50px;
  text-decoration: none;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 10px;
  transition: all 0.2s;
  box-shadow: 0 4px 12px rgba(37, 211, 102, 0.4);
  border: none;
  cursor: pointer;
  font-size: 1rem;
}

.cra-whatsapp-button-fixed:hover {
  background-color: #128C7E;
  transform: scale(1.1);
  box-shadow: 0 6px 16px rgba(18, 140, 126, 0.4);
}

.cra-whatsapp-button-fixed i { font-size: 24px; }

/* ============================================================
   RESPONSIVIDADE
   ============================================================ */

/* --- Tablets largos (≤ 1024px) --- */
@media (max-width: 1024px) {
  .cra-hero-section {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .cra-hero-carousel { min-height: 400px; }

  .cra-hero-content { margin: 0 20px 20px 20px; }
}

/* --- Tablets (≤ 992px) --- */
@media (max-width: 992px) {
  .cra-header-bar {
    height: 100px;
    flex-wrap: wrap;
    justify-content: center;
    gap: 16px;
    padding: 12px;
  }

  .cra-fachada {
    margin-top: 100px;
    height: 100vh;
  }

  .cra-logo { max-width: 220px; }

  .cra-btn-whatsapp {
    padding: 10px 16px;
    font-size: 15px;
  }

  .cra-section-content {
    flex-direction: column;
    gap: 30px;
    padding: 30px;
    margin: 20px auto;
  }

  .cra-title {
    font-size: 28px;
    margin-bottom: 30px;
  }

  .cra-quem-somos {
    margin: 20px auto;
    padding: 24px;
  }

  .cra-quem-somos-descricao {
    font-size: 20px;
    padding: 0;
  }

  .cra-footer-content {
    flex-direction: column;
    gap: 20px;
    align-items: stretch;
  }

  .cra-footer-info {
    flex-direction: column;
    align-items: flex-start;
  }

  .cra-footer-info-logo img {
    width: 120px;
    margin-bottom: 10px;
  }

  .cra-footer-map iframe {
    width: 100%;
    height: 240px;
  }

  .produtos-grid {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
}

/* --- Tablets pequenos / celulares grandes (≤ 768px) --- */
/* UNIFICADO: era duplicado em dois blocos separados */
@media (max-width: 768px) {
  .cra-header-bar {
    height: auto;
    padding: 14px 12px;
  }

  .cra-fachada { height: 100vh; }

  .cra-hero-section {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .cra-hero-carousel { min-height: 300px; }

  /* Resolução do conflito: mantido 400px (valor mais útil que 100%) */
  .cra-hero-carousel .cra-carrossel {
    height: 400px;
  }

  .cra-hero-content {
    margin: 0;
    padding: 30px 20px;
  }

  .cra-hero-content .cra-quem-somos-descricao { font-size: 14px; }

  .cra-section-content {
    flex-direction: column;
    gap: 30px;
    padding: 30px;
  }

  .cra-btn-whatsapp {
    width: 100%;
    justify-content: center;
    gap: 8px;
  }

  .cra-btn-whatsapp i { font-size: 20px; }

  .cra-carrossel {
    max-width: 100%;
    height: 400px;
  }

  .cra-carrossel-container { height: 360px; }

  .cra-carrossel-promocoes .keen-slider__slide {
    height: 30vh;
    width: 100%;
  }

  .cra-quem-somos-title { font-size: 26px; }

  .cra-quem-somos-descricao { font-size: 18px; }

  .cra-prev,
  .cra-next {
    padding: 10px 15px;
    font-size: 18px;
  }

  .cra-whatsapp-button-fixed {
    padding: 12px 16px;
    bottom: 15px;
    right: 15px;
  }

  .cra-whatsapp-button-fixed i { font-size: 20px; }

  .produtos-header h1 { font-size: 36px; }

  .produtos-grid {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 20px;
  }
}

/* --- Celulares médios (≤ 600px) --- */
/* UNIFICADO: era duplicado em dois blocos separados */
@media (max-width: 600px) {
  .cra-fachada {
    margin-top: 90px;
    height: 100vh;
  }

  .cra-logo { max-width: 180px; }

  .cra-section-content {
    padding: 16px;
    gap: 18px;
  }

  .cra-carrossel-container { height: 280px; }

  /* Resolução do conflito: mantido 20px (valor do bloco "melhorado") */
  .cra-title { font-size: 20px; }

  /* Resolução do conflito: mantido 20px (valor do bloco "melhorado") */
  .cra-quem-somos-title { font-size: 20px; }

  /* Resolução do conflito: mantido 14px (valor do bloco "melhorado") */
  .cra-quem-somos-descricao {
    font-size: 14px;
    line-height: 1.6;
  }

  .cra-hero-carousel .cra-carrossel {
    height: 300px;
    padding: 10px;
  }

  .cra-carrossel-item { aspect-ratio: auto; }

  .cra-prev,
  .cra-next {
    padding: 10px 12px;
    font-size: 14px;
  }

  .cra-footer-info-text { font-size: 15px; }

  .cra-footer-map iframe { height: 220px; }

  .produtos-container { padding: 20px 15px; }

  .produtos-header h1 { font-size: 28px; }

  .produtos-grid {
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    gap: 15px;
  }

  .product-card { min-height: auto; }
}

/* --- Celulares pequenos (≤ 480px) --- */
/* UNIFICADO: era duplicado em dois blocos separados */
@media (max-width: 480px) {
  .cra-header-bar {
    justify-content: space-between;
    height: 14vh;
    padding: 10px;
    gap: 0;
  }

  .cra-logo {
    width: 150px;
    height: auto;
  }

  .cra-fachada {
    margin-top: 14vh;
    padding: 10px;
  }

  /* Título menor para não quebrar em 3 linhas */
  .cra-title {
    font-size: 30px;
    padding: 10px;
    margin-top: 10px;
    text-align: center;
  }

  .cra-hero-carousel {
    padding: 8px;
    border-radius: 12px;

  }

  /* Altura unificada — sem conflito */
  .cra-hero-carousel .cra-carrossel,
  .cra-carrossel {
    height: 400px;
    padding: 8px;
    border-radius: 12px;
    background-color: rgba(15, 114, 28, 0.61);
  }

  .cra-carrossel-container {
    width: 100%;
    height: 100%;
    gap: 20px; /* remove o gap para não vazar a próxima imagem */
  }

  .cra-carrossel-item {
    width: 100%;
    flex-shrink: 0;
    aspect-ratio: auto;
  }

  .cra-carrossel-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center top;
  }

  .cra-carrossel-promocoes .keen-slider__slide {
    width: 100%;
    height: 30%;
  }

  .cra-prev,
  .cra-next {
    padding: 6px 10px;
    font-size: 14px;
  }

  /* Hero content sem cortar o botão WhatsApp */
  .cra-hero-content {
    padding: 16px;
    margin: 0 0 10px 0;
    border-radius: 12px;
    gap: 10px;
  }

  .cra-hero-content .cra-quem-somos-title {
    font-size: 18px;
  }

  .cra-hero-content .cra-quem-somos-descricao {
    font-size: 13px;
    line-height: 1.5;
  }

  .cra-section-content { padding: 15px; }

  .cra-footer-map iframe { height: 200px; }

  .produtos-container { padding: 20px 10px; }

  .produtos-header h1 { font-size: 24px; }

  .produtos-grid {
    grid-template-columns: 1fr;
    gap: 10px;
  }
}
```

### `app\layout.jsx`
```
import './globals.css';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';
import { withPublicPath } from '@/lib/publicPath';

const logoPath = withPublicPath('/logo roda pe.png');
const backgroundFachada = withPublicPath('/fachada.jpg');
const backgroundHero = withPublicPath('victorbrunna.jpg');

export const metadata = {
  title: 'Casa de Ração Atlântico | Ração em Goiânia',
  description: 'Rações, petiscos e produtos pet com o melhor preço em Goiânia. Fale conosco pelo WhatsApp.',
  keywords: 'ração em Goiânia, pet shop, petiscos, produtos para cães, produtos para gatos',
  icons: {
    icon: logoPath,
  },
  openGraph: {
    title: 'Casa de Ração Atlântico | Ração em Goiânia',
    description: 'Rações, petiscos e produtos pet com o melhor preço em Goiânia.',
    url: 'https://www.casaderacaoatlantico.com.br',
    siteName: 'Casa de Ração Atlântico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="pt-BR"
      style={{
        '--background-fachada-image': `url(${backgroundFachada})`,
        '--background-hero-image': `url(${backgroundHero})`,
      }}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,100..900;1,9..144,100..900&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
        <link rel="stylesheet" href="https://static.elfsight.com/platform/platform.js" />
      </head>
      <body>
        <FloatingWhatsApp
          phoneNumber="556235881956"
          accountName="Casa de Ração Atlântico"
          statusMessage="Responde normalmente em 1 minuto"
          chatMessage="Olá! 🤝 Como podemos ajudar? 😊"
          placeholder="Digite sua mensagem..."
          allowClickAway
          allowEsc
          notification
          notificationDelay={30}
          notificationLoop={2}
          notificationSound={false}
          avatar={logoPath}
        />
        {children}
      </body>
    </html>
  );
}
```

### `app\linktree\layout.jsx`
```
import WhatsAppButton from '@/components/WhatsAppButton';

export default function LinktreeLayout({ children }) {
  return (
    <>
      <main>{children}</main>
      <WhatsAppButton />
    </>
  );
}
```

### `app\linktree\linktree.css`
```
.linktree-page {
  background: url('/MD1_4003 (1).jpg') no-repeat center center fixed;
  background-size: cover;
  min-height: 100vh;
}

.linktree-container {
  max-width: 480px;
  margin: 0 auto;
  padding: 20px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.linktree-header {
  text-align: center;
  margin-bottom: 40px;
  padding: 20px;
  background: rgba(0, 128, 0, 0.35);
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
}

.linktree-logo img {
  width: 120px;
  height: auto;
}

.linktree-title {
  font-family: "Fraunces", serif;
  font-size: 28px;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 8px;
  line-height: 1.2;
}

.linktree-subtitle {
  font-size: 16px;
  color: #ffffff;
  margin-bottom: 15px;
  font-weight: 500;
}

.linktree-social-icons {
  display: flex;
  justify-content: space-around;
  gap: 16px;
  margin: 18px auto 0;
}

.linktree-social-link {
  width: 52px;
  height: 52px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.5s ease;
}

.linktree-social-link:hover {
  transform: scale(1.5) rotateY(360deg);
}

.linktree-social-link img {
  width: 32px;
  height: auto;
}

.linktree-social-link i {
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  color: #fff;
}

.linktree-links {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 40px;
}

.linktree-link {
  display: block;
  text-decoration: none;
  background: rgba(0, 128, 0, 0.35);
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  overflow: hidden;
  backdrop-filter: blur(10px);
  border: 2px solid transparent;
  position: relative;
  z-index: 1;
  animation: fadeInUp 0.6s ease-out forwards;
}

.linktree-link:before {
  content: "";
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  height: 100%;
  background: #25D366;
  transition: 0.5s;
  z-index: 2;
  border-radius: 16px;
}

.linktree-link:hover:before {
  top: 0;
}

.linktree-link:nth-child(1):before { background: #25D366; }
.linktree-link:nth-child(2):before { background: #FF6B35; }
.linktree-link:nth-child(3):before { background: #FFD23F; }
.linktree-link:nth-child(4):before { background: #4ECDC4; }
.linktree-link:nth-child(5):before { background: #599deb; }
.linktree-link:nth-child(6):before { background: #d83006; }

.linktree-link:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
}

.linktree-link-content {
  display: flex;
  align-items: center;
  padding: 20px;
  gap: 16px;
  position: relative;
  z-index: 3;
}

.linktree-link-icon {
  width: 40px;
  height: 40px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: white;
  flex-shrink: 0;
  transition: 0.5s;
}

.linktree-link-icon img {
  width: 32px;
  height: auto;
}

.linktree-link:hover .linktree-link-icon {
  transform: rotateY(360deg);
}

.linktree-link-text {
  flex: 1;
  min-width: 0;
}

.linktree-link-text h3 {
  font-size: 18px;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 4px;
  line-height: 1.2;
}

.linktree-link-text p {
  font-size: 14px;
  color: #ffffff;
  line-height: 1.3;
}

.linktree-link-arrow {
  color: #ffffff;
  font-size: 16px;
  transition: all 0.3s ease;
}

.linktree-link:hover .linktree-link-arrow {
  transform: translateX(4px);
}

.linktree-footer {
  text-align: center;
  padding: 20px;
  background: rgba(0, 128, 0, 0.35);
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  margin-top: auto;
}

.linktree-footer p {
  font-size: 12px;
  color: #ffffff;
  margin: 2px 0;
  font-weight: 500;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.linktree-link:nth-child(1) { animation-delay: 0.1s; }
.linktree-link:nth-child(2) { animation-delay: 0.2s; }
.linktree-link:nth-child(3) { animation-delay: 0.3s; }
.linktree-link:nth-child(4) { animation-delay: 0.4s; }
.linktree-link:nth-child(5) { animation-delay: 0.5s; }
.linktree-link:nth-child(6) { animation-delay: 0.6s; }

@media (max-width: 480px) {
  .linktree-container {
    padding: 15px;
  }

  .linktree-header {
    margin-bottom: 30px;
    padding: 16px;
  }

  .linktree-logo img {
    width: 100px;
  }

  .linktree-title {
    font-size: 24px;
  }

  .linktree-subtitle {
    font-size: 15px;
  }

  .linktree-links {
    gap: 12px;
  }

  .linktree-link-content {
    padding: 16px;
    gap: 12px;
  }

  .linktree-link-icon {
    width: 45px;
    height: 45px;
    font-size: 18px;
  }

  .linktree-link-text h3 {
    font-size: 16px;
  }

  .linktree-link-text p {
    font-size: 13px;
  }
}

@media (max-width: 360px) {
  .linktree-title {
    font-size: 22px;
  }

  .linktree-link-content {
    padding: 14px;
  }

  .linktree-link-icon {
    width: 40px;
    height: 40px;
    font-size: 16px;
  }
}
```

### `app\linktree\page.jsx`
```
import './linktree.css';
import { withPublicPath } from '@/lib/publicPath';

export const metadata = {
  title: 'Links Úteis | Casa de Ração Atlântico',
  description: 'Acesso rápido aos nossos canais: WhatsApp, Instagram, Facebook, mapa, avaliações e mais.',
};

const socialLinks = [
  {
    title: 'TikTok',
    url: 'https://www.tiktok.com/@casaderacaoatlantico',
    icon: '/ico/tiktok.svg',
  },
  {
    title: 'Instagram',
    url: 'https://www.instagram.com/casaderacaoatlantico',
    icon: '/ico/instagram.svg',
  },
  {
    title: 'WhatsApp',
    url: 'https://wa.me/556235881956',
    icon: '/ico/whatsapp.svg',
  },
  {
    title: 'Facebook',
    url: 'https://www.facebook.com/casaderacaoatlantico',
    icon: '/ico/facebook.svg',
  },
];

const links = [
  {
    title: 'WhatsApp',
    url: 'https://wa.me/556235881956',
    icon: '/ico/whatsapp.svg',
    description: 'Fale conosco e tire suas dúvidas',
  },
  {
    title: 'Como Chegar',
    url: 'https://maps.google.com/?q=Av.+Guarujá,+nº+84,+Jardim+Atlântico,+Goiânia+-+GO',
    icon: '/ico/google-maps.svg',
    description: 'Encontre nossa loja em Goiânia',
  },
  {
    title: 'Avalie nossa loja',
    url: 'https://www.google.com/maps/place//data=!4m3!3m2!1s0x935ef70062f7c0cb:0xa043d7ff1ae1cfd6!12e1?source=g.page.m._&laa=merchant-review-solicitation',
    icon: '/ico/star-struck.svg',
    description: 'Sua avaliação é importante para nós',
  },
  {
    title: 'Nosso Site',
    url: 'https://www.casaderacaoatlantico.com.br',
    icon: '/ico/internet.svg',
    description: 'Conheça nossos produtos',
  },
  {
    title: 'Horário de Funcionamento',
    url: '#',
    icon: '/ico/stopwatch-time.svg',
    description: 'Segunda a sábado: 7h às 19h',
  },
  {
    title: 'Telefone',
    url: 'tel:+556235881956',
    icon: '/ico/phone-receiver.svg',
    description: '(62) 3588-1956',
  },
];

export default function LinktreePage() {
  const getIconSrc = (icon) => withPublicPath(icon);

  return (
    <div className="linktree-page">
      <div className="linktree-container">
        {/* HEADER */}
        <div className="linktree-header">
          <div className="linktree-logo">
            <img src={getIconSrc('/logo roda pe.png')} alt="Casa de Ração Atlântico" />
          </div>
          <h1 className="linktree-title">Casa de Ração Atlântico</h1>
          <p className="linktree-subtitle">Rações, acessórios e produtos para seu pet</p>
          
          {/* ÍCONES SOCIAIS */}
          <div className="linktree-social-icons">
            {socialLinks.map((social) => (
              <a
                key={social.title}
                href={social.url}
                className="linktree-social-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.title}
                title={social.title}
              >
                <img src={getIconSrc(social.icon)} alt={social.title} />
              </a>
            ))}
          </div>
        </div>

        {/* LINKS PRINCIPAIS */}
        <div className="linktree-links">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              className="linktree-link"
              target={link.url.startsWith('#') ? '_self' : '_blank'}
              rel={link.url.startsWith('#') ? '' : 'noopener noreferrer'}
            >
              <div className="linktree-link-content">
                <div
                  className="linktree-link-icon"
                  style={{
                    color: '#fff',
                  }}
                >
                  <img src={getIconSrc(link.icon)} alt={link.title} />
                </div>
                <div className="linktree-link-text">
                  <h3>{link.title}</h3>
                  <p>{link.description}</p>
                </div>
                <div className="linktree-link-arrow">
                  <i className="fas fa-arrow-right"></i>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* FOOTER */}
        <div className="linktree-footer">
          <p>© 2025 Casa de Ração Atlântico</p>
          <p>Goiânia – Jardim Atlântico</p>
        </div>
      </div>
    </div>
  );
}
```

### `components\BrandsCarousel.css`
```
.brands-section {
  width: 100%;
  background-color: #f9f9f9;
  border-bottom: 2px solid #e0e0e0;
  padding: 40px 20px;
  margin-bottom: 40px;
}

.brands-container {
  max-width: 1400px;
  margin: 0 auto;
}

.brands-title {
  text-align: center;
  font-family: "Fraunces", serif;
  font-size: 28px;
  font-weight: 700;
  color: #003759;
  margin-bottom: 30px;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.brands-slider-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.brands-slider {
  overflow: visible;
  flex: 1;
  position: relative;
}

.brands-slider.keen-slider {
  overflow: visible;
}

.keen-slider__slide {
  min-width: 0;
}

.brand-item {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
  min-width: 140px;
  background-color: white;
  border-radius: 12px;
  border: 1px solid #e0e0e0;
  transition: all 0.3s ease;
  height: 100px;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  flex: 0 0 auto;
  user-select: none;
}

.brand-item-content {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  border-radius: 12px;
  transition: all 0.3s ease;
}

.brand-item-content:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  border-color: #25d366;
}

.brand-item-content.active {
  border-color: #25d366;
  background-color: #ebfff4;
}

.brand-item span,
.brand-text {
  font-weight: 700;
  color: #003759;
}

.brand-logo {
  max-width: 100%;
  max-height: 80px;
  width: auto;
  height: auto;
  object-fit: contain;
  filter: brightness(0.95);
  transition: filter 0.3s ease;
}

.brand-item-content:hover .brand-logo {
  filter: brightness(1);
}

.brands-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(255, 255, 255, 0.9);
  border: 2px solid #e0e0e0;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 20px;
  font-weight: bold;
  color: #003759;
  transition: all 0.3s ease;
  z-index: 10;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.brands-nav:hover {
  background-color: #25d366;
  color: white;
  border-color: #25d366;
  transform: translateY(-50%) scale(1.1);
}

.brands-nav-left {
  left: -20px;
}

.brands-nav-right {
  right: -20px;
}

/* ============================================================
   RESPONSIVIDADE
   ============================================================ */

@media (max-width: 768px) {
  .brands-section {
    padding: 30px 15px;
    margin-bottom: 30px;
  }

  .brands-title {
    font-size: 24px;
    margin-bottom: 25px;
  }

  .brands-grid {
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    gap: 15px;
  }

  .brand-item {
    padding: 12px;
    min-height: 90px;
  }

  .brand-logo {
    max-height: 70px;
  }
}

@media (max-width: 600px) {
  .brands-section {
    padding: 20px 10px;
    margin-bottom: 25px;
  }

  .brands-title {
    font-size: 20px;
    margin-bottom: 20px;
  }

  .brands-grid {
    grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
    gap: 12px;
  }

  .brand-item {
    padding: 10px;
    min-height: 80px;
    border-radius: 8px;
  }

  .brand-logo {
    max-height: 60px;
  }
}

@media (max-width: 480px) {
  .brands-section {
    padding: 15px 10px;
    margin-bottom: 20px;
  }

  .brands-title {
    font-size: 18px;
    margin-bottom: 15px;
  }

  .brands-grid {
    grid-template-columns: repeat(auto-fit, minmax(70px, 1fr));
    gap: 10px;
  }

  .brand-item {
    padding: 8px;
    min-height: 70px;
    border-radius: 6px;
  }

  .brand-logo {
    max-height: 50px;
  }
}
```

### `components\BrandsCarousel.jsx`
```
'use client';

import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import './BrandsCarousel.css';
import { withPublicPath } from '@/lib/publicPath';

const defaultBrands = [
  { id: 1, name: 'Fórmula Natural', folder: 'Fórmula Natural', logo: '/Produtos/Marca/formlanatural.png' },
  { id: 2, name: 'Bionatura', folder: 'Bionatural', logo: '/Produtos/Marca/Bionatural.png' },
  { id: 3, name: 'Finotrato', folder: 'Finotrato', logo: '/Produtos/Marca/Finotrato.png' },
  { id: 4, name: 'N&D', folder: 'N&D', logo: '/Produtos/Marca/n&d.png' },
  { id: 5, name: 'Hills', folder: 'Hills', logo: '/Produtos/Marca/hills.avif' },
  { id: 6, name: 'Magnus', folder: 'Magnus', logo: '/Produtos/Marca/MAGNUS.png' },
  { id: 7, name: 'Origens', folder: 'Origens', logo: '/Produtos/Marca/ORIGENS.png' },
  { id: 8, name: 'Special Cat', folder: 'special Cat', logo: '/Produtos/Marca/SpecialCat.png' },
  { id: 9, name: 'Special dog', folder: 'Special dog', logo: '/Produtos/Marca/SpecialDog.png' },
  { id: 10, name: 'VittA Natural', folder: 'VittA_Natural', logo: '/Produtos/Marca/VittA_Natural.png' },
  { id: 11, name: 'GoldeN', folder: 'GoldeN', logo: '/Produtos/Marca/golden.png' },
  { id: 12, name: 'PremieR', folder: 'PremieR', logo: '/Produtos/Marca/Premier.png' },
  { id: 13, name: 'PremieR_Nattu', folder: 'PremieR_Nattu', logo: '/Produtos/Marca/PremieR_Nattu.png' },
  { id: 14, name: 'Besser', folder: 'Besser', logo: '/Produtos/Marca/Besser.png' },
];

function AutoPlayPlugin(callback, interval) {
  return (slider) => {
    let timeout;
    let mouseOver = false;

    function clearNextTimeout() {
      clearTimeout(timeout);
    }

    function nextTimeout() {
      clearTimeout(timeout);
      if (mouseOver) return;
      timeout = setTimeout(() => {
        slider.next();
      }, interval);
    }

    slider.on('created', () => {
      slider.container.addEventListener('mouseover', () => {
        mouseOver = true;
        clearNextTimeout();
      });
      slider.container.addEventListener('mouseout', () => {
        mouseOver = false;
        nextTimeout();
      });
      nextTimeout();
    });

    slider.on('dragStarted', clearNextTimeout);
    slider.on('animationEnded', nextTimeout);
    slider.on('updated', nextTimeout);
  };
}

export default function BrandsCarousel({ brands = defaultBrands, selectedBrand = 'Todos', onBrandClick }) {
  const items = [{ id: 'all', name: 'Todos', logo: null }, ...brands];
  const trackItems = [...items, ...items]; // Duplicar para efeito infinito

  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    mode: 'free-snap',
    slides: {
      perView: 6,
      spacing: 20,
    },
    drag: true,
    dragSpeed: 1,
    breakpoints: {
      '(max-width: 1024px)': {
        slides: {
          perView: 4,
          spacing: 15,
        },
      },
      '(max-width: 768px)': {
        slides: {
          perView: 3,
          spacing: 10,
        },
      },
      '(max-width: 480px)': {
        slides: {
          perView: 2.5,
          spacing: 8,
        },
      },
    },
  }, [AutoPlayPlugin(() => {}, 3000)]); // Auto-play a cada 3 segundos

  const scrollToDirection = (direction) => {
    if (instanceRef.current) {
      if (direction === 'left') {
        instanceRef.current.prev();
      } else {
        instanceRef.current.next();
      }
    }
  };

  return (
    <div className="brands-section">
      <div className="brands-container">
        <h2 className="brands-title">Marcas que Confiamos</h2>
        <div className="brands-slider-wrapper">
          <div ref={sliderRef} className="keen-slider brands-slider" aria-label="Carrossel de marcas">
            {trackItems.map((brand, index) => (
              <div
                key={`${brand.id}-${index}`}
                className="keen-slider__slide brand-item"
              >
                <div
                  role="button"
                  tabIndex={0}
                  className={`brand-item-content ${selectedBrand === brand.name ? 'active' : ''}`}
                  onClick={() => onBrandClick?.(brand.name)}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter' || event.key === ' ') onBrandClick?.(brand.name);
                  }}
                >
                  {brand.logo ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={withPublicPath(brand.logo)}
                      alt={brand.name}
                      title={brand.name}
                      className="brand-logo"
                    />
                  ) : (
                    <span className="brand-text">Todos</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
```

### `components\Carrossel.jsx`
```
'use client';

import { useState, useEffect, useRef } from 'react';
import { withPublicPath } from '@/lib/publicPath';

const fotos = [
  1, 2, 3, 5, 6, 7, 9, 10, 11, 13, 15, 17, 19, 20, 22, 25, 26, 33, 34, 35,
  36, 38, 40, 41, 42, 44, 46, 48, 49, 51, 53, 55, 56, 59, 60, 61, 62, 63,
  64, 65, 66, 67, 69, 71, 73, 74, 75, 76, 77, 79, 80, 82, 83, 84, 86, 87,
  88, 89, 90, 91, 92, 94,
];

export default function Carrossel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % fotos.length);
    }, 5000); // Muda a cada 5 segundos

    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + fotos.length) % fotos.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % fotos.length);
  };

  return (
    <div className="cra-carrossel" ref={sliderRef}>
      <div className="cra-carrossel-container" style={{
        transform: `translateX(calc(-${currentIndex * 100}% - ${currentIndex * 20}px))`,
        transition: 'transform 0.5s ease-in-out',
      }}>
        {fotos.map((n) => (
          <div key={n} className="cra-carrossel-item">
            <img src={withPublicPath(`/Fotos/foto (${n}).jpg`)} alt={`Foto ${n}`} />
          </div>
        ))}
      </div>

      <button className="cra-prev" onClick={goToPrevious}>
        <i className="fas fa-chevron-left"></i>
      </button>
      <button className="cra-next" onClick={goToNext}>
        <i className="fas fa-chevron-right"></i>
      </button>
    </div>
  );
}
```

### `components\CarrosselPromocoes.jsx`
```
'use client';

import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { withPublicPath } from '@/lib/publicPath';

const promocoes = [
  'promo1.jpeg',
  'promo2.jpeg',
  'promo3.jpeg',
  'promo4.jpeg',
  'promo5.jpeg',
  'promo6.jpeg',
  'promo7.jpeg',
  'promo8.jpeg',
  'promo9.jpeg',
  'promo12.jpeg',
  'promo14.jpeg',
  'promo15.jpeg',
  'promo16.jpeg',
];

export default function CarrosselPromocoes() {
  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: 'free',
    slides: {
      perView: 4,
      spacing: 15,
    },
    breakpoints: {
      '(max-width: 768px)': {
        slides: {
          perView: 2,
          spacing: 10,
        },
      },
      '(max-width: 480px)': {
        slides: {
          perView: 1.3,
          spacing: 5,
        },
      },
    },
  });

  return (
    <div ref={sliderRef} className="keen-slider cra-carrossel-promocoes">
      {promocoes.map((image) => (
        <div key={image} className="keen-slider__slide cra-carrossel-item">
          <img
            src={withPublicPath(`/Promocao/${image}`)}
            alt={`Promoção ${image}`}
            loading="lazy"
            onError={(e) => {
              e.target.src = withPublicPath('/placeholder.jpg');
            }}
          />
        </div>
      ))}
    </div>
  );
}
```

### `components\FloatingWhatsApp.css`
```
.floatingWhatsapp {
  width: 100%;
  height: 100%;
  text-align: left;
  position: relative;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue",
    Helvetica, Arial, sans-serif;
}

.whatsappButton {
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  cursor: pointer;
  background-color: #25d366;
  border-radius: 50%;
  user-select: none;
  box-shadow: 0px 4px 10px 0px rgb(0 0 0 / 15%);
  z-index: 9998;
}

.whatsappButton:after {
  content: "";
  border-color: inherit;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  position: absolute;
  box-shadow: 0 0 0 0 rgba(37, 211, 101, 0);
  animation: _pulse 1.2s infinite;
}

.whatsappButton svg {
  fill: #fff;
  padding: 0.5rem;
  width: 55px;
  height: 55px;
}

.whatsappChatBox {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 5%;
  overflow: hidden;
  background-color: #fff;
  touch-action: auto;
  position: fixed;
  bottom: 7rem;
  right: 4rem;
  width: 375px;
  opacity: 0;
  transition: height 0.2s ease-out;
  box-shadow: 0 3px 10px 0 rgb(0 0 0 / 20%);
  z-index: 9999;
}

@media (max-width: 575px) {
  .whatsappChatBox {
    right: 0;
    left: 0;
    max-width: 90%;
    margin: auto;
  }
}

.whatsappChatBox.open {
  animation: _bounceIn 0.4s both;
}

.whatsappChatBox.close {
  animation: _bounceOut 0.4s both;
}

.chatHeader {
  background-color: #075e54;
  display: -ms-grid;
  display: grid;
  align-items: center;
  padding: 0.25rem;
  grid-template-columns: 20% 60% 1fr;
  gap: 1%;
}

.chatHeader .avatar {
  padding: 0.25rem;
  position: relative;
}

.chatHeader .avatar img {
  vertical-align: middle;
  border-radius: 50%;
  height: 60px;
  width: 60px;
  border: 1px solid rgba(255, 255, 255, 0.473);
}

.chatHeader .avatar:after {
  content: "";
  width: 10px;
  height: 10px;
  background: #4fbe86;
  border: 1px solid #fff;
  position: absolute;
  border-radius: 50%;
  bottom: 5px;
  right: 8px;
}

.chatHeader .avatar svg {
  fill: #fff;
  vertical-align: middle;
}

.chatHeader .status {
  color: #fff;
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
}

.chatHeader .statusTitle {
  font-size: 1rem;
  font-weight: 700;
}

.chatHeader .statusSubtitle {
  font-size: 0.8rem;
  color: #f0f0f0;
}

.chatHeader .close {
  padding: 1rem;
  cursor: pointer;
  text-align: center;
}

.chatHeader .close svg {
  fill: #fff;
  width: 24px;
  height: 24px;
}

.chatBody {
  padding: 20px;
  background-size: cover;
  background-repeat: repeat;
  max-height: 382px;
  background-color: #eae6df;
  height: 100%;
  opacity: 0.9;
}

.chatBubble {
  background-color: #e6f8f1;
  padding: 16px 28px;
  border-radius: 20px;
  border-bottom-left-radius: 2px;
  display: inline-block;
}

.typing {
  align-items: center;
  display: flex;
  height: 17px;
}

.typing .dot {
  animation: typingAnimation 1.8s infinite ease-in-out;
  background-color: rgba(20, 105, 69, 0.7);
  border-radius: 50%;
  height: 7px;
  margin-right: 4px;
  vertical-align: middle;
  width: 7px;
  display: inline-block;
}

.typing .dot:nth-child(1) {
  animation-delay: 200ms;
}

.typing .dot:nth-child(2) {
  animation-delay: 300ms;
}

.typing .dot:nth-child(3) {
  animation-delay: 400ms;
}

.typing .dot:last-child {
  margin-right: 0;
}

.chatBody .message {
  padding: 7px 14px 6px;
  background-color: #fff;
  border-radius: 0px 8px 8px;
  position: relative;
  max-width: calc(100% - 120px);
  z-index: 2;
  box-shadow: rgb(0 0 0 / 13%) 0px 1px 0.5px;
}

.chatBody .accountName {
  font-size: 13px;
  font-weight: 700;
  line-height: 18px;
  color: rgb(17 17 17 / 50%);
}

.chatBody .messageBody {
  font-size: 14px;
  line-height: 19px;
  margin-top: 4px;
  color: #111111;
  white-space: pre-wrap;
}

.chatBody .message .triangle {
  display: inline-block;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 20px 20px 0;
  border-color: transparent #fff transparent transparent;
  position: absolute;
  left: -10px;
  top: 0;
}

.chatBody .messageTime {
  display: flex;
  margin-top: 4px;
  font-size: 12px;
  line-height: 16px;
  color: rgb(17 17 17 / 50%);
  justify-content: flex-end;
}

.chatFooter {
  padding: 0.25rem;
  background-color: #f0f0f0;
}

.chatFooter form {
  display: -ms-grid;
  display: grid;
  align-items: center;
  grid-template-columns: 85% 15%;
  padding: 0.25rem;
}

.chatFooter form .input {
  border-radius: 20px;
  padding: 0 10px;
  border: none;
  background-color: #fefefe;
  min-height: 45px;
  transition: box-shadow 0.2s ease-in-out;
}

.chatFooter form .input:focus {
  border-color: #075e54;
  outline: 0;
  box-shadow: 0 0 0 1px rgb(7 94 84 / 50%);
}

.chatFooter form .input::-webkit-input-placeholder {
  color: #949494;
}

.chatFooter form .input::-moz-placeholder {
  color: #949494;
}

.chatFooter form .input:-ms-input-placeholder {
  color: #949494;
}

.chatFooter form .input::-ms-input-placeholder {
  color: #949494;
}

.chatFooter form .input::placeholder {
  color: #949494;
}

.chatFooter form .buttonSend {
  background-color: transparent;
  border: 0;
  cursor: pointer;
}

.chatFooter form .buttonSend svg {
  vertical-align: middle;
  fill: #919191;
}

.chatFooter form .buttonSend:disabled {
  pointer-events: none;
  opacity: 0.5;
}

.notificationIndicator {
  position: absolute;
  top: 0;
  right: 0;
  background-color: #dc3545;
  color: white;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: bold;
}

/* dark mode */
.dark .chatBody {
  background-color: #0d1418;
}

.dark .chatBody .message {
  background-color: #056162;
  box-shadow: rgb(0 0 0 / 70%) 0px 1px 0.5px;
}

.dark .chatBody .accountName {
  color: rgb(255 255 255 / 50%);
}

.dark .chatBody .messageBody {
  color: rgb(241 241 242 / 90%);
}

.dark .chatBody .message .triangle {
  border-color: transparent #056162 transparent transparent;
}

.dark .chatBody .messageTime {
  color: rgb(255 255 255 / 50%);
}

.dark .chatFooter {
  background-color: #1e2428;
}

.dark .chatFooter form .input {
  background-color: #33383b;
  color: #f1f1f2;
}

.dark .chatFooter form .input:focus {
  border-color: #0da896;
  outline: 0;
  box-shadow: 0 0 0 1px rgb(13 168 150 / 50%);
}

.dark .chatFooter form .buttonSend svg {
  fill: rgb(104, 104, 104);
}

.dark .chatBubble {
  background-color: #32373a;
}

.dark .typing .dot {
  background-color: rgba(46, 148, 106, 0.7);
}

/* keyframes */
@keyframes _pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(37, 211, 101, 0.75);
  }
  100% {
    box-shadow: 0 0 0 15px rgba(37, 211, 101, 0);
  }
}

@keyframes _bounceIn {
  0% {
    opacity: 0;
    transform: scale(0, 0);
    transform-origin: bottom right;
  }

  50% {
    transform: scale(1.03, 1.03);
    transform-origin: bottom right;
  }

  100% {
    opacity: 1;
    transform: scale(1, 1);
    transform-origin: bottom right;
  }
}

@keyframes _bounceOut {
  0% {
    opacity: 1;
    height: scale(1, 1);
    transform-origin: bottom right;
  }
  100% {
    opacity: 0;
    transform: scale(0, 0);
    transform-origin: bottom right;
  }
}

@keyframes typingAnimation {
  0% {
    opacity: 0.4;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0.4;
  }
}
```

### `components\FloatingWhatsApp.jsx`
```
'use client';

import React, {
  useReducer,
  useEffect,
  useCallback,
  useRef,
  useMemo,
  useState
} from 'react';
import { reducer } from '@/lib/whatsappReducer';
import { WhatsappSVG, CloseSVG, CheckSVG, SendSVG } from './Icons';
import { withPublicPath } from '@/lib/publicPath';
import './FloatingWhatsApp.css';

const dummyAvatar = withPublicPath('/avatar-whatsapp.jpg');
const notificationSoundSrc = withPublicPath('/whatsapp-notification.mp3');
const bgChatDark = withPublicPath('/bg-chat-tile-dark.png');
const bgChatLight = withPublicPath('/bg-chat-tile-light.png');

export function FloatingWhatsApp({
  onClick,
  onSubmit,
  onClose,
  onNotification,
  onLoopDone,

  phoneNumber = '1234567890',
  accountName = 'Account Name',
  avatar = dummyAvatar,
  statusMessage = 'Typically replies within 1 hour',
  chatMessage = 'Hello there! 🤝 \nHow can we help?',
  placeholder = 'Type a message..',

  allowClickAway = false,
  allowEsc = false,

  notification = true,
  notificationDelay = 60,
  notificationLoop = 0,
  notificationSound = false,
  notificationStyle,
  notificationClassName = 'floating-whatsapp-notification',

  buttonStyle,
  buttonClassName = 'floating-whatsapp-button',

  chatboxHeight = 320,
  chatboxStyle,
  chatboxClassName = 'floating-whatsapp-chatbox',

  darkMode = false,
  style,
  className = 'floating-whatsapp'
}) {
  const [isClient, setIsClient] = useState(false);
  const [{ isOpen, isDelay, isNotification }, dispatch] = useReducer(reducer, {
    isOpen: false,
    isDelay: true,
    isNotification: false
  });

  const timeNow = useMemo(
    () =>
      new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    []
  );

  const inputRef = useRef(null);
  const soundRef = useRef(null);
  const loops = useRef(0);
  const notificationInterval = useRef(0);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleNotification = useCallback(() => {
    if (!notification) return;

    dispatch({ type: 'notification' });
    if (onNotification) onNotification();
    if (notificationLoop > 0) {
      loops.current += 1;

      if (notificationSound) {
        if (soundRef.current) {
          soundRef.current.currentTime = 0;
          soundRef.current.play().catch(() => {
            // Ignore errors from autoplay restrictions
          });
        }
      }
      if (loops.current === notificationLoop) {
        clearInterval(notificationInterval.current);
        if (onLoopDone) onLoopDone();
      }
    }
  }, [
    notification,
    notificationLoop,
    notificationSound,
    onNotification,
    onLoopDone
  ]);

  useEffect(() => {
    const delayInSecond = notificationDelay * 1000;
    if (delayInSecond < 10)
      return console.error(
        'notificationDelay prop value must be at least 10 seconds.'
      );

    notificationInterval.current = window.setInterval(
      handleNotification,
      delayInSecond
    );

    return () => clearInterval(notificationInterval.current);
  }, [handleNotification, notificationDelay]);

  const handleOpen = useCallback(
    (event) => {
      event.stopPropagation();

      if (isOpen) return;

      clearInterval(notificationInterval.current);
      dispatch({ type: 'open' });
      setTimeout(() => dispatch({ type: 'delay' }), 2000);
      if (onClick) onClick(event);
    },
    [isOpen, onClick]
  );

  const handleClose = useCallback(() => {
    dispatch({ type: 'close' });

    if (onClose) onClose();
  }, [onClose]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!inputRef.current?.value) return;

    window.open(
      `https://api.whatsapp.com/send/?phone=${phoneNumber}&text=${encodeURIComponent(inputRef.current.value)}`
    );
    if (onSubmit) onSubmit(event, inputRef.current.value);
    inputRef.current.value = '';
  };

  useEffect(() => {
    const onClickOutside = () => {
      if (!allowClickAway || !isOpen) return;

      handleClose();
    };
    document.addEventListener('click', onClickOutside, false);

    return () => document.removeEventListener('click', onClickOutside);
  }, [allowClickAway, isOpen, handleClose]);

  useEffect(() => {
    const onEscKey = (event) => {
      if (!allowEsc || !isOpen) return;

      if (event.key === 'Escape') handleClose();
    };

    document.addEventListener('keydown', onEscKey, false);

    return () => document.removeEventListener('keydown', onEscKey);
  }, [allowEsc, isOpen, handleClose]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      const timer = setTimeout(() => {
        inputRef.current?.focus();
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isClient) {
    return null;
  }

  return (
    <div
      className={`${darkMode ? 'dark ' : ''} ${className}`}
      style={style}
    >
      <div
        className={`whatsappButton ${buttonClassName}`}
        onClick={handleOpen}
        style={buttonStyle}
        aria-hidden="true"
      >
        <WhatsappSVG />
        {isNotification && (
          <span
            className={`notificationIndicator ${notificationClassName}`}
            style={notificationStyle}
          >
            1
          </span>
        )}
      </div>

      <div
        className={`whatsappChatBox ${
          isOpen ? 'open' : 'close'
        } ${chatboxClassName}`}
        onClick={(event) => event.stopPropagation()}
        aria-hidden="true"
        style={{ height: isOpen ? chatboxHeight : 0, ...chatboxStyle }}
      >
        <header className="chatHeader">
          <div className="avatar">
            <img src={avatar} width="60" height="60" alt="whatsapp-avatar" />
          </div>
          <div className="status">
            <span className="statusTitle">{accountName}</span>
            <span className="statusSubtitle">{statusMessage}</span>
          </div>
          <div className="close" onClick={handleClose} aria-hidden="true">
            <CloseSVG />
          </div>
        </header>

        <div
          className="chatBody"
          style={{ backgroundImage: `url(${darkMode ? bgChatDark : bgChatLight})` }}
        >
          {isDelay ? (
            <div className="chatBubble">
              <div className="typing">
                <div className="dot" />
                <div className="dot" />
                <div className="dot" />
              </div>
            </div>
          ) : (
            <div className="message">
              <span className="triangle" />
              <span className="accountName">{accountName}</span>
              <p className="messageBody">{chatMessage}</p>
              <span className="messageTime">
                {timeNow}
                <span style={{ marginLeft: 5 }}>
                  <CheckSVG />
                </span>
              </span>
            </div>
          )}
        </div>

        <footer className="chatFooter">
          <form onSubmit={handleSubmit}>
            <input
              className="input"
              placeholder={placeholder}
              ref={inputRef}
              dir="auto"
            />
            <button type="submit" className="buttonSend">
              <SendSVG />
            </button>
          </form>
        </footer>
      </div>
      {notificationSound && (
        <audio ref={soundRef} hidden src={notificationSoundSrc} />
      )}
    </div>
  );
}
```

### `components\Footer.jsx`
```
'use client';

import { withPublicPath } from '@/lib/publicPath';

export default function Footer() {
  return (
    <footer className="cra-footer">
      <div className="cra-footer-content">
        <div className="cra-footer-info">
          <div className="cra-footer-info-logo">
            <img
              src={withPublicPath('/logo roda pe.png')}
              alt="Logo Casa de Ração Atlântico"
            />
            <div className="cra-footer-social">
              <a
                href="https://wa.me/556235881956"
                target="_blank"
                rel="noreferrer"
                title="WhatsApp"
              >
                <i className="fab fa-whatsapp"></i>
              </a>
              <a
                href="https://www.instagram.com/casaderacaoatlantico"
                target="_blank"
                rel="noreferrer"
                title="Instagram"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://www.facebook.com/casaderacaoatlantico"
                target="_blank"
                rel="noreferrer"
                title="Facebook"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
            </div>
          </div>
          <div className="cra-footer-info-text">
            <p>
              <i className="fa-solid fa-phone"></i> (62) 3588-1956
            </p>
            <p>
              <i className="fa-solid fa-location-dot"></i> Av. Guarujá, nº
              84, Jardim Atlântico, Goiânia – GO
            </p>
            <p>
              <i className="fa-solid fa-clock"></i> Segunda a sábado, das 7h
              às 19h
            </p>
          </div>
        </div>
        <div className="cra-footer-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15282.95012099381!2d-49.295514!3d-16.739943!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ef70062f7c0cb%3A0xa043d7ff1ae1cfd6!2zQ2FzYSBkZSBSYcOnw6NvIEF0bMOibnRpY28!5e0!3m2!1spt-BR!2sbr!4v1753994278177!5m2!1spt-BR!2sbr"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mapa Casa de Ração Atlântico"
          ></iframe>
        </div>
      </div>
      <div className="cra-footer-credito">
        <p>© 2025 Casa de Ração Atlântico. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
```

### `components\GerenciadorPrioridades.jsx`
```
'use client';

import { useState } from 'react';
import { formatProductName, ordenarProdutosPorPrioridade, atualizarPrioridadeProduto, moverProduto } from '@/lib/produtosUtils';
import { withPublicPath } from '@/lib/publicPath';

export default function GerenciadorPrioridades({ produtos, onProdutosChange }) {
  const [modoEdicao, setModoEdicao] = useState(false);
  const [produtosEditados, setProdutosEditados] = useState(produtos);

  const handleSalvar = () => {
    onProdutosChange(produtosEditados);
    setModoEdicao(false);
  };

  const handleCancelar = () => {
    setProdutosEditados(produtos);
    setModoEdicao(false);
  };

  const handleMoverCima = (produtoId, index) => {
    if (index > 0) {
      const novosProdutos = moverProduto(produtosEditados, produtoId, index - 1);
      setProdutosEditados(novosProdutos);
    }
  };

  const handleMoverBaixo = (produtoId, index) => {
    if (index < produtosEditados.length - 1) {
      const novosProdutos = moverProduto(produtosEditados, produtoId, index + 1);
      setProdutosEditados(novosProdutos);
    }
  };

  const handleAlterarPrioridade = (produtoId, novaPrioridade) => {
    const novosProdutos = atualizarPrioridadeProduto(produtosEditados, produtoId, novaPrioridade);
    setProdutosEditados(ordenarProdutosPorPrioridade(novosProdutos));
  };

  const produtosOrdenados = ordenarProdutosPorPrioridade(modoEdicao ? produtosEditados : produtos);

  return (
    <div style={{ margin: '20px 0', padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h3 style={{ margin: 0, color: '#003759' }}>Gerenciar Prioridades dos Produtos</h3>
        {!modoEdicao ? (
          <button
            onClick={() => setModoEdicao(true)}
            style={{
              padding: '8px 16px',
              backgroundColor: '#25d366',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Editar Prioridades
          </button>
        ) : (
          <div>
            <button
              onClick={handleSalvar}
              style={{
                padding: '8px 16px',
                backgroundColor: '#25d366',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                marginRight: '10px'
              }}
            >
              Salvar
            </button>
            <button
              onClick={handleCancelar}
              style={{
                padding: '8px 16px',
                backgroundColor: '#dc3545',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              Cancelar
            </button>
          </div>
        )}
      </div>

      <div style={{ maxHeight: '400px', overflowY: 'auto' }}>
        {produtosOrdenados.map((produto, index) => (
          <div
            key={produto.id}
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '10px',
              border: '1px solid #eee',
              borderRadius: '4px',
              marginBottom: '8px',
              backgroundColor: index < 3 ? '#ebfff4' : 'white'
            }}
          >
            <span style={{ minWidth: '30px', fontWeight: 'bold', color: '#003759' }}>
              #{produto.prioridade || (index + 1)}
            </span>

            <img
              src={withPublicPath(produto.imagem)}
              alt={formatProductName(produto.nome)}
              style={{ width: '40px', height: '40px', objectFit: 'contain', margin: '0 10px' }}
            />

            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 'bold', fontSize: '14px' }}>{formatProductName(produto.nome)}</div>
              <div style={{ fontSize: '12px', color: '#666' }}>{produto.marca}</div>
            </div>

            {modoEdicao && (
              <div style={{ display: 'flex', gap: '5px' }}>
                <button
                  onClick={() => handleMoverCima(produto.id, index)}
                  disabled={index === 0}
                  style={{
                    padding: '4px 8px',
                    backgroundColor: index === 0 ? '#ccc' : '#007bff',
                    color: 'white',
                    border: 'none',
                    borderRadius: '3px',
                    cursor: index === 0 ? 'not-allowed' : 'pointer',
                    fontSize: '12px'
                  }}
                >
                  ↑
                </button>
                <button
                  onClick={() => handleMoverBaixo(produto.id, index)}
                  disabled={index === produtosOrdenados.length - 1}
                  style={{
                    padding: '4px 8px',
                    backgroundColor: index === produtosOrdenados.length - 1 ? '#ccc' : '#007bff',
                    color: 'white',
                    border: 'none',
                    borderRadius: '3px',
                    cursor: index === produtosOrdenados.length - 1 ? 'not-allowed' : 'pointer',
                    fontSize: '12px'
                  }}
                >
                  ↓
                </button>
                <input
                  type="number"
                  min="1"
                  max={produtosOrdenados.length}
                  value={produto.prioridade || (index + 1)}
                  onChange={(e) => handleAlterarPrioridade(produto.id, parseInt(e.target.value))}
                  style={{
                    width: '50px',
                    padding: '4px',
                    border: '1px solid #ddd',
                    borderRadius: '3px',
                    textAlign: 'center'
                  }}
                />
              </div>
            )}
          </div>
        ))}
      </div>

      <div style={{ marginTop: '15px', padding: '10px', backgroundColor: '#f8f9fa', borderRadius: '4px' }}>
        <h4 style={{ margin: '0 0 10px 0', fontSize: '14px' }}>Como funciona:</h4>
        <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '13px', color: '#666' }}>
          <li><strong>Prioridade 1</strong> = Produto mais importante (aparece primeiro)</li>
          <li>Produtos com fundo verde são os 3 primeiros</li>
          <li>Use os botões ↑↓ para reordenar ou digite a prioridade diretamente</li>
          <li>As mudanças só são salvas quando você clicar em &quot;Salvar&quot;</li>
        </ul>
      </div>
    </div>
  );
}
```

### `components\Header.css`
```
/* Menu Toggle Button */
.cra-menu-toggle {
  display: none;
  flex-direction: column;
  background: none;
  border: none;
  cursor: pointer;
  gap: 5px;
  z-index: 1001;
}

.cra-menu-toggle span {
  width: 30px;
  height: 3px;
  background-color: white;
  border-radius: 2px;
  transition: all 0.3s ease;
}

.cra-menu-toggle.active span:nth-child(1) {
  transform: rotate(45deg) translate(10px, 10px);
}

.cra-menu-toggle.active span:nth-child(2) {
  opacity: 0;
}

.cra-menu-toggle.active span:nth-child(3) {
  transform: rotate(-45deg) translate(7px, -7px);
}

/* Navigation */
.cra-nav {
  display: flex;
  gap: 30px;
  align-items: center;
}

.cra-nav-link {
  color: white;
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;
  padding: 8px 16px;
  border-radius: 4px;
  position: relative;
}

.cra-nav-link::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 50%;
  width: 0;
  height: 2px;
  background-color: #25d366;
  transition: all 0.3s ease;
  transform: translateX(-50%);
}

.cra-nav-link:hover::after {
  width: calc(100% - 32px);
}

.cra-nav-link:hover {
  background-color: rgba(37, 211, 102, 0.1);
}

/* Mobile Responsiveness */
@media (max-width: 768px) {
  .cra-menu-toggle {
    display: flex;
  }

  .cra-nav {
    position: fixed;
    left: 0;
    top: 80px;
    width: 100%;
    height: calc(100vh - 80px);
    background-color: #003759;
    flex-direction: column;
    gap: 0;
    align-items: stretch;
    padding: 20px 0;
    transform: translateX(-100%);
    transition: transform 0.3s ease;
    z-index: 999;
    max-height: 0;
    overflow-y: auto;
  }

  .cra-nav.active {
    transform: translateX(0);
    max-height: 100%;
  }

  .cra-nav-link {
    padding: 15px 20px;
    border-radius: 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    font-size: 1.1rem;
  }

  .cra-nav-link::after {
    display: none;
  }

  .cra-nav-link:hover {
    background-color: rgba(37, 211, 102, 0.15);
    border-left: 4px solid #25d366;
    padding-left: 16px;
  }
}

@media (max-width: 480px) {
  .cra-nav-link {
    padding: 12px 15px;
    font-size: 1rem;
  }

  .cra-header-bar {
    padding: 10px 15px;
  }

  .cra-logo {
    width: 200px;
    height: auto;
  }
}
```

### `components\Header.jsx`
```
'use client';

import Link from 'next/link';
import { useState } from 'react';
import './Header.css';
import { withPublicPath } from '@/lib/publicPath';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="cra-header-bar">
      <Link href="/" onClick={closeMenu}>
        <img
          className="cra-logo"
          src={withPublicPath('/logo.svg')}
          alt="Logo Casa de Ração Atlântico"
        />
      </Link>

      <button
        className="cra-menu-toggle"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav className={`cra-nav ${isMenuOpen ? 'active' : ''}`}>
        <Link href="/" className="cra-nav-link" onClick={closeMenu}>
          Início
        </Link>
        <Link href="/produtos" className="cra-nav-link" onClick={closeMenu}>
          Produtos
        </Link>
        <Link href="/sobre-nos" className="cra-nav-link" onClick={closeMenu}>
          Sobre Nós
        </Link>
      </nav>
    </header>
  );
}
```

### `components\Icons.jsx`
```
export function WhatsappSVG() {
  return (
    <svg focusable="false" viewBox="0 0 24 24" width="55" height="55">
      <path d="M16.75 13.96c.25.13.41.2.46.3.06.11.04.61-.21 1.18-.2.56-1.24 1.1-1.7 1.12-.46.02-.47.36-2.96-.73-2.49-1.09-3.99-3.75-4.11-3.92-.12-.17-.96-1.38-.92-2.61.05-1.22.69-1.8.95-2.04.24-.26.51-.29.68-.26h.47c.15 0 .36-.06.55.45l.69 1.87c.06.13.1.28.01.44l-.27.41-.39.42c-.12.12-.26.25-.12.5.12.26.62 1.09 1.32 1.78.91.88 1.71 1.17 1.95 1.3.24.14.39.12.54-.04l.81-.94c.19-.25.35-.19.58-.11l1.67.88M12 2a10 10 0 0 1 10 10 10 10 0 0 1-10 10c-1.97 0-3.8-.57-5.35-1.55L2 22l1.55-4.65A9.969 9.969 0 0 1 2 12 10 10 0 0 1 12 2m0 2a8 8 0 0 0-8 8c0 1.72.54 3.31 1.46 4.61L4.5 19.5l2.89-.96A7.95 7.95 0 0 0 12 20a8 8 0 0 0 8-8 8 8 0 0 0-8-8z" />
    </svg>
  );
}

export function CheckSVG() {
  return (
    <svg viewBox="0 0 16 15" width="16" height="15">
      <path
        fill="currentColor"
        d="M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.879a.32.32 0 0 1-.484.033l-.358-.325a.319.319 0 0 0-.484.032l-.378.483a.418.418 0 0 0 .036.541l1.32 1.266c.143.14.361.125.484-.033l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.879a.32.32 0 0 1-.484.033L1.891 7.769a.366.366 0 0 0-.515.006l-.423.433a.364.364 0 0 0 .006.514l3.258 3.185c.143.14.361.125.484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z"
      />
    </svg>
  );
}

export function CloseSVG() {
  return (
    <svg focusable="false" viewBox="0 0 24 24" width="24" height="24">
      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
    </svg>
  );
}

export function SendSVG() {
  return (
    <svg focusable="false" viewBox="0 0 24 24" width="35" height="35">
      <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
    </svg>
  );
}
```

### `components\ProductCard.jsx`
```
/* eslint-disable @next/next/no-img-element */
'use client';

import { formatProductName } from '@/lib/produtosUtils';
import { withPublicPath } from '@/lib/publicPath';

export default function ProductCard({ product }) {
  const nomeFormatado = formatProductName(product.nome);
  const whatsappMessage = `Olá, gostaria de comprar ${nomeFormatado}`;
  const whatsappUrl = `https://wa.me/556235881956?text=${encodeURIComponent(whatsappMessage)}`;
  const productImage = encodeURI(withPublicPath(product.imagem));

  return (
    <div className="product-card">
      <img
        src={productImage}
        alt={nomeFormatado}
        onError={(e) => {
          e.target.src = withPublicPath('/placeholder.jpg');
        }}
      />
      <div className="product-card-content">
        <h3>{nomeFormatado}</h3>
        <a href={whatsappUrl} target="_blank" rel="noreferrer" className="product-card-button">
          Comprar pelo WhatsApp
        </a>
      </div>
    </div>
  );
}
```

### `components\WhatsAppButton.jsx`
```
'use client';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/556235881956"
      target="_blank"
      rel="noreferrer"
      className="cra-whatsapp-button-fixed"
      title="Conversar pelo WhatsApp"
    >
      <i className="fab fa-whatsapp"></i>
      <span>Fale Conosco</span>
    </a>
  );
}
```

### `generate_structure.py`
```
from pathlib import Path

root = Path('.')
output_path = root / 'estrutura_e_codigo.md'
text_exts = {'.js', '.jsx', '.ts', '.tsx', '.json', '.css', '.md', '.html', '.txt', '.env', '.lock', '.gitignore', '.yaml', '.yml', '.xml', '.svg', '.json5', '.ini'}

all_files = [p for p in sorted(root.rglob('*')) if p.is_file()]

lines = ['# Estrutura de Pastas e Código do Projeto', '']
lines.append('## Árvore de Diretórios')
lines.append('')


def build_tree(paths):
    tree = {}
    for path in paths:
        parts = path.parts
        node = tree
        for part in parts:
            node = node.setdefault(part, {})
    return tree


tree = build_tree([p.relative_to(root) for p in all_files])


def render(node, prefix=''):
    names = sorted(node.keys(), key=lambda s: (s.lower(), s))
    for idx, name in enumerate(names):
        last = idx == len(names) - 1
        connector = '└── ' if last else '├── '
        lines.append(prefix + connector + name)
        child = node[name]
        if child:
            extension = '    ' if last else '│   '
            render(child, prefix + extension)

render(tree)
lines.append('')
lines.append('## Conteúdo dos Arquivos')
lines.append('')

for path in all_files:
    rel = path.relative_to(root)
    ext = path.suffix.lower()
    include = ext in text_exts
    if not include:
        try:
            path.open('r', encoding='utf-8').read(1024)
            include = True
        except Exception:
            include = False
    if include:
        lines.append(f'### `{rel}`')
        lines.append('```')
        try:
            text = path.read_text(encoding='utf-8')
        except UnicodeDecodeError:
            try:
                text = path.read_text(encoding='latin-1')
            except Exception as e:
                text = f'Erro ao ler arquivo: {e}'
        lines.append(text.rstrip())
        lines.append('```')
        lines.append('')

output_path.write_text('\n'.join(lines), encoding='utf-8')
print(f'Gerado: {output_path.resolve()}')
```

### `lib\produtosData.js`
```
export const brands = [

  { id: 2, name: "Bionatural", folder: "Bionatural", logo: "/Produtos/Marca/Bionatural.png" },
  { id: 1, name: "Fórmula Natural", folder: "Fórmula Natural", logo: "/Produtos/Marca/formlanatural.png" },
  { id: 7, name: "N&D", folder: "N&D", logo: "/Produtos/Marca/n&d.png" },
  { id: 9, name: "PremieR", folder: "PremieR", logo: "/Produtos/Marca/Premier.png" },
  { id: 10, name: "PremieR_Nattu", folder: "PremieR_Nattu", logo: "/Produtos/Marca/PremieR_Nattu.png" },
  { id: 14, name: "Marca", folder: "Marca", logo: "/Produtos/Marca/hills.avif" },
  { id: 3, name: "Finotrato", folder: "Finotrato", logo: "/Produtos/Marca/Finotrato.png" },
  { id: 11, name: "special Cat", folder: "special Cat", logo: "/Produtos/Marca/SpecialCat.png" },
  { id: 12, name: "Special dog", folder: "Special dog", logo: "/Produtos/Marca/SpecialDog.png" },
  { id: 13, name: "VittA_Natural", folder: "VittA_Natural", logo: "/Produtos/Marca/VittA_Natural.png" },
  { id: 8, name: "Origens", folder: "Origens", logo: "/Produtos/Marca/ORIGENS.png" },
  { id: 5, name: "GoldeN", folder: "GoldeN", logo: "/Produtos/Marca/golden.png" },
  { id: 6, name: "Magnus", folder: "Magnus", logo: "/Produtos/Marca/MAGNUS.png" },
  { id: 4, name: "Besser", folder: "Besser", logo: "/Produtos/Marca/Besser.png" }
];

export const produtosMock = [
  // Besser
  { id: 1, nome: "Besser Natural Cães Adultos", marca: "Besser", marcaPasta: "Besser", imagem: "/Produtos/Besser/Besser_Natural_Cães_Adultos.png", prioridade: 5 },
  { id: 2, nome: "Besser Natural Cães Adultos de Raças Pequenas e Médias", marca: "Besser", marcaPasta: "Besser", imagem: "/Produtos/Besser/Besser_Natural_Cães_Adultos_de_Raças_Pequenas_e_Médias.png", prioridade: 10 },
  { id: 3, nome: "Besser Natural Cães Filhotes", marca: "Besser", marcaPasta: "Besser", imagem: "/Produtos/Besser/Besser_Natural_Cães_Filhotes.png", prioridade: 15 },
  { id: 4, nome: "Besser Natural Gatos Filhotes", marca: "Besser", marcaPasta: "Besser", imagem: "/Produtos/Besser/Besser_Natural_Gatos_Filhotes.png", prioridade: 20 },
  // Bionatural
  { id: 5, nome: "Bionatural Adultos RAÇAS MÉDIAS E GRANDES Frango", marca: "Bionatural", marcaPasta: "Bionatural", imagem: "/Produtos/Bionatural/Bionatural_Adultos_RAÇAS MÉDIAS E GRANDES_Frango.png", prioridade: 8 },
  { id: 6, nome: "Bionatural Adultos RAÇAS PEQUENAS Cordeiro", marca: "Bionatural", marcaPasta: "Bionatural", imagem: "/Produtos/Bionatural/Bionatural_Adultos_RAÇAS PEQUENAS_Cordeiro.png", prioridade: 12 },
  { id: 7, nome: "Bionatural Adultos RAÇAS PEQUENAS Frango", marca: "Bionatural", marcaPasta: "Bionatural", imagem: "/Produtos/Bionatural/Bionatural_Adultos_RAÇAS PEQUENAS_Frango.png", prioridade: 18 },
  { id: 8, nome: "Bionatural Adultos salmao", marca: "Bionatural", marcaPasta: "Bionatural", imagem: "/Produtos/Bionatural/Bionatural_Adultos_salmao.png", prioridade: 25 },
  { id: 9, nome: "Bionatural Castrados Frango", marca: "Bionatural", marcaPasta: "Bionatural", imagem: "/Produtos/Bionatural/Bionatural_Castrados_Frango.png", prioridade: 30 },
  { id: 10, nome: "Bionatural Castrados Salmao", marca: "Bionatural", marcaPasta: "Bionatural", imagem: "/Produtos/Bionatural/Bionatural_Castrados_Salmao.png", prioridade: 35 },
  { id: 11, nome: "Bionatural Junior RAÇAS PEQUENAS Frango", marca: "Bionatural", marcaPasta: "Bionatural", imagem: "/Produtos/Bionatural/Bionatural_Junior_RAÇAS PEQUENAS_Frango.png", prioridade: 40 },
  { id: 12, nome: "Bionatural RAÇAS MÉDIAS E GRANDES Cordeiro", marca: "Bionatural", marcaPasta: "Bionatural", imagem: "/Produtos/Bionatural/Bionatural_RAÇAS MÉDIAS E GRANDES_Cordeiro.png", prioridade: 45 },
  { id: 13, nome: "Bionatural Senior RAÇAS PEQUENAS Frango", marca: "Bionatural", marcaPasta: "Bionatural", imagem: "/Produtos/Bionatural/Bionatural_Senior_RAÇAS PEQUENAS_Frango.png", prioridade: 50 },
  // Finotrato (36 produtos)
  { id: 14, nome: "Finotrato Bifinho Carne - Cães", marca: "Finotrato", marcaPasta: "Finotrato", imagem: "/Produtos/Finotrato/Finotrato_Bifinho_Carne_-_Cães.png" },
  { id: 15, nome: "Finotrato Bifinho Frango - Cães", marca: "Finotrato", marcaPasta: "Finotrato", imagem: "/Produtos/Finotrato/Finotrato_Bifinho_Frango_-_Cães.png" },
  { id: 16, nome: "Finotrato Bio-Litter", marca: "Finotrato", marcaPasta: "Finotrato", imagem: "/Produtos/Finotrato/Finotrato_Bio-Litter.png" },
  { id: 17, nome: "Finotrato Cat Nuggets Sabor Carne - Gatos Adultos", marca: "Finotrato", marcaPasta: "Finotrato", imagem: "/Produtos/Finotrato/Finotrato_Cat_Nuggets_Sabor_Carne_-_Gatos_Adultos.png" },
  { id: 18, nome: "Finotrato Cat Stix Atum", marca: "Finotrato", marcaPasta: "Finotrato", imagem: "/Produtos/Finotrato/Finotrato_Cat_Stix_Atum.png" },
  { id: 19, nome: "Finotrato Cat Stix Carne", marca: "Finotrato", marcaPasta: "Finotrato", imagem: "/Produtos/Finotrato/Finotrato_Cat_Stix_Carne.png" },
  { id: 20, nome: "Finotrato Cat Stix Frango", marca: "Finotrato", marcaPasta: "Finotrato", imagem: "/Produtos/Finotrato/Finotrato_Cat_Stix_Frango.png" },
  { id: 21, nome: "Finotrato Cat Stix Salmão", marca: "Finotrato", marcaPasta: "Finotrato", imagem: "/Produtos/Finotrato/Finotrato_Cat_Stix_Salmão.png" },
  { id: 22, nome: "Finotrato Dog Stix Carne", marca: "Finotrato", marcaPasta: "Finotrato", imagem: "/Produtos/Finotrato/Finotrato_Dog_Stix_Carne.png" },
  { id: 23, nome: "Finotrato Dog Stix Frango", marca: "Finotrato", marcaPasta: "Finotrato", imagem: "/Produtos/Finotrato/Finotrato_Dog_Stix_Frango.png" },
  { id: 24, nome: "Finotrato Gold Cães Adultos de Raças Mini e Pequenas", marca: "Finotrato", marcaPasta: "Finotrato", imagem: "/Produtos/Finotrato/Finotrato_Gold_Cães_Adultos_de_Raças_Mini_e_Pequenas.png" },
  { id: 25, nome: "Finotrato Gold Cães Adultos de Raças Médias e Grandes", marca: "Finotrato", marcaPasta: "Finotrato", imagem: "/Produtos/Finotrato/Finotrato_Gold_Cães_Adultos_de_Raças_Médias_e_Grandes.png" },
  { id: 26, nome: "Finotrato Gold Cães Filhotes de Raças Mini e Pequenas", marca: "Finotrato", marcaPasta: "Finotrato", imagem: "/Produtos/Finotrato/Finotrato_Gold_Cães_Filhotes_de_Raças_Mini_e_Pequenas.png" },
  { id: 27, nome: "Finotrato Gold Cães Filhotes de Raças Médias e Grandes", marca: "Finotrato", marcaPasta: "Finotrato", imagem: "/Produtos/Finotrato/Finotrato_Gold_Cães_Filhotes_de_Raças_Médias_e_Grandes.png" },
  { id: 28, nome: "Finotrato Gold Salmão e Frango Gatos Adultos", marca: "Finotrato", marcaPasta: "Finotrato", imagem: "/Produtos/Finotrato/Finotrato_Gold_Salmão_e_Frango_Gatos_Adultos.png" },
  { id: 29, nome: "Finotrato Gold Salmão e Frango Gatos Castrados", marca: "Finotrato", marcaPasta: "Finotrato", imagem: "/Produtos/Finotrato/Finotrato_Gold_Salmão_e_Frango_Gatos_Castrados.png" },
  { id: 30, nome: "Finotrato Gold Salmão e Frango Gatos Filhotes", marca: "Finotrato", marcaPasta: "Finotrato", imagem: "/Produtos/Finotrato/Finotrato_Gold_Salmão_e_Frango_Gatos_Filhotes.png" },
  { id: 31, nome: "Finotrato Life Active Frango e Arroz Cães Adultos", marca: "Finotrato", marcaPasta: "Finotrato", imagem: "/Produtos/Finotrato/Finotrato_Life_Active_Frango_e_Arroz_Cães_Adultos.png" },
  { id: 32, nome: "Finotrato Life Active Frango e Arroz Cães Filhotes", marca: "Finotrato", marcaPasta: "Finotrato", imagem: "/Produtos/Finotrato/Finotrato_Life_Active_Frango_e_Arroz_Cães_Filhotes.png" },
  { id: 33, nome: "Finotrato Life Light Frango e Arroz Cães Adultos de Raças Grandes", marca: "Finotrato", marcaPasta: "Finotrato", imagem: "/Produtos/Finotrato/Finotrato_Life_Light_Frango_e_Arroz_Cães_Adultos_de_Raças_Grandes.png" },
  { id: 34, nome: "Finotrato Life Light Frango e Arroz Cães Adultos de Raças Pequenas e Médias", marca: "Finotrato", marcaPasta: "Finotrato", imagem: "/Produtos/Finotrato/Finotrato_Life_Light_Frango_e_Arroz_Cães_Adultos_de_Raças_Pequenas_e_Médias.png" },
  { id: 35, nome: "Finotrato Life Sensitive Cordeiro e Arroz Cães Adultos de Raças Pequenas e Médias", marca: "Finotrato", marcaPasta: "Finotrato", imagem: "/Produtos/Finotrato/Finotrato_Life_Sensitive_Cordeiro_e_Arroz_Cães_Adultos_de_Raças_Pequenas_e_Médias.png" },
  { id: 36, nome: "Finotrato Life Sênior Frango e Arroz Cães Senis de Raças Grandes", marca: "Finotrato", marcaPasta: "Finotrato", imagem: "/Produtos/Finotrato/Finotrato_Life_Sênior_Frango_e_Arroz_Cães_Senis_de_Raças_Grandes.png" },
  { id: 37, nome: "Finotrato Life Sênior Frango e Arroz Cães Senis de Raças Pequenas e Médias", marca: "Finotrato", marcaPasta: "Finotrato", imagem: "/Produtos/Finotrato/Finotrato_Life_Sênior_Frango_e_Arroz_Cães_Senis_de_Raças_Pequenas_e_Médias.png" },
  { id: 38, nome: "Finotrato Nature Cães Adultos de Raças Grandes", marca: "Finotrato", marcaPasta: "Finotrato", imagem: "/Produtos/Finotrato/Finotrato_Nature_Cães_Adultos_de_Raças_Grandes.png" },
  { id: 39, nome: "Finotrato Nature Cães Adultos de Raças Pequenas e Médias", marca: "Finotrato", marcaPasta: "Finotrato", imagem: "/Produtos/Finotrato/Finotrato_Nature_Cães_Adultos_de_Raças_Pequenas_e_Médias.png" },
  { id: 40, nome: "Finotrato Nature Cães Filhotes de Raças Pequenas e Médias", marca: "Finotrato", marcaPasta: "Finotrato", imagem: "/Produtos/Finotrato/Finotrato_Nature_Cães_Filhotes_de_Raças_Pequenas_e_Médias.png" },
  { id: 41, nome: "Finotrato Patê Carne - Cães Adultos", marca: "Finotrato", marcaPasta: "Finotrato", imagem: "/Produtos/Finotrato/Finotrato_Patê_Carne_-_Cães_Adultos.png" },
  { id: 42, nome: "Finotrato Patê Carne - Cães Filhotes", marca: "Finotrato", marcaPasta: "Finotrato", imagem: "/Produtos/Finotrato/Finotrato_Patê_Carne_-_Cães_Filhotes.png" },
  { id: 43, nome: "Finotrato Prime Carne e Arroz Cães Adultos de Raças Grandes", marca: "Finotrato", marcaPasta: "Finotrato", imagem: "/Produtos/Finotrato/Finotrato_Prime_Carne_e_Arroz_Cães_Adultos_de_Raças_Grandes.png" },
  { id: 44, nome: "Finotrato Prime Carne e Arroz Cães Adultos de Raças Pequenas e Médias", marca: "Finotrato", marcaPasta: "Finotrato", imagem: "/Produtos/Finotrato/Finotrato_Prime_Carne_e_Arroz_Cães_Adultos_de_Raças_Pequenas_e_Médias.png" },
  { id: 45, nome: "Finotrato Prime Frango e Arroz Cães Adultos de Raças Grandes", marca: "Finotrato", marcaPasta: "Finotrato", imagem: "/Produtos/Finotrato/Finotrato_Prime_Frango_e_Arroz_Cães_Adultos_de_Raças_Grandes.png" },
  { id: 46, nome: "Finotrato Prime Frango e Arroz Cães Adultos de Raças Pequenas e Médias", marca: "Finotrato", marcaPasta: "Finotrato", imagem: "/Produtos/Finotrato/Finotrato_Prime_Frango_e_Arroz_Cães_Adultos_de_Raças_Pequenas_e_Médias.png" },
  { id: 47, nome: "Finotrato Prime Frango e Arroz Cães Filhotes de Raças Pequenas e Médias", marca: "Finotrato", marcaPasta: "Finotrato", imagem: "/Produtos/Finotrato/Finotrato_Prime_Frango_e_Arroz_Cães_Filhotes_de_Raças_Pequenas_e_Médias.png" },
  { id: 48, nome: "Finotrato Select Cães Adultos", marca: "Finotrato", marcaPasta: "Finotrato", imagem: "/Produtos/Finotrato/Finotrato_Select_Cães_Adultos.png" },
  { id: 49, nome: "Finotrato Select Cães Adultos Raças Pequenas e Médias", marca: "Finotrato", marcaPasta: "Finotrato", imagem: "/Produtos/Finotrato/Finotrato_Select_Cães_Adultos_Raças_Pequenas_e_Médias.png" },
  { id: 50, nome: "Finotrato Select Gatos Adultos", marca: "Finotrato", marcaPasta: "Finotrato", imagem: "/Produtos/Finotrato/Finotrato_Select_Gatos_Adultos.png" },
  // Fórmula Natural (30 produtos)
  { id: 51, nome: "Fórmula Natural Dog Biscuits Batata Doce, Banana e Linhaça Pequeno Porte", marca: "Fórmula Natural", marcaPasta: "Fórmula Natural", imagem: "/Produtos/Fórmula Natural/Fórmula Natural Dog Biscuits Batata Doce, Banana e Linhaça Pequeno Porte.png" },
  { id: 52, nome: "Fórmula Natural Life Cães Adultos Portes Médio e Grande", marca: "Fórmula Natural", marcaPasta: "Fórmula Natural", imagem: "/Produtos/Fórmula Natural/Fórmula Natural Life Cães Adultos Portes Médio e Grande.png" },
  { id: 53, nome: "Fórmula Natural Life Cães Filhotes Portes Mini e Pequeno", marca: "Fórmula Natural", marcaPasta: "Fórmula Natural", imagem: "/Produtos/Fórmula Natural/Fórmula Natural Life Cães Filhotes Portes Mini e Pequeno.png" },
  { id: 54, nome: "Fórmula Natural Life Cão Sênior Portes Mini e Pequeno", marca: "Fórmula Natural", marcaPasta: "Fórmula Natural", imagem: "/Produtos/Fórmula Natural/Fórmula Natural Life Cão Sênior Portes Mini e Pequeno.png" },
  { id: 55, nome: "Fórmula Natural Life Cão Sênior Portes Médio e Grande", marca: "Fórmula Natural", marcaPasta: "Fórmula Natural", imagem: "/Produtos/Fórmula Natural/Fórmula Natural Life Cão Sênior Portes Médio e Grande.png" },
  { id: 56, nome: "Fórmula Natural Pro Cães Adultos Portes Mini e Pequeno", marca: "Fórmula Natural", marcaPasta: "Fórmula Natural", imagem: "/Produtos/Fórmula Natural/Fórmula Natural Pro Cães Adultos Portes Mini e Pequeno.png" },
  { id: 57, nome: "Fórmula Natural Pro Cães Adultos Portes Médio e Grande", marca: "Fórmula Natural", marcaPasta: "Fórmula Natural", imagem: "/Produtos/Fórmula Natural/Fórmula Natural Pro Cães Adultos Portes Médio e Grande.png" },
  { id: 58, nome: "Fórmula Natural Pro Cães Filhotes Portes Médio e Grande", marca: "Fórmula Natural", marcaPasta: "Fórmula Natural", imagem: "/Produtos/Fórmula Natural/Fórmula Natural Pro Cães Filhotes Portes Médio e Grande.png" },
  { id: 59, nome: "Fórmula Natural Receitas Caseiras Cães Adultos Cordeiro com Batata e Hortelã", marca: "Fórmula Natural", marcaPasta: "Fórmula Natural", imagem: "/Produtos/Fórmula Natural/Fórmula Natural Receitas Caseiras Cães Adultos Cordeiro com Batata e Hortelã.png" },
  { id: 60, nome: "Fórmula Natural Receitas Caseiras Cães Adultos Picadinho de Carne com Abóbora e Mandioquinha", marca: "Fórmula Natural", marcaPasta: "Fórmula Natural", imagem: "/Produtos/Fórmula Natural/Fórmula Natural Receitas Caseiras Cães Adultos Picadinho de Carne com Abóbora e Mandioquinha.png" },
  { id: 61, nome: "Fórmula Natural Receitas Caseiras Gatos Adultos Carne", marca: "Fórmula Natural", marcaPasta: "Fórmula Natural", imagem: "/Produtos/Fórmula Natural/Fórmula Natural Receitas Caseiras Gatos Adultos Carne.png" },
  { id: 62, nome: "Fórmula Natural Receitas Caseiras Gatos Adultos Salmão com Maracujá ao Molho", marca: "Fórmula Natural", marcaPasta: "Fórmula Natural", imagem: "/Produtos/Fórmula Natural/Fórmula Natural Receitas Caseiras Gatos Adultos Salmão com Maracujá ao Molho.png" },
  { id: 63, nome: "Fórmula Natural Snacks Antiestresse Cães Adultos Portes Mini e Pequeno", marca: "Fórmula Natural", marcaPasta: "Fórmula Natural", imagem: "/Produtos/Fórmula Natural/Fórmula Natural Snacks Antiestresse Cães Adultos Portes Mini e Pequeno.png" },
  { id: 64, nome: "Fórmula Natural Snacks Antiestresse Cães Adultos Portes Médio e Grande", marca: "Fórmula Natural", marcaPasta: "Fórmula Natural", imagem: "/Produtos/Fórmula Natural/Fórmula Natural Snacks Antiestresse Cães Adultos Portes Médio e Grande.png" },
  { id: 65, nome: "Fórmula Natural Snacks Vitalidade Cães Adultos Portes Mini e Pequeno", marca: "Fórmula Natural", marcaPasta: "Fórmula Natural", imagem: "/Produtos/Fórmula Natural/Fórmula Natural Snacks Vitalidade Cães Adultos Portes Mini e Pequeno.png" },
  { id: 66, nome: "Fórmula Natural Vet Care Renal Gatos Úmido", marca: "Fórmula Natural", marcaPasta: "Fórmula Natural", imagem: "/Produtos/Fórmula Natural/Fórmula Natural Vet Care Renal Gatos Úmido.png" },
  { id: 67, nome: "Fórmula Natural-LIFE_ADULTOS_MINI-E-PEQUENO", marca: "Fórmula Natural", marcaPasta: "Fórmula Natural", imagem: "/Produtos/Fórmula Natural/Fórmula Natural-LIFE_ADULTOS_MINI-E-PEQUENO.png" },
  { id: 68, nome: "Fórmula Natural_LIFE_CAES_FILHOTES Portes Médio e Grande", marca: "Fórmula Natural", marcaPasta: "Fórmula Natural", imagem: "/Produtos/Fórmula Natural/Fórmula Natural_LIFE_CAES_FILHOTES Portes Médio e Grande.png" },
  { id: 69, nome: "Fórmula_Natural_Fresh_Meat_Controle_De_Peso_Cães_Adultos_Portes_Mini_e_Pequeno", marca: "Fórmula Natural", marcaPasta: "Fórmula Natural", imagem: "/Produtos/Fórmula Natural/Fórmula_Natural_Fresh_Meat_Controle_De_Peso_Cães_Adultos_Portes_Mini_e_Pequeno.png" },
  { id: 70, nome: "Fórmula_Natural_FRESH_MEAT_CUIDADO_ORAL_Portes_Mini_e_Pequeno", marca: "Fórmula Natural", marcaPasta: "Fórmula Natural", imagem: "/Produtos/Fórmula Natural/Fórmula_Natural_FRESH_MEAT_CUIDADO_ORAL_Portes_Mini_e_Pequeno.png" },
  { id: 71, nome: "Fórmula_Natural_Fresh_Meat_Cães_Adultos_Portes_Mini_e_Pequeno....", marca: "Fórmula Natural", marcaPasta: "Fórmula Natural", imagem: "/Produtos/Fórmula Natural/Fórmula_Natural_Fresh_Meat_Cães_Adultos_Portes_Mini_e_Pequeno....png" },
  { id: 72, nome: "Fórmula_Natural_Fresh_Meat_Cães_Adultos_Porte_Médio", marca: "Fórmula Natural", marcaPasta: "Fórmula Natural", imagem: "/Produtos/Fórmula Natural/Fórmula_Natural_Fresh_Meat_Cães_Adultos_Porte_Médio.png" },
  { id: 73, nome: "Fórmula_Natural_Fresh_Meat_Cães_Filhotes_Portes_Mini_e_Pequeno....", marca: "Fórmula Natural", marcaPasta: "Fórmula Natural", imagem: "/Produtos/Fórmula Natural/Fórmula_Natural_Fresh_Meat_Cães_Filhotes_Portes_Mini_e_Pequeno....png" },
  { id: 74, nome: "Fórmula_Natural_Fresh_Meat_Cão_Sênior_Portes_Mini_e_Pequeno", marca: "Fórmula Natural", marcaPasta: "Fórmula Natural", imagem: "/Produtos/Fórmula Natural/Fórmula_Natural_Fresh_Meat_Cão_Sênior_Portes_Mini_e_Pequeno.png" },
  { id: 75, nome: "Fórmula_Natural_Fresh_Meat_Cão_Sênior_Portes_Médio_e_Grande", marca: "Fórmula Natural", marcaPasta: "Fórmula Natural", imagem: "/Produtos/Fórmula Natural/Fórmula_Natural_Fresh_Meat_Cão_Sênior_Portes_Médio_e_Grande.png" },
  { id: 76, nome: "Fórmula_Natural_Fresh_Meat_Gatos_Adultos_Frango", marca: "Fórmula Natural", marcaPasta: "Fórmula Natural", imagem: "/Produtos/Fórmula Natural/Fórmula_Natural_Fresh_Meat_Gatos_Adultos_Frango.png" },
  { id: 77, nome: "Fórmula_Natural_Fresh_Meat_Gatos_Castrados_Carne", marca: "Fórmula Natural", marcaPasta: "Fórmula Natural", imagem: "/Produtos/Fórmula Natural/Fórmula_Natural_Fresh_Meat_Gatos_Castrados_Carne.png" },
  { id: 78, nome: "Fórmula_Natural_Fresh_Meat_Gatos_Castrados_Salmão", marca: "Fórmula Natural", marcaPasta: "Fórmula Natural", imagem: "/Produtos/Fórmula Natural/Fórmula_Natural_Fresh_Meat_Gatos_Castrados_Salmão.png" },
  { id: 79, nome: "Fórmula_Natural_Fresh_Meat_Gatos_Sênior", marca: "Fórmula Natural", marcaPasta: "Fórmula Natural", imagem: "/Produtos/Fórmula Natural/Fórmula_Natural_Fresh_Meat_Gatos_Sênior.png" },
  { id: 80, nome: "Fórmula_Natural_Fresh_Meat_Sensitive_Cães_Adultos_Portes_Mini_e_Pequeno", marca: "Fórmula Natural", marcaPasta: "Fórmula Natural", imagem: "/Produtos/Fórmula Natural/Fórmula_Natural_Fresh_Meat_Sensitive_Cães_Adultos_Portes_Mini_e_Pequeno.png" },
  { id: 81, nome: "Fórmula_Natural_Life_Gatos_Castrados_Sabor_Frango", marca: "Fórmula Natural", marcaPasta: "Fórmula Natural", imagem: "/Produtos/Fórmula Natural/Fórmula_Natural_Life_Gatos_Castrados_Sabor_Frango.png" },
  // GoldeN (17 produtos)
  { id: 82, nome: "GoldeN Formula Cães Adultos Porte Pequeno Carne e Arroz", marca: "GoldeN", marcaPasta: "GoldeN", imagem: "/Produtos/GoldeN/GoldeN_Formula_Cães_Adultos_Porte_Pequeno_Carne_e_Arroz.png" },
  { id: 83, nome: "GoldeN Formula Cães Adultos Porte Pequeno Frango & Arroz", marca: "GoldeN", marcaPasta: "GoldeN", imagem: "/Produtos/GoldeN/GoldeN_Formula_Cães_Adultos_Porte_Pequeno_Frango_&_Arroz.png" },
  { id: 84, nome: "GoldeN Formula Cães Adultos Porte Pequeno Frango & Arroz Light", marca: "GoldeN", marcaPasta: "GoldeN", imagem: "/Produtos/GoldeN/GoldeN_Formula_Cães_Adultos_Porte_Pequeno_Frango_&_Arroz_Light.png" },
  { id: 85, nome: "GoldeN Formula Cães Adultos Porte Pequeno Peru & Arroz", marca: "GoldeN", marcaPasta: "GoldeN", imagem: "/Produtos/GoldeN/GoldeN_Formula_Cães_Adultos_Porte_Pequeno_Peru_&_Arroz.png" },
  { id: 86, nome: "GoldeN Formula Cães Filhotes Carne & Arroz", marca: "GoldeN", marcaPasta: "GoldeN", imagem: "/Produtos/GoldeN/GoldeN_Formula_Cães_Filhotes_Carne_&_Arroz.png" },
  { id: 87, nome: "GoldeN Formula Cães Filhotes Frango & Arroz", marca: "GoldeN", marcaPasta: "GoldeN", imagem: "/Produtos/GoldeN/GoldeN_Formula_Cães_Filhotes_Frango_&_Arroz.png" },
  { id: 88, nome: "GoldeN Formula Cães Filhotes Porte Pequeno Frango & Arroz", marca: "GoldeN", marcaPasta: "GoldeN", imagem: "/Produtos/GoldeN/GoldeN_Formula_Cães_Filhotes_Porte_Pequeno_Frango_&_Arroz.png" },
  { id: 89, nome: "GoldeN Formula Cães Seniores Porte Pequeno Frango e Arroz Mini Bits", marca: "GoldeN", marcaPasta: "GoldeN", imagem: "/Produtos/GoldeN/GoldeN_Formula_Cães_Seniores_Porte_Pequeno_Frango_e_Arroz_Mini_Bits.png" },
  { id: 90, nome: "GoldeN Gatos Adultos Carne", marca: "GoldeN", marcaPasta: "GoldeN", imagem: "/Produtos/GoldeN/GoldeN_Gatos_Adultos_Carne.png" },
  { id: 91, nome: "GoldeN Gatos Adultos Frango", marca: "GoldeN", marcaPasta: "GoldeN", imagem: "/Produtos/GoldeN/GoldeN_Gatos_Adultos_Frango.png" },
  { id: 92, nome: "GoldeN Gatos Adultos Salmão", marca: "GoldeN", marcaPasta: "GoldeN", imagem: "/Produtos/GoldeN/GoldeN_Gatos_Adultos_Salmão.png" },
  { id: 93, nome: "GoldeN Gatos Castrados Carne", marca: "GoldeN", marcaPasta: "GoldeN", imagem: "/Produtos/GoldeN/GoldeN_Gatos_Castrados_Carne.png" },
  { id: 94, nome: "GoldeN Gatos Castrados Frango", marca: "GoldeN", marcaPasta: "GoldeN", imagem: "/Produtos/GoldeN/GoldeN_Gatos_Castrados_Frango.png" },
  { id: 95, nome: "GoldeN Gatos Castrados Salmão", marca: "GoldeN", marcaPasta: "GoldeN", imagem: "/Produtos/GoldeN/GoldeN_Gatos_Castrados_Salmão.png" },
  { id: 96, nome: "GoldeN Gatos Filhotes Frango", marca: "GoldeN", marcaPasta: "GoldeN", imagem: "/Produtos/GoldeN/GoldeN_Gatos_Filhotes_Frango.png" },
  { id: 97, nome: "GoldeN Special Cães Adultos Porte Pequeno Frango e Carne", marca: "GoldeN", marcaPasta: "GoldeN", imagem: "/Produtos/GoldeN/GoldeN_Special_Cães_Adultos_Porte_Pequeno_Frango_e_Carne.png" },
  { id: 98, nome: "GoldeN Special Cães Filhotes Porte Pequeno Frango e Carne", marca: "GoldeN", marcaPasta: "GoldeN", imagem: "/Produtos/GoldeN/GoldeN_Special_Cães_Filhotes_Porte_Pequeno_Frango_e_Carne.png" },
  // Magnus (7 produtos)
  { id: 99, nome: "Magnus Bifinhos Cães Sabor Carne", marca: "Magnus", marcaPasta: "Magnus", imagem: "/Produtos/Magnus/Magnus_Bifinhos_Cães_Sabor_Carne.png" },
  { id: 100, nome: "Magnus Bifinhos Cães Sabor Frango", marca: "Magnus", marcaPasta: "Magnus", imagem: "/Produtos/Magnus/Magnus_Bifinhos_Cães_Sabor_Frango.png" },
  { id: 101, nome: "Magnus Biscoito Cães Adultos Pequeno Porte", marca: "Magnus", marcaPasta: "Magnus", imagem: "/Produtos/Magnus/Magnus_Biscoito_Cães_Adultos_Pequeno_Porte.png" },
  { id: 102, nome: "Magnus Biscoito Mix Cães Adultos", marca: "Magnus", marcaPasta: "Magnus", imagem: "/Produtos/Magnus/Magnus_Biscoito_Mix_Cães_Adultos.png" },
  { id: 103, nome: "Magnus Todo Dia Cães Adultos Pequeno Porte Sabor Carne e Frango", marca: "Magnus", marcaPasta: "Magnus", imagem: "/Produtos/Magnus/Magnus_Todo_Dia_Cães_Adultos_Pequeno_Porte_Sabor_Carne_e_Frango.png" },
  { id: 104, nome: "Magnus Todo Dia Cães Adultos Sabor Carne", marca: "Magnus", marcaPasta: "Magnus", imagem: "/Produtos/Magnus/Magnus_Todo_Dia_Cães_Adultos_Sabor_Carne.png" },
  { id: 105, nome: "Magnus Todo Dia Cães Filhotes Sabor Carne", marca: "Magnus", marcaPasta: "Magnus", imagem: "/Produtos/Magnus/Magnus_Todo_Dia_Cães_Filhotes_Sabor_Carne.png" },
  // N&D (12 produtos)
  { id: 106, nome: "N&D TROPICAL SELECTION CANINE CORDEIRO ADULT MINI", marca: "N&D", marcaPasta: "N&D", imagem: "/Produtos/N&D/N&D TROPICAL SELECTION CANINE CORDEIRO ADULT MINI.png", prioridade: 76 },
  { id: 107, nome: "N&D TROPICAL SELECTION CANINE CORDEIRO PUPPY MINI", marca: "N&D", marcaPasta: "N&D", imagem: "/Produtos/N&D/N&D TROPICAL SELECTION CANINE CORDEIRO PUPPY MINI.png", prioridade: 77 },
  { id: 108, nome: "N&D TROPICAL SELECTION CANINE FRANGO ADULT MINI", marca: "N&D", marcaPasta: "N&D", imagem: "/Produtos/N&D/N&D TROPICAL SELECTION CANINE FRANGO ADULT MINI.png", prioridade: 78 },
  { id: 109, nome: "N&D TROPICAL SELECTION CANINE SALMÃO ADULT MINI", marca: "N&D", marcaPasta: "N&D", imagem: "/Produtos/N&D/N&D TROPICAL SELECTION CANINE SALMÃO ADULT MINI.png", prioridade: 79 },
  { id: 110, nome: "N&D TROPICAL SELECTION CANINE SUÍNO ADULT MINI", marca: "N&D", marcaPasta: "N&D", imagem: "/Produtos/N&D/N&D TROPICAL SELECTION CANINE SUÍNO ADULT MINI.png", prioridade: 80 },
  { id: 111, nome: "N&D TROPICAL SELECTION CANINE SUÍNO PUPPY MINI", marca: "N&D", marcaPasta: "N&D", imagem: "/Produtos/N&D/N&D TROPICAL SELECTION CANINE SUÍNO PUPPY MINI.png", prioridade: 81 },
  { id: 112, nome: "n&d Ancestral Canine Cordeiro Adulto Mini", marca: "N&D", marcaPasta: "N&D", imagem: "/Produtos/N&D/n&d_Ancestral_Canine_Cordeiro_Adulto_Mini.png", prioridade: 82 },
  { id: 113, nome: "n&d cao-white-puppy-mini", marca: "N&D", marcaPasta: "N&D", imagem: "/Produtos/N&D/n&d_cao-white-puppy-mini.png", prioridade: 83 },
  { id: 114, nome: "n&d cao ANCESTRAL ADULT MEDIUM", marca: "N&D", marcaPasta: "N&D", imagem: "/Produtos/N&D/n&d_cao_ANCESTRAL_ADULT_MEDIUM.png", prioridade: 84 },
  { id: 115, nome: "N&D cao White Adult Mini - Merluza, Spirulina e Erva Doce", marca: "N&D", marcaPasta: "N&D", imagem: "/Produtos/N&D/N&D_cao_White Adult Mini - Merluza, Spirulina e Erva Doce.png", prioridade: 85 },
  { id: 116, nome: "n&d gatos Frango Adult Castrados", marca: "N&D", marcaPasta: "N&D", imagem: "/Produtos/N&D/n&d_gatos_Frango Adult Castrados.png", prioridade: 86 },
  { id: 117, nome: "n&d Gatos Tilápia, Spirulina e Goji Berry Adult", marca: "N&D", marcaPasta: "N&D", imagem: "/Produtos/N&D/n&d_Gatos_Tilápia, Spirulina e Goji Berry Adult.png", prioridade: 87 },
  // Origens (16 produtos)
  { id: 118, nome: "Origens Class Cães Adultos Portes Mini e Pequeno", marca: "Origens", marcaPasta: "Origens", imagem: "/Produtos/Origens/Origens Class Cães Adultos Portes Mini e Pequeno.png", prioridade: 88 },
  { id: 119, nome: "Origens Dental Cães", marca: "Origens", marcaPasta: "Origens", imagem: "/Produtos/Origens/Origens Dental Cães.png", prioridade: 89 },
  { id: 120, nome: "Origens Energy Cães Adultos Sabor Frango e Cereais", marca: "Origens", marcaPasta: "Origens", imagem: "/Produtos/Origens/Origens Energy Cães Adultos Sabor Frango e Cereais.png", prioridade: 90 },
  { id: 121, nome: "Origens Petiscos Naturais Traqueia Bovina", marca: "Origens", marcaPasta: "Origens", imagem: "/Produtos/Origens/Origens Petiscos Naturais Traqueia Bovina.png", prioridade: 91 },
  { id: 122, nome: "Origens Raças Específicas Cães Adultos Shih Tzu e Lhasa Apso", marca: "Origens", marcaPasta: "Origens", imagem: "/Produtos/Origens/Origens Raças Específicas Cães Adultos Shih Tzu e Lhasa Apso.png", prioridade: 92 },
  { id: 123, nome: "Origens Raças Específicas Cães Adultos Yorkshire, Maltês e Spitz", marca: "Origens", marcaPasta: "Origens", imagem: "/Produtos/Origens/Origens Raças Específicas Cães Adultos Yorkshire, Maltês e Spitz.png", prioridade: 93 },
  { id: 124, nome: "Origens Cães Adultos Portes Mini e Pequeno Sabor Carne", marca: "Origens", marcaPasta: "Origens", imagem: "/Produtos/Origens/Origens_Cães_Adultos_Portes_Mini_e_Pequeno_Sabor_Carne.png", prioridade: 94 },
  { id: 125, nome: "Origens Cães Adultos Portes Mini e Pequeno Sabor Frango", marca: "Origens", marcaPasta: "Origens", imagem: "/Produtos/Origens/Origens_Cães_Adultos_Portes_Mini_e_Pequeno_Sabor_Frango.png", prioridade: 95 },
  { id: 126, nome: "Origens Cães Adultos Sabor Carne e Cereais", marca: "Origens", marcaPasta: "Origens", imagem: "/Produtos/Origens/Origens_Cães_Adultos_Sabor_Carne_e_Cereais.png", prioridade: 96 },
  { id: 127, nome: "Origens Cães Sênior Portes Mini e Pequeno", marca: "Origens", marcaPasta: "Origens", imagem: "/Produtos/Origens/Origens_Cães_Sênior_Portes_Mini_e_Pequeno.png", prioridade: 97 },
  { id: 128, nome: "Origens Premium Especial Gatos Adultos Sabor Carne", marca: "Origens", marcaPasta: "Origens", imagem: "/Produtos/Origens/Origens_Premium_Especial_Gatos_Adultos_Sabor_Carne.png", prioridade: 98 },
  { id: 129, nome: "Origens Premium Especial Gatos Adultos Sabor Frango", marca: "Origens", marcaPasta: "Origens", imagem: "/Produtos/Origens/Origens_Premium_Especial_Gatos_Adultos_Sabor_Frango.png", prioridade: 99 },
  { id: 130, nome: "Origens Premium Especial Gatos Castrados Sabor Carne", marca: "Origens", marcaPasta: "Origens", imagem: "/Produtos/Origens/Origens_Premium_Especial_Gatos_Castrados_Sabor_Carne.png", prioridade: 100 },
  { id: 131, nome: "Origens Premium Especial Gatos Castrados Sabor Frango", marca: "Origens", marcaPasta: "Origens", imagem: "/Produtos/Origens/Origens_Premium_Especial_Gatos_Castrados_Sabor_Frango.png", prioridade: 101 },
  { id: 132, nome: "Origens Premium Especial Gatos Castrados Sabor Salmão", marca: "Origens", marcaPasta: "Origens", imagem: "/Produtos/Origens/Origens_Premium_Especial_Gatos_Castrados_Sabor_Salmão.png", prioridade: 102 },
  { id: 133, nome: "Origens Premium Especial Gatos Filhotes Sabor Frango e Cereais", marca: "Origens", marcaPasta: "Origens", imagem: "/Produtos/Origens/Origens_Premium_Especial_Gatos_Filhotes_Sabor_Frango_e_Cereais.png", prioridade: 103 },
  // PremieR (18 produtos)
  { id: 134, nome: "PremieR Ambientes Internos Cães Adultos Porte Pequeno Frango e Salmão", marca: "PremieR", marcaPasta: "PremieR", imagem: "/Produtos/PremieR/PremieR_Ambientes_Internos_Cães_Adultos_Porte_Pequeno_Frango_e_Salmão.png", prioridade: 104 },
  { id: 135, nome: "PremieR Ambientes Internos Cães Adultos Porte Pequeno Frango e Salmão Castrados", marca: "PremieR", marcaPasta: "PremieR", imagem: "/Produtos/PremieR/PremieR_Ambientes_Internos_Cães_Adultos_Porte_Pequeno_Frango_e_Salmão_Castrados.png", prioridade: 105 },
  { id: 136, nome: "PremieR Ambientes Internos Cães Adultos Porte Pequeno Frango e Salmão Light", marca: "PremieR", marcaPasta: "PremieR", imagem: "/Produtos/PremieR/PremieR_Ambientes_Internos_Cães_Adultos_Porte_Pequeno_Frango_e_Salmão_Light.png", prioridade: 106 },
  { id: 137, nome: "PremieR Ambientes Internos Cães Adultos Porte Pequeno Frango e Salmão Senior", marca: "PremieR", marcaPasta: "PremieR", imagem: "/Produtos/PremieR/PremieR_Ambientes_Internos_Cães_Adultos_Porte_Pequeno_Frango_e_Salmão_Senior.png", prioridade: 107 },
  { id: 138, nome: "PremieR Ambientes Internos Cães Adultos Porte Pequeno Salmão Dermacare", marca: "PremieR", marcaPasta: "PremieR", imagem: "/Produtos/PremieR/PremieR_Ambientes_Internos_Cães_Adultos_Porte_Pequeno_Salmão_Dermacare.png", prioridade: 108 },
  { id: 139, nome: "PremieR Ambientes Internos Cães Filhotes Porte Pequeno Frango e Salmão", marca: "PremieR", marcaPasta: "PremieR", imagem: "/Produtos/PremieR/PremieR_Ambientes_Internos_Cães_Filhotes_Porte_Pequeno_Frango_e_Salmão.png", prioridade: 109 },
  { id: 140, nome: "PremieR Formula Cães Adultos Porte Médio Frango", marca: "PremieR", marcaPasta: "PremieR", imagem: "/Produtos/PremieR/PremieR_Formula_Cães_Adultos_Porte_Médio_Frango.png", prioridade: 110 },
  { id: 141, nome: "PremieR Formula Cães Adultos Porte Pequeno Frango", marca: "PremieR", marcaPasta: "PremieR", imagem: "/Produtos/PremieR/PremieR_Formula_Cães_Adultos_Porte_Pequeno_Frango.png", prioridade: 111 },
  { id: 142, nome: "PremieR Formula Cães Filhotes Porte Pequeno Frango", marca: "PremieR", marcaPasta: "PremieR", imagem: "/Produtos/PremieR/PremieR_Formula_Cães_Filhotes_Porte_Pequeno_Frango.png", prioridade: 112 },
  { id: 143, nome: "PremieR Raças Específicas Bulldog Francês Adultos Porte Pequeno Frango", marca: "PremieR", marcaPasta: "PremieR", imagem: "/Produtos/PremieR/PremieR_Raças_Específicas_Bulldog_Francês_Adultos_Porte_Pequeno_Frango.png", prioridade: 113 },
  { id: 144, nome: "PremieR Raças Específicas Bulldog Inglês Adultos Porte Médio Frango", marca: "PremieR", marcaPasta: "PremieR", imagem: "/Produtos/PremieR/PremieR_Raças_Específicas_Bulldog_Inglês_Adultos_Porte_Médio_Frango.png", prioridade: 114 },
  { id: 145, nome: "PremieR Raças Específicas Filhotes Frango Bulldog Francês", marca: "PremieR", marcaPasta: "PremieR", imagem: "/Produtos/PremieR/PremieR_Raças_Específicas_Filhotes_Frango_Bulldog_Francês.png", prioridade: 115 },
  { id: 146, nome: "PremieR Raças Específicas Shih Tzu Adultos Porte Pequeno Frango", marca: "PremieR", marcaPasta: "PremieR", imagem: "/Produtos/PremieR/PremieR_Raças_Específicas_Shih_Tzu_Adultos_Porte_Pequeno_Frango.png", prioridade: 116 },
  { id: 147, nome: "PremieR Raças Específicas Shih Tzu Filhotes Porte Pequeno Frango", marca: "PremieR", marcaPasta: "PremieR", imagem: "/Produtos/PremieR/PremieR_Raças_Específicas_Shih_Tzu_Filhotes_Porte_Pequeno_Frango.png", prioridade: 117 },
  { id: 148, nome: "PremieR Raças Específicas Spitz Alemão Adulto Porte Pequeno Frango", marca: "PremieR", marcaPasta: "PremieR", imagem: "/Produtos/PremieR/PremieR_Raças_Específicas_Spitz_Alemão_Adulto_Porte_Pequeno_Frango.png", prioridade: 118 },
  { id: 149, nome: "PremieR Raças Específicas Spitz Alemão Filhotes Porte Pequeno Frango", marca: "PremieR", marcaPasta: "PremieR", imagem: "/Produtos/PremieR/PremieR_Raças_Específicas_Spitz_Alemão_Filhotes_Porte_Pequeno_Frango.png", prioridade: 119 },
  { id: 150, nome: "PremieR Raças Específicas Yorkshire Adultos Porte Pequeno Frango", marca: "PremieR", marcaPasta: "PremieR", imagem: "/Produtos/PremieR/PremieR_Raças_Específicas_Yorkshire_Adultos_Porte_Pequeno_Frango.png", prioridade: 120 },
  { id: 151, nome: "PremieR Raças Específicas Yorkshire Filhotes Porte Pequeno Frango", marca: "PremieR", marcaPasta: "PremieR", imagem: "/Produtos/PremieR/PremieR_Raças_Específicas_Yorkshire_Filhotes_Porte_Pequeno_Frango.png", prioridade: 121 },
  // PremieR_Nattu (5 produtos)
  { id: 152, nome: "PremieR Nattu Cães Adultos Porte Pequeno Frango, Abóbora, Brócolis, Quinoa & Blueberry", marca: "PremieR_Nattu", marcaPasta: "PremieR_Nattu", imagem: "/Produtos/PremieR_Nattu/PremieR_Nattu_Cães_Adultos_Porte_Pequeno_Frango,_Abóbora,_Brócolis,_Quinoa_&_Blueberry.png", prioridade: 122 },
  { id: 153, nome: "PremieR Nattu Cães Adultos Porte Pequeno Frango, Mandioca, Beterraba, Linhaça & Cranberry", marca: "PremieR_Nattu", marcaPasta: "PremieR_Nattu", imagem: "/Produtos/PremieR_Nattu/PremieR_Nattu_Cães_Adultos_Porte_Pequeno_Frango,_Mandioca,_Beterraba,_Linhaça_&_Cranberry.png", prioridade: 123 },
  { id: 154, nome: "PremieR Nattu Cães Adultos Porte Pequeno Frango Mandioquinha, Espinafre, Cúrcuma & Blackberry", marca: "PremieR_Nattu", marcaPasta: "PremieR_Nattu", imagem: "/Produtos/PremieR_Nattu/PremieR_Nattu_Cães_Adultos_Porte_Pequeno_Frango_Mandioquinha,_Espinafre,_Cúrcuma_&_Blackberry.png", prioridade: 124 },
  { id: 155, nome: "PremieR Nattu Cães Filhotes Porte Pequeno Frango, Mandioca, Beterraba, Linhaça e Cranberry", marca: "PremieR_Nattu", marcaPasta: "PremieR_Nattu", imagem: "/Produtos/PremieR_Nattu/PremieR_Nattu_Cães_Filhotes_Porte_Pequeno_Frango,_Mandioca,_Beterraba,_Linhaça_e_Cranberry.png", prioridade: 125 },
  { id: 156, nome: "PremieR Nattu Cães Sênior Porte Pequeno Frango, Mandioca, Beterraba, Linhaça & Cranberry", marca: "PremieR_Nattu", marcaPasta: "PremieR_Nattu", imagem: "/Produtos/PremieR_Nattu/PremieR_Nattu_Cães_Sênior_Porte_Pequeno_Frango,_Mandioca,_Beterraba,_Linhaça_&_Cranberry.png", prioridade: 126 },
  // special Cat (7 produtos)
  { id: 157, nome: "Special Cat Adultos Mix", marca: "special Cat", marcaPasta: "special Cat", imagem: "/Produtos/special Cat/Special Cat_Adultos_Mix.png", prioridade: 127 },
  { id: 158, nome: "Special Cat Castrados Mix", marca: "special Cat", marcaPasta: "special Cat", imagem: "/Produtos/special Cat/Special Cat_Castrados_Mix.png", prioridade: 128 },
  { id: 159, nome: "Special Cat Ultralife Adultos Frango", marca: "special Cat", marcaPasta: "special Cat", imagem: "/Produtos/special Cat/Special Cat_Ultralife_Adultos Frango.png", prioridade: 129 },
  { id: 160, nome: "Special Cat Ultralife Adultos Salmão", marca: "special Cat", marcaPasta: "special Cat", imagem: "/Produtos/special Cat/Special Cat_Ultralife_Adultos Salmão.png", prioridade: 130 },
  { id: 161, nome: "Special Cat Ultralife Castrados Frango", marca: "special Cat", marcaPasta: "special Cat", imagem: "/Produtos/special Cat/Special Cat_Ultralife_Castrados Frango.png", prioridade: 131 },
  { id: 162, nome: "Special Cat Ultralife Castrados10+ Salmão", marca: "special Cat", marcaPasta: "special Cat", imagem: "/Produtos/special Cat/Special Cat_Ultralife_Castrados10+Salmão.png", prioridade: 132 },
  { id: 163, nome: "Special Cat Ultralife Filhotes Salmão", marca: "special Cat", marcaPasta: "special Cat", imagem: "/Produtos/special Cat/Special Cat_Ultralife_Filhotes Salmão.png", prioridade: 133 },
  // Special dog (13 produtos)
  { id: 164, nome: "Special Dog-Sacaria-Performance-Junior-", marca: "Special dog", marcaPasta: "Special dog", imagem: "/Produtos/Special dog/Special Dog-Sacaria-Performance-Junior-.png", prioridade: 134 },
  { id: 165, nome: "SPECIAL DOG Adultos Carne", marca: "Special dog", marcaPasta: "Special dog", imagem: "/Produtos/Special dog/SPECIAL DOG_Adultos_Carne.png", prioridade: 135 },
  { id: 166, nome: "SPECIAL DOG Adultos Pequeno Porte Carne", marca: "Special dog", marcaPasta: "Special dog", imagem: "/Produtos/Special dog/SPECIAL DOG_Adultos_Pequeno Porte_Carne.png", prioridade: 136 },
  { id: 167, nome: "Special Dog Ultralife Adultos RAÇAS MÉDIAS E GRANDES", marca: "Special dog", marcaPasta: "Special dog", imagem: "/Produtos/Special dog/Special Dog_Ultralife_Adultos RAÇAS MÉDIAS E GRANDES.png", prioridade: 137 },
  { id: 168, nome: "Special Dog Ultralife Adultos RAÇAS PEQUENAS", marca: "Special dog", marcaPasta: "Special dog", imagem: "/Produtos/Special dog/Special Dog_Ultralife_Adultos RAÇAS PEQUENAS.png", prioridade: 138 },
  { id: 169, nome: "Special Dog Ultralife Adultos RAÇAS PEQUENAS Cordeiro", marca: "Special dog", marcaPasta: "Special dog", imagem: "/Produtos/Special dog/Special Dog_Ultralife_Adultos RAÇAS PEQUENAS_Cordeiro.png", prioridade: 139 },
  { id: 170, nome: "Special Dog Ultralife Junior RAÇAS MÉDIAS E GRANDES", marca: "Special dog", marcaPasta: "Special dog", imagem: "/Produtos/Special dog/Special Dog_Ultralife_Junior RAÇAS MÉDIAS E GRANDES.png", prioridade: 140 },
  { id: 171, nome: "Special Dog Ultralife Junior RAÇAS PEQUENAS", marca: "Special dog", marcaPasta: "Special dog", imagem: "/Produtos/Special dog/Special Dog_Ultralife_Junior RAÇAS PEQUENAS.png", prioridade: 141 },
  { id: 172, nome: "Special Dog Ultralife Light RAÇAS MÉDIAS E GRANDES", marca: "Special dog", marcaPasta: "Special dog", imagem: "/Produtos/Special dog/Special Dog_Ultralife_Light RAÇAS MÉDIAS E GRANDES.png", prioridade: 142 },
  { id: 173, nome: "Special Dog Ultralife Light RAÇAS PEQUENAS", marca: "Special dog", marcaPasta: "Special dog", imagem: "/Produtos/Special dog/Special Dog_Ultralife_Light RAÇAS PEQUENAS.png", prioridade: 143 },
  { id: 174, nome: "Special Dog Ultralife Performance", marca: "Special dog", marcaPasta: "Special dog", imagem: "/Produtos/Special dog/Special Dog_Ultralife_Performance_.png", prioridade: 144 },
  { id: 175, nome: "Special Dog Ultralife Senior RAÇAS MÉDIAS E GRANDES", marca: "Special dog", marcaPasta: "Special dog", imagem: "/Produtos/Special dog/Special Dog_Ultralife_Senior RAÇAS MÉDIAS E GRANDES.png", prioridade: 145 },
  { id: 176, nome: "Special Dog Ultralife Senior RAÇAS PEQUENAS", marca: "Special dog", marcaPasta: "Special dog", imagem: "/Produtos/Special dog/Special Dog_Ultralife_Senior RAÇAS PEQUENAS.png", prioridade: 146 },
  // VittA_Natural (7 produtos)
  { id: 177, nome: "VittA Natural Cães Adultos Carne e Arroz", marca: "VittA_Natural", marcaPasta: "VittA_Natural", imagem: "/Produtos/VittA_Natural/VittA_Natural_Cães_Adultos_Carne_e_Arroz.png", prioridade: 147 },
  { id: 178, nome: "VittA Natural Cães Adultos Frango e Arroz", marca: "VittA_Natural", marcaPasta: "VittA_Natural", imagem: "/Produtos/VittA_Natural/VittA_Natural_Cães_Adultos_Frango_e_Arroz.png", prioridade: 148 },
  { id: 179, nome: "VittA Natural Cães Adultos Porte Pequeno Carne e Arroz", marca: "VittA_Natural", marcaPasta: "VittA_Natural", imagem: "/Produtos/VittA_Natural/VittA_Natural_Cães_Adultos_Porte_Pequeno_Carne_e_Arroz.png", prioridade: 149 },
  { id: 180, nome: "VittA Natural Cães Adultos Porte Pequeno Frango e Arroz", marca: "VittA_Natural", marcaPasta: "VittA_Natural", imagem: "/Produtos/VittA_Natural/VittA_Natural_Cães_Adultos_Porte_Pequeno_Frango_e_Arroz.png", prioridade: 150 },
  { id: 181, nome: "VittA Natural Cães Filhotes Carne e Arroz", marca: "VittA_Natural", marcaPasta: "VittA_Natural", imagem: "/Produtos/VittA_Natural/VittA_Natural_Cães_Filhotes_Carne_e_Arroz.png", prioridade: 151 },
  { id: 182, nome: "Vitta Natural Cães Filhotes Frango e Arroz", marca: "VittA_Natural", marcaPasta: "VittA_Natural", imagem: "/Produtos/VittA_Natural/Vitta_Natural_Cães_Filhotes_Frango_e_Arroz.png", prioridade: 152 },
  { id: 183, nome: "VittA Natural Cães Filhotes Porte Pequeno Frango e Arroz", marca: "VittA_Natural", marcaPasta: "VittA_Natural", imagem: "/Produtos/VittA_Natural/VittA_Natural_Cães_Filhotes_Porte_Pequeno_Frango_e_Arroz.png", prioridade: 153 }
];
```

### `lib\produtosStorage.js`
```
export const PRODUTOS_STORAGE_KEY = 'produtosRanking';

export function carregarProdutosSalvos() {
  if (typeof window === 'undefined') {
    return null;
  }

  const raw = window.localStorage.getItem(PRODUTOS_STORAGE_KEY);
  if (!raw) {
    return null;
  }

  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : null;
  } catch {
    return null;
  }
}

export function salvarProdutosNoLocalStorage(produtos) {
  if (typeof window === 'undefined') {
    return;
  }

  window.localStorage.setItem(PRODUTOS_STORAGE_KEY, JSON.stringify(produtos));
}
```

### `lib\produtosUtils.js`
```
// Funções utilitárias para gerenciar prioridades dos produtos

/**
 * Ordena produtos por prioridade (menor número = maior prioridade)
 * @param {Array} produtos - Array de produtos
 * @returns {Array} Produtos ordenados por prioridade
 */
export function ordenarProdutosPorPrioridade(produtos) {
  return [...produtos].sort((a, b) => (a.prioridade || 999) - (b.prioridade || 999));
}

/**
 * Atualiza a prioridade de um produto específico
 * @param {Array} produtos - Array de produtos
 * @param {number} produtoId - ID do produto
 * @param {number} novaPrioridade - Nova prioridade (1 = mais prioritário)
 * @returns {Array} Novo array com prioridade atualizada
 */
export function atualizarPrioridadeProduto(produtos, produtoId, novaPrioridade) {
  return produtos.map(produto =>
    produto.id === produtoId
      ? { ...produto, prioridade: novaPrioridade }
      : produto
  );
}

/**
 * Move um produto para uma nova posição na lista
 * @param {Array} produtos - Array de produtos
 * @param {number} produtoId - ID do produto a mover
 * @param {number} novaPosicao - Nova posição (0 = primeira posição)
 * @returns {Array} Novo array com produto reposicionado
 */
export function moverProduto(produtos, produtoId, novaPosicao) {
  const produtosOrdenados = ordenarProdutosPorPrioridade(produtos);
  const produtoIndex = produtosOrdenados.findIndex(p => p.id === produtoId);

  if (produtoIndex === -1 || novaPosicao < 0 || novaPosicao >= produtosOrdenados.length) {
    return produtosOrdenados;
  }

  const produto = produtosOrdenados[produtoIndex];
  const novosProdutos = produtosOrdenados.filter(p => p.id !== produtoId);

  // Inserir na nova posição
  novosProdutos.splice(novaPosicao, 0, produto);

  // Reatribuir prioridades baseadas na nova ordem
  return novosProdutos.map((p, index) => ({
    ...p,
    prioridade: index + 1
  }));
}

/**
 * Gera prioridades automáticas para produtos sem prioridade
 * @param {Array} produtos - Array de produtos
 * @returns {Array} Produtos com prioridades atribuídas
 */
export function gerarPrioridadesAutomaticas(produtos) {
  return produtos.map((produto, index) => ({
    ...produto,
    prioridade: produto.prioridade || (index + 1)
  }));
}

/**
 * Valida se uma prioridade é válida
 * @param {number} prioridade - Prioridade a validar
 * @param {number} totalProdutos - Total de produtos
 * @returns {boolean} True se válida
 */
export function validarPrioridade(prioridade, totalProdutos) {
  return Number.isInteger(prioridade) && prioridade >= 1 && prioridade <= totalProdutos;
}

/**
 * Normaliza o nome do produto para exibição.
 * Remove underscores, hífens, reduz múltiplos espaços e capitaliza cada palavra.
 * @param {string} nome - Nome original do produto
 * @returns {string} Nome formatado para exibição
 */
export function formatProductName(nome) {
  if (!nome || typeof nome !== 'string') return nome;

  return nome
    .replace(/[_-]+/g, ' ')
    .replace(/\.{2,}/g, '.')
    .replace(/\s{2,}/g, ' ')
    .replace(/\s+([,;:.!?\)])/g, '$1')
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ')
    .trim();
}
```

### `lib\publicPath.js`
```
/**
 * Prefix a public asset path with the Next.js basePath if configured.
 * @param {string} path - A public asset path.
 * @returns {string} Prefixed asset path.
 */
export function withPublicPath(path) {
  if (!path || typeof path !== 'string') return path;
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '/casaderacaoatlantico';
  const normalizedBasePath = basePath.endsWith('/') ? basePath.slice(0, -1) : basePath;
  return path.startsWith('/') ? `${normalizedBasePath}${path}` : `${normalizedBasePath}/${path}`;
}
```

### `lib\whatsappReducer.js`
```
export function reducer(state, action) {
  switch (action.type) {
    case "open":
      return {
        ...state,
        isOpen: true,
        isNotification: false
      };
    case "close":
      return {
        ...state,
        isOpen: false
      };
    case "delay":
      return {
        ...state,
        isDelay: false
      };
    case "notification":
      return {
        ...state,
        isNotification: true
      };
    default:
      return state;
  }
}
```

### `next-env.d.ts`
```
/// <reference types="next" />
/// <reference types="next/image-types/global" />

// NOTE: This file should not be edited
// see https://nextjs.org/docs/app/building-your-application/configuring/typescript for more information.
```

### `next.config.js`
```
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '/casaderacaoatlantico',
  assetPrefix: process.env.NEXT_PUBLIC_ASSET_PREFIX || '/casaderacaoatlantico/',
  images: {
    unoptimized: true,
    domains: ['localhost', 'www.casaderacaoatlantico.com.br'],
  },
};

module.exports = nextConfig;
```

### `package-lock.json`
```
{
  "name": "casa-de-racao-atlantico",
  "version": "0.1.0",
  "lockfileVersion": 3,
  "requires": true,
  "packages": {
    "": {
      "name": "casa-de-racao-atlantico",
      "version": "0.1.0",
      "dependencies": {
        "@fortawesome/fontawesome-free": "^7.2.0",
        "keen-slider": "^6.8.6",
        "next": "^14.0.0",
        "react": "^18.2.0",
        "react-dom": "^18.2.0"
      },
      "devDependencies": {
        "@types/node": "25.6.0",
        "@types/react": "19.2.14",
        "eslint": "^8.50.0",
        "eslint-config-next": "^14.0.0"
      }
    },
    "node_modules/@emnapi/core": {
      "version": "1.10.0",
      "resolved": "https://registry.npmjs.org/@emnapi/core/-/core-1.10.0.tgz",
      "integrity": "sha512-yq6OkJ4p82CAfPl0u9mQebQHKPJkY7WrIuk205cTYnYe+k2Z8YBh11FrbRG/H6ihirqcacOgl2BIO8oyMQLeXw==",
      "dev": true,
      "license": "MIT",
      "optional": true,
      "dependencies": {
        "@emnapi/wasi-threads": "1.2.1",
        "tslib": "^2.4.0"
      }
    },
    "node_modules/@emnapi/runtime": {
      "version": "1.10.0",
      "resolved": "https://registry.npmjs.org/@emnapi/runtime/-/runtime-1.10.0.tgz",
      "integrity": "sha512-ewvYlk86xUoGI0zQRNq/mC+16R1QeDlKQy21Ki3oSYXNgLb45GV1P6A0M+/s6nyCuNDqe5VpaY84BzXGwVbwFA==",
      "dev": true,
      "license": "MIT",
      "optional": true,
      "dependencies": {
        "tslib": "^2.4.0"
      }
    },
    "node_modules/@emnapi/wasi-threads": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/@emnapi/wasi-threads/-/wasi-threads-1.2.1.tgz",
      "integrity": "sha512-uTII7OYF+/Mes/MrcIOYp5yOtSMLBWSIoLPpcgwipoiKbli6k322tcoFsxoIIxPDqW01SQGAgko4EzZi2BNv2w==",
      "dev": true,
      "license": "MIT",
      "optional": true,
      "dependencies": {
        "tslib": "^2.4.0"
      }
    },
    "node_modules/@eslint-community/eslint-utils": {
      "version": "4.9.1",
      "resolved": "https://registry.npmjs.org/@eslint-community/eslint-utils/-/eslint-utils-4.9.1.tgz",
      "integrity": "sha512-phrYmNiYppR7znFEdqgfWHXR6NCkZEK7hwWDHZUjit/2/U0r6XvkDl0SYnoM51Hq7FhCGdLDT6zxCCOY1hexsQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "eslint-visitor-keys": "^3.4.3"
      },
      "engines": {
        "node": "^12.22.0 || ^14.17.0 || >=16.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      },
      "peerDependencies": {
        "eslint": "^6.0.0 || ^7.0.0 || >=8.0.0"
      }
    },
    "node_modules/@eslint-community/regexpp": {
      "version": "4.12.2",
      "resolved": "https://registry.npmjs.org/@eslint-community/regexpp/-/regexpp-4.12.2.tgz",
      "integrity": "sha512-EriSTlt5OC9/7SXkRSCAhfSxxoSUgBm33OH+IkwbdpgoqsSsUg7y3uh+IICI/Qg4BBWr3U2i39RpmycbxMq4ew==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": "^12.0.0 || ^14.0.0 || >=16.0.0"
      }
    },
    "node_modules/@eslint/eslintrc": {
      "version": "2.1.4",
      "resolved": "https://registry.npmjs.org/@eslint/eslintrc/-/eslintrc-2.1.4.tgz",
      "integrity": "sha512-269Z39MS6wVJtsoUl10L60WdkhJVdPG24Q4eZTH3nnF6lpvSShEK3wQjDX9JRWAUPvPh7COouPpU9IrqaZFvtQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ajv": "^6.12.4",
        "debug": "^4.3.2",
        "espree": "^9.6.0",
        "globals": "^13.19.0",
        "ignore": "^5.2.0",
        "import-fresh": "^3.2.1",
        "js-yaml": "^4.1.0",
        "minimatch": "^3.1.2",
        "strip-json-comments": "^3.1.1"
      },
      "engines": {
        "node": "^12.22.0 || ^14.17.0 || >=16.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      }
    },
    "node_modules/@eslint/js": {
      "version": "8.57.1",
      "resolved": "https://registry.npmjs.org/@eslint/js/-/js-8.57.1.tgz",
      "integrity": "sha512-d9zaMRSTIKDLhctzH12MtXvJKSSUhaHcjV+2Z+GK+EEY7XKpP5yR4x+N3TAcHTcu963nIr+TMcCb4DBCYX1z6Q==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": "^12.22.0 || ^14.17.0 || >=16.0.0"
      }
    },
    "node_modules/@fortawesome/fontawesome-free": {
      "version": "7.2.0",
      "resolved": "https://registry.npmjs.org/@fortawesome/fontawesome-free/-/fontawesome-free-7.2.0.tgz",
      "integrity": "sha512-3DguDv/oUE+7vjMeTSOjCSG+KeawgVQOHrKRnvUuqYh1mfArrh7s+s8hXW3e4RerBA1+Wh+hBqf8sJNpqNrBWg==",
      "license": "(CC-BY-4.0 AND OFL-1.1 AND MIT)",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/@humanwhocodes/config-array": {
      "version": "0.13.0",
      "resolved": "https://registry.npmjs.org/@humanwhocodes/config-array/-/config-array-0.13.0.tgz",
      "integrity": "sha512-DZLEEqFWQFiyK6h5YIeynKx7JlvCYWL0cImfSRXZ9l4Sg2efkFGTuFf6vzXjK1cq6IYkU+Eg/JizXw+TD2vRNw==",
      "deprecated": "Use @eslint/config-array instead",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "@humanwhocodes/object-schema": "^2.0.3",
        "debug": "^4.3.1",
        "minimatch": "^3.0.5"
      },
      "engines": {
        "node": ">=10.10.0"
      }
    },
    "node_modules/@humanwhocodes/module-importer": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/@humanwhocodes/module-importer/-/module-importer-1.0.1.tgz",
      "integrity": "sha512-bxveV4V8v5Yb4ncFTT3rPSgZBOpCkjfK0y4oVVVJwIuDVBRMDXrPyXRL988i5ap9m9bnyEEjWfm5WkBmtffLfA==",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": ">=12.22"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/nzakas"
      }
    },
    "node_modules/@humanwhocodes/object-schema": {
      "version": "2.0.3",
      "resolved": "https://registry.npmjs.org/@humanwhocodes/object-schema/-/object-schema-2.0.3.tgz",
      "integrity": "sha512-93zYdMES/c1D69yZiKDBj0V24vqNzB/koF26KPaagAfd3P/4gUlh3Dys5ogAK+Exi9QyzlD8x/08Zt7wIKcDcA==",
      "deprecated": "Use @eslint/object-schema instead",
      "dev": true,
      "license": "BSD-3-Clause"
    },
    "node_modules/@isaacs/cliui": {
      "version": "8.0.2",
      "resolved": "https://registry.npmjs.org/@isaacs/cliui/-/cliui-8.0.2.tgz",
      "integrity": "sha512-O8jcjabXaleOG9DQ0+ARXWZBTfnP4WNAqzuiJK7ll44AmxGKv/J2M4TPjxjY3znBCfvBXFzucm1twdyFybFqEA==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "string-width": "^5.1.2",
        "string-width-cjs": "npm:string-width@^4.2.0",
        "strip-ansi": "^7.0.1",
        "strip-ansi-cjs": "npm:strip-ansi@^6.0.1",
        "wrap-ansi": "^8.1.0",
        "wrap-ansi-cjs": "npm:wrap-ansi@^7.0.0"
      },
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@isaacs/cliui/node_modules/ansi-regex": {
      "version": "6.2.2",
      "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-6.2.2.tgz",
      "integrity": "sha512-Bq3SmSpyFHaWjPk8If9yc6svM8c56dB5BAtW4Qbw5jHTwwXXcTLoRMkpDJp6VL0XzlWaCHTXrkFURMYmD0sLqg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/chalk/ansi-regex?sponsor=1"
      }
    },
    "node_modules/@isaacs/cliui/node_modules/strip-ansi": {
      "version": "7.2.0",
      "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-7.2.0.tgz",
      "integrity": "sha512-yDPMNjp4WyfYBkHnjIRLfca1i6KMyGCtsVgoKe/z1+6vukgaENdgGBZt+ZmKPc4gavvEZ5OgHfHdrazhgNyG7w==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ansi-regex": "^6.2.2"
      },
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/chalk/strip-ansi?sponsor=1"
      }
    },
    "node_modules/@napi-rs/wasm-runtime": {
      "version": "0.2.12",
      "resolved": "https://registry.npmjs.org/@napi-rs/wasm-runtime/-/wasm-runtime-0.2.12.tgz",
      "integrity": "sha512-ZVWUcfwY4E/yPitQJl481FjFo3K22D6qF0DuFH6Y/nbnE11GY5uguDxZMGXPQ8WQ0128MXQD7TnfHyK4oWoIJQ==",
      "dev": true,
      "license": "MIT",
      "optional": true,
      "dependencies": {
        "@emnapi/core": "^1.4.3",
        "@emnapi/runtime": "^1.4.3",
        "@tybys/wasm-util": "^0.10.0"
      }
    },
    "node_modules/@next/env": {
      "version": "14.2.35",
      "resolved": "https://registry.npmjs.org/@next/env/-/env-14.2.35.tgz",
      "integrity": "sha512-DuhvCtj4t9Gwrx80dmz2F4t/zKQ4ktN8WrMwOuVzkJfBilwAwGr6v16M5eI8yCuZ63H9TTuEU09Iu2HqkzFPVQ==",
      "license": "MIT"
    },
    "node_modules/@next/eslint-plugin-next": {
      "version": "14.2.35",
      "resolved": "https://registry.npmjs.org/@next/eslint-plugin-next/-/eslint-plugin-next-14.2.35.tgz",
      "integrity": "sha512-Jw9A3ICz2183qSsqwi7fgq4SBPiNfmOLmTPXKvlnzstUwyvBrtySiY+8RXJweNAs9KThb1+bYhZh9XWcNOr2zQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "glob": "10.3.10"
      }
    },
    "node_modules/@next/swc-darwin-arm64": {
      "version": "14.2.33",
      "resolved": "https://registry.npmjs.org/@next/swc-darwin-arm64/-/swc-darwin-arm64-14.2.33.tgz",
      "integrity": "sha512-HqYnb6pxlsshoSTubdXKu15g3iivcbsMXg4bYpjL2iS/V6aQot+iyF4BUc2qA/J/n55YtvE4PHMKWBKGCF/+wA==",
      "cpu": [
        "arm64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@next/swc-darwin-x64": {
      "version": "14.2.33",
      "resolved": "https://registry.npmjs.org/@next/swc-darwin-x64/-/swc-darwin-x64-14.2.33.tgz",
      "integrity": "sha512-8HGBeAE5rX3jzKvF593XTTFg3gxeU4f+UWnswa6JPhzaR6+zblO5+fjltJWIZc4aUalqTclvN2QtTC37LxvZAA==",
      "cpu": [
        "x64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@next/swc-linux-arm64-gnu": {
      "version": "14.2.33",
      "resolved": "https://registry.npmjs.org/@next/swc-linux-arm64-gnu/-/swc-linux-arm64-gnu-14.2.33.tgz",
      "integrity": "sha512-JXMBka6lNNmqbkvcTtaX8Gu5by9547bukHQvPoLe9VRBx1gHwzf5tdt4AaezW85HAB3pikcvyqBToRTDA4DeLw==",
      "cpu": [
        "arm64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@next/swc-linux-arm64-musl": {
      "version": "14.2.33",
      "resolved": "https://registry.npmjs.org/@next/swc-linux-arm64-musl/-/swc-linux-arm64-musl-14.2.33.tgz",
      "integrity": "sha512-Bm+QulsAItD/x6Ih8wGIMfRJy4G73tu1HJsrccPW6AfqdZd0Sfm5Imhgkgq2+kly065rYMnCOxTBvmvFY1BKfg==",
      "cpu": [
        "arm64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@next/swc-linux-x64-gnu": {
      "version": "14.2.33",
      "resolved": "https://registry.npmjs.org/@next/swc-linux-x64-gnu/-/swc-linux-x64-gnu-14.2.33.tgz",
      "integrity": "sha512-FnFn+ZBgsVMbGDsTqo8zsnRzydvsGV8vfiWwUo1LD8FTmPTdV+otGSWKc4LJec0oSexFnCYVO4hX8P8qQKaSlg==",
      "cpu": [
        "x64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@next/swc-linux-x64-musl": {
      "version": "14.2.33",
      "resolved": "https://registry.npmjs.org/@next/swc-linux-x64-musl/-/swc-linux-x64-musl-14.2.33.tgz",
      "integrity": "sha512-345tsIWMzoXaQndUTDv1qypDRiebFxGYx9pYkhwY4hBRaOLt8UGfiWKr9FSSHs25dFIf8ZqIFaPdy5MljdoawA==",
      "cpu": [
        "x64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@next/swc-win32-arm64-msvc": {
      "version": "14.2.33",
      "resolved": "https://registry.npmjs.org/@next/swc-win32-arm64-msvc/-/swc-win32-arm64-msvc-14.2.33.tgz",
      "integrity": "sha512-nscpt0G6UCTkrT2ppnJnFsYbPDQwmum4GNXYTeoTIdsmMydSKFz9Iny2jpaRupTb+Wl298+Rh82WKzt9LCcqSQ==",
      "cpu": [
        "arm64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@next/swc-win32-ia32-msvc": {
      "version": "14.2.33",
      "resolved": "https://registry.npmjs.org/@next/swc-win32-ia32-msvc/-/swc-win32-ia32-msvc-14.2.33.tgz",
      "integrity": "sha512-pc9LpGNKhJ0dXQhZ5QMmYxtARwwmWLpeocFmVG5Z0DzWq5Uf0izcI8tLc+qOpqxO1PWqZ5A7J1blrUIKrIFc7Q==",
      "cpu": [
        "ia32"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@next/swc-win32-x64-msvc": {
      "version": "14.2.33",
      "resolved": "https://registry.npmjs.org/@next/swc-win32-x64-msvc/-/swc-win32-x64-msvc-14.2.33.tgz",
      "integrity": "sha512-nOjfZMy8B94MdisuzZo9/57xuFVLHJaDj5e/xrduJp9CV2/HrfxTRH2fbyLe+K9QT41WBLUd4iXX3R7jBp0EUg==",
      "cpu": [
        "x64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@nodelib/fs.scandir": {
      "version": "2.1.5",
      "resolved": "https://registry.npmjs.org/@nodelib/fs.scandir/-/fs.scandir-2.1.5.tgz",
      "integrity": "sha512-vq24Bq3ym5HEQm2NKCr3yXDwjc7vTsEThRDnkp2DK9p1uqLR+DHurm/NOTo0KG7HYHU7eppKZj3MyqYuMBf62g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@nodelib/fs.stat": "2.0.5",
        "run-parallel": "^1.1.9"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/@nodelib/fs.stat": {
      "version": "2.0.5",
      "resolved": "https://registry.npmjs.org/@nodelib/fs.stat/-/fs.stat-2.0.5.tgz",
      "integrity": "sha512-RkhPPp2zrqDAQA/2jNhnztcPAlv64XdhIp7a7454A5ovI7Bukxgt7MX7udwAu3zg1DcpPU0rz3VV1SeaqvY4+A==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/@nodelib/fs.walk": {
      "version": "1.2.8",
      "resolved": "https://registry.npmjs.org/@nodelib/fs.walk/-/fs.walk-1.2.8.tgz",
      "integrity": "sha512-oGB+UxlgWcgQkgwo8GcEGwemoTFt3FIO9ababBmaGwXIoBKZ+GTy0pP185beGg7Llih/NSHSV2XAs1lnznocSg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@nodelib/fs.scandir": "2.1.5",
        "fastq": "^1.6.0"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/@nolyfill/is-core-module": {
      "version": "1.0.39",
      "resolved": "https://registry.npmjs.org/@nolyfill/is-core-module/-/is-core-module-1.0.39.tgz",
      "integrity": "sha512-nn5ozdjYQpUCZlWGuxcJY/KpxkWQs4DcbMCmKojjyrYDEAGy4Ce19NN4v5MduafTwJlbKc99UA8YhSVqq9yPZA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=12.4.0"
      }
    },
    "node_modules/@pkgjs/parseargs": {
      "version": "0.11.0",
      "resolved": "https://registry.npmjs.org/@pkgjs/parseargs/-/parseargs-0.11.0.tgz",
      "integrity": "sha512-+1VkjdD0QBLPodGrJUeqarH8VAIvQODIbwh9XpP5Syisf7YoQgsJKPNFoqqLQlu+VQ/tVSshMR6loPMn8U+dPg==",
      "dev": true,
      "license": "MIT",
      "optional": true,
      "engines": {
        "node": ">=14"
      }
    },
    "node_modules/@rtsao/scc": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/@rtsao/scc/-/scc-1.1.0.tgz",
      "integrity": "sha512-zt6OdqaDoOnJ1ZYsCYGt9YmWzDXl4vQdKTyJev62gFhRGKdx7mcT54V9KIjg+d2wi9EXsPvAPKe7i7WjfVWB8g==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@rushstack/eslint-patch": {
      "version": "1.16.1",
      "resolved": "https://registry.npmjs.org/@rushstack/eslint-patch/-/eslint-patch-1.16.1.tgz",
      "integrity": "sha512-TvZbIpeKqGQQ7X0zSCvPH9riMSFQFSggnfBjFZ1mEoILW+UuXCKwOoPcgjMwiUtRqFZ8jWhPJc4um14vC6I4ag==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@swc/counter": {
      "version": "0.1.3",
      "resolved": "https://registry.npmjs.org/@swc/counter/-/counter-0.1.3.tgz",
      "integrity": "sha512-e2BR4lsJkkRlKZ/qCHPw9ZaSxc0MVUd7gtbtaB7aMvHeJVYe8sOB8DBZkP2DtISHGSku9sCK6T6cnY0CtXrOCQ==",
      "license": "Apache-2.0"
    },
    "node_modules/@swc/helpers": {
      "version": "0.5.5",
      "resolved": "https://registry.npmjs.org/@swc/helpers/-/helpers-0.5.5.tgz",
      "integrity": "sha512-KGYxvIOXcceOAbEk4bi/dVLEK9z8sZ0uBB3Il5b1rhfClSpcX0yfRO0KmTkqR2cnQDymwLB+25ZyMzICg/cm/A==",
      "license": "Apache-2.0",
      "dependencies": {
        "@swc/counter": "^0.1.3",
        "tslib": "^2.4.0"
      }
    },
    "node_modules/@tybys/wasm-util": {
      "version": "0.10.1",
      "resolved": "https://registry.npmjs.org/@tybys/wasm-util/-/wasm-util-0.10.1.tgz",
      "integrity": "sha512-9tTaPJLSiejZKx+Bmog4uSubteqTvFrVrURwkmHixBo0G4seD0zUxp98E1DzUBJxLQ3NPwXrGKDiVjwx/DpPsg==",
      "dev": true,
      "license": "MIT",
      "optional": true,
      "dependencies": {
        "tslib": "^2.4.0"
      }
    },
    "node_modules/@types/json5": {
      "version": "0.0.29",
      "resolved": "https://registry.npmjs.org/@types/json5/-/json5-0.0.29.tgz",
      "integrity": "sha512-dRLjCWHYg4oaA77cxO64oO+7JwCwnIzkZPdrrC71jQmQtlhM556pwKo5bUzqvZndkVbeFLIIi+9TC40JNF5hNQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@types/node": {
      "version": "25.6.0",
      "resolved": "https://registry.npmjs.org/@types/node/-/node-25.6.0.tgz",
      "integrity": "sha512-+qIYRKdNYJwY3vRCZMdJbPLJAtGjQBudzZzdzwQYkEPQd+PJGixUL5QfvCLDaULoLv+RhT3LDkwEfKaAkgSmNQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "undici-types": "~7.19.0"
      }
    },
    "node_modules/@types/react": {
      "version": "19.2.14",
      "resolved": "https://registry.npmjs.org/@types/react/-/react-19.2.14.tgz",
      "integrity": "sha512-ilcTH/UniCkMdtexkoCN0bI7pMcJDvmQFPvuPvmEaYA/NSfFTAgdUSLAoVjaRJm7+6PvcM+q1zYOwS4wTYMF9w==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "csstype": "^3.2.2"
      }
    },
    "node_modules/@typescript-eslint/eslint-plugin": {
      "version": "8.58.2",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/eslint-plugin/-/eslint-plugin-8.58.2.tgz",
      "integrity": "sha512-aC2qc5thQahutKjP+cl8cgN9DWe3ZUqVko30CMSZHnFEHyhOYoZSzkGtAI2mcwZ38xeImDucI4dnqsHiOYuuCw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@eslint-community/regexpp": "^4.12.2",
        "@typescript-eslint/scope-manager": "8.58.2",
        "@typescript-eslint/type-utils": "8.58.2",
        "@typescript-eslint/utils": "8.58.2",
        "@typescript-eslint/visitor-keys": "8.58.2",
        "ignore": "^7.0.5",
        "natural-compare": "^1.4.0",
        "ts-api-utils": "^2.5.0"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      },
      "peerDependencies": {
        "@typescript-eslint/parser": "^8.58.2",
        "eslint": "^8.57.0 || ^9.0.0 || ^10.0.0",
        "typescript": ">=4.8.4 <6.1.0"
      }
    },
    "node_modules/@typescript-eslint/eslint-plugin/node_modules/ignore": {
      "version": "7.0.5",
      "resolved": "https://registry.npmjs.org/ignore/-/ignore-7.0.5.tgz",
      "integrity": "sha512-Hs59xBNfUIunMFgWAbGX5cq6893IbWg4KnrjbYwX3tx0ztorVgTDA6B2sxf8ejHJ4wz8BqGUMYlnzNBer5NvGg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 4"
      }
    },
    "node_modules/@typescript-eslint/parser": {
      "version": "8.58.2",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/parser/-/parser-8.58.2.tgz",
      "integrity": "sha512-/Zb/xaIDfxeJnvishjGdcR4jmr7S+bda8PKNhRGdljDM+elXhlvN0FyPSsMnLmJUrVG9aPO6dof80wjMawsASg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@typescript-eslint/scope-manager": "8.58.2",
        "@typescript-eslint/types": "8.58.2",
        "@typescript-eslint/typescript-estree": "8.58.2",
        "@typescript-eslint/visitor-keys": "8.58.2",
        "debug": "^4.4.3"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      },
      "peerDependencies": {
        "eslint": "^8.57.0 || ^9.0.0 || ^10.0.0",
        "typescript": ">=4.8.4 <6.1.0"
      }
    },
    "node_modules/@typescript-eslint/project-service": {
      "version": "8.58.2",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/project-service/-/project-service-8.58.2.tgz",
      "integrity": "sha512-Cq6UfpZZk15+r87BkIh5rDpi38W4b+Sjnb8wQCPPDDweS/LRCFjCyViEbzHk5Ck3f2QDfgmlxqSa7S7clDtlfg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@typescript-eslint/tsconfig-utils": "^8.58.2",
        "@typescript-eslint/types": "^8.58.2",
        "debug": "^4.4.3"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      },
      "peerDependencies": {
        "typescript": ">=4.8.4 <6.1.0"
      }
    },
    "node_modules/@typescript-eslint/scope-manager": {
      "version": "8.58.2",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/scope-manager/-/scope-manager-8.58.2.tgz",
      "integrity": "sha512-SgmyvDPexWETQek+qzZnrG6844IaO02UVyOLhI4wpo82dpZJY9+6YZCKAMFzXb7qhx37mFK1QcPQ18tud+vo6Q==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@typescript-eslint/types": "8.58.2",
        "@typescript-eslint/visitor-keys": "8.58.2"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      }
    },
    "node_modules/@typescript-eslint/tsconfig-utils": {
      "version": "8.58.2",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/tsconfig-utils/-/tsconfig-utils-8.58.2.tgz",
      "integrity": "sha512-3SR+RukipDvkkKp/d0jP0dyzuls3DbGmwDpVEc5wqk5f38KFThakqAAO0XMirWAE+kT00oTauTbzMFGPoAzB0A==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      },
      "peerDependencies": {
        "typescript": ">=4.8.4 <6.1.0"
      }
    },
    "node_modules/@typescript-eslint/type-utils": {
      "version": "8.58.2",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/type-utils/-/type-utils-8.58.2.tgz",
      "integrity": "sha512-Z7EloNR/B389FvabdGeTo2XMs4W9TjtPiO9DAsmT0yom0bwlPyRjkJ1uCdW1DvrrrYP50AJZ9Xc3sByZA9+dcg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@typescript-eslint/types": "8.58.2",
        "@typescript-eslint/typescript-estree": "8.58.2",
        "@typescript-eslint/utils": "8.58.2",
        "debug": "^4.4.3",
        "ts-api-utils": "^2.5.0"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      },
      "peerDependencies": {
        "eslint": "^8.57.0 || ^9.0.0 || ^10.0.0",
        "typescript": ">=4.8.4 <6.1.0"
      }
    },
    "node_modules/@typescript-eslint/types": {
      "version": "8.58.2",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/types/-/types-8.58.2.tgz",
      "integrity": "sha512-9TukXyATBQf/Jq9AMQXfvurk+G5R2MwfqQGDR2GzGz28HvY/lXNKGhkY+6IOubwcquikWk5cjlgPvD2uAA7htQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      }
    },
    "node_modules/@typescript-eslint/typescript-estree": {
      "version": "8.58.2",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/typescript-estree/-/typescript-estree-8.58.2.tgz",
      "integrity": "sha512-ELGuoofuhhoCvNbQjFFiobFcGgcDCEm0ThWdmO4Z0UzLqPXS3KFvnEZ+SHewwOYHjM09tkzOWXNTv9u6Gqtyuw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@typescript-eslint/project-service": "8.58.2",
        "@typescript-eslint/tsconfig-utils": "8.58.2",
        "@typescript-eslint/types": "8.58.2",
        "@typescript-eslint/visitor-keys": "8.58.2",
        "debug": "^4.4.3",
        "minimatch": "^10.2.2",
        "semver": "^7.7.3",
        "tinyglobby": "^0.2.15",
        "ts-api-utils": "^2.5.0"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      },
      "peerDependencies": {
        "typescript": ">=4.8.4 <6.1.0"
      }
    },
    "node_modules/@typescript-eslint/typescript-estree/node_modules/balanced-match": {
      "version": "4.0.4",
      "resolved": "https://registry.npmjs.org/balanced-match/-/balanced-match-4.0.4.tgz",
      "integrity": "sha512-BLrgEcRTwX2o6gGxGOCNyMvGSp35YofuYzw9h1IMTRmKqttAZZVU67bdb9Pr2vUHA8+j3i2tJfjO6C6+4myGTA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": "18 || 20 || >=22"
      }
    },
    "node_modules/@typescript-eslint/typescript-estree/node_modules/brace-expansion": {
      "version": "5.0.5",
      "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-5.0.5.tgz",
      "integrity": "sha512-VZznLgtwhn+Mact9tfiwx64fA9erHH/MCXEUfB/0bX/6Fz6ny5EGTXYltMocqg4xFAQZtnO3DHWWXi8RiuN7cQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "balanced-match": "^4.0.2"
      },
      "engines": {
        "node": "18 || 20 || >=22"
      }
    },
    "node_modules/@typescript-eslint/typescript-estree/node_modules/minimatch": {
      "version": "10.2.5",
      "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-10.2.5.tgz",
      "integrity": "sha512-MULkVLfKGYDFYejP07QOurDLLQpcjk7Fw+7jXS2R2czRQzR56yHRveU5NDJEOviH+hETZKSkIk5c+T23GjFUMg==",
      "dev": true,
      "license": "BlueOak-1.0.0",
      "dependencies": {
        "brace-expansion": "^5.0.5"
      },
      "engines": {
        "node": "18 || 20 || >=22"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/@typescript-eslint/utils": {
      "version": "8.58.2",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/utils/-/utils-8.58.2.tgz",
      "integrity": "sha512-QZfjHNEzPY8+l0+fIXMvuQ2sJlplB4zgDZvA+NmvZsZv3EQwOcc1DuIU1VJUTWZ/RKouBMhDyNaBMx4sWvrzRA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@eslint-community/eslint-utils": "^4.9.1",
        "@typescript-eslint/scope-manager": "8.58.2",
        "@typescript-eslint/types": "8.58.2",
        "@typescript-eslint/typescript-estree": "8.58.2"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      },
      "peerDependencies": {
        "eslint": "^8.57.0 || ^9.0.0 || ^10.0.0",
        "typescript": ">=4.8.4 <6.1.0"
      }
    },
    "node_modules/@typescript-eslint/visitor-keys": {
      "version": "8.58.2",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/visitor-keys/-/visitor-keys-8.58.2.tgz",
      "integrity": "sha512-f1WO2Lx8a9t8DARmcWAUPJbu0G20bJlj8L4z72K00TMeJAoyLr/tHhI/pzYBLrR4dXWkcxO1cWYZEOX8DKHTqA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@typescript-eslint/types": "8.58.2",
        "eslint-visitor-keys": "^5.0.0"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      }
    },
    "node_modules/@typescript-eslint/visitor-keys/node_modules/eslint-visitor-keys": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/eslint-visitor-keys/-/eslint-visitor-keys-5.0.1.tgz",
      "integrity": "sha512-tD40eHxA35h0PEIZNeIjkHoDR4YjjJp34biM0mDvplBe//mB+IHCqHDGV7pxF+7MklTvighcCPPZC7ynWyjdTA==",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": "^20.19.0 || ^22.13.0 || >=24"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      }
    },
    "node_modules/@ungap/structured-clone": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/@ungap/structured-clone/-/structured-clone-1.3.0.tgz",
      "integrity": "sha512-WmoN8qaIAo7WTYWbAZuG8PYEhn5fkz7dZrqTBZ7dtt//lL2Gwms1IcnQ5yHqjDfX8Ft5j4YzDM23f87zBfDe9g==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/@unrs/resolver-binding-android-arm-eabi": {
      "version": "1.11.1",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-android-arm-eabi/-/resolver-binding-android-arm-eabi-1.11.1.tgz",
      "integrity": "sha512-ppLRUgHVaGRWUx0R0Ut06Mjo9gBaBkg3v/8AxusGLhsIotbBLuRk51rAzqLC8gq6NyyAojEXglNjzf6R948DNw==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ]
    },
    "node_modules/@unrs/resolver-binding-android-arm64": {
      "version": "1.11.1",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-android-arm64/-/resolver-binding-android-arm64-1.11.1.tgz",
      "integrity": "sha512-lCxkVtb4wp1v+EoN+HjIG9cIIzPkX5OtM03pQYkG+U5O/wL53LC4QbIeazgiKqluGeVEeBlZahHalCaBvU1a2g==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ]
    },
    "node_modules/@unrs/resolver-binding-darwin-arm64": {
      "version": "1.11.1",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-darwin-arm64/-/resolver-binding-darwin-arm64-1.11.1.tgz",
      "integrity": "sha512-gPVA1UjRu1Y/IsB/dQEsp2V1pm44Of6+LWvbLc9SDk1c2KhhDRDBUkQCYVWe6f26uJb3fOK8saWMgtX8IrMk3g==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ]
    },
    "node_modules/@unrs/resolver-binding-darwin-x64": {
      "version": "1.11.1",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-darwin-x64/-/resolver-binding-darwin-x64-1.11.1.tgz",
      "integrity": "sha512-cFzP7rWKd3lZaCsDze07QX1SC24lO8mPty9vdP+YVa3MGdVgPmFc59317b2ioXtgCMKGiCLxJ4HQs62oz6GfRQ==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ]
    },
    "node_modules/@unrs/resolver-binding-freebsd-x64": {
      "version": "1.11.1",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-freebsd-x64/-/resolver-binding-freebsd-x64-1.11.1.tgz",
      "integrity": "sha512-fqtGgak3zX4DCB6PFpsH5+Kmt/8CIi4Bry4rb1ho6Av2QHTREM+47y282Uqiu3ZRF5IQioJQ5qWRV6jduA+iGw==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "freebsd"
      ]
    },
    "node_modules/@unrs/resolver-binding-linux-arm-gnueabihf": {
      "version": "1.11.1",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-linux-arm-gnueabihf/-/resolver-binding-linux-arm-gnueabihf-1.11.1.tgz",
      "integrity": "sha512-u92mvlcYtp9MRKmP+ZvMmtPN34+/3lMHlyMj7wXJDeXxuM0Vgzz0+PPJNsro1m3IZPYChIkn944wW8TYgGKFHw==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@unrs/resolver-binding-linux-arm-musleabihf": {
      "version": "1.11.1",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-linux-arm-musleabihf/-/resolver-binding-linux-arm-musleabihf-1.11.1.tgz",
      "integrity": "sha512-cINaoY2z7LVCrfHkIcmvj7osTOtm6VVT16b5oQdS4beibX2SYBwgYLmqhBjA1t51CarSaBuX5YNsWLjsqfW5Cw==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@unrs/resolver-binding-linux-arm64-gnu": {
      "version": "1.11.1",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-linux-arm64-gnu/-/resolver-binding-linux-arm64-gnu-1.11.1.tgz",
      "integrity": "sha512-34gw7PjDGB9JgePJEmhEqBhWvCiiWCuXsL9hYphDF7crW7UgI05gyBAi6MF58uGcMOiOqSJ2ybEeCvHcq0BCmQ==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@unrs/resolver-binding-linux-arm64-musl": {
      "version": "1.11.1",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-linux-arm64-musl/-/resolver-binding-linux-arm64-musl-1.11.1.tgz",
      "integrity": "sha512-RyMIx6Uf53hhOtJDIamSbTskA99sPHS96wxVE/bJtePJJtpdKGXO1wY90oRdXuYOGOTuqjT8ACccMc4K6QmT3w==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@unrs/resolver-binding-linux-ppc64-gnu": {
      "version": "1.11.1",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-linux-ppc64-gnu/-/resolver-binding-linux-ppc64-gnu-1.11.1.tgz",
      "integrity": "sha512-D8Vae74A4/a+mZH0FbOkFJL9DSK2R6TFPC9M+jCWYia/q2einCubX10pecpDiTmkJVUH+y8K3BZClycD8nCShA==",
      "cpu": [
        "ppc64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@unrs/resolver-binding-linux-riscv64-gnu": {
      "version": "1.11.1",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-linux-riscv64-gnu/-/resolver-binding-linux-riscv64-gnu-1.11.1.tgz",
      "integrity": "sha512-frxL4OrzOWVVsOc96+V3aqTIQl1O2TjgExV4EKgRY09AJ9leZpEg8Ak9phadbuX0BA4k8U5qtvMSQQGGmaJqcQ==",
      "cpu": [
        "riscv64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@unrs/resolver-binding-linux-riscv64-musl": {
      "version": "1.11.1",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-linux-riscv64-musl/-/resolver-binding-linux-riscv64-musl-1.11.1.tgz",
      "integrity": "sha512-mJ5vuDaIZ+l/acv01sHoXfpnyrNKOk/3aDoEdLO/Xtn9HuZlDD6jKxHlkN8ZhWyLJsRBxfv9GYM2utQ1SChKew==",
      "cpu": [
        "riscv64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@unrs/resolver-binding-linux-s390x-gnu": {
      "version": "1.11.1",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-linux-s390x-gnu/-/resolver-binding-linux-s390x-gnu-1.11.1.tgz",
      "integrity": "sha512-kELo8ebBVtb9sA7rMe1Cph4QHreByhaZ2QEADd9NzIQsYNQpt9UkM9iqr2lhGr5afh885d/cB5QeTXSbZHTYPg==",
      "cpu": [
        "s390x"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@unrs/resolver-binding-linux-x64-gnu": {
      "version": "1.11.1",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-linux-x64-gnu/-/resolver-binding-linux-x64-gnu-1.11.1.tgz",
      "integrity": "sha512-C3ZAHugKgovV5YvAMsxhq0gtXuwESUKc5MhEtjBpLoHPLYM+iuwSj3lflFwK3DPm68660rZ7G8BMcwSro7hD5w==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@unrs/resolver-binding-linux-x64-musl": {
      "version": "1.11.1",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-linux-x64-musl/-/resolver-binding-linux-x64-musl-1.11.1.tgz",
      "integrity": "sha512-rV0YSoyhK2nZ4vEswT/QwqzqQXw5I6CjoaYMOX0TqBlWhojUf8P94mvI7nuJTeaCkkds3QE4+zS8Ko+GdXuZtA==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@unrs/resolver-binding-wasm32-wasi": {
      "version": "1.11.1",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-wasm32-wasi/-/resolver-binding-wasm32-wasi-1.11.1.tgz",
      "integrity": "sha512-5u4RkfxJm+Ng7IWgkzi3qrFOvLvQYnPBmjmZQ8+szTK/b31fQCnleNl1GgEt7nIsZRIf5PLhPwT0WM+q45x/UQ==",
      "cpu": [
        "wasm32"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "dependencies": {
        "@napi-rs/wasm-runtime": "^0.2.11"
      },
      "engines": {
        "node": ">=14.0.0"
      }
    },
    "node_modules/@unrs/resolver-binding-win32-arm64-msvc": {
      "version": "1.11.1",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-win32-arm64-msvc/-/resolver-binding-win32-arm64-msvc-1.11.1.tgz",
      "integrity": "sha512-nRcz5Il4ln0kMhfL8S3hLkxI85BXs3o8EYoattsJNdsX4YUU89iOkVn7g0VHSRxFuVMdM4Q1jEpIId1Ihim/Uw==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ]
    },
    "node_modules/@unrs/resolver-binding-win32-ia32-msvc": {
      "version": "1.11.1",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-win32-ia32-msvc/-/resolver-binding-win32-ia32-msvc-1.11.1.tgz",
      "integrity": "sha512-DCEI6t5i1NmAZp6pFonpD5m7i6aFrpofcp4LA2i8IIq60Jyo28hamKBxNrZcyOwVOZkgsRp9O2sXWBWP8MnvIQ==",
      "cpu": [
        "ia32"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ]
    },
    "node_modules/@unrs/resolver-binding-win32-x64-msvc": {
      "version": "1.11.1",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-win32-x64-msvc/-/resolver-binding-win32-x64-msvc-1.11.1.tgz",
      "integrity": "sha512-lrW200hZdbfRtztbygyaq/6jP6AKE8qQN2KvPcJ+x7wiD038YtnYtZ82IMNJ69GJibV7bwL3y9FgK+5w/pYt6g==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ]
    },
    "node_modules/acorn": {
      "version": "8.16.0",
      "resolved": "https://registry.npmjs.org/acorn/-/acorn-8.16.0.tgz",
      "integrity": "sha512-UVJyE9MttOsBQIDKw1skb9nAwQuR5wuGD3+82K6JgJlm/Y+KI92oNsMNGZCYdDsVtRHSak0pcV5Dno5+4jh9sw==",
      "dev": true,
      "license": "MIT",
      "bin": {
        "acorn": "bin/acorn"
      },
      "engines": {
        "node": ">=0.4.0"
      }
    },
    "node_modules/acorn-jsx": {
      "version": "5.3.2",
      "resolved": "https://registry.npmjs.org/acorn-jsx/-/acorn-jsx-5.3.2.tgz",
      "integrity": "sha512-rq9s+JNhf0IChjtDXxllJ7g41oZk5SlXtp0LHwyA5cejwn7vKmKp4pPri6YEePv2PU65sAsegbXtIinmDFDXgQ==",
      "dev": true,
      "license": "MIT",
      "peerDependencies": {
        "acorn": "^6.0.0 || ^7.0.0 || ^8.0.0"
      }
    },
    "node_modules/ajv": {
      "version": "6.14.0",
      "resolved": "https://registry.npmjs.org/ajv/-/ajv-6.14.0.tgz",
      "integrity": "sha512-IWrosm/yrn43eiKqkfkHis7QioDleaXQHdDVPKg0FSwwd/DuvyX79TZnFOnYpB7dcsFAMmtFztZuXPDvSePkFw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "fast-deep-equal": "^3.1.1",
        "fast-json-stable-stringify": "^2.0.0",
        "json-schema-traverse": "^0.4.1",
        "uri-js": "^4.2.2"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/epoberezkin"
      }
    },
    "node_modules/ansi-regex": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-5.0.1.tgz",
      "integrity": "sha512-quJQXlTSUGL2LH9SUXo8VwsY4soanhgo6LNSm84E1LBcE8s3O0wpdiRzyR9z/ZZJMlMWv37qOOb9pdJlMUEKFQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/ansi-styles": {
      "version": "4.3.0",
      "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
      "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "color-convert": "^2.0.1"
      },
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/chalk/ansi-styles?sponsor=1"
      }
    },
    "node_modules/argparse": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/argparse/-/argparse-2.0.1.tgz",
      "integrity": "sha512-8+9WqebbFzpX9OR+Wa6O29asIogeRMzcGtAINdpMHHyAg10f05aSFVBbcEqGf/PXw1EjAZ+q2/bEBg3DvurK3Q==",
      "dev": true,
      "license": "Python-2.0"
    },
    "node_modules/aria-query": {
      "version": "5.3.2",
      "resolved": "https://registry.npmjs.org/aria-query/-/aria-query-5.3.2.tgz",
      "integrity": "sha512-COROpnaoap1E2F000S62r6A60uHZnmlvomhfyT2DlTcrY1OrBKn2UhH7qn5wTC9zMvD0AY7csdPSNwKP+7WiQw==",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/array-buffer-byte-length": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/array-buffer-byte-length/-/array-buffer-byte-length-1.0.2.tgz",
      "integrity": "sha512-LHE+8BuR7RYGDKvnrmcuSq3tDcKv9OFEXQt/HpbZhY7V6h0zlUXutnAD82GiFx9rdieCMjkvtcsPqBwgUl1Iiw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.3",
        "is-array-buffer": "^3.0.5"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/array-includes": {
      "version": "3.1.9",
      "resolved": "https://registry.npmjs.org/array-includes/-/array-includes-3.1.9.tgz",
      "integrity": "sha512-FmeCCAenzH0KH381SPT5FZmiA/TmpndpcaShhfgEN9eCVjnFBqq3l1xrI42y8+PPLI6hypzou4GXw00WHmPBLQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.8",
        "call-bound": "^1.0.4",
        "define-properties": "^1.2.1",
        "es-abstract": "^1.24.0",
        "es-object-atoms": "^1.1.1",
        "get-intrinsic": "^1.3.0",
        "is-string": "^1.1.1",
        "math-intrinsics": "^1.1.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/array.prototype.findlast": {
      "version": "1.2.5",
      "resolved": "https://registry.npmjs.org/array.prototype.findlast/-/array.prototype.findlast-1.2.5.tgz",
      "integrity": "sha512-CVvd6FHg1Z3POpBLxO6E6zr+rSKEQ9L6rZHAaY7lLfhKsWYUBBOuMs0e9o24oopj6H+geRCX0YJ+TJLBK2eHyQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.7",
        "define-properties": "^1.2.1",
        "es-abstract": "^1.23.2",
        "es-errors": "^1.3.0",
        "es-object-atoms": "^1.0.0",
        "es-shim-unscopables": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/array.prototype.findlastindex": {
      "version": "1.2.6",
      "resolved": "https://registry.npmjs.org/array.prototype.findlastindex/-/array.prototype.findlastindex-1.2.6.tgz",
      "integrity": "sha512-F/TKATkzseUExPlfvmwQKGITM3DGTK+vkAsCZoDc5daVygbJBnjEUCbgkAvVFsgfXfX4YIqZ/27G3k3tdXrTxQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.8",
        "call-bound": "^1.0.4",
        "define-properties": "^1.2.1",
        "es-abstract": "^1.23.9",
        "es-errors": "^1.3.0",
        "es-object-atoms": "^1.1.1",
        "es-shim-unscopables": "^1.1.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/array.prototype.flat": {
      "version": "1.3.3",
      "resolved": "https://registry.npmjs.org/array.prototype.flat/-/array.prototype.flat-1.3.3.tgz",
      "integrity": "sha512-rwG/ja1neyLqCuGZ5YYrznA62D4mZXg0i1cIskIUKSiqF3Cje9/wXAls9B9s1Wa2fomMsIv8czB8jZcPmxCXFg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.8",
        "define-properties": "^1.2.1",
        "es-abstract": "^1.23.5",
        "es-shim-unscopables": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/array.prototype.flatmap": {
      "version": "1.3.3",
      "resolved": "https://registry.npmjs.org/array.prototype.flatmap/-/array.prototype.flatmap-1.3.3.tgz",
      "integrity": "sha512-Y7Wt51eKJSyi80hFrJCePGGNo5ktJCslFuboqJsbf57CCPcm5zztluPlc4/aD8sWsKvlwatezpV4U1efk8kpjg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.8",
        "define-properties": "^1.2.1",
        "es-abstract": "^1.23.5",
        "es-shim-unscopables": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/array.prototype.tosorted": {
      "version": "1.1.4",
      "resolved": "https://registry.npmjs.org/array.prototype.tosorted/-/array.prototype.tosorted-1.1.4.tgz",
      "integrity": "sha512-p6Fx8B7b7ZhL/gmUsAy0D15WhvDccw3mnGNbZpi3pmeJdxtWsj2jEaI4Y6oo3XiHfzuSgPwKc04MYt6KgvC/wA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.7",
        "define-properties": "^1.2.1",
        "es-abstract": "^1.23.3",
        "es-errors": "^1.3.0",
        "es-shim-unscopables": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/arraybuffer.prototype.slice": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/arraybuffer.prototype.slice/-/arraybuffer.prototype.slice-1.0.4.tgz",
      "integrity": "sha512-BNoCY6SXXPQ7gF2opIP4GBE+Xw7U+pHMYKuzjgCN3GwiaIR09UUeKfheyIry77QtrCBlC0KK0q5/TER/tYh3PQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "array-buffer-byte-length": "^1.0.1",
        "call-bind": "^1.0.8",
        "define-properties": "^1.2.1",
        "es-abstract": "^1.23.5",
        "es-errors": "^1.3.0",
        "get-intrinsic": "^1.2.6",
        "is-array-buffer": "^3.0.4"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/ast-types-flow": {
      "version": "0.0.8",
      "resolved": "https://registry.npmjs.org/ast-types-flow/-/ast-types-flow-0.0.8.tgz",
      "integrity": "sha512-OH/2E5Fg20h2aPrbe+QL8JZQFko0YZaF+j4mnQ7BGhfavO7OpSLa8a0y9sBwomHdSbkhTS8TQNayBfnW5DwbvQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/async-function": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/async-function/-/async-function-1.0.0.tgz",
      "integrity": "sha512-hsU18Ae8CDTR6Kgu9DYf0EbCr/a5iGL0rytQDobUcdpYOKokk8LEjVphnXkDkgpi0wYVsqrXuP0bZxJaTqdgoA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/available-typed-arrays": {
      "version": "1.0.7",
      "resolved": "https://registry.npmjs.org/available-typed-arrays/-/available-typed-arrays-1.0.7.tgz",
      "integrity": "sha512-wvUjBtSGN7+7SjNpq/9M2Tg350UZD3q62IFZLbRAR1bSMlCo1ZaeW+BJ+D090e4hIIZLBcTDWe4Mh4jvUDajzQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "possible-typed-array-names": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/axe-core": {
      "version": "4.11.3",
      "resolved": "https://registry.npmjs.org/axe-core/-/axe-core-4.11.3.tgz",
      "integrity": "sha512-zBQouZixDTbo3jMGqHKyePxYxr1e5W8UdTmBQ7sNtaA9M2bE32daxxPLS/jojhKOHxQ7LWwPjfiwf/fhaJWzlg==",
      "dev": true,
      "license": "MPL-2.0",
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/axobject-query": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/axobject-query/-/axobject-query-4.1.0.tgz",
      "integrity": "sha512-qIj0G9wZbMGNLjLmg1PT6v2mE9AH2zlnADJD/2tC6E00hgmhUOfEB6greHPAfLRSufHqROIUTkw6E+M3lH0PTQ==",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/balanced-match": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/balanced-match/-/balanced-match-1.0.2.tgz",
      "integrity": "sha512-3oSeUO0TMV67hN1AmbXsK4yaqU7tjiHlbxRDZOpH0KW9+CeX4bRAaX0Anxt0tx2MrpRpWwQaPwIlISEJhYU5Pw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/brace-expansion": {
      "version": "1.1.14",
      "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-1.1.14.tgz",
      "integrity": "sha512-MWPGfDxnyzKU7rNOW9SP/c50vi3xrmrua/+6hfPbCS2ABNWfx24vPidzvC7krjU/RTo235sV776ymlsMtGKj8g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "balanced-match": "^1.0.0",
        "concat-map": "0.0.1"
      }
    },
    "node_modules/busboy": {
      "version": "1.6.0",
      "resolved": "https://registry.npmjs.org/busboy/-/busboy-1.6.0.tgz",
      "integrity": "sha512-8SFQbg/0hQ9xy3UNTB0YEnsNBbWfhf7RtnzpL7TkBiTBRfrQ9Fxcnz7VJsleJpyp6rVLvXiuORqjlHi5q+PYuA==",
      "dependencies": {
        "streamsearch": "^1.1.0"
      },
      "engines": {
        "node": ">=10.16.0"
      }
    },
    "node_modules/call-bind": {
      "version": "1.0.9",
      "resolved": "https://registry.npmjs.org/call-bind/-/call-bind-1.0.9.tgz",
      "integrity": "sha512-a/hy+pNsFUTR+Iz8TCJvXudKVLAnz/DyeSUo10I5yvFDQJBFU2s9uqQpoSrJlroHUKoKqzg+epxyP9lqFdzfBQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind-apply-helpers": "^1.0.2",
        "es-define-property": "^1.0.1",
        "get-intrinsic": "^1.3.0",
        "set-function-length": "^1.2.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/call-bind-apply-helpers": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/call-bind-apply-helpers/-/call-bind-apply-helpers-1.0.2.tgz",
      "integrity": "sha512-Sp1ablJ0ivDkSzjcaJdxEunN5/XvksFJ2sMBFfq6x0ryhQV/2b/KwFe21cMpmHtPOSij8K99/wSfoEuTObmuMQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0",
        "function-bind": "^1.1.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/call-bound": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/call-bound/-/call-bound-1.0.4.tgz",
      "integrity": "sha512-+ys997U96po4Kx/ABpBCqhA9EuxJaQWDQg7295H4hBphv3IZg0boBKuwYpt4YXp6MZ5AmZQnU/tyMTlRpaSejg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind-apply-helpers": "^1.0.2",
        "get-intrinsic": "^1.3.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/callsites": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/callsites/-/callsites-3.1.0.tgz",
      "integrity": "sha512-P8BjAsXvZS+VIDUI11hHCQEv74YT67YUi5JJFNWIqL235sBmjX4+qx9Muvls5ivyNENctx46xQLQ3aTuE7ssaQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/caniuse-lite": {
      "version": "1.0.30001788",
      "resolved": "https://registry.npmjs.org/caniuse-lite/-/caniuse-lite-1.0.30001788.tgz",
      "integrity": "sha512-6q8HFp+lOQtcf7wBK+uEenxymVWkGKkjFpCvw5W25cmMwEDU45p1xQFBQv8JDlMMry7eNxyBaR+qxgmTUZkIRQ==",
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/browserslist"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/caniuse-lite"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "CC-BY-4.0"
    },
    "node_modules/chalk": {
      "version": "4.1.2",
      "resolved": "https://registry.npmjs.org/chalk/-/chalk-4.1.2.tgz",
      "integrity": "sha512-oKnbhFyRIXpUuez8iBMmyEa4nbj4IOQyuhc/wy9kY7/WVPcwIO9VA668Pu8RkO7+0G76SLROeyw9CpQ061i4mA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ansi-styles": "^4.1.0",
        "supports-color": "^7.1.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/chalk/chalk?sponsor=1"
      }
    },
    "node_modules/client-only": {
      "version": "0.0.1",
      "resolved": "https://registry.npmjs.org/client-only/-/client-only-0.0.1.tgz",
      "integrity": "sha512-IV3Ou0jSMzZrd3pZ48nLkT9DA7Ag1pnPzaiQhpW7c3RbcqqzvzzVu+L8gfqMp/8IM2MQtSiqaCxrrcfu8I8rMA==",
      "license": "MIT"
    },
    "node_modules/color-convert": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
      "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "color-name": "~1.1.4"
      },
      "engines": {
        "node": ">=7.0.0"
      }
    },
    "node_modules/color-name": {
      "version": "1.1.4",
      "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
      "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/concat-map": {
      "version": "0.0.1",
      "resolved": "https://registry.npmjs.org/concat-map/-/concat-map-0.0.1.tgz",
      "integrity": "sha512-/Srv4dswyQNBfohGpz9o6Yb3Gz3SrUDqBH5rTuhGR7ahtlbYKnVxw2bCFMRljaA7EXHaXZ8wsHdodFvbkhKmqg==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/cross-spawn": {
      "version": "7.0.6",
      "resolved": "https://registry.npmjs.org/cross-spawn/-/cross-spawn-7.0.6.tgz",
      "integrity": "sha512-uV2QOWP2nWzsy2aMp8aRibhi9dlzF5Hgh5SHaB9OiTGEyDTiJJyx0uy51QXdyWbtAHNua4XJzUKca3OzKUd3vA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "path-key": "^3.1.0",
        "shebang-command": "^2.0.0",
        "which": "^2.0.1"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/csstype": {
      "version": "3.2.3",
      "resolved": "https://registry.npmjs.org/csstype/-/csstype-3.2.3.tgz",
      "integrity": "sha512-z1HGKcYy2xA8AGQfwrn0PAy+PB7X/GSj3UVJW9qKyn43xWa+gl5nXmU4qqLMRzWVLFC8KusUX8T/0kCiOYpAIQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/damerau-levenshtein": {
      "version": "1.0.8",
      "resolved": "https://registry.npmjs.org/damerau-levenshtein/-/damerau-levenshtein-1.0.8.tgz",
      "integrity": "sha512-sdQSFB7+llfUcQHUQO3+B8ERRj0Oa4w9POWMI/puGtuf7gFywGmkaLCElnudfTiKZV+NvHqL0ifzdrI8Ro7ESA==",
      "dev": true,
      "license": "BSD-2-Clause"
    },
    "node_modules/data-view-buffer": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/data-view-buffer/-/data-view-buffer-1.0.2.tgz",
      "integrity": "sha512-EmKO5V3OLXh1rtK2wgXRansaK1/mtVdTUEiEI0W8RkvgT05kfxaH29PliLnpLP73yYO6142Q72QNa8Wx/A5CqQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.3",
        "es-errors": "^1.3.0",
        "is-data-view": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/data-view-byte-length": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/data-view-byte-length/-/data-view-byte-length-1.0.2.tgz",
      "integrity": "sha512-tuhGbE6CfTM9+5ANGf+oQb72Ky/0+s3xKUpHvShfiz2RxMFgFPjsXuRLBVMtvMs15awe45SRb83D6wH4ew6wlQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.3",
        "es-errors": "^1.3.0",
        "is-data-view": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/inspect-js"
      }
    },
    "node_modules/data-view-byte-offset": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/data-view-byte-offset/-/data-view-byte-offset-1.0.1.tgz",
      "integrity": "sha512-BS8PfmtDGnrgYdOonGZQdLZslWIeCGFP9tpan0hi1Co2Zr2NKADsvGYA8XxuG/4UWgJ6Cjtv+YJnB6MM69QGlQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.2",
        "es-errors": "^1.3.0",
        "is-data-view": "^1.0.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/debug": {
      "version": "4.4.3",
      "resolved": "https://registry.npmjs.org/debug/-/debug-4.4.3.tgz",
      "integrity": "sha512-RGwwWnwQvkVfavKVt22FGLw+xYSdzARwm0ru6DhTVA3umU5hZc28V3kO4stgYryrTlLpuvgI9GiijltAjNbcqA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ms": "^2.1.3"
      },
      "engines": {
        "node": ">=6.0"
      },
      "peerDependenciesMeta": {
        "supports-color": {
          "optional": true
        }
      }
    },
    "node_modules/deep-is": {
      "version": "0.1.4",
      "resolved": "https://registry.npmjs.org/deep-is/-/deep-is-0.1.4.tgz",
      "integrity": "sha512-oIPzksmTg4/MriiaYGO+okXDT7ztn/w3Eptv/+gSIdMdKsJo0u4CfYNFJPy+4SKMuCqGw2wxnA+URMg3t8a/bQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/define-data-property": {
      "version": "1.1.4",
      "resolved": "https://registry.npmjs.org/define-data-property/-/define-data-property-1.1.4.tgz",
      "integrity": "sha512-rBMvIzlpA8v6E+SJZoo++HAYqsLrkg7MSfIinMPFhmkorw7X+dOXVJQs+QT69zGkzMyfDnIMN2Wid1+NbL3T+A==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "es-define-property": "^1.0.0",
        "es-errors": "^1.3.0",
        "gopd": "^1.0.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/define-properties": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/define-properties/-/define-properties-1.2.1.tgz",
      "integrity": "sha512-8QmQKqEASLd5nx0U1B1okLElbUuuttJ/AnYmRXbbbGDWh6uS208EjD4Xqq/I9wK7u0v6O08XhTWnt5XtEbR6Dg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "define-data-property": "^1.0.1",
        "has-property-descriptors": "^1.0.0",
        "object-keys": "^1.1.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/doctrine": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/doctrine/-/doctrine-3.0.0.tgz",
      "integrity": "sha512-yS+Q5i3hBf7GBkd4KG8a7eBNNWNGLTaEwwYWUijIYM7zrlYDM0BFXHjjPWlWZ1Rg7UaddZeIDmi9jF3HmqiQ2w==",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "esutils": "^2.0.2"
      },
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/dunder-proto": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/dunder-proto/-/dunder-proto-1.0.1.tgz",
      "integrity": "sha512-KIN/nDJBQRcXw0MLVhZE9iQHmG68qAVIBg9CqmUYjmQIhgij9U5MFvrqkUL5FbtyyzZuOeOt0zdeRe4UY7ct+A==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind-apply-helpers": "^1.0.1",
        "es-errors": "^1.3.0",
        "gopd": "^1.2.0"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/eastasianwidth": {
      "version": "0.2.0",
      "resolved": "https://registry.npmjs.org/eastasianwidth/-/eastasianwidth-0.2.0.tgz",
      "integrity": "sha512-I88TYZWc9XiYHRQ4/3c5rjjfgkjhLyW2luGIheGERbNQ6OY7yTybanSpDXZa8y7VUP9YmDcYa+eyq4ca7iLqWA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/emoji-regex": {
      "version": "9.2.2",
      "resolved": "https://registry.npmjs.org/emoji-regex/-/emoji-regex-9.2.2.tgz",
      "integrity": "sha512-L18DaJsXSUk2+42pv8mLs5jJT2hqFkFE4j21wOmgbUqsZ2hL72NsUU785g9RXgo3s0ZNgVl42TiHp3ZtOv/Vyg==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/es-abstract": {
      "version": "1.24.2",
      "resolved": "https://registry.npmjs.org/es-abstract/-/es-abstract-1.24.2.tgz",
      "integrity": "sha512-2FpH9Q5i2RRwyEP1AylXe6nYLR5OhaJTZwmlcP0dL/+JCbgg7yyEo/sEK6HeGZRf3dFpWwThaRHVApXSkW3xeg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "array-buffer-byte-length": "^1.0.2",
        "arraybuffer.prototype.slice": "^1.0.4",
        "available-typed-arrays": "^1.0.7",
        "call-bind": "^1.0.8",
        "call-bound": "^1.0.4",
        "data-view-buffer": "^1.0.2",
        "data-view-byte-length": "^1.0.2",
        "data-view-byte-offset": "^1.0.1",
        "es-define-property": "^1.0.1",
        "es-errors": "^1.3.0",
        "es-object-atoms": "^1.1.1",
        "es-set-tostringtag": "^2.1.0",
        "es-to-primitive": "^1.3.0",
        "function.prototype.name": "^1.1.8",
        "get-intrinsic": "^1.3.0",
        "get-proto": "^1.0.1",
        "get-symbol-description": "^1.1.0",
        "globalthis": "^1.0.4",
        "gopd": "^1.2.0",
        "has-property-descriptors": "^1.0.2",
        "has-proto": "^1.2.0",
        "has-symbols": "^1.1.0",
        "hasown": "^2.0.2",
        "internal-slot": "^1.1.0",
        "is-array-buffer": "^3.0.5",
        "is-callable": "^1.2.7",
        "is-data-view": "^1.0.2",
        "is-negative-zero": "^2.0.3",
        "is-regex": "^1.2.1",
        "is-set": "^2.0.3",
        "is-shared-array-buffer": "^1.0.4",
        "is-string": "^1.1.1",
        "is-typed-array": "^1.1.15",
        "is-weakref": "^1.1.1",
        "math-intrinsics": "^1.1.0",
        "object-inspect": "^1.13.4",
        "object-keys": "^1.1.1",
        "object.assign": "^4.1.7",
        "own-keys": "^1.0.1",
        "regexp.prototype.flags": "^1.5.4",
        "safe-array-concat": "^1.1.3",
        "safe-push-apply": "^1.0.0",
        "safe-regex-test": "^1.1.0",
        "set-proto": "^1.0.0",
        "stop-iteration-iterator": "^1.1.0",
        "string.prototype.trim": "^1.2.10",
        "string.prototype.trimend": "^1.0.9",
        "string.prototype.trimstart": "^1.0.8",
        "typed-array-buffer": "^1.0.3",
        "typed-array-byte-length": "^1.0.3",
        "typed-array-byte-offset": "^1.0.4",
        "typed-array-length": "^1.0.7",
        "unbox-primitive": "^1.1.0",
        "which-typed-array": "^1.1.19"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/es-define-property": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/es-define-property/-/es-define-property-1.0.1.tgz",
      "integrity": "sha512-e3nRfgfUZ4rNGL232gUgX06QNyyez04KdjFrF+LTRoOXmrOgFKDg4BCdsjW8EnT69eqdYGmRpJwiPVYNrCaW3g==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/es-errors": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/es-errors/-/es-errors-1.3.0.tgz",
      "integrity": "sha512-Zf5H2Kxt2xjTvbJvP2ZWLEICxA6j+hAmMzIlypy4xcBg1vKVnx89Wy0GbS+kf5cwCVFFzdCFh2XSCFNULS6csw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/es-iterator-helpers": {
      "version": "1.3.2",
      "resolved": "https://registry.npmjs.org/es-iterator-helpers/-/es-iterator-helpers-1.3.2.tgz",
      "integrity": "sha512-HVLACW1TppGYjJ8H6/jqH/pqOtKRw6wMlrB23xfExmFWxFquAIWCmwoLsOyN96K4a5KbmOf5At9ZUO3GZbetAw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.9",
        "call-bound": "^1.0.4",
        "define-properties": "^1.2.1",
        "es-abstract": "^1.24.2",
        "es-errors": "^1.3.0",
        "es-set-tostringtag": "^2.1.0",
        "function-bind": "^1.1.2",
        "get-intrinsic": "^1.3.0",
        "globalthis": "^1.0.4",
        "gopd": "^1.2.0",
        "has-property-descriptors": "^1.0.2",
        "has-proto": "^1.2.0",
        "has-symbols": "^1.1.0",
        "internal-slot": "^1.1.0",
        "iterator.prototype": "^1.1.5",
        "math-intrinsics": "^1.1.0"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/es-object-atoms": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/es-object-atoms/-/es-object-atoms-1.1.1.tgz",
      "integrity": "sha512-FGgH2h8zKNim9ljj7dankFPcICIK9Cp5bm+c2gQSYePhpaG5+esrLODihIorn+Pe6FGJzWhXQotPv73jTaldXA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/es-set-tostringtag": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/es-set-tostringtag/-/es-set-tostringtag-2.1.0.tgz",
      "integrity": "sha512-j6vWzfrGVfyXxge+O0x5sh6cvxAog0a/4Rdd2K36zCMV5eJ+/+tOAngRO8cODMNWbVRdVlmGZQL2YS3yR8bIUA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0",
        "get-intrinsic": "^1.2.6",
        "has-tostringtag": "^1.0.2",
        "hasown": "^2.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/es-shim-unscopables": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/es-shim-unscopables/-/es-shim-unscopables-1.1.0.tgz",
      "integrity": "sha512-d9T8ucsEhh8Bi1woXCf+TIKDIROLG5WCkxg8geBCbvk22kzwC5G2OnXVMO6FUsvQlgUUXQ2itephWDLqDzbeCw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "hasown": "^2.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/es-to-primitive": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/es-to-primitive/-/es-to-primitive-1.3.0.tgz",
      "integrity": "sha512-w+5mJ3GuFL+NjVtJlvydShqE1eN3h3PbI7/5LAsYJP/2qtuMXjfL2LpHSRqo4b4eSF5K/DH1JXKUAHSB2UW50g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "is-callable": "^1.2.7",
        "is-date-object": "^1.0.5",
        "is-symbol": "^1.0.4"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/escape-string-regexp": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/escape-string-regexp/-/escape-string-regexp-4.0.0.tgz",
      "integrity": "sha512-TtpcNJ3XAzx3Gq8sWRzJaVajRs0uVxA2YAkdb1jm2YkPz4G6egUFAyA3n5vtEIZefPk5Wa4UXbKuS5fKkJWdgA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/eslint": {
      "version": "8.57.1",
      "resolved": "https://registry.npmjs.org/eslint/-/eslint-8.57.1.tgz",
      "integrity": "sha512-ypowyDxpVSYpkXr9WPv2PAZCtNip1Mv5KTW0SCurXv/9iOpcrH9PaqUElksqEB6pChqHGDRCFTyrZlGhnLNGiA==",
      "deprecated": "This version is no longer supported. Please see https://eslint.org/version-support for other options.",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@eslint-community/eslint-utils": "^4.2.0",
        "@eslint-community/regexpp": "^4.6.1",
        "@eslint/eslintrc": "^2.1.4",
        "@eslint/js": "8.57.1",
        "@humanwhocodes/config-array": "^0.13.0",
        "@humanwhocodes/module-importer": "^1.0.1",
        "@nodelib/fs.walk": "^1.2.8",
        "@ungap/structured-clone": "^1.2.0",
        "ajv": "^6.12.4",
        "chalk": "^4.0.0",
        "cross-spawn": "^7.0.2",
        "debug": "^4.3.2",
        "doctrine": "^3.0.0",
        "escape-string-regexp": "^4.0.0",
        "eslint-scope": "^7.2.2",
        "eslint-visitor-keys": "^3.4.3",
        "espree": "^9.6.1",
        "esquery": "^1.4.2",
        "esutils": "^2.0.2",
        "fast-deep-equal": "^3.1.3",
        "file-entry-cache": "^6.0.1",
        "find-up": "^5.0.0",
        "glob-parent": "^6.0.2",
        "globals": "^13.19.0",
        "graphemer": "^1.4.0",
        "ignore": "^5.2.0",
        "imurmurhash": "^0.1.4",
        "is-glob": "^4.0.0",
        "is-path-inside": "^3.0.3",
        "js-yaml": "^4.1.0",
        "json-stable-stringify-without-jsonify": "^1.0.1",
        "levn": "^0.4.1",
        "lodash.merge": "^4.6.2",
        "minimatch": "^3.1.2",
        "natural-compare": "^1.4.0",
        "optionator": "^0.9.3",
        "strip-ansi": "^6.0.1",
        "text-table": "^0.2.0"
      },
      "bin": {
        "eslint": "bin/eslint.js"
      },
      "engines": {
        "node": "^12.22.0 || ^14.17.0 || >=16.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      }
    },
    "node_modules/eslint-config-next": {
      "version": "14.2.35",
      "resolved": "https://registry.npmjs.org/eslint-config-next/-/eslint-config-next-14.2.35.tgz",
      "integrity": "sha512-BpLsv01UisH193WyT/1lpHqq5iJ/Orfz9h/NOOlAmTUq4GY349PextQ62K4XpnaM9supeiEn3TaOTeQO07gURg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@next/eslint-plugin-next": "14.2.35",
        "@rushstack/eslint-patch": "^1.3.3",
        "@typescript-eslint/eslint-plugin": "^5.4.2 || ^6.0.0 || ^7.0.0 || ^8.0.0",
        "@typescript-eslint/parser": "^5.4.2 || ^6.0.0 || ^7.0.0 || ^8.0.0",
        "eslint-import-resolver-node": "^0.3.6",
        "eslint-import-resolver-typescript": "^3.5.2",
        "eslint-plugin-import": "^2.28.1",
        "eslint-plugin-jsx-a11y": "^6.7.1",
        "eslint-plugin-react": "^7.33.2",
        "eslint-plugin-react-hooks": "^4.5.0 || 5.0.0-canary-7118f5dd7-20230705"
      },
      "peerDependencies": {
        "eslint": "^7.23.0 || ^8.0.0",
        "typescript": ">=3.3.1"
      },
      "peerDependenciesMeta": {
        "typescript": {
          "optional": true
        }
      }
    },
    "node_modules/eslint-import-resolver-node": {
      "version": "0.3.10",
      "resolved": "https://registry.npmjs.org/eslint-import-resolver-node/-/eslint-import-resolver-node-0.3.10.tgz",
      "integrity": "sha512-tRrKqFyCaKict5hOd244sL6EQFNycnMQnBe+j8uqGNXYzsImGbGUU4ibtoaBmv5FLwJwcFJNeg1GeVjQfbMrDQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "debug": "^3.2.7",
        "is-core-module": "^2.16.1",
        "resolve": "^2.0.0-next.6"
      }
    },
    "node_modules/eslint-import-resolver-node/node_modules/debug": {
      "version": "3.2.7",
      "resolved": "https://registry.npmjs.org/debug/-/debug-3.2.7.tgz",
      "integrity": "sha512-CFjzYYAi4ThfiQvizrFQevTTXHtnCqWfe7x1AhgEscTz6ZbLbfoLRLPugTQyBth6f8ZERVUSyWHFD/7Wu4t1XQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ms": "^2.1.1"
      }
    },
    "node_modules/eslint-import-resolver-typescript": {
      "version": "3.10.1",
      "resolved": "https://registry.npmjs.org/eslint-import-resolver-typescript/-/eslint-import-resolver-typescript-3.10.1.tgz",
      "integrity": "sha512-A1rHYb06zjMGAxdLSkN2fXPBwuSaQ0iO5M/hdyS0Ajj1VBaRp0sPD3dn1FhME3c/JluGFbwSxyCfqdSbtQLAHQ==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "@nolyfill/is-core-module": "1.0.39",
        "debug": "^4.4.0",
        "get-tsconfig": "^4.10.0",
        "is-bun-module": "^2.0.0",
        "stable-hash": "^0.0.5",
        "tinyglobby": "^0.2.13",
        "unrs-resolver": "^1.6.2"
      },
      "engines": {
        "node": "^14.18.0 || >=16.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint-import-resolver-typescript"
      },
      "peerDependencies": {
        "eslint": "*",
        "eslint-plugin-import": "*",
        "eslint-plugin-import-x": "*"
      },
      "peerDependenciesMeta": {
        "eslint-plugin-import": {
          "optional": true
        },
        "eslint-plugin-import-x": {
          "optional": true
        }
      }
    },
    "node_modules/eslint-module-utils": {
      "version": "2.12.1",
      "resolved": "https://registry.npmjs.org/eslint-module-utils/-/eslint-module-utils-2.12.1.tgz",
      "integrity": "sha512-L8jSWTze7K2mTg0vos/RuLRS5soomksDPoJLXIslC7c8Wmut3bx7CPpJijDcBZtxQ5lrbUdM+s0OlNbz0DCDNw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "debug": "^3.2.7"
      },
      "engines": {
        "node": ">=4"
      },
      "peerDependenciesMeta": {
        "eslint": {
          "optional": true
        }
      }
    },
    "node_modules/eslint-module-utils/node_modules/debug": {
      "version": "3.2.7",
      "resolved": "https://registry.npmjs.org/debug/-/debug-3.2.7.tgz",
      "integrity": "sha512-CFjzYYAi4ThfiQvizrFQevTTXHtnCqWfe7x1AhgEscTz6ZbLbfoLRLPugTQyBth6f8ZERVUSyWHFD/7Wu4t1XQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ms": "^2.1.1"
      }
    },
    "node_modules/eslint-plugin-import": {
      "version": "2.32.0",
      "resolved": "https://registry.npmjs.org/eslint-plugin-import/-/eslint-plugin-import-2.32.0.tgz",
      "integrity": "sha512-whOE1HFo/qJDyX4SnXzP4N6zOWn79WhnCUY/iDR0mPfQZO8wcYE4JClzI2oZrhBnnMUCBCHZhO6VQyoBU95mZA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@rtsao/scc": "^1.1.0",
        "array-includes": "^3.1.9",
        "array.prototype.findlastindex": "^1.2.6",
        "array.prototype.flat": "^1.3.3",
        "array.prototype.flatmap": "^1.3.3",
        "debug": "^3.2.7",
        "doctrine": "^2.1.0",
        "eslint-import-resolver-node": "^0.3.9",
        "eslint-module-utils": "^2.12.1",
        "hasown": "^2.0.2",
        "is-core-module": "^2.16.1",
        "is-glob": "^4.0.3",
        "minimatch": "^3.1.2",
        "object.fromentries": "^2.0.8",
        "object.groupby": "^1.0.3",
        "object.values": "^1.2.1",
        "semver": "^6.3.1",
        "string.prototype.trimend": "^1.0.9",
        "tsconfig-paths": "^3.15.0"
      },
      "engines": {
        "node": ">=4"
      },
      "peerDependencies": {
        "eslint": "^2 || ^3 || ^4 || ^5 || ^6 || ^7.2.0 || ^8 || ^9"
      }
    },
    "node_modules/eslint-plugin-import/node_modules/debug": {
      "version": "3.2.7",
      "resolved": "https://registry.npmjs.org/debug/-/debug-3.2.7.tgz",
      "integrity": "sha512-CFjzYYAi4ThfiQvizrFQevTTXHtnCqWfe7x1AhgEscTz6ZbLbfoLRLPugTQyBth6f8ZERVUSyWHFD/7Wu4t1XQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ms": "^2.1.1"
      }
    },
    "node_modules/eslint-plugin-import/node_modules/doctrine": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/doctrine/-/doctrine-2.1.0.tgz",
      "integrity": "sha512-35mSku4ZXK0vfCuHEDAwt55dg2jNajHZ1odvF+8SSr82EsZY4QmXfuWso8oEd8zRhVObSN18aM0CjSdoBX7zIw==",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "esutils": "^2.0.2"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/eslint-plugin-import/node_modules/semver": {
      "version": "6.3.1",
      "resolved": "https://registry.npmjs.org/semver/-/semver-6.3.1.tgz",
      "integrity": "sha512-BR7VvDCVHO+q2xBEWskxS6DJE1qRnb7DxzUrogb71CWoSficBxYsiAGd+Kl0mmq/MprG9yArRkyrQxTO6XjMzA==",
      "dev": true,
      "license": "ISC",
      "bin": {
        "semver": "bin/semver.js"
      }
    },
    "node_modules/eslint-plugin-jsx-a11y": {
      "version": "6.10.2",
      "resolved": "https://registry.npmjs.org/eslint-plugin-jsx-a11y/-/eslint-plugin-jsx-a11y-6.10.2.tgz",
      "integrity": "sha512-scB3nz4WmG75pV8+3eRUQOHZlNSUhFNq37xnpgRkCCELU3XMvXAxLk1eqWWyE22Ki4Q01Fnsw9BA3cJHDPgn2Q==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "aria-query": "^5.3.2",
        "array-includes": "^3.1.8",
        "array.prototype.flatmap": "^1.3.2",
        "ast-types-flow": "^0.0.8",
        "axe-core": "^4.10.0",
        "axobject-query": "^4.1.0",
        "damerau-levenshtein": "^1.0.8",
        "emoji-regex": "^9.2.2",
        "hasown": "^2.0.2",
        "jsx-ast-utils": "^3.3.5",
        "language-tags": "^1.0.9",
        "minimatch": "^3.1.2",
        "object.fromentries": "^2.0.8",
        "safe-regex-test": "^1.0.3",
        "string.prototype.includes": "^2.0.1"
      },
      "engines": {
        "node": ">=4.0"
      },
      "peerDependencies": {
        "eslint": "^3 || ^4 || ^5 || ^6 || ^7 || ^8 || ^9"
      }
    },
    "node_modules/eslint-plugin-react": {
      "version": "7.37.5",
      "resolved": "https://registry.npmjs.org/eslint-plugin-react/-/eslint-plugin-react-7.37.5.tgz",
      "integrity": "sha512-Qteup0SqU15kdocexFNAJMvCJEfa2xUKNV4CC1xsVMrIIqEy3SQ/rqyxCWNzfrd3/ldy6HMlD2e0JDVpDg2qIA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "array-includes": "^3.1.8",
        "array.prototype.findlast": "^1.2.5",
        "array.prototype.flatmap": "^1.3.3",
        "array.prototype.tosorted": "^1.1.4",
        "doctrine": "^2.1.0",
        "es-iterator-helpers": "^1.2.1",
        "estraverse": "^5.3.0",
        "hasown": "^2.0.2",
        "jsx-ast-utils": "^2.4.1 || ^3.0.0",
        "minimatch": "^3.1.2",
        "object.entries": "^1.1.9",
        "object.fromentries": "^2.0.8",
        "object.values": "^1.2.1",
        "prop-types": "^15.8.1",
        "resolve": "^2.0.0-next.5",
        "semver": "^6.3.1",
        "string.prototype.matchall": "^4.0.12",
        "string.prototype.repeat": "^1.0.0"
      },
      "engines": {
        "node": ">=4"
      },
      "peerDependencies": {
        "eslint": "^3 || ^4 || ^5 || ^6 || ^7 || ^8 || ^9.7"
      }
    },
    "node_modules/eslint-plugin-react-hooks": {
      "version": "5.0.0-canary-7118f5dd7-20230705",
      "resolved": "https://registry.npmjs.org/eslint-plugin-react-hooks/-/eslint-plugin-react-hooks-5.0.0-canary-7118f5dd7-20230705.tgz",
      "integrity": "sha512-AZYbMo/NW9chdL7vk6HQzQhT+PvTAEVqWk9ziruUoW2kAOcN5qNyelv70e0F1VNQAbvutOC9oc+xfWycI9FxDw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=10"
      },
      "peerDependencies": {
        "eslint": "^3.0.0 || ^4.0.0 || ^5.0.0 || ^6.0.0 || ^7.0.0 || ^8.0.0-0"
      }
    },
    "node_modules/eslint-plugin-react/node_modules/doctrine": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/doctrine/-/doctrine-2.1.0.tgz",
      "integrity": "sha512-35mSku4ZXK0vfCuHEDAwt55dg2jNajHZ1odvF+8SSr82EsZY4QmXfuWso8oEd8zRhVObSN18aM0CjSdoBX7zIw==",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "esutils": "^2.0.2"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/eslint-plugin-react/node_modules/semver": {
      "version": "6.3.1",
      "resolved": "https://registry.npmjs.org/semver/-/semver-6.3.1.tgz",
      "integrity": "sha512-BR7VvDCVHO+q2xBEWskxS6DJE1qRnb7DxzUrogb71CWoSficBxYsiAGd+Kl0mmq/MprG9yArRkyrQxTO6XjMzA==",
      "dev": true,
      "license": "ISC",
      "bin": {
        "semver": "bin/semver.js"
      }
    },
    "node_modules/eslint-scope": {
      "version": "7.2.2",
      "resolved": "https://registry.npmjs.org/eslint-scope/-/eslint-scope-7.2.2.tgz",
      "integrity": "sha512-dOt21O7lTMhDM+X9mB4GX+DZrZtCUJPL/wlcTqxyrx5IvO0IYtILdtrQGQp+8n5S0gwSVmOf9NQrjMOgfQZlIg==",
      "dev": true,
      "license": "BSD-2-Clause",
      "dependencies": {
        "esrecurse": "^4.3.0",
        "estraverse": "^5.2.0"
      },
      "engines": {
        "node": "^12.22.0 || ^14.17.0 || >=16.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      }
    },
    "node_modules/eslint-visitor-keys": {
      "version": "3.4.3",
      "resolved": "https://registry.npmjs.org/eslint-visitor-keys/-/eslint-visitor-keys-3.4.3.tgz",
      "integrity": "sha512-wpc+LXeiyiisxPlEkUzU6svyS1frIO3Mgxj1fdy7Pm8Ygzguax2N3Fa/D/ag1WqbOprdI+uY6wMUl8/a2G+iag==",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": "^12.22.0 || ^14.17.0 || >=16.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      }
    },
    "node_modules/espree": {
      "version": "9.6.1",
      "resolved": "https://registry.npmjs.org/espree/-/espree-9.6.1.tgz",
      "integrity": "sha512-oruZaFkjorTpF32kDSI5/75ViwGeZginGGy2NoOSg3Q9bnwlnmDm4HLnkl0RE3n+njDXR037aY1+x58Z/zFdwQ==",
      "dev": true,
      "license": "BSD-2-Clause",
      "dependencies": {
        "acorn": "^8.9.0",
        "acorn-jsx": "^5.3.2",
        "eslint-visitor-keys": "^3.4.1"
      },
      "engines": {
        "node": "^12.22.0 || ^14.17.0 || >=16.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      }
    },
    "node_modules/esquery": {
      "version": "1.7.0",
      "resolved": "https://registry.npmjs.org/esquery/-/esquery-1.7.0.tgz",
      "integrity": "sha512-Ap6G0WQwcU/LHsvLwON1fAQX9Zp0A2Y6Y/cJBl9r/JbW90Zyg4/zbG6zzKa2OTALELarYHmKu0GhpM5EO+7T0g==",
      "dev": true,
      "license": "BSD-3-Clause",
      "dependencies": {
        "estraverse": "^5.1.0"
      },
      "engines": {
        "node": ">=0.10"
      }
    },
    "node_modules/esrecurse": {
      "version": "4.3.0",
      "resolved": "https://registry.npmjs.org/esrecurse/-/esrecurse-4.3.0.tgz",
      "integrity": "sha512-KmfKL3b6G+RXvP8N1vr3Tq1kL/oCFgn2NYXEtqP8/L3pKapUA4G8cFVaoF3SU323CD4XypR/ffioHmkti6/Tag==",
      "dev": true,
      "license": "BSD-2-Clause",
      "dependencies": {
        "estraverse": "^5.2.0"
      },
      "engines": {
        "node": ">=4.0"
      }
    },
    "node_modules/estraverse": {
      "version": "5.3.0",
      "resolved": "https://registry.npmjs.org/estraverse/-/estraverse-5.3.0.tgz",
      "integrity": "sha512-MMdARuVEQziNTeJD8DgMqmhwR11BRQ/cBP+pLtYdSTnf3MIO8fFeiINEbX36ZdNlfU/7A9f3gUw49B3oQsvwBA==",
      "dev": true,
      "license": "BSD-2-Clause",
      "engines": {
        "node": ">=4.0"
      }
    },
    "node_modules/esutils": {
      "version": "2.0.3",
      "resolved": "https://registry.npmjs.org/esutils/-/esutils-2.0.3.tgz",
      "integrity": "sha512-kVscqXk4OCp68SZ0dkgEKVi6/8ij300KBWTJq32P/dYeWTSwK41WyTxalN1eRmA5Z9UU/LX9D7FWSmV9SAYx6g==",
      "dev": true,
      "license": "BSD-2-Clause",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/fast-deep-equal": {
      "version": "3.1.3",
      "resolved": "https://registry.npmjs.org/fast-deep-equal/-/fast-deep-equal-3.1.3.tgz",
      "integrity": "sha512-f3qQ9oQy9j2AhBe/H9VC91wLmKBCCU/gDOnKNAYG5hswO7BLKj09Hc5HYNz9cGI++xlpDCIgDaitVs03ATR84Q==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/fast-json-stable-stringify": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/fast-json-stable-stringify/-/fast-json-stable-stringify-2.1.0.tgz",
      "integrity": "sha512-lhd/wF+Lk98HZoTCtlVraHtfh5XYijIjalXck7saUtuanSDyLMxnHhSXEDJqHxD7msR8D0uCmqlkwjCV8xvwHw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/fast-levenshtein": {
      "version": "2.0.6",
      "resolved": "https://registry.npmjs.org/fast-levenshtein/-/fast-levenshtein-2.0.6.tgz",
      "integrity": "sha512-DCXu6Ifhqcks7TZKY3Hxp3y6qphY5SJZmrWMDrKcERSOXWQdMhU9Ig/PYrzyw/ul9jOIyh0N4M0tbC5hodg8dw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/fastq": {
      "version": "1.20.1",
      "resolved": "https://registry.npmjs.org/fastq/-/fastq-1.20.1.tgz",
      "integrity": "sha512-GGToxJ/w1x32s/D2EKND7kTil4n8OVk/9mycTc4VDza13lOvpUZTGX3mFSCtV9ksdGBVzvsyAVLM6mHFThxXxw==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "reusify": "^1.0.4"
      }
    },
    "node_modules/fdir": {
      "version": "6.5.0",
      "resolved": "https://registry.npmjs.org/fdir/-/fdir-6.5.0.tgz",
      "integrity": "sha512-tIbYtZbucOs0BRGqPJkshJUYdL+SDH7dVM8gjy+ERp3WAUjLEFJE+02kanyHtwjWOnwrKYBiwAmM0p4kLJAnXg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=12.0.0"
      },
      "peerDependencies": {
        "picomatch": "^3 || ^4"
      },
      "peerDependenciesMeta": {
        "picomatch": {
          "optional": true
        }
      }
    },
    "node_modules/file-entry-cache": {
      "version": "6.0.1",
      "resolved": "https://registry.npmjs.org/file-entry-cache/-/file-entry-cache-6.0.1.tgz",
      "integrity": "sha512-7Gps/XWymbLk2QLYK4NzpMOrYjMhdIxXuIvy2QBsLE6ljuodKvdkWs/cpyJJ3CVIVpH0Oi1Hvg1ovbMzLdFBBg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "flat-cache": "^3.0.4"
      },
      "engines": {
        "node": "^10.12.0 || >=12.0.0"
      }
    },
    "node_modules/find-up": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/find-up/-/find-up-5.0.0.tgz",
      "integrity": "sha512-78/PXT1wlLLDgTzDs7sjq9hzz0vXD+zn+7wypEe4fXQxCmdmqfGsEPQxmiCSQI3ajFV91bVSsvNtrJRiW6nGng==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "locate-path": "^6.0.0",
        "path-exists": "^4.0.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/flat-cache": {
      "version": "3.2.0",
      "resolved": "https://registry.npmjs.org/flat-cache/-/flat-cache-3.2.0.tgz",
      "integrity": "sha512-CYcENa+FtcUKLmhhqyctpclsq7QF38pKjZHsGNiSQF5r4FtoKDWabFDl3hzaEQMvT1LHEysw5twgLvpYYb4vbw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "flatted": "^3.2.9",
        "keyv": "^4.5.3",
        "rimraf": "^3.0.2"
      },
      "engines": {
        "node": "^10.12.0 || >=12.0.0"
      }
    },
    "node_modules/flatted": {
      "version": "3.4.2",
      "resolved": "https://registry.npmjs.org/flatted/-/flatted-3.4.2.tgz",
      "integrity": "sha512-PjDse7RzhcPkIJwy5t7KPWQSZ9cAbzQXcafsetQoD7sOJRQlGikNbx7yZp2OotDnJyrDcbyRq3Ttb18iYOqkxA==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/for-each": {
      "version": "0.3.5",
      "resolved": "https://registry.npmjs.org/for-each/-/for-each-0.3.5.tgz",
      "integrity": "sha512-dKx12eRCVIzqCxFGplyFKJMPvLEWgmNtUrpTiJIR5u97zEhRG8ySrtboPHZXx7daLxQVrl643cTzbab2tkQjxg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "is-callable": "^1.2.7"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/foreground-child": {
      "version": "3.3.1",
      "resolved": "https://registry.npmjs.org/foreground-child/-/foreground-child-3.3.1.tgz",
      "integrity": "sha512-gIXjKqtFuWEgzFRJA9WCQeSJLZDjgJUOMCMzxtvFq/37KojM1BFGufqsCy0r4qSQmYLsZYMeyRqzIWOMup03sw==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "cross-spawn": "^7.0.6",
        "signal-exit": "^4.0.1"
      },
      "engines": {
        "node": ">=14"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/fs.realpath": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/fs.realpath/-/fs.realpath-1.0.0.tgz",
      "integrity": "sha512-OO0pH2lK6a0hZnAdau5ItzHPI6pUlvI7jMVnxUQRtw4owF2wk8lOSabtGDCTP4Ggrg2MbGnWO9X8K1t4+fGMDw==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/function-bind": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/function-bind/-/function-bind-1.1.2.tgz",
      "integrity": "sha512-7XHNxH7qX9xG5mIwxkhumTox/MIRNcOgDrxWsMt2pAr23WHp6MrRlN7FBSFpCpr+oVO0F744iUgR82nJMfG2SA==",
      "dev": true,
      "license": "MIT",
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/function.prototype.name": {
      "version": "1.1.8",
      "resolved": "https://registry.npmjs.org/function.prototype.name/-/function.prototype.name-1.1.8.tgz",
      "integrity": "sha512-e5iwyodOHhbMr/yNrc7fDYG4qlbIvI5gajyzPnb5TCwyhjApznQh1BMFou9b30SevY43gCJKXycoCBjMbsuW0Q==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.8",
        "call-bound": "^1.0.3",
        "define-properties": "^1.2.1",
        "functions-have-names": "^1.2.3",
        "hasown": "^2.0.2",
        "is-callable": "^1.2.7"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/functions-have-names": {
      "version": "1.2.3",
      "resolved": "https://registry.npmjs.org/functions-have-names/-/functions-have-names-1.2.3.tgz",
      "integrity": "sha512-xckBUXyTIqT97tq2x2AMb+g163b5JFysYk0x4qxNFwbfQkmNZoiRHb6sPzI9/QV33WeuvVYBUIiD4NzNIyqaRQ==",
      "dev": true,
      "license": "MIT",
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/generator-function": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/generator-function/-/generator-function-2.0.1.tgz",
      "integrity": "sha512-SFdFmIJi+ybC0vjlHN0ZGVGHc3lgE0DxPAT0djjVg+kjOnSqclqmj0KQ7ykTOLP6YxoqOvuAODGdcHJn+43q3g==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/get-intrinsic": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/get-intrinsic/-/get-intrinsic-1.3.0.tgz",
      "integrity": "sha512-9fSjSaos/fRIVIp+xSJlE6lfwhES7LNtKaCBIamHsjr2na1BiABJPo0mOjjz8GJDURarmCPGqaiVg5mfjb98CQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind-apply-helpers": "^1.0.2",
        "es-define-property": "^1.0.1",
        "es-errors": "^1.3.0",
        "es-object-atoms": "^1.1.1",
        "function-bind": "^1.1.2",
        "get-proto": "^1.0.1",
        "gopd": "^1.2.0",
        "has-symbols": "^1.1.0",
        "hasown": "^2.0.2",
        "math-intrinsics": "^1.1.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/get-proto": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/get-proto/-/get-proto-1.0.1.tgz",
      "integrity": "sha512-sTSfBjoXBp89JvIKIefqw7U2CCebsc74kiY6awiGogKtoSGbgjYE/G/+l9sF3MWFPNc9IcoOC4ODfKHfxFmp0g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "dunder-proto": "^1.0.1",
        "es-object-atoms": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/get-symbol-description": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/get-symbol-description/-/get-symbol-description-1.1.0.tgz",
      "integrity": "sha512-w9UMqWwJxHNOvoNzSJ2oPF5wvYcvP7jUvYzhp67yEhTi17ZDBBC1z9pTdGuzjD+EFIqLSYRweZjqfiPzQ06Ebg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.3",
        "es-errors": "^1.3.0",
        "get-intrinsic": "^1.2.6"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/get-tsconfig": {
      "version": "4.14.0",
      "resolved": "https://registry.npmjs.org/get-tsconfig/-/get-tsconfig-4.14.0.tgz",
      "integrity": "sha512-yTb+8DXzDREzgvYmh6s9vHsSVCHeC0G3PI5bEXNBHtmshPnO+S5O7qgLEOn0I5QvMy6kpZN8K1NKGyilLb93wA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "resolve-pkg-maps": "^1.0.0"
      },
      "funding": {
        "url": "https://github.com/privatenumber/get-tsconfig?sponsor=1"
      }
    },
    "node_modules/glob": {
      "version": "10.3.10",
      "resolved": "https://registry.npmjs.org/glob/-/glob-10.3.10.tgz",
      "integrity": "sha512-fa46+tv1Ak0UPK1TOy/pZrIybNNt4HCv7SDzwyfiOZkvZLEbjsZkJBPtDHVshZjbecAoAGSC20MjLDG/qr679g==",
      "deprecated": "Old versions of glob are not supported, and contain widely publicized security vulnerabilities, which have been fixed in the current version. Please update. Support for old versions may be purchased (at exorbitant rates) by contacting i@izs.me",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "foreground-child": "^3.1.0",
        "jackspeak": "^2.3.5",
        "minimatch": "^9.0.1",
        "minipass": "^5.0.0 || ^6.0.2 || ^7.0.0",
        "path-scurry": "^1.10.1"
      },
      "bin": {
        "glob": "dist/esm/bin.mjs"
      },
      "engines": {
        "node": ">=16 || 14 >=14.17"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/glob-parent": {
      "version": "6.0.2",
      "resolved": "https://registry.npmjs.org/glob-parent/-/glob-parent-6.0.2.tgz",
      "integrity": "sha512-XxwI8EOhVQgWp6iDL+3b0r86f4d6AX6zSU55HfB4ydCEuXLXc5FcYeOu+nnGftS4TEju/11rt4KJPTMgbfmv4A==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "is-glob": "^4.0.3"
      },
      "engines": {
        "node": ">=10.13.0"
      }
    },
    "node_modules/glob/node_modules/brace-expansion": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-2.1.0.tgz",
      "integrity": "sha512-TN1kCZAgdgweJhWWpgKYrQaMNHcDULHkWwQIspdtjV4Y5aurRdZpjAqn6yX3FPqTA9ngHCc4hJxMAMgGfve85w==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "balanced-match": "^1.0.0"
      }
    },
    "node_modules/glob/node_modules/minimatch": {
      "version": "9.0.9",
      "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-9.0.9.tgz",
      "integrity": "sha512-OBwBN9AL4dqmETlpS2zasx+vTeWclWzkblfZk7KTA5j3jeOONz/tRCnZomUyvNg83wL5Zv9Ss6HMJXAgL8R2Yg==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "brace-expansion": "^2.0.2"
      },
      "engines": {
        "node": ">=16 || 14 >=14.17"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/globals": {
      "version": "13.24.0",
      "resolved": "https://registry.npmjs.org/globals/-/globals-13.24.0.tgz",
      "integrity": "sha512-AhO5QUcj8llrbG09iWhPU2B204J1xnPeL8kQmVorSsy+Sjj1sk8gIyh6cUocGmH4L0UuhAJy+hJMRA4mgA4mFQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "type-fest": "^0.20.2"
      },
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/globalthis": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/globalthis/-/globalthis-1.0.4.tgz",
      "integrity": "sha512-DpLKbNU4WylpxJykQujfCcwYWiV/Jhm50Goo0wrVILAv5jOr9d+H+UR3PhSCD2rCCEIg0uc+G+muBTwD54JhDQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "define-properties": "^1.2.1",
        "gopd": "^1.0.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/gopd": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/gopd/-/gopd-1.2.0.tgz",
      "integrity": "sha512-ZUKRh6/kUFoAiTAtTYPZJ3hw9wNxx+BIBOijnlG9PnrJsCcSjs1wyyD6vJpaYtgnzDrKYRSqf3OO6Rfa93xsRg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/graceful-fs": {
      "version": "4.2.11",
      "resolved": "https://registry.npmjs.org/graceful-fs/-/graceful-fs-4.2.11.tgz",
      "integrity": "sha512-RbJ5/jmFcNNCcDV5o9eTnBLJ/HszWV0P73bc+Ff4nS/rJj+YaS6IGyiOL0VoBYX+l1Wrl3k63h/KrH+nhJ0XvQ==",
      "license": "ISC"
    },
    "node_modules/graphemer": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/graphemer/-/graphemer-1.4.0.tgz",
      "integrity": "sha512-EtKwoO6kxCL9WO5xipiHTZlSzBm7WLT627TqC/uVRd0HKmq8NXyebnNYxDoBi7wt8eTWrUrKXCOVaFq9x1kgag==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/has-bigints": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/has-bigints/-/has-bigints-1.1.0.tgz",
      "integrity": "sha512-R3pbpkcIqv2Pm3dUwgjclDRVmWpTJW2DcMzcIhEXEx1oh/CEMObMm3KLmRJOdvhM7o4uQBnwr8pzRK2sJWIqfg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/has-flag": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
      "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/has-property-descriptors": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/has-property-descriptors/-/has-property-descriptors-1.0.2.tgz",
      "integrity": "sha512-55JNKuIW+vq4Ke1BjOTjM2YctQIvCT7GFzHwmfZPGo5wnrgkid0YQtnAleFSqumZm4az3n2BS+erby5ipJdgrg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "es-define-property": "^1.0.0"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/has-proto": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/has-proto/-/has-proto-1.2.0.tgz",
      "integrity": "sha512-KIL7eQPfHQRC8+XluaIw7BHUwwqL19bQn4hzNgdr+1wXoU0KKj6rufu47lhY7KbJR2C6T6+PfyN0Ea7wkSS+qQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "dunder-proto": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/has-symbols": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/has-symbols/-/has-symbols-1.1.0.tgz",
      "integrity": "sha512-1cDNdwJ2Jaohmb3sg4OmKaMBwuC48sYni5HUw2DvsC8LjGTLK9h+eb1X6RyuOHe4hT0ULCW68iomhjUoKUqlPQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/has-tostringtag": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/has-tostringtag/-/has-tostringtag-1.0.2.tgz",
      "integrity": "sha512-NqADB8VjPFLM2V0VvHUewwwsw0ZWBaIdgo+ieHtK3hasLz4qeCRjYcqfB6AQrBggRKppKF8L52/VqdVsO47Dlw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "has-symbols": "^1.0.3"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/hasown": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/hasown/-/hasown-2.0.2.tgz",
      "integrity": "sha512-0hJU9SCPvmMzIBdZFqNPXWa6dqh7WdH0cII9y+CyS8rG3nL48Bclra9HmKhVVUHyPWNH5Y7xDwAB7bfgSjkUMQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "function-bind": "^1.1.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/ignore": {
      "version": "5.3.2",
      "resolved": "https://registry.npmjs.org/ignore/-/ignore-5.3.2.tgz",
      "integrity": "sha512-hsBTNUqQTDwkWtcdYI2i06Y/nUBEsNEDJKjWdigLvegy8kDuJAS8uRlpkkcQpyEXL0Z/pjDy5HBmMjRCJ2gq+g==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 4"
      }
    },
    "node_modules/import-fresh": {
      "version": "3.3.1",
      "resolved": "https://registry.npmjs.org/import-fresh/-/import-fresh-3.3.1.tgz",
      "integrity": "sha512-TR3KfrTZTYLPB6jUjfx6MF9WcWrHL9su5TObK4ZkYgBdWKPOFoSoQIdEuTuR82pmtxH2spWG9h6etwfr1pLBqQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "parent-module": "^1.0.0",
        "resolve-from": "^4.0.0"
      },
      "engines": {
        "node": ">=6"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/imurmurhash": {
      "version": "0.1.4",
      "resolved": "https://registry.npmjs.org/imurmurhash/-/imurmurhash-0.1.4.tgz",
      "integrity": "sha512-JmXMZ6wuvDmLiHEml9ykzqO6lwFbof0GG4IkcGaENdCRDDmMVnny7s5HsIgHCbaq0w2MyPhDqkhTUgS2LU2PHA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.8.19"
      }
    },
    "node_modules/inflight": {
      "version": "1.0.6",
      "resolved": "https://registry.npmjs.org/inflight/-/inflight-1.0.6.tgz",
      "integrity": "sha512-k92I/b08q4wvFscXCLvqfsHCrjrF7yiXsQuIVvVE7N82W3+aqpzuUdBbfhWcy/FZR3/4IgflMgKLOsvPDrGCJA==",
      "deprecated": "This module is not supported, and leaks memory. Do not use it. Check out lru-cache if you want a good and tested way to coalesce async requests by a key value, which is much more comprehensive and powerful.",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "once": "^1.3.0",
        "wrappy": "1"
      }
    },
    "node_modules/inherits": {
      "version": "2.0.4",
      "resolved": "https://registry.npmjs.org/inherits/-/inherits-2.0.4.tgz",
      "integrity": "sha512-k/vGaX4/Yla3WzyMCvTQOXYeIHvqOKtnqBduzTHpzpQZzAskKMhZ2K+EnBiSM9zGSoIFeMpXKxa4dYeZIQqewQ==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/internal-slot": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/internal-slot/-/internal-slot-1.1.0.tgz",
      "integrity": "sha512-4gd7VpWNQNB4UKKCFFVcp1AVv+FMOgs9NKzjHKusc8jTMhd5eL1NqQqOpE0KzMds804/yHlglp3uxgluOqAPLw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0",
        "hasown": "^2.0.2",
        "side-channel": "^1.1.0"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/is-array-buffer": {
      "version": "3.0.5",
      "resolved": "https://registry.npmjs.org/is-array-buffer/-/is-array-buffer-3.0.5.tgz",
      "integrity": "sha512-DDfANUiiG2wC1qawP66qlTugJeL5HyzMpfr8lLK+jMQirGzNod0B12cFB/9q838Ru27sBwfw78/rdoU7RERz6A==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.8",
        "call-bound": "^1.0.3",
        "get-intrinsic": "^1.2.6"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-async-function": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/is-async-function/-/is-async-function-2.1.1.tgz",
      "integrity": "sha512-9dgM/cZBnNvjzaMYHVoxxfPj2QXt22Ev7SuuPrs+xav0ukGB0S6d4ydZdEiM48kLx5kDV+QBPrpVnFyefL8kkQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "async-function": "^1.0.0",
        "call-bound": "^1.0.3",
        "get-proto": "^1.0.1",
        "has-tostringtag": "^1.0.2",
        "safe-regex-test": "^1.1.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-bigint": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/is-bigint/-/is-bigint-1.1.0.tgz",
      "integrity": "sha512-n4ZT37wG78iz03xPRKJrHTdZbe3IicyucEtdRsV5yglwc3GyUfbAfpSeD0FJ41NbUNSt5wbhqfp1fS+BgnvDFQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "has-bigints": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-boolean-object": {
      "version": "1.2.2",
      "resolved": "https://registry.npmjs.org/is-boolean-object/-/is-boolean-object-1.2.2.tgz",
      "integrity": "sha512-wa56o2/ElJMYqjCjGkXri7it5FbebW5usLw/nPmCMs5DeZ7eziSYZhSmPRn0txqeW4LnAmQQU7FgqLpsEFKM4A==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.3",
        "has-tostringtag": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-bun-module": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/is-bun-module/-/is-bun-module-2.0.0.tgz",
      "integrity": "sha512-gNCGbnnnnFAUGKeZ9PdbyeGYJqewpmc2aKHUEMO5nQPWU9lOmv7jcmQIv+qHD8fXW6W7qfuCwX4rY9LNRjXrkQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "semver": "^7.7.1"
      }
    },
    "node_modules/is-callable": {
      "version": "1.2.7",
      "resolved": "https://registry.npmjs.org/is-callable/-/is-callable-1.2.7.tgz",
      "integrity": "sha512-1BC0BVFhS/p0qtw6enp8e+8OD0UrK0oFLztSjNzhcKA3WDuJxxAPXzPuPtKkjEY9UUoEWlX/8fgKeu2S8i9JTA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-core-module": {
      "version": "2.16.1",
      "resolved": "https://registry.npmjs.org/is-core-module/-/is-core-module-2.16.1.tgz",
      "integrity": "sha512-UfoeMA6fIJ8wTYFEUjelnaGI67v6+N7qXJEvQuIGa99l4xsCruSYOVSQ0uPANn4dAzm8lkYPaKLrrijLq7x23w==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "hasown": "^2.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-data-view": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/is-data-view/-/is-data-view-1.0.2.tgz",
      "integrity": "sha512-RKtWF8pGmS87i2D6gqQu/l7EYRlVdfzemCJN/P3UOs//x1QE7mfhvzHIApBTRf7axvT6DMGwSwBXYCT0nfB9xw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.2",
        "get-intrinsic": "^1.2.6",
        "is-typed-array": "^1.1.13"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-date-object": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/is-date-object/-/is-date-object-1.1.0.tgz",
      "integrity": "sha512-PwwhEakHVKTdRNVOw+/Gyh0+MzlCl4R6qKvkhuvLtPMggI1WAHt9sOwZxQLSGpUaDnrdyDsomoRgNnCfKNSXXg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.2",
        "has-tostringtag": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-extglob": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/is-extglob/-/is-extglob-2.1.1.tgz",
      "integrity": "sha512-SbKbANkN603Vi4jEZv49LeVJMn4yGwsbzZworEoyEiutsN3nJYdbO36zfhGJ6QEDpOZIFkDtnq5JRxmvl3jsoQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/is-finalizationregistry": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/is-finalizationregistry/-/is-finalizationregistry-1.1.1.tgz",
      "integrity": "sha512-1pC6N8qWJbWoPtEjgcL2xyhQOP491EQjeUo3qTKcmV8YSDDJrOepfG8pcC7h/QgnQHYSv0mJ3Z/ZWxmatVrysg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.3"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-fullwidth-code-point": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-3.0.0.tgz",
      "integrity": "sha512-zymm5+u+sCsSWyD9qNaejV3DFvhCKclKdizYaJUuHA83RLjb7nSuGnddCHGv0hk+KY7BMAlsWeK4Ueg6EV6XQg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/is-generator-function": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/is-generator-function/-/is-generator-function-1.1.2.tgz",
      "integrity": "sha512-upqt1SkGkODW9tsGNG5mtXTXtECizwtS2kA161M+gJPc1xdb/Ax629af6YrTwcOeQHbewrPNlE5Dx7kzvXTizA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.4",
        "generator-function": "^2.0.0",
        "get-proto": "^1.0.1",
        "has-tostringtag": "^1.0.2",
        "safe-regex-test": "^1.1.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-glob": {
      "version": "4.0.3",
      "resolved": "https://registry.npmjs.org/is-glob/-/is-glob-4.0.3.tgz",
      "integrity": "sha512-xelSayHH36ZgE7ZWhli7pW34hNbNl8Ojv5KVmkJD4hBdD3th8Tfk9vYasLM+mXWOZhFkgZfxhLSnrwRr4elSSg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "is-extglob": "^2.1.1"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/is-map": {
      "version": "2.0.3",
      "resolved": "https://registry.npmjs.org/is-map/-/is-map-2.0.3.tgz",
      "integrity": "sha512-1Qed0/Hr2m+YqxnM09CjA2d/i6YZNfF6R2oRAOj36eUdS6qIV/huPJNSEpKbupewFs+ZsJlxsjjPbc0/afW6Lw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-negative-zero": {
      "version": "2.0.3",
      "resolved": "https://registry.npmjs.org/is-negative-zero/-/is-negative-zero-2.0.3.tgz",
      "integrity": "sha512-5KoIu2Ngpyek75jXodFvnafB6DJgr3u8uuK0LEZJjrU19DrMD3EVERaR8sjz8CCGgpZvxPl9SuE1GMVPFHx1mw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-number-object": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/is-number-object/-/is-number-object-1.1.1.tgz",
      "integrity": "sha512-lZhclumE1G6VYD8VHe35wFaIif+CTy5SJIi5+3y4psDgWu4wPDoBhF8NxUOinEc7pHgiTsT6MaBb92rKhhD+Xw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.3",
        "has-tostringtag": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-path-inside": {
      "version": "3.0.3",
      "resolved": "https://registry.npmjs.org/is-path-inside/-/is-path-inside-3.0.3.tgz",
      "integrity": "sha512-Fd4gABb+ycGAmKou8eMftCupSir5lRxqf4aD/vd0cD2qc4HL07OjCeuHMr8Ro4CoMaeCKDB0/ECBOVWjTwUvPQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/is-regex": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/is-regex/-/is-regex-1.2.1.tgz",
      "integrity": "sha512-MjYsKHO5O7mCsmRGxWcLWheFqN9DJ/2TmngvjKXihe6efViPqc274+Fx/4fYj/r03+ESvBdTXK0V6tA3rgez1g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.2",
        "gopd": "^1.2.0",
        "has-tostringtag": "^1.0.2",
        "hasown": "^2.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-set": {
      "version": "2.0.3",
      "resolved": "https://registry.npmjs.org/is-set/-/is-set-2.0.3.tgz",
      "integrity": "sha512-iPAjerrse27/ygGLxw+EBR9agv9Y6uLeYVJMu+QNCoouJ1/1ri0mGrcWpfCqFZuzzx3WjtwxG098X+n4OuRkPg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-shared-array-buffer": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/is-shared-array-buffer/-/is-shared-array-buffer-1.0.4.tgz",
      "integrity": "sha512-ISWac8drv4ZGfwKl5slpHG9OwPNty4jOWPRIhBpxOoD+hqITiwuipOQ2bNthAzwA3B4fIjO4Nln74N0S9byq8A==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.3"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-string": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/is-string/-/is-string-1.1.1.tgz",
      "integrity": "sha512-BtEeSsoaQjlSPBemMQIrY1MY0uM6vnS1g5fmufYOtnxLGUZM2178PKbhsk7Ffv58IX+ZtcvoGwccYsh0PglkAA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.3",
        "has-tostringtag": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-symbol": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/is-symbol/-/is-symbol-1.1.1.tgz",
      "integrity": "sha512-9gGx6GTtCQM73BgmHQXfDmLtfjjTUDSyoxTCbp5WtoixAhfgsDirWIcVQ/IHpvI5Vgd5i/J5F7B9cN/WlVbC/w==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.2",
        "has-symbols": "^1.1.0",
        "safe-regex-test": "^1.1.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-typed-array": {
      "version": "1.1.15",
      "resolved": "https://registry.npmjs.org/is-typed-array/-/is-typed-array-1.1.15.tgz",
      "integrity": "sha512-p3EcsicXjit7SaskXHs1hA91QxgTw46Fv6EFKKGS5DRFLD8yKnohjF3hxoju94b/OcMZoQukzpPpBE9uLVKzgQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "which-typed-array": "^1.1.16"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-weakmap": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/is-weakmap/-/is-weakmap-2.0.2.tgz",
      "integrity": "sha512-K5pXYOm9wqY1RgjpL3YTkF39tni1XajUIkawTLUo9EZEVUFga5gSQJF8nNS7ZwJQ02y+1YCNYcMh+HIf1ZqE+w==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-weakref": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/is-weakref/-/is-weakref-1.1.1.tgz",
      "integrity": "sha512-6i9mGWSlqzNMEqpCp93KwRS1uUOodk2OJ6b+sq7ZPDSy2WuI5NFIxp/254TytR8ftefexkWn5xNiHUNpPOfSew==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.3"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-weakset": {
      "version": "2.0.4",
      "resolved": "https://registry.npmjs.org/is-weakset/-/is-weakset-2.0.4.tgz",
      "integrity": "sha512-mfcwb6IzQyOKTs84CQMrOwW4gQcaTOAWJ0zzJCl2WSPDrWk/OzDaImWFH3djXhb24g4eudZfLRozAvPGw4d9hQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.3",
        "get-intrinsic": "^1.2.6"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/isarray": {
      "version": "2.0.5",
      "resolved": "https://registry.npmjs.org/isarray/-/isarray-2.0.5.tgz",
      "integrity": "sha512-xHjhDr3cNBK0BzdUJSPXZntQUx/mwMS5Rw4A7lPJ90XGAO6ISP/ePDNuo0vhqOZU+UD5JoodwCAAoZQd3FeAKw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/isexe": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/isexe/-/isexe-2.0.0.tgz",
      "integrity": "sha512-RHxMLp9lnKHGHRng9QFhRCMbYAcVpn69smSGcq3f36xjgVVWThj4qqLbTLlq7Ssj8B+fIQ1EuCEGI2lKsyQeIw==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/iterator.prototype": {
      "version": "1.1.5",
      "resolved": "https://registry.npmjs.org/iterator.prototype/-/iterator.prototype-1.1.5.tgz",
      "integrity": "sha512-H0dkQoCa3b2VEeKQBOxFph+JAbcrQdE7KC0UkqwpLmv2EC4P41QXP+rqo9wYodACiG5/WM5s9oDApTU8utwj9g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "define-data-property": "^1.1.4",
        "es-object-atoms": "^1.0.0",
        "get-intrinsic": "^1.2.6",
        "get-proto": "^1.0.0",
        "has-symbols": "^1.1.0",
        "set-function-name": "^2.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/jackspeak": {
      "version": "2.3.6",
      "resolved": "https://registry.npmjs.org/jackspeak/-/jackspeak-2.3.6.tgz",
      "integrity": "sha512-N3yCS/NegsOBokc8GAdM8UcmfsKiSS8cipheD/nivzr700H+nsMOxJjQnvwOcRYVuFkdH0wGUvW2WbXGmrZGbQ==",
      "dev": true,
      "license": "BlueOak-1.0.0",
      "dependencies": {
        "@isaacs/cliui": "^8.0.2"
      },
      "engines": {
        "node": ">=14"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      },
      "optionalDependencies": {
        "@pkgjs/parseargs": "^0.11.0"
      }
    },
    "node_modules/js-tokens": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/js-tokens/-/js-tokens-4.0.0.tgz",
      "integrity": "sha512-RdJUflcE3cUzKiMqQgsCu06FPu9UdIJO0beYbPhHN4k6apgJtifcoCtT9bcxOpYBtpD2kCM6Sbzg4CausW/PKQ==",
      "license": "MIT"
    },
    "node_modules/js-yaml": {
      "version": "4.1.1",
      "resolved": "https://registry.npmjs.org/js-yaml/-/js-yaml-4.1.1.tgz",
      "integrity": "sha512-qQKT4zQxXl8lLwBtHMWwaTcGfFOZviOJet3Oy/xmGk2gZH677CJM9EvtfdSkgWcATZhj/55JZ0rmy3myCT5lsA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "argparse": "^2.0.1"
      },
      "bin": {
        "js-yaml": "bin/js-yaml.js"
      }
    },
    "node_modules/json-buffer": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/json-buffer/-/json-buffer-3.0.1.tgz",
      "integrity": "sha512-4bV5BfR2mqfQTJm+V5tPPdf+ZpuhiIvTuAB5g8kcrXOZpTT/QwwVRWBywX1ozr6lEuPdbHxwaJlm9G6mI2sfSQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/json-schema-traverse": {
      "version": "0.4.1",
      "resolved": "https://registry.npmjs.org/json-schema-traverse/-/json-schema-traverse-0.4.1.tgz",
      "integrity": "sha512-xbbCH5dCYU5T8LcEhhuh7HJ88HXuW3qsI3Y0zOZFKfZEHcpWiHU/Jxzk629Brsab/mMiHQti9wMP+845RPe3Vg==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/json-stable-stringify-without-jsonify": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/json-stable-stringify-without-jsonify/-/json-stable-stringify-without-jsonify-1.0.1.tgz",
      "integrity": "sha512-Bdboy+l7tA3OGW6FjyFHWkP5LuByj1Tk33Ljyq0axyzdk9//JSi2u3fP1QSmd1KNwq6VOKYGlAu87CisVir6Pw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/json5": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/json5/-/json5-1.0.2.tgz",
      "integrity": "sha512-g1MWMLBiz8FKi1e4w0UyVL3w+iJceWAFBAaBnnGKOpNa5f8TLktkbre1+s6oICydWAm+HRUGTmI+//xv2hvXYA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "minimist": "^1.2.0"
      },
      "bin": {
        "json5": "lib/cli.js"
      }
    },
    "node_modules/jsx-ast-utils": {
      "version": "3.3.5",
      "resolved": "https://registry.npmjs.org/jsx-ast-utils/-/jsx-ast-utils-3.3.5.tgz",
      "integrity": "sha512-ZZow9HBI5O6EPgSJLUb8n2NKgmVWTwCvHGwFuJlMjvLFqlGG6pjirPhtdsseaLZjSibD8eegzmYpUZwoIlj2cQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "array-includes": "^3.1.6",
        "array.prototype.flat": "^1.3.1",
        "object.assign": "^4.1.4",
        "object.values": "^1.1.6"
      },
      "engines": {
        "node": ">=4.0"
      }
    },
    "node_modules/keen-slider": {
      "version": "6.8.6",
      "resolved": "https://registry.npmjs.org/keen-slider/-/keen-slider-6.8.6.tgz",
      "integrity": "sha512-dcEQ7GDBpCjUQA8XZeWh3oBBLLmyn8aoeIQFGL/NTVkoEOsmlnXqA4QykUm/SncolAZYGsEk/PfUhLZ7mwMM2w==",
      "license": "MIT"
    },
    "node_modules/keyv": {
      "version": "4.5.4",
      "resolved": "https://registry.npmjs.org/keyv/-/keyv-4.5.4.tgz",
      "integrity": "sha512-oxVHkHR/EJf2CNXnWxRLW6mg7JyCCUcG0DtEGmL2ctUo1PNTin1PUil+r/+4r5MpVgC/fn1kjsx7mjSujKqIpw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "json-buffer": "3.0.1"
      }
    },
    "node_modules/language-subtag-registry": {
      "version": "0.3.23",
      "resolved": "https://registry.npmjs.org/language-subtag-registry/-/language-subtag-registry-0.3.23.tgz",
      "integrity": "sha512-0K65Lea881pHotoGEa5gDlMxt3pctLi2RplBb7Ezh4rRdLEOtgi7n4EwK9lamnUCkKBqaeKRVebTq6BAxSkpXQ==",
      "dev": true,
      "license": "CC0-1.0"
    },
    "node_modules/language-tags": {
      "version": "1.0.9",
      "resolved": "https://registry.npmjs.org/language-tags/-/language-tags-1.0.9.tgz",
      "integrity": "sha512-MbjN408fEndfiQXbFQ1vnd+1NoLDsnQW41410oQBXiyXDMYH5z505juWa4KUE1LqxRC7DgOgZDbKLxHIwm27hA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "language-subtag-registry": "^0.3.20"
      },
      "engines": {
        "node": ">=0.10"
      }
    },
    "node_modules/levn": {
      "version": "0.4.1",
      "resolved": "https://registry.npmjs.org/levn/-/levn-0.4.1.tgz",
      "integrity": "sha512-+bT2uH4E5LGE7h/n3evcS/sQlJXCpIp6ym8OWJ5eV6+67Dsql/LaaT7qJBAt2rzfoa/5QBGBhxDix1dMt2kQKQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "prelude-ls": "^1.2.1",
        "type-check": "~0.4.0"
      },
      "engines": {
        "node": ">= 0.8.0"
      }
    },
    "node_modules/locate-path": {
      "version": "6.0.0",
      "resolved": "https://registry.npmjs.org/locate-path/-/locate-path-6.0.0.tgz",
      "integrity": "sha512-iPZK6eYjbxRu3uB4/WZ3EsEIMJFMqAoopl3R+zuq0UjcAm/MO6KCweDgPfP3elTztoKP3KtnVHxTn2NHBSDVUw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "p-locate": "^5.0.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/lodash.merge": {
      "version": "4.6.2",
      "resolved": "https://registry.npmjs.org/lodash.merge/-/lodash.merge-4.6.2.tgz",
      "integrity": "sha512-0KpjqXRVvrYyCsX1swR/XTK0va6VQkQM6MNo7PqW77ByjAhoARA8EfrP1N4+KlKj8YS0ZUCtRT/YUuhyYDujIQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/loose-envify": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/loose-envify/-/loose-envify-1.4.0.tgz",
      "integrity": "sha512-lyuxPGr/Wfhrlem2CL/UcnUc1zcqKAImBDzukY7Y5F/yQiNdko6+fRLevlw1HgMySw7f611UIY408EtxRSoK3Q==",
      "license": "MIT",
      "dependencies": {
        "js-tokens": "^3.0.0 || ^4.0.0"
      },
      "bin": {
        "loose-envify": "cli.js"
      }
    },
    "node_modules/lru-cache": {
      "version": "10.4.3",
      "resolved": "https://registry.npmjs.org/lru-cache/-/lru-cache-10.4.3.tgz",
      "integrity": "sha512-JNAzZcXrCt42VGLuYz0zfAzDfAvJWW6AfYlDBQyDV5DClI2m5sAmK+OIO7s59XfsRsWHp02jAJrRadPRGTt6SQ==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/math-intrinsics": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/math-intrinsics/-/math-intrinsics-1.1.0.tgz",
      "integrity": "sha512-/IXtbwEk5HTPyEwyKX6hGkYXxM9nbj64B+ilVJnC/R6B0pH5G4V3b0pVbL7DBj4tkhBAppbQUlf6F6Xl9LHu1g==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/minimatch": {
      "version": "3.1.5",
      "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-3.1.5.tgz",
      "integrity": "sha512-VgjWUsnnT6n+NUk6eZq77zeFdpW2LWDzP6zFGrCbHXiYNul5Dzqk2HHQ5uFH2DNW5Xbp8+jVzaeNt94ssEEl4w==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "brace-expansion": "^1.1.7"
      },
      "engines": {
        "node": "*"
      }
    },
    "node_modules/minimist": {
      "version": "1.2.8",
      "resolved": "https://registry.npmjs.org/minimist/-/minimist-1.2.8.tgz",
      "integrity": "sha512-2yyAR8qBkN3YuheJanUpWC5U3bb5osDywNB8RzDVlDwDHbocAJveqqj1u8+SVD7jkWT4yvsHCpWqqWqAxb0zCA==",
      "dev": true,
      "license": "MIT",
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/minipass": {
      "version": "7.1.3",
      "resolved": "https://registry.npmjs.org/minipass/-/minipass-7.1.3.tgz",
      "integrity": "sha512-tEBHqDnIoM/1rXME1zgka9g6Q2lcoCkxHLuc7ODJ5BxbP5d4c2Z5cGgtXAku59200Cx7diuHTOYfSBD8n6mm8A==",
      "dev": true,
      "license": "BlueOak-1.0.0",
      "engines": {
        "node": ">=16 || 14 >=14.17"
      }
    },
    "node_modules/ms": {
      "version": "2.1.3",
      "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.3.tgz",
      "integrity": "sha512-6FlzubTLZG3J2a/NVCAleEhjzq5oxgHyaCU9yYXvcLsvoVaHJq/s5xXI6/XXP6tz7R9xAOtHnSO/tXtF3WRTlA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/nanoid": {
      "version": "3.3.11",
      "resolved": "https://registry.npmjs.org/nanoid/-/nanoid-3.3.11.tgz",
      "integrity": "sha512-N8SpfPUnUp1bK+PMYW8qSWdl9U+wwNWI4QKxOYDy9JAro3WMX7p2OeVRF9v+347pnakNevPmiHhNmZ2HbFA76w==",
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "bin": {
        "nanoid": "bin/nanoid.cjs"
      },
      "engines": {
        "node": "^10 || ^12 || ^13.7 || ^14 || >=15.0.1"
      }
    },
    "node_modules/napi-postinstall": {
      "version": "0.3.4",
      "resolved": "https://registry.npmjs.org/napi-postinstall/-/napi-postinstall-0.3.4.tgz",
      "integrity": "sha512-PHI5f1O0EP5xJ9gQmFGMS6IZcrVvTjpXjz7Na41gTE7eE2hK11lg04CECCYEEjdc17EV4DO+fkGEtt7TpTaTiQ==",
      "dev": true,
      "license": "MIT",
      "bin": {
        "napi-postinstall": "lib/cli.js"
      },
      "engines": {
        "node": "^12.20.0 || ^14.18.0 || >=16.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/napi-postinstall"
      }
    },
    "node_modules/natural-compare": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/natural-compare/-/natural-compare-1.4.0.tgz",
      "integrity": "sha512-OWND8ei3VtNC9h7V60qff3SVobHr996CTwgxubgyQYEpg290h9J0buyECNNJexkFm5sOajh5G116RYA1c8ZMSw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/next": {
      "version": "14.2.35",
      "resolved": "https://registry.npmjs.org/next/-/next-14.2.35.tgz",
      "integrity": "sha512-KhYd2Hjt/O1/1aZVX3dCwGXM1QmOV4eNM2UTacK5gipDdPN/oHHK/4oVGy7X8GMfPMsUTUEmGlsy0EY1YGAkig==",
      "license": "MIT",
      "dependencies": {
        "@next/env": "14.2.35",
        "@swc/helpers": "0.5.5",
        "busboy": "1.6.0",
        "caniuse-lite": "^1.0.30001579",
        "graceful-fs": "^4.2.11",
        "postcss": "8.4.31",
        "styled-jsx": "5.1.1"
      },
      "bin": {
        "next": "dist/bin/next"
      },
      "engines": {
        "node": ">=18.17.0"
      },
      "optionalDependencies": {
        "@next/swc-darwin-arm64": "14.2.33",
        "@next/swc-darwin-x64": "14.2.33",
        "@next/swc-linux-arm64-gnu": "14.2.33",
        "@next/swc-linux-arm64-musl": "14.2.33",
        "@next/swc-linux-x64-gnu": "14.2.33",
        "@next/swc-linux-x64-musl": "14.2.33",
        "@next/swc-win32-arm64-msvc": "14.2.33",
        "@next/swc-win32-ia32-msvc": "14.2.33",
        "@next/swc-win32-x64-msvc": "14.2.33"
      },
      "peerDependencies": {
        "@opentelemetry/api": "^1.1.0",
        "@playwright/test": "^1.41.2",
        "react": "^18.2.0",
        "react-dom": "^18.2.0",
        "sass": "^1.3.0"
      },
      "peerDependenciesMeta": {
        "@opentelemetry/api": {
          "optional": true
        },
        "@playwright/test": {
          "optional": true
        },
        "sass": {
          "optional": true
        }
      }
    },
    "node_modules/node-exports-info": {
      "version": "1.6.0",
      "resolved": "https://registry.npmjs.org/node-exports-info/-/node-exports-info-1.6.0.tgz",
      "integrity": "sha512-pyFS63ptit/P5WqUkt+UUfe+4oevH+bFeIiPPdfb0pFeYEu/1ELnJu5l+5EcTKYL5M7zaAa7S8ddywgXypqKCw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "array.prototype.flatmap": "^1.3.3",
        "es-errors": "^1.3.0",
        "object.entries": "^1.1.9",
        "semver": "^6.3.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/node-exports-info/node_modules/semver": {
      "version": "6.3.1",
      "resolved": "https://registry.npmjs.org/semver/-/semver-6.3.1.tgz",
      "integrity": "sha512-BR7VvDCVHO+q2xBEWskxS6DJE1qRnb7DxzUrogb71CWoSficBxYsiAGd+Kl0mmq/MprG9yArRkyrQxTO6XjMzA==",
      "dev": true,
      "license": "ISC",
      "bin": {
        "semver": "bin/semver.js"
      }
    },
    "node_modules/object-assign": {
      "version": "4.1.1",
      "resolved": "https://registry.npmjs.org/object-assign/-/object-assign-4.1.1.tgz",
      "integrity": "sha512-rJgTQnkUnH1sFw8yT6VSU3zD3sWmu6sZhIseY8VX+GRu3P6F7Fu+JNDoXfklElbLJSnc3FUQHVe4cU5hj+BcUg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/object-inspect": {
      "version": "1.13.4",
      "resolved": "https://registry.npmjs.org/object-inspect/-/object-inspect-1.13.4.tgz",
      "integrity": "sha512-W67iLl4J2EXEGTbfeHCffrjDfitvLANg0UlX3wFUUSTx92KXRFegMHUVgSqE+wvhAbi4WqjGg9czysTV2Epbew==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/object-keys": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/object-keys/-/object-keys-1.1.1.tgz",
      "integrity": "sha512-NuAESUOUMrlIXOfHKzD6bpPu3tYt3xvjNdRIQ+FeT0lNb4K8WR70CaDxhuNguS2XG+GjkyMwOzsN5ZktImfhLA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/object.assign": {
      "version": "4.1.7",
      "resolved": "https://registry.npmjs.org/object.assign/-/object.assign-4.1.7.tgz",
      "integrity": "sha512-nK28WOo+QIjBkDduTINE4JkF/UJJKyf2EJxvJKfblDpyg0Q+pkOHNTL0Qwy6NP6FhE/EnzV73BxxqcJaXY9anw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.8",
        "call-bound": "^1.0.3",
        "define-properties": "^1.2.1",
        "es-object-atoms": "^1.0.0",
        "has-symbols": "^1.1.0",
        "object-keys": "^1.1.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/object.entries": {
      "version": "1.1.9",
      "resolved": "https://registry.npmjs.org/object.entries/-/object.entries-1.1.9.tgz",
      "integrity": "sha512-8u/hfXFRBD1O0hPUjioLhoWFHRmt6tKA4/vZPyckBr18l1KE9uHrFaFaUi8MDRTpi4uak2goyPTSNJLXX2k2Hw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.8",
        "call-bound": "^1.0.4",
        "define-properties": "^1.2.1",
        "es-object-atoms": "^1.1.1"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/object.fromentries": {
      "version": "2.0.8",
      "resolved": "https://registry.npmjs.org/object.fromentries/-/object.fromentries-2.0.8.tgz",
      "integrity": "sha512-k6E21FzySsSK5a21KRADBd/NGneRegFO5pLHfdQLpRDETUNJueLXs3WCzyQ3tFRDYgbq3KHGXfTbi2bs8WQ6rQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.7",
        "define-properties": "^1.2.1",
        "es-abstract": "^1.23.2",
        "es-object-atoms": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/object.groupby": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/object.groupby/-/object.groupby-1.0.3.tgz",
      "integrity": "sha512-+Lhy3TQTuzXI5hevh8sBGqbmurHbbIjAi0Z4S63nthVLmLxfbj4T54a4CfZrXIrt9iP4mVAPYMo/v99taj3wjQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.7",
        "define-properties": "^1.2.1",
        "es-abstract": "^1.23.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/object.values": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/object.values/-/object.values-1.2.1.tgz",
      "integrity": "sha512-gXah6aZrcUxjWg2zR2MwouP2eHlCBzdV4pygudehaKXSGW4v2AsRQUK+lwwXhii6KFZcunEnmSUoYp5CXibxtA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.8",
        "call-bound": "^1.0.3",
        "define-properties": "^1.2.1",
        "es-object-atoms": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/once": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/once/-/once-1.4.0.tgz",
      "integrity": "sha512-lNaJgI+2Q5URQBkccEKHTQOPaXdUxnZZElQTZY0MFUAuaEqe1E+Nyvgdz/aIyNi6Z9MzO5dv1H8n58/GELp3+w==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "wrappy": "1"
      }
    },
    "node_modules/optionator": {
      "version": "0.9.4",
      "resolved": "https://registry.npmjs.org/optionator/-/optionator-0.9.4.tgz",
      "integrity": "sha512-6IpQ7mKUxRcZNLIObR0hz7lxsapSSIYNZJwXPGeF0mTVqGKFIXj1DQcMoT22S3ROcLyY/rz0PWaWZ9ayWmad9g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "deep-is": "^0.1.3",
        "fast-levenshtein": "^2.0.6",
        "levn": "^0.4.1",
        "prelude-ls": "^1.2.1",
        "type-check": "^0.4.0",
        "word-wrap": "^1.2.5"
      },
      "engines": {
        "node": ">= 0.8.0"
      }
    },
    "node_modules/own-keys": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/own-keys/-/own-keys-1.0.1.tgz",
      "integrity": "sha512-qFOyK5PjiWZd+QQIh+1jhdb9LpxTF0qs7Pm8o5QHYZ0M3vKqSqzsZaEB6oWlxZ+q2sJBMI/Ktgd2N5ZwQoRHfg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "get-intrinsic": "^1.2.6",
        "object-keys": "^1.1.1",
        "safe-push-apply": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/p-limit": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/p-limit/-/p-limit-3.1.0.tgz",
      "integrity": "sha512-TYOanM3wGwNGsZN2cVTYPArw454xnXj5qmWF1bEoAc4+cU/ol7GVh7odevjp1FNHduHc3KZMcFduxU5Xc6uJRQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "yocto-queue": "^0.1.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/p-locate": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/p-locate/-/p-locate-5.0.0.tgz",
      "integrity": "sha512-LaNjtRWUBY++zB5nE/NwcaoMylSPk+S+ZHNB1TzdbMJMny6dynpAGt7X/tl/QYq3TIeE6nxHppbo2LGymrG5Pw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "p-limit": "^3.0.2"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/parent-module": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/parent-module/-/parent-module-1.0.1.tgz",
      "integrity": "sha512-GQ2EWRpQV8/o+Aw8YqtfZZPfNRWZYkbidE9k5rpl/hC3vtHHBfGm2Ifi6qWV+coDGkrUKZAxE3Lot5kcsRlh+g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "callsites": "^3.0.0"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/path-exists": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/path-exists/-/path-exists-4.0.0.tgz",
      "integrity": "sha512-ak9Qy5Q7jYb2Wwcey5Fpvg2KoAc/ZIhLSLOSBmRmygPsGwkVVt0fZa0qrtMz+m6tJTAHfZQ8FnmB4MG4LWy7/w==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/path-is-absolute": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/path-is-absolute/-/path-is-absolute-1.0.1.tgz",
      "integrity": "sha512-AVbw3UJ2e9bq64vSaS9Am0fje1Pa8pbGqTTsmXfaIiMpnr5DlDhfJOuLj9Sf95ZPVDAUerDfEk88MPmPe7UCQg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/path-key": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/path-key/-/path-key-3.1.1.tgz",
      "integrity": "sha512-ojmeN0qd+y0jszEtoY48r0Peq5dwMEkIlCOu6Q5f41lfkswXuKtYrhgoTpLnyIcHm24Uhqx+5Tqm2InSwLhE6Q==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/path-parse": {
      "version": "1.0.7",
      "resolved": "https://registry.npmjs.org/path-parse/-/path-parse-1.0.7.tgz",
      "integrity": "sha512-LDJzPVEEEPR+y48z93A0Ed0yXb8pAByGWo/k5YYdYgpY2/2EsOsksJrq7lOHxryrVOn1ejG6oAp8ahvOIQD8sw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/path-scurry": {
      "version": "1.11.1",
      "resolved": "https://registry.npmjs.org/path-scurry/-/path-scurry-1.11.1.tgz",
      "integrity": "sha512-Xa4Nw17FS9ApQFJ9umLiJS4orGjm7ZzwUrwamcGQuHSzDyth9boKDaycYdDcZDuqYATXw4HFXgaqWTctW/v1HA==",
      "dev": true,
      "license": "BlueOak-1.0.0",
      "dependencies": {
        "lru-cache": "^10.2.0",
        "minipass": "^5.0.0 || ^6.0.2 || ^7.0.0"
      },
      "engines": {
        "node": ">=16 || 14 >=14.18"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/picocolors": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/picocolors/-/picocolors-1.1.1.tgz",
      "integrity": "sha512-xceH2snhtb5M9liqDsmEw56le376mTZkEX/jEb/RxNFyegNul7eNslCXP9FDj/Lcu0X8KEyMceP2ntpaHrDEVA==",
      "license": "ISC"
    },
    "node_modules/picomatch": {
      "version": "4.0.4",
      "resolved": "https://registry.npmjs.org/picomatch/-/picomatch-4.0.4.tgz",
      "integrity": "sha512-QP88BAKvMam/3NxH6vj2o21R6MjxZUAd6nlwAS/pnGvN9IVLocLHxGYIzFhg6fUQ+5th6P4dv4eW9jX3DSIj7A==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/sponsors/jonschlinkert"
      }
    },
    "node_modules/possible-typed-array-names": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/possible-typed-array-names/-/possible-typed-array-names-1.1.0.tgz",
      "integrity": "sha512-/+5VFTchJDoVj3bhoqi6UeymcD00DAwb1nJwamzPvHEszJ4FpF6SNNbUbOS8yI56qHzdV8eK0qEfOSiodkTdxg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/postcss": {
      "version": "8.4.31",
      "resolved": "https://registry.npmjs.org/postcss/-/postcss-8.4.31.tgz",
      "integrity": "sha512-PS08Iboia9mts/2ygV3eLpY5ghnUcfLV/EXTOW1E2qYxJKGGBUtNjN76FYHnMs36RmARn41bC0AZmn+rR0OVpQ==",
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/postcss/"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/postcss"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "nanoid": "^3.3.6",
        "picocolors": "^1.0.0",
        "source-map-js": "^1.0.2"
      },
      "engines": {
        "node": "^10 || ^12 || >=14"
      }
    },
    "node_modules/prelude-ls": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/prelude-ls/-/prelude-ls-1.2.1.tgz",
      "integrity": "sha512-vkcDPrRZo1QZLbn5RLGPpg/WmIQ65qoWWhcGKf/b5eplkkarX0m9z8ppCat4mlOqUsWpyNuYgO3VRyrYHSzX5g==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.8.0"
      }
    },
    "node_modules/prop-types": {
      "version": "15.8.1",
      "resolved": "https://registry.npmjs.org/prop-types/-/prop-types-15.8.1.tgz",
      "integrity": "sha512-oj87CgZICdulUohogVAR7AjlC0327U4el4L6eAvOqCeudMDVU0NThNaV+b9Df4dXgSP1gXMTnPdhfe/2qDH5cg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "loose-envify": "^1.4.0",
        "object-assign": "^4.1.1",
        "react-is": "^16.13.1"
      }
    },
    "node_modules/punycode": {
      "version": "2.3.1",
      "resolved": "https://registry.npmjs.org/punycode/-/punycode-2.3.1.tgz",
      "integrity": "sha512-vYt7UD1U9Wg6138shLtLOvdAu+8DsC/ilFtEVHcH+wydcSpNE20AfSOduf6MkRFahL5FY7X1oU7nKVZFtfq8Fg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/queue-microtask": {
      "version": "1.2.3",
      "resolved": "https://registry.npmjs.org/queue-microtask/-/queue-microtask-1.2.3.tgz",
      "integrity": "sha512-NuaNSa6flKT5JaSYQzJok04JzTL1CA6aGhv5rfLW3PgqA+M2ChpZQnAC8h8i4ZFkBS8X5RqkDBHA7r4hej3K9A==",
      "dev": true,
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/feross"
        },
        {
          "type": "patreon",
          "url": "https://www.patreon.com/feross"
        },
        {
          "type": "consulting",
          "url": "https://feross.org/support"
        }
      ],
      "license": "MIT"
    },
    "node_modules/react": {
      "version": "18.3.1",
      "resolved": "https://registry.npmjs.org/react/-/react-18.3.1.tgz",
      "integrity": "sha512-wS+hAgJShR0KhEvPJArfuPVN1+Hz1t0Y6n5jLrGQbkb4urgPE/0Rve+1kMB1v/oWgHgm4WIcV+i7F2pTVj+2iQ==",
      "license": "MIT",
      "dependencies": {
        "loose-envify": "^1.1.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/react-dom": {
      "version": "18.3.1",
      "resolved": "https://registry.npmjs.org/react-dom/-/react-dom-18.3.1.tgz",
      "integrity": "sha512-5m4nQKp+rZRb09LNH59GM4BxTh9251/ylbKIbpe7TpGxfJ+9kv6BLkLBXIjjspbgbnIBNqlI23tRnTWT0snUIw==",
      "license": "MIT",
      "dependencies": {
        "loose-envify": "^1.1.0",
        "scheduler": "^0.23.2"
      },
      "peerDependencies": {
        "react": "^18.3.1"
      }
    },
    "node_modules/react-is": {
      "version": "16.13.1",
      "resolved": "https://registry.npmjs.org/react-is/-/react-is-16.13.1.tgz",
      "integrity": "sha512-24e6ynE2H+OKt4kqsOvNd8kBpV65zoxbA4BVsEOB3ARVWQki/DHzaUoC5KuON/BiccDaCCTZBuOcfZs70kR8bQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/reflect.getprototypeof": {
      "version": "1.0.10",
      "resolved": "https://registry.npmjs.org/reflect.getprototypeof/-/reflect.getprototypeof-1.0.10.tgz",
      "integrity": "sha512-00o4I+DVrefhv+nX0ulyi3biSHCPDe+yLv5o/p6d/UVlirijB8E16FtfwSAi4g3tcqrQ4lRAqQSoFEZJehYEcw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.8",
        "define-properties": "^1.2.1",
        "es-abstract": "^1.23.9",
        "es-errors": "^1.3.0",
        "es-object-atoms": "^1.0.0",
        "get-intrinsic": "^1.2.7",
        "get-proto": "^1.0.1",
        "which-builtin-type": "^1.2.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/regexp.prototype.flags": {
      "version": "1.5.4",
      "resolved": "https://registry.npmjs.org/regexp.prototype.flags/-/regexp.prototype.flags-1.5.4.tgz",
      "integrity": "sha512-dYqgNSZbDwkaJ2ceRd9ojCGjBq+mOm9LmtXnAnEGyHhN/5R7iDW2TRw3h+o/jCFxus3P2LfWIIiwowAjANm7IA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.8",
        "define-properties": "^1.2.1",
        "es-errors": "^1.3.0",
        "get-proto": "^1.0.1",
        "gopd": "^1.2.0",
        "set-function-name": "^2.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/resolve": {
      "version": "2.0.0-next.6",
      "resolved": "https://registry.npmjs.org/resolve/-/resolve-2.0.0-next.6.tgz",
      "integrity": "sha512-3JmVl5hMGtJ3kMmB3zi3DL25KfkCEyy3Tw7Gmw7z5w8M9WlwoPFnIvwChzu1+cF3iaK3sp18hhPz8ANeimdJfA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0",
        "is-core-module": "^2.16.1",
        "node-exports-info": "^1.6.0",
        "object-keys": "^1.1.1",
        "path-parse": "^1.0.7",
        "supports-preserve-symlinks-flag": "^1.0.0"
      },
      "bin": {
        "resolve": "bin/resolve"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/resolve-from": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/resolve-from/-/resolve-from-4.0.0.tgz",
      "integrity": "sha512-pb/MYmXstAkysRFx8piNI1tGFNQIFA3vkE3Gq4EuA1dF6gHp/+vgZqsCGJapvy8N3Q+4o7FwvquPJcnZ7RYy4g==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/resolve-pkg-maps": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/resolve-pkg-maps/-/resolve-pkg-maps-1.0.0.tgz",
      "integrity": "sha512-seS2Tj26TBVOC2NIc2rOe2y2ZO7efxITtLZcGSOnHHNOQ7CkiUBfw0Iw2ck6xkIhPwLhKNLS8BO+hEpngQlqzw==",
      "dev": true,
      "license": "MIT",
      "funding": {
        "url": "https://github.com/privatenumber/resolve-pkg-maps?sponsor=1"
      }
    },
    "node_modules/reusify": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/reusify/-/reusify-1.1.0.tgz",
      "integrity": "sha512-g6QUff04oZpHs0eG5p83rFLhHeV00ug/Yf9nZM6fLeUrPguBTkTQOdpAWWspMh55TZfVQDPaN3NQJfbVRAxdIw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "iojs": ">=1.0.0",
        "node": ">=0.10.0"
      }
    },
    "node_modules/rimraf": {
      "version": "3.0.2",
      "resolved": "https://registry.npmjs.org/rimraf/-/rimraf-3.0.2.tgz",
      "integrity": "sha512-JZkJMZkAGFFPP2YqXZXPbMlMBgsxzE8ILs4lMIX/2o0L9UBw9O/Y3o6wFw/i9YLapcUJWwqbi3kdxIPdC62TIA==",
      "deprecated": "Rimraf versions prior to v4 are no longer supported",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "glob": "^7.1.3"
      },
      "bin": {
        "rimraf": "bin.js"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/rimraf/node_modules/glob": {
      "version": "7.2.3",
      "resolved": "https://registry.npmjs.org/glob/-/glob-7.2.3.tgz",
      "integrity": "sha512-nFR0zLpU2YCaRxwoCJvL6UvCH2JFyFVIvwTLsIf21AuHlMskA1hhTdk+LlYJtOlYt9v6dvszD2BGRqBL+iQK9Q==",
      "deprecated": "Old versions of glob are not supported, and contain widely publicized security vulnerabilities, which have been fixed in the current version. Please update. Support for old versions may be purchased (at exorbitant rates) by contacting i@izs.me",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "fs.realpath": "^1.0.0",
        "inflight": "^1.0.4",
        "inherits": "2",
        "minimatch": "^3.1.1",
        "once": "^1.3.0",
        "path-is-absolute": "^1.0.0"
      },
      "engines": {
        "node": "*"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/run-parallel": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/run-parallel/-/run-parallel-1.2.0.tgz",
      "integrity": "sha512-5l4VyZR86LZ/lDxZTR6jqL8AFE2S0IFLMP26AbjsLVADxHdhB/c0GUsH+y39UfCi3dzz8OlQuPmnaJOMoDHQBA==",
      "dev": true,
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/feross"
        },
        {
          "type": "patreon",
          "url": "https://www.patreon.com/feross"
        },
        {
          "type": "consulting",
          "url": "https://feross.org/support"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "queue-microtask": "^1.2.2"
      }
    },
    "node_modules/safe-array-concat": {
      "version": "1.1.3",
      "resolved": "https://registry.npmjs.org/safe-array-concat/-/safe-array-concat-1.1.3.tgz",
      "integrity": "sha512-AURm5f0jYEOydBj7VQlVvDrjeFgthDdEF5H1dP+6mNpoXOMo1quQqJ4wvJDyRZ9+pO3kGWoOdmV08cSv2aJV6Q==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.8",
        "call-bound": "^1.0.2",
        "get-intrinsic": "^1.2.6",
        "has-symbols": "^1.1.0",
        "isarray": "^2.0.5"
      },
      "engines": {
        "node": ">=0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/safe-push-apply": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/safe-push-apply/-/safe-push-apply-1.0.0.tgz",
      "integrity": "sha512-iKE9w/Z7xCzUMIZqdBsp6pEQvwuEebH4vdpjcDWnyzaI6yl6O9FHvVpmGelvEHNsoY6wGblkxR6Zty/h00WiSA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0",
        "isarray": "^2.0.5"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/safe-regex-test": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/safe-regex-test/-/safe-regex-test-1.1.0.tgz",
      "integrity": "sha512-x/+Cz4YrimQxQccJf5mKEbIa1NzeCRNI5Ecl/ekmlYaampdNLPalVyIcCZNNH3MvmqBugV5TMYZXv0ljslUlaw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.2",
        "es-errors": "^1.3.0",
        "is-regex": "^1.2.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/scheduler": {
      "version": "0.23.2",
      "resolved": "https://registry.npmjs.org/scheduler/-/scheduler-0.23.2.tgz",
      "integrity": "sha512-UOShsPwz7NrMUqhR6t0hWjFduvOzbtv7toDH1/hIrfRNIDBnnBWd0CwJTGvTpngVlmwGCdP9/Zl/tVrDqcuYzQ==",
      "license": "MIT",
      "dependencies": {
        "loose-envify": "^1.1.0"
      }
    },
    "node_modules/semver": {
      "version": "7.7.4",
      "resolved": "https://registry.npmjs.org/semver/-/semver-7.7.4.tgz",
      "integrity": "sha512-vFKC2IEtQnVhpT78h1Yp8wzwrf8CM+MzKMHGJZfBtzhZNycRFnXsHk6E5TxIkkMsgNS7mdX3AGB7x2QM2di4lA==",
      "dev": true,
      "license": "ISC",
      "bin": {
        "semver": "bin/semver.js"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/set-function-length": {
      "version": "1.2.2",
      "resolved": "https://registry.npmjs.org/set-function-length/-/set-function-length-1.2.2.tgz",
      "integrity": "sha512-pgRc4hJ4/sNjWCSS9AmnS40x3bNMDTknHgL5UaMBTMyJnU90EgWh1Rz+MC9eFu4BuN/UwZjKQuY/1v3rM7HMfg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "define-data-property": "^1.1.4",
        "es-errors": "^1.3.0",
        "function-bind": "^1.1.2",
        "get-intrinsic": "^1.2.4",
        "gopd": "^1.0.1",
        "has-property-descriptors": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/set-function-name": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/set-function-name/-/set-function-name-2.0.2.tgz",
      "integrity": "sha512-7PGFlmtwsEADb0WYyvCMa1t+yke6daIG4Wirafur5kcf+MhUnPms1UeR0CKQdTZD81yESwMHbtn+TR+dMviakQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "define-data-property": "^1.1.4",
        "es-errors": "^1.3.0",
        "functions-have-names": "^1.2.3",
        "has-property-descriptors": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/set-proto": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/set-proto/-/set-proto-1.0.0.tgz",
      "integrity": "sha512-RJRdvCo6IAnPdsvP/7m6bsQqNnn1FCBX5ZNtFL98MmFF/4xAIJTIg1YbHW5DC2W5SKZanrC6i4HsJqlajw/dZw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "dunder-proto": "^1.0.1",
        "es-errors": "^1.3.0",
        "es-object-atoms": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/shebang-command": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/shebang-command/-/shebang-command-2.0.0.tgz",
      "integrity": "sha512-kHxr2zZpYtdmrN1qDjrrX/Z1rR1kG8Dx+gkpK1G4eXmvXswmcE1hTWBWYUzlraYw1/yZp6YuDY77YtvbN0dmDA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "shebang-regex": "^3.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/shebang-regex": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/shebang-regex/-/shebang-regex-3.0.0.tgz",
      "integrity": "sha512-7++dFhtcx3353uBaq8DDR4NuxBetBzC7ZQOhmTQInHEd6bSrXdiEyzCvG07Z44UYdLShWUyXt5M/yhz8ekcb1A==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/side-channel": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/side-channel/-/side-channel-1.1.0.tgz",
      "integrity": "sha512-ZX99e6tRweoUXqR+VBrslhda51Nh5MTQwou5tnUDgbtyM0dBgmhEDtWGP/xbKn6hqfPRHujUNwz5fy/wbbhnpw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0",
        "object-inspect": "^1.13.3",
        "side-channel-list": "^1.0.0",
        "side-channel-map": "^1.0.1",
        "side-channel-weakmap": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/side-channel-list": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/side-channel-list/-/side-channel-list-1.0.1.tgz",
      "integrity": "sha512-mjn/0bi/oUURjc5Xl7IaWi/OJJJumuoJFQJfDDyO46+hBWsfaVM65TBHq2eoZBhzl9EchxOijpkbRC8SVBQU0w==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0",
        "object-inspect": "^1.13.4"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/side-channel-map": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/side-channel-map/-/side-channel-map-1.0.1.tgz",
      "integrity": "sha512-VCjCNfgMsby3tTdo02nbjtM/ewra6jPHmpThenkTYh8pG9ucZ/1P8So4u4FGBek/BjpOVsDCMoLA/iuBKIFXRA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.2",
        "es-errors": "^1.3.0",
        "get-intrinsic": "^1.2.5",
        "object-inspect": "^1.13.3"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/side-channel-weakmap": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/side-channel-weakmap/-/side-channel-weakmap-1.0.2.tgz",
      "integrity": "sha512-WPS/HvHQTYnHisLo9McqBHOJk2FkHO/tlpvldyrnem4aeQp4hai3gythswg6p01oSoTl58rcpiFAjF2br2Ak2A==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.2",
        "es-errors": "^1.3.0",
        "get-intrinsic": "^1.2.5",
        "object-inspect": "^1.13.3",
        "side-channel-map": "^1.0.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/signal-exit": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/signal-exit/-/signal-exit-4.1.0.tgz",
      "integrity": "sha512-bzyZ1e88w9O1iNJbKnOlvYTrWPDl46O1bG0D3XInv+9tkPrxrN8jUUTiFlDkkmKWgn1M6CfIA13SuGqOa9Korw==",
      "dev": true,
      "license": "ISC",
      "engines": {
        "node": ">=14"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/source-map-js": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/source-map-js/-/source-map-js-1.2.1.tgz",
      "integrity": "sha512-UXWMKhLOwVKb728IUtQPXxfYU+usdybtUrK/8uGE8CQMvrhOpwvzDBwj0QhSL7MQc7vIsISBG8VQ8+IDQxpfQA==",
      "license": "BSD-3-Clause",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/stable-hash": {
      "version": "0.0.5",
      "resolved": "https://registry.npmjs.org/stable-hash/-/stable-hash-0.0.5.tgz",
      "integrity": "sha512-+L3ccpzibovGXFK+Ap/f8LOS0ahMrHTf3xu7mMLSpEGU0EO9ucaysSylKo9eRDFNhWve/y275iPmIZ4z39a9iA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/stop-iteration-iterator": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/stop-iteration-iterator/-/stop-iteration-iterator-1.1.0.tgz",
      "integrity": "sha512-eLoXW/DHyl62zxY4SCaIgnRhuMr6ri4juEYARS8E6sCEqzKpOiE521Ucofdx+KnDZl5xmvGYaaKCk5FEOxJCoQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0",
        "internal-slot": "^1.1.0"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/streamsearch": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/streamsearch/-/streamsearch-1.1.0.tgz",
      "integrity": "sha512-Mcc5wHehp9aXz1ax6bZUyY5afg9u2rv5cqQI3mRrYkGC8rW2hM02jWuwjtL++LS5qinSyhj2QfLyNsuc+VsExg==",
      "engines": {
        "node": ">=10.0.0"
      }
    },
    "node_modules/string-width": {
      "version": "5.1.2",
      "resolved": "https://registry.npmjs.org/string-width/-/string-width-5.1.2.tgz",
      "integrity": "sha512-HnLOCR3vjcY8beoNLtcjZ5/nxn2afmME6lhrDrebokqMap+XbeW8n9TXpPDOqdGK5qcI3oT0GKTW6wC7EMiVqA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "eastasianwidth": "^0.2.0",
        "emoji-regex": "^9.2.2",
        "strip-ansi": "^7.0.1"
      },
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/string-width-cjs": {
      "name": "string-width",
      "version": "4.2.3",
      "resolved": "https://registry.npmjs.org/string-width/-/string-width-4.2.3.tgz",
      "integrity": "sha512-wKyQRQpjJ0sIp62ErSZdGsjMJWsap5oRNihHhu6G7JVO/9jIB6UyevL+tXuOqrng8j/cxKTWyWUwvSTriiZz/g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "emoji-regex": "^8.0.0",
        "is-fullwidth-code-point": "^3.0.0",
        "strip-ansi": "^6.0.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/string-width-cjs/node_modules/emoji-regex": {
      "version": "8.0.0",
      "resolved": "https://registry.npmjs.org/emoji-regex/-/emoji-regex-8.0.0.tgz",
      "integrity": "sha512-MSjYzcWNOA0ewAHpz0MxpYFvwg6yjy1NG3xteoqz644VCo/RPgnr1/GGt+ic3iJTzQ8Eu3TdM14SawnVUmGE6A==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/string-width/node_modules/ansi-regex": {
      "version": "6.2.2",
      "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-6.2.2.tgz",
      "integrity": "sha512-Bq3SmSpyFHaWjPk8If9yc6svM8c56dB5BAtW4Qbw5jHTwwXXcTLoRMkpDJp6VL0XzlWaCHTXrkFURMYmD0sLqg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/chalk/ansi-regex?sponsor=1"
      }
    },
    "node_modules/string-width/node_modules/strip-ansi": {
      "version": "7.2.0",
      "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-7.2.0.tgz",
      "integrity": "sha512-yDPMNjp4WyfYBkHnjIRLfca1i6KMyGCtsVgoKe/z1+6vukgaENdgGBZt+ZmKPc4gavvEZ5OgHfHdrazhgNyG7w==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ansi-regex": "^6.2.2"
      },
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/chalk/strip-ansi?sponsor=1"
      }
    },
    "node_modules/string.prototype.includes": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/string.prototype.includes/-/string.prototype.includes-2.0.1.tgz",
      "integrity": "sha512-o7+c9bW6zpAdJHTtujeePODAhkuicdAryFsfVKwA+wGw89wJ4GTY484WTucM9hLtDEOpOvI+aHnzqnC5lHp4Rg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.7",
        "define-properties": "^1.2.1",
        "es-abstract": "^1.23.3"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/string.prototype.matchall": {
      "version": "4.0.12",
      "resolved": "https://registry.npmjs.org/string.prototype.matchall/-/string.prototype.matchall-4.0.12.tgz",
      "integrity": "sha512-6CC9uyBL+/48dYizRf7H7VAYCMCNTBeM78x/VTUe9bFEaxBepPJDa1Ow99LqI/1yF7kuy7Q3cQsYMrcjGUcskA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.8",
        "call-bound": "^1.0.3",
        "define-properties": "^1.2.1",
        "es-abstract": "^1.23.6",
        "es-errors": "^1.3.0",
        "es-object-atoms": "^1.0.0",
        "get-intrinsic": "^1.2.6",
        "gopd": "^1.2.0",
        "has-symbols": "^1.1.0",
        "internal-slot": "^1.1.0",
        "regexp.prototype.flags": "^1.5.3",
        "set-function-name": "^2.0.2",
        "side-channel": "^1.1.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/string.prototype.repeat": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/string.prototype.repeat/-/string.prototype.repeat-1.0.0.tgz",
      "integrity": "sha512-0u/TldDbKD8bFCQ/4f5+mNRrXwZ8hg2w7ZR8wa16e8z9XpePWl3eGEcUD0OXpEH/VJH/2G3gjUtR3ZOiBe2S/w==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "define-properties": "^1.1.3",
        "es-abstract": "^1.17.5"
      }
    },
    "node_modules/string.prototype.trim": {
      "version": "1.2.10",
      "resolved": "https://registry.npmjs.org/string.prototype.trim/-/string.prototype.trim-1.2.10.tgz",
      "integrity": "sha512-Rs66F0P/1kedk5lyYyH9uBzuiI/kNRmwJAR9quK6VOtIpZ2G+hMZd+HQbbv25MgCA6gEffoMZYxlTod4WcdrKA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.8",
        "call-bound": "^1.0.2",
        "define-data-property": "^1.1.4",
        "define-properties": "^1.2.1",
        "es-abstract": "^1.23.5",
        "es-object-atoms": "^1.0.0",
        "has-property-descriptors": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/string.prototype.trimend": {
      "version": "1.0.9",
      "resolved": "https://registry.npmjs.org/string.prototype.trimend/-/string.prototype.trimend-1.0.9.tgz",
      "integrity": "sha512-G7Ok5C6E/j4SGfyLCloXTrngQIQU3PWtXGst3yM7Bea9FRURf1S42ZHlZZtsNque2FN2PoUhfZXYLNWwEr4dLQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.8",
        "call-bound": "^1.0.2",
        "define-properties": "^1.2.1",
        "es-object-atoms": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/string.prototype.trimstart": {
      "version": "1.0.8",
      "resolved": "https://registry.npmjs.org/string.prototype.trimstart/-/string.prototype.trimstart-1.0.8.tgz",
      "integrity": "sha512-UXSH262CSZY1tfu3G3Secr6uGLCFVPMhIqHjlgCUtCCcgihYc/xKs9djMTMUOb2j1mVSeU8EU6NWc/iQKU6Gfg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.7",
        "define-properties": "^1.2.1",
        "es-object-atoms": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/strip-ansi": {
      "version": "6.0.1",
      "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-6.0.1.tgz",
      "integrity": "sha512-Y38VPSHcqkFrCpFnQ9vuSXmquuv5oXOKpGeT6aGrr3o3Gc9AlVa6JBfUSOCnbxGGZF+/0ooI7KrPuUSztUdU5A==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ansi-regex": "^5.0.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/strip-ansi-cjs": {
      "name": "strip-ansi",
      "version": "6.0.1",
      "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-6.0.1.tgz",
      "integrity": "sha512-Y38VPSHcqkFrCpFnQ9vuSXmquuv5oXOKpGeT6aGrr3o3Gc9AlVa6JBfUSOCnbxGGZF+/0ooI7KrPuUSztUdU5A==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ansi-regex": "^5.0.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/strip-bom": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/strip-bom/-/strip-bom-3.0.0.tgz",
      "integrity": "sha512-vavAMRXOgBVNF6nyEEmL3DBK19iRpDcoIwW+swQ+CbGiu7lju6t+JklA1MHweoWtadgt4ISVUsXLyDq34ddcwA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/strip-json-comments": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/strip-json-comments/-/strip-json-comments-3.1.1.tgz",
      "integrity": "sha512-6fPc+R4ihwqP6N/aIv2f1gMH8lOVtWQHoqC4yK6oSDVVocumAsfCqjkXnqiYMhmMwS/mEHLp7Vehlt3ql6lEig==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/styled-jsx": {
      "version": "5.1.1",
      "resolved": "https://registry.npmjs.org/styled-jsx/-/styled-jsx-5.1.1.tgz",
      "integrity": "sha512-pW7uC1l4mBZ8ugbiZrcIsiIvVx1UmTfw7UkC3Um2tmfUq9Bhk8IiyEIPl6F8agHgjzku6j0xQEZbfA5uSgSaCw==",
      "license": "MIT",
      "dependencies": {
        "client-only": "0.0.1"
      },
      "engines": {
        "node": ">= 12.0.0"
      },
      "peerDependencies": {
        "react": ">= 16.8.0 || 17.x.x || ^18.0.0-0"
      },
      "peerDependenciesMeta": {
        "@babel/core": {
          "optional": true
        },
        "babel-plugin-macros": {
          "optional": true
        }
      }
    },
    "node_modules/supports-color": {
      "version": "7.2.0",
      "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
      "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "has-flag": "^4.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/supports-preserve-symlinks-flag": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/supports-preserve-symlinks-flag/-/supports-preserve-symlinks-flag-1.0.0.tgz",
      "integrity": "sha512-ot0WnXS9fgdkgIcePe6RHNk1WA8+muPa6cSjeR3V8K27q9BB1rTE3R1p7Hv0z1ZyAc8s6Vvv8DIyWf681MAt0w==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/text-table": {
      "version": "0.2.0",
      "resolved": "https://registry.npmjs.org/text-table/-/text-table-0.2.0.tgz",
      "integrity": "sha512-N+8UisAXDGk8PFXP4HAzVR9nbfmVJ3zYLAWiTIoqC5v5isinhr+r5uaO8+7r3BMfuNIufIsA7RdpVgacC2cSpw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/tinyglobby": {
      "version": "0.2.16",
      "resolved": "https://registry.npmjs.org/tinyglobby/-/tinyglobby-0.2.16.tgz",
      "integrity": "sha512-pn99VhoACYR8nFHhxqix+uvsbXineAasWm5ojXoN8xEwK5Kd3/TrhNn1wByuD52UxWRLy8pu+kRMniEi6Eq9Zg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "fdir": "^6.5.0",
        "picomatch": "^4.0.4"
      },
      "engines": {
        "node": ">=12.0.0"
      },
      "funding": {
        "url": "https://github.com/sponsors/SuperchupuDev"
      }
    },
    "node_modules/ts-api-utils": {
      "version": "2.5.0",
      "resolved": "https://registry.npmjs.org/ts-api-utils/-/ts-api-utils-2.5.0.tgz",
      "integrity": "sha512-OJ/ibxhPlqrMM0UiNHJ/0CKQkoKF243/AEmplt3qpRgkW8VG7IfOS41h7V8TjITqdByHzrjcS/2si+y4lIh8NA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=18.12"
      },
      "peerDependencies": {
        "typescript": ">=4.8.4"
      }
    },
    "node_modules/tsconfig-paths": {
      "version": "3.15.0",
      "resolved": "https://registry.npmjs.org/tsconfig-paths/-/tsconfig-paths-3.15.0.tgz",
      "integrity": "sha512-2Ac2RgzDe/cn48GvOe3M+o82pEFewD3UPbyoUHHdKasHwJKjds4fLXWf/Ux5kATBKN20oaFGu+jbElp1pos0mg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@types/json5": "^0.0.29",
        "json5": "^1.0.2",
        "minimist": "^1.2.6",
        "strip-bom": "^3.0.0"
      }
    },
    "node_modules/tslib": {
      "version": "2.8.1",
      "resolved": "https://registry.npmjs.org/tslib/-/tslib-2.8.1.tgz",
      "integrity": "sha512-oJFu94HQb+KVduSUQL7wnpmqnfmLsOA/nAh6b6EH0wCEoK0/mPeXU6c3wKDV83MkOuHPRHtSXKKU99IBazS/2w==",
      "license": "0BSD"
    },
    "node_modules/type-check": {
      "version": "0.4.0",
      "resolved": "https://registry.npmjs.org/type-check/-/type-check-0.4.0.tgz",
      "integrity": "sha512-XleUoc9uwGXqjWwXaUTZAmzMcFZ5858QA2vvx1Ur5xIcixXIP+8LnFDgRplU30us6teqdlskFfu+ae4K79Ooew==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "prelude-ls": "^1.2.1"
      },
      "engines": {
        "node": ">= 0.8.0"
      }
    },
    "node_modules/type-fest": {
      "version": "0.20.2",
      "resolved": "https://registry.npmjs.org/type-fest/-/type-fest-0.20.2.tgz",
      "integrity": "sha512-Ne+eE4r0/iWnpAxD852z3A+N0Bt5RN//NjJwRd2VFHEmrywxf5vsZlh4R6lixl6B+wz/8d+maTSAkN1FIkI3LQ==",
      "dev": true,
      "license": "(MIT OR CC0-1.0)",
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/typed-array-buffer": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/typed-array-buffer/-/typed-array-buffer-1.0.3.tgz",
      "integrity": "sha512-nAYYwfY3qnzX30IkA6AQZjVbtK6duGontcQm1WSG1MD94YLqK0515GNApXkoxKOWMusVssAHWLh9SeaoefYFGw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.3",
        "es-errors": "^1.3.0",
        "is-typed-array": "^1.1.14"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/typed-array-byte-length": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/typed-array-byte-length/-/typed-array-byte-length-1.0.3.tgz",
      "integrity": "sha512-BaXgOuIxz8n8pIq3e7Atg/7s+DpiYrxn4vdot3w9KbnBhcRQq6o3xemQdIfynqSeXeDrF32x+WvfzmOjPiY9lg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.8",
        "for-each": "^0.3.3",
        "gopd": "^1.2.0",
        "has-proto": "^1.2.0",
        "is-typed-array": "^1.1.14"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/typed-array-byte-offset": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/typed-array-byte-offset/-/typed-array-byte-offset-1.0.4.tgz",
      "integrity": "sha512-bTlAFB/FBYMcuX81gbL4OcpH5PmlFHqlCCpAl8AlEzMz5k53oNDvN8p1PNOWLEmI2x4orp3raOFB51tv9X+MFQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "available-typed-arrays": "^1.0.7",
        "call-bind": "^1.0.8",
        "for-each": "^0.3.3",
        "gopd": "^1.2.0",
        "has-proto": "^1.2.0",
        "is-typed-array": "^1.1.15",
        "reflect.getprototypeof": "^1.0.9"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/typed-array-length": {
      "version": "1.0.7",
      "resolved": "https://registry.npmjs.org/typed-array-length/-/typed-array-length-1.0.7.tgz",
      "integrity": "sha512-3KS2b+kL7fsuk/eJZ7EQdnEmQoaho/r6KUef7hxvltNA5DR8NAUM+8wJMbJyZ4G9/7i3v5zPBIMN5aybAh2/Jg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.7",
        "for-each": "^0.3.3",
        "gopd": "^1.0.1",
        "is-typed-array": "^1.1.13",
        "possible-typed-array-names": "^1.0.0",
        "reflect.getprototypeof": "^1.0.6"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/typescript": {
      "version": "6.0.2",
      "resolved": "https://registry.npmjs.org/typescript/-/typescript-6.0.2.tgz",
      "integrity": "sha512-bGdAIrZ0wiGDo5l8c++HWtbaNCWTS4UTv7RaTH/ThVIgjkveJt83m74bBHMJkuCbslY8ixgLBVZJIOiQlQTjfQ==",
      "dev": true,
      "license": "Apache-2.0",
      "peer": true,
      "bin": {
        "tsc": "bin/tsc",
        "tsserver": "bin/tsserver"
      },
      "engines": {
        "node": ">=14.17"
      }
    },
    "node_modules/unbox-primitive": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/unbox-primitive/-/unbox-primitive-1.1.0.tgz",
      "integrity": "sha512-nWJ91DjeOkej/TA8pXQ3myruKpKEYgqvpw9lz4OPHj/NWFNluYrjbz9j01CJ8yKQd2g4jFoOkINCTW2I5LEEyw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.3",
        "has-bigints": "^1.0.2",
        "has-symbols": "^1.1.0",
        "which-boxed-primitive": "^1.1.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/undici-types": {
      "version": "7.19.2",
      "resolved": "https://registry.npmjs.org/undici-types/-/undici-types-7.19.2.tgz",
      "integrity": "sha512-qYVnV5OEm2AW8cJMCpdV20CDyaN3g0AjDlOGf1OW4iaDEx8MwdtChUp4zu4H0VP3nDRF/8RKWH+IPp9uW0YGZg==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/unrs-resolver": {
      "version": "1.11.1",
      "resolved": "https://registry.npmjs.org/unrs-resolver/-/unrs-resolver-1.11.1.tgz",
      "integrity": "sha512-bSjt9pjaEBnNiGgc9rUiHGKv5l4/TGzDmYw3RhnkJGtLhbnnA/5qJj7x3dNDCRx/PJxu774LlH8lCOlB4hEfKg==",
      "dev": true,
      "hasInstallScript": true,
      "license": "MIT",
      "dependencies": {
        "napi-postinstall": "^0.3.0"
      },
      "funding": {
        "url": "https://opencollective.com/unrs-resolver"
      },
      "optionalDependencies": {
        "@unrs/resolver-binding-android-arm-eabi": "1.11.1",
        "@unrs/resolver-binding-android-arm64": "1.11.1",
        "@unrs/resolver-binding-darwin-arm64": "1.11.1",
        "@unrs/resolver-binding-darwin-x64": "1.11.1",
        "@unrs/resolver-binding-freebsd-x64": "1.11.1",
        "@unrs/resolver-binding-linux-arm-gnueabihf": "1.11.1",
        "@unrs/resolver-binding-linux-arm-musleabihf": "1.11.1",
        "@unrs/resolver-binding-linux-arm64-gnu": "1.11.1",
        "@unrs/resolver-binding-linux-arm64-musl": "1.11.1",
        "@unrs/resolver-binding-linux-ppc64-gnu": "1.11.1",
        "@unrs/resolver-binding-linux-riscv64-gnu": "1.11.1",
        "@unrs/resolver-binding-linux-riscv64-musl": "1.11.1",
        "@unrs/resolver-binding-linux-s390x-gnu": "1.11.1",
        "@unrs/resolver-binding-linux-x64-gnu": "1.11.1",
        "@unrs/resolver-binding-linux-x64-musl": "1.11.1",
        "@unrs/resolver-binding-wasm32-wasi": "1.11.1",
        "@unrs/resolver-binding-win32-arm64-msvc": "1.11.1",
        "@unrs/resolver-binding-win32-ia32-msvc": "1.11.1",
        "@unrs/resolver-binding-win32-x64-msvc": "1.11.1"
      }
    },
    "node_modules/uri-js": {
      "version": "4.4.1",
      "resolved": "https://registry.npmjs.org/uri-js/-/uri-js-4.4.1.tgz",
      "integrity": "sha512-7rKUyy33Q1yc98pQ1DAmLtwX109F7TIfWlW1Ydo8Wl1ii1SeHieeh0HHfPeL2fMXK6z0s8ecKs9frCuLJvndBg==",
      "dev": true,
      "license": "BSD-2-Clause",
      "dependencies": {
        "punycode": "^2.1.0"
      }
    },
    "node_modules/which": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/which/-/which-2.0.2.tgz",
      "integrity": "sha512-BLI3Tl1TW3Pvl70l3yq3Y64i+awpwXqsGBYWkkqMtnbXgrMD+yj7rhW0kuEDxzJaYXGjEW5ogapKNMEKNMjibA==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "isexe": "^2.0.0"
      },
      "bin": {
        "node-which": "bin/node-which"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/which-boxed-primitive": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/which-boxed-primitive/-/which-boxed-primitive-1.1.1.tgz",
      "integrity": "sha512-TbX3mj8n0odCBFVlY8AxkqcHASw3L60jIuF8jFP78az3C2YhmGvqbHBpAjTRH2/xqYunrJ9g1jSyjCjpoWzIAA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "is-bigint": "^1.1.0",
        "is-boolean-object": "^1.2.1",
        "is-number-object": "^1.1.1",
        "is-string": "^1.1.1",
        "is-symbol": "^1.1.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/which-builtin-type": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/which-builtin-type/-/which-builtin-type-1.2.1.tgz",
      "integrity": "sha512-6iBczoX+kDQ7a3+YJBnh3T+KZRxM/iYNPXicqk66/Qfm1b93iu+yOImkg0zHbj5LNOcNv1TEADiZ0xa34B4q6Q==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.2",
        "function.prototype.name": "^1.1.6",
        "has-tostringtag": "^1.0.2",
        "is-async-function": "^2.0.0",
        "is-date-object": "^1.1.0",
        "is-finalizationregistry": "^1.1.0",
        "is-generator-function": "^1.0.10",
        "is-regex": "^1.2.1",
        "is-weakref": "^1.0.2",
        "isarray": "^2.0.5",
        "which-boxed-primitive": "^1.1.0",
        "which-collection": "^1.0.2",
        "which-typed-array": "^1.1.16"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/which-collection": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/which-collection/-/which-collection-1.0.2.tgz",
      "integrity": "sha512-K4jVyjnBdgvc86Y6BkaLZEN933SwYOuBFkdmBu9ZfkcAbdVbpITnDmjvZ/aQjRXQrv5EPkTnD1s39GiiqbngCw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "is-map": "^2.0.3",
        "is-set": "^2.0.3",
        "is-weakmap": "^2.0.2",
        "is-weakset": "^2.0.3"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/which-typed-array": {
      "version": "1.1.20",
      "resolved": "https://registry.npmjs.org/which-typed-array/-/which-typed-array-1.1.20.tgz",
      "integrity": "sha512-LYfpUkmqwl0h9A2HL09Mms427Q1RZWuOHsukfVcKRq9q95iQxdw0ix1JQrqbcDR9PH1QDwf5Qo8OZb5lksZ8Xg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "available-typed-arrays": "^1.0.7",
        "call-bind": "^1.0.8",
        "call-bound": "^1.0.4",
        "for-each": "^0.3.5",
        "get-proto": "^1.0.1",
        "gopd": "^1.2.0",
        "has-tostringtag": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/word-wrap": {
      "version": "1.2.5",
      "resolved": "https://registry.npmjs.org/word-wrap/-/word-wrap-1.2.5.tgz",
      "integrity": "sha512-BN22B5eaMMI9UMtjrGd5g5eCYPpCPDUy0FJXbYsaT5zYxjFOckS53SQDE3pWkVoWpHXVb3BrYcEN4Twa55B5cA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/wrap-ansi": {
      "version": "8.1.0",
      "resolved": "https://registry.npmjs.org/wrap-ansi/-/wrap-ansi-8.1.0.tgz",
      "integrity": "sha512-si7QWI6zUMq56bESFvagtmzMdGOtoxfR+Sez11Mobfc7tm+VkUckk9bW2UeffTGVUbOksxmSw0AA2gs8g71NCQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ansi-styles": "^6.1.0",
        "string-width": "^5.0.1",
        "strip-ansi": "^7.0.1"
      },
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/chalk/wrap-ansi?sponsor=1"
      }
    },
    "node_modules/wrap-ansi-cjs": {
      "name": "wrap-ansi",
      "version": "7.0.0",
      "resolved": "https://registry.npmjs.org/wrap-ansi/-/wrap-ansi-7.0.0.tgz",
      "integrity": "sha512-YVGIj2kamLSTxw6NsZjoBxfSwsn0ycdesmc4p+Q21c5zPuZ1pl+NfxVdxPtdHvmNVOQ6XSYG4AUtyt/Fi7D16Q==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ansi-styles": "^4.0.0",
        "string-width": "^4.1.0",
        "strip-ansi": "^6.0.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/chalk/wrap-ansi?sponsor=1"
      }
    },
    "node_modules/wrap-ansi-cjs/node_modules/emoji-regex": {
      "version": "8.0.0",
      "resolved": "https://registry.npmjs.org/emoji-regex/-/emoji-regex-8.0.0.tgz",
      "integrity": "sha512-MSjYzcWNOA0ewAHpz0MxpYFvwg6yjy1NG3xteoqz644VCo/RPgnr1/GGt+ic3iJTzQ8Eu3TdM14SawnVUmGE6A==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/wrap-ansi-cjs/node_modules/string-width": {
      "version": "4.2.3",
      "resolved": "https://registry.npmjs.org/string-width/-/string-width-4.2.3.tgz",
      "integrity": "sha512-wKyQRQpjJ0sIp62ErSZdGsjMJWsap5oRNihHhu6G7JVO/9jIB6UyevL+tXuOqrng8j/cxKTWyWUwvSTriiZz/g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "emoji-regex": "^8.0.0",
        "is-fullwidth-code-point": "^3.0.0",
        "strip-ansi": "^6.0.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/wrap-ansi/node_modules/ansi-regex": {
      "version": "6.2.2",
      "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-6.2.2.tgz",
      "integrity": "sha512-Bq3SmSpyFHaWjPk8If9yc6svM8c56dB5BAtW4Qbw5jHTwwXXcTLoRMkpDJp6VL0XzlWaCHTXrkFURMYmD0sLqg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/chalk/ansi-regex?sponsor=1"
      }
    },
    "node_modules/wrap-ansi/node_modules/ansi-styles": {
      "version": "6.2.3",
      "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-6.2.3.tgz",
      "integrity": "sha512-4Dj6M28JB+oAH8kFkTLUo+a2jwOFkuqb3yucU0CANcRRUbxS0cP0nZYCGjcc3BNXwRIsUVmDGgzawme7zvJHvg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/chalk/ansi-styles?sponsor=1"
      }
    },
    "node_modules/wrap-ansi/node_modules/strip-ansi": {
      "version": "7.2.0",
      "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-7.2.0.tgz",
      "integrity": "sha512-yDPMNjp4WyfYBkHnjIRLfca1i6KMyGCtsVgoKe/z1+6vukgaENdgGBZt+ZmKPc4gavvEZ5OgHfHdrazhgNyG7w==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ansi-regex": "^6.2.2"
      },
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/chalk/strip-ansi?sponsor=1"
      }
    },
    "node_modules/wrappy": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/wrappy/-/wrappy-1.0.2.tgz",
      "integrity": "sha512-l4Sp/DRseor9wL6EvV2+TuQn63dMkPjZ/sp9XkghTEbV9KlPS1xUsZ3u7/IQO4wxtcFB4bgpQPRcR3QCvezPcQ==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/yocto-queue": {
      "version": "0.1.0",
      "resolved": "https://registry.npmjs.org/yocto-queue/-/yocto-queue-0.1.0.tgz",
      "integrity": "sha512-rVksvsnNCdJ/ohGc6xgPwyN8eheCxsiLM8mxuE/t/mOVqJewPuO1miLpTHQiRgTKCLexL4MeAFVagts7HmNZ2Q==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    }
  }
}
```

### `package.json`
```
{
  "name": "casa-de-racao-atlantico",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "deploy": "npm run build:gh-pages"
  },
  "dependencies": {
    "@fortawesome/fontawesome-free": "^7.2.0",
    "keen-slider": "^6.8.6",
    "next": "^14.0.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "@types/node": "25.6.0",
    "@types/react": "19.2.14",
    "eslint": "^8.50.0",
    "eslint-config-next": "^14.0.0"
  }
}
```

### `public\ico\facebook.svg`
```
<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
<svg width="800px" height="800px" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="24" cy="24" r="20" fill="#3B5998"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M29.315 16.9578C28.6917 16.8331 27.8498 16.74 27.3204 16.74C25.8867 16.74 25.7936 17.3633 25.7936 18.3607V20.1361H29.3774L29.065 23.8137H25.7936V35H21.3063V23.8137H19V20.1361H21.3063V17.8613C21.3063 14.7453 22.7708 13 26.4477 13C27.7252 13 28.6602 13.187 29.8753 13.4363L29.315 16.9578Z" fill="white"/>
</svg>
```

### `public\ico\google-maps.svg`
```
<?xml version="1.0" encoding="utf-8"?>

<!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
aria-label="Google Maps" role="img"
viewBox="0 0 512 512">

<rect id="a"
width="512" height="512"
x="0" y="0"
rx="15%"
fill="#ffffff"/>

<clipPath id="b">

<use xlink:href="#a"/>

</clipPath>

<g clip-path="url(#b)">

<path fill="#35a85b" d="M0 512V0h512z"/>

<path fill="#5881ca" d="M256 288L32 512h448z"/>

<path fill="#c1c0be" d="M288 256L512 32v448z"/>

<path stroke="#fadb2a" stroke-width="71" d="M0 512L512 0"/>

<path fill="none" stroke="#f2f2f2" stroke-width="22" d="M175 173h50a50 54 0 1 1-15-41"/>

<path fill="#de3738" d="M353 85a70 70 0 0 1 140 0c0 70-70 70-70 157 0-87-70-87-70-157"/>

<circle cx="423" cy="89" r="25" fill="#7d2426"/>

</g>

</svg>
```

### `public\ico\instagram.svg`
```
<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
<svg width="800px" height="800px" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="2" y="2" width="28" height="28" rx="6" fill="url(#paint0_radial_87_7153)"/>
<rect x="2" y="2" width="28" height="28" rx="6" fill="url(#paint1_radial_87_7153)"/>
<rect x="2" y="2" width="28" height="28" rx="6" fill="url(#paint2_radial_87_7153)"/>
<path d="M23 10.5C23 11.3284 22.3284 12 21.5 12C20.6716 12 20 11.3284 20 10.5C20 9.67157 20.6716 9 21.5 9C22.3284 9 23 9.67157 23 10.5Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M16 21C18.7614 21 21 18.7614 21 16C21 13.2386 18.7614 11 16 11C13.2386 11 11 13.2386 11 16C11 18.7614 13.2386 21 16 21ZM16 19C17.6569 19 19 17.6569 19 16C19 14.3431 17.6569 13 16 13C14.3431 13 13 14.3431 13 16C13 17.6569 14.3431 19 16 19Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6 15.6C6 12.2397 6 10.5595 6.65396 9.27606C7.2292 8.14708 8.14708 7.2292 9.27606 6.65396C10.5595 6 12.2397 6 15.6 6H16.4C19.7603 6 21.4405 6 22.7239 6.65396C23.8529 7.2292 24.7708 8.14708 25.346 9.27606C26 10.5595 26 12.2397 26 15.6V16.4C26 19.7603 26 21.4405 25.346 22.7239C24.7708 23.8529 23.8529 24.7708 22.7239 25.346C21.4405 26 19.7603 26 16.4 26H15.6C12.2397 26 10.5595 26 9.27606 25.346C8.14708 24.7708 7.2292 23.8529 6.65396 22.7239C6 21.4405 6 19.7603 6 16.4V15.6ZM15.6 8H16.4C18.1132 8 19.2777 8.00156 20.1779 8.0751C21.0548 8.14674 21.5032 8.27659 21.816 8.43597C22.5686 8.81947 23.1805 9.43139 23.564 10.184C23.7234 10.4968 23.8533 10.9452 23.9249 11.8221C23.9984 12.7223 24 13.8868 24 15.6V16.4C24 18.1132 23.9984 19.2777 23.9249 20.1779C23.8533 21.0548 23.7234 21.5032 23.564 21.816C23.1805 22.5686 22.5686 23.1805 21.816 23.564C21.5032 23.7234 21.0548 23.8533 20.1779 23.9249C19.2777 23.9984 18.1132 24 16.4 24H15.6C13.8868 24 12.7223 23.9984 11.8221 23.9249C10.9452 23.8533 10.4968 23.7234 10.184 23.564C9.43139 23.1805 8.81947 22.5686 8.43597 21.816C8.27659 21.5032 8.14674 21.0548 8.0751 20.1779C8.00156 19.2777 8 18.1132 8 16.4V15.6C8 13.8868 8.00156 12.7223 8.0751 11.8221C8.14674 10.9452 8.27659 10.4968 8.43597 10.184C8.81947 9.43139 9.43139 8.81947 10.184 8.43597C10.4968 8.27659 10.9452 8.14674 11.8221 8.0751C12.7223 8.00156 13.8868 8 15.6 8Z" fill="white"/>
<defs>
<radialGradient id="paint0_radial_87_7153" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(12 23) rotate(-55.3758) scale(25.5196)">
<stop stop-color="#B13589"/>
<stop offset="0.79309" stop-color="#C62F94"/>
<stop offset="1" stop-color="#8A3AC8"/>
</radialGradient>
<radialGradient id="paint1_radial_87_7153" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(11 31) rotate(-65.1363) scale(22.5942)">
<stop stop-color="#E0E8B7"/>
<stop offset="0.444662" stop-color="#FB8A2E"/>
<stop offset="0.71474" stop-color="#E2425C"/>
<stop offset="1" stop-color="#E2425C" stop-opacity="0"/>
</radialGradient>
<radialGradient id="paint2_radial_87_7153" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(0.500002 3) rotate(-8.1301) scale(38.8909 8.31836)">
<stop offset="0.156701" stop-color="#406ADC"/>
<stop offset="0.467799" stop-color="#6A45BE"/>
<stop offset="1" stop-color="#6A45BE" stop-opacity="0"/>
</radialGradient>
</defs>
</svg>
```

### `public\ico\internet.svg`
```
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">

<!-- Uploaded to: SVG Repo, www.svgrepo.com, Transformed by: SVG Repo Mixer Tools -->
<svg width="800px" height="800px" viewBox="0 0 1024 1024" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000">

<g id="SVGRepo_bgCarrier" stroke-width="0"/>

<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>

<g id="SVGRepo_iconCarrier">

<path d="M624.091894 890.30003c-107.648231 0-205.768186-63.702049-249.989793-162.271489l-4.189739-9.354217H129.12525V134.586654h744.148591V503.089126l1.361768 3.059369c15.598893 35.177628 23.502264 72.331355 23.502264 110.415794 0 150.938103-122.939959 273.735742-274.045979 273.735741z" fill="#FFFFFF"/>

<path d="M889.10618 499.73283V134.586654c0-8.783912-7.111907-15.833363-15.833363-15.833362H129.12525a15.784216 15.784216 0 0 0-15.833363 15.833362v584.086647c0 8.721455 7.051498 15.833363 15.833363 15.833362h230.536996c45.300782 100.995025 146.670549 171.625706 264.429648 171.625706 159.874574 0 289.879342-129.880877 289.879341-289.569104 0-41.560529-8.999952-81.051786-24.865055-116.830435z" fill="#27323A"/>

<path d="M754.279937 145.099909h63.331403v63.331403h-63.331403zM644.810213 145.099909h63.331403v63.331403h-63.331403z" fill="#FFFFFF"/>

<path d="M479.242837 486.002528c-10.325884 34.882749-16.510151 74.218376-17.749052 116.210984h-79.040876c2.536164-42.613083 16.01971-82.254851 37.91345-116.210984h58.876478zM444.732782 454.335802c21.212856-23.315917 46.81818-42.489193 75.577071-56.156014-11.504376 16.140528-21.523093 35.130529-29.993696 56.156014h-45.583375zM382.639256 633.87819h78.977395c1.361767 41.130497 7.546035 79.662374 17.812533 113.861167h-58.755659c-21.524117-33.271154-35.067048-72.112243-38.034269-113.861167zM445.289776 779.406083h45.273137c8.410194 20.7818 18.366455 39.582383 29.74694 55.602092-28.572544-13.607436-53.930088-32.530885-75.020077-55.602092zM608.258531 857.829555c-7.299278-0.434127-14.474667-1.237877-21.646983-2.349817-23.74902-14.100949-44.778601-41.004559-60.922201-76.073655h82.569184v78.423472zM608.258531 747.739357h-95.060585c-11.257619-33.768762-18.369527-72.546371-19.91457-113.861167h114.975155v113.861167zM608.258531 602.212488H493.159486c1.361767-42.115475 8.473675-81.821748 19.851089-116.210984h95.247956v116.210984zM608.258531 454.335802h-82.87635c16.202985-35.377286 37.356456-62.464172 61.229367-76.628601a250.843714 250.843714 0 0 1 21.646983-2.413298v79.041899z" fill="#81c2f3"/>

<path d="M334.272961 616.564289c0 24.705329 3.463804 48.578239 9.31019 71.49484h-183.101413V237.74822h681.931176v188.943703c-53.188795-60.95087-131.210904-99.69981-218.319996-99.69981-159.816213 0-289.819956 129.941287-289.819957 289.572176z" fill="#ebf1fa"/>

<path d="M639.924232 602.212488v-116.210984h96.355801c11.443966 34.389236 18.555874 74.095509 19.85416 116.210984H639.924232zM756.071736 633.87819c-1.545043 41.314797-8.720431 80.092406-19.974979 113.861167h-96.172525V633.87819h116.147504zM639.924232 454.335802v-79.040875c7.916681 0.493513 15.645992 1.422177 23.252436 2.660054 23.689635 14.224839 44.71512 41.251316 60.798311 76.380821h-84.050747zM729.602253 398.984562a242.076183 242.076183 0 0 1 73.844657 55.352264h-44.404883c-8.349785-20.655863-18.182156-39.335626-29.439774-55.352264zM663.176668 855.232982a236.758123 236.758123 0 0 1-23.252436 2.596573v-78.423472h83.74051c-16.01971 34.82234-36.922329 61.66247-60.488074 75.826899zM729.602253 834.203401c11.133729-15.892748 20.902619-34.325756 29.193018-54.797318h44.158126a242.715088 242.715088 0 0 1-73.351144 54.797318zM827.507191 747.739357h-57.581263c10.206089-34.198794 16.390356-72.73067 17.812533-113.861167h77.866479c-2.968244 41.748924-16.514246 80.590014-38.097749 113.861167zM787.800918 602.212488c-1.174396-41.992609-7.359688-81.327211-17.752123-116.210984h57.828019c21.89374 33.955109 35.377286 73.597901 37.849969 116.210984H787.800918z" fill="#81c2f3"/>

</g>

</svg>
```

### `public\ico\phone-receiver.svg`
```
<?xml version="1.0" encoding="iso-8859-1"?>
<!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
<svg height="800px" width="800px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
	 viewBox="0 0 512 512" xml:space="preserve">
<g>
	<path style="fill:#C20C3F;" d="M495.368,99.538c-25.195-30.309-147.125-55.941-239.367-55.941S41.829,69.228,16.634,99.537
		c-18.822,22.644-16.548,77.202-16.548,77.202s29.069,3.484,59.463,3.484s59.463-3.484,59.463-3.484v-47.431h273.977v47.431
		c0,0,29.069,3.484,59.463,3.484c30.393,0,59.463-3.484,59.463-3.484S514.19,122.182,495.368,99.538z"/>
	<polygon style="fill:#C20C3F;" points="470.608,389.063 470.608,459.867 41.393,459.867 41.393,389.063 256.001,354.93 	"/>
</g>
<path style="fill:#FF385C;" d="M433.847,217.918l36.762,171.145H41.393l36.762-171.145l78.837-15.383v-93.787
	c0-3.277,2.651-5.939,5.928-5.939h22.426c3.277,0,5.928,2.662,5.928,5.939v48.276h129.456v-48.276c0-3.277,2.651-5.939,5.928-5.939
	h22.426c3.277,0,5.928,2.662,5.928,5.939v93.787L433.847,217.918z"/>
<path style="fill:#750C20;" d="M470.12,468.402H41.881c-4.714,0-8.533-3.821-8.533-8.533s3.82-8.533,8.533-8.533h428.24
	c4.714,0,8.533,3.821,8.533,8.533S474.834,468.402,470.12,468.402z"/>
<g>
	<path style="fill:#FFFFFF;" d="M210.347,328.226h-12.231c-4.714,0-8.533-3.821-8.533-8.533s3.82-8.533,8.533-8.533h12.231
		c4.714,0,8.533,3.821,8.533,8.533S215.061,328.226,210.347,328.226z"/>
	<path style="fill:#FFFFFF;" d="M313.885,328.226h-12.231c-4.714,0-8.533-3.821-8.533-8.533s3.82-8.533,8.533-8.533h12.231
		c4.714,0,8.533,3.821,8.533,8.533S318.599,328.226,313.885,328.226z"/>
	<path style="fill:#FFFFFF;" d="M263.35,328.226h-12.232c-4.714,0-8.533-3.821-8.533-8.533s3.82-8.533,8.533-8.533h12.232
		c4.714,0,8.533,3.821,8.533,8.533S268.064,328.226,263.35,328.226z"/>
	<path style="fill:#FFFFFF;" d="M210.347,281.577h-12.231c-4.714,0-8.533-3.821-8.533-8.533s3.82-8.533,8.533-8.533h12.231
		c4.714,0,8.533,3.821,8.533,8.533S215.061,281.577,210.347,281.577z"/>
	<path style="fill:#FFFFFF;" d="M313.885,281.577h-12.231c-4.714,0-8.533-3.821-8.533-8.533s3.82-8.533,8.533-8.533h12.231
		c4.714,0,8.533,3.821,8.533,8.533S318.599,281.577,313.885,281.577z"/>
	<path style="fill:#FFFFFF;" d="M263.35,281.577h-12.232c-4.714,0-8.533-3.821-8.533-8.533s3.82-8.533,8.533-8.533h12.232
		c4.714,0,8.533,3.821,8.533,8.533S268.064,281.577,263.35,281.577z"/>
	<path style="fill:#FFFFFF;" d="M210.347,234.928h-12.231c-4.714,0-8.533-3.821-8.533-8.533s3.82-8.533,8.533-8.533h12.231
		c4.714,0,8.533,3.821,8.533,8.533S215.061,234.928,210.347,234.928z"/>
	<path style="fill:#FFFFFF;" d="M313.885,234.928h-12.231c-4.714,0-8.533-3.821-8.533-8.533s3.82-8.533,8.533-8.533h12.231
		c4.714,0,8.533,3.821,8.533,8.533S318.599,234.928,313.885,234.928z"/>
	<path style="fill:#FFFFFF;" d="M263.35,234.928h-12.232c-4.714,0-8.533-3.821-8.533-8.533s3.82-8.533,8.533-8.533h12.232
		c4.714,0,8.533,3.821,8.533,8.533S268.064,234.928,263.35,234.928z"/>
</g>
</svg>
```

### `public\ico\star-struck.svg`
```
<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
<svg width="800px" height="800px" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--twemoji" preserveAspectRatio="xMidYMid meet"><path fill="#FFCC4D" d="M36 18c0 9.941-8.059 18-18 18S0 27.941 0 18S8.059 0 18 0s18 8.059 18 18"></path><path fill="#664500" d="M18 21c-3.623 0-6.027-.422-9-1c-.679-.131-2 0-2 2c0 4 4.595 9 11 9c6.404 0 11-5 11-9c0-2-1.321-2.132-2-2c-2.973.578-5.377 1-9 1z"></path><path fill="#FFF" d="M9 22s3 1 9 1s9-1 9-1s-2 4-9 4s-9-4-9-4z"></path><path fill="#E95F28" d="M15.682 4.413l-4.542.801L8.8.961a1.252 1.252 0 0 0-2.331.411l-.745 4.797l-4.542.801a1.25 1.25 0 0 0-.318 2.361l4.07 1.932l-.748 4.812a1.253 1.253 0 0 0 1.235 1.442c.327 0 .65-.128.891-.372l3.512-3.561l4.518 2.145a1.25 1.25 0 0 0 1.631-1.731L13.625 9.73l3.165-3.208a1.252 1.252 0 0 0-1.108-2.109zm4.636 0l4.542.801L27.2.961a1.251 1.251 0 0 1 2.33.411l.745 4.797l4.542.801c.536.094.949.524 1.021 1.063s-.211 1.063-.703 1.297l-4.07 1.932l.748 4.812a1.253 1.253 0 0 1-1.235 1.442c-.327 0-.65-.128-.891-.372l-3.512-3.561l-4.518 2.145a1.25 1.25 0 0 1-1.631-1.731l2.348-4.267l-3.165-3.208a1.252 1.252 0 0 1-.217-1.459a1.259 1.259 0 0 1 1.326-.65z"></path></svg>
```

### `public\ico\stopwatch-time.svg`
```
<?xml version="1.0" encoding="iso-8859-1"?>
<!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
<svg height="800px" width="800px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
	 viewBox="0 0 512 512" xml:space="preserve">
<circle style="fill:#A0DBFD;" cx="246.646" cy="256.411" r="192.439"/>
<path style="fill:#87CEE9;" d="M155.052,392.479c-75.151-75.151-75.151-196.995,0-272.146
	c31.908-31.908,72.235-50.261,113.83-55.074c-56.371-6.523-115.073,11.83-158.316,55.074c-75.151,75.151-75.151,196.995,0,272.146
	c43.242,43.242,101.945,61.595,158.316,55.074C227.287,442.74,186.962,424.387,155.052,392.479z"/>
<path style="fill:#C1E9FD;" d="M338.228,392.479c75.151-75.151,75.151-196.995,0-272.146
	c-31.908-31.908-72.235-50.261-113.83-55.074c56.371-6.523,115.073,11.83,158.316,55.074c75.151,75.151,75.151,196.995,0,272.146
	c-43.242,43.242-101.945,61.595-158.316,55.074C265.993,442.74,306.318,424.387,338.228,392.479z"/>
<g>
	<path style="fill:#FED159;" d="M348.364,419.231c-41.749,25.76-93.326,35.594-144.834,23.395
		C100.515,418.227,36.783,314.939,61.181,211.923S188.869,45.175,291.885,69.573c101.102,23.945,164.356,123.876,143.61,224.961
		l-23.578-5.584l27.277,91.059l65.221-69.151l-23.745-5.624c26.641-126.029-52.051-250.961-178.091-280.813
		C174.626-5.884,46.333,73.275,16.028,201.229s48.856,256.245,176.809,286.55c63.976,15.152,128.038,2.938,179.894-29.058"/>
	<circle style="fill:#FED159;" cx="246.646" cy="256.411" r="21.935"/>
</g>
<path d="M367.267,451.34c-52.178,32.194-113.767,42.144-173.429,28.014C70.68,450.185-5.786,326.258,23.384,203.101
	S176.481,3.477,299.637,32.646c44.926,10.641,85.095,34.178,116.165,68.069c30.336,33.092,50.216,73.913,57.489,118.051
	c0.768,4.663,5.178,7.815,9.833,7.051c4.662-0.769,7.818-5.171,7.051-9.833c-7.815-47.427-29.172-91.284-61.76-126.832
	c-33.393-36.427-76.56-61.724-124.835-73.158c-64.11-15.182-130.292-4.491-186.358,30.104S21.917,135.05,6.733,199.157
	C-8.45,263.264,2.241,329.448,36.835,385.515c34.595,56.066,88.952,95.306,153.06,110.49c19.028,4.506,38.229,6.734,57.304,6.733
	c45.191-0.001,89.629-12.508,129.054-36.835c4.021-2.481,5.269-7.752,2.788-11.773C376.56,450.108,371.29,448.859,367.267,451.34z"
	/>
<path d="M511.64,308.302c-0.877-2.927-3.25-5.165-6.224-5.87l-15.756-3.731c2.877-16.3,4.117-32.838,3.689-49.277
	c-0.122-4.724-4.043-8.449-8.774-8.331c-4.724,0.123-8.453,4.052-8.331,8.774c0.465,17.869-1.189,35.868-4.915,53.495
	c-0.961,4.543,1.879,9.024,6.398,10.094l9.325,2.21l-44.886,47.592l-18.773-62.669l9.158,2.169c2.252,0.535,4.622,0.132,6.574-1.112
	c1.95-1.245,3.314-3.226,3.779-5.493c10.498-51.149,0.811-103.611-27.276-147.722c-28.146-44.205-71.737-75.203-122.744-87.284
	c-107.442-25.444-215.552,41.263-241,148.704c-7.985,33.717-7.104,69.02,2.548,102.093c9.358,32.061,26.749,61.546,50.293,85.268
	c1.672,1.685,3.873,2.528,6.072,2.528c2.179,0,4.359-0.827,6.028-2.483c3.353-3.329,3.374-8.746,0.046-12.1
	c-44.953-45.29-63.024-109.35-48.337-171.362c23.272-98.26,122.147-159.267,220.407-135.996
	c46.647,11.049,86.512,39.397,112.254,79.824c24.099,37.849,33.388,82.418,26.517,126.406l-14.794-3.503
	c-2.975-0.706-6.098,0.232-8.196,2.455c-2.098,2.223-2.85,5.397-1.972,8.325l27.277,91.059c0.877,2.927,3.25,5.165,6.224,5.87
	c2.973,0.703,6.098-0.232,8.196-2.455l65.221-69.151C511.765,314.404,512.517,311.23,511.64,308.302z"/>
<path d="M127.007,405.998c-2.781,3.819-1.94,9.171,1.879,11.952c21.493,15.654,45.618,26.724,71.703,32.902
	c15.448,3.659,31.037,5.466,46.523,5.466c36.689,0,72.766-10.155,104.775-29.905c4.021-2.481,5.269-7.752,2.788-11.773
	c-2.481-4.021-7.751-5.27-11.773-2.788c-41.629,25.687-90.768,33.625-138.369,22.35c-23.864-5.651-45.925-15.773-65.573-30.083
	C135.139,401.337,129.788,402.179,127.007,405.998z"/>
<path d="M237.114,227.033c-4.864,1.415-9.323,4.032-13.004,7.714c-11.889,11.889-11.889,31.232,0,43.12
	c5.758,5.759,13.416,8.931,21.56,8.931c8.145,0,15.801-3.171,21.56-8.931c3.682-3.682,6.3-8.141,7.714-13.005h57.656
	c4.725,0,8.555-3.831,8.555-8.555s-3.831-8.555-8.555-8.555h-57.656c-1.414-4.864-4.032-9.323-7.714-13.004
	c-3.681-3.682-8.14-6.3-13.004-7.714v-34.606c0-4.725-3.831-8.555-8.555-8.555s-8.555,3.831-8.555,8.555L237.114,227.033
	L237.114,227.033z M259.049,256.307c0,3.574-1.392,6.934-3.92,9.461s-5.887,3.919-9.461,3.919c-3.574,0-6.933-1.392-9.461-3.919
	c-5.217-5.217-5.217-13.706,0-18.922c2.528-2.527,5.887-3.92,9.461-3.92c3.574,0,6.934,1.392,9.461,3.92
	C257.658,249.373,259.049,252.733,259.049,256.307z"/>
<path d="M237.114,377.872v30.619c0,4.725,3.831,8.555,8.555,8.555s8.555-3.831,8.555-8.555v-30.619c0-4.725-3.831-8.555-8.555-8.555
	S237.114,373.147,237.114,377.872z"/>
<path d="M245.67,142.434c4.725,0,8.555-3.831,8.555-8.555v-30.619c0-4.725-3.831-8.555-8.555-8.555s-8.555,3.831-8.555,8.555v30.619
	C237.114,138.603,240.945,142.434,245.67,142.434z"/>
<path d="M313.994,374.217c-4.092,2.362-5.494,7.595-3.131,11.687l3.706,6.419c1.584,2.745,4.46,4.279,7.417,4.279
	c1.451,0,2.923-0.37,4.27-1.148c4.092-2.362,5.494-7.595,3.131-11.687l-3.706-6.419
	C323.319,373.256,318.087,371.854,313.994,374.217z"/>
<path d="M180.477,125.847l-3.706-6.418c-2.362-4.092-7.597-5.494-11.687-3.131c-4.092,2.362-5.494,7.595-3.131,11.687l3.706,6.418
	c1.584,2.745,4.46,4.279,7.417,4.279c1.451,0,2.924-0.37,4.27-1.148C181.437,135.171,182.839,129.938,180.477,125.847z"/>
<path d="M382.117,324.774l-6.419-3.706c-4.092-2.364-9.325-0.961-11.687,3.131c-2.362,4.092-0.96,9.324,3.131,11.687l6.419,3.706
	c1.347,0.778,2.819,1.148,4.27,1.148c2.957,0,5.833-1.535,7.417-4.279C387.611,332.369,386.209,327.137,382.117,324.774z"/>
<path d="M115.641,190.683c1.347,0.778,2.819,1.148,4.27,1.148c2.957,0,5.832-1.534,7.417-4.279c2.362-4.092,0.96-9.324-3.131-11.687
	l-6.418-3.706c-4.092-2.364-9.324-0.96-11.687,3.131c-2.362,4.092-0.96,9.324,3.131,11.687L115.641,190.683z"/>
<path d="M406.841,255.875c0-4.725-3.831-8.555-8.555-8.555h-30.619c-4.725,0-8.555,3.831-8.555,8.555s3.831,8.555,8.555,8.555
	h30.619C403.01,264.43,406.841,260.601,406.841,255.875z"/>
<path d="M84.499,255.875c0,4.725,3.831,8.555,8.555,8.555h30.619c4.725,0,8.555-3.831,8.555-8.555s-3.831-8.555-8.555-8.555H93.054
	C88.329,247.319,84.499,251.15,84.499,255.875z"/>
<path d="M371.428,191.83c1.451,0,2.923-0.37,4.27-1.148l6.419-3.706c4.092-2.362,5.494-7.595,3.131-11.687
	c-2.362-4.092-7.596-5.494-11.687-3.131l-6.419,3.706c-4.092,2.362-5.494,7.595-3.131,11.687
	C365.596,190.296,368.472,191.83,371.428,191.83z"/>
<path d="M113.509,340.74c1.451,0,2.924-0.37,4.27-1.148l6.418-3.706c4.092-2.362,5.494-7.595,3.131-11.687
	c-2.362-4.093-7.597-5.493-11.687-3.131l-6.418,3.706c-4.092,2.362-5.494,7.595-3.131,11.687
	C107.676,339.205,110.552,340.74,113.509,340.74z"/>
<path d="M318.264,138.682c2.957,0,5.833-1.534,7.417-4.279l3.706-6.418c2.362-4.092,0.96-9.324-3.131-11.687
	c-4.092-2.364-9.324-0.962-11.687,3.131l-3.706,6.418c-2.362,4.092-0.961,9.324,3.131,11.687
	C315.342,138.311,316.813,138.682,318.264,138.682z"/>
<path d="M177.345,374.217c-4.092-2.364-9.325-0.961-11.687,3.131l-3.706,6.419c-2.362,4.092-0.96,9.324,3.131,11.687
	c1.347,0.778,2.819,1.148,4.27,1.148c2.957,0,5.833-1.535,7.417-4.279l3.706-6.419C182.839,381.811,181.437,376.579,177.345,374.217
	z"/>
</svg>
```

### `public\ico\tiktok.svg`
```
<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
<svg width="800px" height="800px" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.45095 19.7926C8.60723 18.4987 9.1379 17.7743 10.1379 17.0317C11.5688 16.0259 13.3561 16.5948 13.3561 16.5948V13.2197C13.7907 13.2085 14.2254 13.2343 14.6551 13.2966V17.6401C14.6551 17.6401 12.8683 17.0712 11.4375 18.0775C10.438 18.8196 9.90623 19.5446 9.7505 20.8385C9.74562 21.5411 9.87747 22.4595 10.4847 23.2536C10.3345 23.1766 10.1815 23.0889 10.0256 22.9905C8.68807 22.0923 8.44444 20.7449 8.45095 19.7926ZM22.0352 6.97898C21.0509 5.90039 20.6786 4.81139 20.5441 4.04639H21.7823C21.7823 4.04639 21.5354 6.05224 23.3347 8.02482L23.3597 8.05134C22.8747 7.7463 22.43 7.38624 22.0352 6.97898ZM28 10.0369V14.293C28 14.293 26.42 14.2312 25.2507 13.9337C23.6179 13.5176 22.5685 12.8795 22.5685 12.8795C22.5685 12.8795 21.8436 12.4245 21.785 12.3928V21.1817C21.785 21.6711 21.651 22.8932 21.2424 23.9125C20.709 25.246 19.8859 26.1212 19.7345 26.3001C19.7345 26.3001 18.7334 27.4832 16.9672 28.28C15.3752 28.9987 13.9774 28.9805 13.5596 28.9987C13.5596 28.9987 11.1434 29.0944 8.96915 27.6814C8.49898 27.3699 8.06011 27.0172 7.6582 26.6277L7.66906 26.6355C9.84383 28.0485 12.2595 27.9528 12.2595 27.9528C12.6779 27.9346 14.0756 27.9528 15.6671 27.2341C17.4317 26.4374 18.4344 25.2543 18.4344 25.2543C18.5842 25.0754 19.4111 24.2001 19.9423 22.8662C20.3498 21.8474 20.4849 20.6247 20.4849 20.1354V11.3475C20.5435 11.3797 21.2679 11.8347 21.2679 11.8347C21.2679 11.8347 22.3179 12.4734 23.9506 12.8889C25.1204 13.1864 26.7 13.2483 26.7 13.2483V9.91314C27.2404 10.0343 27.7011 10.0671 28 10.0369Z" fill="#EE1D52"/>
<path d="M26.7009 9.91314V13.2472C26.7009 13.2472 25.1213 13.1853 23.9515 12.8879C22.3188 12.4718 21.2688 11.8337 21.2688 11.8337C21.2688 11.8337 20.5444 11.3787 20.4858 11.3464V20.1364C20.4858 20.6258 20.3518 21.8484 19.9432 22.8672C19.4098 24.2012 18.5867 25.0764 18.4353 25.2553C18.4353 25.2553 17.4337 26.4384 15.668 27.2352C14.0765 27.9539 12.6788 27.9357 12.2604 27.9539C12.2604 27.9539 9.84473 28.0496 7.66995 26.6366L7.6591 26.6288C7.42949 26.4064 7.21336 26.1717 7.01177 25.9257C6.31777 25.0795 5.89237 24.0789 5.78547 23.7934C5.78529 23.7922 5.78529 23.791 5.78547 23.7898C5.61347 23.2937 5.25209 22.1022 5.30147 20.9482C5.38883 18.9122 6.10507 17.6625 6.29444 17.3494C6.79597 16.4957 7.44828 15.7318 8.22233 15.0919C8.90538 14.5396 9.6796 14.1002 10.5132 13.7917C11.4144 13.4295 12.3794 13.2353 13.3565 13.2197V16.5948C13.3565 16.5948 11.5691 16.028 10.1388 17.0317C9.13879 17.7743 8.60812 18.4987 8.45185 19.7926C8.44534 20.7449 8.68897 22.0923 10.0254 22.991C10.1813 23.0898 10.3343 23.1775 10.4845 23.2541C10.7179 23.5576 11.0021 23.8221 11.3255 24.0368C12.631 24.8632 13.7249 24.9209 15.1238 24.3842C16.0565 24.0254 16.7586 23.2167 17.0842 22.3206C17.2888 21.7611 17.2861 21.1978 17.2861 20.6154V4.04639H20.5417C20.6763 4.81139 21.0485 5.90039 22.0328 6.97898C22.4276 7.38624 22.8724 7.7463 23.3573 8.05134C23.5006 8.19955 24.2331 8.93231 25.1734 9.38216C25.6596 9.61469 26.1722 9.79285 26.7009 9.91314Z" fill="#000000"/>
<path d="M4.48926 22.7568V22.7594L4.57004 22.9784C4.56076 22.9529 4.53074 22.8754 4.48926 22.7568Z" fill="#69C9D0"/>
<path d="M10.5128 13.7916C9.67919 14.1002 8.90498 14.5396 8.22192 15.0918C7.44763 15.7332 6.79548 16.4987 6.29458 17.354C6.10521 17.6661 5.38897 18.9168 5.30161 20.9528C5.25223 22.1068 5.61361 23.2983 5.78561 23.7944C5.78543 23.7956 5.78543 23.7968 5.78561 23.798C5.89413 24.081 6.31791 25.0815 7.01191 25.9303C7.2135 26.1763 7.42963 26.4111 7.65924 26.6334C6.92357 26.1457 6.26746 25.5562 5.71236 24.8839C5.02433 24.0451 4.60001 23.0549 4.48932 22.7626C4.48919 22.7605 4.48919 22.7584 4.48932 22.7564V22.7527C4.31677 22.2571 3.95431 21.0651 4.00477 19.9096C4.09213 17.8736 4.80838 16.6239 4.99775 16.3108C5.4985 15.4553 6.15067 14.6898 6.92509 14.0486C7.608 13.4961 8.38225 13.0567 9.21598 12.7484C9.73602 12.5416 10.2778 12.3891 10.8319 12.2934C11.6669 12.1537 12.5198 12.1415 13.3588 12.2575V13.2196C12.3808 13.2349 11.4148 13.4291 10.5128 13.7916Z" fill="#69C9D0"/>
<path d="M20.5438 4.04635H17.2881V20.6159C17.2881 21.1983 17.2881 21.76 17.0863 22.3211C16.7575 23.2167 16.058 24.0253 15.1258 24.3842C13.7265 24.923 12.6326 24.8632 11.3276 24.0368C11.0036 23.823 10.7187 23.5594 10.4844 23.2567C11.5962 23.8251 12.5913 23.8152 13.8241 23.341C14.7558 22.9821 15.4563 22.1734 15.784 21.2774C15.9891 20.7178 15.9864 20.1546 15.9864 19.5726V3H20.4819C20.4819 3 20.4315 3.41188 20.5438 4.04635ZM26.7002 8.99104V9.9131C26.1725 9.79263 25.6609 9.61447 25.1755 9.38213C24.2352 8.93228 23.5026 8.19952 23.3594 8.0513C23.5256 8.1559 23.6981 8.25106 23.8759 8.33629C25.0192 8.88339 26.1451 9.04669 26.7002 8.99104Z" fill="#69C9D0"/>
</svg>
```

### `public\ico\whatsapp.svg`
```
<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
<svg width="800px" height="800px" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M16 31C23.732 31 30 24.732 30 17C30 9.26801 23.732 3 16 3C8.26801 3 2 9.26801 2 17C2 19.5109 2.661 21.8674 3.81847 23.905L2 31L9.31486 29.3038C11.3014 30.3854 13.5789 31 16 31ZM16 28.8462C22.5425 28.8462 27.8462 23.5425 27.8462 17C27.8462 10.4576 22.5425 5.15385 16 5.15385C9.45755 5.15385 4.15385 10.4576 4.15385 17C4.15385 19.5261 4.9445 21.8675 6.29184 23.7902L5.23077 27.7692L9.27993 26.7569C11.1894 28.0746 13.5046 28.8462 16 28.8462Z" fill="#BFC8D0"/>
<path d="M28 16C28 22.6274 22.6274 28 16 28C13.4722 28 11.1269 27.2184 9.19266 25.8837L5.09091 26.9091L6.16576 22.8784C4.80092 20.9307 4 18.5589 4 16C4 9.37258 9.37258 4 16 4C22.6274 4 28 9.37258 28 16Z" fill="url(#paint0_linear_87_7264)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M16 30C23.732 30 30 23.732 30 16C30 8.26801 23.732 2 16 2C8.26801 2 2 8.26801 2 16C2 18.5109 2.661 20.8674 3.81847 22.905L2 30L9.31486 28.3038C11.3014 29.3854 13.5789 30 16 30ZM16 27.8462C22.5425 27.8462 27.8462 22.5425 27.8462 16C27.8462 9.45755 22.5425 4.15385 16 4.15385C9.45755 4.15385 4.15385 9.45755 4.15385 16C4.15385 18.5261 4.9445 20.8675 6.29184 22.7902L5.23077 26.7692L9.27993 25.7569C11.1894 27.0746 13.5046 27.8462 16 27.8462Z" fill="white"/>
<path d="M12.5 9.49989C12.1672 8.83131 11.6565 8.8905 11.1407 8.8905C10.2188 8.8905 8.78125 9.99478 8.78125 12.05C8.78125 13.7343 9.52345 15.578 12.0244 18.3361C14.438 20.9979 17.6094 22.3748 20.2422 22.3279C22.875 22.2811 23.4167 20.0154 23.4167 19.2503C23.4167 18.9112 23.2062 18.742 23.0613 18.696C22.1641 18.2654 20.5093 17.4631 20.1328 17.3124C19.7563 17.1617 19.5597 17.3656 19.4375 17.4765C19.0961 17.8018 18.4193 18.7608 18.1875 18.9765C17.9558 19.1922 17.6103 19.083 17.4665 19.0015C16.9374 18.7892 15.5029 18.1511 14.3595 17.0426C12.9453 15.6718 12.8623 15.2001 12.5959 14.7803C12.3828 14.4444 12.5392 14.2384 12.6172 14.1483C12.9219 13.7968 13.3426 13.254 13.5313 12.9843C13.7199 12.7145 13.5702 12.305 13.4803 12.05C13.0938 10.953 12.7663 10.0347 12.5 9.49989Z" fill="white"/>
<defs>
<linearGradient id="paint0_linear_87_7264" x1="26.5" y1="7" x2="4" y2="28" gradientUnits="userSpaceOnUse">
<stop stop-color="#5BD066"/>
<stop offset="1" stop-color="#27B43E"/>
</linearGradient>
</defs>
</svg>
```

### `public\logo.svg`
```
<svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13364 2933" width="13364" height="2933">
	<title>CASA DE RAÇÃO ATLANTICO - VARELA</title>
	<defs>
		<clipPath clipPathUnits="userSpaceOnUse" id="cp1">
			<path d="m0 0h13364v2933h-13364z"/>
		</clipPath>
	</defs>
	<style>
		.s0 { fill: #ffffff } 
		.s1 { fill: #29883d } 
		.s2 { fill: #42cff6 } 
		.s3 { fill: #d4d5d6 } 
		.s4 { fill: #55c385 } 
		.s5 { fill: #33cc33 } 
		.s6 { fill: #2c2e35 } 
		.s7 { fill: #fff28d } 
	</style>
	<g id="Page 1" clip-path="url(#cp1)">
		<path id="Path 1" class="s0" d="m4311.2 1659.8c227.2 1.8 404.3-110.9 400.7-558.1 0 0-166.3-1.8-350.6 5.3 3.6 238-12.5 282.7-46.5 282.7-37.6 0-51.9-50.1-51.9-379.3-3.6-313 10.8-395.3 53.7-395.3 37.6 0 48.3 50.1 46.5 248.6 0 0 137.7 7.2 345.3 7.2 10.7-284.4-80.5-524.1-375.7-524.1-297 0-424 209.3-424 661.9 0 468.6 116.3 651.1 402.5 651.1zm400.7-57.2c221.9-1.8 320.3 3.5 320.3 3.5l10.7-150.2c62.6 0 118.1 0 150.3 1.8 10.7 141.3 14.3 200.3 14.3 200.3 209.3-5.3 341.6-1.8 341.6-1.8-118-681.5-200.3-1282.6-200.3-1282.6 0 0-198.6-3.6-458 7.1-100.1 747.8-178.9 1221.9-178.9 1221.9zm404.3-957.1c0 0 26.9 246.9 55.5 549.2 0 0-51.9 1.8-109.1 0 21.4-257.6 42.9-452.6 53.6-549.2zm803.3 1007.2c228.9 0 384.6-103.8 384.6-359.6 0-198.6-62.6-297-305.9-406.1-89.5-39.4-123.5-102-123.5-169.9 0-66.2 14.3-103.8 46.5-103.8 34 0 60.9 50.1 41.2 202.1 159.2 3.6 323.8 17.9 323.8 17.9 30.4-307.7-84.1-474-359.6-474-223.6 0-390 93-390 343.4 0 193.2 64.4 311.3 275.5 416.9 123.5 62.6 153.9 110.9 153.9 177.1 0 76.9-14.3 100.1-48.3 100.1-46.5 0-62.6-66.1-51.9-209.3-200.4 0-332.8-3.5-332.8-3.5-19.6 296.9 78.8 468.7 386.5 468.7zm384.6-50.1c221.8-1.8 320.2 3.5 320.2 3.5l10.7-150.2c62.6 0 118.1 0 150.3 1.8 10.7 141.3 14.3 200.3 14.3 200.3 209.3-5.3 341.7-1.8 341.7-1.8-118.1-681.5-200.4-1282.6-200.4-1282.6 0 0-198.5-3.6-457.9 7.1-100.2 747.8-178.9 1221.9-178.9 1221.9zm404.3-957.1c0 0 26.8 246.9 55.4 549.2 0 0-51.9 1.8-109.1 0 21.5-257.6 42.9-452.6 53.7-549.2zm790.7 991.1c93 14.3 175.3 21.4 252.2 21.4 339.9 0 522.4-168.1 522.4-615.4 0-468.7-141.4-676.2-536.7-676.2-69.8 0-150.3 9-236.2 23.3 0 0 1.8 640.4-1.7 1246.9zm329.1-236.2c0 0-8.9-382.8-10.7-762.1 82.3-8.9 107.3 85.9 107.3 388.2 0 354.2-26.8 379.3-96.6 373.9zm513.4 223.6c302.4 3.6 565.3 12.6 565.3 12.6 0-198.6 3.6-298.8 3.6-298.8-150.3-5.4-250.4-12.5-250.4-12.5-5.4-96.6-5.4-157.4-5.4-157.4 119.9 0 216.5 1.8 216.5 1.8-3.6-175.4-1.8-302.4-1.8-302.4-141.4 3.6-207.5 1.8-221.9 1.8 0 0-1.7-73.3 0-166.4 94.9-3.5 266.6-5.3 266.6-5.3-5.4-186.1-3.6-316.7-3.6-316.7-431.1 3.6-583.2 5.4-583.2 5.4 10.8 720.9 14.3 1237.9 14.3 1237.9zm1431.2 44.8c214.6-12.6 336.3-21.5 336.3-21.5-109.1-300.5-164.6-475.9-178.9-522.4 93-66.2 150.3-169.9 150.3-325.6 0-295.1-150.3-450.8-479.5-450.8-84 0-178.9 10.8-286.2 30.5 1.8 753.1-7.2 1227.1-7.2 1227.1 191.5-3.5 331-1.7 331-1.7l-7.2-384.7c12.6 0 25.1-1.7 25.1-1.7 75.1 275.4 116.3 450.8 116.3 450.8zm-141.4-665.5c0 0-3.5-191.4-5.3-379.3 80.5-7.1 116.3 73.4 116.3 198.6 0 127-41.2 178.9-111 180.7zm459.8 599.3c221.8-1.8 320.2 3.5 320.2 3.5l10.7-150.2c62.7 0 118.1 0 150.3 1.8 10.7 141.3 14.3 200.3 14.3 200.3 209.3-5.3 341.7-1.8 341.7-1.8-118.1-681.5-200.4-1282.6-200.4-1282.6 0 0-198.5-3.6-457.9 7.1-100.2 747.8-178.9 1221.9-178.9 1221.9zm404.3-957.1c0 0 26.8 246.9 55.4 549.2 0 0-51.8 1.8-109.1 0 21.5-257.6 43-452.6 53.7-549.2zm1227.2 456.2c0 0-166.4-1.8-350.6 5.3 3.5 238-12.6 282.7-46.6 282.7-37.5 0-51.8-50.1-51.8-379.3-3.6-313 10.7-395.3 53.6-395.3 37.6 0 48.3 50.1 46.5 248.6 0 0 137.8 7.2 345.3 7.2 10.7-284.4-80.5-524.1-375.7-524.1-296.9 0-423.9 209.3-423.9 661.9 0 438.2 101.9 626.1 348.8 649.3-14.3 91.3-30.4 157.4-30.4 157.4 109.1-7.1 150.3 7.2 150.3 34 0 21.5-26.9 32.2-55.5 32.2-44.7 0-100.2-10.7-143.1-30.4-9 78.7-17.9 136-17.9 136 44.7 16.1 100.2 25 152.1 25 141.3 0 234.3-68 234.3-173.5 0-80.5-66.2-134.2-178.9-137.7 0-16.1 1.8-44.8 1.8-44.8 198.6-17.9 345.3-146.7 341.7-554.5zm0 500.9c221.8-1.8 320.2 3.5 320.2 3.5l10.7-150.2c62.6 0 118.1 0 150.3 1.8 10.7 141.3 14.3 200.3 14.3 200.3 209.3-5.3 341.7-1.8 341.7-1.8-118.1-681.5-200.4-1282.6-200.4-1282.6 0 0-198.5-3.6-457.9 7.1-100.2 747.8-178.9 1221.9-178.9 1221.9zm404.3-957.1c0 0 26.8 246.9 55.4 549.2 0 0-51.9 1.8-109.1 0 21.5-257.6 42.9-452.6 53.7-549.2zm-121.7-350.6c-5.3-43 12.5-71.6 46.5-71.6 66.2 0 91.3 76.9 204 76.9 114.5 0 177.1-101.9 148.5-284.4-107.4 10.7-152.1 10.7-152.1 10.7 7.1 62.7-14.3 78.8-48.3 78.8-64.4 0-96.6-87.7-189.6-87.7-128.8 0-184.3 123.4-175.3 284.4 119.8-7.1 166.3-7.1 166.3-7.1zm951.7 1368.5c275.5 0 402.5-168.2 406.1-636.9 0-418.6-76.9-667.2-407.9-667.2-322 0-404.3 273.7-404.3 669 1.8 413.3 109.2 635.1 406.1 635.1zm3.6-245.1c-41.1 0-57.2-44.7-57.2-393.5 0-345.3 5.3-409.7 53.6-409.7 39.4 0 53.7 48.3 53.7 397.1 0 365-14.3 406.1-50.1 406.1z"/>
		<path id="Path 2" class="s1" d="m6466.7 2887.9c144.3-1.2 208.3 2.3 208.3 2.3l7-97.8c40.8 0 76.8 0 97.8 1.2 7 91.9 9.3 130.4 9.3 130.4 136.2-3.5 222.3-1.2 222.3-1.2-76.8-443.5-130.3-834.6-130.3-834.6 0 0-129.2-2.4-298 4.6-65.2 486.6-116.4 795.1-116.4 795.1zm263-622.8c0 0 17.5 160.6 36.1 357.4 0 0-33.7 1.1-71 0 14-167.7 28-294.5 34.9-357.4zm253.8 33.7l124.6-1.1c3.5 376 1.1 614.6 1.1 614.6 140.9-3.5 209.6-1.1 209.6-1.1-3.5-296.9-4.7-482-4.7-613.5 76.8 0 123.4 1.1 123.4 1.1-1.2-130.3 3.5-206 3.5-206-301.5 5.8-458.7 4.7-458.7 4.7 3.5 150.1 1.2 201.3 1.2 201.3zm493.6 601.9c0 0 280.5 1.1 376 4.6 0 0-1.2-76.8 1.1-192 0 0-75.6 0-169.9-3.5-8.2-490.1-4.7-606.5-4.7-606.5-140.8 2.3-209.5 0-209.5 0 7 476.1 7 797.4 7 797.4zm388.8-12.8c144.3-1.2 208.3 2.3 208.3 2.3l7-97.8c40.8 0 76.9 0 97.8 1.2 7 91.9 9.3 130.4 9.3 130.4 136.2-3.5 222.4-1.2 222.4-1.2-76.9-443.5-130.4-834.6-130.4-834.6 0 0-129.2-2.4-298 4.6-65.2 486.6-116.4 795.1-116.4 795.1zm263.1-622.8c0 0 17.4 160.6 36 357.4 0 0-33.7 1.1-71 0 14-167.7 28-294.5 35-357.4zm-110.6-203.7c71-69.9 105.9-99 105.9-99 83.8 67.5 114.1 97.8 114.1 97.8 53.5-61.7 85-90.8 85-90.8-107.1-93.1-138.6-125.7-138.6-125.7-97.7 11.6-126.8 11.6-126.8 11.6-87.4 94.3-125.8 130.4-125.8 130.4 64.1 52.4 86.2 75.7 86.2 75.7zm419 823c119.9 0 196.8 3.5 196.8 3.5-10.5-165.3-15.2-279.4-17.5-359.7 87.3 233.9 145.5 399.2 145.5 399.2 130.4-10.4 188.6-19.7 188.6-19.7-15.1-519.2-21-830-21-830-117.5 1.1-189.7-3.5-189.7-3.5 16.3 202.5 25.6 346.9 30.3 441.2-89.7-248-138.6-395.8-138.6-395.8-114 3.5-197.9 9.3-197.9 9.3 8.2 470.3 3.5 755.5 3.5 755.5zm543.7-585.6l124.5-1.1c3.5 376 1.2 614.6 1.2 614.6 140.8-3.5 209.5-1.1 209.5-1.1-3.5-296.9-4.6-482-4.6-613.5 76.8 0 123.3 1.1 123.3 1.1-1.1-130.3 3.5-206 3.5-206-301.5 5.8-458.6 4.7-458.6 4.7 3.5 150.1 1.2 201.3 1.2 201.3zm497 607.7c142-1.2 211.9 0 211.9 0-3.5-420.2-5.8-810.2-5.8-810.2-138.6 1.2-210.7 1.2-210.7 1.2 5.8 452.8 4.6 809 4.6 809zm514.5 18.6c147.9 1.2 263.1-72.2 260.8-363.2 0 0-108.3-1.1-228.2 3.5 2.4 154.8-8.1 183.9-30.2 183.9-24.5 0-33.8-32.5-33.8-246.7-2.3-203.8 7-257.3 34.9-257.3 24.5 0 31.5 32.6 30.3 161.8 0 0 89.6 4.7 224.7 4.7 7-185.1-52.4-341.1-244.5-341.1-193.2 0-275.9 136.2-275.9 430.7 0 305 75.7 423.7 261.9 423.7zm548.3 2.3c179.3 0 261.9-109.4 264.3-414.4 0-272.4-50.1-434.2-265.4-434.2-209.6 0-263.1 178.1-263.1 435.4 1.1 268.9 71 413.2 264.2 413.2zm2.3-159.4c-26.7 0-37.2-29.1-37.2-256.1 0-224.7 3.5-266.6 34.9-266.6 25.6 0 34.9 31.4 34.9 258.4 0 237.5-9.3 264.3-32.6 264.3z"/>
		<path id="Path 3" fill-rule="evenodd" class="s2" d="m404 1201.1c-20.7-20.7-32.5-33.6-42.7-46.3-10.2-12.7-18.7-25.2-23.4-34.7-4.8-9.5-5.8-16-5.6-23.3 0.2-7.2 1.6-15.3 7.4-29.6 5.9-14.4 16.2-35.1 31.7-61.7 15.4-26.6 36-59.1 59.7-92.9 23.7-33.9 50.6-69.1 73.9-93.6 23.4-24.6 43.3-38.4 67.3-50.7 24.1-12.3 52.3-22.9 90.6-31 38.3-8.1 86.5-13.7 126.3-15 39.7-1.4 70.9 1.5 100.3 7.3 29.4 5.7 57 14.2 81.8 26.7 24.8 12.4 47 28.8 63.5 44.8 16.6 15.9 27.6 31.4 37.6 48.9 10.1 17.5 19.1 37 28.2 49.6 9.1 12.6 18.1 18.3 40.2 28.9 22 10.5 57 25.8 94.4 39.4 37.4 13.6 77.3 25.5 104 35.4 26.7 9.8 40.4 17.5 48.2 24.6 7.8 7 9.9 13.5 8.5 24.3-1.4 10.8-6.3 26.1-14.6 44.5-8.4 18.3-20.3 39.9-35 62.4-14.8 22.5-32.4 46-51.2 65.1-18.8 19.1-38.8 33.7-56.2 43.4-17.3 9.6-32 14.2-46.5 17-14.5 2.8-28.8 3.7-48.2 3.9-19.4 0.1-43.9-0.6-69.6 0.3-25.8 0.9-52.8 3.4-73.8 9.7-21 6.3-35.9 16.4-47.9 28.7-12.1 12.3-21.3 26.9-28.3 40.9-7 14-11.7 27.4-16.9 55.1-5.2 27.7-10.9 69.6-13.7 90.6-2.9 21-2.9 21-2.9 21 0 0 0 0-14.3-10.7-14.2-10.7-42.8-32.1-62.1-44.6-19.4-12.6-29.6-16.3-38.3-17.4-8.8-1.1-16 0.5-22.3 4.4-6.2 3.8-11.5 9.8-15.7 16.4-4.2 6.5-7.4 13.5-9.8 21-2.4 7.5-4.2 15.5-4.9 20.7-0.8 5.1-0.5 7.4-0.3 8.5 0.1 1.2 0.1 1.2 0.1 1.2 0 0 0 0-7-4-7-3.9-21.1-11.8-34.6-16.9-13.5-5.2-26.5-7.6-36.8-7.2-10.2 0.4-17.7 3.5-25.5 10.7-7.9 7.2-16.2 18.5-21.9 30.3-5.7 11.8-8.8 24.1-8.6 40.3 0.3 16.2 3.9 36.2 8.2 53 4.2 16.8 9.1 30.5 17.8 52.2 8.7 21.7 21.3 51.4 39.3 79.4 18 28 41.4 54.2 65.8 76 24.3 21.8 49.5 39.1 62.2 47.8 12.6 8.7 12.6 8.7 12.6 8.7 0 0 0 0-1.5 6.4-1.4 6.4-4.3 19.3-8.1 31.4-3.8 12.1-8.5 23.5-10.9 29.1-2.4 5.7-2.4 5.7-2.4 5.7 0 0 0 0-10.6-0.2-10.6-0.2-31.9-0.6-60.8 1.9-28.9 2.5-65.4 8-94.7 15.2-29.2 7.2-51.1 16.1-77.8 29.5-26.6 13.4-58 31.2-90.2 60.2-32.1 28.9-65 69.1-91.5 111.4-26.5 42.3-46.6 86.7-58.5 119.6-12 33-15.7 54.5-18.4 74.9-2.7 20.4-4.4 39.5-5.4 53.1-1.1 13.6-1.5 21.6-1.7 25.6-0.2 4-0.2 4-0.2 4 0 0 0 0-11.5 0.6-11.5 0.6-34.6 1.9-63.6 7-29 5.1-64.1 14.1-87.8 21.7-23.8 7.7-36.4 14-42.7 17.2-6.2 3.2-6.2 3.2-6.2 3.2 0 0 0 0-6.7-21.5-6.7-21.4-20.1-64.3-28.3-106.8-8.2-42.5-11.2-84.5-13.1-120.4-1.8-35.9-2.5-65.5 1.8-102.4 4.2-36.9 13.4-81 25.6-124.6 12.3-43.5 27.7-86.5 43.2-122.8 15.4-36.3 30.9-66 48.8-96.4 17.8-30.5 37.9-61.6 67.8-104.9 29.8-43.2 69.4-98.4 99-147.7 29.6-49.3 49.2-92.6 64.6-131.8 15.5-39.1 26.8-74 34.6-100.4 7.7-26.4 11.8-44.2 13.9-53.1 2-8.9 2-8.9 2-8.9 0 0 0 0 14.5 12.6 14.6 12.5 43.6 37.6 75.2 56.1 31.7 18.4 65.9 30.4 93.7 36.6 27.8 6.2 49.1 6.8 67.2 4.3 18.1-2.5 32.9-7.9 46.2-17.5 13.4-9.6 25.3-23.3 34.6-38.7 9.3-15.4 16-32.5 21.1-52.2 5.2-19.7 8.7-41.9 9.6-68.8 1-26.9-0.5-58.4-5.8-94.2-5.3-35.8-14.3-75.9-23.2-106.9-8.9-31.1-17.5-53-26.5-67-8.9-14-18-20.1-23.4-21.3-5.4-1.1-6.9 2.8-6.5 15.4 0.5 12.6 3 33.9 5.6 53.1 2.6 19.3 5.3 36.4 9.1 61.8 3.7 25.4 8.5 59.1 10.4 92.2 1.8 33.2 0.7 65.8-3.1 93.3-3.9 27.5-10.4 49.9-19.8 64.4-9.4 14.6-21.6 21.4-34.6 24.7-13 3.3-26.8 3.2-42 1-15.1-2.2-31.6-6.5-52.3-15.3-20.6-8.9-45.4-22.2-72.5-43-27.1-20.9-56.6-49.2-77.2-69.9z"/>
		<path id="Path 4" fill-rule="evenodd" class="s0" d="m28.4 2646.9c69.5-62 173.4-106.9 314.7-133-22.9-152.1 15.9-296.6 177.9-417.2 55.8-41.5 131.5-66.6 244.8-57.9 35.4 2.8 59.8-1.4 67.4-28.7 10.2-36.9 19.5-79.3 24.1-123.6-133.9-74.6-207.5-185.1-209.5-312-0.1-5.9 2.8-11 7.8-13.9 5.1-3 11-3 16.1 0 107.4 62.9 189.3 167.7 234 273.3 0.8 1.8 2.8 2.7 4.7 2.2 1.9-0.6 3-2.4 2.7-4.4-11.8-73.4-44.3-154.5-92.6-209.6-27.5-31.3-47.1-62.8-43.4-92.7 0.3-2.7 1.8-4.9 4.3-6.1 2.4-1.3 5.1-1.3 7.5 0 106.5 55.6 153.2 166.7 176.9 290.9 62-15.7 166.9 28.1 209.6 107.7 50.7 16 62.9 69.3 17.2 127.2-33.3 42.2-76 63.8-125.4 72.8-6.8 1.2-11.8 6.7-12.3 13.7-10.3 124.4-50.1 208.2-126 245.2 14 66.4 27.4 130.9 40.3 193.8 117.6 31.4 235.2 62.6 352.7 94.2 388.1 104.3 771.9 143.7 1146.3 30.6-274.1 161.3-593.9 167.8-927.4 110.4-112.3-19.4-224.4-41.5-334.1-72.4-217.2-61.3-424.2-117.8-618.8-132.7-194.5-14.9-381.3-3.8-559.5 42.2zm594.3-132.5c8.1-0.2 16.3-0.3 38.7 2.5 22.4 2.9 59.2 8.9 94.4 15.1 35.2 6.2 68.9 12.6 90.1 16.6 21.3 3.9 30.2 5.4 34.6 6.1 4.4 0.8 4.4 0.8 4.4 0.8 0 0 0 0-8.1-6.9-8.1-6.8-24.4-20.5-38.6-36.4-14.3-16-26.5-34.2-35.4-52.4-8.9-18.2-14.5-36.4-20.2-55.6-5.6-19.3-11.2-39.6-18.5-59.3-7.2-19.7-16-38.6-26.6-54.6-10.5-16-22.8-29-35.7-38.3-12.8-9.4-26.2-15.1-39.1-18.2-12.9-3.1-25.3-3.7-32.3-3.7-7 0-8.7 0.4-9.9 1.3-1.2 0.9-1.9 2.1-1.2 5.3 0.7 3.2 2.9 8.4 11.3 16.8 8.4 8.5 23.2 20.3 36.7 31.1 13.5 10.8 25.8 20.5 34.7 33.4 9 12.9 14.5 29.1 18 45.2 3.5 16.2 5 32.3 3.2 48-1.8 15.6-6.7 30.9-15.4 43.8-8.6 13-20.9 23.7-33 31.9-12.1 8.1-24.1 13.6-32.7 17.8-8.7 4.2-14 6.9-19.4 9.7zm407.4-593.7c0 15.1 12.2 27.2 27.2 27.2 15 0 27.2-12.1 27.2-27.2 0-15-12.2-27.2-27.2-27.2-15 0-27.2 12.2-27.2 27.2z"/>
		<path id="Path 5" fill-rule="evenodd" class="s3" d="m1286.7 2261.5c0-16.8 0-33.5 0.6-48.1 0.6-14.5 1.9-26.9 4.6-37.3 2.7-10.4 6.7-18.9 11.2-24.7 4.6-5.7 9.8-8.7 14.5-10.3q6.9-2.5 12.3-1c3.5 1 6.6 3.3 8.3 6.4 1.8 3 2.2 6.8 2.4 13.3 0.2 6.5 0.3 15.6 0.3 20.1 0 4.5 0 4.5 0 4.5 0 0 0 0 5.7 0 5.7 0 17.1 0 36.6 3.3 19.6 3.2 47.3 9.7 70.3 20.3 22.9 10.6 41.1 25.3 54.3 37.7 13.3 12.4 21.6 22.4 27.5 32.4 6 10 9.6 19.9 11.2 26.1 1.5 6.3 1.1 9-0.9 14.9-1.9 5.9-5.3 15.1-13.9 25.1-8.7 10-22.7 20.8-35.7 28.5-13.1 7.7-25.2 12.3-33.9 15.1-8.6 2.8-13.7 3.7-16.3 4.1-2.5 0.5-2.5 0.5-4.7 10.2-2.2 9.7-6.5 29.2-11.6 45.9-5 16.7-10.8 30.6-16.9 43-6.1 12.5-12.6 23.4-17.8 31.4-5.2 7.9-9.2 12.9-11.2 15.4-2 2.5-2 2.5 2.6 4.9 4.6 2.4 13.9 7.3 21.4 12.4 7.5 5 13.2 10.3 17 15.1 3.9 4.8 5.9 9.1 6.6 13.4 0.7 4.4 0.1 8.7-0.1 10.9-0.3 2.2-0.3 2.2-4.8 2.1-4.4 0-13.2-0.1-33.3-1.5-20.2-1.4-51.6-4.1-67.3-5.5-15.7-1.3-15.7-1.3-15.7-1.3 0 0 0 0 0.9-8.3 0.9-8.3 2.7-24.9 3.3-41.7 0.5-16.8 0-33.9-3.7-50.2-3.7-16.2-10.4-31.6-17.2-42.7-6.8-11.1-13.6-17.9-19.9-22.8-6.4-4.9-12.3-7.9-18.3-9.6-6-1.7-12-2-15.4-1.9-3.5 0.2-4.4 0.9-4.8 1.7-0.3 0.8-0.2 1.8 2.9 5.8 3.1 4 9.3 11 15.9 19.7 6.5 8.7 13.5 19.1 19.2 30.3 5.8 11.3 10.3 23.4 10.6 37.1 0.3 13.8-3.6 29.1-7.9 41.2-4.3 12-9 20.8-12.7 26.1-3.7 5.3-6.5 7.2-15.7 8.5-9.1 1.4-24.7 2.1-39 2.1-14.3-0.1-27.4-0.9-40.7-3.1-13.2-2.1-26.7-5.6-38-10.8-11.3-5.1-20.3-11.9-28.3-21.3-7.9-9.3-14.7-21.1-18.6-33.1-3.9-12-4.7-24.1-3.5-39.4 1.3-15.3 4.7-33.7 11.4-53.4 6.8-19.7 16.9-40.6 31.1-60.8 14.2-20.3 32.5-39.8 49.1-53.9 16.5-14 31.2-22.6 46.7-29.3 15.4-6.7 31.5-11.6 43.2-14.1 11.6-2.6 18.9-2.7 26.1-2.9zm121.3-0.2c0 11.3 9.2 20.5 20.5 20.5 11.3 0 20.5-9.2 20.5-20.5 0-11.3-9.2-20.5-20.5-20.5-11.3 0-20.5 9.2-20.5 20.5z"/>
		<path id="Path 6" fill-rule="evenodd" class="s4" d="m2168.2 2030.3c86.9 119.5 104.4 222.8 85.9 384.1-2.6 22.7-17.2 91.4-11.4 107.7 47 0.7 82.2-140.9 89.7-197.7 26.3-200.6-84.7-313.7-111.3-466.7-7.8-45.4-15.6-107 21.6-142.3 4.1-4 9-7.6 14.6-10 5.5-2.4 11.7-3.7 20.8-2.4 9 1.3 20.9 5.2 27.6 10.6 6.7 5.5 8.2 12.5 7.9 21.2-4 140.9 51.8 246.7 78.9 382.1 28.3 141.1 17.6 250.4-35.5 368.4-11.5 25.6-25.6 47.6-39.7 69.8-62.7 98.4-123.2 77.2-236.2 77.2-59.5 0-373.9 8.2-402.6-7.5-10.7-37.6 24.1-71.4 47.6-82.6 19.2-9.2 37.9-6.1 59.3-5.5 6.6 0.2 58.4 4.1 61.2-2 0.6-1.3 1.9-0.9 2.8-1.5-5.4-12.7 0.8-1.6-8-10.5-27.9-28.1-20-12.8-52.3-56.2-16.7-22.5-30.3-48.6-41.7-80.9-11.5-32.4-16.8-71.2-12.5-108.5 4.2-37 22.4-62.6 36-87.4-17 7.9-38 35.5-44.8 61.8-16.9 65.4 11.7 121.1-40.4 277.3-32.1 96.4-10.3 102.9-103.6 103.5-33.4 0.3-58.5-4.2-54.3-45.6 1.3-13.3 10.7-24.2 18.9-31.9 13.7-12.8 21.9-7.5 40-10.7 56.5-113.1 22-253.4-13.1-368.4-43.6-142.9-72.9-212.3-3-355.2 12.1-24.7 20.5-71-4.2-83.1-24.8-12.2-52.4-6.7-77.3-29.3-8.7-7.9-39.5-53.7-36.2-72.7 1.6-9.9 21.7-31.2 23.7-83.5 1.5-39.6 4.2-62.3 23.8-87.3 61.3-77.8 77.8-37.4 104.2-109.5 11.5-31.4 11.4-62 19.6-87.7 58.3-11.5 84.7 82.8 109.6 125.4 20.7 35.3 31.2 25.8 57.5 60.4 17.2 22.6 30.4 42.8 43.6 75.7 14.7 36.8 10.9 66.3 20.5 100.1 18.7 65.4 81.5 132 116.8 182 23 32.5 85.9 94.5 114.1 125.4 28.1 30.8 56 58.3 81.9 93.9z"/>
		<path id="Path 7" fill-rule="evenodd" class="s1" d="m142 2734c580.7-39.1 1086.9 298.4 1494.5 167.8-476.6-25.4-1022.7-332.3-1494.5-167.8zm-15.6-1794.1l67.6-48.1 656.5-466.5 93.2-66.3 345-245.2 278.3 197.7 226 160.6 377.5 268.3 108.9 77.5 171.7 122q0 370.3 0 740.7c0 28.5 23.3 51.8 51.8 51.8 28.5 0 51.8-23.3 51.8-51.8v-767.5c0-17.3-7.7-32.2-21.8-42.2l-420.5-298.9-208.4-148.1-79-56.1-198-140.7-301.7-214.5c-22.3-15.8-50.8-15.8-73.1 0l-601 427.2-271.7 193.1-334.9 238c-14.2 10-21.8 24.9-21.8 42.2v767.5c0 28.5 23.3 51.8 51.8 51.8 28.5 0 51.8-23.3 51.8-51.8zm135.3-96.2l-67.7 48.1"/>
		<path id="Path 8" fill-rule="evenodd" class="s5" d="m1873.9 1590h612.6c9.8 0 17.7-8 17.7-17.8 0-9.7-7.9-17.7-17.7-17.7h-612.6c-2 0-3.9 0.4-5.7 1 1.4 7 2.4 14.1 3.4 21.4 0.5 4.4 1.1 8.7 1.6 13q0.4 0 0.7 0.1z"/>
		<path id="Path 9" fill-rule="evenodd" class="s6" d="m1999.2 1565.7c-57.7 2.8-107 7.6-127.5 11.9q0.4 3.6 0.9 7.1c21.1 2.2 70.3 2.1 127.5-0.6 76.3-3.8 138-10.9 137.8-16-0.3-5-62.4-6.1-138.7-2.4z"/>
		<path id="Path 10" fill-rule="evenodd" class="s7" d="m1927.3 658.6l9.4-32.4c13.1 19.9-6.3 62.4-5 85.8l0.6-0.1 17.9-40.5c7.4-15.1-0.3-6.2 11.1-13.6-4.2 48.3-28.9 92-32.4 114.5 13.9-3.9 25.4-18.7 35.1-25.4-2.7 28-30.4 39.4-33.9 50.4l32.4-13.1c-10.4 24-16.3 17.6-28.7 34l35.3 5.1c-5.2 7 4.9-0.5-7.6 6.9l-35.1 9.9c47.9 28.1 74.8 75.8 117.1 133.3 63.4 86 166.1 213.4 214.8 304.4 46.4 86.8 8.2 32.9 82.2 109.8l26.2 37 57.7 41.5c10.4 8.4 14.5 13.6 25.3 23.6 8.1 7.5 17.9 17.6 23.3 32.1-3 2.8 0 1.8-7 4.2l-2.6 2c13.3 8.1 18.2 15 32.6 24.9 6 4.1 10 9.3 14.8 14.7 8.7 9.8 10.2 9.2 11.2 24.7-24.8 4.1-31.1-12.7-63.7-22.1l-1.5 3.5 32 47.3c22.2 29.1 41.6 64.1 67.9 91.2 8.6 8.8 34.7 31.6 28.7 48.4-16.3 20.2-68.9-43.8-83-54.3-13.5-10-15-11.6-26.1-22.4l-106.9-87c3.4 20.5 28.7 78 37.6 100.9 34.3 88.3 80.3 232.5 106.5 322.1 20.4 69.6 55.1 135 79 202.3 16.4 46.2 79.6 165.9 65 216-0.7-0.3-1.9-1.8-2.1-1.2-2 5.5-40.5-48.5-41.9-50.9-12.1-20.4-22.4-44.5-35-66.5-16.6-28.9-16.2-17.4-37.5-63.4-15.2-32.7-18-37.3-37-63.7-20.1-28-60.7-154-92.6-214.9-27-51.5-44.4-86.4-63.2-128.3-7.1-37.2-11-74.6-9.9-113.8 0.5-16.3-4-30.4-16.9-41-10.5-8.6-26.4-14.1-39.8-16-5.4-0.8-10.5-1-15.6-0.6-6.4-10.5-13.8-23.1-23.2-40.1-31-56.3-43.2-83.9-85.2-113.4-8.6-6.1-55.8-30.1-64.4-28.4-13.7 2.6-12.6 14.2-29.4 20.5-16.4 6.2-27.9 0.2-31.2 18.3 10.8 6.9 47.4 14.5 63.4 18.4 14.6 3.6 15.7 2.5 19.6 14.8-0.8 0.6-2.3 0.2-2.7 1.3l-22.2 2.9c-29.6-1.7-53-8.2-77.6-3.8-7.3 1.4-127.7 11.8-135.9 10.7-11-33.7 112.3-30.2 141.9-78.6-7.4-16.2-28.8-48.1-43.1-57.4-4.2-2.8-8.6-5-13.5-8.8-46.1-35.3-100.4-106.2-126.4-158.1-59-117.5-14.9-197.2-26.1-254.5-6.3-32.3-26.9-50-44.8-33.7-0.4 0.4-1.4 1.4-1.8 1.7-0.4 0.4-1.1 1.4-1.8 1.8-37.7-71.4-17.9-49.8-3.1-112.9 4.3-18.2-12.2-43.3 63.9-84 83-44.4 96.6-185.1 99.3-190.2 7.1 10.3 2.6 36.9 3.6 52.9z"/>
	</g>
</svg>
```

### `tsconfig.json`
```
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": [
      "ES2020",
      "DOM",
      "DOM.Iterable"
    ],
    "module": "ESNext",
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "noEmit": true,
    "ignoreDeprecations": "6.0",
    "jsx": "preserve",
    "baseUrl": ".",
    "paths": {
      "@/*": [
        "./*"
      ],
      "@/components/*": [
        "./components/*"
      ],
      "@/app/*": [
        "./app/*"
      ]
    },
    "allowJs": true,
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ]
  },
  "include": [
    "**/*.ts",
    "**/*.tsx",
    "**/*.js",
    "**/*.jsx",
    ".next/types/**/*.ts"
  ],
  "exclude": [
    "node_modules"
  ]
}
```
