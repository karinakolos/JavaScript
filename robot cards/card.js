export function cardCreate({
  id,
  first_name,
  last_name,
  avatar,
  email,
  gender,
}) {
  return `<div class="col-3" data-id="${id}">
<div class="card">
  <img src="${avatar}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${first_name} ${last_name}</h5>
     <p class="card-text">${gender}</p>
    <p class="card-text">${email}</p>

    <a href="#" class="btn btn-primary">Перейти куда-нибудь</a>
  </div>
</div`;
}
