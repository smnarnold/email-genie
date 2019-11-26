class EmailGenie {
  constructor(el, settings) {
    this.dom = {
      el,
    };

    if (typeof el === 'string') {
      this.dom.el = document.querySelector(el);
    } else if (el.jquery) {
      this.dom.el = el[0];
    }

    if (this.dom.el === null) {
      throw new Error('EmailGenie: No input defined');
    }

    this.originalSettings = {
      id: `emailGenie-${this.uuidv4}`,
      domains: ['gmail.com', 'outlook.com', 'hotmail.com', 'msn.com', 'live.com', 'googlemail.com', 'yahoo.com', 'me.com', 'icloud.com'],
      overrideDomains: false,
      insert: 'afterend'
    };

    if (settings && settings.domains) {
      if (settings.overrideDomains) {
        settings.domains = settings.domains;
      } else {
        settings.domains = [...this.originalSettings.domains, ...settings.domains];
      }
    }

    this.settings = { ...this.originalSettings, ...settings };

    this.init();
  }

  init() {
    this.createDataList();
    this.bindEvents();
  }

  createDataList() {
    this.dom.el.setAttribute('list', this.settings.id);
    const list = `<datalist id="${this.settings.id}"></datalist>`;
    if (this.settings.insert === 'documentend') {
      document.body.insertAdjacentHTML('beforeend', list);
    } else {
      this.dom.el.insertAdjacentHTML(this.settings.insert, list);
    }
    this.dom.list = document.querySelector(`#${this.settings.id}`);
  }

  bindEvents() {
    this.dom.el.addEventListener('keyup', e => this.handleKeyup(e));
  }

  handleKeyup(e) {
    if (!this.dom.el.value.includes('@')) return;
    this.user = this.dom.el.value.substring(0, this.dom.el.value.lastIndexOf('@'));
    this.domain = this.dom.el.value.substring(this.dom.el.value.lastIndexOf('@') + 1);
    let suggestions = this.settings.domains.filter(domain => domain.startsWith(this.domain));
    let list = '';
    suggestions.slice(0, 3).forEach(suggestion => list += `<option value="${this.user}@${suggestion}">`);
    this.dom.list.innerHTML = list;
  }

  get uuidv4() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
      (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
  }
}

export default EmailGenie;