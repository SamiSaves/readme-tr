Liquid.qihl README
===

Liquid.qihl'ye hoşgeldiniz! Bu döküman sunucu ile etkileşimde bulunabilmeniz için gereken tüm bilgileri içerir. Lütfen `#help-desk` (#yardım-masası) kanalına danışmadan önce bu dökümanın tamamını okuyun, bu sayede yetkililerin vaktini boşa harcamamış olursunuz. Teşekkürler.

## İçindekiler

1. [Kurallar](#kurallar)  
2. [Dereceler (Ranklar)](#dereceler-ranklar)  
	2.1 [Derece Kontrolü](#derece-kontrolü)  
3. [Oyuncu Rapor Etme](#oyuncu-rapor-etme)  
4. [Lobi Bulma, Katılma ve Kurma](#lobi-bulma-katılma-ve-kurma)  
5. [Başlangıç](#başlangıç)
6. [Onu Bunu Şunu Yaptım Ama Hala Sorun Yaşıyorum](#onu-bunu-şunu-yaptım-ama-hala-sorun-yaşıyorum)

## Kurallar
Kuralları ihlal etmek **BAN** sebebidir.

1. Hakaret etmek, izinsiz başkalarının bilgilerini paylaşmak ve DDOS atmak yasaktır.
2. Lütfen kin ve nefret beslemeyin, ırkçılık yapmayın. Ponçik olun.
3. Discord Hizmet Koşullarını ihlal etmek yasaktır (hile yapmak dahil).
4. Kendi derecenden yüksek lobilere girmek yasaktır. Girmeniz halinde **oyun içerisinde** `-refresh` yazarak lobiden ayrılmak zorundasınız. Bu kural sadece Chessbot ile kurulan lobiler için geçerlidir.
5. Lobi şifrelerini Discord lobi kanallarında paylaşmak yasaktır.
6. Lobi şifrelerini paylaşmak yasaktır (lobiye parti yolu ile girmek de dahil).
7. Sunucuya hangi Steam hesabı ile kayıtlıysanız o hesap ile lobiye katılmak zorundasınız.

## Dereceler (Ranklar)
Lobiler bu derecelere göre belirlenir:

- Beginner (Başlangıç Düzeyi): `Unknown`+ (Bilinmeyen+)
- Intermediate (Orta Düzey): `Bishop-1`+ (Fil-1+)
- Advanced (Gelişmiş): `Bishop-6`+ (Fil-6+)
- Expert (Uzman): `Rook-1`+ (Kale-1+)
- Master (Usta): `Rook-5`+ (Kale-5+)
- Royalty (Kraliyet): `King`+ (Kral+)

### Derece Kontrolü
Bu komutları `#chessbot-commands` kanalında kullanın, `#help-desk` kanalında **değil**.

- Dereceyi kontrol etme ve güncelleme komutu (bu komutu derece atlayınca yeni roller almak için kullanın): `!rank`
- Başkalarının derecelerini kontrol etme komutu (`[]` olmadan): `!rank [@DiscordKullanıcıAdı#0000]` 
             
## Oyuncu Rapor Etme

Eğer bulunduğunuz derece güncel değilse (mesela `Knight(At)-9`'sunuz ve hala `Intermediate` (Orta Düzey) lobilere girebiliyorsanız) derecenizin yenilenmesini bekleyip yeni bir oyuna başlamadan önce derecenizi güncellemelisiniz. Eğer derecenizi güncelledikten sonra herhangi bir lobiye girerseniz ve dereceniz lobi limitinin altında ise (`Bishop-1`(Fil-1)+ lobisindesiniz fakat sizin dereceniz bu limite yetmiyorsa) **oyun içinde** `-refresh` yazarak lobiden ayrılmalısınız. Lobiden ayrılmamanız halinde sunucudan yasaklanırsınız.

Oyuncular sizin derecelerinizi etkilese de, aranızdaki 1 derece fark sizi etkilemiycektir. Genellikle böyle durumlar bazı hatalardan dolayı meydana gelir. Bunu büyütüp olay çıkarmanın manası yok. Tabi bu durum bunu yapabileceğiniz anlamına gelmez. Bu yüzden lütfen dikkatli olun.

Eğer bir oyuncu kuralları çiğnemesi halinde `-refresh` yazarak lobiden ayrılmıyor ise: Bunu ekran görüntüsünü, kuralları çiğneyen oyuncunun Steam Profilinin URL'sini ve lobi kurulduktan sonra ChessBot Lobi mesajının (lobi kurucusunun `!start` yazdıktan sonra çıkan mesajın) ekran görüntüsünü `#player-reports` (#oyuncu-raporları) yazı kanalına atın. Eğer bu üç bilginin tamamını karşılayamıyorsanız ne yazık ki raporunuz geçerli sayılmayacaktır. Bu durum ChessBot'un çalışmadığı yazı kanallarında (`#intermediate-lobbies-no-bot` vb.) kurulan lobiler için **geçerli değildir**. ChessBot ile kurulmayan lobilerdeki dereceler ile ilgilenmiyoruz. Eğer bir oyuncuyu farklı bir nedenden dolayı raporlamak istiyorsanız, raporlamak istediğiniz oyunucuyu ve nedenini `#player-reports` (#oyuncu-raporları) yazı kanalında belirtebilirsiniz.
    
## Lobi Bulma, Katılma ve Kurma

Lobiler ChessBot ile düzenlenir. ChessBot ile etkileşime girebilmek için DM'lerinizi (direkt mesajlarınızı) herkese açık hale getirmelisiniz veya buna eşdeğer bir ayar yapmalısnız. ChessBot size katıldığınız lobinin şifresini DM'den atacaktır. Şifreyi kopyalayın > Auto Chess'i açın > Lobby List (Lobi Listesi) > Find Private Lobbies (Özel Lobi Bul) > Şifreyi yapıştır > Search (Ara) > Join Lobby (Lobiye Katıl). Eğer herhangi bir lobi gözükmüyorsa, lobi henüz kurulmamış olabilir. Sağ üst köşedeki `refresh` (Yenile) butonuna tıklayarak lobileri yenileyebilirsiniz. Oyuncular lobileri herhangi bir bölgeden kurabilir, bu yüzden lobiye katılmadan önce lobinin bölgesine bakarak sizin için uygun olup olmadığını kontrol etmeyi unutmayın.  Aşağıdaki komutları **sadece**  `#[rank(derece)]-lobbies` (lobi kanalları)'nda kullanın (`#master-lobbies` gibi): (`[]` olmadan)

- `!list` kanaldaki mevcut lobileri görmek için.
- `!join` bir `#[rank(derece)]-lobbies[region(bölge)]` kanalındayken lobilere katılmak için (`#intermediate-lobbies-naw` vb.).
- `!join [region(bölge)]` (`[]` olmadan) bölgesi olmayan yazı kanallarında lobilere katılmak için (`#beginner-lobbies` vb.).
	- Bölgeler: `NA` (Kuzey Amerika), `SA` (Güney Avustralya), `EUE` (Doğu Avrupa), `EUW` (Batı Avrupa), `RU` (Rusya), `SEA`, ve `OCE`
- `!join [@DiscordKulllanıcıAdı#0000]` (`[]` olmadan) özellikle bir oyuncunun lobisine katılmak için.
- `!leave` lobiden ayrılmak için.
- `!lobby [@DiscordKullanıcıAdı#0000]` (`[]` olmadan) oyuncuların lobilerindeki oyuncuları görmek için.
- `!host` bir `#[rank(derece)]-lobbies[region(bölge)]` kanalındayken lobi kurmak için (`#intermediate-lobbies-naw` vb.).
- `!host [region]` (`[]` olmadan) bölgesi olmayan yazı kanallarında lobi kurmak içn (`#beginner-lobbies` vb.).
- `!host [region(bölge)] [rank(derece)-x]` lobi derece liminiti belirlemek için (`[]` olmadan. `rank(derece)-x` sizin derecenizden -2 seviye düşük olmalıdır).
- `!lobby` lobinizdeki oyuncuları görmek için.
- `!kick [@DiscordKullanıcıAdı#0000]` (`[]` olmadan) lobinizden herhangi bir oyunu atmak için.
- `!start` lobiniz tamamen dolduğunda oyunu başlatıp lobiyi kapatmak için (8/8 oyuncu). Lütfen kullanmadan önce herkesin bağlandığından emin olun.
- `!cancel` lobinizi iptal etmek için.

         
## Başlangıç
Lütfen başlamadan önce yukarıda yazan **her şeyi** okuduğunuzdan emin olun, bu sayede sunucu ile nasıl etkileşimde bulunabilceğinizi öğrenip yetkililerin vaktini boşa harcamamış olursunuz, teşekkürler. Sunucuya kaydolmak için veya ikinci bir Steam hesabı bağlamak için aşağıdaki adımları uygulayabilirsiniz (oyun içerisinde lobiye katıldığınız veya lobiyi kurduğunuz Steam hesabıyla oynamalısınız).
 
1. Kaydolmadan önce en az 5 maç oynayarak belli bir dereceye sahip olmanız gerek. Dereceniz olmadan bot ile etkileşime giremezsiniz, kısacası sunucuya kaydolamazsınız. Görünmez **olmadığınızdan** emin olun. Kullanıcı Ayarlarına tıklayın.

![enter image description here](https://i.ibb.co/19358Cc/Screenshot-9.png)

2. Bağlantılara gidin ve Steam ikonuna tıklayın.

![enter image description here](https://i.ibb.co/h7fvk9K/Screenshot-1.png)

3. Oturum Aç'a tıklayın.

![enter image description here](https://i.ibb.co/vz3rq0J/Screenshot-2.png)

4. Discord'daki Steam bağlantısının herkese açık olduğundan emin olun.

![enter image description here](https://i.ibb.co/fpP9f6F/Screenshot-6.png)

5. Bu linke tıklayın: <a href="http://autochessbot.vinthian.com" target="_blank">autochessbot.vinthian.com</a>. Steam ve Discord hesaplarının doğru olduğuna emin olduktan sonra Onayla'ya tıklayın.

![enter image description here](https://i.ibb.co/ZSpMVpz/Screenshot-3.png) 

6. Doğru `Steam64ID`'si olduğuna emin olun ve  hesabınıza tıklayın.

![enter image description here](https://i.ibb.co/kX2Jxcq/Screenshot-4.png)

7. Tebrikler, onaylandınız! YOKSA ONAYLANMADINIZ MI? Onaylandınız fakat ben hissediyorum ki bir dahaki maddeyi es geçiceksiniz ve #help-desk kanalına "Bağlanamıyorum yardım edin" yazcaksınız. Bu yüzden 8. maddeyi uygulamayı unutmayın. Artık Discord'da yeni kanallar görebilirsiniz (sol tarafta `#beginner-lobbies` (Başlangıç Lobileri) vb.). Eğer bişeyler yanlış gittiyse, aynı işlemleri tekrardan uygulayın ve bunu yaparken doğru Discord hesabını eşleştirdiğinize ve Discord hesabınızın görünmez olmadığına emin olun. Eğer bunlar da işe yaramazsa `#help-desk` (#yardım-masası) kanalından destek alabilirsiniz.

![enter image description here](https://i.ibb.co/zH1zWnn/Screenshot-5.png)

8. `#chessbot-commands` kanalında  `!updateroles` komutunu kullanarak rollerinizi güncelleyebilirsiniz.
    
9. İyi Eğlenceler!

## Onu Bunu Şunu Yaptım Ama Hala Sorun Yaşıyorum
Bak kardeşim ikimiz de biliyoruz ki üstte yazan herşeyi yapmadın, yapsan sorun yaşamazsın çünkü. Ama ben senin için bi'tekrar özet geçiyim.

- Kaydolmadan önce 5 maç gir ki rankın belirlensin, rankın yoksa nasıl sana yetki verelim.
- Discord'da bağladığın Steam hesabını herkese açık yap, yap ki bot hesabını görebilsin.
- Şimdi botu entegre etmek için tarayıcıya yönlendiriyo ya seni kardeşim, he işte orada dur hele bi'kontrol et. İnternette açık kalan senin Discord hesabın mı yoksa başka Discord hesabı mı?
- Şimdi gelip deme bana hepsini yaptım hala olmuyor, yaz hele bi !updateroles rankını görelim.

**Çevirmen Moderatör:** @omrtozd#6320