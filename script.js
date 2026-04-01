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
      'Bu C++ projesi, Raylib kütüphanesi kullanılarak geliştirilmiş, "Hareket Et ve Kaldır" mekaniğine dayalı bir strateji oyunudur. Proje, rakibin hareket alanını kısıtlama hedefine odaklanan ve 7 hamle ilerisini hesaplayabilen gelişmiş bir Minimax yapay zekasına sahiptir. Oyunun temel amacı, rakibin tüm geçerli hamlelerini engelleyerek onu sıkıştırmak ve yapay zekanın stratejik derinliğini sergilemektir. Bu proje, oyun teorisi ve yapay zeka algoritmalarının etkileşimli bir ortamda nasıl birleştirilebileceğini göstermektedir.',

    
    // 42-Kocaeli-Common-Core
    "42-Kocaeli-Minishell": "Bash benzeri terminal simülasyonu",
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
      'This C++ project is a strategy game based on the "Move and Remove" mechanic, developed using the Raylib library. The project features an advanced Minimax artificial intelligence that can calculate 7 moves ahead, focusing on the objective of restricting the opponent\'s movement. The primary goal of the game is to trap the opponent by blocking all their valid moves, showcasing the strategic depth of the AI. This project demonstrates how game theory and artificial intelligence algorithms can be combined in an interactive environment.',

    // 42-Kocaeli-Common-Core
    "42-Kocaeli-Minishell": "Bash-like terminal simulation",
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
