const username = "enes2424";
let projects = [];

const translations = {
  tr: {
    "nav-about": "Hakkımda",
    "nav-edu": "Eğitim",
    "nav-projects": "Projeler",
    "about-title": "Merhaba, Ben Enes.",
    "about-p1":
      "Yolculuğuma Erzincan'da başladım. Mustafa Doğan Anadolu Lisesi'nden **okul birinciliğiyle** mezun olarak sağlam bir temel attım. Ardından 2020 YKS'de Türkiye **Sayısal 5802.si** olma başarısını göstererek, Yeditepe Üniversitesi Bilgisayar Mühendisliği bölümüne **%100 tam burslu** kabul edildim ve 5 yıllık bir eğitimin ardından mezun oldum.",
    "about-p2":
      'Üniversite eğitimimin yanı sıra, Bilişim Vadisi\'nde yer alan, "öğretmensiz" akran öğrenimi ve tamamen proje odaklı bir ekosistem olan **42 Kocaeli** bünyesinde kendimi geliştirme şansı yakaladım. 2. sınıfta bir kulüp gezisiyle tanıştığım bu yenilikçi okulda, gerçek dünya problemlerine kodla çözüm üretmeyi öğrendim.',
    "about-p3":
      "Kurumsal eğitimlerin dışına çıkarak **Exercism** ve **LeetCode** gibi platformlarda 400'e yakın algoritmik egzersiz tamamlayarak problem çözme kaslarımı sürekli diri tuttum. Bu disiplinli çalışma süreci, bana özellikle **Flutter** ve **Backend** teknolojileri üzerine yoğunlaşan birçok freelance projede yer alma ve ticari ürünler geliştirme fırsatı sundu.",
    "about-p4":
      "Bugün, mühendislik disiplinini meraklı bir geliştirici ruhuyla birleştiren, düşük seviyeli sistemlerden modern mobil uygulama mimarilerine kadar her katmanda çözüm üretmeye hazır bir yazılımcıyım.",
    "edu-title": "Eğitim & Yetkinlik",
    "edu-yedi-title": "Yeditepe Üniversitesi",
    "edu-yedi-status": "MEZUN",
    "edu-yedi-desc": "Bilgisayar Mühendisi (2020 - 2025)",
    "edu-yedi-award": "🏆 Türkiye Sayısal 5802.'si | %100 Tam Burslu",
    "edu-yedi-visit": "Siteyi Ziyaret Et ↗",
    "edu-42-title": "42 Kocaeli",
    "edu-42-status": "AKTİF",
    "edu-42-desc": "Yazılım Okulu (Ekol 42)",
    "edu-42-about":
      "Akran öğrenimi ve tamamen uygulama odaklı bir sistemde yazılım geliştirme süreçlerini deneyimliyorum.",
    "edu-42-visit": "Siteyi Ziyaret Et ↗",
    "projects-title": "Projelerim",
    loading: "YÜKLENİYOR...",
    error: "Hata oluştu.",
    "footer-text": "© 2026 Enes Mahmut Ateş | Gebze, Kocaeli",
    "title-role": "BİLGİSAYAR MÜHENDİSİ",
    "modal-loading": "Yükleniyor...",
    "modal-close": "Kapat",
    "modal-repo-home": "Depo Anasayfası",
    "modal-inspect": "İncele ↗",
    "modal-subprojects-title": "Alt Projeler",
    "modal-projects-title": "Projeler",
    "modal-default-desc":
      "Detaylı çalışma notları ve kaynak kodlar ilgili proje başlıkları altında yer almaktadır.",
    "visit-app": "Uygulamaya Git ↗",
    "lang-en": "English",
    "lang-tr": "Türkçe",
    "inspect-label": "İncele ↗",
    "view-code": "Kodları İncele",
  },
  en: {
    "nav-about": "About Me",
    "nav-edu": "Education",
    "nav-projects": "Projects",
    "about-title": "Hello, I'm Enes.",
    "about-p1":
      "I started my journey in Erzincan. I built a solid foundation by graduating as the **valedictorian** from Mustafa Doğan Anatolian High School. Then, achieving a rank of **5802nd** in the numerical field in the 2020 YKS exam in Turkey, I was accepted to the Computer Engineering department of Yeditepe University with a **100% full scholarship** and graduated after 5 years of education.",
    "about-p2":
      "In addition to my university education, I had the chance to develop myself within **42 Kocaeli**, a project-oriented ecosystem with 'teacherless' peer-to-peer learning located in Bilişim Vadisi. In this innovative school, which I discovered through a club trip in my 2nd year, I learned to create solutions to real-world problems with code.",
    "about-p3":
      "Moving beyond formal education, I kept my problem-solving muscles active by completing nearly 400 algorithmic exercises on platforms like **Exercism** and **LeetCode**. This disciplined work process provided me the opportunity to participate in many freelance projects specializing in **Flutter** and **Backend** technologies and develop commercial products.",
    "about-p4":
      "Today, I am a developer combining engineering discipline with a curious developer spirit, ready to produce solutions at every layer, from low-level systems to modern mobile application architectures.",
    "edu-title": "Education & Skills",
    "edu-yedi-title": "Yeditepe University",
    "edu-yedi-status": "GRADUATED",
    "edu-yedi-desc": "Computer Engineer (2020 - 2025)",
    "edu-yedi-award": "🏆 5802nd in Turkey (Numerical) | 100% Full Scholarship",
    "edu-yedi-visit": "Visit Site ↗",
    "edu-42-title": "42 Kocaeli",
    "edu-42-status": "ACTIVE",
    "edu-42-desc": "Coding School (Ecole 42)",
    "edu-42-about":
      "I am experiencing software development processes in a peer-to-peer learning and fully application-oriented system.",
    "edu-42-visit": "Visit Site ↗",
    "projects-title": "My Projects",
    loading: "LOADING...",
    error: "An error occurred.",
    "footer-text": "© 2026 Enes Mahmut Ateş | Gebze, Kocaeli",
    "title-role": "COMPUTER ENGINEER",
    "modal-loading": "Loading...",
    "modal-close": "Close",
    "modal-repo-home": "Repo Homepage",
    "modal-inspect": "Inspect ↗",
    "modal-subprojects-title": "Subprojects",
    "modal-projects-title": "Projects",
    "modal-default-desc":
      "Detailed study notes and source codes are available under relevant project headings.",
    "visit-app": "Go to App ↗",
    "lang-en": "English",
    "lang-tr": "Türkçe",
    "inspect-label": "Inspect ↗",
    "view-code": "View Code",
  },
};

