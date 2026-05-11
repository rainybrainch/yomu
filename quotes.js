// ═══════════════════════════════════════════════════
// 服牢365 ── 服牢井像 365名言集
// ═══════════════════════════════════════════════════
// メイン = 名言。キャラは「仮配置」または「未配置」。
// 後でキャラを確定する想定。今は「これは名言か」だけ判定して蓄積。
//
// 必須: id / quote / explanation / source / date
// 推奨: tags / coreLink
// 任意: charTentative（仮配置・後で確定）
// ═══════════════════════════════════════════════════
'use strict';

const QUOTES = [
  {
    id: 'q_20260511_001',
    quote: '積み重ね、重み、その先に重力。',
    explanation: '何かを極めることは、量を積むこと。量は重みになり、重みは引力（重力）になる。仙人は1日でなれない。',
    source: 'このすば × Elona 第29話 追加感想（創造主自身の言葉）',
    coreLink: '核3 内向き凝縮 → 超重力源',
    date: '2026-05-11',
    tags: ['仙人', '凝縮', '核3', '重力'],
    charTentative: 'hotoke',
    // 服牢365 2026 ver メタ
    genre: '凝',
    weekday: 'wed',
    sin: '怠惰',
    virtue: '勤勉',
    state: 'sublimated',
    calendarDate: '01-01',
    month: 1,
    version: '2026'

  },
  {
    id: 'q_20260511_002',
    quote: '廃人って、何かに特化しているってことだからね。',
    explanation: '「廃人」は侮蔑ではない。それは「特化した者」の別名。狂気じみた一芸の人を、世界は廃人と呼んで安心しようとする。',
    source: 'このすば × Elona 第29話 追加感想',
    coreLink: '核3 内向き凝縮',
    date: '2026-05-11',
    tags: ['廃人', '特化', '核3', '革命'],
    charTentative: 'gomydorod',
    // 服牢365 2026 ver メタ
    genre: '凝',
    weekday: 'wed',
    sin: '怠惰',
    virtue: '勤勉',
    state: 'sublimated',
    calendarDate: '01-02',
    month: 1,
    version: '2026'

  },
  {
    id: 'q_20260511_003',
    quote: '世界をハックしているかのような感覚、全能感。',
    explanation: '創造することは、世界を内側からハックすること。ルールを知り、利用し、自分の目的に最適化する。神視点。',
    source: 'このすば × Elona 第31話 追加感想',
    coreLink: '核1 創造性（世界を作り続ける）',
    date: '2026-05-11',
    tags: ['ハック', '全能感', '核1', '神視点'],
    charTentative: 'ofuroni',
    // 服牢365 2026 ver メタ
    genre: '創',
    weekday: 'mon',
    sin: '傲慢',
    virtue: '謙虚',
    state: 'transit',
    calendarDate: '01-03',
    month: 1,
    version: '2026'

  },
  {
    id: 'q_20260511_004',
    quote: '世界をマクロとミクロで味わい尽くしたい。',
    explanation: '神視点（マクロ）と廃人視点（ミクロ）を両方持つこと。それが世界を「味わう」ということ。どちらか一方では足りない。',
    source: 'このすば × Elona 第31話 追加感想',
    coreLink: '思考スタイル（点と点は線になる）',
    date: '2026-05-11',
    tags: ['マクロ', 'ミクロ', '二項両立'],
    charTentative: 'vinira',
    // 服牢365 2026 ver メタ
    genre: '化',
    weekday: 'thu',
    sin: '色欲',
    virtue: '純潔',
    state: 'sublimated',
    calendarDate: '01-04',
    month: 1,
    version: '2026'

  },
  {
    id: 'q_20260511_005',
    quote: '特別な才能じゃなく、諦めなかったから続いた。',
    explanation: '才能を信じる者は、続かない。諦めない者だけが、結果として才能と呼ばれるものを手に入れる。順序が逆。',
    source: 'このすば × Elona 第28話 感想（主人公の言葉に共鳴）',
    coreLink: '核3 + 核1',
    date: '2026-05-11',
    tags: ['諦めない', '継続', '才能の正体'],
    charTentative: 'hotoke',
    // 服牢365 2026 ver メタ
    genre: '凝',
    weekday: 'wed',
    sin: '怠惰',
    virtue: '勤勉',
    state: 'sublimated',
    calendarDate: '01-05',
    month: 1,
    version: '2026'

  },
  {
    id: 'q_20260511_006',
    quote: '才能よりも実力の人。',
    explanation: '才能は配られるもの、実力は積むもの。配られたものに頼る者は、配られた量で止まる。積んだ者は、止まらない。',
    source: 'このすば × Elona 第28話',
    coreLink: '核3',
    date: '2026-05-11',
    tags: ['才能vs実力', '積み重ね'],
    charTentative: 'antaimelt',
    // 服牢365 2026 ver メタ
    genre: '凝',
    weekday: 'wed',
    sin: '怠惰',
    virtue: '勤勉',
    state: 'sublimated',
    calendarDate: '01-06',
    month: 1,
    version: '2026'

  },
  {
    id: 'q_20260511_007',
    quote: '土台のしっかりした仙人のようなポジション。',
    explanation: 'ぶっ飛んでいるが、足元は揺らがない。狂気と冷静が、同じ人の中に同居する。それが仙人の最終形。',
    source: 'このすば × Elona 第27話',
    coreLink: '核1 仙人の平穏 + 二項両立',
    date: '2026-05-11',
    tags: ['仙人', '土台', '二項両立'],
    charTentative: 'hotoke',
    // 服牢365 2026 ver メタ
    genre: '化',
    weekday: 'thu',
    sin: '色欲',
    virtue: '純潔',
    state: 'sublimated',
    calendarDate: '01-07',
    month: 1,
    version: '2026'

  },
  {
    id: 'q_20260511_008',
    quote: '安定感のあるまま、ぶっ飛んでいたい。',
    explanation: '世間は「ぶっ飛び」と「安定」を対立と見る。創造者にとって、両立する。それが目指す姿勢。',
    source: 'このすば × Elona 第27話',
    coreLink: '核4 アナログ × デジタルのキメラ',
    date: '2026-05-11',
    tags: ['ぶっ飛び', '安定', '二項両立'],
    charTentative: 'tenguno',
    // 服牢365 2026 ver メタ
    genre: '化',
    weekday: 'thu',
    sin: '色欲',
    virtue: '純潔',
    state: 'sublimated',
    calendarDate: '01-08',
    month: 1,
    version: '2026'

  },
  {
    id: 'q_20260511_009',
    quote: '世界に隠れてやっていますみたいな。',
    explanation: '見せびらかすために作るのではない。誰にも見つからない場所で、密かに、目的のために、作る。それが牢の中の創造。',
    source: 'このすば × Elona 第31話 追加感想',
    coreLink: '核3 牢に閉じこもって作り込み',
    date: '2026-05-11',
    tags: ['隠れて', '牢', '密造', '核3'],
    charTentative: 'ofuroni',
    // 服牢365 2026 ver メタ
    genre: '凝',
    weekday: 'wed',
    sin: '怠惰',
    virtue: '勤勉',
    state: 'sublimated',
    calendarDate: '01-09',
    month: 1,
    version: '2026'

  },
  {
    id: 'q_20260511_010',
    quote: 'ひたすら作業している人になりたい。',
    explanation: '何かを成し遂げたい人ではなく、ただ、作業を続けている人。結果ではなく、過程そのものに住む者。',
    source: 'このすば × Elona 第28話',
    coreLink: '核3',
    date: '2026-05-11',
    tags: ['ひたすら', '作業', '過程'],
    charTentative: 'kawuru',
    // 服牢365 2026 ver メタ
    genre: '凝',
    weekday: 'wed',
    sin: '怠惰',
    virtue: '勤勉',
    state: 'sublimated',
    calendarDate: '01-10',
    month: 1,
    version: '2026'

  },

  // ↓ 32話追加から抽出（キャラ未配置） ↓
  {
    id: 'q_20260511_011',
    quote: '直感は、言語化できない感動の蓄積である。',
    explanation: '何かを「感じる」とは、過去の感動の総量が一瞬で答えを出す現象。経験を積まない者の直感は、ただの当て推量である。',
    source: 'このすば × Elona 第32話 追加感想（露店の目利き）から抽出',
    coreLink: '核3 内向き凝縮',
    date: '2026-05-11',
    tags: ['直感', '目利き', '感動', '蓄積', '核3'],
    charTentative: null,  // 未配置 ── 後で
    // 服牢365 2026 ver メタ
    genre: '凝',
    weekday: 'wed',
    sin: '怠惰',
    virtue: '勤勉',
    state: 'sublimated',
    calendarDate: '01-11',
    month: 1,
    version: '2026'

  },
  {
    id: 'q_20260511_012',
    quote: '目利きは、生まれつきではなく、見続けた者に宿る。',
    explanation: '慧眼は天賦ではない。何百何千の物を、ただ、見続けた者にだけ、ある瞬間、開く。',
    source: 'このすば × Elona 第32話 追加感想（露店の目利き）から抽出',
    coreLink: '核3',
    date: '2026-05-11',
    tags: ['目利き', '慧眼', '見続ける', '核3'],
    charTentative: null,  // 未配置 ── 後で
    // 服牢365 2026 ver メタ
    genre: '凝',
    weekday: 'wed',
    sin: '怠惰',
    virtue: '勤勉',
    state: 'sublimated',
    calendarDate: '01-12',
    month: 1,
    version: '2026'

  },

  // ↓ 32話追加(3度目) ── 創作の最深部の動機 ↓
  {
    id: 'q_20260511_013',
    quote: '創作の動機は、誰かに何かを贈りたいという欲求から来ている。',
    explanation: 'Blender も、曲も、絵も、AI も、全部同じ根。世界を使役する（神視点）の裏側に、誰かに何かを渡したい（贈与）がある。両方そろって、創作は完成する。',
    source: 'このすば × Elona 第32話 追加感想3（自作プレゼントの欲求）',
    coreLink: '核1 創造性 × 核5 利他的な愛と大団円',
    date: '2026-05-11',
    tags: ['創作', '贈り物', '動機', '核1', '核5', '神視点の裏側'],
    charTentative: null,
    // 服牢365 2026 ver メタ
    genre: '贈',
    weekday: 'fri',
    sin: '強欲',
    virtue: '慈悲',
    state: 'sublimated',
    calendarDate: '01-13',
    month: 1,
    version: '2026'

  },
  {
    id: 'q_20260511_014',
    quote: '反省できるのは、反省できる高さに上がった証拠である。',
    explanation: '5年前の自分は、そもそも気づきもしなかった。今、過去を客観視できるのは、視野がそこまで育ったから。「甘い」と感じられること自体が、もう甘くない。',
    source: 'このすば × Elona 第32話 追加感想3（昔のクソガキな自分への反省）',
    coreLink: '核5 自己愛 ＋ 思考スタイル',
    date: '2026-05-11',
    tags: ['反省', '成長', '自己観察', '視野'],
    charTentative: null,
    // 服牢365 2026 ver メタ
    genre: '問',
    weekday: 'sat',
    sin: '暴食',
    virtue: '節制',
    state: 'sublimated',
    calendarDate: '01-14',
    month: 1,
    version: '2026'

  },
  {
    id: 'q_20260511_015',
    quote: 'ミクロを365日積めば、マクロの重力になる。',
    explanation: '声が小さくても、視点が狭くても、1日1個ずつ積めば、365日後には世界に届く重みになる。それが「服牢365」というプロジェクトの宣言そのもの。',
    source: 'このすば × Elona 第32話 追加感想3（ミクロからマクロ戦略）',
    coreLink: '核3 内向き凝縮 → 超重力源',
    date: '2026-05-11',
    tags: ['ミクロ', 'マクロ', '積み重ね', '365日', '核3'],
    charTentative: null,
    // 服牢365 2026 ver メタ
    genre: '凝',
    weekday: 'wed',
    sin: '怠惰',
    virtue: '勤勉',
    state: 'sublimated',
    calendarDate: '01-15',
    month: 1,
    version: '2026'

  },
  {
    id: 'q_20260511_016',
    quote: '譲与と貸与の違いを知る者は、所有の重みを知る者である。',
    explanation: '完全に渡すのか、一時的に渡すのか。創造者は、自分の作ったものをどう手放すか選ぶ。所有を理解しない者は、贈ることも貸すこともできない。',
    source: 'このすば × Elona 第32話 追加感想3（大人の概念）',
    coreLink: '核1 創造性 ＋ 大人の所有理解',
    date: '2026-05-11',
    tags: ['譲与', '貸与', '所有', '大人', '創作の手放し方'],
    charTentative: null,
    // 服牢365 2026 ver メタ
    genre: '贈',
    weekday: 'fri',
    sin: '強欲',
    virtue: '慈悲',
    state: 'sublimated',
    calendarDate: '01-16',
    month: 1,
    version: '2026'

  },

  // ↓ 32話追加4 ── 5本柱完全網羅（核2 初発掘） ↓
  {
    id: 'q_20260511_017',
    quote: 'このために生きてんだ、と言える人が一番かっこいい。',
    explanation: '目的があると人は強い。庶民でも、創作者でも、共通する強さの根。野原ひろしがビールを飲む瞬間も、創作者が1万行書く瞬間も、同じ「このために」の宣言である。',
    source: 'このすば × Elona 第32話 追加感想4（野原ひろし型の理想）',
    coreLink: '核1 創造性 ＋ 核5 利他的な愛',
    date: '2026-05-11',
    tags: ['目的', '生きる理由', '野原ひろし', '創作者の強さ', '日常の儀式'],
    charTentative: null,
    // 服牢365 2026 ver メタ
    genre: '行',
    weekday: 'sun',
    sin: '憤怒',
    virtue: '忍耐',
    state: 'sublimated',
    calendarDate: '01-17',
    month: 1,
    version: '2026'

  },
  {
    id: 'q_20260511_018',
    quote: '労働者と資本家は善悪ではなく、磁力の方向が違うだけだ。',
    explanation: '世間は「サラリーマン」と「起業家」を対立させたがる。創造主にとっては、磁力の方向が違うだけ。否定しないし、自分も否定されない。',
    source: 'このすば × Elona 第32話 追加感想4（仕事への不安から）',
    coreLink: '核2 重力／引力の物理法則 ★ 初発掘',
    date: '2026-05-11',
    tags: ['労働者vs資本家', '磁力', '善悪二元論の否定', '核2'],
    charTentative: null,
    // 服牢365 2026 ver メタ
    genre: '引',
    weekday: 'tue',
    sin: '嫉妬',
    virtue: '親切',
    state: 'sublimated',
    calendarDate: '01-18',
    month: 1,
    version: '2026'

  },
  {
    id: 'q_20260511_019',
    quote: 'マクロで自分の人生を捉えれば、今の選択は、ゴールへの一歩である。',
    explanation: 'ミクロで見れば「給料ゼロ」「同級生に置いていかれる」。マクロで見れば「資産を積んでいる5年計画の途中」。両方真実だが、生き方を決めるのはマクロ。',
    source: 'このすば × Elona 第32話 追加感想4',
    coreLink: '思考スタイル + 核1',
    date: '2026-05-11',
    tags: ['マクロ', '長期視点', '不安への答え', '5年'],
    charTentative: null,
    // 服牢365 2026 ver メタ
    genre: '引',
    weekday: 'tue',
    sin: '嫉妬',
    virtue: '親切',
    state: 'transit',
    calendarDate: '01-19',
    month: 1,
    version: '2026'

  },
  {
    id: 'q_20260511_020',
    quote: 'ぶれない精神力でパフォーマンスし、別の側面では余裕で見守る。それが理想の仙人だ。',
    explanation: '前面（パフォーマンス）と背面（見守り）の両立。表に立つ時はぶっ飛び、退いた時は仙人。同じ人の中に同居する二面性が、社会的応用形の核1。',
    source: 'このすば × Elona 第32話 追加感想4',
    coreLink: '核1 仙人 ＋ 二項両立',
    date: '2026-05-11',
    tags: ['パフォーマンス', '見守り', '仙人', '二項両立', '前面と背面'],
    charTentative: null,
    // 服牢365 2026 ver メタ
    genre: '化',
    weekday: 'thu',
    sin: '色欲',
    virtue: '純潔',
    state: 'sublimated',
    calendarDate: '01-20',
    month: 1,
    version: '2026'

  },
  {
    id: 'q_20260511_021',
    quote: '時間を売るのではなく、資産を作る。それが資本家の戦い方である。',
    explanation: '労働は時間を給料に変える。創作は時間を資産に変える。給料は退職で消えるが、資産は残り続ける。RAINA も服牢365 も、すべて作品＝資産である。',
    source: 'このすば × Elona 第32話 追加感想4',
    coreLink: '核1 ＋ 核2',
    date: '2026-05-11',
    tags: ['資本家', '資産', '創作経済', '時間', '核2'],
    charTentative: null,
    // 服牢365 2026 ver メタ
    genre: '贈',
    weekday: 'fri',
    sin: '強欲',
    virtue: '慈悲',
    state: 'sublimated',
    calendarDate: '01-21',
    month: 1,
    version: '2026'

  },

  // ↓ 32話追加5 ── 筋トレも創作サイド ↓
  {
    id: 'q_20260511_022',
    quote: '筋トレも創作サイドである。身体は天井なしの資産だから。',
    explanation: '時間を売る労働ではなく、資産を作る側。筋肉は退職と無関係に残り、評価軸は自分で、PRに天井はない。コードと同じ「創作」の系譜に身体も入る。核4「アナログ × デジタル」の両輪。',
    source: '創造主の整理（労働者 vs 創作者 対比表より）2026-05-11',
    coreLink: '核4 アナログ × デジタル ＋ 核2 重力／引力',
    date: '2026-05-11',
    tags: ['筋トレ', '身体', '創作サイド', '資産', '核4', 'SASUKE'],
    charTentative: null,
    // 服牢365 2026 ver メタ
    genre: '化',
    weekday: 'thu',
    sin: '色欲',
    virtue: '純潔',
    state: 'sublimated',
    calendarDate: '01-22',
    month: 1,
    version: '2026'

  },

  // ↓ 33話 ── 創作殉教仙人・両翼自作・読書完走 ↓
  {
    id: 'q_20260511_023',
    quote: '片翼じゃいつか落ちる。両翼を自作できる者になりたい。',
    explanation: '実力だけ・精神力だけ・交渉力だけ・コミュ力だけ ── どれか一つでは飛び続けられない。仙人と呼ばれる者は、自分の両翼を自作できる存在。片方に頼れば、いずれその片方を失った時に堕ちる。',
    source: 'このすば × Elona 第33話 感想',
    coreLink: '核4 アナログ × デジタル（両輪の本質） + 二項両立',
    date: '2026-05-11',
    tags: ['両翼', '片翼じゃ落ちる', '自作', '仙人', '核4', '二項両立'],
    charTentative: null,
    // 服牢365 2026 ver メタ
    genre: '化',
    weekday: 'thu',
    sin: '色欲',
    virtue: '純潔',
    state: 'sublimated',
    calendarDate: '01-23',
    month: 1,
    version: '2026'

  },
  {
    id: 'q_20260511_024',
    quote: '読書は完走させて、後で振り返る。それが意味になる。',
    explanation: '読みっぱなしは、ただの娯楽。完走して、振り返り、構造化されたとき、初めて経験は意味になる。読雨という装置の本質。',
    source: 'このすば × Elona 第33話 感想（読書を完走にする）',
    coreLink: '核3 内向き凝縮 ＋ 思考スタイル「点と点は線になる」',
    date: '2026-05-11',
    tags: ['読書', '完走', '振り返り', '構造化', '読雨'],
    charTentative: null,
    // 服牢365 2026 ver メタ
    genre: '行',
    weekday: 'sun',
    sin: '憤怒',
    virtue: '忍耐',
    state: 'sublimated',
    calendarDate: '01-24',
    month: 1,
    version: '2026'

  },
  {
    id: 'q_20260511_025',
    quote: '創作殉教仙人 ── 自分の両翼を自作できる存在。',
    explanation: '殉教（信念に身を捧げる）と仙人（超越した余裕）は矛盾するように見えて、両立する。創作に殉じながら、なお余裕を持って見守れる者。それが服牢井像の理想像。',
    source: 'このすば × Elona 第33話 感想（創造主が新概念として言語化）',
    coreLink: '核1 創造性 ＋ 核5 利他的な愛 ＋ 二項両立',
    date: '2026-05-11',
    tags: ['創作殉教仙人', '殉教', '仙人', '両翼自作', '服牢井像', '理想像'],
    charTentative: null,
    // 服牢365 2026 ver メタ
    genre: '創',
    weekday: 'mon',
    sin: '傲慢',
    virtue: '謙虚',
    state: 'sublimated',
    calendarDate: '01-25',
    month: 1,
    version: '2026'

  },

  // ↓ 33話追加 ── 読書 → 行動衝動への変換 ↓
  {
    id: 'q_20260511_026',
    quote: '読書は、感想を経て、行動衝動になる。',
    explanation: '読みっぱなしは娯楽。感想を言語化し、名言として核に響かせると、「やりたい」が起きる。読雨と服牢365 が連動した時、読書は単なる消費から、行動の発火装置に変わる。',
    source: 'このすば × Elona 第33話 追加感想（Elona やりたくなった瞬間）',
    coreLink: '核1 創造性 + 核3 内向き凝縮（読書も凝縮の一形態）',
    date: '2026-05-11',
    tags: ['読書', '感想', '行動衝動', '読雨', '服牢365', '変換装置'],
    charTentative: null,
    // 服牢365 2026 ver メタ
    genre: '行',
    weekday: 'sun',
    sin: '憤怒',
    virtue: '忍耐',
    state: 'sublimated',
    calendarDate: '01-26',
    month: 1,
    version: '2026'

  },
  {
    id: 'q_20260511_027',
    quote: '前よりもっと深く ── これは過去経験 × 今の理想の積である。',
    explanation: '同じことを「再開」する時、人は前と同じことをするのではなく、前回の経験に今回の理想をかけ算する。再開は退行ではなく、より深い始まり。',
    source: 'このすば × Elona 第33話 追加感想（Elona アカウント再開）',
    coreLink: '核3 内向き凝縮（経験の蓄積）',
    date: '2026-05-11',
    tags: ['再開', '深化', '過去経験', '理想', '積み重ね'],
    charTentative: null,
    // 服牢365 2026 ver メタ
    genre: '凝',
    weekday: 'wed',
    sin: '怠惰',
    virtue: '勤勉',
    state: 'sublimated',
    calendarDate: '01-27',
    month: 1,
    version: '2026'

  },

  // ↓ Elona プレイ第1セッション（殉教世界プレイン Lv5・25分） ↓
  {
    id: 'q_20260511_028',
    quote: 'プレイヤー名は、自分の理想を凝縮した儀式である。',
    explanation: '「殉教世界プレイン」── 殉教（信念献身）× 世界（神視点）× プレイン（領域）。Elona キャラの命名は、創造主の理想自我を身体化する儀式。名前を付ける行為自体が、自分の核を再確認する祈り。',
    source: 'Elona プレイ感想（2026-05-11 / プレイヤー名「殉教世界プレイン」）',
    coreLink: '核1 創造性 ＋ 33話「創作殉教仙人」',
    date: '2026-05-11',
    tags: ['命名', '殉教世界プレイン', '理想自我', '儀式', 'Elona', '創作殉教仙人'],
    charTentative: null,
    // 服牢365 2026 ver メタ
    genre: '創',
    weekday: 'mon',
    sin: '傲慢',
    virtue: '謙虚',
    state: 'sublimated',
    calendarDate: '01-28',
    month: 1,
    version: '2026'

  },
  {
    id: 'q_20260511_029',
    quote: 'ポモドーロで遊んで、読雨で感想を書く。それが創作殉教仙人の正しいリズム。',
    explanation: '25分集中してやって、5分振り返って書く。「遊びすぎ」は構造的に防げる。時間管理 × 振り返り装置 = 廃人ペースの正しい運用。Elona も SS も筋トレも、同じリズムに乗る。',
    source: 'Elona プレイ感想（2026-05-11 / 25分セッション後の運用ルール発明）',
    coreLink: '核3 内向き凝縮（時間も凝縮の対象）',
    date: '2026-05-11',
    tags: ['ポモドーロ', '読雨', '時間管理', '振り返り', 'リズム', '創作殉教仙人'],
    charTentative: null,
    // 服牢365 2026 ver メタ
    genre: '行',
    weekday: 'sun',
    sin: '憤怒',
    virtue: '忍耐',
    state: 'sublimated',
    calendarDate: '01-29',
    month: 1,
    version: '2026'

  }

  // ↓ 34話 ── 純愛・かわいい / 鬼畜と自己制御 ↓
  {
    id: 'q_20260511_030',
    quote: 'ほのぼのかわいいこそ、本物のかわいい。',
    explanation: 'SNSで踊っている派手なかわいさは、見せるためのかわいさ。ほのぼの・ぽわぽわは、相手の隣に居続けるかわいさ。創造主の純愛欲求は、後者を求める。',
    source: 'このすば × Elona 第34話 感想（ぽわぽわりっちぃ・純愛）',
    coreLink: '核5 利他的な愛 ＋ 27話「純愛したい」',
    date: '2026-05-11',
    tags: ['ほのぼの', 'ぽわぽわ', '純愛', 'かわいい', 'ウィズ', 'SNSとの対比'],
    charTentative: null,
    // 服牢365 2026 ver メタ
    genre: '化',
    weekday: 'thu',
    sin: '色欲',
    virtue: '純潔',
    state: 'sublimated',
    calendarDate: '01-30',
    month: 1,
    version: '2026'
  },
  {
    id: 'q_20260511_031',
    quote: '鬼畜は愛を持ってやる。それが自己制御された嫌悪である。',
    explanation: '嫌悪をぶつけるだけでは、ただの暴力。愛から発する鬼畜は、相手のための厳しさになる。自分でコントロールしている嫌悪だけが、芸術になる。仙人とは、マクロ視点とミクロ精度を両立し、嫌悪さえも美学にできる者。',
    source: 'このすば × Elona 第34話 追加感想（鬼畜と愛・自己制御）',
    coreLink: '核5 利他的な愛（絶対悪を作らない）＋ 二項両立',
    date: '2026-05-11',
    tags: ['鬼畜', '愛', '自己制御', '嫌悪', '仙人', 'マクロ×ミクロ精度'],
    charTentative: null,
    // 服牢365 2026 ver メタ
    genre: '凝',
    weekday: 'wed',
    sin: '怠惰',
    virtue: '勤勉',
    state: 'sublimated',
    calendarDate: '01-31',
    month: 1,
    version: '2026'
  }

  // ↓ 「名言」と言われたら、ここに私が追記していく ↓

];

