const default_web_list = [
  {
    url: 'https://www.enoden.co.jp/',
    name: '江ノ島電鉄株式会社',
    image_pc: 'enoden.png',
    image_sp: 'enoden_sp.png',
    category: '交通',
    color: ['Green'],
  },{
    url: 'https://www.jal.com/ja/',
    name: 'JAL企業サイト',
    image_pc: 'jal.png',
    image_sp: 'jal_sp.png',
    category: '交通',
    color: ['Red', 'White'],
  },{
    url: 'https://www.meiji.com/',
    name: '明治ホールディングス株式会社',
    image_pc: 'meiji.png',
    image_sp: 'meiji_sp.png',
    category: '飲料・食品',
    color: ['Red', 'Brown'],
  },{
    url: 'https://www.tokyometro.jp/index.html',
    name: '東京メトロ',
    image_pc: 'tokyometro.png',
    image_sp: 'tokyometro_sp.png',
    category: '交通',
    color: ['Blue'],
  },{
    url: 'https://www.hoppy-happy.com/',
    name: 'ホッピービバレッジ株式会社',
    image_pc: 'hoppy.png',
    image_sp: 'hoppy_sp.png',
    category: '飲料・食品',
    color: ['Yellow'],
  },{
    url: 'https://www.seiburailway.jp/',
    name: '西武鉄道Webサイト',
    image_pc: 'seiburailway.png',
    image_sp: 'seiburailway_sp.png',
    category: '交通',
    color: ['Light Blue', 'Green'],
  },{
    url: 'https://www.kotsu.metro.tokyo.jp/',
    name: '東京都交通局',
    image_pc: 'kotsu_metro_tokyo.png',
    image_sp: 'kotsu_metro_tokyo_sp.png',
    category: '交通',
    color: ['Green'],
  },{
    url: 'https://www.ana.co.jp/group/',
    name: 'ANAグループ企業情報',
    image_pc: 'ana.png',
    image_sp: 'ana_sp.png',
    category: '交通',
    color: ['Blue'],
  },{
    url: 'https://www.odakyubus.co.jp/',
    name: '小田急バス',
    image_pc: 'odakyubus.png',
    image_sp: 'odakyubus_sp.png',
    category: '交通',
    color: ['Blue'],
  },{
    url: 'https://www.jreast.co.jp/',
    name: 'JR東日本',
    image_pc: 'jreast.png',
    image_sp: 'jreast_sp.png',
    category: '交通',
    color: ['Green'],
  },{
    url: 'https://www.asahibeer.co.jp/',
    name: 'アサヒビール',
    image_pc: 'asahibeer.png',
    image_sp: 'asahibeer_sp.png',
    category: '飲料・食品',
    color: ['Blue'],
  },{
    url: 'https://www.odakyu.jp/',
    name: '小田急電鉄',
    image_pc: 'odakyu.png',
    image_sp: 'odakyu_sp.png',
    category: '交通',
    color: ['Light Blue','Blue'],
  },{
    url: 'https://www.morinaga.co.jp/',
    name: '森永製菓株式会社',
    image_pc: 'morinaga.png',
    image_sp: 'morinaga_sp.png',
    category: '飲料・食品',
    color: ['Red', 'Brown'],
  },{
    url: 'https://www.suntory.co.jp/',
    name: 'サントリー ホームページ',
    image_pc: 'suntory.png',
    image_sp: 'suntory_sp.png',
    category: '飲料・食品',
    color: ['Light Blue'],
  },{
    url: 'https://www.kirin.co.jp/',
    name: 'KIRIN',
    image_pc: 'kirin.png',
    image_sp: 'kirin_sp.png',
    category: '飲料・食品',
    color: ['Red'],
  },{
    url: 'http://www.meg-snow.com/',
    name: '雪印メグミルク株式会社',
    image_pc: 'meg-snow.png',
    image_sp: 'meg-snow_sp.png',
    category: '飲料・食品',
    color: ['Blue', 'White'],
  },{
    url: 'https://www.akagi.com/',
    name: '赤城乳業株式会社',
    image_pc: 'akagi.png',
    image_sp: 'akagi_sp.png',
    category: '飲料・食品',
    color: ['Light Blue'],
  },{
    url: 'http://www.sapporobeer.jp/',
    name: 'サッポロビール',
    image_pc: 'sapporobeer.png',
    image_sp: 'sapporobeer_sp.png',
    category: '飲料・食品',
    color: ['Yellow','Brown'],
  },{
    url: 'https://www.kao.com/jp/',
    name: 'Kao 花王株式会社',
    image_pc: 'kao.png',
    image_sp: 'kao_sp.png',
    category: '美容・ヘルスケア・健康',
    color: ['Green','White'],
  },{
    url: 'https://www.kanebo-cosmetics.co.jp/',
    name: 'カネボウ化粧品',
    image_pc: 'kanebo.png',
    image_sp: 'kanebo_sp.png',
    category: '美容・ヘルスケア・健康',
    color: ['Red','White'],
  }
];

let vm = new Vue({
  el: '#app',
  data: {
    mode: 'pc',
    category_list: ['交通', '飲料・食品', '美容・ヘルスケア・健康'],
    color_list: ['Red', 'Pink', 'Purple', 'Blue', 'Light Blue', 'Green', 'Yellow', 'Orange', 'Brown', 'Black', 'White', 'Colorful'],
    web_list: default_web_list,
  },
  methods: {
    filterByCategory: function(index){
      let acctive_category = this.category_list[index];
      this.web_list = default_web_list;
      this.web_list = this.web_list.filter(function(item){
        return item.category == acctive_category;
      });
      document.body.classList.toggle("is-open");
    },
    filterByColor: function(index) {
      let acctive_color = this.color_list[index];
      this.web_list = default_web_list;
      this.web_list = this.web_list.filter(function(item){
        let l = item.color.length;
        for (let i = 0; i < l; i++){
          if (item.color[i] == acctive_color) {
            console.log('ok');
            return item.color[i] == acctive_color;
          }
        }
      });
      document.body.classList.toggle("is-open");
    },
    openMenu: function() {
      document.body.classList.toggle("is-open");
    }
  }
})