const branchDescriptions = {
  tr: {
    // Yeditepe-University-Term-Projects
    UnoTermProject:
      "Bu proje, popüler kart oyunu Uno'nun Python programlama dili kullanılarak geliştirilmiş bir konsol uygulamasıdır. Nesne yönelimli programlama prensipleriyle kart, deste ve oyuncu gibi oyun bileşenleri modellenmiştir. Program, kartların dağıtılmasını, karıştırılmasını, sıra tabanlı oynanışı ve oyun kurallarını otomatik olarak yöneterek iki oyunculu bir Uno deneyimi sunar.",
    TetrisTermProject:
      "Bu proje, klasik Tetris oyununun C++ ve Raylib kütüphanesi kullanılarak geliştirilmiş bir versiyonudur. Proje; rastgele blok oluşturma, döndürme, skor takibi ve artan zorluk seviyesi gibi temel Tetris mekaniklerini başarıyla uygulamaktadır. Oyun, C++ dilinin oyun döngüsü yönetimi, çarpışma tespiti ve kullanıcı girdilerini işleme yeteneklerini sergilemektedir.",
    PythonToCTermProject:
      "Bu proje, Flex ve Bison kullanılarak geliştirilmiş bir derleyici/dönüştürücüdür. Python benzeri, girintiye duyarlı basit bir programlama dilinde yazılmış kodu C koduna çevirir. Proje, değişken atamaları, aritmetik işlemler ve koşullu ifadeler gibi temel dil özelliklerini desteklerken, sözcüksel analiz (lexical analysis) ve ayrıştırma (parsing) aşamalarını başarıyla uygular. Ayrıca, tür ve girinti tutarlılığı gibi hata denetimlerini de gerçekleştirir.",
    SpaceInvadersTermProject:
      "Bu proje, klasik atari oyunu Space Invaders'ın Java ve Swing kütüphanesi kullanılarak geliştirilmiş bir masaüstü uygulamasıdır. Oyunda, oyuncu gemisiyle uzaylıları vurma, lazerlerden kaçma ve puan toplama gibi temel mekanikler bulunmaktadır. Proje, kullanıcı kaydı ve girişi, yüksek skor tablosu gibi özelliklerle zenginleştirilmiştir. Nesne yönelimli programlama prensipleriyle geliştirilen oyun, olay dinleyicileri (event listeners) ve grafik arayüz (GUI) yönetimi konularında Java'nın yeteneklerini sergilemektedir.",
    DatabaseObsTermProject:
      "Bu proje, bir üniversitenin sınav planlama sürecini yönetmek için geliştirilmiş PHP tabanlı bir web uygulamasıdır. Sistem; dekan, bölüm başkanı, sekreter ve asistan gibi farklı kullanıcı rollerini destekleyerek her role özel yetkilendirme ve işlevler sunar. Proje, MySQL veritabanı ile entegre çalışarak fakülte ve bölümlere göre sınav listelerini görüntüleme gibi özellikler içerir. Bu uygulama, PHP ile session yönetimi, rol tabanlı erişim kontrolü ve veritabanı işlemlerinin nasıl yapıldığını gösteren kapsamlı bir örnektir.",
    LogisticAppTermProject:
      "Bu proje, Python'da socket ve tkinter kütüphaneleri kullanılarak geliştirilmiş bir kargo takip sistemidir. Müşteri, sürücü ve operatör gibi farklı kullanıcı rolleri için arayüzler sunan bir client-server mimarisine sahiptir. Sistem, kullanıcı girişi, sipariş takibi, rota optimizasyonu için genetik algoritma kullanımı ve veritabanı işlemleri gibi özellikleri içerir. Proje, ağ programlama, GUI geliştirme ve veritabanı yönetimi konularını bir araya getiren kapsamlı bir uygulamadır.",
    NetworkTermProject:
      "Bu proje, Java Swing kullanılarak geliştirilmiş bir P2P (Peer-to-Peer) dosya paylaşım uygulamasıdır. Uygulama, kullanıcıların yerel ağdaki diğer kullanıcılarla dosya ve klasör paylaşmasına olanak tanır. Proje, ağdaki diğer kullanıcıları keşfetme, paylaşılacak ve hariç tutulacak klasörleri/dosyaları belirleme ve dosya indirme gibi temel P2P işlevlerini içerir. Çoklu iş parçacığı (multithreading) kullanarak eş zamanlı indirmeleri yöneten bu uygulama, Java'da soket programlama ve GUI oluşturma konularında kapsamlı bir örnek sunmaktadır.",
    NetworkTermProject2:
      "Bu proje, Java Swing kullanılarak geliştirilmiş, P2P (Peer-to-Peer) tabanlı bir video streaming uygulamasıdır. Kullanıcıların yerel ağdaki diğer kişilerin paylaştığı videoları aramasına, indirmesine ve eş zamanlı olarak izlemesine olanak tanır. Proje; ağdaki diğer kullanıcıları bulma, paylaşım ve arama için filtreleme (klasör/maske dışlama), aktif yayınları ve indirme durumunu izleme gibi gelişmiş özellikler içerir. Bu uygulama, Java'da soket programlama, çoklu iş parçacığı (multithreading) ile veri akışı yönetimi ve arabellek (buffer) kontrolü gibi karmaşık konuları başarıyla ele alan kapsamlı bir örnektir.",
    AITermProject:
      "Bu proje, C++ ve Raylib kütüphanesi kullanılarak geliştirilmiş, 7x7'lik bir tahta üzerinde oynanan bir strateji oyunudur. Projede, en iyi hamleyi hesaplamak için Minimax algoritmasını kullanan bir yapay zekaya karşı mücadele edilmektedir. Oyunun amacı, rakip taşları ele geçirerek oyun alanında üstünlük sağlamak ve yapay zeka prensiplerinin oyun geliştirmedeki pratik uygulamasını göstermektir. Bu proje, temel oyun mekanikleri ile yapay zeka entegrasyonunu bir araya getirmektedir.",
    AITermProject2:
      'Bu proje, C++ ve Raylib kütüphanesi kullanılarak geliştirilmiş, "Hareket Et ve Kaldır" mekaniğine dayalı bir strateji oyunudur. Proje, rakibin hareket alanını kısıtlama hedefine odaklanan ve 7 hamle ilerisini hesaplayabilen gelişmiş bir Minimax yapay zekasına sahiptir. Oyunun temel amacı, rakibin tüm geçerli hamlelerini engelleyerek onu sıkıştırmak ve yapay zekanın stratejik derinliğini sergilemektir. Bu proje, oyun teorisi ve yapay zeka algoritmalarının etkileşimli bir ortamda nasıl birleştirilebileceğini göstermektedir.',

    // 42-Kocaeli-Common-Core
    "42-Kocaeli-Libft":
      "Bu proje, 42 Okulu Common Core müfredatının temelini oluşturan, standart C kütüphanesi fonksiyonlarının (libc) yeniden implement edildiği kapsamlı bir çalışmadır. Bellek yönetimi (dynamic memory allocation), pointer manipülasyonu ve string işleme gibi kritik C programlama temellerini derinlemesine ele alır. Ayrıca içerisinde barındırdığı linked list (bağlı liste) gibi veri yapısı implementasyonları ile dinamik veri yönetimi konusundaki yetkinliği sergiler. Müfredat boyunca geliştirilen tüm projelerde kullanılmak üzere optimize edilmiş, güvenilir ve yüksek performanslı bir araç seti sunmaktadır.",
    "42-Kocaeli-Printf":
      "Bu proje, standart C kütüphanesindeki printf fonksiyonunun variadic fonksiyonlar kullanılarak yeniden geliştirilmiş bir versiyonudur. Karakter, string, tam sayı ve hexadecimal gibi farklı format belirleyicilerini destekleyerek düşük seviyeli I/O işlemlerini ve değişken sayıda argüman yönetimini başarıyla gerçekleştirir. Ayrıca genişlik (width), hassasiyet (precision) ve bayraklar (flags) gibi gelişmiş özellikleri içeren bonus bölümüyle karmaşık metin formatlama kabiliyetini sergiler. Proje, C dilinde esnek fonksiyon yapısı ve hassas bellek yönetimi prensiplerinin pratik bir uygulamasını sunmaktadır.",
    "42-Kocaeli-Get_Next_Line":
      "Bu proje, bir dosya tanımlayıcısından (file descriptor) her çağrıldığında bir satır okuyan fonksiyonel bir sistem aracıdır. Statik değişkenlerin (static variables) kullanımıyla dosya içindeki okuma konumunu koruyarak verimli bir buffer yönetimi ve düşük seviyeli I/O kontrolü sergiler. Bellek sızıntılarını önleyen hassas dinamik bellek yönetimi prensipleriyle geliştirilen bu fonksiyon, aynı anda birden fazla dosyadan (multiple file descriptors) veri okuyabilme yeteneğine sahiptir. Proje, sistem programlama ve C dilinde kaynak yönetimi konularındaki yetkinliği kanıtlayan kritik bir çalışmadır.",
    "42-Kocaeli-Push_Swap":
      "Bu proje, karmaşık bir sıralama problemini iki stack (yığın) ve kısıtlı bir işlem seti kullanarak çözen verimli bir algoritma tasarımı çalışmasıdır. Verileri en az hamle ile sıralamak için optimize edilmiş bir Quicksort algoritması kullanarak veri yapıları, algoritma karmaşıklığı (Big O) ve özyinelemeli programlama kavramlarını derinlemesine uygular. Proje, hem ana sıralama motorunu hem de işlemlerin doğruluğunu kontrol eden bir 'checker' (doğrulayıcı) modülünü içermektedir. Bellek yönetimi ve performans optimizasyonu prensiplerine sadık kalarak, yüksek ölçekli veri setlerinde bile başarılı sonuçlar vermektedir.",
    "42-Kocaeli-So_Long":
      "Bu proje, MiniLibX kütüphanesi kullanılarak C dilinde geliştirilmiş 2D bir koleksiyon oyunudur. Harita okuma, grid tabanlı hareket, çarpışma tespiti (collision detection) ve sprite animasyonları gibi temel oyun motoru mekaniklerini kapsamlı bir şekilde uygular. Flood-fill algoritması kullanarak harita erişilebilirliğini denetleyen ve olay tabanlı (event-driven) programlama ile kullanıcı girdilerini işleyen bu çalışma, grafik programlama prensiplerini sergiler. Ayrıca hareket eden düşmanlar ve animasyonlu karakterler içeren bonus özellikleriyle oyunun teknik ve görsel derinliğini artırmaktadır.",
    "42-Kocaeli-Pipex":
      "Bu proje, Unix sistemlerindeki pipe mekanizmasını, süreç (process) yönetimini ve dosya yönlendirme işlemlerini C dilinde simüle eden bir sistem programlama çalışmasıdır. Bash shell'deki pipe (|) operatörünün çalışma mantığını fork, pipe, dup2 ve execve gibi sistem çağrılarını kullanarak yeniden oluşturur. Sınırsız komut desteği (multiple pipes) ve 'here_doc' yapısını barındıran bonus bölümüyle, süreçler arası iletişim (IPC) ve dosya tanımlayıcıları (file descriptors) üzerindeki hakimiyeti sergiler. Proje, sistem kaynaklarının verimli yönetimi ve süreçler arası veri akışının senkronizasyonu konularında derinlemesine bir deneyim sunar.",
    "42-Kocaeli-Philosophers":
      "Bu proje, eşzamanlılık (concurrency) ve thread senkronizasyonu konularına odaklanan klasik 'Yemek Yiyen Filozoflar' probleminin C dilinde bir çözümüdür. `pthread` kütüphanesi kullanılarak çoklu iş parçacığı (multithreading) yönetimi gerçekleştirilmiş ve paylaşılan kaynaklara erişim mutex'ler ile güvenli hale getirilmiştir. Proje; veri yarışı (race condition), kilitlenmeleri (deadlock) önleme ve hassas zamanlama (timing) yönetimi gibi sistem programlama konularında kapsamlı bir deneyim sunar. Simülasyonun kararlılığı, optimize edilmiş kaynak paylaşım stratejileri ve eşzamanlı izleme thread'leri ile sağlanmıştır.",
    "42-Kocaeli-Minishell":
      "Bu proje, Bash kabuğunun temel işlevlerini C diliyle yeniden oluşturan kapsamlı bir sistem programlama çalışmasıdır. Süreç yönetimi (process management), pipe mekanizmaları, giriş/çıkış yönlendirmeleri (redirections) ve sinyal işleme gibi kritik Unix sistem prensiplerini başarıyla uygular. Kendi içinde barındırdığı parser ve tokenizer yapıları sayesinde komut satırı girdilerini anlamlandırır; ayrıca mantıksal operatörler (&&, ||), parantez gruplandırma ve wildcard (*) gibi gelişmiş bonus özellikleri destekleyerek tam fonksiyonel bir terminal deneyimi sunar. Proje, sistem çağrılarının ve düşük seviyeli kaynak yönetiminin karmaşık bir mimari içinde nasıl harmanlandığını gösteren teknik bir başarıdır.",
    "42-Kocaeli-Cub3d":
      "Bu proje, C dili ve MinilibX grafik kütüphanesi kullanılarak geliştirilmiş, Wolfenstein 3D benzeri bir 3D oyun motorudur. Raycasting algoritmasını kullanarak 2D haritaları gerçek zamanlı olarak 3D perspektife dönüştürür; doku eşleme (texture mapping), bakış açısı düzeltme (fisheye correction) ve z-buffer benzeri optimizasyon tekniklerini içerir. Ayrıca animasyonlu karakterler, açılabilir kapılar ve mini harita gibi gelişmiş bonus özelliklerle zenginleştirilmiştir. Proje, düşük seviyeli grafik programlama, trigonometri ve gerçek zamanlı render döngüsü yönetimi konularında kapsamlı bir deneyim sunmaktadır.",
    "42-Kocaeli-Irc":
      "Bu proje, RFC 1459 standartlarına uygun olarak C++98 diliyle geliştirilmiş yüksek performanslı bir IRC (Internet Relay Chat) sunucusudur. TCP/IP socket programlama ve poll() mekanizması kullanılarak aynı anda çok sayıda istemcinin kesintisiz iletişim kurmasına olanak tanıyan, bloklamasız (non-blocking) bir I/O mimarisi üzerine inşa edilmiştir. Sunucu; kanal yönetimi, kullanıcı yetkilendirme (+k, +l, +n modları), özel mesajlaşma ve operatör komutları (KICK, INVITE, TOPIC, MODE) gibi temel IRC özelliklerini tam kapsamlı olarak destekler. HexChat gibi popüler IRC istemcileriyle tam uyumlu çalışan bu uygulama, ağ programlama ve protokol implementasyonu konularında ileri düzey teknik yetkinlik sergilemektedir.",
    "42-Kocaeli-Inception":
      "Bu proje, Docker ve Docker Compose kullanılarak kurgulanmış, tam işlevli bir sistem yönetimi ve DevOps altyapısı çalışmasıdır. NGINX, MariaDB ve WordPress servislerini içeren çoklu konteyner (multi-container) mimarisi; ağ izolasyonu, veri kalıcılığı ve SSL/TLS sertifika güvenliği prensipleriyle yapılandırılmıştır. Mikroservisler arası güvenli iletişim ve otomatik kurulum süreçlerini (WP-CLI) kapsayan bu altyapı, Debian tabanlı özelleştirilmiş Docker imajları üzerine inşa edilmiştir. Proje, modern konteynerleştirme teknolojileri ve karmaşık ağ topolojilerinin yönetimi konusundaki derin yetkinliği sergilemektedir.",

    // 42-Kocaeli-Cpp-Modules
    "42-Kocaeli-Cpp-0":
      "Bu proje, 42 Okulu C++ müfredatının ilk aşaması olan Module 00 kapsamında geliştirilmiş uygulama serisidir. C++98 standardına uygun olarak nesne yönelimli programlamanın (OOP) temel yapı taşlarını; sınıf tanımlama, enkapsülasyon (encapsulation) ve statik üyeler gibi kavramlar üzerinden ele alır. Proje; basit bir megafon uygulamasından başlayarak, veri saklama disiplini gerektiren bir telefon rehberine ve statik sınıf fonksiyonlarıyla çalışan kapsamlı bir banka hesabı simülasyonuna kadar çeşitli senaryoları kapsar. Bu modül, C dilinden nesne yönelimli programlama dünyasına geçişte temel standartları ve bellek yönetimi prensiplerini kavramak için tasarlanmıştır.",
    "42-Kocaeli-Cpp-1":
      "Bu proje, nesne yönelimli programlamanın (OOP) temel taşlarını ve C++'a özgü bellek yönetimi prensiplerini derinlemesine inceleyen bir uygulama serisidir. Bellek yönetiminde stack ve heap ayrımı, new/delete operatörleri, referans ve işaretçi (pointer) kullanımı gibi kritik konular pratik senaryolarla ele alınmıştır. Ayrıca dosya akışları (File I/O) ve üye fonksiyon işaretçileri (member function pointers) kullanılarak modüler ve ölçeklenebilir bir mimari tasarlanmıştır. C++98 standardı ve RAII prensibi çerçevesinde geliştirilen bu çalışma, bellek sızıntılarını önleme ve güvenilir kod yazımı konusunda disiplinli bir mühendislik yaklaşımı sunmaktadır.",
    "42-Kocaeli-Cpp-2":
      "Bu proje, nesne yönelimli programlamada operatör aşırı yükleme (operator overloading) ve ad-hoc polimorfizm kavramlarını odağına alan teknik bir çalışmadır. IEEE 754 standartlarına alternatif olarak, bit kaydırma (bit shifting) yöntemleriyle sıfırdan bir sabit noktalı (fixed-point) sayı sınıfı tasarlanmış ve geliştirilmiştir. Proje kapsamında Orthodox Canonical Form standartlarına tam uyum sağlanırken; aritmetik, karşılaştırma ve artırma/azaltma operatörleri sınıf yapısına uygun şekilde yeniden tanımlanmıştır. Ayrıca, geliştirilen bu sayı sistemi kullanılarak bir noktanın üçgen içindeki konumunu hesaplayan geometrik BSP (Binary Space Partitioning) algoritması başarıyla implement edilmiştir.",
    "42-Kocaeli-Cpp-3":
      "Bu proje, nesne yönelimli programlamanın (OOP) en temel özelliklerinden biri olan kalıtım (inheritance) ve çok biçimlilik (polymorphism) kavramlarına odaklanmaktadır. Temel bir robot sınıfından türetilen alt sınıflar aracılığıyla nesneler arası hiyerarşi, erişim belirleyicileri (protected) ve fonksiyon ezme (overriding) yöntemleri başarıyla uygulanmıştır. Projenin ileri seviye aşamasında, çoklu kalıtım (multiple inheritance) sırasında ortaya çıkan 'Diamond Problem' yapısı, sanal kalıtım (virtual inheritance) tekniği kullanılarak çözüme kavuşturulmuştur. C++98 standartları çerçevesinde hazırlanan bu çalışma, nesne hiyerarşilerinin bellek üzerindeki yerleşimi ve yapıcı/yıkıcı (constructor/destructor) çalışma sırası gibi kritik mimari konuları ele almaktadır.",
    "42-Kocaeli-Cpp-4":
      "Bu proje, nesne yönelimli programlamanın ileri seviye kavramları olan alt tür polimorfizmi (subtype polymorphism), soyut sınıflar (abstract classes) ve arayüzler (interfaces) üzerine odaklanmaktadır. Çalışma kapsamında, sanal fonksiyonlar aracılığıyla çalışma zamanı polimorfizminin temelleri atılmış ve karmaşık nesne hiyerarşileri içerisinde güvenli bellek yönetimi sağlayan sanal yıkıcı (virtual destructor) kullanımı pratik edilmiştir. Ayrıca işaretçi içeren sınıflarda veri bütünlüğünü korumak adına derin kopyalama (deep copy) yöntemleri geliştirilmiş ve saf sanal fonksiyonlar yardımıyla esnek arayüz tabanlı sistemler tasarlanmıştır. C++98 standartlarında hazırlanan bu modül, yazılım mimarisinde esnekliği artıran arayüz tasarımı ve RAII tabanlı kaynak yönetimi prensiplerini kapsamlı bir şekilde sergilemektedir.",
    "42-Kocaeli-Cpp-5":
      "Bu proje, C++ programlama dilinde hata yönetimi (exception handling) ve karmaşık iş akışlarının simülasyonu üzerine kurgulanmıştır. Bir bürokrasi sistemini modelleyen çalışma; özel istisna sınıflarının (custom exceptions) tanımlanması, try-catch blokları ile güvenli kod yürütümü ve sınıflar arası yetki denetimi süreçlerini kapsamaktadır. Soyut form sınıfları ve bunlardan türetilen farklı görevlerdeki somut sınıflar aracılığıyla kalıtım ve polimorfizm yetenekleri sergilenirken; nesne oluşturma aşamasında esneklik sağlayan 'Factory' tasarım deseni uygulanmıştır. Proje, C++98 standartlarında RAII prensibine sadık kalarak, kaynak yönetimi ve hata toleranslı yazılım geliştirme disiplinini ön plana çıkarmaktadır.",
    "42-Kocaeli-Cpp-6":
      "Bu proje, C++ programlama dilindeki tip dönüşüm mekanizmalarını (casting) ve serileştirme (serialization) işlemlerini derinlemesine ele almaktadır. Skaler veri tiplerini güvenli bir şekilde birbirine dönüştüren static_cast uygulamalarından, bellek adreslerini sayısal verilere çeviren reinterpret_cast tabanlı serileştirme sistemlerine kadar geniş bir yelpazeyi kapsamaktadır. Ayrıca polimorfik sınıflarda çalışma zamanı tip belirleme (RTTI) süreçleri için dynamic_cast kullanımı, hem işaretçiler hem de referanslar üzerinden istisna yönetimi ile birlikte uygulanmıştır. C++98 standartları temelinde hazırlanan bu modül, veri türleri arasındaki sınırları yönetme ve düşük seviyeli bellek temsillerini güvenli bir şekilde kontrol etme yetkinliği kazandırmaktadır.",
    "42-Kocaeli-Cpp-7":
      "Bu proje, C++ programlama dilinin en güçlü özelliklerinden biri olan şablonlar (templates) ve jenerik programlama (generic programming) kavramlarını temel almaktadır. Veri tipinden bağımsız algoritmalar geliştirmeyi sağlayan fonksiyon şablonları (swap, min, max, iter) ve dinamik dizi yönetimini güvenli hale getiren sınıf şablonları (Array<T>) başarıyla implement edilmiştir. Çalışma kapsamında; derleme zamanı (compile-time) tip belirleme süreçleri, şablon uzmanlaşması ve hata yönetimi ile birleştirilmiş sınır denetimi (bounds checking) gibi ileri seviye teknikler uygulanmıştır. C++98 standartlarında hazırlanan bu modül, kodun yeniden kullanılabilirliğini artıran esnek mimariler kurma ve tip güvenliğini koruyarak performanslı çözümler üretme yetkinliği kazandırmaktadır.",
    "42-Kocaeli-Cpp-8":
      "Bu proje, C++ Standart Şablon Kütüphanesi (STL) konteynerları, iteratörler ve algoritmalar üzerine yoğunlaşan kapsamlı bir çalışmadır. Farklı STL konteynerları üzerinde çalışan jenerik arama algoritmaları, sayı dizileri arasındaki mesafeyi analiz eden özelleştirilmiş veri yapıları (Span) ve varsayılan yığın yapısına iteratör yeteneği kazandıran 'MutantStack' implementasyonu başarıyla gerçekleştirilmiştir. Çalışma kapsamında; iteratör kategorileri, konteyner adaptörlerinin modifiyesi ve STL algoritmalarının performanslı kullanımı gibi kritik konular ele alınmıştır. C++98 standartları çerçevesinde hazırlanan bu modül, modern C++ kütüphane bileşenlerini etkin bir şekilde yönetme ve karmaşık veri yapılarını jenerik programlama prensipleriyle optimize etme yetkinliği kazandırmaktadır.",
    "42-Kocaeli-Cpp-9":
      "Bu proje, C++ Standart Şablon Kütüphanesi (STL) konteynerlarının ileri düzey kullanımı ve karmaşık algoritmaların performans odaklı implementasyonu üzerine yoğunlaşmaktadır. Tarihsel Bitcoin verilerini işleyerek hızlı sorgulama yapan bir borsa simülasyonu (Bitcoin Exchange), yığın tabanlı matematiksel ifade hesaplayıcısı (RPN) ve teorik olarak en verimli karşılaştırmalı sıralama yöntemlerinden biri olan Ford-Johnson algoritması (PmergeMe) başarıyla geliştirilmiştir. Çalışma kapsamında; harita (map), yığın (stack), vektör (vector) ve çift uçlu kuyruk (deque) gibi veri yapılarının karşılaştırmalı performans analizleri yapılarak, bellek yönetimi ve işlem zamanı optimizasyonları mikrosaniye hassasiyetinde ölçülmüştür. C++98 standartlarında hazırlanan bu modül, büyük veri setlerini işleme yetkinliği ve algoritmik karmaşıklık analizi konularında derinlemesine bir deneyim sunmaktadır.",

    // 42-Kocaeli-Advanced-Projects
    "42-Kocaeli-Libasm":
      "Bu proje, x86_64 Assembly (NASM) dili kullanılarak temel C kütüphane fonksiyonlarının ve sistem çağrılarının yeniden implement edildiği ileri seviye bir çalışmadır. Proje; System V AMD64 ABI çağırma konvansiyonları, kayıtçı (register) yönetimi ve doğrudan çekirdek (kernel) arayüzü ile etkileşim kuran sistem çağrılarının derinlemesine anlaşılmasını sağlar. Ayrıca, Assembly düzeyinde dinamik bellek yönetimi ve bağlı liste (linked list) manipülasyonu gibi karmaşık işlemleri başarıyla gerçekleştirir. Bu çalışma, düşük seviyeli programlama prensiplerini ve yazılımın donanım katmanındaki çalışma mekanizmasını sergileyen kapsamlı bir örnektir.",
    "42-Kocaeli-Turing":
      "Bu proje, Alan Turing'in teorik bilgisayar modeli olan Turing makinelerini simüle etmek için JavaScript ve Deno kullanılarak geliştirilmiş bir simülatördür. Proje; hesaplama kuramı (computational theory), otomata teorisi ve durum makinesi (state machine) tasarımı gibi ileri seviye bilgisayar bilimi kavramlarını pratik bir uygulamaya dönüştürür. JSON tabanlı makine tanımlarını okuyarak sonsuz şerit (tape) simülasyonu, adım adım yürütme geçmişi ve kapsamlı girdi doğrulama mekanizmalarını başarıyla yürütür. Bu çalışma, karmaşık algoritmik problemlerin en temel hesaplama düzeyinde nasıl çözülebileceğini gösteren profesyonel bir araçtır.",
    "42-Kocaeli-Malloc":
      "Bu proje, C programlama dilindeki standart bellek yönetimi fonksiyonlarının (malloc, free, realloc) çekirdek düzeyinde yeniden implement edildiği gelişmiş bir sistem programlama çalışmasıdır. Proje; bellek parçalanmasını (fragmentation) minimize eden zone tabanlı (TINY, SMALL, LARGE) bir mimari üzerine kurulmuş olup, mmap sistem çağrısı ile doğrudan işletim sistemi üzerinden bellek yönetimini gerçekleştirir. Thread-safe yapısı sayesinde çoklu iş parçacıklı ortamlarda güvenli çalışma sunarken, bellek durumunu görselleştiren ve hata ayıklamayı kolaylaştıran özel fonksiyonlar ile 'scribbling' gibi gelişmiş debug özellikleri içerir. Bu çalışma, sanal bellek yönetimi ve düşük seviyeli kaynak optimizasyonu konularındaki derin teknik yetkinliği sergilemektedir.",
    "42-Kocaeli-Avaj_Launcher":
      "Bu proje, Java programlama dili kullanılarak geliştirilmiş, nesne yönelimli programlama (OOP) prensiplerini ve tasarım desenlerini (design patterns) odağına alan bir hava durumu simülasyon uygulamasıdır. Proje; uçakların (Balon, Helikopter, Jet) değişken hava koşullarına göre hareketlerini simüle etmek için Gözlemci (Observer), Fabrika (Factory) ve Tekil (Singleton) tasarım desenlerini başarıyla uygular. Senaryo tabanlı girdi dosyalarını işleyerek koordinat hesaplamaları, yükseklik yönetimi ve otomatik iniş mekanizmalarını yöneten bu çalışma, Java'nın kalıtım (inheritance), arayüz (interface) ve soyutlama (abstraction) yeteneklerini kapsamlı bir şekilde sergiler. Bu uygulama, karmaşık sistemlerin modüler ve genişletilebilir bir mimariyle nasıl modellenebileceğini gösteren güçlü bir örnektir.",
    "42-Kocaeli-Hangouts":
      "Bu proje, Flutter framework'ü kullanılarak Android platformu için geliştirilmiş kapsamlı bir SMS mesajlaşma ve kişi yönetimi uygulamasıdır. Uygulama; Flutter'ın modern arayüz yeteneklerini native Android (Kotlin) kodları ile Method Channel ve Event Channel üzerinden birleştirerek, gerçek zamanlı SMS alma, bildirim yönetimi ve SQLite tabanlı yerel veri saklama gibi özellikleri başarıyla sunar. Çok dilli destek (Türkçe/İngilizce), özelleştirilebilir tema seçenekleri ve gelişmiş kullanıcı deneyimi prensipleriyle tasarlanan bu çalışma, hibrit mobil uygulama geliştirme ve platformlar arası entegrasyon konusundaki yetkinliği sergiler. Bu proje, modern mobil teknolojilerin native sistem özellikleriyle nasıl uyumlu bir şekilde çalışabileceğini gösteren profesyonel bir örnektir.",
    "42-Kocaeli-Matrix":
      "Bu proje, makine öğrenmesi ve veri bilimi çalışmalarının temelini oluşturan lineer cebir kavramlarını C++ dili ve ileri seviye şablon programlama (template programming) teknikleriyle hayata geçiren teknik bir kütüphanedir. Vektör ve matris yapıları üzerinde; temel aritmetik işlemlerden lineer kombinasyonlara, norm hesaplamalarından Gaussian eliminasyonu ile matris tersi ve rank bulmaya kadar geniş bir spektrumdaki matematiksel operasyonları kapsar. Operatör aşırı yükleme (operator overloading) ve generic programlama prensipleriyle tasarlanan bu çalışma, matematiksel teorilerin yazılım mühendisliği disipliniyle nasıl optimize edilebileceğini sergiler. Bu kütüphane, karmaşık hesaplamalı problemlerin çözümünde performanslı ve tip güvenli (type-safe) bir altyapı sunan profesyonel bir örnektir.",
    "42-Kocaeli-Ping":
      "Bu proje, ICMP (Internet Control Message Protocol) protokolü kullanılarak network host'larına düşük seviyeli paketler gönderen bir ağ programlama uygulamasıdır. C dili ve 'Raw Socket' teknolojisi kullanılarak geliştirilen uygulama; DNS çözümleme, paket manipülasyonu, asenkron sinyal yönetimi ve milisaniye hassasiyetinde RTT (Round Trip Time) ölçümü gibi kritik ağ operasyonlarını gerçekleştirir. GNU ping aracıyla uyumlu şekilde tasarlanan proje; paket kaybı analizi, checksum doğrulama ve çeşitli ICMP hata türlerinin (Destination Unreachable, Time Exceeded vb.) işlenmesi gibi karmaşık ağ protokolü detaylarını içerir. Bu çalışma, işletim sistemi çekirdeği ile doğrudan iletişim kuran yüksek performanslı ağ araçlarının geliştirilme sürecini sergileyen profesyonel bir örnektir.",
    "42-Kocaeli-ComputorV1":
      "Bu proje, karmaşık polinom denklemlerini ayrıştırıp çözümleyen, matematiksel algoritma tasarımı ve sayısal analiz odaklı bir C++ uygulamasıdır. Program; birinci ve ikinci dereceden denklemleri (ax² + bx + c = 0) katsayılarına göre analiz eder, diskriminant değerini hesaplar ve hem gerçek hem de karmaşık (sanal) kökleri hassas bir şekilde bulur. Standart kütüphaneye bağlı kalmadan Newton-Raphson yöntemiyle geliştirilen karekök fonksiyonu ve Euclid algoritmasıyla çalışan kesir sadeleştirme özellikleri gibi düşük seviyeli matematiksel implementasyonları içerir. Bu çalışma, karmaşık verilerin ayrıştırılması (parsing) ve teorik matematiksel formüllerin yazılım ortamında güvenilir bir şekilde uygulanması konusundaki yetkinliği sergiler.",
  },
  en: {
    // Yeditepe-University-Term-Projects
    UnoTermProject:
      "This project is a console application of the popular card game Uno developed using the Python programming language. Game components such as cards, decks, and players are modeled using object-oriented programming principles. The program provides a two-player Uno experience by automatically managing card distribution, shuffling, turn-based gameplay, and game rules.",
    TetrisTermProject:
      "This project is a C++ version of the classic Tetris game developed using the Raylib library. The project successfully implements core Tetris mechanics such as random block generation, rotation, score tracking, and increasing difficulty levels. The game showcases C++'s capabilities in game loop management, collision detection, and processing user input.",
    PythonToCTermProject:
      "This project is a compiler/converter developed using Flex and Bison. It converts code written in a simple, indentation-sensitive, Python-like programming language into C code. The project supports basic language features such as variable assignments, arithmetic operations, and conditional statements, while successfully implementing lexical analysis and parsing stages. Additionally, it performs error checking for type and indentation consistency.",
    SpaceInvadersTermProject:
      "This project is a desktop application of the classic arcade game Space Invaders developed using Java and the Swing library. The game includes core mechanics such as shooting aliens with the player's ship, dodging lasers, and collecting points. The project is enriched with features such as user registration and login, and a high score table. Developed with object-oriented programming principles, the game demonstrates Java's capabilities in event listener management and graphical user interface (GUI) management.",
    DatabaseObsTermProject:
      "This project is a web application developed using PHP and MySQL to manage a university's exam scheduling process. The system supports different user roles such as dean, department head, secretary, and assistant, providing role-specific authorization and functionality. The project integrates with a MySQL database to offer features like viewing exam lists by faculty and department. This application serves as a comprehensive example of how to implement session management, role-based access control, and database operations using PHP.",
    LogisticAppTermProject:
      "This project is a cargo tracking system developed using Python with socket and tkinter libraries. It features a client-server architecture with interfaces for different user roles: customer, driver, and operator. The system includes user login, order tracking, route optimization using a genetic algorithm, and database operations. This project is a comprehensive example of network programming, GUI development, and database management.",
    NetworkTermProject:
      "This project is a P2P (Peer-to-Peer) file sharing application developed using Java Swing. The application allows users to share files and folders with other users on the local network. The project includes core P2P functionalities such as discovering other users on the network, specifying folders/files to share or exclude, and downloading files. Using multithreading to manage concurrent downloads, this application provides a comprehensive example of socket programming and GUI development in Java.",
    NetworkTermProject2:
      "This project is a P2P (Peer-to-Peer) video streaming application developed using Java Swing. The application allows users to search for, download, and watch videos shared by other users on the local network in real-time. The project includes advanced features such as discovering other users on the network, filtering for sharing and searching (excluding folders/masks), and monitoring active streams and download statuses. This application is a comprehensive example that successfully addresses complex topics such as socket programming, data stream management with multithreading, and buffer control in Java.",
    AITermProject:
      "This project is a strategy game played on a 7x7 board, developed using C++ and the Raylib library. In this project, you compete against an artificial intelligence that utilizes the Minimax algorithm to calculate the optimal move. The objective of the game is to achieve dominance on the board by capturing the opponent's pieces, demonstrating the practical application of artificial intelligence principles in game development. This project effectively combines fundamental game mechanics with AI integration.",
    AITermProject2:
      'This project is a strategy game based on the "Move and Remove" mechanic, developed using C++ and the Raylib library. The project features an advanced Minimax artificial intelligence that can calculate 7 moves ahead, focusing on the objective of restricting the opponent\'s movement. The primary goal of the game is to trap the opponent by blocking all their valid moves, showcasing the strategic depth of the AI. This project demonstrates how game theory and artificial intelligence algorithms can be combined in an interactive environment.',

    // 42-Kocaeli-Common-Core
    "42-Kocaeli-Libft":
      "This project is a comprehensive work where standard C library functions (libc) are reimplemented, forming the basis of the 42 School Common Core curriculum. It delves deeply into critical C programming fundamentals such as memory management (dynamic memory allocation), pointer manipulation, and string handling. Additionally, it showcases proficiency in dynamic data management with implementations of data structures like linked lists. It provides an optimized, reliable, and high-performance toolkit for use in all projects developed throughout the curriculum.",
    "42-Kocaeli-Printf":
      "This project is a reimplementation of the standard C library's printf function using variadic functions. It successfully handles different format specifiers such as character, string, integer, and hexadecimal, demonstrating low-level I/O operations and management of variable numbers of arguments. Additionally, with its bonus section that includes advanced features like width, precision, and flags, it showcases complex text formatting capabilities. The project offers a practical application of flexible function structure and precise memory management principles in C.",
    "42-Kocaeli-Get_Next_Line":
      "This project is a functional utility that reads a line from a file descriptor each time it is called. By using static variables to maintain the reading position within the file, it demonstrates efficient buffer management and low-level I/O control. Developed with precise dynamic memory management principles to prevent memory leaks, this function has the capability to read from multiple file descriptors simultaneously. The project is a critical work that proves proficiency in system programming and resource management in C.",
    "42-Kocaeli-Push_Swap":
      "This project is an efficient algorithm design exercise that solves a complex sorting problem using two stacks and a limited set of operations. It applies data structures, algorithmic complexity (Big O), and recursive programming concepts in depth by utilizing an optimized Quicksort algorithm to sort data with minimal moves. The project includes both the main sorting engine and a 'checker' module that verifies the correctness of the operations. Adhering to principles of memory management and performance optimization, it delivers successful results even on large-scale data sets.",
    "42-Kocaeli-So_Long":
      "This project is a 2D collection game developed in C using the MiniLibX library. It comprehensively implements core game engine mechanics such as map reading, grid-based movement, collision detection, and sprite animations. By using a flood-fill algorithm to check map accessibility and event-driven programming to handle user input, this work demonstrates principles of graphical programming. Additionally, with bonus features that include moving enemies and animated characters, it enhances the technical and visual depth of the game.",
    "42-Kocaeli-Pipex":
      "This project is a system programming exercise that simulates the pipe mechanism, process management, and file redirection operations in Unix systems using the C language. It recreates the working logic of the pipe (|) operator in the Bash shell using system calls such as fork, pipe, dup2, and execve. With its bonus section that includes unlimited command support (multiple pipes) and the 'here_doc' structure, it demonstrates mastery over inter-process communication (IPC) and file descriptors. The project offers an in-depth experience in efficient management of system resources and synchronization of data flow between processes.",
    "42-Kocaeli-Philosophers":
      "This project is a solution to the classic 'Dining Philosophers' problem, focusing on concurrency and thread synchronization in C. Using the `pthread` library, it manages multithreading and secures access to shared resources with mutexes. The project provides comprehensive experience in system programming topics such as race conditions, deadlock prevention, and precise timing management. The stability of the simulation is ensured with optimized resource-sharing strategies and concurrent monitoring threads.",
    "42-Kocaeli-Minishell":
      "This project is a comprehensive system programming exercise that recreates the core functionalities of the Bash shell using the C language. It successfully implements critical Unix system principles such as process management, pipe mechanisms, input/output redirections, and signal handling. With its built-in parser and tokenizer structures, it interprets command-line inputs; additionally, by supporting advanced bonus features like logical operators (&&, ||), parenthesis grouping, and wildcards (*), it delivers a fully functional terminal experience. The project is a technical achievement that demonstrates how system calls and low-level resource management are harmonized within a complex architecture.",
    "42-Kocaeli-Cub3d":
      "This project is a 3D game engine similar to Wolfenstein 3D, developed using C and the MinilibX graphics library. It uses the raycasting algorithm to convert 2D maps into real-time 3D perspective; it includes texture mapping, fisheye correction, and z-buffer-like optimization techniques. Additionally, it is enriched with advanced bonus features such as animated characters, openable doors, and a mini-map. The project provides comprehensive experience in low-level graphics programming, trigonometry, and real-time render loop management.",
    "42-Kocaeli-Irc":
      "This project is a high-performance IRC (Internet Relay Chat) server developed in C++98, compliant with RFC 1459 standards. Built on a non-blocking I/O architecture using TCP/IP socket programming and the poll() mechanism, it allows seamless communication for a large number of clients simultaneously. The server fully supports core IRC features such as channel management, user authentication (+k, +l, +n modes), private messaging, and operator commands (KICK, INVITE, TOPIC, MODE). Fully compatible with popular IRC clients like HexChat, this application demonstrates advanced technical proficiency in network programming and protocol implementation.",
    "42-Kocaeli-Inception":
      "This project is a full-fledged system administration and DevOps infrastructure exercise orchestrated using Docker and Docker Compose. The multi-container architecture, which includes NGINX, MariaDB, and WordPress services, is configured with principles of network isolation, data persistence, and SSL/TLS certificate security. Covering secure communication between microservices and automated setup processes (WP-CLI), this infrastructure is built on custom Debian-based Docker images. The project demonstrates deep proficiency in modern containerization technologies and the management of complex network topologies.",

    // 42-Kocaeli-Cpp-Modules
    "42-Kocaeli-Cpp-0":
      "This project is a series of applications developed in the first stage of the 42 School C++ curriculum, Module 00. It covers the fundamental building blocks of object-oriented programming (OOP) in C++98, including class definition, encapsulation, and static members. The project encompasses various scenarios, starting from a simple megaphone application to a phone book that requires data storage discipline, and a comprehensive bank account simulation that operates with static class functions. This module is designed to grasp the fundamental standards and memory management principles for transitioning from C to the world of object-oriented programming.",
    "42-Kocaeli-Cpp-1":
      "This project is a series of applications that delve deeply into the fundamentals of object-oriented programming (OOP) and C++-specific memory management principles. Critical topics such as stack and heap differentiation in memory management, the use of new/delete operators, and reference and pointer usage are addressed with practical scenarios. Additionally, it features modular and scalable architecture designed with File I/O and member function pointers. Developed within the C++98 standard and RAII principles, this work offers a disciplined engineering approach to preventing memory leaks and writing reliable code.",
    "42-Kocaeli-Cpp-2":
      "This project is a technical exercise focusing on operator overloading and ad-hoc polymorphism in object-oriented programming. A fixed-point number class is designed and developed from scratch using bit shifting methods as an alternative to IEEE 754 standards. While fully adhering to Orthodox Canonical Form standards, arithmetic, comparison, and increment/decrement operators are redefined in a manner consistent with the class structure. Additionally, a geometric BSP (Binary Space Partitioning) algorithm that calculates the position of a point within a triangle is successfully implemented using this developed number system.",
    "42-Kocaeli-Cpp-3":
      "This project focuses on the concepts of inheritance and polymorphism, which are fundamental features of object-oriented programming (OOP). Through subclasses derived from a basic robot class, it successfully implements hierarchy among objects, access specifiers (protected), and function overriding methods. In the advanced stage of the project, the 'Diamond Problem' structure that arises during multiple inheritance is resolved using virtual inheritance techniques. Developed within C++98 standards, this work addresses critical architectural issues such as memory layout of object hierarchies and the order of constructor/destructor execution.",
    "42-Kocaeli-Cpp-4":
      "This project focuses on advanced concepts of object-oriented programming, such as subtype polymorphism, abstract classes, and interfaces. The foundations of runtime polymorphism are established through virtual functions, and the use of virtual destructors ensures safe memory management within complex object hierarchies. Additionally, deep copy methods are developed to maintain data integrity in classes containing pointers, and flexible interface-based systems are designed with pure virtual functions. Prepared within C++98 standards, this module comprehensively demonstrates interface design that enhances flexibility in software architecture and RAII-based resource management principles.",
    "42-Kocaeli-Cpp-5":
      "This project is centered around exception handling and the simulation of complex workflows in C++. Modeling a bureaucracy system, it encompasses the definition of custom exception classes, secure code execution with try-catch blocks, and authority checks between classes. While demonstrating inheritance and polymorphism capabilities through abstract form classes and concrete classes in different tasks, the 'Factory' design pattern is applied to provide flexibility in object creation. Developed with adherence to C++98 standards and RAII principles, this project emphasizes disciplined engineering in resource management and error-tolerant software development.",
    "42-Kocaeli-Cpp-6":
      "This project delves deeply into the casting mechanisms and serialization processes in C++. It covers a wide range from static_cast applications that safely convert scalar data types to reinterpret_cast-based serialization systems that convert memory addresses to numerical data. Additionally, dynamic_cast usage for runtime type identification (RTTI) processes in polymorphic classes is implemented with exception handling for both pointers and references. Prepared within C++98 standards, this module provides proficiency in managing boundaries between data types and safely controlling low-level memory representations.",
    "42-Kocaeli-Cpp-7":
      "This project is based on the concepts of templates and generic programming, which are among the most powerful features of the C++ programming language. Function templates (swap, min, max, iter) that allow for developing type-independent algorithms and class templates (Array<T>) that ensure safe management of dynamic arrays are successfully implemented. The project applies advanced techniques such as compile-time type determination processes, template specialization, and bounds checking combined with error management. Prepared within C++98 standards, this module provides proficiency in building flexible architectures that increase code reusability and produce performance solutions while maintaining type safety.",
    "42-Kocaeli-Cpp-8":
      "This project is a comprehensive work focusing on C++ Standard Template Library (STL) containers, iterators, and algorithms. Generic search algorithms that operate on different STL containers, customized data structures (Span) that analyze the distance between number sequences, and an implementation of 'MutantStack' that adds iterator capabilities to the default stack structure are successfully realized. The project addresses critical topics such as iterator categories, modification of container adaptors, and efficient use of STL algorithms. Prepared within C++98 standards, this module provides proficiency in effectively managing modern C++ library components and optimizing complex data structures with generic programming principles.",
    "42-Kocaeli-Cpp-9":
      "This project focuses on the advanced use of C++ Standard Template Library (STL) containers and the performance-oriented implementation of complex algorithms. A stock exchange simulation (Bitcoin Exchange) that processes historical Bitcoin data for fast querying, a stack-based mathematical expression calculator (RPN), and one of the theoretically most efficient comparison-based sorting methods, the Ford-Johnson algorithm (PmergeMe), are successfully developed. The project includes comparative performance analyses of data structures such as map, stack, vector, and deque, with memory management and processing time optimizations measured with microsecond precision. Prepared within C++98 standards, this module offers in-depth experience in handling large data sets and analyzing algorithmic complexity.",

    // 42-Kocaeli-Advanced-Projects
    "42-Kocaeli-Libasm":
      "This project is an advanced exercise in which fundamental C library functions (libc) and system calls are reimplemented using x86_64 Assembly (NASM) language. It provides a deep understanding of System V AMD64 ABI calling conventions, register management, and system calls that interact directly with the kernel. Additionally, it successfully performs complex operations such as dynamic memory management at the Assembly level and linked list manipulation. This work is a comprehensive example that demonstrates low-level programming principles and the mechanism of software operation at the hardware layer.",
    "42-Kocaeli-Turing":
      "This project is a simulator developed using JavaScript and Deno to simulate Turing machines, the theoretical computational model proposed by Alan Turing. The project transforms advanced computer science concepts such as computational theory, automata theory, and state machine design into a practical application. By reading JSON-based machine definitions, it successfully executes infinite tape simulation, step-by-step execution history, and comprehensive input validation mechanisms. This work is a professional tool that demonstrates how complex algorithmic problems can be solved at the most fundamental level of computation.",
    "42-Kocaeli-Malloc":
      "This project is an advanced system programming exercise in which standard memory management functions (malloc, free, realloc) in the C programming language are reimplemented at the kernel level. The project is built on a zone-based architecture (TINY, SMALL, LARGE) that minimizes fragmentation and manages memory directly through the mmap system call with the operating system. With its thread-safe structure, it offers secure operation in multi-threaded environments, while including advanced debug features such as 'scribbling' that visualize memory state and facilitate debugging. This work demonstrates deep technical proficiency in virtual memory management and low-level resource optimization.",
    "42-Kocaeli-Avaj_Launcher":
      "This project is a weather simulation application developed using the Java programming language, focusing on object-oriented programming (OOP) principles and design patterns. The project successfully applies Observer, Factory, and Singleton design patterns to simulate the movements of aircraft (Balloon, Helicopter, Jet) according to variable weather conditions. By processing scenario-based input files that manage coordinate calculations, altitude management, and automatic landing mechanisms, this work comprehensively demonstrates Java's capabilities in inheritance, interfaces, and abstraction. This application is a powerful example of how complex systems can be modeled with a modular and extensible architecture.",
    "42-Kocaeli-Hangouts":
      "This project is a comprehensive SMS messaging and contact management application developed for the Android platform using the Flutter framework. The application successfully combines Flutter's modern interface capabilities with native Android (Kotlin) code through Method Channel and Event Channel, offering features such as real-time SMS reception, notification management, and local data storage based on SQLite. Designed with multilingual support (Turkish/English), customizable theme options, and advanced user experience principles, this work demonstrates proficiency in hybrid mobile application development and cross-platform integration. This project is a professional example of how modern mobile technologies can work harmoniously with native system features.",
    "42-Kocaeli-Matrix":
      "This project is a technical library that brings to life the concepts of linear algebra, which form the basis of machine learning and data science studies, with C++ language and advanced template programming techniques. Covering a wide spectrum of mathematical operations on vector and matrix structures, from basic arithmetic operations to linear combinations, norm calculations, Gaussian elimination for matrix inversion and rank finding, it is designed with operator overloading and generic programming principles. This work demonstrates how mathematical theories can be optimized with software engineering discipline. This library is a professional example that provides a performant and type-safe infrastructure for solving complex computational problems.",
    "42-Kocaeli-Ping":
      "This project is a network programming application that sends low-level packets to network hosts using the ICMP (Internet Control Message Protocol) protocol. Developed using C language and 'Raw Socket' technology, the application performs critical network operations such as DNS resolution, packet manipulation, asynchronous signal management, and RTT (Round Trip Time) measurement with millisecond precision. Designed to be compatible with the GNU ping tool, the project includes complex network protocol details such as packet loss analysis, checksum verification, and handling various ICMP error types (Destination Unreachable, Time Exceeded, etc.). This work is a professional example that demonstrates the development process of high-performance network tools that communicate directly with the operating system kernel.",
    "42-Kocaeli-ComputorV1":
      "This project is a C++ application that parses and solves complex polynomial equations, focusing on mathematical algorithm design and numerical analysis. The program analyzes first and second-degree equations (ax² + bx + c = 0) based on their coefficients, calculates the discriminant value, and finds both real and complex (imaginary) roots with precision. It includes low-level mathematical implementations such as a square root function developed with the Newton-Raphson method and fraction simplification using the Euclid algorithm without relying on the standard library. This work demonstrates proficiency in parsing complex data and reliably implementing theoretical mathematical formulas in a software environment.",
  },
};

