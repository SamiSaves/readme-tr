# Liquid.qihl README

Liquid.qihl'ye hoşgeldiniz! Bu döküman sunucu ile etkileşimde bulunabilmeniz için gereken tüm bilgileri içerir. Lütfen `#help-desk` (#yardım-masası) kanalına danışmadan önce bu dökümanın tamamını okuyun, bu sayede yetkililerin vaktini boşa harcamamış olursunuz. Teşekkürler.

## İçindekiler

1. [Kurallar](#kurallar)  
2. [Dereceler (Ranklar)](#dereceler-ranklar)  
	2.1 [Derece Kontrolü](#derece-kontrolü)  
3. [Oyuncu Rapor Etme](#oyuncu-rapor-etme)  
4. [Lobi Bulma, Katılma ve Kurma](#lobi-bulma-katılma-ve-kurma)  
5. [Başlangıç](#başlangıç)

## Kurallar
Kuralları ihlal etmek **BAN** sebebidir.

1. Hakaret etmek, izinsiz başkalarının bilgilerini paylaşmak ve DDOS atmak yasaktır.
2. Discord Hizmet Koşullarını ihlal etmek yasaktır.
3. Kendi derecenden yüksek lobilere girmek yasaktır. Girmeniz halinde **oyun içerisinde** `-refresh` yazarak lobiden ayrılmak zorundasınız. Bu kural sadece Chessbot ile kurulan lobiler için geçerlidir.
4. Lobi şifrelerini Discord lobi kanallarında paylaşmak yasaktır.
5. Lobi şifrelerini paylaşmak yasaktır (lobiye parti yolu ile girmek de dahil).
6. Sunucuya hangi Steam hesabı ile kayıtlıysanız o hesap ile lobiye katılmak zorundasınız.

## Dereceler (Ranklar)
Lobiler bu derecelere göre belirlenir:

- Beginner (Başlangıç Düzeyi): `Unknown`+ (Bilinmeyen+)
- Intermediate (Orta Düzey): `Bishop-1`+ (Fil-1+)
- Advanced (Gelişmiş): `Bishop-6`+ (Fil-6+)
- Expert (Uzman): `Rook-1`+ (Kale-1+)
- Master (Usta): `Rook-5`+ (Kale-5+)

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
 
1. Görünmez **olmadığınızdan** emin olun. Kullanıcı Ayarlarına tıklayın.
![enter image description here](https://lh3.googleusercontent.com/BKWZi8LTdT8v6fdAQiwyLtOuR_jFj5CBjvxObViUGdM7F4jxnlGH3CxAfKgkP075SDZFcx0FvYY)

2. Bağlantılara gidin ve Steam ikonuna tıklayın. 
![enter image description here](https://lh3.googleusercontent.com/0BHECBR5G8obQXgH_J1IjqotC0jAQW2sXPBsFlngSYPPS4Pu_3LlAikr0Ls0WK8ymdb7ZbLhTkE)

3. Oturum Aç'a tıklayın.  
![enter image description here](https://lh3.googleusercontent.com/Kc5SWqhe_lUFGBwGMVxmi7g3YWbHH1rouljLqFYFy0GyRZq-ECmLzWCPYVErm5gCFsQjHw6K54M)

4. Discord'daki Steam bağlantısının herkese açık olduğundan emin olun.
![enter image description here](https://lh3.googleusercontent.com/XnuTe3xZWuJ0P9em1hM6a1ne9QsAFjFR_QEfi5ZVSOupezvNTh0ef5r58LsxJPCxskRoDyLJods)

5. Bu linke tıklayın: <a href="http://autochessbot.vinthian.com" target="_blank">autochessbot.vinthian.com</a>. Steam ve Discord hesaplarının doğru olduğuna emin olduktan sonra Onayla'ya tıklayın.
![enter image description here](https://lh3.googleusercontent.com/08ZHOcSVKHEjHixMc53zFEc-zsw9fckQgiyG_T6dnNpot8F3vjmseO5Hoeiye8HwmudNYGawLCY) 

6. Doğru `Steam64ID`'si olduğuna emin olun ve  hesabınıza tıklayın.  
![enter image description here](https://lh3.googleusercontent.com/W2TnP6mdOc0P_jULKu-wQZvYr8-bNwszT-lY19XgFT5p5C19jBZOjB3yVd0G6Tj-cchs4ufHogE)

7. Tebrikler, onaylandınız! Artık Discord'da yeni kanallar görebilirsiniz (sol tarafta `#beginner-lobbies` (Başlangıç Lobileri) vb.). Eğer bişeyler yanlış gittiyse, aynı işlemleri tekrardan uygulayın ve bunu yaparken doğru Discord hesabını eşleştirdiğinize ve Discord hesabınızın görünmez olmadığına emin olun. Eğer bunlar da işe yaramazsa `#help-desk` (#yardım-masası) kanalından destek alabilirsiniz.
![enter image description here](https://lh3.googleusercontent.com/1uOA1tSQgY02_in_NJZ0ymz64tDwu-mlhHWaqUkHVlt37S-lEx80g7y_hu_9LHoRt0I9_g1Yoa8)

8. `#chessbot-commands` kanalında  `!updateroles` komutunu kullanarak rollerinizi güncelleyebilirsiniz.
    
9. `#league-region` (#lobi-bölgesi) kanalındaki yazıya bulunduğunuz bölgenin emojisi ile tepki vererek herhangi bir lobi kurulduğunda bundan bildirim ile haberdar olabilirsiniz. Eğer bundan rahatsız oluyorsanız, tepkinizi geri alabilirsiniz.

10. İyi Eğlenceler!

**Çevirmen Moderatör:** @omrtozd#6320