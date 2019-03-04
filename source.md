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

![enter image description here](https://lh3.googleusercontent.com/MMTSrv1gS8NG3wFOx9w81nyQj7T6pkwZIgz_z3yysyis_4vnfhJ9dVDDtZPEaHkZMgIMP2td3rsKuC9LfAGnKn6KCIh2FG8U8kxqgd_LahV40VJPVUAePYV14lsS8iiNWIvRkPFq7xEt3i2QkFwND6yiylNspa7NAWry_WWo8d19oOSmEZkMvGprR_v6IX8rV-_XBAvH70rrk02e0b-cXwLW5S6ciOIySeR2gwk3TOXM_6ZVbhiwR9msTIIXDRwhznVwobgoSdF9O-iXl9RJF1f5_3e0hmUZTfH_HHQoAi8pCELsjOpE4SL1usAV-5GYoT3UoQL5RnM5bj4ideycSGdh0kfEeo2wp89P-5rvChlxMEHgXVqURz9wf3eYMPERHNWUBx54yxsXin0P6ytx79ipzloODv2cl8QHows6vEDgiD2IBrpckhbNeUUX27hUUQF3qKs9NEDl2V9T25LfEfNVYbCCR3ATDbk3Eo56wSc99pnPRWO0fd25Xgsus7P_hQat2fu6SQmIgYkcbm5d7DXIpmKtuQyAsnAnWqRDDG3A0YbdjNlCDMBHle2ZyX19A_YVIWynorCq4mZ_idOAFEUbMhpAJCKT0K7Ii6LjXYbIcclZDt5sXzFtWfgw3HA8CFymnX3s85_-H5qXe5ERsEdpejKL3g=w221-h48-no)

2. Bağlantılara gidin ve Steam ikonuna tıklayın.

![enter image description here](https://lh3.googleusercontent.com/Q9fSK-pds9_vX9Qu9t1Szvek8KvV1ezaRf7Uy-OxXH4TiXkp85jzdjuvyB0_nzqne-4c62mtzr-YKeP-UTS-lF6Vb5XmHX5TkRPiFiScRngh9s94GfgJJKsCUZCeEyDEXGUfeJ6BMdVRKcM8qQhN4cIF02zXFVy9oqySFx30A7MuzkxkMCucgf8-hHEKNRvz-7keINU_sTwziBHWMQ6w1ZXWJ4ymSFhcghUpmw9gId5VXnARU8yaW35V-gvQWYdJWNy5r4cF2C9felxoUZdwi6fAq1pA5wHpxgusOzS8XN5l6nEZ-LvR6RahNooKSc35Cy4KyaRlaLXYKGODFFbZlWoAgOghTf-nzEGQbFzviD-B1TdG3-cWp-GVno6e9wKEaK67BuS2q7iCPbElhJb6sKpK6t3r-STs6WGZ5nuJP0jYuce-oeGoMig2q-A8R0rAf1I_AifR6acEFrZYfkgh06NYAxXoEOKEnL1kpJbHn_WHL3wfjHzwFa5ushhJN4bWXWEu8UDN_LdO4z9USV7HiJnP2Sz5SWSEgV1iQhYo1DJeOqpKtVJZ8JUhuJ9rhbolV9jgni7_Rdlc4NLNi1R6nupi0bSyMLEHHtANGA39zi9gVxe7okQI3DpJZtDRZ4R_B0al4SEIa9_n6G7YlFqfAxJpM46JfQ=w853-h225-no)

3. Oturum Aç'a tıklayın.

![enter image description here](https://lh3.googleusercontent.com/NVPZmJzSBEJXeDkvF_fV7oR6b1dpK9sYAoEZJK-Ay2ffRugPdtchvFL9YrWsxkQ9jNjNwMspB-TDLjFatQq9Knt6XwuSmHAWr1el1zcB_XiTLAWCvEUYH9hIw7Xb6QU1y1MkdJR8BMlygDxGEyfQjc26tk0ZO20sFLsNah6_hNIJFZWyBriSJxWq1Twfi1fXmqvS4oe6TJbNoBDDSxAnDVzOx-nDeRWfp664Zs5vAJ2ySS9qkuDj7iCipHNKwrQ-HyClp7wOoN3V58ggd2a89YsW_PYIbbK235fHN_kSVQAAhHZWOVvD7VDVbSX2ksRnMM0JMwYnUYLRJb8T0T-911Vv63oiz79aiLUAmqqFNao_d1k5zF1Ri8AcSYQsh_joYI8X-rXGSq0Bc8HYxRK3FsBx-ZfN2o1fsFN5jPbOf7_i5-BAWrR7RHs76C5zIpK8IQEl19b0T4bYCPRtueuCsVo0TaF8O7fhEC0ieFfieoS85NE9y2aYE2B8409ifyn3bU_hnUuWmOSv8E9cT8Pa016mBfN1Dx7suLUjpDi9zwyKM-4ssJzDwsLWPqLuquiY1wNJXMmzZSXjVHFLkeX-NTY5BT9DDjFb5CQnCSfBSfaUcq9mPU_k-Zp83DLh_YRMlYfHlEPHkonVPaENOTYVirKvCDiYmA=w949-h410-no)

4. Discord'daki Steam bağlantısının herkese açık olduğundan emin olun.

![enter image description here](https://lh3.googleusercontent.com/dAxiSKRutw2_TFZY2jP-FtpmKfwld_6zdLA5czdnAu5wlrL31bjph3SK6sTL69xH1Gte61lFI_c-JHGyhibZsFoLDn4Q8eXw9xd5bFkp2rckM92hRxqxERhakqeNzq3ZLdmkB10Qk1ltawSqACimkxcABxlZbfbnjLlIlPvAa0RLLXjKDWH_ey5iQ04oCE_Rm0z1dT1ISfAYwREB1Imx7UO0FW_TbKhew7eAR8VX1kLlElfMzhCptsZM9xoa1qanMQgoHwjDhkLG8cDBvniHLA73z3Jn62agtMCcbKWC7EeqIljuRgFL_1qDaHQa-WZGmTVsTIzcobW9te1BD5MxoPXydHZDigpMi2wUK6OorvZZe1s10IReEGbC2oCb2JhHx3XDPy2T6-xUt--0IaHluy1cQZPjHihEv2KsAHhBJO1U4-6k2DRjRWRYu9FXZci78VapkgZ4frCADYiwQI3K1BI9JPhvYfXDid7hCvfh_j4gymCCwd3fEqxDUAkiTPfkt1G5FPJwGlaALTRolgpB_wc5BvizGK2h-LVXX4BxbEkohSkzoh1emzlKh0xjGhWci-MqcsqCBmW2d22GuTgc2iYieOqBz6e8PDhg7xg3PmwimLDolJB5E5xqYPAeA3rbNmmM9TW78iX5iVOceufPOnWFckNrDQ=w597-h124-no)

5. Bu linke tıklayın: <a href="http://autochessbot.vinthian.com" target="_blank">autochessbot.vinthian.com</a>. Steam ve Discord hesaplarının doğru olduğuna emin olduktan sonra Onayla'ya tıklayın.

![enter image description here](https://lh3.googleusercontent.com/8PGjfH8h52McYeYarJWWILHxU9BKKqddHZyK7INKO5k6r4ZDlBXLMCPuWNYNPU5WMsmlERDOE_HaRGjOuItBzqUscfh1MI0kBOgnhUlD77NznPw9ykRMtmQIuQuKJ6o2TlWegClDH5ZhwtcxsgMvxYkgStmuNKLhNFlnC4P54p_v9aSuNGei2ljTBagkzgfqbL8mveIhWHOaxRGOB9SvbYFR-Gu79OXDt7QByNzE0SGFqxrkRxLFV_C-IS6e7GfY6i_X63oSYrMrKd5LSUsjfMugpgV92ShsCz1-mhZNkgq03ijVwAs-REQqaj85SubpNo0YBZA0GMTAFogHlp4Fw3TMEi8FbTiQjy_Pvps9OhNbFh1BeMrQqqP_r6SqiiPaL7PTqErZHk3sl-9ssQbe-v_7OYvGaLvoCE7-OMxB-Qb1qTTcVrMdLJs61Ao8AZ9IuHl8UK7hjpsz9pPpl9SaUxww0mQ43czSDpw02KMGacwCzaCqlS0l-VMMFh-34aK6u6F0PVumvpTz8htGQUwkcVxvPpZOBwBktQpU4W0fA8C3KNP6zYFzIoS5uDmMEiJLHrwGIqq-Px0szIGzBa_Gd-_Xp73YVFbnX80UlgpwtlDIAEez7RZRUSYQswC2p71Cu0CVhy6pDjxOg6bJ_ANGH3yZHiynrg=w501-h527-no) 

6. Doğru `Steam64ID`'si olduğuna emin olun ve  hesabınıza tıklayın.

![enter image description here](https://lh3.googleusercontent.com/is5EmtCR0P9yqzDiT2heVAPHiuZTV3iX43N56fBbs70Sb-YNKino0Zi0ZYT5Qfw_JyHhKRYE3dZfQUQz9qWB_TK5rj2S72TPVdZp_xBVmOFzwfGTnkKpUvxU7BDc3-iypnuMbj2DUPxgGgxNkLCAb1dqT8zZN2wAtVXKsIjrg3yOJ3FJMbe0ZOnDcO_NlZsCLZ6_jNAsVOd99QxJJ2QFqSzlU1QobRkQTytSTQw8nLuH5oGexBywpW5a2QG0paYSL10T4J-1xYaMDvUhWJ6ZsozRDAP-E2hs9RScQ51viP3rcYBLU90LOfsx3IBuisHg5vrVJxa2JmySXYzSa4MJBPlC72-JL5_5PlKMovgPSCPwHdVVFi_UTrrAfYcF3gcuAoh5R37GWZ9tfkrBW0C7ZNHGY0VoVL6-V00_BiqnqjhLnhOISaRcb0ADx5MtDXw_MjsoXQGqtxWBi7FkK52LDK9-xX9_WDJZ1mPb3gqu6ZJoJ3K0sMw4u_OvVgU1_-uhnsELTvHtqmSZiM-ZMR0QHY7oKp2SVnapK2PGRR2Y077XjiVbbhqHHon3VNLcHhPDmenz7G0OXMybBo-N2Fjv_F8eRWY5UzfuTkGBWs-qLU6B8FAtHT2HFcyrj86hkSjhgb8WWdZgOGB9t50nQH3doOfNF7KzCA=w480-h199-no)

7. Tebrikler, onaylandınız! Artık Discord'da yeni kanallar görebilirsiniz (sol tarafta `#beginner-lobbies` (Başlangıç Lobileri) vb.). Eğer bişeyler yanlış gittiyse, aynı işlemleri tekrardan uygulayın ve bunu yaparken doğru Discord hesabını eşleştirdiğinize ve Discord hesabınızın görünmez olmadığına emin olun. Eğer bunlar da işe yaramazsa `#help-desk` (#yardım-masası) kanalından destek alabilirsiniz.

![enter image description here](https://lh3.googleusercontent.com/ZlXPsS5_wWcrhmuOpvaYUixIho_W6IC_HUYXfbAwIvh1t_mUT4J-WlX-Jiol_utcda0SmypX6DrG_J9R5MSOtiBUWhtLaAra9yK9fUXHdRvcXZ6MaXoYzU-XyexFWbnDkD0Hx-ZWmu1vAcxXfjtm5vUBeV85BC1pB-lDkv0spahMEuVX-mMcPEpHW8LnU6ZMLcB3EOmg3nbyfz_YbjZp3wPmWEG_p_lsgbqSnYZrydaf-axNh-M6ugdrZiB_XKsKY3rPfKSipeoJ-1UzUSliY7VFSyO3x_JbCsmXw1fybd695ZN6nvmOrJrqCmt6lzKyDvcpqXOaJh2cja8GcLV7NVoiKQKTbj1jCXcqvPhEwZunOJyjsZm5vSEY7syaecoZy1sbA-KjG5tqPJbsc-ktA9ROMj_Ce4I8dbptL08Qh4DjO_5b0rGjtu6S4V_C_wzdBfGMIJIzFbHoNAOob9LWNfdWyS_Eeun6x7cHMzmmlGzjy6HlH_m0z7ZX_IRxM4sdcYwpg7p9FETaP3IU75xhUy7NyYsTl2a1BysrlRV8o1C-4HFLZKVniicec57DXgDQa5ERdbG1QxeERGvFHVfaZDhbbbSuis48DhK4OZpfVWn5NyhzrawKS21Lj-HUKo48ypfN956lRqWSOXwvG5_xPJ1ImgdlHg=w485-h227-no)

8. `#chessbot-commands` kanalında  `!updateroles` komutunu kullanarak rollerinizi güncelleyebilirsiniz.
    
9. `#league-region` (#lobi-bölgesi) kanalındaki yazıya bulunduğunuz bölgenin emojisi ile tepki vererek herhangi bir lobi kurulduğunda bundan bildirim ile haberdar olabilirsiniz. Eğer bundan rahatsız oluyorsanız, tepkinizi geri alabilirsiniz.

10. İyi Eğlenceler!

**Çevirmen Moderatör:** @omrtozd#6320