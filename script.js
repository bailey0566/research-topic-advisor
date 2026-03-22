// Comprehensive list of common educational problems organized by category
const problemCategories = {
  "Classroom Management & Behavior": [
    "Students are frequently off-task during independent work time",
    "Transition periods take too long and disrupt learning",
    "Students struggle with emotional regulation and outbursts",
    "Inconsistent behavior from certain students affects whole-class dynamics",
    "Classroom noise levels make instruction difficult"
  ],
  "Student Engagement & Motivation": [
    "Students show low intrinsic motivation for assigned tasks",
    "Attendance and participation rates are declining",
    "Students disengage when material feels irrelevant to their lives",
    "Passive note-taking replaces active learning",
    "Students resist collaborative work and prefer working alone"
  ],
  "Assessment & Evaluation": [
    "Students perform poorly on standardized tests despite classroom success",
    "Large achievement gaps between student subgroups",
    "Grading practices don't accurately reflect learning",
    "Students receive little meaningful feedback on their work",
    "Assessment data isn't being used to adjust instruction"
  ],
  "Technology Integration": [
    "Technology access is unequal across different student populations",
    "Teachers lack confidence or skills using educational technology",
    "Students are distracted by technology rather than engaged",
    "Implementing blended learning reduces student-teacher interaction",
    "Online platforms are difficult for struggling readers to navigate"
  ],
  "Teacher Collaboration & Development": [
    "Teachers work in isolation without meaningful collaboration time",
    "Professional development doesn't align with classroom needs",
    "Mentoring relationships are ineffective or unsupported",
    "Turnover rates for new teachers are high",
    "Teachers resist implementing data-driven practices"
  ],
  "Equity & Inclusion": [
    "English language learners are not receiving adequate support",
    "Students with disabilities are excluded from general education activities",
    "Racial disparities exist in discipline and academic placement",
    "Low-income students lack access to enrichment opportunities",
    "Curriculum lacks representation of diverse cultures and perspectives"
  ],
  "Parent & Family Engagement": [
    "Parents are not attending school events or conferences",
    "Cultural and language barriers limit family involvement",
    "School communication is one-way rather than collaborative",
    "Families from certain backgrounds feel unwelcome at school",
    "Parents lack understanding of academic standards and expectations"
  ],
  "Curriculum & Instruction": [
    "Curriculum is not aligned with state standards or learning outcomes",
    "Teachers spend too much time on standardized test prep",
    "Critical thinking skills are not being developed",
    "Instruction is not differentiated for diverse learners",
    "Modern skills (collaboration, creativity) are not being taught"
  ],
  "School Leadership & Administration": [
    "School climate and culture are negative or toxic",
    "Decision-making lacks input from stakeholders",
    "Resources are distributed inequitably across departments",
    "Staff morale is low and turnover is high",
    "School priorities are not clearly communicated"
  ],
  "Resource Management & Infrastructure": [
    "Insufficient funding impacts program quality and resources",
    "Physical space and facilities are inadequate",
    "Class sizes are too large for effective instruction",
    "Materials and supplies are outdated or insufficient",
    "School does not have adequate counseling or support services"
  ]
};

// Helper function to get all problems as a flat list
function getAllProblems() {
  const allProblems = [];
  Object.values(problemCategories).forEach(problems => {
    allProblems.push(...problems);
  });
  return allProblems;
}

// Comprehensive list of educational roles organized by category
const roleCategories = {
  "Classroom & Direct Teaching": [
    "Classroom Teacher",
    "Tutor",
    "Writing Instructor",
    "School Librarian"
  ],
  "School Leadership": [
    "Principal / School Administrator",
    "Department Head",
    "School Counselor"
  ],
  "Instructional Support": [
    "Education Technology Coach",
    "Instructional Coach",
    "Student Success Coach",
    "Mentor"
  ],
  "Curriculum & Assessment": [
    "Curriculum Developer",
    "Assessment Specialist",
    "Assessment and Evaluation Director"
  ],
  "District & System Level": [
    "District Administrator",
    "Education Policy Advisor",
    "Professional Development Manager",
    "Research Coordinator"
  ],
  "Specialized Roles": [
    "Special Education Coordinator",
    "Online Learning Specialist",
    "Parent Engagement Coordinator"
  ]
};

// Global array to store multiple measurements
let measurements = [];

