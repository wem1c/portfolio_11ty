const githubAccount = "wem1c";

module.exports = async function () {
  const repoURL = `https://api.github.com/users/${githubAccount}/repos?sort=updated`;
  let result = [];

  if (process.env.CURR_ENV === "dev") {
    console.log("Dev env detected; skipping fetch.");
    return result;
  }

  console.log(`Fetching GitHub repositories for ${githubAccount}`);
  try {
    console.log(`Fetching ${repoURL}`);
    let response = await fetch(repoURL);
    let data = await response.json();

    if (response.status == 200) {
      console.log(`Found ${data.length} repos`);

      console.log(`Filtering out archived repos`);
      let filtered = data.filter((repo, _) => repo.archived === false);
      console.log(`Found ${filtered.length} non-archived repos`);

      console.log("Returning newest 6 repos.");
      result = filtered.slice(0, 6);
    }
  } catch (error) {
    console.error(`Error: ${error}`);
    response &&
      console.error(`\nError: ${response.status} - ${response.statusText}\n`);
  }

  return result;
};
