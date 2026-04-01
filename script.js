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
    "00": "C++ Temelleri, Sınıf Yapıları ve Veri Tipleri",
    "01": "Bellek Yönetimi, Pointerlar ve Referanslar",
    "02": "Ad-hoc Polimorfizm, Operatör Aşırı Yükleme",
    "03": "Kalıtım (Inheritance) ve Sınıf Hiyerarşileri",
    "04": "Subtype Polimorfizm, Abstract Sınıflar ve Interface",
    "42-Kocaeli-Minishell": "Bash benzeri terminal simülasyonu",
    printf: "Özelleştirilmiş printf fonksiyonu geliştirme",
    get_next_line: "Dosya okuma ve satır işleme kütüphanesi",
  },
  en: {
    "00": "C++ Basics, Class Structures and Data Types",
    "01": "Memory Management, Pointers and References",
    "02": "Ad-hoc Polymorphism, Operator Overloading",
    "03": "Inheritance and Class Hierarchies",
    "04": "Subtype Polymorphism, Abstract Classes and Interfaces",
    "42-Kocaeli-Minishell": "Bash-like terminal simulation",
    printf: "Developing a custom printf function",
    get_next_line: "File reading and line processing library",
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

function getDescription(repo, lang) {
  if (!repo.description) return "";
  const parts = repo.description.split("/");
  if (parts.length >= 2) {
    return lang === "en" ? parts[0].trim() : parts[1].trim();
  }
  return repo.description;
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
  loadRepos();
}

async function loadRepos() {
  const container = document.getElementById("repo-list");
  container.innerHTML = `<div class="col-span-full text-center py-20 text-gray-500 animate-pulse font-mono text-xs">${translations[currentLang]["loading"]}</div>`;

  try {
    const res = await fetch(
      `https://api.github.com/users/${username}/repos?sort=updated&per_page=100`,
    );
    const githubProjects = await res.json();

    const hideFromGrid = [
      "enes2424",
      "enes2424.github.io",
      "42-kocaeli-cpp-modules",
      "42-kocaeli-unity-piscine",
      "42-kocaeli-django-piscine",
      "42-kocaeli-ocaml-piscine",
      "42-kocaeli-mobile-piscine",
    ];

    projects = [...githubProjects, ...getManualProjects(currentLang)];

    const displayProjects = projects.filter((repo) => {
      if (repo.isManual) return true;
      if (repo.fork) return false;
      return !hideFromGrid.includes(repo.name.toLowerCase());
    });

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
                                    ${getDescription(repo, currentLang) || (currentLang === "tr" ? "Proje detaylarını inceleyebilirsiniz." : "You can check project details.")}
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
  } catch (e) {
    container.innerHTML = translations[currentLang]["error"];
  }
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
        "42-kocaeli-unity-piscine",
        "42-kocaeli-django-piscine",
        "42-kocaeli-ocaml-piscine",
        "42-kocaeli-mobile-piscine",
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
                                    ${getDescription(subRepo, currentLang) || (currentLang === "tr" ? "Alt proje detayı" : "Subproject detail")}
                                </span>
                                <span class="gh-link-icon ml-2">↗</span>
                            </div>`;
        }
      });
    }
    content.innerHTML = `
                    <div class="border-b border-[#30363d] pb-6 mb-6">
                        <h2 class="text-3xl font-bold text-white tracking-tight">${repo.name}</h2>
                        <p class="text-vibrant text-sm mt-4 leading-relaxed">${getDescription(repo, currentLang) || translations[currentLang]["modal-default-desc"]}</p>
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