const getManualProjects = (lang) => [
  {
    name: "Bakar Mısınız",
    description:
      lang === "tr"
        ? "Flutter ve Node.js ile geliştirilmiş restoran sipariş uygulaması. Bu proje bir üniversite bitirme projesidir; gizlilik gereği içeriği ve kaynak kodları saklı tutulmaktadır."
        : "A restaurant ordering application developed with Flutter and Node.js. This is a university graduation project; due to confidentiality, its content and source codes are kept private.",
    isManual: true,
    url: "#",
  },
  {
    name: "Docwatch",
    description:
      lang === "tr"
        ? "Flutter ve Django ile oluşturulmuş sağlık yönetim platformu. Bu proje bir üniversite bitirme projesidir; gizlilik gereği içeriği ve kaynak kodları saklı tutulmaktadır."
        : "A health management platform created with Flutter and Django. This is a university graduation project; due to confidentiality, its content and source codes are kept private.",
    isManual: true,
    url: "#",
  },
  {
    name: "Kuyumculuk",
    description:
      lang === "tr"
        ? "Flutter ve Firebase ile geliştirilmiş; anlık altın fiyat takibi, bilezik sipariş yönetimi, havale/transfer yönetimi, IBAN için OCR (optik karakter tanıma) tarama, QR kod oluşturma, Excel/PDF raporlama ve çoklu rol tabanlı kullanıcı yetkilendirme sistemine sahip kapsamlı bir kuyumculuk işletme yönetim uygulaması; şu an aktif olarak kullanılmaktadır ancak halka açık paylaşılmamaktadır."
        : "A comprehensive jewelry business management application developed with Flutter and Firebase, featuring real-time gold price tracking, bracelet order management, transfer management, OCR (optical character recognition) scanning for IBAN, QR code generation, Excel/PDF reporting, and a multi-role based user authorization system; it is currently actively used but not publicly shared.",
    isManual: true,
    url: "#",
  },
  {
    name: "Pratik Servis",
    description:
      lang === "tr"
        ? "Konum tabanlı mimarisiyle ısıtma ve teknik servis ihtiyaçlarına çözüm sunan, Flutter ile geliştirilmiş; harita entegrasyonu ve gelişmiş talep yönetim sistemine sahip dinamik bir on-demand mobil uygulamasıdır. Ortak bir backend mimarisi üzerinden hem web hem de mobil platformlarda hizmet veren projenin mobil frontend geliştirme sürecini üstlendim. Uygulamanın aktif kullanımı devam etmekte olup, kullanıcı deneyimini iyileştirmeye yönelik yeni özellikler eklemeye ve geliştirmeler yapmaya hala devam etmekteyim."
        : "A dynamic on-demand mobile application developed with Flutter, providing solutions for heating and technical service needs with its location-based architecture; featuring map integration and an advanced demand management system. I undertook the mobile frontend development process for this project, which serves both web and mobile platforms via a common backend architecture. The application is in active use, and I continue to add new features and improvements to enhance the user experience.",
    isManual: true,
    url: "https://play.google.com/store/apps/details?id=com.f2r.servishane&hl=uz",
    customLabel: translations[lang]["visit-app"],
  },
];