// ─── キャラ情報（仮配置用・後で見直す） ───
const CHARS = {
  koron:     { name: 'コロンコロン・プリナイトメア', short: 'コロン',     trait: '友愛',     emoji: '🐭' },
  kawuru:    { name: 'カウル・プリラスニア',         short: 'カウル',     trait: '賢諦',     emoji: '🐂' },
  ululw:     { name: 'ウルルウ・プリメゲルガブ',     short: 'ウルルウ',   trait: '勇迅',     emoji: '🐅' },
  vinira:    { name: 'バイニラ・プリサタン',          short: 'バイニラ',   trait: '寵愛',     emoji: '🐰' },
  pupe:      { name: 'プペ・プリングイン',            short: 'プペ',       trait: '王冠',     emoji: '🐉' },
  ofuroni:   { name: 'オフロニ・プリヴェール',        short: 'オフロニ',   trait: '学問',     emoji: '🐍' },
  hotoke:    { name: 'ホトケ・プリミライフ',          short: 'ホトケ',     trait: '仙人',     emoji: '🐎' },
  hera:      { name: 'ヘラー・プリドロイド',          short: 'ヘラー',     trait: '電羊',     emoji: '🐑' },
  nmonkey:   { name: 'ンモンキー・プリムーン',         short: 'ンモンキー', trait: '芸才',     emoji: '🐒' },
  tenguno:   { name: 'テングゥーノ・プリフレイム',     short: 'テングゥーノ', trait: '悪友',   emoji: '🐦‍🔥' },
  antaimelt: { name: 'アンタイメルト・プリンス',       short: 'アンタイメルト', trait: '忠義', emoji: '🐶' },
  gomydorod: { name: 'ゴミュドルード・プリカイザー',   short: 'ゴミュドルード', trait: '革命', emoji: '🐗' }
};

// 公開
if (typeof window !== 'undefined') {
  window.QUOTES = QUOTES;
  window.CHARS = CHARS;
}

// ─── 365 上限ウォッチ（300/350/365/365超 で console 警告） ───
(function watchOverflow() {
  const n = QUOTES.length;
  if (typeof console === 'undefined') return;
  if (n >= 365) {
    console.warn('%c☔ 服牢365 ★1年完走★ ' + n + '/365', 'color:#c9a84c;font-weight:900;font-size:1.2rem;');
    console.warn('365を超えました。次年度版（服牢365_v2）に分けるか、無制限拡張するか判断してください。');
  } else if (n >= 350) {
    console.warn('☔ 服牢365 残り ' + (365 - n) + ' で完走（' + n + '/365）');
  } else if (n >= 300) {
    console.info('☔ 服牢365 進捗：' + n + '/365 ── 完走間近');
  }
})();
