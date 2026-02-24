const jobs = [
  {
    id: 1,
    company: "Mobile First Corp",
    title: "React Native Developer",
    location: "Remote",
    type: "Full-time",
    salary: "$130,000 - $175,000",
    description: "Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide."
  },
  {
    id: 2,
    company: "WebFlow Agency",
    title: "Web Designer & Developer",
    location: "Los Angeles, CA",
    type: "Part-time",
    salary: "$80,000 - $120,000",
    description: "Create stunning web experiences for high-profile clients. Must have portfolio and experience with modern web design trends."
  },
  {
    id: 3,
    company: "DataViz Solutions",
    title: "Data Visualization Specialist",
    location: "Boston, MA",
    type: "Full-time",
    salary: "$125,000 - $165,000",
    description: "Transform complex data into compelling visualizations. Required skills: D3.js, React, and strong analytical thinking."
  },
  {
    id: 4,
    company: "CloudFirst Inc",
    title: "Backend Developer",
    location: "Seattle, WA",
    type: "Full-time",
    salary: "$140,000 - $190,000",
    description: "Design and maintain scalable backend systems using Python and AWS. Work with modern DevOps practices and cloud infrastructure."
  },
  {
    id: 5,
    company: "Innovation Labs",
    title: "UI/UX Engineer",
    location: "Austin, TX",
    type: "Full-time",
    salary: "$110,000 - $150,000",
    description: "Create beautiful and functional user interfaces for our suite of products. Strong design skills and frontend development expertise required."
  },
  {
    id: 6,
    company: "MegaCorp Solutions",
    title: "JavaScript Developer",
    location: "New York, NY",
    type: "Full-time",
    salary: "$130,000 - $170,00",
    description: "Build enterprise applications with JavaScript and modern frameworks. We offer competitive compensation, health insurance, and professional development opportunities."
  },
  {
    id: 7,
    company: "StartupXYZ",
    title: "Full Stack Engineer",
    location: "Remote",
    type: "Full-time",
    salary: "$120,000 - $160,000",
    description: "Join our fast-growing startup and work on our core platform. Experience with Node.js and React required. Great benefits and equity package included."
  },
  {
    id: 8,
    company: "TechCorp Industries",
    title: "Senior Frontend Developer",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$130,000 - $175,000",
    description: "We are looking for an experienced Frontend Developer to build scalable web applications using React and TypeScript. You will work with a talented team on cutting-edge projects."
  }
];

jobs.forEach(j => j.status = "none");

let activeTab = "all";

const jobsContainer = document.getElementById("jobsContainer");
const emptyState = document.getElementById("emptyState");

const totalCount = document.getElementById("totalCount");
const interviewCount = document.getElementById("interviewCount");
const rejectedCount = document.getElementById("rejectedCount");
const tabCount = document.getElementById("tabCount");

document.querySelectorAll(".tab").forEach(tab => {
  tab.addEventListener("click", () => {
    activeTab = tab.dataset.tab;

    document.querySelectorAll(".tab").forEach(t=>{
      t.classList.remove("tab-active","text-primary","border-primary");
    });

    tab.classList.add("tab-active","text-primary","border-primary");

    render();
  });
});

function trashIconSvg(){
  return `
    <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M11.5 2H9V1.5C9 1.10217 8.84192 0.720703 8.56067 0.439331C8.2793 0.158081 7.89783 0 7.5 0H4.5C4.10217 0 3.7207 0.158081 3.43933 0.439331C3.15808 0.720703 3 1.10217 3 1.5V2H0.5C0.367431 2 0.240234 2.05273 0.146484 2.14648C0.0527344 2.24023 0 2.36743 0 2.5C0 2.63257 0.0527344 2.75977 0.146484 2.85352C0.240234 2.94727 0.367431 3 0.5 3H1V12C1 12.2653 1.10535 12.5195 1.29285 12.7072C1.48047 12.8947 1.73474 13 2 13H10C10.2653 13 10.5195 12.8947 10.7072 12.7072C10.8947 12.5195 11 12.2653 11 12V3H11.5C11.6326 3 11.7598 2.94727 11.8535 2.85352C11.9473 2.75977 12 2.63257 12 2.5C12 2.36743 11.9473 2.24023 11.8535 2.14648C11.7598 2.05273 11.6326 2 11.5 2ZM4 1.5C4 1.36743 4.05273 1.24023 4.14648 1.14648C4.24023 1.05273 4.36743 1 4.5 1H7.5C7.63257 1 7.75977 1.05273 7.85352 1.14648C7.94727 1.24023 8 1.36743 8 1.5V2H4V1.5ZM10 12H2V3H10V12ZM5 5.5V9.5C5 9.63257 4.94727 9.75977 4.85352 9.85352C4.75977 9.94727 4.63257 10 4.5 10C4.36743 10 4.24023 9.94727 4.14648 9.85352C4.05273 9.75977 4 9.63257 4 9.5V5.5C4 5.36743 4.05273 5.24023 4.14648 5.14648C4.24023 5.05273 4.36743 5 4.5 5C4.63257 5 4.75977 5.05273 4.85352 5.14648C4.94727 5.24023 5 5.36743 5 5.5ZM8 5.5V9.5C8 9.63257 7.94727 9.75977 7.85352 9.85352C7.75977 9.94727 7.63257 10 7.5 10C7.36743 10 7.24023 9.94727 7.14648 9.85352C7.05273 9.75977 7 9.63257 7 9.5V5.5C7 5.36743 7.05273 5.24023 7.14648 5.14648C7.24023 5.05273 7.36743 5 7.5 5C7.63257 5 7.75977 5.05273 7.85352 5.14648C7.94727 5.24023 8 5.36743 8 5.5Z" fill="currentColor"/>
    </svg>
  `;
}