let currentLang = localStorage.getItem("lang") || "en";

function getDescription(desc, lang) {
  if (!desc || typeof desc !== "string") return "";
  const separator = desc.includes("|") ? "|" : null;

  if (separator) {
    const parts = desc.split(separator);
    if (parts.length >= 2) {
      return lang === "en" ? parts[0].trim() : parts[1].trim();
    }
  }
  return desc;
}

function updateLanguageUI() {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (translations[currentLang][key]) {
      if (el.tagName === "P" && translations[currentLang][key].includes("**")) {
        el.innerHTML = translations[currentLang][key].replace(
          /\*\*(.*?)\*\*/g,
          "<strong>$1</strong>",
        );
      } else {
        el.textContent = translations[currentLang][key];
      }
    }
  });

  document.getElementById("lang-text").textContent =
    currentLang === "en" ? "TR" : "EN";
  document.documentElement.lang = currentLang;
}

function toggleLanguage() {
  currentLang = currentLang === "en" ? "tr" : "en";
  localStorage.setItem("lang", currentLang);
  updateLanguageUI();

  const modal = document.getElementById("projectModal");
  if (modal.classList.contains("active")) {
    const title = modal.querySelector("h2").textContent;
    const index = projects.findIndex((p) => p.name === title);
    if (index !== -1) showDetails(index);
  }

  loadRepos();
}