// Comprehensive topic list for master's level education
const topics = [
  // Education Technology
  { category: "Education Technology", name: "AI and Personalized Learning Systems" },
  { category: "Education Technology", name: "Learning Management System (LMS) Effectiveness" },
  { category: "Education Technology", name: "Digital Literacy and Information Fluency" },
  { category: "Education Technology", name: "Online Assessment and Proctoring" },
  { category: "Education Technology", name: "Gamification in Educational Settings" },
  { category: "Education Technology", name: "Virtual and Augmented Reality in Learning" },
  { category: "Education Technology", name: "Artificial Intelligence for Automated Grading" },
  { category: "Education Technology", name: "Cybersecurity and Student Data Privacy" },
  
  // Teaching Practice
  { category: "Teaching Practice", name: "Teacher Effectiveness and Student Outcomes" },
  { category: "Teaching Practice", name: "Classroom Management Strategies" },
  { category: "Teaching Practice", name: "Differentiated Instruction" },
  { category: "Teaching Practice", name: "Project-Based Learning Implementation" },
  { category: "Teaching Practice", name: "Flipped Classroom Models" },
  { category: "Teaching Practice", name: "Cooperative Learning and Peer Teaching" },
  { category: "Teaching Practice", name: "Formative Assessment Practices" },
  { category: "Teaching Practice", name: "Student Questioning and Critical Thinking" },
  
  // Assessment & Testing
  { category: "Assessment & Testing", name: "High-Stakes Testing Impact on Learning" },
  { category: "Assessment & Testing", name: "Test Anxiety and Student Performance" },
  { category: "Assessment & Testing", name: "Assessment for Learning vs. Assessment of Learning" },
  { category: "Assessment & Testing", name: "Performance-Based and Portfolio Assessment" },
  { category: "Assessment & Testing", name: "Bias in Standardized Testing" },
  { category: "Assessment & Testing", name: "Competency-Based Assessment Models" },
  
  // Mathematics Education
  { category: "Mathematics Education", name: "Mathematics Anxiety and Self-Efficacy" },
  { category: "Mathematics Education", name: "Concrete Manipulatives in Math Instruction" },
  { category: "Mathematics Education", name: "Problem-Solving Strategies and Transfer" },
  { category: "Mathematics Education", name: "Algebra Readiness and Transition" },
  { category: "Mathematics Education", name: "Conceptual vs. Procedural Understanding" },
  { category: "Mathematics Education", name: "Mathematics for English Learners" },
  
  // Early Childhood Education
  { category: "Early Childhood Education", name: "School Readiness Indicators" },
  { category: "Early Childhood Education", name: "Play-Based Learning in Preschool" },
  { category: "Early Childhood Education", name: "Socio-Emotional Development in Young Children" },
  { category: "Early Childhood Education", name: "Preschool to Kindergarten Transitions" },
  { category: "Early Childhood Education", name: "Language Development in Early Learners" },
  { category: "Early Childhood Education", name: "Attachment and Teacher-Child Relationships" },
  
  // Literacy & Language
  { category: "Literacy & Language", name: "Reading Comprehension Strategies" },
  { category: "Literacy & Language", name: "Phonological Awareness and Phonics" },
  { category: "Literacy & Language", name: "Multilingual Literacy Development" },
  { category: "Literacy & Language", name: "Dyslexia: Identification and Intervention" },
  { category: "Literacy & Language", name: "Culturally Responsive Reading Instruction" },
  { category: "Literacy & Language", name: "Writing Development and Composition" },
  { category: "Literacy & Language", name: "Literature Circles and Book Discussions" },
  
  // Special Education
  { category: "Special Education", name: "Inclusion and Mainstreaming Effectiveness" },
  { category: "Special Education", name: "Individualized Education Plans (IEPs)" },
  { category: "Special Education", name: "Assistive Technology for Special Needs" },
  { category: "Special Education", name: "Behavior Intervention Plans" },
  { category: "Special Education", name: "Universal Design for Learning (UDL)" },
  
  // Educational Leadership
  { category: "Educational Leadership", name: "Instructional Leadership and School Improvement" },
  { category: "Educational Leadership", name: "Teacher Retention and Burnout" },
  { category: "Educational Leadership", name: "Academic Leadership and Change Management" },
  { category: "Educational Leadership", name: "School Culture and Climate" },
  
  // Curriculum Design
  { category: "Curriculum Design", name: "Curriculum Standards and Implementation" },
  { category: "Curriculum Design", name: "Interdisciplinary and STEM Curriculum" },
  { category: "Curriculum Design", name: "Hidden Curriculum and Student Identity" },
  { category: "Curriculum Design", name: "Backward Design Principles" },
  
  // Teacher Development
  { category: "Teacher Development", name: "Professional Development and Teacher Growth" },
  { category: "Teacher Development", name: "Mentoring and Induction for New Teachers" },
  { category: "Teacher Development", name: "Teacher Self-Efficacy and Motivation" },
  { category: "Teacher Development", name: "Reflective Practice and Continuous Improvement" },
  
  // Social-Emotional Learning
  { category: "Social-Emotional Learning", name: "Social-Emotional Learning (SEL) Programs" },
  { category: "Social-Emotional Learning", name: "Emotional Regulation and Self-Control" },
  { category: "Social-Emotional Learning", name: "Bullying Prevention and Intervention" },
  { category: "Social-Emotional Learning", name: "Trauma-Informed Teaching Practices" },
  
  // Educational Equity
  { category: "Educational Equity", name: "Achievement Gap and Systemic Barriers" },
  { category: "Educational Equity", name: "Culturally Sustaining Pedagogy" },
  { category: "Educational Equity", name: "Addressing Racial Disparities in Education" },
  { category: "Educational Equity", name: "Gender and Educational Outcomes" },
  { category: "Educational Equity", name: "Socioeconomic Status and Educational Access" },
  
  // Student Engagement
  { category: "Student Engagement", name: "Student Motivation and Intrinsic Rewards" },
  { category: "Student Engagement", name: "Student Voice and Agency" },
  { category: "Student Engagement", name: "Classroom Participation and Engagement" },
  { category: "Student Engagement", name: "Student-Centered Learning Models" }
];