function render(){
  jobsContainer.innerHTML = "";

  const filtered = jobs.filter(job => {
    if(activeTab === "all") return true;
    return job.status === activeTab;
  });

  tabCount.textContent = `${filtered.length} jobs`;

  if(filtered.length === 0){
    emptyState.classList.remove("hidden");
  } else {
    emptyState.classList.add("hidden");
  }

  filtered.forEach(job => {
    const div = document.createElement("div");
    div.className = "card bg-base-100 shadow";

    const interviewActive = job.status === "interview" ? "bg-green-100 ring-1 ring-green-500 shadow-sm" : "";
    const rejectedActive = job.status === "rejected" ? "bg-red-100 ring-1 ring-red-500 shadow-sm" : "";

    div.innerHTML = `
      <div class="card-body">
        <div class="flex items-start gap-3">
          <div class="flex-1 min-w-0">
            <h3 class="font-bold">${job.company}</h3>
            <p class="text-sm opacity-70 font-normal">${job.title}</p>
            <p class="text-sm opacity-70">${job.location} • ${job.type} • ${job.salary}</p>

            <div class="mt-2">
              ${renderStatusPill(job.status)}
            </div>

            <p class="mt-3 text-sm opacity-80 leading-relaxed">${job.description}</p>

            <div class="flex gap-3 mt-4">
              <button class="px-4 py-2 border border-green-600 text-green-600 font-bold rounded-md ${interviewActive}" onclick="setStatus(${job.id},'interview')">Interview</button>
              <button class="px-4 py-2 border border-red-600 text-red-600 font-bold rounded-md ${rejectedActive}" onclick="setStatus(${job.id},'rejected')">Rejected</button>
            </div>
          </div>

          <button class="btn btn-ghost btn-sm text-slate-500 hover:text-slate-700" title="Delete job" aria-label="Delete job" onclick="deleteJob(${job.id})">
            ${trashIconSvg()}
          </button>
        </div>
      </div>
    `;

    jobsContainer.appendChild(div);
  });

  totalCount.textContent = jobs.length;
  interviewCount.textContent = jobs.filter(j=>j.status==="interview").length;
  rejectedCount.textContent = jobs.filter(j=>j.status==="rejected").length;
}

function renderStatusPill(status){
  if(status === "interview"){
    return `<span class="inline-flex items-center px-3 py-1 border border-green-600 text-green-600 font-semibold rounded-md uppercase tracking-wide text-xs bg-green-50">INTERVIEW</span>`;
  }
  if(status === "rejected"){
    return `<span class="inline-flex items-center px-3 py-1 border border-red-600 text-red-600 font-semibold rounded-md uppercase tracking-wide text-xs bg-red-50">REJECTED</span>`;
  }
  return `<span class="inline-flex items-center px-3 py-1 border border-slate-300 text-slate-600 font-semibold rounded-md uppercase tracking-wide text-xs bg-base-100">NOT APPLIED</span>`;
}

function setStatus(id,status){
  const job = jobs.find(j=>j.id===id);
  job.status = job.status === status ? "none" : status;
  render();
}

function deleteJob(id){
  const index = jobs.findIndex(j=>j.id===id);
  if(index >= 0) jobs.splice(index,1);
  render();
}

render();
