const categoryColors = {
  Layout: "#7952b3",
  Spacing: "#0ea5e9",
  Typography: "#f59e0b",
  Color: "#ef4444",
  Flex: "#10b981",
  Components: "#6366f1",
};

const classes = [
  { cat: "Layout", name: ".container", desc: "Responsive fixed-width wrapper, centers content.", ex: '<div class="container">…</div>' },
  { cat: "Layout", name: ".container-fluid", desc: "Full-width wrapper spanning the viewport.", ex: '<div class="container-fluid">…</div>' },
  { cat: "Layout", name: ".row", desc: "Horizontal grid wrapper for columns.", ex: '<div class="row">…</div>' },
  { cat: "Layout", name: ".col / .col-6", desc: "Grid column; number = 1–12 width units.", ex: '<div class="col-6">…</div>' },
  { cat: "Flex", name: ".d-flex", desc: "Sets display:flex on the element.", ex: '<div class="d-flex">…</div>' },
  { cat: "Flex", name: ".justify-content-center", desc: "Centers flex children on the main axis.", ex: '<div class="d-flex justify-content-center">' },
  { cat: "Flex", name: ".align-items-center", desc: "Centers flex children on the cross axis.", ex: '<div class="d-flex align-items-center">' },
  { cat: "Flex", name: ".flex-wrap", desc: "Allows flex items to wrap onto new lines.", ex: '<div class="d-flex flex-wrap">' },
  { cat: "Spacing", name: ".m-3 / .p-3", desc: "Margin / padding, scale 0–5 (and 'auto').", ex: '<div class="p-3 m-2">…</div>' },
  { cat: "Spacing", name: ".mt-2 / .mb-4", desc: "Directional margin: top, bottom, start, end.", ex: '<div class="mt-2 mb-4">…</div>' },
  { cat: "Spacing", name: ".gap-3", desc: "Gap between flex/grid children.", ex: '<div class="d-flex gap-3">…</div>' },
  { cat: "Typography", name: ".text-center", desc: "Centers text horizontally.", ex: '<p class="text-center">…</p>' },
  { cat: "Typography", name: ".fw-bold", desc: "Sets font-weight: bold.", ex: '<span class="fw-bold">…</span>' },
  { cat: "Typography", name: ".fs-4", desc: "Font-size scale, 1 (largest) to 6 (smallest).", ex: '<h2 class="fs-4">…</h2>' },
  { cat: "Typography", name: ".text-uppercase", desc: "Transforms text to uppercase.", ex: '<span class="text-uppercase">…</span>' },
  { cat: "Color", name: ".text-primary", desc: "Applies the theme's primary color to text.", ex: '<p class="text-primary">…</p>' },
  { cat: "Color", name: ".bg-light", desc: "Light gray background color.", ex: '<div class="bg-light">…</div>' },
  { cat: "Color", name: ".bg-dark", desc: "Dark background, usually paired with .text-white.", ex: '<div class="bg-dark text-white">' },
  { cat: "Components", name: ".btn / .btn-primary", desc: "Base button style + a color variant.", ex: '<button class="btn btn-primary">OK</button>' },
  { cat: "Components", name: ".card", desc: "Bordered content container with rounded corners.", ex: '<div class="card"><div class="card-body">…</div></div>' },
  { cat: "Components", name: ".navbar", desc: "Responsive navigation header container.", ex: '<nav class="navbar">…</nav>' },
  { cat: "Components", name: ".badge", desc: "Small pill-shaped count/status indicator.", ex: '<span class="badge bg-danger">3</span>' },
  { cat: "Layout", name: ".d-none / .d-md-block", desc: "Hide/show elements per breakpoint.", ex: '<div class="d-none d-md-block">' },
  { cat: "Spacing", name: ".w-100 / .h-100", desc: "Sets width/height to 100% of the parent.", ex: '<img class="w-100" />' },
];

const tbody = document.getElementById("tableBody");
const search = document.getElementById("search");
const emptyState = document.getElementById("emptyState");

function render(list) {
  tbody.innerHTML = list
    .map(
      (c) => `
      <tr>
        <td data-label="Category"><span class="cat-badge" style="background:${categoryColors[c.cat]}">${c.cat}</span></td>
        <td data-label="Class Name"><code>${c.name}</code></td>
        <td data-label="Description">${c.desc}</td>
        <td data-label="Example"><code>${escapeHtml(c.ex)}</code></td>
      </tr>`
    )
    .join("");
  emptyState.classList.toggle("hidden", list.length > 0);
  document.getElementById("classTable").classList.toggle("hidden", list.length === 0);
}

function escapeHtml(str) {
  return str.replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

search.addEventListener("input", () => {
  const q = search.value.trim().toLowerCase();
  const filtered = classes.filter(
    (c) =>
      c.name.toLowerCase().includes(q) ||
      c.cat.toLowerCase().includes(q) ||
      c.desc.toLowerCase().includes(q)
  );
  render(filtered);
});

render(classes);
