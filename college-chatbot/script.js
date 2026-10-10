const chat = document.getElementById("chat");
const form = document.getElementById("chat-form");
const input = document.getElementById("user-input");

function getResponse(rawInput) {
  const message = rawInput.toLowerCase().trim();

  if (!message) return "Please type a question so I can help.";
  if (/\b(hello|hi|hey)\b/.test(message)) {
    return "Hello! Welcome to the College Helpdesk Chatbot. How can I help you?";
  } else if (message.includes("admission") || message.includes("apply")) {
    return "For admission information, check the college's official website or contact the admission office. Keep your marksheets, ID proof, and required documents ready.";
  } else if (message.includes("fee") || message.includes("fees") || message.includes("payment")) {
    return "For the latest fee structure and payment deadlines, contact the accounts office or check the official student portal.";
  } else if (message.includes("library") || message.includes("book")) {
    return "The library provides books and study resources. Please check the library notice board or ask the librarian for current opening hours and borrowing rules.";
  } else if (message.includes("exam") || message.includes("timetable") || message.includes("schedule")) {
    return "Please check the official examination notice or student portal for the latest timetable, exam dates, and instructions.";
  } else if (message.includes("result") || message.includes("marks") || message.includes("grade")) {
    return "Results and marks are usually published through the official student portal. Use your authorized login details to check them.";
  } else if (message.includes("course") || message.includes("subject") || message.includes("syllabus")) {
    return "For course details and the latest syllabus, consult your department or the official academic notice/portal.";
  } else if (message.includes("scholarship") || message.includes("financial aid")) {
    return "Ask the student section about available scholarships, eligibility criteria, required documents, and application deadlines.";
  } else if (message.includes("contact") || message.includes("phone") || message.includes("email")) {
    return "Please use the contact details listed on the college's official website. I don't have verified current phone numbers or email addresses.";
  } else if (message.includes("thank")) {
    return "You're welcome! Best wishes for your studies.";
  } else if (/\b(bye|exit|quit)\b/.test(message)) {
    return "Goodbye! Have a great day.";
  }
  return "Sorry, I don't have an answer for that question yet. Try asking about admissions, fees, library, exams, results, courses, scholarships, or contact details.";
}

function addMessage(text, sender) {
  const row = document.createElement("div");
  row.className = `message ${sender}`;
  const bubble = document.createElement("div");
  bubble.className = "bubble";
  bubble.textContent = text;
  row.appendChild(bubble);
  chat.appendChild(row);
  chat.scrollTop = chat.scrollHeight;
}

function sendMessage(text) {
  const trimmed = text.trim();
  if (!trimmed) return;
  addMessage(trimmed, "user");
  addMessage(getResponse(trimmed), "bot");
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  sendMessage(input.value);
  input.value = "";
  input.focus();
});

document.querySelectorAll("[data-question]").forEach((button) => {
  button.addEventListener("click", () => sendMessage(button.dataset.question));
});
