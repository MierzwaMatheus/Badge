const linksSocialMedia = {
  github: 'mierzwamatheus',
  facebook: 'matheus.mierzwa',
  instagram: 'mierzwa.brow'
}

function changeSocialMediaLinks() {
  for (let li of changeSocialMediaLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}

function getGitHubUserInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
  .then(response => response.json())
  .then(data => {
    userPhoto.src = `${data.avatar_url}`
    userName.textContent = data.name
    userGithub.href = data.html_url
    userBio.textContent = data.bio
    userLogin.textContent = data.login

  }) 

}

getGitHubUserInfos()