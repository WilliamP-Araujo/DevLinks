const texts = {
  en: {
    username: "@Uwill.png",
    linkedin: "See my LinkedIn",
    projectCode: "Code of this project",
    community: "Meet my community",
    pythonProjects: "See my Python projects!",
    footer: "Made with ♥ by William P.",
  },
  pt: {
    username: "@Uwill.png",
    linkedin: "Veja meu LinkedIn",
    projectCode: "Código deste projeto",
    community: "Conheça minha comunidade",
    pythonProjects: "Veja meus projetos em Python!",
    footer: "Feito com ♥ por William P.",
  },
};

function changeLanguage() {
  const selectedLanguage = document.getElementById("languageSelector").value;
  document.getElementById("username").innerText =
    texts[selectedLanguage].username;
  document.getElementById("linkedin").innerText =
    texts[selectedLanguage].linkedin;
  document.getElementById("projectCode").innerText =
    texts[selectedLanguage].projectCode;
  document.getElementById("community").innerText =
    texts[selectedLanguage].community;
  document.getElementById("pythonProjects").innerText =
    texts[selectedLanguage].pythonProjects;
  document.getElementById("footer").innerText = texts[selectedLanguage].footer;
}

function toggleMode() {
  const html = document.documentElement;
  html.classList.toggle("light");
}

function contato() {
  const email = document.getElementById("email").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;

  const fullMessage = {
    email,
    subject,
    message,
  };

  downloadJSON(fullMessage, "fullMessage.json");
}

function downloadJSON(jsonData, filename) {
  const blob = new Blob([JSON.stringify(jsonData)], {
    type: "application/json",
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;

  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);

  URL.revokeObjectURL(url);
}
