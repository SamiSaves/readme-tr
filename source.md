# Liquid.qihl README

Liquid.qihl'ye hoþgeldiniz! Bu döküman sunucu ile etkileþimde bulunabilmeniz için gereken tüm bilgileri içerir. Lütfen `#help-desk` (#yardým-masasý) kanalýna danýþmadan önce bu dökümanýn tamamýný okuyun, bu sayede yetkililerin vaktini boþa harcamamýþ olursunuz. Teþekkürler.

## Ýçindekiler

1. [Kurallar](#kurallar)  
2. [Dereceler (Ranklar)](#dereceler-ranklar)  
	2.1 [Derece Kontrolü](#derece-kontrolü)  
3. [Oyuncu Rapor Etme](#oyuncu-rapor-etme)  
4. [Lobi Bulma, Katýlma ve Kurma](#lobi-bulma-katýlma-ve-kurma)  
5. [Baþlangýç](#baþlangýç)

## Kurallar
Kurallarý ihlal etmek **BAN** sebebidir.

1. Hakaret etmek, izinsiz baþkalarýnýn bilgilerini paylaþmak ve DDOS atmak yasaktýr.
2. Discord Hizmet Koþullarýný ihlal etmek yasaktýr.
3. Kendi derecenden yüksek lobilere girmek yasaktýr. Girmeniz halinde **oyun içerisinde** `-refresh` yazarak lobiden ayrýlmak zorundasýnýz. Bu kural sadece Chessbot ile kurulan lobiler için geçerlidir.
4. Lobi þifrelerini Discord lobi kanallarýnda paylaþmak yasaktýr.
5. Lobi þifrelerini paylaþmak yasaktýr (lobiye parti yolu ile girmek de dahil).
6. Sunucuya hangi Steam hesabý ile kayýtlýysanýz o hesap ile lobiye katýlmak zorundasýnýz.

## Dereceler (Ranklar)
Lobiler bu derecelere göre belirlenir:

- Beginner (Baþlangýç Düzeyi): `Unknown`+ (Bilinmeyen+)
- Intermediate (Orta Düzey): `Bishop-1`+ (Fil-1+)
- Advanced (Geliþmiþ): `Bishop-6`+ (Fil-6+)
- Expert (Uzman): `Rook-1`+ (Kale-1+)
- Master (Usta): `Rook-5`+ (Kale-5+)

### Derece Kontrolü
Bu komutlarý `#chessbot-commands` kanalýnda kullanýn, `#help-desk` kanalýnda **deðil**.

- Dereceyi kontrol etme ve güncelleme komutu (bu komutu derece atlayýnca yeni roller almak için kullanýn): `!rank`
- Baþkalarýnýn derecelerini kontrol etme komutu (`[]` olmadan): `!rank [@DiscordKullanýcýAdý#0000]` 
             
## Oyuncu Rapor Etme

Eðer bulunduðunuz derece güncel deðilse (mesela `Knight(At)-9`'sunuz ve hala `Intermediate` (Orta Düzey) lobilere girebiliyorsanýz) derecenizin yenilenmesini bekleyip yeni bir oyuna baþlamadan önce derecenizi güncellemelisiniz. Eðer derecenizi güncelledikten sonra herhangi bir lobiye girerseniz ve dereceniz lobi limitinin altýnda ise (`Bishop-1`(Fil-1)+ lobisindesiniz fakat sizin dereceniz bu limite yetmiyorsa) **oyun içinde** `-refresh` yazarak lobiden ayrýlmalýsýnýz. Lobiden ayrýlmamanýz halinde sunucudan yasaklanýrsýnýz.

Oyuncular sizin derecelerinizi etkilese de, aranýzdaki 1 derece fark sizi etkilemiycektir. Genellikle böyle durumlar bazý hatalardan dolayý meydana gelir. Bunu büyütüp olay çýkarmanýn manasý yok. Tabi bu durum bunu yapabileceðiniz anlamýna gelmez. Bu yüzden lütfen dikkatli olun.

Eðer bir oyuncu kurallarý çiðnemesi halinde `-refresh` yazarak lobiden ayrýlmýyor ise: Bunu ekran görüntüsünü, kurallarý çiðneyen oyuncunun Steam Profilinin URL'sini ve lobi kurulduktan sonra ChessBot Lobi mesajýnýn (lobi kurucusunun `!start` yazdýktan sonra çýkan mesajýn) ekran görüntüsünü `#player-reports` (#oyuncu-raporlarý) yazý kanalýna atýn. Eðer bu üç bilginin tamamýný karþýlayamýyorsanýz ne yazýk ki raporunuz geçerli sayýlmayacaktýr. Bu durum ChessBot'un çalýþmadýðý yazý kanallarýnda (`#intermediate-lobbies-no-bot` vb.) kurulan lobiler için **geçerli deðildir**. ChessBot ile kurulmayan lobilerdeki dereceler ile ilgilenmiyoruz. Eðer bir oyuncuyu farklý bir nedenden dolayý raporlamak istiyorsanýz, raporlamak istediðiniz oyunucuyu ve nedenini `#player-reports` (#oyuncu-raporlarý) yazý kanalýnda belirtebilirsiniz.
    
## Lobi Bulma, Katýlma ve Kurma

Lobiler ChessBot ile düzenlenir. ChessBot ile etkileþime girebilmek için DM'lerinizi (direkt mesajlarýnýzý) herkese açýk hale getirmelisiniz veya buna eþdeðer bir ayar yapmalýsnýz. ChessBot size katýldýðýnýz lobinin þifresini DM'den atacaktýr. Þifreyi kopyalayýn > Auto Chess'i açýn > Lobby List (Lobi Listesi) > Find Private Lobbies (Özel Lobi Bul) > Þifreyi yapýþtýr > Search (Ara) > Join Lobby (Lobiye Katýl). Eðer herhangi bir lobi gözükmüyorsa, lobi henüz kurulmamýþ olabilir. Sað üst köþedeki `refresh` (Yenile) butonuna týklayarak lobileri yenileyebilirsiniz. Oyuncular lobileri herhangi bir bölgeden kurabilir, bu yüzden lobiye katýlmadan önce lobinin bölgesine bakarak sizin için uygun olup olmadýðýný kontrol etmeyi unutmayýn.  Aþaðýdaki komutlarý **sadece**  `#[rank(derece)]-lobbies` (lobi kanallarý)'nda kullanýn (`#master-lobbies` gibi): (`[]` olmadan)

- `!list` kanaldaki mevcut lobileri görmek için.
- `!join` bir `#[rank(derece)]-lobbies[region(bölge)]` kanalýndayken lobilere katýlmak için (`#intermediate-lobbies-naw` vb.).
- `!join [region(bölge)]` (`[]` olmadan) bölgesi olmayan yazý kanallarýnda lobilere katýlmak için (`#beginner-lobbies` vb.).
	- Bölgeler: `NA` (Kuzey Amerika), `SA` (Güney Avustralya), `EUE` (Doðu Avrupa), `EUW` (Batý Avrupa), `RU` (Rusya), `SEA`, ve `OCE`
- `!join [@DiscordKulllanýcýAdý#0000]` (`[]` olmadan) özellikle bir oyuncunun lobisine katýlmak için.
- `!leave` lobiden ayrýlmak için.
- `!lobby [@DiscordKullanýcýAdý#0000]` (`[]` olmadan) oyuncularýn lobilerindeki oyuncularý görmek için.
- `!host` bir `#[rank(derece)]-lobbies[region(bölge)]` kanalýndayken lobi kurmak için (`#intermediate-lobbies-naw` vb.).
- `!host [region]` (`[]` olmadan) bölgesi olmayan yazý kanallarýnda lobi kurmak içn (`#beginner-lobbies` vb.).
- `!host [region(bölge)] [rank(derece)-x]` lobi derece liminiti belirlemek için (`[]` olmadan. `rank(derece)-x` sizin derecenizden -2 seviye düþük olmalýdýr).
- `!lobby` lobinizdeki oyuncularý görmek için.
- `!kick [@DiscordKullanýcýAdý#0000]` (`[]` olmadan) lobinizden herhangi bir oyunu atmak için.
- `!start` lobiniz tamamen dolduðunda oyunu baþlatýp lobiyi kapatmak için (8/8 oyuncu). Lütfen kullanmadan önce herkesin baðlandýðýndan emin olun.
- `!cancel` lobinizi iptal etmek için.

         
## Baþlangýç
Lütfen baþlamadan önce yukarýda yazan **her þeyi** okuduðunuzdan emin olun, bu sayede sunucu ile nasýl etkileþimde bulunabilceðinizi öðrenip yetkililerin vaktini boþa harcamamýþ olursunuz, teþekkürler. Sunucuya kaydolmak için veya ikinci bir Steam hesabý baðlamak için aþaðýdaki adýmlarý uygulayabilirsiniz (oyun içerisinde lobiye katýldýðýnýz veya lobiyi kurduðunuz Steam hesabýyla oynamalýsýnýz).
 
1. Görünmez **olmadýðýnýzdan** emin olun. Kullanýcý Ayarlarýna týklayýn.
![enter image description here](https://lh3.googleusercontent.com/BKWZi8LTdT8v6fdAQiwyLtOuR_jFj5CBjvxObViUGdM7F4jxnlGH3CxAfKgkP075SDZFcx0FvYY)

2. Baðlantýlara gidin ve Steam ikonuna týklayýn. 
![enter image description here](https://lh3.googleusercontent.com/0BHECBR5G8obQXgH_J1IjqotC0jAQW2sXPBsFlngSYPPS4Pu_3LlAikr0Ls0WK8ymdb7ZbLhTkE)

3. Oturum Aç'a týklayýn.  
![enter image description here](https://lh3.googleusercontent.com/Kc5SWqhe_lUFGBwGMVxmi7g3YWbHH1rouljLqFYFy0GyRZq-ECmLzWCPYVErm5gCFsQjHw6K54M)

4. Discord'daki Steam baðlantýsýnýn herkese açýk olduðundan emin olun.
![enter image description here](https://lh3.googleusercontent.com/XnuTe3xZWuJ0P9em1hM6a1ne9QsAFjFR_QEfi5ZVSOupezvNTh0ef5r58LsxJPCxskRoDyLJods)

5. Bu linke týklayýn: <a href="http://autochessbot.vinthian.com" target="_blank">autochessbot.vinthian.com</a>. Steam ve Discord hesaplarýnýn doðru olduðuna emin olduktan sonra Onayla'ya týklayýn.
![enter image description here](https://lh3.googleusercontent.com/08ZHOcSVKHEjHixMc53zFEc-zsw9fckQgiyG_T6dnNpot8F3vjmseO5Hoeiye8HwmudNYGawLCY) 

6. Doðru `Steam64ID`'si olduðuna emin olun ve  hesabýnýza týklayýn.  
![enter image description here](https://lh3.googleusercontent.com/W2TnP6mdOc0P_jULKu-wQZvYr8-bNwszT-lY19XgFT5p5C19jBZOjB3yVd0G6Tj-cchs4ufHogE)

7. Tebrikler, onaylandýnýz! Artýk Discord'da yeni kanallar görebilirsiniz (sol tarafta `#beginner-lobbies` (Baþlangýç Lobileri) vb.). Eðer biþeyler yanlýþ gittiyse, ayný iþlemleri tekrardan uygulayýn ve bunu yaparken doðru Discord hesabýný eþleþtirdiðinize ve Discord hesabýnýzýn görünmez olmadýðýna emin olun. Eðer bunlar da iþe yaramazsa `#help-desk` (#yardým-masasý) kanalýndan destek alabilirsiniz.
![enter image description here](https://lh3.googleusercontent.com/1uOA1tSQgY02_in_NJZ0ymz64tDwu-mlhHWaqUkHVlt37S-lEx80g7y_hu_9LHoRt0I9_g1Yoa8)

8. `#chessbot-commands` kanalýnda  `!updateroles` komutunu kullanarak rollerinizi güncelleyebilirsiniz.
    
9. `#league-region` (#lobi-bölgesi) kanalýndaki yazýya bulunduðunuz bölgenin emojisi ile tepki vererek herhangi bir lobi kurulduðunda bundan bildirim ile haberdar olabilirsiniz. Eðer bundan rahatsýz oluyorsanýz, tepkinizi geri alabilirsiniz.

10. Ýyi Eðlenceler!

**Çevirmen Moderatör:** @omrtozd#6320