// Measurement functions
function addMeasurement() {
  const category = document.getElementById("measurementCategory").value;
  const plan = document.getElementById("measurementPlan").value.trim();
  
  if (!category) {
    alert("Please select a measurement category.");
    return;
  }
  
  if (!plan) {
    alert("Please describe how you would measure this.");
    return;
  }
  
  measurements.push({ category, plan });
  displayMeasurements();
  
  // Clear inputs
  document.getElementById("measurementCategory").value = "";
  document.getElementById("measurementPlan").value = "";
}

function displayMeasurements() {
  const container = document.getElementById("measurementsList");
  container.innerHTML = "";
  
  if (measurements.length === 0) {
    container.innerHTML = "<p style='color: #7f8c8d; font-style: italic;'>No measurements added yet.</p>";
    return;
  }
  
  measurements.forEach((measurement, index) => {
    const itemDiv = document.createElement("div");
    itemDiv.style.cssText = "display: flex; justify-content: space-between; align-items: center; padding: 8px; margin: 4px 0; background: #f8f9fa; border-radius: 4px; border: 1px solid #e9ecef;";
    
    const textDiv = document.createElement("div");
    textDiv.innerHTML = `<strong>${measurement.category}:</strong> ${measurement.plan}`;
    
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.style.cssText = "padding: 4px 8px; background: #e74c3c; color: white; border: none; border-radius: 3px; cursor: pointer; font-size: 12px;";
    removeBtn.onclick = () => removeMeasurement(index);
    
    itemDiv.appendChild(textDiv);
    itemDiv.appendChild(removeBtn);
    container.appendChild(itemDiv);
  });
}

function removeMeasurement(index) {
  measurements.splice(index, 1);
  displayMeasurements();
}

function showPage(num) {
  for (let i = 0; i <= 4; i++) {
    const page = document.getElementById("page" + i);
    if (page) {
      page.classList.add("hidden");
    }
  }
  document.getElementById("page" + num).classList.remove("hidden");
}

function renderRoles() {
  const container = document.getElementById("rolesList");
  container.innerHTML = "";
  
  Object.keys(roleCategories).forEach((category) => {
    const categoryDiv = document.createElement("div");
    categoryDiv.className = "role-category";
    
    const categoryTitle = document.createElement("h4");
    categoryTitle.className = "role-category-title";
    categoryTitle.textContent = category;
    categoryDiv.appendChild(categoryTitle);
    
    const rolesDiv = document.createElement("div");
    rolesDiv.className = "role-buttons-group";
    
    roleCategories[category].forEach((role) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "role-btn";
      btn.textContent = role;
      btn.onclick = () => selectRole(role);
      rolesDiv.appendChild(btn);
    });
    
    categoryDiv.appendChild(rolesDiv);
    container.appendChild(categoryDiv);
  });
}

function selectRole(roleName) {
  document.getElementById("selectedRole").textContent = roleName;
  document.getElementById("customRole").value = "";
}

