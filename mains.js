const links = {
  github: 'dumiense',
  youtube: 'youtube',
  facebook: 'facebook',
  instagram: 'mat.dumiense',
  twitter: 'twitter'
}

function changeSocialMediaLInks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${links[social]}`
  }
}

changeSocialMediaLInks()

function gatGitHubProfileInfos() {
  const url = `https://api.github.com/users/${links.github}`

  fetch(url)
    .then(Response => Response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}
gatGitHubProfileInfos()
