/* ============ 长征90周年 H5 交互 ============ */
(function () {
  'use strict';

  /* ---------- 数据：历史节点 ---------- */
  var SPOTS = {
    ruijin:[620,2560], xiangjiang:[470,2330], zunyi:[445,2065], chishui:[508,1932],
    jinsha:[385,1665], luding:[385,1420], snow:[430,1255], grass:[480,1010],
    lazikou:[505,855], wuqi:[575,690], huining:[365,470]
  };

  /* ---------- 数据：人物志 ---------- */
  var PEOPLE = [
    { n:'毛泽东', r:'中共中央政治局常委 · 遵义会议后领导核心', w:'“掌上千秋史，胸中百万兵。”', d:'遵义会议后指挥四渡赤水、巧渡金沙，带领中央红军走出绝境，把中国革命的大本营带到了陕北。' },
    { n:'周恩来', r:'中革军委副主席', w:'“为中华之崛起而读书。”', d:'长征中日夜操持军务，遵义会议上坚定支持毛泽东的正确主张，是拨正革命航向的关键一笔。' },
    { n:'朱德', r:'红军总司令', w:'“度量大如海，意志坚如钢。”', d:'与士兵同甘共苦，三过草地而初心不改，是全军将士的主心骨。' },
    { n:'彭德怀', r:'红三军团军团长', w:'“谁敢横刀立马？唯我彭大将军。”', d:'率部血战湘江、夺占娄山关，担任夺取泸定桥的前锋，专打恶仗硬仗。' },
    { n:'刘伯承', r:'红军总参谋长', w:'智勇双全，人称“军神”。', d:'指挥先遣队智取遵义、强渡大渡河，为红军架起北上的生命通道。' },
    { n:'贺龙', r:'红二方面军总指挥', w:'“两把菜刀起家，一生跟党走。”', d:'率红二方面军万里转战湘黔滇，历尽艰辛把队伍完整带到会师地。' },
    { n:'任弼时', r:'红二方面军政治委员', w:'“党的骆驼，人民的骆驼。”', d:'与贺龙并肩率部突围西征、长途机动，为三军大会师作出重要贡献。' },
    { n:'徐向前', r:'红四方面军总指挥', w:'“浩气传千古，功业照山河。”', d:'率部西渡嘉陵江、策应中央红军，历经曲折终在会宁迎来三军会师。' }
  ];

  /* ---------- 数据：节点详情（含手绘SVG小景） ---------- */
  function art(bg, inner) {
    return '<svg viewBox="0 0 600 300" preserveAspectRatio="xMidYMid slice">' +
      '<rect width="600" height="300" fill="' + bg + '"/>' + inner + '</svg>';
  }
  var HOTSPOTS = {
    ruijin: {
      date:'1934.10 · 江西于都', title:'于都河畔 · 出发',
      img:'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=night%20scene%20Chinese%20Red%20Army%20soldiers%20crossing%20river%20on%20wooden%20boats%20with%20torches%201934%20dramatic%20oil%20painting%20dark%20red%20amber%20cinematic&image_size=landscape_4_3',
      art: art('#31405c',
        '<defs><linearGradient id="a1" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#243352"/><stop offset="1" stop-color="#485a78"/></linearGradient></defs>' +
        '<rect width="600" height="300" fill="url(#a1)"/>' +
        '<circle cx="470" cy="80" r="34" fill="#f4e6bd" opacity=".9"/>' +
        '<path d="M0 230 C100 210 180 224 300 218 C420 212 520 224 600 214 L600 300 L0 300 Z" fill="#1d2a42"/>' +
        '<path d="M150 300 C240 210 360 210 450 300 Z" fill="#16223a" opacity="0"/>' +
        '<path d="M120 302 C220 218 380 218 480 302" fill="none" stroke="#0f1830" stroke-width="16"/>' +
        '<g fill="#f2b25c"><circle cx="250" cy="252" r="5"/><circle cx="300" cy="246" r="5"/><circle cx="350" cy="252" r="5"/></g>' +
        '<g fill="#0e1626"><circle cx="250" cy="266" r="7"/><circle cx="300" cy="260" r="7"/><circle cx="350" cy="266" r="7"/></g>' +
        '<g stroke="#54648a" stroke-width="2" fill="none" opacity=".7"><path d="M60 250 q10 -8 20 0"/><path d="M500 244 q10 -8 20 0"/></g>'),
      text:'1934年10月，中央红军8.6万余人集结于江西于都河畔，星夜渡河，踏上战略转移之路。于都百姓拆门板搭浮桥、送粮油当军粮，30万人共同保守着一个“天大的秘密”。',
      nums:[['8.6万','踏上征途的中央红军将士'],['30万','于都人民倾力支援'],['2年','即将走过的万里征程']],
      quote:'“星星之火，可以燎原。”',
      people:[
        {n:'毛泽东',r:'中华苏维埃共和国主席'},
        {n:'周恩来',r:'中革军委副主席'},
        {n:'朱 德',r:'红军总司令'},
        {n:'博 古',r:'中共中央总负责'},
        {n:'李 德',r:'共产国际军事顾问'}
      ]
    },
    xiangjiang: {
      date:'1934.11 · 广西', title:'湘江血战',
      img:'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=battle%20scene%20soldiers%20crossing%20river%20under%20fire%20Chinese%20Red%20Army%201934%20dramatic%20oil%20painting%20smoke%20dark%20water%20heroic&image_size=landscape_4_3',
      art: art('#5a4a3f',
        '<defs><linearGradient id="a2" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#6e5a4a"/><stop offset="1" stop-color="#8a7057"/></linearGradient></defs>' +
        '<rect width="600" height="300" fill="url(#a2)"/>' +
        '<path d="M0 190 C150 176 260 186 400 180 C500 176 560 184 600 180 L600 300 L0 300 Z" fill="#7d2f24"/>' +
        '<g stroke="#c65a2e" stroke-width="3" fill="none" opacity=".7"><path d="M40 215 h90"/><path d="M210 240 h120"/><path d="M420 220 h110"/></g>' +
        '<g stroke="#33261a" stroke-width="3" fill="none"><path d="M120 160 q4 -26 8 0"/><path d="M150 168 q4 -20 8 0"/><path d="M470 158 q4 -26 8 0"/></g>' +
        '<circle cx="90" cy="60" r="26" fill="#e8a34e" opacity=".8"/>'),
      text:'湘江战役是中央红军突围以来最壮烈的一战。红军将士浴血七昼夜，撕开敌军重兵设防的封锁线，由出发时的8.6万余人锐减至3万余人。江水赤红，当地至今流传着“三年不饮湘江水，十年不食湘江鱼”。',
      nums:[['7昼夜','浴血阻击'],['3万余','湘江战后中央红军仅存'],['30余万','围追堵截的敌军兵力']],
      quote:'“三年不饮湘江水，十年不食湘江鱼。”',
      people:[
        {n:'彭德怀',r:'红3军团军团长·血战阻击'},
        {n:'林 彪',r:'红1军团军团长'},
        {n:'聂荣臻',r:'红1军团政委'},
        {n:'陈树湘',r:'红34师师长·断肠明志'}
      ]
    },
    zunyi: {
      date:'1935.01.15-17 · 贵州遵义', title:'遵义会议 · 生死攸关的转折点',
      img:'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=historic%20Chinese%20two%20story%20grey%20brick%20building%20Zunyi%20Conference%20site%20courtyard%20photorealistic%20warm%20morning%20sunlight&image_size=landscape_4_3',
      art: art('#efe2c6',
        '<path d="M0 250 L600 250 L600 300 L0 300 Z" fill="#d9c9a4"/>' +
        '<rect x="190" y="120" width="220" height="130" fill="#8a7a5e"/>' +
        '<rect x="176" y="104" width="248" height="18" fill="#33261a"/>' +
        '<rect x="206" y="70" width="188" height="34" fill="#f7efdb" stroke="#33261a" stroke-width="3"/>' +
        '<rect x="196" y="56" width="208" height="14" fill="#33261a"/>' +
        '<g fill="#5a4a35"><rect x="216" y="78" width="14" height="18"/><rect x="248" y="78" width="14" height="18"/><rect x="280" y="78" width="14" height="18"/><rect x="312" y="78" width="14" height="18"/><rect x="344" y="78" width="14" height="18"/></g>' +
        '<rect x="240" y="180" width="24" height="70" fill="#5a4a35"/><rect x="300" y="180" width="24" height="70" fill="#5a4a35"/><rect x="360" y="180" width="24" height="70" fill="#5a4a35"/>' +
        '<path d="M312 56 L312 18 L372 26 L352 38 L372 50 Z" fill="#9a1e23"/>' +
        '<g fill="#77824f"><path d="M120 250 L138 196 L156 250 Z"/><path d="M452 250 L470 190 L488 250 Z"/></g>'),
      text:'1935年1月15日至17日，中共中央政治局扩大会议在贵州遵义召开。会议在极端危急的关头，纠正了“左”倾教条主义错误，确立了毛泽东在党中央和红军的领导地位。这是中国共产党第一次独立自主地解决中国革命问题——中国革命的航船，从这里拨正了航向，从挫折走向胜利，是党的历史上一个生死攸关的转折点。',
      nums:[['3天','决定革命命运的会议'],['第一次','独立自主解决中国问题'],['转折','从挫折走向胜利的起点'],['20人','参会政治局委员与候补']],
      quote:'“遵义会议，是党的历史上一个生死攸关的转折点。”',
      people:[
        {n:'毛泽东',r:'确立党中央和红军领导地位'},
        {n:'周恩来',r:'坚定支持毛泽东正确主张'},
        {n:'张闻天',r:'洛甫·中共中央负总责'},
        {n:'王稼祥',r:'投出关键一票·支持毛泽东'},
        {n:'朱 德',r:'红军总司令·会议支持者'},
        {n:'博 古',r:'被纠正“左”倾教条主义错误'}
      ]
    },
    chishui: {
      date:'1935.01—03 · 川黔滇边', title:'四渡赤水',
      img:'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=winding%20river%20through%20red%20rock%20canyon%20Chishui%20China%20misty%20dramatic%20landscape%20oil%20painting%20small%20army%20marching&image_size=landscape_4_3',
      art: art('#efe2c6',
        '<path d="M0 90 L90 40 L170 96 L250 52 L330 100 L420 58 L500 102 L570 66 L600 88 L600 160 L0 160 Z" fill="#cbb894"/>' +
        '<path d="M0 168 C200 148 400 196 600 168 L600 300 L0 300 Z" fill="#8a6a4a"/>' +
        '<g stroke="#f7efdb" stroke-width="3" fill="none" opacity=".8"><path d="M80 210 q14 -10 28 0"/><path d="M330 240 q14 -10 28 0"/><path d="M480 205 q14 -10 28 0"/></g>' +
        '<g><path d="M170 226 C185 206 235 206 250 226 Z" fill="#33261a"/><rect x="207" y="196" width="3" height="22" fill="#33261a"/><path d="M210 198 L238 203 L210 210 Z" fill="#9a1e23"/></g>' +
        '<g><path d="M330 258 C345 238 395 238 410 258 Z" fill="#33261a"/><rect x="367" y="228" width="3" height="22" fill="#33261a"/><path d="M370 230 L398 235 L370 242 Z" fill="#9a1e23"/></g>' +
        '<path d="M60 60 C60 40 90 40 90 60 C90 74 70 78 62 72" fill="none" stroke="#b78a3e" stroke-width="4" opacity=".7"/>'),
      text:'一渡赤水避强敌，二渡再占遵义城，三渡佯动诱敌西进，四渡奇兵跳出重围。3万红军在川黔滇边的崇山峻岭间声东击西、忽南忽北，牵着40万追兵的鼻子走，把被动化为主动。这是毛泽东军事指挥艺术的"得意之笔"——以少胜多、以弱制强的运动战典范，至今仍是世界军史研究的不朽案例。',
      nums:[['3万','红军兵力'],['40万','围追敌军'],['4次','往返横渡赤水河'],['2个月','声东击西的运动战']],
      quote:'“（四渡赤水）是毛主席军事指挥艺术的‘得意之笔’。”——军史评述',
      people:[
        {n:'毛泽东',r:'军事指挥核心·“得意之笔”'},
        {n:'周恩来',r:'中革军委副主席·协助指挥'},
        {n:'朱 德',r:'红军总司令'},
        {n:'彭德怀',r:'红3军团军团长·率部佯动'}
      ]
    },
    jinsha: {
      date:'1935.05 · 云南皎平渡', title:'巧渡金沙江',
      img:'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=turbulent%20golden%20river%20between%20steep%20cliffs%20Jinsha%20China%20wooden%20boats%20ferrying%20soldiers%20dramatic%20oil%20painting%20warm%20misty&image_size=landscape_4_3',
      art: art('#efe2c6',
        '<circle cx="490" cy="70" r="40" fill="#e8a34e"/>' +
        '<path d="M0 170 C150 150 300 190 450 168 C520 158 570 168 600 162 L600 300 L0 300 Z" fill="#5a7186"/>' +
        '<g stroke="#f7efdb" stroke-width="4" fill="none" opacity=".85"><path d="M90 210 q20 -14 40 0 t40 0"/><path d="M260 250 q20 -14 40 0 t40 0"/><path d="M430 220 q20 -14 40 0 t40 0"/></g>' +
        '<g><path d="M230 236 C248 212 292 212 310 236 Z" fill="#33261a"/><rect x="267" y="204" width="3" height="26" fill="#33261a"/><path d="M270 206 L296 211 L270 218 Z" fill="#9a1e23"/></g>' +
        '<g><path d="M150 268 C164 250 200 250 214 268 Z" fill="#33261a"/></g>'),
      text:'依托7只小船，数万红军在皎平渡用7天7夜从容渡过金沙江，未损一兵一卒，把数十万追兵远远甩在南岸。中央红军从此取得了战略转移中具有决定意义的胜利。',
      nums:[['7只','渡江的小船'],['7天7夜','数万人从容过江'],['0','一人一马的损失']],
      quote:'“金沙水拍云崖暖。”',
      people:[
        {n:'毛泽东',r:'指挥决策·巧渡之谋'},
        {n:'周恩来',r:'中革军委副主席'},
        {n:'刘伯承',r:'红军总参谋长·坐镇皎平渡'},
        {n:'陈 云',r:'渡江具体指挥'}
      ]
    },
    luding: {
      date:'1935.05.29 · 四川泸定', title:'飞夺泸定桥',
      img:'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=iron%20chain%20suspension%20bridge%20over%20rushing%20river%20gorge%20Luding%20China%20brave%20soldiers%20on%20chains%20dramatic%20oil%20painting&image_size=landscape_4_3',
      art: art('#efe2c6',
        '<path d="M0 60 L110 40 L110 300 L0 300 Z" fill="#6e5a48"/>' +
        '<path d="M600 60 L490 40 L490 300 L600 300 Z" fill="#6e5a48"/>' +
        '<path d="M0 262 C200 246 400 246 600 262 L600 300 L0 300 Z" fill="#5a7186"/>' +
        '<g stroke="#33261a" stroke-width="3" fill="none" opacity=".9">' +
        '<path d="M110 78 C220 130 380 130 490 78"/><path d="M110 96 C220 148 380 148 490 96"/><path d="M110 114 C220 166 380 166 490 114"/>' +
        '<path d="M110 84 C220 136 380 136 490 84" stroke-dasharray="6 6"/><path d="M110 102 C220 154 380 154 490 102" stroke-dasharray="6 6"/><path d="M110 120 C220 172 380 172 490 120" stroke-dasharray="6 6"/>' +
        '</g>' +
        '<g fill="#9a1e23"><circle cx="180" cy="126" r="6"/><circle cx="230" cy="140" r="6"/><circle cx="285" cy="147" r="6"/><circle cx="340" cy="147" r="6"/></g>' +
        '<circle cx="470" cy="120" r="26" fill="#e8a34e" opacity=".75"/>' +
        '<path d="M470 96 L470 70 L500 74 L488 82 L500 90 Z" fill="#c8102e"/>'),
      text:'红4团官兵冒雨一昼夜急行军240里，抢在敌军援兵之前赶到泸定桥。5月29日，22名勇士攀着13根光溜溜的铁索，冒着对岸的枪林弹雨、脚下的大渡河怒涛，铺着木板夺下大桥，为大部队撕开了北上的通道。"大渡桥横铁索寒"——寒的是铁索，热的是血。这是长征中最惊心动魄的战斗之一，22名勇士的姓名永远刻在了这座桥上。',
      nums:[['240里','一昼夜雨夜急行军'],['22名','夺桥突击勇士'],['13根','横空高悬的铁索'],['1天','5月29日夺桥之日']],
      quote:'“大渡桥横铁索寒。”',
      people:[
        {n:'林 彪',r:'红1军团军团长·下急令夺桥'},
        {n:'聂荣臻',r:'红1军团政委'},
        {n:'黄开湘',r:'红4团团长·率队夺桥'},
        {n:'杨成武',r:'红4团政委·指挥22勇士'},
        {n:'22勇士',r:'飞夺泸定桥突击队员'}
      ]
    },
    snow: {
      date:'1935.06 · 夹金山', title:'翻越雪山',
      img:'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=line%20of%20soldiers%20climbing%20huge%20snow%20mountain%20ridge%20in%20blizzard%20red%20flag%20dramatic%20oil%20painting%20white%20blue%20epic&image_size=landscape_4_3',
      art: art('#dfe7ec',
        '<defs><linearGradient id="a6" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#c3d2dc"/><stop offset="1" stop-color="#eef4f8"/></linearGradient></defs>' +
        '<rect width="600" height="300" fill="url(#a6)"/>' +
        '<path d="M0 220 L150 90 L260 200 L380 70 L500 200 L600 130 L600 300 L0 300 Z" fill="#eef4f8"/>' +
        '<path d="M150 90 L190 128 L150 118 L120 132 Z M380 70 L420 112 L380 102 L350 116 Z" fill="#fdfdfc"/>' +
        '<path d="M0 260 L600 240 L600 300 L0 300 Z" fill="#c3d2dc"/>' +
        '<g stroke="#9fb3c2" stroke-width="3" fill="none" opacity=".8"><path d="M40 90 q30 -10 60 0"/><path d="M420 60 q30 -10 60 0"/><path d="M180 40 q26 -8 52 0"/></g>' +
        '<g fill="#33261a"><circle cx="300" cy="196" r="6"/><circle cx="320" cy="208" r="6"/><circle cx="340" cy="216" r="6"/><circle cx="360" cy="226" r="6"/><circle cx="380" cy="236" r="6"/></g>' +
        '<path d="M292 178 L292 152 L318 156 L306 164 L318 172 Z" fill="#c8102e"/>'),
      text:'夹金山海拔4000余米，空气稀薄，风雪扑面。身着单衣草鞋的红军将士相互搀扶，以辣椒水御寒、以雪水充饥，翻越了这座当地人眼中不可逾越的"神山"。许多人坐下休息便再没起来，雪山上最长的脚印，是倒下的战友踩出的。此后，队伍又相继翻过多座大雪山——更喜岷山千里雪，三军过后尽开颜。',
      nums:[['4000米+','夹金山海拔'],['单衣草鞋','御寒的全部装备'],['多座','连续翻越的大雪山'],['无数','长眠于雪山的将士']],
      quote:'“更喜岷山千里雪，三军过后尽开颜。”',
      people:[
        {n:'毛泽东',r:'率队翻越夹金山'},
        {n:'周恩来',r:'带病坚持行军'},
        {n:'朱 德',r:'与士兵同甘共苦翻山'},
        {n:'刘伯承',r:'率先遣队探路'}
      ]
    },
    grass: {
      date:'1935.08 · 松潘草地', title:'穿越草地',
      img:'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=soldiers%20marching%20through%20vast%20misty%20marshland%20grassland%20at%20dusk%20melancholic%20oil%20painting%20muted%20green%20epic&image_size=landscape_4_3',
      art: art('#c9cbb8',
        '<defs><linearGradient id="a7" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#b7bcab"/><stop offset="1" stop-color="#d4d7c6"/></linearGradient></defs>' +
        '<rect width="600" height="300" fill="url(#a7)"/>' +
        '<path d="M0 150 h600" stroke="#9aa08c" stroke-width="3" opacity=".6"/>' +
        '<ellipse cx="140" cy="230" rx="110" ry="26" fill="#5c6644" opacity=".7"/>' +
        '<ellipse cx="420" cy="262" rx="150" ry="30" fill="#5c6644" opacity=".7"/>' +
        '<ellipse cx="520" cy="200" rx="70" ry="16" fill="#5c6644" opacity=".55"/>' +
        '<g fill="none" stroke="#6d7a4a" stroke-width="3" stroke-linecap="round"><path d="M200 208 q4 -18 9 -3 q4 -18 9 -3"/><path d="M340 196 q4 -18 9 -3 q4 -18 9 -3"/><path d="M470 178 q4 -16 8 -3 q4 -16 8 -3"/></g>' +
        '<g fill="#33261a"><circle cx="120" cy="150" r="7"/><circle cx="165" cy="158" r="7"/><circle cx="210" cy="168" r="7"/><circle cx="255" cy="180" r="7"/><circle cx="300" cy="192" r="7"/><circle cx="345" cy="206" r="7"/><circle cx="390" cy="220" r="7"/></g>'),
      text:'松潘草地茫茫数百里，泥潭密布，雨雹无常。红军将士踏着草甸前进，一脚不慎便陷进泥沼；断了粮，就以野菜、树皮乃至皮带充饥。许多战士为救陷进泥潭的战友而一同沉没。无数年轻的生命永远留在了这片草地，而歌声与火种，在队伍里代代相传。红四方面军更是三过草地，其艰辛难以言表。',
      nums:[['7天','走出这片水草地'],['野菜皮带','充饥果腹的“干粮”'],['三过草地','红四方面军之苦'],['数百里','茫茫水草泥沼地']],
      quote:'“风雨浸衣骨更硬，野菜充饥志越坚。”',
      people:[
        {n:'毛泽东',r:'决策穿越草地'},
        {n:'周恩来',r:'重病中被抬着过草地'},
        {n:'彭德怀',r:'红3军团殿后·杀马充饥'},
        {n:'徐向前',r:'红四方面军·三过草地'}
      ]
    },
    lazikou: {
      date:'1935.09.17 · 甘肃迭部', title:'突破天险腊子口',
      img:'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=narrow%20steep%20gorge%20pass%20between%20towering%20cliffs%20Lazikou%20China%20soldiers%20climbing%20cliff%20dramatic%20oil%20painting%20dark%20epic&image_size=landscape_4_3',
      art: art('#efe2c6',
        '<path d="M0 0 L200 30 L150 300 L0 300 Z" fill="#6e5a48"/>' +
        '<path d="M600 0 L400 30 L450 300 L600 300 Z" fill="#6e5a48"/>' +
        '<path d="M230 0 L370 0 L340 300 L260 300 Z" fill="#d9c9a4"/>' +
        '<g stroke="#8a7a5e" stroke-width="3" fill="none" opacity=".7"><path d="M80 80 L150 96"/><path d="M540 70 L470 88"/></g>' +
        '<circle cx="300" cy="60" r="17" fill="#c8102e"/>' +
        '<g stroke="#c8102e" stroke-width="3" opacity=".8"><path d="M300 32 v-14"/><path d="M322 40 l10 -10"/><path d="M278 40 l-10 -10"/></g>' +
        '<g fill="#33261a"><circle cx="290" cy="240" r="6"/><circle cx="305" cy="228" r="6"/><circle cx="318" cy="214" r="6"/></g>'),
      text:'腊子口两侧绝壁千仞，隘口宽不过10米，一夫当关、万夫莫开。正面强攻受阻后，小战士“云贵川”攀上绝壁，带领迂回部队从崖顶奇袭，正面部队同步猛攻——十余个小时，天险门户洞开，红军打开了北上的最后一道险关。',
      nums:[['10米','隘口宽度'],['1名战士','攀崖开路'],['10小时','拿下天险']],
      quote:'“腊子口上降神兵。”',
      people:[
        {n:'毛泽东',r:'决策强攻天险'},
        {n:'彭德怀',r:'陕甘支队司令员·前线指挥'},
        {n:'林 彪',r:'陕甘支队副司令员'},
        {n:'云贵川',r:'小战士·攀上绝壁奇袭'},
        {n:'黄开湘、杨成武',r:'红4团·正面强攻指挥'}
      ]
    },
    wuqi: {
      date:'1935.10.19 · 陕西吴起', title:'到达陕北吴起镇',
      img:'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=loess%20plateau%20town%20cave%20dwellings%20yaodong%20northern%20Shaanxi%20China%20soldiers%20arriving%20with%20red%20flag%20warm%20golden%20sunset%20oil%20painting&image_size=landscape_4_3',
      art: art('#efe2c6',
        '<circle cx="150" cy="80" r="46" fill="#e8a34e"/>' +
        '<path d="M0 200 C100 170 200 196 300 176 C420 152 520 190 600 170 L600 300 L0 300 Z" fill="#cbb894"/>' +
        '<path d="M0 250 C150 226 350 252 600 228 L600 300 L0 300 Z" fill="#b9a05f"/>' +
        '<path d="M420 150 L420 96 L486 104 L464 118 L486 132 Z" fill="#c8102e"/><rect x="414" y="92" width="6" height="70" fill="#7d6a4f"/>' +
        '<g fill="#33261a"><circle cx="180" cy="240" r="6"/><circle cx="215" cy="234" r="6"/><circle cx="250" cy="240" r="6"/></g>'),
      text:'中央红军抵达陕北吴起镇，与陕北红军胜利会师。历时368天、纵横11个省、行程二万五千里的中央红军长征，至此宣告结束。“长征一完结，新局面就开始”——中国革命的大本营，从此奠基于西北。',
      nums:[['368天','中央红军长征历时'],['11省','纵横转战'],['25000里','二万五千里行程']],
      quote:'“长征一完结，新局面就开始。”',
      people:[
        {n:'毛泽东',r:'率中央红军到达陕北'},
        {n:'周恩来',r:'中革军委副主席'},
        {n:'彭德怀',r:'指挥“切尾巴”战役'},
        {n:'刘志丹',r:'陕北红军·胜利会师'}
      ]
    },
    huining: {
      date:'1936.10 · 甘肃会宁 · 将台堡', title:'三军大会师 · 长征胜利',
      img:'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=joyful%20Chinese%20soldiers%20celebrating%20with%20red%20flags%20old%20town%20gate%201936%20warm%20golden%20oil%20painting%20festive%20epic&image_size=landscape_4_3',
      art: art('#efe2c6',
        '<defs><linearGradient id="a10" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#e8a34e"/><stop offset="1" stop-color="#c65a2e"/></linearGradient></defs>' +
        '<rect width="600" height="200" fill="url(#a10)"/>' +
        '<path d="M0 210 C150 176 350 206 600 178 L600 300 L0 300 Z" fill="#8a5a35"/>' +
        '<path d="M0 260 C200 236 420 258 600 240 L600 300 L0 300 Z" fill="#6e4426"/>' +
        '<g><rect x="180" y="120" width="5" height="90" fill="#33261a"/><path d="M185 122 L265 130 L235 148 L265 166 L185 172 Z" fill="#c8102e"/></g>' +
        '<g><rect x="300" y="96" width="5" height="114" fill="#33261a"/><path d="M305 98 L385 106 L355 124 L385 142 L305 148 Z" fill="#c8102e"/></g>' +
        '<g><rect x="420" y="130" width="5" height="80" fill="#33261a"/><path d="M425 132 L505 140 L475 158 L505 176 L425 182 Z" fill="#c8102e"/></g>' +
        '<circle cx="300" cy="52" r="20" fill="#c8102e" opacity="0"/><circle cx="300" cy="50" r="24" fill="#f7efdb" opacity=".9"/>'),
      text:'1936年10月9日，红一、红四方面军在甘肃会宁会师；10月22日，红一、红二方面军在将台堡会师。三大主力胜利会师，宣告历时两年的红军长征胜利结束。会合的不止是队伍，更是一个民族重新出发的信心。',
      nums:[['1936.10.22','长征胜利结束的标志'],['3大主力','会宁·将台堡会师'],['2年','纵横十余省的远征']],
      quote:'“长征是宣言书，长征是宣传队，长征是播种机。”',
      people:[
        {n:'毛泽东',r:'红一方面军·革命领袖'},
        {n:'周恩来',r:'中革军委副主席'},
        {n:'朱 德',r:'红军总司令'},
        {n:'贺 龙',r:'红二方面军总指挥'},
        {n:'任弼时',r:'红二方面军政治委员'},
        {n:'徐向前',r:'红四方面军总指挥'}
      ]
    }
  };

  /* ---------- 工具 ---------- */
  /* 取元素：优先 querySelector；若被宿主环境覆写/破坏，则回退到原生 API，确保任何环境下都能拿到元素 */
  function attrMatch(root, name) {
    var all = root.getElementsByTagName('*'), out = [];
    for (var i = 0; i < all.length; i++) {
      if (all[i].hasAttribute && all[i].hasAttribute(name)) out.push(all[i]);
    }
    return out;
  }
  function $(s, p) {
    p = p || document;
    try { var el = p.querySelector ? p.querySelector(s) : null; if (el) return el; } catch (e) {}
    if (s.charAt(0) === '#') { var byId = document.getElementById(s.slice(1)); if (byId) return byId; }
    if (s.charAt(0) === '.') { var cls = document.getElementsByClassName(s.slice(1)); if (cls && cls.length) return cls[0]; }
    var tag = document.getElementsByTagName(s.replace(/^[.#]/, ''));
    return (tag && tag.length) ? tag[0] : null;
  }
  function $$(s, p) {
    p = p || document;
    try { if (p.querySelectorAll) return Array.prototype.slice.call(p.querySelectorAll(s)); } catch (e) {}
    if (s.charAt(0) === '.') return Array.prototype.slice.call(document.getElementsByClassName(s.slice(1)));
    if (s.charAt(0) === '#') { var el = document.getElementById(s.slice(1)); return el ? [el] : []; }
    var m = /^\[([\w-]+)\]$/.exec(s);
    if (m) return attrMatch(p, m[1]);
    return Array.prototype.slice.call(document.getElementsByTagName(s));
  }

  /* ---------- 人物志渲染 ---------- */
  function renderPeople() {
    var box = $('#pScroll');
    if (!box) return;
    var html = PEOPLE.map(function (p) {
      return '<article class="p-card">' +
        '<span class="p-seal">' + p.n.charAt(0) + '</span>' +
        '<h3>' + p.n + '</h3>' +
        '<p class="p-role">' + p.r + '</p>' +
        '<p class="p-word">' + p.w + '</p>' +
        '<p class="p-desc">' + p.d + '</p></article>';
    }).join('');
    html += '<article class="p-card heroic">' +
      '<span class="p-seal">★</span>' +
      '<h3>无名英雄</h3>' +
      '<p class="p-role">长眠于长征路上的十余万红军将士</p>' +
      '<p class="p-word">“没有留下名字，却留下了这条改变中国的路。”</p>' +
      '<p class="p-desc">出发时，他们平均年龄不到30岁；许多人牺牲时还不到20岁。湘江、雪山、草地……每一个地名背后，都有他们年轻的生命。</p></article>';
    box.innerHTML = html;
  }

  /* ---------- 进场动画 ---------- */
  function initReveal() {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    $$('.reveal').forEach(function (el) { io.observe(el); });
  }

  /* ---------- 数字滚动 ---------- */
  function initCounters() {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (!e.isIntersecting) return;
        var el = e.target, target = +el.getAttribute('data-count'), t0 = null;
        io.unobserve(el);
        function step(ts) {
          if (!t0) t0 = ts;
          var p = Math.min((ts - t0) / 1400, 1);
          p = 1 - Math.pow(1 - p, 3);
          el.textContent = Math.round(target * p).toLocaleString();
          if (p < 1) requestAnimationFrame(step);
        }
        requestAnimationFrame(step);
      });
    }, { threshold: 0.6 });
    $$('.stat b').forEach(function (el) { io.observe(el); });
  }

  /* ---------- 路线绘制 + 节点点亮 ---------- */
  var routeLen = 0, fracs = {}, routeOK = false;
  /* 兜底：路线动画不可用时直接点亮全部节点 */
  function showAllPins() {
    $$('.pin').forEach(function (p) { p.classList.add('on'); });
  }
  function initRoute() {
    var prog = $('#routeProg'), stage = $('#mapStage');
    if (!prog || !stage) { showAllPins(); return; }
    /* 兜底：SVG path 接口异常时直接显示全部节点，保证互动点永远可用 */
    if (typeof prog.getTotalLength !== 'function' || typeof prog.getPointAtLength !== 'function') {
      showAllPins();
      return;
    }
    try {
      routeLen = prog.getTotalLength();
    } catch (e) { showAllPins(); return; }
    prog.style.strokeDasharray = routeLen;
    prog.style.strokeDashoffset = routeLen;

    /* 采样路线，计算每个节点的路径比例 */
    var SAMPLES = 420, pts = [];
    for (var i = 0; i <= SAMPLES; i++) pts.push(prog.getPointAtLength(routeLen * i / SAMPLES));
    Object.keys(SPOTS).forEach(function (k) {
      var bx = SPOTS[k][0], by = SPOTS[k][1], best = 0, bd = 1e12;
      for (var i = 0; i <= SAMPLES; i++) {
        var dx = pts[i].x - bx, dy = pts[i].y - by, d = dx * dx + dy * dy;
        if (d < bd) { bd = d; best = i; }
      }
      fracs[k] = best / SAMPLES;
    });

    var pins = {};
    $$('.pin').forEach(function (p) { pins[p.getAttribute('data-spot')] = p; });

    function update() {
      var r = stage.getBoundingClientRect(), vh = window.innerHeight;
      /* 地图上缘进入视口70%开始，下缘到视口45%走完 */
      var total = r.height + vh * 0.15;
      var passed = (vh * 0.72 - r.top);
      var p = Math.max(0, Math.min(1, passed / total));
      prog.style.strokeDashoffset = routeLen * (1 - p);
      /* 地图顶部进入视口 3/4 高度后，一次性点亮全部节点，确保互动点可靠可见可点 */
      var revealAll = r.top < vh * 0.75;
      Object.keys(fracs).forEach(function (k) {
        if (!pins[k]) return;
        if (revealAll || p >= fracs[k] + 0.015) pins[k].classList.add('on');
      });
    }
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    update();
    routeOK = true;
  }

  /* ---------- 弹层 ---------- */
  function initModal() {
    var modal = $('#modal'), vArt = $('#mVignette');
    function open(key) {
      var d = HOTSPOTS[key];
      if (!d) return;
      vArt.innerHTML = d.img
        ? '<img src="' + d.img + '" alt="' + d.title + '" loading="lazy">' +
          '<span class="m-vcap">' + d.title + '</span>'
        : d.art;
      $('#mDate').textContent = d.date;
      $('#mTitle').textContent = d.title;
      $('#mNums').innerHTML = d.nums.map(function (n) {
        return '<div><b>' + n[0] + '</b><span>' + n[1] + '</span></div>';
      }).join('');
      $('#mPeople').innerHTML = d.people
        ? '<div class="m-people-t">重要人物</div>' +
          d.people.map(function (p) {
            return '<span class="p-chip"><b>' + p.n + '</b><i>' + p.r + '</i></span>';
          }).join('')
        : '';
      $('#mBody').textContent = d.text;
      $('#mQuote').textContent = d.quote;
      modal.hidden = false;
      document.body.style.overflow = 'hidden';
    }
    function close() {
      modal.hidden = true;
      document.body.style.overflow = '';
      resetMapZoom();
    }
    $$('.pin').forEach(function (p) {
      p.addEventListener('click', function (e) {
        e.stopPropagation();
        /* 单击节点即放大居中并直接打开详情（避免“点一次没反应”的困惑） */
        zoomToPin(p);
        mapZoom.activePin = p;
        open(p.getAttribute('data-spot'));
      });
    });
    $$('[data-close]', modal).forEach(function (el) { el.addEventListener('click', close); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !modal.hidden) close(); });
  }

  /* ---------- 地图节点点击放大 ---------- */
  var mapZoom = { stage: null, inner: null, scale: 2.5, hint: null, activePin: null };
  function initMapZoom() {
    var stage = mapZoom.stage = $('#mapStage');
    if (!stage) return;
    // 把 SVG + 所有节点包进 .map-inner，便于整体缩放
    var inner = mapZoom.inner = document.createElement('div');
    inner.className = 'map-inner';
    while (stage.firstChild) inner.appendChild(stage.firstChild);
    stage.appendChild(inner);
    // 右上角提示
    var hint = mapZoom.hint = document.createElement('span');
    hint.className = 'map-hint';
    hint.textContent = '再点节点看详情 · 点空白还原';
    stage.appendChild(hint);
    // 点击空白区域还原（节点点击已 stopPropagation 不会触发）
    stage.addEventListener('click', function (e) {
      if (stage.classList.contains('zoomed') && !e.target.closest('.pin')) resetMapZoom();
    });
  }
  function zoomToPin(pin) {
    var z = mapZoom;
    if (!z.stage || !z.inner) return;
    var left = parseFloat(pin.style.left) / 100;
    var top = parseFloat(pin.style.top) / 100;
    var rect = z.stage.getBoundingClientRect();
    var S = z.scale, W = rect.width, H = rect.height;
    // 以视口中心为目标：节点原始坐标 (left*W, top*H)，scale 后加 translate 落到视口中央
    var tx = (window.innerWidth / 2 - rect.left) - left * W * S;
    var ty = (window.innerHeight / 2 - rect.top) - top * H * S;
    z.inner.style.transform = 'translate(' + tx + 'px,' + ty + 'px) scale(' + S + ')';
    z.stage.classList.add('zoomed');
  }
  function resetMapZoom() {
    var z = mapZoom;
    if (!z.stage || !z.inner) return;
    z.inner.style.transform = '';
    z.stage.classList.remove('zoomed');
    z.activePin = null;
  }

  /* ---------- BGM：《十送红军》二胡独奏（华夏民族乐团），本地 mp3 循环 ---------- */
  function initBGM() {
    var btn = document.getElementById('bgmBtn');
    var audio = document.getElementById('bgmAudio');
    if (!btn || !audio) return;
    audio.volume = 0;
    var VOL = 0.5, FADE = 1300;
    var playing = false, starting = false, wantPlay = false, raf = null, fadeTok = 0;

    /* 音量淡变（token 机制：新淡变会作废旧回调，避免快速切换时误暂停） */
    function fadeTo(v, done) {
      var tok = ++fadeTok;
      if (raf) cancelAnimationFrame(raf);
      var t0 = null, from = audio.volume;
      function step(ts) {
        if (!t0) t0 = ts;
        var p = Math.min((ts - t0) / FADE, 1);
        audio.volume = Math.max(0, from + (v - from) * p);
        if (p < 1) raf = requestAnimationFrame(step);
        else { raf = null; if (tok === fadeTok && done) done(); }
      }
      raf = requestAnimationFrame(step);
    }

    function setUI(on) {
      btn.classList.toggle('playing', on);
      btn.setAttribute('aria-pressed', on ? 'true' : 'false');
      btn.setAttribute('aria-label', on ? '暂停背景音乐' : '播放背景音乐');
    }

    function start() {
      if (playing || starting) return;
      starting = true; wantPlay = true;
      fadeTok++; /* 作废任何进行中的淡出回调 */
      audio.volume = 0;
      var pr = audio.play();
      if (pr && pr.then) {
        pr.then(function () {
          starting = false;
          if (!wantPlay) return; /* 启动期间已被暂停 */
          playing = true; setUI(true); fadeTo(VOL);
          try { localStorage.setItem('lm-bgm', '1'); } catch (e) {}
        }).catch(function () { starting = false; wantPlay = false; });
      } else {
        starting = false; playing = true; setUI(true); fadeTo(VOL);
      }
    }

    function stop() {
      wantPlay = false; starting = false; playing = false; setUI(false);
      try { localStorage.setItem('lm-bgm', '0'); } catch (e) {}
      fadeTo(0, function () { if (!wantPlay) audio.pause(); });
      /* 兜底：rAF 在后台/省电模式可能被节流，到时强制暂停 */
      setTimeout(function () { if (!wantPlay) { audio.pause(); audio.volume = 0; } }, FADE + 300);
    }

    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      if (playing || starting) { if (playing) stop(); } else { start(); }
    });

    /* 浏览器自动播放策略：首次触摸/点击页面时轻声启动（点音符按钮本身除外，避免与click竞态） */
    document.addEventListener('pointerdown', function once(ev) {
      if (ev.target && ev.target.closest && ev.target.closest('#bgmBtn')) return;
      var pref = null;
      try { pref = localStorage.getItem('lm-bgm'); } catch (e) {}
      if (pref !== '0') start();
      document.removeEventListener('pointerdown', once);
    });

    /* 切到后台暂停，回来恢复并重新淡入 */
    document.addEventListener('visibilitychange', function () {
      if (document.hidden) { if (wantPlay) audio.pause(); }
      else if (wantPlay) {
        audio.volume = 0;
        audio.play().then(function () { if (wantPlay) fadeTo(VOL); }).catch(function () {});
      }
    });
    /* 音频源异常时隐藏按钮（如本地文件缺失） */
    audio.addEventListener('error', function () { btn.style.display = 'none'; });

    /* 调试/测试用状态出口 */
    window.__bgm = {
      state: function () { return audio.paused ? 'paused' : 'playing'; },
      get playing() { return playing; },
      get volume() { return audio.volume; },
      get loop() { return audio.loop; },
      get duration() { return audio.duration; }
    };
  }

  /* ---------- 进度条 / 里程牌 / 封面视差 ---------- */
  function initScrollUI() {
    var bar = $('#pbar'), chip = $('#mileage'), num = $('#mi-num'), heroArt = $('.hero-art');
    var lastMile = -1;
    function update() {
      var vh = window.innerHeight;
      var sy = window.scrollY || document.documentElement.scrollTop;
      var dh = document.documentElement.scrollHeight - vh;
      var p = dh > 0 ? Math.min(sy / dh, 1) : 0;
      bar.style.width = (p * 100).toFixed(2) + '%';
      if (heroArt) heroArt.style.transform = 'translateY(' + Math.min(sy * 0.18, 160) + 'px)';
      var miles = Math.round(p * 25000);
      if (miles !== lastMile) { lastMile = miles; num.textContent = miles.toLocaleString(); }
      chip.classList.toggle('on', sy > vh * 0.55);
    }
    window.addEventListener('scroll', update, { passive: true });
    update();
  }

  /* ---------- 尾页二维码：始终指向当前访问地址（部署到任意域名均自适应） ---------- */
  function initQrCode() {
    var img = document.getElementById('endQrImg');
    if (!img) return;
    var url = window.location.href.split('#')[0];
    img.src = 'https://api.qrserver.com/v1/create-qr-code/?size=220x220&margin=10&data=' + encodeURIComponent(url);
  }

  document.addEventListener('DOMContentLoaded', function () {
    /* 每个初始化函数独立 try-catch，单个失败不影响其他模块（如二维码） */
    [renderPeople, initReveal, initCounters, initRoute, initMapZoom, initModal, initBGM, initScrollUI, initQrCode].forEach(function (fn) {
      try { fn(); } catch (e) { if (window.console && console.warn) console.warn('init skip:', fn.name, e); }
    });
    /* 最终保底：3秒后路线动画仍未就绪则直接点亮全部节点，保证互动点可用 */
    setTimeout(function () { if (!routeOK) showAllPins(); }, 3000);
  });
})();
