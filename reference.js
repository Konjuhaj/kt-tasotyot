const files = [
  "0254fc84-5f7c-48e7-a1aa-dd36c5a1ecae.jpeg",
  "1c91913a-28bf-4d38-be9b-b3907fa88152.jpeg",
  "2b590d4b-257f-40b3-b2c1-a60c9d942f28.jpeg",
  "31fbcd49-7cf7-4feb-82bf-d8b41f001d20.jpeg",
  "4547f775-646c-4d37-8d99-86707bdd40c1.jpeg",
  "50cfa79d-b917-4cdc-a698-c35e4c9dff62.jpeg",
  "53208b35-48df-47e0-9154-5662394f1e37.jpeg",
  "56768033-78e2-4f38-80f0-1ab22f44c2ea.jpeg",
  "6131f9ef-0271-41c4-bd53-52bed85c9163.jpeg",
  "7c8e794c-7755-4aeb-b483-51212949557e.jpeg",
  "8bb10bc3-7d54-48bb-a26c-0ab1c858bae4.jpeg",
  "8c305b73-1e15-4214-980a-ba3b2dbe3249.jpeg",
  "IMG_0768.jpeg",
  "IMG_7701.jpeg",
  "a34bb3cd-851d-4ccd-8cdd-da458e485f0f.jpeg",
  "c433734b-cc39-4c0f-9f3e-aae355640e1d.jpeg",
  "d97fa424-3b3b-42c1-92de-062bfd3476a2.jpeg",
  "e5d65f3c-9679-474e-9ea3-c326802f5a46.jpeg",
  "ea0e8c63-dd47-49ee-99e2-13e146805a5b.jpeg",
  "fb50e8b0-ff68-44c1-b22b-74e70dd1df58.jpeg",
  "fbbe1018-8bf2-4b24-900d-497123c80d44.jpeg",
];

const wrapper = document.querySelector(".wrapper");

let i = 0;

files.forEach((file) => {
  const div = document.createElement("div");
  const a = document.createElement("a");
  const img = document.createElement("img");
  img.src = "../img/references/" + file;
  console.log(img.getAttribute.src);
  a.appendChild(img);
  div.appendChild(a);
  wrapper.appendChild(div);
  i = i + 1;
});
