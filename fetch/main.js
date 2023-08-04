async function loadUsers() {
  const res = fetch('https://pokeapi.co/api/v2/pokemon/150')
    .then((res) => {
      if (res.ok) {
        const json = res.json();
        console.log('Res', json);
        console.log('Response', res.ok);
      }
    })
    .catch(() => {
      throw new Error('New Error', res.status);
    });
}
loadUsers();
