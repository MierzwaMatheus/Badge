const linksSocialMedia = {
  github: 'MierzwaMatheus',
  facebook: 'matheus.mierzwa',
  instagram: 'mierzwa.brow'
}

function changeSocialMediaLinks() {
  for (let li of changeSocialMediaLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}