async function loadRepos() {
  const container = document.getElementById("repo-list");
  container.innerHTML = `<div class="col-span-full text-center py-20 text-gray-500 animate-pulse font-mono text-xs">${translations[currentLang]["loading"]}</div>`;

  let githubProjects = [];
  try {
    const res = await fetch(
      `https://api.github.com/users/${username}/repos?sort=updated&per_page=100`,
    );
    githubProjects = await res.json();
    if (!Array.isArray(githubProjects)) githubProjects = [];
  } catch (e) {
    console.error("GitHub API error:", e);
  }

  projects = [...githubProjects, ...getManualProjects(currentLang)];

  const hideFromGrid = [
    "enes2424",
    "enes2424.github.io",
    "42-kocaeli-cpp-modules",
    "42-kocaeli-unity-piscine",
    "42-kocaeli-django-piscine",
    "42-kocaeli-ocaml-piscine",
    "42-kocaeli-mobile-piscine",
  ];

  const displayProjects = projects.filter((repo) => {
    if (repo.isManual) return true;
    if (repo.fork) return false;
    return !hideFromGrid.includes(repo.name.toLowerCase());
  });

  if (displayProjects.length === 0 && githubProjects.length === 0) {
    container.innerHTML = translations[currentLang]["error"];
    return;
  }

  container.innerHTML = displayProjects
    .map((repo) => {
      const realIndex = projects.indexOf(repo);
      const clickAction = repo.isManual
        ? repo.url !== "#"
          ? `window.open('${repo.url}', '_blank')`
          : "return"
        : `showDetails(${realIndex})`;

      return `
                        <div class="desc-box p-6 flex flex-col justify-between group cursor-pointer" onclick="${clickAction}">
                            <div class="space-y-4">
                                <h3 class="text-lg font-bold text-[#58a6ff] group-hover:text-white transition truncate">${repo.name}</h3>
                                <p class="text-sm text-vibrant leading-relaxed mt-2">
                                    ${getDescription(repo.description, currentLang) || (currentLang === "tr" ? "Proje detaylarını inceleyebilirsiniz." : "You can check project details.")}
                                </p>
                            </div>
                            ${
                              repo.isManual && repo.url === "#"
                                ? ""
                                : `
                                <div class="mt-4 pt-4 border-t border-[#30363d] flex justify-end">
                                    <span class="gh-link-icon opacity-0 group-hover:opacity-100 transition-all text-xs">
                                        ${repo.customLabel || translations[currentLang]["inspect-label"]}
                                    </span>
                                </div>`
                            }
                        </div>`;
    })
    .join("");
}

