const bel = require('bel')

module.exports = function () {
  return bel`<section class="options-content__whitelist">
    <h2 class="menu-title">Whitelisted Sites</h2>
    <p class="menu-paragraph">These sites will not be enhanced by Privacy Protection</p>
    <ul class="default-list">
      ${listItems(this.model.list)}
      ${addToWhitelist()}
    </ul>
  </section>`

  function listItems (list) {
    if (list.length > 0) {
      var i = 0
      return bel`${list.map((dom) => bel`
      <li>
        <a class="link-secondary" href="https://${dom}">${dom}</a>
        <button class="remove pull-right js-whitelist-remove" data-item="${i++}">×</button>
      </li>`)}`
    }
    return bel`<li>No whitelisted sites.</li>`
  }

  function addToWhitelist () {
    return bel`<li>
      <p class="whitelist-show-add js-whitelist-show-add">
        <a href="#">Add site to whitelist</a>
      </p> 
      <input class="is-hidden whitelist-url float-left js-whitelist-url" type="text" placeholder="Enter URL">
      <div class="is-hidden whitelist-add is-disabled float-right js-whitelist-add">Add to Whitelist</div>
    </li>`
  }
}