function updateSelectedRole() {
  const customRole = document.getElementById("customRole").value.trim();
  if (customRole) {
    document.getElementById("selectedRole").textContent = customRole;
  }
}

function renderProblems(problemsToShow) {
  const container = document.getElementById("problemsList");
  container.innerHTML = "";
  
  if (problemsToShow.length === 0) {
    return;
  }
  
  problemsToShow.forEach((problem) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "problem-btn";
    btn.textContent = problem;
    btn.onclick = () => selectProblem(problem);
    container.appendChild(btn);
  });
}

function filterProblems() {
  const category = document.getElementById("problemCategoryFilter").value;
  const filtered = category ? problemCategories[category] : [];
  renderProblems(filtered);
}

function selectProblem(problemText) {
  document.getElementById("selectedProblem").textContent = problemText;
  document.getElementById("problemRaw").value = problemText;
}

function updateSelectedProblem() {
  const customProblem = document.getElementById("problemRaw").value.trim();
  if (customProblem) {
    document.getElementById("selectedProblem").textContent = customProblem.substring(0, 50) + (customProblem.length > 50 ? "..." : "");
  }
}

function renderTopics(topicsToShow) {
  const container = document.getElementById("topicsList");
  container.innerHTML = "";
  
  topicsToShow.forEach((topic, index) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "topic-btn";
    btn.textContent = topic.name;
    btn.onclick = () => selectTopic(topic.name);
    container.appendChild(btn);
  });
}

function filterTopics() {
  const category = document.getElementById("categoryFilter").value;
  const filtered = category ? topics.filter(t => t.category === category) : topics;
  renderTopics(filtered);
}

function selectTopic(topicName) {
  document.getElementById("selectedTopic").value = topicName;
}

function toPage0() {
  window.currentPage = 0;
  showPage(0);
  renderTopics(topics);
  updateProgress(0);
  saveState();
}

function toPage1() {
  window.currentPage = 1;
  showPage(1);
  updateProgress(1);
  saveState();
}

function toPage2() {
  const customRole = document.getElementById("customRole").value.trim();
  const selectedRole = document.getElementById("selectedRole").textContent;
  const problem = document.getElementById("problemRaw").value.trim();

  if ((selectedRole === "None" && !customRole) || !problem) {
    alert("Please select or enter a role and describe a problem.");
    return;
  }

  // Update selected role if custom role was entered
  if (customRole) {
    updateSelectedRole();
  }

  // Update selected problem if custom problem was entered
  if (!document.getElementById("selectedProblem").textContent.includes(problem.substring(0, 20))) {
    updateSelectedProblem();
  }

  window.currentPage = 2;
  showPage(2);
  updateProgress(2);
  saveState();
}

function toPage3() {
  const problemFinal = document.getElementById("problemFinal").value;

  if (problemFinal.length < 30) {
    alert("Write a clear and complete problem statement (at least 30 characters).");
    return;
  }

  window.currentPage = 3;
  showPage(3);
  updateProgress(3);
  saveState();
}

function provideProblemFeedback() {
  const problemFinal = document.getElementById("problemFinal").value.trim();
  const feedbackDiv = document.getElementById("statementFeedback");
  
  if (!problemFinal) {
    feedbackDiv.style.display = "none";
    return;
  }
  
  feedbackDiv.style.display = "block";
  let feedback = "";
  let isComplete = true;
  
  // Check for key components
  const hasContext = problemFinal.length > 15;
  const hasImpact = problemFinal.toLowerCase().includes("leads to") || 
                   problemFinal.toLowerCase().includes("results in") ||
                   problemFinal.toLowerCase().includes("causes") ||
                   problemFinal.toLowerCase().includes("affects");
  const hasLength = problemFinal.length >= 30;
  
  if (!hasLength) {
    feedback += "<p style='color: #e74c3c;'>⚠️ <strong>Too short:</strong> Add more detail to fully describe the problem and its impact.</p>";
    isComplete = false;
  }
  
  if (!hasImpact) {
    feedback += "<p style='color: #e67e22;'>ℹ️ <strong>Consider adding impact:</strong> Explain what consequence this problem leads to using 'which leads to,' 'results in,' or 'causes.'</p>";
    isComplete = false;
  }
  
  if (isComplete && hasLength && hasImpact) {
    feedback = "<p style='color: #27ae60;'><strong>✓ Strong statement!</strong> Your problem statement is clear and includes context, who is affected, the problem, and its impact.</p>";
    feedbackDiv.style.backgroundColor = "#d5f5e7";
    feedbackDiv.style.borderLeft = "4px solid #27ae60";
  } else {
    feedbackDiv.style.backgroundColor = "#fef5e7";
    feedbackDiv.style.borderLeft = "4px solid #f39c12";
  }
  
  feedbackDiv.innerHTML = feedback;
}

