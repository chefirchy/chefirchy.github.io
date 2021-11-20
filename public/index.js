
const loginBtn = document.querySelector("#login-button");
const form = document.forms["form"];
const main = document.querySelector('main')
const wrapper = document.querySelector('.wrapper')

const insert = (num) =>
  (document.form.textview.value = document.form.textview.value + num);

const equal = () => {
  const ere = document.form.textview.value;
  ere
    ? (document.form.textview.value = eval(ere))
    : (document.form.textview.value = "");
};

const c = () => (document.form.textview.value = "");

const back = () => {
  const ere = document.form.textview.value;
  document.form.textview.value = ere.substring(0, ere.length - 1);
};
// loginBtn.addEventListener('click', (e)=> {

// })
async function loginUser(username, password) {
  console.log('here')
  const response = await fetch("/api/users", {
    method: "POST",
    headers: { "Accept": "application/json", "Content-Type": "application/json" },
    body: JSON.stringify({
      username:username,
      password:password,
    }),  
  });
  if( response.status === 200) {
    console.log('in if')
    main.classList.remove('hidden')
    wrapper.classList.add('hidden')
  }
};

document.forms["form"].addEventListener("submit", (e) => {
  e.preventDefault();

  // $("form").fadeOut(500);
  wrapper.classList.add("form-success");
  const username = form.elements["username"].value;
  const password = form.elements["password"].value;
  // main.classList.remove('hidden')
  // wrapper.classList.add('hidden')

  loginUser(username, password);
});