async function showDetails(index) {
  const repo = projects[index];
  const modal = document.getElementById("projectModal");
  const content = document.getElementById("modalContent");
  content.innerHTML = `<div class="text-center py-20 animate-pulse text-gray-600 text-xs font-mono uppercase">${translations[currentLang]["modal-loading"]}</div>`;
  modal.classList.add("active");
  document.body.style.overflow = "hidden";

  try {
    const res = await fetch(
      `https://api.github.com/repos/${username}/${repo.name}/branches`,
    );
    const branches = await res.json();

    const safeBranches = Array.isArray(branches) ? branches : [];
    safeBranches.sort((a, b) => a.name.localeCompare(b.name));

    let moduleItems = safeBranches
      .filter((b) => b.name !== "main" && b.name !== "master")
      .map((b) => {
        const cleanName = b.name.length > 2 ? b.name.slice(2) : b.name;
        const desc = branchDescriptions[currentLang][cleanName];
        return `
                        <a href="https://github.com/${username}/${repo.name}/tree/${b.name}" target="_blank"
                            class="flex items-center justify-between p-4 desc-box hover:border-[#58a6ff] transition-all group">
                            <span class="font-mono text-[13px] text-[#58a6ff] font-bold tracking-tight">* ${cleanName}</span>
                            <span class="text-[12px] text-vibrant ml-4 text-left flex-1 italic whitespace-normal">${desc || translations[currentLang]["view-code"]}</span>
                            <span class="gh-link-icon ml-2">↗</span>
                        </a>`;
      })
      .join("");

    let extraRepoItems = "";
    const mapping = {
      "42-kocaeli-common-core": ["42-kocaeli-cpp-modules"],
      "42-kocaeli-advanced-projects": [
        "42-kocaeli-mobile-piscine",
        "42-kocaeli-ocaml-piscine",
        "42-kocaeli-django-piscine",
        "42-kocaeli-unity-piscine",
      ],
    };

    const targetKey = repo.name.toLowerCase();
    if (mapping[targetKey]) {
      mapping[targetKey].forEach((subRepoName) => {
        const subRepo = projects.find(
          (p) => p.name.toLowerCase() === subRepoName.toLowerCase(),
        );
        if (subRepo) {
          extraRepoItems += `
                            <div onclick="showDetails(${projects.indexOf(subRepo)})"
                                class="flex items-center justify-between p-4 desc-box hover:border-[#58a6ff] cursor-pointer transition-all group">
                                <span class="font-mono text-[13px] text-[#58a6ff] font-bold">* ${subRepo.name}</span>
                                <span class="text-[12px] text-vibrant ml-4 text-left flex-1 italic">
                                    ${getDescription(subRepo.description, currentLang) || (currentLang === "tr" ? "Alt proje detayı" : "Subproject detail")}
                                </span>
                                <span class="gh-link-icon ml-2">↗</span>
                            </div>`;
        }
      });
    }
    content.innerHTML = `
                    <div class="border-b border-[#30363d] pb-6 mb-6">
                        <h2 class="text-3xl font-bold text-white tracking-tight">${repo.name}</h2>
                        <p class="text-vibrant text-sm mt-4 leading-relaxed">${getDescription(repo.description, currentLang) || translations[currentLang]["modal-default-desc"]}</p>
                    </div>
                    <div class="space-y-6 max-h-[450px] overflow-y-auto pr-3 custom-scrollbar">
                        ${moduleItems ? `<div><h4 class="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-3">${translations[currentLang]["modal-projects-title"]}</h4><div class="grid gap-2">${moduleItems}</div></div>` : ""}
                        ${extraRepoItems ? `<div class="pt-4 border-t border-[#30363d]/30"><h4 class="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-3">${translations[currentLang]["modal-subprojects-title"]}</h4><div class="grid gap-2">${extraRepoItems}</div></div>` : ""}
                    </div>
                    <div class="flex gap-4 pt-6 border-t border-[#30363d] mt-6">
                        <a href="${repo.html_url}" target="_blank" class="flex-1 text-center bg-[#238636] text-white py-3 rounded-lg font-bold hover:bg-[#2ea043] transition text-sm">${translations[currentLang]["modal-repo-home"]}</a>
                        <button onclick="closeModal('projectModal')" class="px-8 border border-[#30363d] text-gray-400 py-3 rounded-lg font-bold hover:bg-[#30363d] transition text-sm">${translations[currentLang]["modal-close"]}</button>
                    </div>`;
  } catch (e) {
    content.innerHTML = translations[currentLang]["error"];
  }
}

function closeModal(id) {
  document.getElementById(id).classList.remove("active");
  document.body.style.overflow = "auto";
}

document.addEventListener("DOMContentLoaded", () => {
  updateLanguageUI();
  loadRepos();
});