function getSubscaleScore(groupName, count) {
  let sum = 0;
  for (let i = 1; i <= count; i++) {
    const selected = document.querySelector(`input[name="${groupName}_${i}"]:checked`);
    sum += selected ? Number(selected.value) : 0;
  }
  return sum;
}

function calculateFeasibilityScore() {
  const scores = {
    access: getSubscaleScore("access", 6),
    scope: getSubscaleScore("scope", 6),
    clarity: getSubscaleScore("clarity", 6),
    logistics: getSubscaleScore("logistics", 6)
  };

  document.getElementById("accessScore").textContent = `${scores.access}/30`;
  document.getElementById("scopeScore").textContent = `${scores.scope}/30`;
  document.getElementById("clarityScore").textContent = `${scores.clarity}/30`;
  document.getElementById("logisticsScore").textContent = `${scores.logistics}/30`;

  const total = scores.access + scores.scope + scores.clarity + scores.logistics;
  const maxTotal = 6 * 4 * 5; // 120
  document.getElementById("totalScore").textContent = total;
  document.getElementById("maxScore").textContent = maxTotal;

  const percent = maxTotal > 0 ? Math.round((total / maxTotal) * 100) : 0;
  let rating = "Not evaluated";

  if (percent >= 80) {
    rating = "Ready to move forward";
  } else if (percent >= 60) {
    rating = "Needs refinement";
  } else {
    rating = "Not feasible";
  }

  document.getElementById("totalRating").textContent = `${rating} (${percent}%)`;
  return { total, maxTotal, percent, rating };
}

function showResults() {
  const measurementCategory = document.getElementById("measurementCategory").value.trim();
  const measurementPlan = document.getElementById("measurementPlan").value.trim();

  if (!measurementCategory && !measurementPlan) {
    alert("Please select a measurement category or describe what you would measure.");
    return;
  }

  const { total, maxTotal, percent, rating } = calculateFeasibilityScore();

  let feedback = "";
  let feedbackStyle = "";

  if (percent >= 80) {
    feedback = "<p><strong style='color: #27ae60;'>✓ Ready to move forward!</strong></p>";
    feedback += "<p>Your feasibility is strong; the subscales and measurement plan are well-aligned.</p>";
    feedbackStyle = "background-color: #d5f5e7; border-left: 4px solid #27ae60;";
  } else if (percent >= 60) {
    feedback = "<p><strong style='color: #f39c12;'>⚠ Needs refinement</strong></p>";
    feedback += "<p>Your feasibility is moderate. Reinforce missing areas and specify outcomes more clearly before proceeding.</p>";
    feedbackStyle = "background-color: #fef5e7; border-left: 4px solid #f39c12;";
  } else {
    feedback = "<p><strong style='color: #e74c3c;'>✗ Not feasible right now</strong></p>";
    feedback += "<p>Your feasibility indicates major gaps in access, scope, clarity, or logistics. Revisit the problem or design before continuing.</p>";
    feedbackStyle = "background-color: #fadbd8; border-left: 4px solid #e74c3c;";
  }

  const feedbackDiv = document.getElementById("feedback");
  feedbackDiv.innerHTML = feedback;
  feedbackDiv.style.padding = "12px";
  feedbackDiv.style.borderRadius = "4px";
  feedbackDiv.style.marginBottom = "20px";
  feedbackDiv.style.cssText = feedbackStyle;

  window.currentPage = 4;
  showPage(4);
  updateProgress(4);
  saveState();
}

function generateFinalOutput() {
  const btn = document.getElementById("generateOutputBtn");
  const summaryText = document.getElementById("summaryText");
  
  // Show loading state
  btn.textContent = "Generating...";
  btn.disabled = true;
  summaryText.textContent = "Analyzing your responses...";
  summaryText.style.color = "#3498db";
  
  // Simulate processing time (optional, for user feedback)
  setTimeout(() => {
    const { total, maxTotal, percent, rating } = calculateFeasibilityScore();
    fillFinalSummary({ total, maxTotal, percent, rating });
    
    // Reset button
    btn.textContent = "Generate Output";
    btn.disabled = false;
    summaryText.style.color = "#2c3e50";
  }, 500);
}

