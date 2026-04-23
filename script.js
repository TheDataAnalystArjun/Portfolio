const skillData = {
  SQL: {
    text: "CTEs, window functions, cohort analysis, trend analysis, segmentation, and business insight generation.",
    bars: [
      ["Querying", "92%"],
      ["Dashboards", "84%"],
      ["Modeling", "78%"],
      ["Storytelling", "88%"]
    ]
  },
  Python: {
    text: "Pandas, NumPy, Scikit-learn, cleaning pipelines, feature engineering, regression, and classification workflows.",
    bars: [
      ["Cleaning", "88%"],
      ["EDA", "86%"],
      ["ML", "76%"],
      ["Business Metrics", "84%"]
    ]
  },
  BI: {
    text: "Power BI, Tableau, Looker Studio, Excel, Google Sheets, and automated KPI reporting for stakeholders.",
    bars: [
      ["Power BI", "84%"],
      ["Looker Studio", "88%"],
      ["Excel", "90%"],
      ["Automation", "82%"]
    ]
  },
  Analytics: {
    text: "Customer segmentation, RFM, CLV, churn and retention analysis, anomaly detection, fraud detection, and A/B testing.",
    bars: [
      ["Segmentation", "88%"],
      ["Retention", "82%"],
      ["Fraud Detection", "78%"],
      ["KPI Design", "86%"]
    ]
  }
};

const buttons = document.querySelectorAll(".skill");
const title = document.getElementById("skillTitle");
const text = document.getElementById("skillText");
const chart = document.querySelector(".bar-chart");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const skill = button.dataset.skill;
    const data = skillData[skill];
    buttons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    title.textContent = skill;
    text.textContent = data.text;
    chart.innerHTML = data.bars
      .map(([label, value]) => `<span style="--value: ${value}"><b>${label}</b></span>`)
      .join("");
  });
});

const chatPanel = document.getElementById("chatPanel");
const openChat = document.getElementById("openChat");
const closeChat = document.getElementById("closeChat");
const chatForm = document.getElementById("chatForm");
const chatInput = document.getElementById("chatInput");
const chatLog = document.getElementById("chatLog");
const copyEmail = document.getElementById("copyEmail");

const answers = [
  {
    keys: ["sql", "query", "cte", "window"],
    answer: "Arjun uses SQL for commercial card spend analysis, CTEs, window functions, segmentation, trend analysis, and business reporting. His SQL project identifies spend patterns, high-value customers, engagement drop-offs, cross-sell, retention, and optimization opportunities."
  },
  {
    keys: ["python", "machine", "model", "fraud", "clv"],
    answer: "Arjun uses Python with Pandas, NumPy, Scikit-learn, Matplotlib, Seaborn, and NLTK. His projects include Sales EDA, fraud detection, movie review sentiment classification, and spam mail classification."
  },
  {
    keys: ["dashboard", "power bi", "tableau", "looker", "excel"],
    answer: "Arjun has dashboarding experience across Power BI, Tableau, Looker Studio, Excel, and Google Sheets. His GitHub includes an HR Analytics Power BI dashboard, and his work experience includes reporting automation that reduced manual effort by 33%."
  },
  {
    keys: ["project", "portfolio", "github", "case study"],
    answer: "Arjun's portfolio projects include Commercial Card Spend and Engagement Analysis, Sales EDA, HR Analytics Dashboard, Car Insurance Fraud Detection, Movie Reviews Sentiment Classification, and Spam Mail Classification."
  },
  {
    keys: ["job", "role", "fit", "hire"],
    answer: "Arjun is best aligned to Data Analyst, Junior Data Analyst, Business Analyst, Reporting Analyst, MIS Analyst, and Product Analyst roles with SQL, dashboards, KPI tracking, and stakeholder communication."
  }
];

function addMessage(who, message) {
  const p = document.createElement("p");
  p.innerHTML = `<strong>${who}:</strong> ${message}`;
  chatLog.appendChild(p);
  chatLog.scrollTop = chatLog.scrollHeight;
}

function answerFor(question) {
  const q = question.toLowerCase();
  const hit = answers.find((item) => item.keys.some((key) => q.includes(key)));
  if (hit) return hit.answer;
  return "Arjun is an entry-level Data Analyst with practical SQL, Python, dashboarding, KPI tracking, reporting automation, and stakeholder communication experience. Ask about SQL, Python, dashboards, projects, or target roles.";
}

openChat.addEventListener("click", () => {
  chatPanel.classList.add("open");
  chatPanel.setAttribute("aria-hidden", "false");
  chatInput.focus();
});

closeChat.addEventListener("click", () => {
  chatPanel.classList.remove("open");
  chatPanel.setAttribute("aria-hidden", "true");
});

chatForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const question = chatInput.value.trim();
  if (!question) return;
  addMessage("You", question);
  addMessage("Assistant", answerFor(question));
  chatInput.value = "";
});

copyEmail?.addEventListener("click", async () => {
  const email = "rathodarjun878@gmail.com";
  try {
    await navigator.clipboard.writeText(email);
    copyEmail.textContent = "Email Copied";
  } catch {
    window.prompt("Copy this email address:", email);
  }
  window.setTimeout(() => {
    copyEmail.textContent = "Copy Email";
  }, 1800);
});
