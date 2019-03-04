# Liquid.qihl README

Liquid.qihl'ye ho�geldiniz! Bu d�k�man sunucu ile etkile�imde bulunabilmeniz i�in gereken t�m bilgileri i�erir. L�tfen `#help-desk` (#yard�m-masas�) kanal�na dan��madan �nce bu d�k�man�n tamam�n� okuyun, bu sayede yetkililerin vaktini bo�a harcamam�� olursunuz. Te�ekk�rler.

## ��indekiler

1. [Kurallar](#kurallar)  
2. [Dereceler (Ranklar)](#dereceler-ranklar)  
	2.1 [Derece Kontrol�](#derece-kontrol�)  
3. [Oyuncu Rapor Etme](#oyuncu-rapor-etme)  
4. [Lobi Bulma, Kat�lma ve Kurma](#lobi-bulma-kat�lma-ve-kurma)  
5. [Ba�lang��](#ba�lang��)

## Kurallar
Kurallar� ihlal etmek **BAN** sebebidir.

1. Hakaret etmek, izinsiz ba�kalar�n�n bilgilerini payla�mak ve DDOS atmak yasakt�r.
2. Discord Hizmet Ko�ullar�n� ihlal etmek yasakt�r.
3. Kendi derecenden y�ksek lobilere girmek yasakt�r. Girmeniz halinde **oyun i�erisinde** `-refresh` yazarak lobiden ayr�lmak zorundas�n�z. Bu kural sadece Chessbot ile kurulan lobiler i�in ge�erlidir.
4. Lobi �ifrelerini Discord lobi kanallar�nda payla�mak yasakt�r.
5. Lobi �ifrelerini payla�mak yasakt�r (lobiye parti yolu ile girmek de dahil).
6. Sunucuya hangi Steam hesab� ile kay�tl�ysan�z o hesap ile lobiye kat�lmak zorundas�n�z.

## Dereceler (Ranklar)
Lobiler bu derecelere g�re belirlenir:

- Beginner (Ba�lang�� D�zeyi): `Unknown`+ (Bilinmeyen+)
- Intermediate (Orta D�zey): `Bishop-1`+ (Fil-1+)
- Advanced (Geli�mi�): `Bishop-6`+ (Fil-6+)
- Expert (Uzman): `Rook-1`+ (Kale-1+)
- Master (Usta): `Rook-5`+ (Kale-5+)

### Derece Kontrol�
Bu komutlar� `#chessbot-commands` kanal�nda kullan�n, `#help-desk` kanal�nda **de�il**.

- Dereceyi kontrol etme ve g�ncelleme komutu (bu komutu derece atlay�nca yeni roller almak i�in kullan�n): `!rank`
- Ba�kalar�n�n derecelerini kontrol etme komutu (`[]` olmadan): `!rank [@DiscordKullan�c�Ad�#0000]` 
             
## Oyuncu Rapor Etme

E�er bulundu�unuz derece g�ncel de�ilse (mesela `Knight(At)-9`'sunuz ve hala `Intermediate` (Orta D�zey) lobilere girebiliyorsan�z) derecenizin yenilenmesini bekleyip yeni bir oyuna ba�lamadan �nce derecenizi g�ncellemelisiniz. E�er derecenizi g�ncelledikten sonra herhangi bir lobiye girerseniz ve dereceniz lobi limitinin alt�nda ise (`Bishop-1`(Fil-1)+ lobisindesiniz fakat sizin dereceniz bu limite yetmiyorsa) **oyun i�inde** `-refresh` yazarak lobiden ayr�lmal�s�n�z. Lobiden ayr�lmaman�z halinde sunucudan yasaklan�rs�n�z.

Oyuncular sizin derecelerinizi etkilese de, aran�zdaki 1 derece fark sizi etkilemiycektir. Genellikle b�yle durumlar baz� hatalardan dolay� meydana gelir. Bunu b�y�t�p olay ��karman�n manas� yok. Tabi bu durum bunu yapabilece�iniz anlam�na gelmez. Bu y�zden l�tfen dikkatli olun.

E�er bir oyuncu kurallar� �i�nemesi halinde `-refresh` yazarak lobiden ayr�lm�yor ise: Bunu ekran g�r�nt�s�n�, kurallar� �i�neyen oyuncunun Steam Profilinin URL'sini ve lobi kurulduktan sonra ChessBot Lobi mesaj�n�n (lobi kurucusunun `!start` yazd�ktan sonra ��kan mesaj�n) ekran g�r�nt�s�n� `#player-reports` (#oyuncu-raporlar�) yaz� kanal�na at�n. E�er bu �� bilginin tamam�n� kar��layam�yorsan�z ne yaz�k ki raporunuz ge�erli say�lmayacakt�r. Bu durum ChessBot'un �al��mad��� yaz� kanallar�nda (`#intermediate-lobbies-no-bot` vb.) kurulan lobiler i�in **ge�erli de�ildir**. ChessBot ile kurulmayan lobilerdeki dereceler ile ilgilenmiyoruz. E�er bir oyuncuyu farkl� bir nedenden dolay� raporlamak istiyorsan�z, raporlamak istedi�iniz oyunucuyu ve nedenini `#player-reports` (#oyuncu-raporlar�) yaz� kanal�nda belirtebilirsiniz.
    
## Lobi Bulma, Kat�lma ve Kurma

Lobiler ChessBot ile d�zenlenir. ChessBot ile etkile�ime girebilmek i�in DM'lerinizi (direkt mesajlar�n�z�) herkese a��k hale getirmelisiniz veya buna e�de�er bir ayar yapmal�sn�z. ChessBot size kat�ld���n�z lobinin �ifresini DM'den atacakt�r. �ifreyi kopyalay�n > Auto Chess'i a��n > Lobby List (Lobi Listesi) > Find Private Lobbies (�zel Lobi Bul) > �ifreyi yap��t�r > Search (Ara) > Join Lobby (Lobiye Kat�l). E�er herhangi bir lobi g�z�km�yorsa, lobi hen�z kurulmam�� olabilir. Sa� �st k��edeki `refresh` (Yenile) butonuna t�klayarak lobileri yenileyebilirsiniz. Oyuncular lobileri herhangi bir b�lgeden kurabilir, bu y�zden lobiye kat�lmadan �nce lobinin b�lgesine bakarak sizin i�in uygun olup olmad���n� kontrol etmeyi unutmay�n.  A�a��daki komutlar� **sadece**  `#[rank(derece)]-lobbies` (lobi kanallar�)'nda kullan�n (`#master-lobbies` gibi): (`[]` olmadan)

- `!list` kanaldaki mevcut lobileri g�rmek i�in.
- `!join` bir `#[rank(derece)]-lobbies[region(b�lge)]` kanal�ndayken lobilere kat�lmak i�in (`#intermediate-lobbies-naw` vb.).
- `!join [region(b�lge)]` (`[]` olmadan) b�lgesi olmayan yaz� kanallar�nda lobilere kat�lmak i�in (`#beginner-lobbies` vb.).
	- B�lgeler: `NA` (Kuzey Amerika), `SA` (G�ney Avustralya), `EUE` (Do�u Avrupa), `EUW` (Bat� Avrupa), `RU` (Rusya), `SEA`, ve `OCE`
- `!join [@DiscordKulllan�c�Ad�#0000]` (`[]` olmadan) �zellikle bir oyuncunun lobisine kat�lmak i�in.
- `!leave` lobiden ayr�lmak i�in.
- `!lobby [@DiscordKullan�c�Ad�#0000]` (`[]` olmadan) oyuncular�n lobilerindeki oyuncular� g�rmek i�in.
- `!host` bir `#[rank(derece)]-lobbies[region(b�lge)]` kanal�ndayken lobi kurmak i�in (`#intermediate-lobbies-naw` vb.).
- `!host [region]` (`[]` olmadan) b�lgesi olmayan yaz� kanallar�nda lobi kurmak i�n (`#beginner-lobbies` vb.).
- `!host [region(b�lge)] [rank(derece)-x]` lobi derece liminiti belirlemek i�in (`[]` olmadan. `rank(derece)-x` sizin derecenizden -2 seviye d���k olmal�d�r).
- `!lobby` lobinizdeki oyuncular� g�rmek i�in.
- `!kick [@DiscordKullan�c�Ad�#0000]` (`[]` olmadan) lobinizden herhangi bir oyunu atmak i�in.
- `!start` lobiniz tamamen doldu�unda oyunu ba�lat�p lobiyi kapatmak i�in (8/8 oyuncu). L�tfen kullanmadan �nce herkesin ba�land���ndan emin olun.
- `!cancel` lobinizi iptal etmek i�in.

         
## Ba�lang��
L�tfen ba�lamadan �nce yukar�da yazan **her �eyi** okudu�unuzdan emin olun, bu sayede sunucu ile nas�l etkile�imde bulunabilce�inizi ��renip yetkililerin vaktini bo�a harcamam�� olursunuz, te�ekk�rler. Sunucuya kaydolmak i�in veya ikinci bir Steam hesab� ba�lamak i�in a�a��daki ad�mlar� uygulayabilirsiniz (oyun i�erisinde lobiye kat�ld���n�z veya lobiyi kurdu�unuz Steam hesab�yla oynamal�s�n�z).
 
1. G�r�nmez **olmad���n�zdan** emin olun. Kullan�c� Ayarlar�na t�klay�n.
![enter image description here](https://lh3.googleusercontent.com/BKWZi8LTdT8v6fdAQiwyLtOuR_jFj5CBjvxObViUGdM7F4jxnlGH3CxAfKgkP075SDZFcx0FvYY)

2. Ba�lant�lara gidin ve Steam ikonuna t�klay�n. 
![enter image description here](https://lh3.googleusercontent.com/0BHECBR5G8obQXgH_J1IjqotC0jAQW2sXPBsFlngSYPPS4Pu_3LlAikr0Ls0WK8ymdb7ZbLhTkE)

3. Oturum A�'a t�klay�n.  
![enter image description here](https://lh3.googleusercontent.com/Kc5SWqhe_lUFGBwGMVxmi7g3YWbHH1rouljLqFYFy0GyRZq-ECmLzWCPYVErm5gCFsQjHw6K54M)

4. Discord'daki Steam ba�lant�s�n�n herkese a��k oldu�undan emin olun.
![enter image description here](https://lh3.googleusercontent.com/XnuTe3xZWuJ0P9em1hM6a1ne9QsAFjFR_QEfi5ZVSOupezvNTh0ef5r58LsxJPCxskRoDyLJods)

5. Bu linke t�klay�n: <a href="http://autochessbot.vinthian.com" target="_blank">autochessbot.vinthian.com</a>. Steam ve Discord hesaplar�n�n do�ru oldu�una emin olduktan sonra Onayla'ya t�klay�n.
![enter image description here](https://lh3.googleusercontent.com/08ZHOcSVKHEjHixMc53zFEc-zsw9fckQgiyG_T6dnNpot8F3vjmseO5Hoeiye8HwmudNYGawLCY) 

6. Do�ru `Steam64ID`'si oldu�una emin olun ve  hesab�n�za t�klay�n.  
![enter image description here](https://lh3.googleusercontent.com/W2TnP6mdOc0P_jULKu-wQZvYr8-bNwszT-lY19XgFT5p5C19jBZOjB3yVd0G6Tj-cchs4ufHogE)

7. Tebrikler, onayland�n�z! Art�k Discord'da yeni kanallar g�rebilirsiniz (sol tarafta `#beginner-lobbies` (Ba�lang�� Lobileri) vb.). E�er bi�eyler yanl�� gittiyse, ayn� i�lemleri tekrardan uygulay�n ve bunu yaparken do�ru Discord hesab�n� e�le�tirdi�inize ve Discord hesab�n�z�n g�r�nmez olmad���na emin olun. E�er bunlar da i�e yaramazsa `#help-desk` (#yard�m-masas�) kanal�ndan destek alabilirsiniz.
![enter image description here](https://lh3.googleusercontent.com/1uOA1tSQgY02_in_NJZ0ymz64tDwu-mlhHWaqUkHVlt37S-lEx80g7y_hu_9LHoRt0I9_g1Yoa8)

8. `#chessbot-commands` kanal�nda  `!updateroles` komutunu kullanarak rollerinizi g�ncelleyebilirsiniz.
    
9. `#league-region` (#lobi-b�lgesi) kanal�ndaki yaz�ya bulundu�unuz b�lgenin emojisi ile tepki vererek herhangi bir lobi kuruldu�unda bundan bildirim ile haberdar olabilirsiniz. E�er bundan rahats�z oluyorsan�z, tepkinizi geri alabilirsiniz.

10. �yi E�lenceler!

**�evirmen Moderat�r:** @omrtozd#6320