function fillFinalSummary(scoreObj) {
  const customRole = document.getElementById("customRole").value.trim();
  const selectedRole = document.getElementById("selectedRole").textContent;
  const role = customRole || selectedRole || "(not specified)";
  const selectedTopic = document.getElementById("selectedTopic").value || "(not selected)";
  const problem = document.getElementById("problemFinal").value.trim() || "(not specified)";
  const measurementCategory = document.getElementById("measurementCategory").value.trim();
  const measurementPlan = document.getElementById("measurementPlan").value.trim();
  const measurementSummary = measurementCategory ? `${measurementCategory}${measurementPlan ? ": " + measurementPlan : ""}` : (measurementPlan || "(not specified)");

  const total = scoreObj?.total ?? 0;
  const maxTotal = scoreObj?.maxTotal ?? 120;
  const rating = scoreObj?.rating || "Not evaluated";

  const summary = `Topic: ${selectedTopic}\nRole: ${role}\nProblem: ${problem}\nMeasurement: ${measurementSummary}\nFeasibility: ${total}/${maxTotal} (${rating})`;

  document.getElementById("summaryText").textContent = summary;
}

function copyPrompt(promptType) {
  const summary = getSummaryText();
  let prompt = "";

  switch (promptType) {
    case 1:
      prompt = `Help me refine this problem statement for a master's thesis:\n\n${summary}\n\nProvide a more precise and researchable version.`;
      break;
    case 2:
      prompt = `Based on this research idea, suggest 3-5 potential research questions:\n\n${summary}\n\nMake them specific and measurable.`;
      break;
    case 3:
      prompt = `Identify the key independent and dependent variables for this study:\n\n${summary}\n\nExplain how they relate to the problem.`;
      break;
    case 4:
      prompt = `Assess the feasibility of this research project:\n\n${summary}\n\nProvide recommendations for improving feasibility if needed.`;
      break;
    case 5:
      prompt = `Suggest an appropriate research methodology for this study:\n\n${summary}\n\nInclude data collection methods and analysis techniques.`;
      break;
    case 6:
      prompt = `Provide feedback on this research topic selection:\n\n${summary}\n\nIs this suitable for a master's thesis? Any suggestions for improvement?`;
      break;
    default:
      prompt = `Review this research project summary:\n\n${summary}`;
  }

  // Display the prompt in the preview box
  document.getElementById("promptPreview").value = prompt;

  navigator.clipboard.writeText(prompt).then(() => {
    alert(`Prompt ${promptType} copied! Paste it into Gemini for feedback.`);
  }).catch(err => {
    console.error('Failed to copy: ', err);
    // Fallback for older browsers
    const textArea = document.createElement("textarea");
    textArea.value = prompt;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
    alert(`Prompt ${promptType} copied! Paste it into Gemini for feedback.`);
  });
}

function getSummaryText() {
  let summary = document.getElementById("summaryText").textContent.trim();
  
  // If summary is empty or still shows placeholder, generate it
  if (!summary || summary.includes("Click") || summary.includes("Analyzing")) {
    const { total, maxTotal, percent, rating } = calculateFeasibilityScore();
    const customRole = document.getElementById("customRole").value.trim();
    const selectedRole = document.getElementById("selectedRole").textContent;
    const role = customRole || selectedRole || "(not specified)";
    const selectedTopic = document.getElementById("selectedTopic").value || "(not selected)";
    const problem = document.getElementById("problemFinal").value.trim() || "(not specified)";
    
    let measurementSummary = "(not specified)";
    if (measurements.length > 0) {
      measurementSummary = measurements.map(m => `${m.category}: ${m.plan}`).join("; ");
    }

    summary = `Topic: ${selectedTopic}\nRole: ${role}\nProblem: ${problem}\nMeasurement: ${measurementSummary}\nFeasibility: ${total}/${maxTotal} (${rating})`;
  }
  
  return summary;
}

function getExportContent() {
  const selectedTopic = document.getElementById("selectedTopic").value || "(not selected)";
  const customRole = document.getElementById("customRole").value.trim();
  const selectedRole = document.getElementById("selectedRole").textContent;
  const role = customRole || selectedRole || "(not specified)";
  const problem = document.getElementById("problemFinal").value.trim() || "(not specified)";
  const score = calculateFeasibilityScore();
  
  let measurementSummary = "(not specified)";
  if (measurements.length > 0) {
    measurementSummary = measurements.map(m => `${m.category}: ${m.plan}`).join("; ");
  }

  return {
    topic: selectedTopic,
    role: role,
    problem: problem,
    measurement: measurementSummary,
    feasibility: `${score.total}/${score.maxTotal}`,
    rating: score.rating
  };
}

