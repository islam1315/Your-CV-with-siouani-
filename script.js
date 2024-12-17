// ترجمة النصوص حسب اللغة
const translations = {
    ar: {
        name: "الاسم الكامل:",
        email: "البريد الإلكتروني:",
        phone: "رقم الهاتف:",
        address: "العنوان:",
        education: "التعليم:",
        experience: "الخبرات العملية:",
        skills: "المهارات:",
        languages: "اللغات:",
        projects: "المشاريع:"
    },
    fr: {
        name: "Nom complet:",
        email: "Email:",
        phone: "Numéro de téléphone:",
        address: "Adresse:",
        education: "Éducation:",
        experience: "Expériences professionnelles:",
        skills: "Compétences:",
        languages: "Langues:",
        projects: "Projets:"
    },
    en: {
        name: "Full Name:",
        email: "Email:",
        phone: "Phone Number:",
        address: "Address:",
        education: "Education:",
        experience: "Work Experience:",
        skills: "Skills:",
        languages: "Languages:",
        projects: "Projects:"
    }
};

// تحديث الحقول حسب اللغة
function updateLabels() {
    const language = document.getElementById("language").value;
    const labels = translations[language];

    document.getElementById("nameLabel").textContent = labels.name;
    document.getElementById("emailLabel").textContent = labels.email;
    document.getElementById("phoneLabel").textContent = labels.phone;
    document.getElementById("addressLabel").textContent = labels.address;
    document.getElementById("educationLabel").textContent = labels.education;
    document.getElementById("experienceLabel").textContent = labels.experience;
    document.getElementById("skillsLabel").textContent = labels.skills;
    document.getElementById("languagesLabel").textContent = labels.languages;
    document.getElementById("projectsLabel").textContent = labels.projects;
}

// تغيير الخلفية حسب الجنس
function updateBackground() {
    const gender = document.getElementById("gender").value;
    if (gender === "male") {
        document.body.style.background = "linear-gradient(135deg, #000000, #004080)";
    } else if (gender === "female") {
        document.body.style.background = "linear-gradient(135deg, #000000, #ff0066)";
    }
}

// توليد السيرة الذاتية
function generateCV() {
    const language = document.getElementById("language").value;
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const address = document.getElementById("address").value;
    const education = document.getElementById("education").value;
    const experience = document.getElementById("experience").value;
    const skills = document.getElementById("skills").value;
    const languages = document.getElementById("languages").value;
    const projects = document.getElementById("projects").value;

    const cvOutput = document.getElementById("cvOutput");
    let cvContent = `
        <h2>${language === "ar" ? "السيرة الذاتية" : language === "fr" ? "Curriculum Vitae" : "Resume"}</h2>
        <div class="cv-section">
            <p><strong>${translations[language].name}</strong> ${name}</p>
            <p><strong>${translations[language].email}</strong> ${email}</p>
            <p><strong>${translations[language].phone}</strong> ${phone}</p>
            <p><strong>${translations[language].address}</strong> ${address}</p>
        </div>
        <div class="cv-section">
            <h3>${translations[language].education}</h3>
            <p>${education}</p>
        </div>
        <div class="cv-section">
            <h3>${translations[language].experience}</h3>
            <p>${experience}</p>
        </div>
        <div class="cv-section">
            <h3>${translations[language].skills}</h3>
            <p>${skills}</p>
        </div>
        <div class="cv-section">
            <h3>${translations[language].languages}</h3>
            <p>${languages}</p>
        </div>
        <div class="cv-section">
            <h3>${translations[language].projects}</h3>
            <p>${projects}</p>
        </div>
    `;
    cvOutput.innerHTML = cvContent;
}

// طباعة السيرة الذاتية
function printCV() {
    const printContent = document.getElementById("cvOutput").innerHTML;
    const originalContent = document.body.innerHTML;

    document.body.innerHTML = printContent;
    window.print();
    document.body.innerHTML = originalContent;
}