function exportToWord() {
  const data = getExportContent();
  const content = `Project Summary\n\nTopic: ${data.topic}\nRole: ${data.role}\nProblem: ${data.problem}\nMeasurement Plan: ${data.measurement}\nFeasibility Score: ${data.feasibility}\nRating: ${data.rating}`;
  const blob = new Blob([content], { type: "application/msword" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "ResearchProjectSummary.doc";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function exportToExcel() {
  const data = getExportContent();
  const rows = [
    ["Field", "Value"],
    ["Topic", data.topic],
    ["Role", data.role],
    ["Problem", data.problem],
    ["Measurement Plan", data.measurement],
    ["Feasibility Score", data.feasibility],
    ["Rating", data.rating]
  ];
  const csv = rows.map(row => row.map(cell => `"${String(cell).replace(/"/g, '""')}"`).join(",")).join("\r\n");
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "ResearchProjectSummary.csv";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function printResults() {
  const data = getExportContent();
  const printWindow = window.open("", "", "width=900,height=700");
  const html = `<!DOCTYPE html>
<html>
<head>
  <title>Project Summary</title>
  <style>body { font-family: Arial, sans-serif; margin: 24px; }</style>
</head>
<body>
  <h1>Research Project Summary</h1>
  <p><strong>Topic:</strong> ${data.topic}</p>
  <p><strong>Role:</strong> ${data.role}</p>
  <p><strong>Problem Statement:</strong><br>${data.problem}</p>
  <p><strong>Measurement Plan:</strong> ${data.measurement}</p>
  <p><strong>Feasibility Score:</strong> ${data.feasibility}</p>
  <p><strong>Rating:</strong> ${data.rating}</p>
</body>
</html>`;
  printWindow.document.write(html);
  printWindow.document.close();
  printWindow.focus();
  printWindow.print();
  printWindow.close();
}

function exportToPdf() {
  const data = getExportContent();
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF({ unit: 'pt', format: 'a4' });
  let y = 40;

  doc.setFontSize(18);
  doc.text('Research Project Summary', 40, y);
  y += 26;

  doc.setFontSize(12);
  ['Topic', 'Role', 'Problem Statement', 'Measurement Plan', 'Feasibility Score', 'Rating'].forEach(label => {
    const text = label === 'Topic' ? data.topic : (label === 'Role' ? data.role : (label === 'Problem Statement' ? data.problem : (label === 'Measurement Plan' ? data.measurement : (label === 'Feasibility Score' ? data.feasibility : data.rating))));
    const wrapped = doc.splitTextToSize(`${label}: ${text}`, 520);
    doc.text(wrapped, 40, y);
    y += wrapped.length * 14 + 6;
  });

  doc.save('ResearchProjectSummary.pdf');
}

function emailResults() {
  const data = getExportContent();
  const subject = encodeURIComponent("Research Project Summary");
  const bodyLines = [
    `Topic: ${data.topic}`,
    `Role: ${data.role}`,
    `Problem: ${data.problem}`,
    `Measurement Plan: ${data.measurement}`,
    `Feasibility Score: ${data.feasibility}`,
    `Rating: ${data.rating}`
  ];
  const body = encodeURIComponent(bodyLines.join("\n"));
  window.location.href = `mailto:?subject=${subject}&body=${body}`;
}

function resetWorkspace() {
  if (!confirm('Reset all inputs and clear saved state?')) return;
  localStorage.removeItem('researchBuilderState');
  document.getElementById('selectedTopic').value = '';
  document.getElementById('categoryFilter').value = '';
  document.getElementById('selectedRole').textContent = 'None';
  document.getElementById('customRole').value = '';
  document.getElementById('context').value = '';
  document.getElementById('problemCategoryFilter').value = '';
  document.getElementById('problemRaw').value = '';
  document.getElementById('selectedProblem').textContent = 'None';
  document.getElementById('problemFinal').value = '';
  measurements = [];
  displayMeasurements();
  document.querySelectorAll('.likert-table input[type="radio"]').forEach(r => r.checked = false);
  showPage(0);
  updateProgress(0);
  saveState();
}

function saveToServer() {
  // Optional backend integration point:
  // POST summary JSON to your server endpoint as desired.
  // Example (commented, supply actual URL):
  //
  // fetch('https://yourserver.example.com/api/saveProject', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify(getExportContent())
  // })
  // .then(r => r.json())
  // .then(() => alert('Saved to server successfully!'))
  // .catch(err => console.error('Server save failed', err));
  
  alert('Backend save not configured (see saveToServer stub).');
}

function updateProgress(step) {
  const currentStep = Math.max(0, Math.min(step, 4));
  document.getElementById("currentStep").textContent = currentStep;
  const percent = Math.round((currentStep / 4) * 100);
  document.getElementById("progressFill").style.width = `${percent}%`;
}

function saveState() {
  const state = {
    selectedTopic: document.getElementById("selectedTopic").value,
    categoryFilter: document.getElementById("categoryFilter").value,
    selectedRole: document.getElementById("selectedRole").textContent,
    customRole: document.getElementById("customRole").value,
    context: document.getElementById("context").value,
    problemCategoryFilter: document.getElementById("problemCategoryFilter").value,
    problemRaw: document.getElementById("problemRaw").value,
    selectedProblem: document.getElementById("selectedProblem").textContent,
    problemFinal: document.getElementById("problemFinal").value,
    measurements: [...measurements],
    currentPage: window.currentPage || 0
  };

  const likertInputs = Array.from(document.querySelectorAll(".likert-table input[type='radio']"));
  state.likert = likertInputs.map(input => ({ name: input.name, value: input.checked ? input.value : null }));

  localStorage.setItem("researchBuilderState", JSON.stringify(state));
}

function loadState() {
  try {
    const raw = localStorage.getItem("researchBuilderState");
    if (!raw) return;
    const state = JSON.parse(raw);

    if (state.categoryFilter) {
      document.getElementById("categoryFilter").value = state.categoryFilter;
      filterTopics();
    }

    if (state.selectedTopic) document.getElementById("selectedTopic").value = state.selectedTopic;
    if (state.customRole) document.getElementById("customRole").value = state.customRole;
    if (state.selectedRole) document.getElementById("selectedRole").textContent = state.selectedRole;
    if (state.context) document.getElementById("context").value = state.context;
    if (state.problemCategoryFilter) {
      document.getElementById("problemCategoryFilter").value = state.problemCategoryFilter;
      filterProblems();
    }
    if (state.problemRaw) document.getElementById("problemRaw").value = state.problemRaw;
    if (state.selectedProblem) document.getElementById("selectedProblem").textContent = state.selectedProblem;
    if (state.problemFinal) document.getElementById("problemFinal").value = state.problemFinal;
    if (state.measurements && Array.isArray(state.measurements)) {
      measurements = [...state.measurements];
      displayMeasurements();
    }

    if (state.likert && Array.isArray(state.likert)) {
      state.likert.forEach(item => {
        if (!item.value) return;
        const input = document.querySelector(`input[name="${item.name}"][value="${item.value}"]`);
        if (input) input.checked = true;
      });
    }

    const currentPage = Number(state.currentPage || 0);
    showPage(currentPage);
    updateProgress(currentPage);

  } catch (err) {
    console.error("Failed to restore saved state:", err);
  }
}

// Initialize on page load
document.addEventListener("DOMContentLoaded", function() {
  renderTopics(topics);
  renderRoles();
  
  // Populate problem category dropdown
  const categoryFilter = document.getElementById("problemCategoryFilter");
  Object.keys(problemCategories).forEach((category) => {
    const option = document.createElement("option");
    option.value = category;
    option.textContent = category;
    categoryFilter.appendChild(option);
  });
  
  // Listen for custom role input changes
  document.getElementById("customRole").addEventListener("input", function() {
    updateSelectedRole();
  });
  
  // Listen for custom problem input changes
  document.getElementById("problemRaw").addEventListener("input", function() {
    updateSelectedProblem();
    saveState();
  });
  
  // Listen for problem statement feedback
  document.getElementById("problemFinal").addEventListener("input", function() {
    provideProblemFeedback();
    saveState();
  });

  // track category filters + context + measurement
  ["categoryFilter", "context", "problemCategoryFilter"].forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener("change", saveState);
      el.addEventListener("input", saveState);
    }
  });
  
  // Listen for feasibility likert input changes
  const likertInputs = document.querySelectorAll(".likert-table input[type='radio']");
  likertInputs.forEach(input => {
    input.addEventListener("change", function() {
      calculateFeasibilityScore();
      saveState();
    });
  });

  loadState();
  displayMeasurements(); // Initialize measurements display
  updateProgress(window.currentPage || 0);
});